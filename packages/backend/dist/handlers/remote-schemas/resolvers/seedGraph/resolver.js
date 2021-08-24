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
exports.getTopPSeedHolders = exports.getTokenBalances = void 0;
const seedGraphClient_1 = require("../../../../lib/seedGraphClient");
const getTokenBalances = (_, { address }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!address)
        return null;
    const res = yield seedGraphClient_1.seedGraphClient.GetTokenBalances({
        address: address.toLowerCase(),
    });
    return res.userToken;
});
exports.getTokenBalances = getTokenBalances;
const getTopPSeedHolders = (_, { limit }) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield seedGraphClient_1.seedGraphClient.GetTopPSeedHolders({
        limit: limit || 50,
    });
    return res.userTokens;
});
exports.getTopPSeedHolders = getTopPSeedHolders;
//# sourceMappingURL=resolver.js.map