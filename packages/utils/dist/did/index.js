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
exports.verifyToken = exports.createToken = void 0;
const js_base64_1 = require("js-base64");
const uuid_1 = require("uuid");
const ethereumHelper_1 = require("../ethereumHelper");
const tokenDuration = 1000 * 60 * 60 * 24 * 7; // 7 days
function createToken(provider) {
    return __awaiter(this, void 0, void 0, function* () {
        const signer = provider.getSigner();
        const address = yield signer.getAddress();
        const iat = +new Date();
        const claim = {
            iat: +new Date(),
            exp: iat + tokenDuration,
            iss: address,
            aud: 'the-game',
            tid: uuid_1.v4(),
        };
        const serializedClaim = JSON.stringify(claim);
        const proof = yield ethereumHelper_1.signerHelper(provider, serializedClaim);
        return js_base64_1.Base64.encode(JSON.stringify([proof, serializedClaim]));
    });
}
exports.createToken = createToken;
function verifyToken(token, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rawToken = js_base64_1.Base64.decode(token, 'base64');
            const [proof, rawClaim] = JSON.parse(rawToken);
            const claim = JSON.parse(rawClaim);
            const address = claim.iss;
            const valid = yield ethereumHelper_1.verifySignature(address, rawClaim, proof, provider);
            if (!valid) {
                throw new Error('invalid signature');
            }
            return claim;
        }
        catch (e) {
            // eslint-disable-next-line no-console
            console.error('Token verification failed', e);
            return null;
        }
    });
}
exports.verifyToken = verifyToken;
//# sourceMappingURL=index.js.map