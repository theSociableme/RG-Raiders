"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetEthAddress = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const sourcecred_1 = require("sourcecred");
const sourcecred_2 = require("../../sourcecred");
const addressUtils = sourcecred_1.sourcecred.plugins.ethereum.utils.address;
class SetEthAddress {
    setAddress(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield sourcecred_2.loadSourceCredLedger();
            if (res.error) {
                yield message.reply(`Error Loading Ledger: ${res.error}`);
                return;
            }
            const baseIdentityProposal = sourcecred_1.sourcecred.plugins.discord.utils.identity.createIdentity(message.member);
            const baseIdentityId = sourcecred_1.sourcecred.ledger.utils.ensureIdentityExists(sourcecred_2.manager.ledger, baseIdentityProposal);
            let ethAddress;
            try {
                ethAddress = addressUtils.parseAddress(message.args.ethAddress);
            }
            catch (e) {
                yield message.reply(`Invalid ETH Address.`);
                return;
            }
            const ethAlias = {
                address: addressUtils.nodeAddressForEthAddress(ethAddress),
                description: ethAddress,
            };
            const linkedAccount = sourcecred_2.manager.ledger.accountByAddress(ethAlias.address);
            if (linkedAccount) {
                yield message.reply(`This ETH address is already linked to ${linkedAccount.identity.name}.`);
                return;
            }
            const account = sourcecred_2.manager.ledger.account(baseIdentityId);
            const existingEthAliases = account.identity.aliases.filter((alias) => {
                const parts = sourcecred_1.sourcecred.core.graph.NodeAddress.toParts(alias.address);
                return parts.indexOf('ethereum') > 0;
            });
            const latestEthAlias = existingEthAliases[existingEthAliases.length - 1];
            const shouldForceUpdate = message.args.force === 'force';
            if (latestEthAlias && !shouldForceUpdate) {
                yield message.reply(`You already have linked the following ETH Address: \`${latestEthAlias.description}\`. Are you sure you want to update it? Warning: This cannot be undone and you will have to recreate your MyMeta profile!

To force update your address, type \`!setAddress ${ethAddress} force\`.
        `);
                return;
            }
            try {
                sourcecred_2.manager.ledger.addAlias(baseIdentityId, ethAlias);
                sourcecred_2.manager.ledger.activate(baseIdentityId);
                const persistRes = yield sourcecred_2.manager.persist();
                if (persistRes.error) {
                    yield message.reply(`Error Updating Ledger: ${persistRes.error}.\n\n ${persistRes.localChanges
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .map((c) => JSON.stringify(c.action))
                        .join('\n')}`);
                    return;
                }
                yield message.reply('Successfully linked ETH Address and activated account');
            }
            catch (e) {
                yield message.reply(`Unable to link address: ${e.message}`);
            }
        });
    }
}
tslib_1.__decorate([
    discord_1.Command('!setAddress :ethAddress :force'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], SetEthAddress.prototype, "setAddress", null);
exports.SetEthAddress = SetEthAddress;
//# sourceMappingURL=setEthAddress.js.map