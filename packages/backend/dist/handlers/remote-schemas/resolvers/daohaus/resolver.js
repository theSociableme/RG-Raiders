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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDaoHausMemberships = void 0;
const daoHausClient_1 = require("../../../../lib/daoHausClient");
const addChain = (memberAddress) => (chain) => __awaiter(void 0, void 0, void 0, function* () {
    const client = daoHausClient_1.getClient(chain);
    const members = ((yield client.GetDaoHausMemberships({ memberAddress })).members);
    const ids = members.map(({ moloch: { id } }) => id);
    const { daoMetas } = yield client.GetDaoHausTitles({ ids });
    const titles = Object.fromEntries(daoMetas.map(({ id, title }) => [id, title]));
    return members.map((member) => {
        const updatedMember = Object.assign({}, member);
        updatedMember.moloch.chain = chain;
        updatedMember.moloch.title = titles[member.moloch.id];
        return updatedMember;
    });
});
const getDaoHausMemberships = (_, { memberAddress }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!memberAddress)
        return [];
    const membershipsOn = addChain(memberAddress);
    const memberships = yield Promise.allSettled([
        membershipsOn('ethereum'),
        membershipsOn('polygon'),
        membershipsOn('xdai'),
    ]);
    const members = memberships.reduce((allMembers, chainMembers) => {
        if (chainMembers.status === 'rejected') {
            console.error('Pulling memberships failed:', chainMembers.reason);
            return allMembers;
        }
        return [...allMembers, ...chainMembers.value];
    }, []);
    return members;
});
exports.getDaoHausMemberships = getDaoHausMemberships;
//# sourceMappingURL=resolver.js.map