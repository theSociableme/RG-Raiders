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
exports.isAllowedToCreateQuest = void 0;
const utils_1 = require("@raidguild/utils");
const config_1 = require("../../../../config");
const ethereum_1 = require("../../../../lib/ethereum");
const { BN, amountToDecimal } = utils_1.numbers;
/**
 * As a first iteration, we only allow people to create quests if they hold more that 100 pSEED tokens
 */
function isAllowedToCreateQuest(playerAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        const pSEEDContractAddress = config_1.CONFIG.pSEEDAddress;
        const pSEEDContract = ethereum_1.getERC20Contract(pSEEDContractAddress);
        const pSEEDBalance = yield pSEEDContract.balanceOf(playerAddress);
        const pSEEDDecimals = yield pSEEDContract.decimals();
        const minimumPooledSeedBalance = new BN(100);
        const pSEEDBalanceInDecimal = amountToDecimal(pSEEDBalance.toString(), pSEEDDecimals);
        const allowed = new BN(pSEEDBalanceInDecimal).gt(minimumPooledSeedBalance);
        return allowed;
    });
}
exports.isAllowedToCreateQuest = isAllowedToCreateQuest;
//# sourceMappingURL=permissions.js.map