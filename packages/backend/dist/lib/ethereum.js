"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getERC20Contract = exports.defaultProvider = void 0;
const ethers_1 = require("ethers");
const config_1 = require("../config");
const ERC20_json_1 = __importDefault(require("./abis/ERC20.json"));
const { infuraId } = config_1.CONFIG;
exports.defaultProvider = new ethers_1.ethers.providers.InfuraProvider(1, infuraId);
const getERC20Contract = (contractAddress, provider = exports.defaultProvider) => new ethers_1.ethers.Contract(contractAddress, ERC20_json_1.default, provider);
exports.getERC20Contract = getERC20Contract;
//# sourceMappingURL=ethereum.js.map