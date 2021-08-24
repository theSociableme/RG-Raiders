"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIGNIFICANT_DIGITS = exports.truncateNumber = exports.amountToDecimal = exports.amountToInt = exports.BN = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
exports.BN = bignumber_js_1.default;
function amountToInt(amount, decimals) {
    return new bignumber_js_1.default(amount)
        .times(Math.pow(10, decimals))
        .dp(0)
        .toFixed();
}
exports.amountToInt = amountToInt;
function amountToDecimal(amount, decimals) {
    return new bignumber_js_1.default(amount).div(Math.pow(10, decimals)).toFixed();
}
exports.amountToDecimal = amountToDecimal;
function truncateNumber(n, sd = exports.SIGNIFICANT_DIGITS, roundingMode) {
    return new bignumber_js_1.default(n).sd(sd, roundingMode).toFixed();
}
exports.truncateNumber = truncateNumber;
exports.SIGNIFICANT_DIGITS = 7;
//# sourceMappingURL=numbers.js.map