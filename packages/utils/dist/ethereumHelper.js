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
exports.verifySignature = exports.signerHelper = void 0;
const ethers_1 = require("ethers");
function signerHelper(provider, rawMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        const ethereum = provider.provider;
        const signer = provider.getSigner();
        const address = yield signer.getAddress();
        if (!ethereum.request)
            throw new Error('invalid ethereum provider');
        let params = [rawMessage, address.toLowerCase()];
        if (ethereum.isMetaMask) {
            params = [params[1], params[0]];
        }
        const signature = yield ethereum.request({
            method: 'personal_sign',
            params,
        });
        return signature;
    });
}
exports.signerHelper = signerHelper;
const smartWalletABI = [
    'function isValidSignature(bytes32 _message, bytes _signature) public view returns (bool)',
];
var WalletType;
(function (WalletType) {
    WalletType[WalletType["EOA"] = 0] = "EOA";
    WalletType[WalletType["SMART"] = 1] = "SMART";
})(WalletType || (WalletType = {}));
function getWalletType(address, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        const code = yield provider.getCode(address);
        return code === '0x' ? WalletType.EOA : WalletType.SMART;
    });
}
function verifySignature(address, message, signature, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        const walletType = yield getWalletType(address, provider);
        if (walletType === WalletType.EOA) {
            const recoveredAddress = ethers_1.utils.verifyMessage(message, signature);
            return address === recoveredAddress;
        }
        // Smart wallet
        const arrayishMessage = ethers_1.utils.toUtf8Bytes(message);
        const hexMessage = ethers_1.utils.hexlify(arrayishMessage);
        const hexArray = ethers_1.utils.arrayify(hexMessage);
        const hashMessage = ethers_1.utils.hashMessage(hexArray);
        const contract = new ethers_1.Contract(address, smartWalletABI, provider);
        try {
            const returnValue = yield contract.isValidSignature(hashMessage, signature);
            return returnValue;
        }
        catch (error) {
            throw new Error('unsupported smart wallet');
        }
    });
}
exports.verifySignature = verifySignature;
//# sourceMappingURL=ethereumHelper.js.map