"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetXpCommand = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("@raidguild/utils");
const discord_1 = require("@typeit/discord");
const discord_js_1 = require("discord.js");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const sourcecred_1 = require("sourcecred");
const utils_2 = require("../../utils");
class GetXpCommand {
    getXp(message) {
        var _a, _b, _c;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let targetUserDiscordId = '';
            try {
                if (message.args.discordUser) {
                    targetUserDiscordId = utils_2.getDiscordId(message.args.discordUser);
                }
                else if ((_a = message.member) === null || _a === void 0 ? void 0 : _a.id) {
                    targetUserDiscordId = message.member.id;
                }
            }
            catch (e) {
                yield message.reply(`Could not recognize user ${message.args.discordUser}. Try \`!ac help\` if you need help.`);
                return;
            }
            if (targetUserDiscordId.trim().length === 0) {
                yield message.reply(`Could not recognize user. Try \`!ac help\` if you need help.`);
                return;
            }
            const discordUser = (_b = message.guild) === null || _b === void 0 ? void 0 : _b.members.cache.get(targetUserDiscordId);
            try {
                const accountsData = yield (yield node_fetch_1.default(utils_1.Constants.SC_ACCOUNTS_FILE)).json();
                const scAccount = accountsData.accounts.find((account) => filterAccount(account, targetUserDiscordId));
                if (scAccount != null) {
                    const userTotalCred = scAccount.totalCred;
                    const numWeeks = scAccount.cred.length;
                    const userWeeklyCred = scAccount.cred;
                    const variation = (100 *
                        (userWeeklyCred[numWeeks - 1] - userWeeklyCred[numWeeks - 2])) /
                        userWeeklyCred[numWeeks - 2];
                    const description = ((_c = message.member) === null || _c === void 0 ? void 0 : _c.id) === targetUserDiscordId
                        ? `${discordUser}, here is your XP progression in MetaGame`
                        : `Here is the XP progression of ${discordUser} in MetaGame`;
                    yield message.reply(new discord_js_1.MessageEmbed()
                        .setColor('#ff3864')
                        .setDescription(description)
                        .setTitle(`MetaGame XP`)
                        .setURL('https://xp.metagame.wtf/#/explorer')
                        .setTimestamp()
                        .setThumbnail('https://raw.githubusercontent.com/sourcecred/sourcecred/master/src/assets/logo/rasterized/logo_64.png')
                        .addFields({
                        name: 'Total',
                        value: `${Math.round(userTotalCred)} XP`,
                        inline: true,
                    }, {
                        name: 'Last week ',
                        value: `${userWeeklyCred[numWeeks - 1].toPrecision(3)} XP`,
                        inline: true,
                    }, {
                        name: 'Week before',
                        value: `${userWeeklyCred[numWeeks - 2].toPrecision(4)} XP`,
                        inline: true,
                    }, {
                        name: 'Weekly Change',
                        value: `${Math.round(variation)}%`,
                        inline: true,
                    })
                        .setFooter('Bot made by MetaFam', 'https://wiki.metagame.wtf/img/mg-crystal.png'));
                }
                else {
                    yield message.reply(`I couldn't find ${discordUser} in the ledger! Have you registered yet?`);
                }
            }
            catch (e) {
                yield utils_2.replyWithUnexpectedError(message);
            }
        });
    }
}
tslib_1.__decorate([
    discord_1.Command('!xp :discordUser'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], GetXpCommand.prototype, "getXp", null);
exports.GetXpCommand = GetXpCommand;
const filterAccount = (player, targetUserDiscordID) => {
    const { account: accountInfo } = player;
    // Ignore if the target isn't a USER
    if (accountInfo.identity.subtype !== 'USER')
        return false;
    const discordAliases = accountInfo.identity.aliases.filter((alias) => {
        const parts = sourcecred_1.sourcecred.core.graph.NodeAddress.toParts(alias.address);
        return parts.indexOf('discord') > 0;
    });
    if (discordAliases.length >= 1) {
        // Retrieve the Discord ID
        const discordId = discordAliases.find((discordAccount) => scAliasMatchesDiscordId(discordAccount, targetUserDiscordID));
        if (discordId !== undefined) {
            return accountInfo;
        }
    }
    return false;
};
const scAliasMatchesDiscordId = (discordAccount, targetUserDiscordID) => {
    const discordId = sourcecred_1.sourcecred.core.graph.NodeAddress.toParts(discordAccount.address)[4];
    if (discordId === targetUserDiscordID) {
        return discordId;
    }
    return undefined;
};
//# sourceMappingURL=getXp.js.map