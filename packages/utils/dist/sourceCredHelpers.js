"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLatestEthAddress = void 0;
const ethers_1 = require("ethers");
const sourcecred_1 = require("sourcecred");
const getLatestEthAddress = (identity) => {
    var _a;
    const ethAddress = (_a = identity.aliases.find((alias) => {
        const parts = sourcecred_1.sourcecred.core.graph.NodeAddress.toParts(alias.address);
        return parts.indexOf('ethereum') > 0;
    })) === null || _a === void 0 ? void 0 : _a.description;
    if (ethAddress && ethers_1.ethers.utils.isAddress(ethAddress)) {
        return ethAddress.toLowerCase();
    }
    return null;
};
exports.getLatestEthAddress = getLatestEthAddress;
//# sourceMappingURL=sourceCredHelpers.js.map