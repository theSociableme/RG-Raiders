"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateSourceCredAccounts = void 0;
const utils_1 = require("@raidguild/utils");
const bluebird_1 = __importDefault(require("bluebird"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const sourcecred_1 = require("sourcecred");
const hasura_sdk_1 = require("../../../lib/autogen/hasura-sdk");
const hasuraClient_1 = require("../../../lib/hasuraClient");
const rankHelpers_1 = require("../../../lib/rankHelpers");
const sourcecredLedger_1 = require("../../../lib/sourcecredLedger");
const xpHelpers_1 = require("../../../lib/xpHelpers");
const VALID_ACCOUNT_TYPES = [
    hasura_sdk_1.AccountType_Enum.Ethereum,
    hasura_sdk_1.AccountType_Enum.Discord,
    hasura_sdk_1.AccountType_Enum.Discourse,
    hasura_sdk_1.AccountType_Enum.Github,
    hasura_sdk_1.AccountType_Enum.Twitter,
];
const parseAlias = (alias) => {
    var _a;
    try {
        const addressParts = sourcecred_1.sourcecred.core.graph.NodeAddress.toParts(alias.address);
        const type = (_a = addressParts[1]) === null || _a === void 0 ? void 0 : _a.toUpperCase();
        if (VALID_ACCOUNT_TYPES.indexOf(type) < 0) {
            return null;
        }
        const identifier = addressParts[addressParts.length - 1];
        return {
            type,
            identifier,
        };
    }
    catch (e) {
        // eslint-disable-next-line no-console
        console.log('Unable to parse alias: ', { error: e.message, alias });
        return null;
    }
};
const migrateSourceCredAccounts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ledgerRes = yield sourcecredLedger_1.ledgerManager.reloadLedger();
    if (ledgerRes.error) {
        throw new Error(`Unable to load ledger: ${ledgerRes.error}`);
    }
    const force = req.query.force != null;
    console.log(`Updating players from sourcecred. Force-insert? ${force}`);
    const accountsData = yield (yield node_fetch_1.default(utils_1.Constants.SC_ACCOUNTS_FILE)).json();
    const accountOnConflict = {
        constraint: hasura_sdk_1.Player_Account_Constraint.AccountIdentifierTypeKey,
        update_columns: [],
    };
    const numWeeksInSeason = xpHelpers_1.getNumWeeksInSeason();
    const accountList = accountsData.accounts
        .filter((a) => a.account.identity.subtype === 'USER')
        .sort((a, b) => b.totalCred - a.totalCred)
        .map((a, index) => {
        var _a;
        const linkedAccounts = a.account.identity.aliases
            .map((alias) => parseAlias(alias))
            .filter(utils_1.isNotNullOrUndefined);
        const discordId = (_a = linkedAccounts.find(({ type }) => type === 'DISCORD')) === null || _a === void 0 ? void 0 : _a.identifier;
        const ethAddress = utils_1.getLatestEthAddress(a.account.identity);
        if (!ethAddress)
            return null;
        const rank = rankHelpers_1.computeRank(index);
        const userWeeklyCred = a.cred;
        const seasonXp = userWeeklyCred
            .slice(-numWeeksInSeason)
            .reduce((t, c) => t + c, 0);
        return {
            ethereum_address: ethAddress.toLowerCase(),
            totalXp: a.totalCred,
            seasonXp,
            rank,
            discordId,
            Accounts: {
                // Omit the discord account, as that is updated directly on the player table
                data: linkedAccounts.filter(({ type }) => type !== hasura_sdk_1.AccountType_Enum.Discord),
                on_conflict: accountOnConflict,
            },
        };
    })
        .filter(utils_1.isNotNullOrUndefined);
    try {
        const result = yield bluebird_1.default.map(accountList, (player) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f;
            const vars = {
                ethAddress: player.ethereum_address,
                rank: player.rank,
                totalXp: player.totalXp,
                seasonXp: player.seasonXp,
                discordId: player.discordId,
            };
            try {
                const updateResult = yield hasuraClient_1.client.UpdatePlayer(vars);
                let playerId;
                let affected = (_a = updateResult.update_player) === null || _a === void 0 ? void 0 : _a.affected_rows;
                if (affected === 0) {
                    if (!force) {
                        return player;
                    }
                    // 'force' indicates we should insert new players if they don't already exist.
                    const upsertResult = yield hasuraClient_1.client.InsertPlayers({
                        objects: [
                            {
                                username: player.ethereum_address,
                                ethereum_address: player.ethereum_address,
                                rank: player.rank,
                                total_xp: player.totalXp,
                                season_xp: player.seasonXp,
                            },
                        ],
                    });
                    affected = (_b = upsertResult.insert_player) === null || _b === void 0 ? void 0 : _b.affected_rows;
                    playerId = (_d = (_c = upsertResult.insert_player) === null || _c === void 0 ? void 0 : _c.returning[0]) === null || _d === void 0 ? void 0 : _d.id;
                }
                else {
                    playerId = (_f = (_e = updateResult.update_player) === null || _e === void 0 ? void 0 : _e.returning[0]) === null || _f === void 0 ? void 0 : _f.id;
                }
                if (affected && affected > 1) {
                    throw new Error('Multiple players updated incorrectly');
                }
                if (playerId) {
                    try {
                        yield hasuraClient_1.client.UpsertAccount({
                            objects: player.Accounts.data.map((account) => ({
                                player_id: playerId,
                                type: account.type,
                                identifier: account.identifier,
                            })),
                            on_conflict: accountOnConflict,
                        });
                    }
                    catch (accErr) {
                        console.log('Error updating accounts for Player', playerId, accErr, player.Accounts);
                    }
                }
            }
            catch (e) {
                console.warn('ERR! failed to update player', e);
                return player;
            }
            return undefined;
        }), { concurrency: 10 });
        const usersSkipped = result.filter(utils_1.isNotNullOrUndefined);
        res.json({
            numSkipped: usersSkipped.length,
            [force ? 'numInserted' : 'numUpdated']: accountList.length - usersSkipped.length,
        });
    }
    catch (e) {
        console.warn('Error migrating players/accounts', e.message);
        res.sendStatus(500);
    }
});
exports.migrateSourceCredAccounts = migrateSourceCredAccounts;
//# sourceMappingURL=handler.js.map