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
exports.authHandler = void 0;
const utils_1 = require("@metafam/utils");
const ethereum_1 = require("../../lib/ethereum");
const users_1 = require("./users");
const unauthorizedVariables = {
    'X-Hasura-Role': 'public',
};
function getHeaderToken(req) {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return null;
    if (authHeader.substring(0, 6) !== 'Bearer')
        throw new Error('invalid token type');
    const token = authHeader.replace('Bearer', '').trim();
    if (token.length === 0)
        return null;
    return token;
}
const authHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    try {
        token = getHeaderToken(req);
    }
    catch (_) {
        res.status(401).send();
        return;
    }
    if (!token) {
        res.json(unauthorizedVariables);
    }
    else {
        const claim = yield utils_1.did.verifyToken(token, ethereum_1.defaultProvider);
        if (!claim) {
            res.status(401).send();
            return;
        }
        const player = yield users_1.getOrCreatePlayer(claim.iss);
        const hasuraVariables = {
            'X-Hasura-Role': 'player',
            'X-Hasura-User-Id': player.id,
        };
        res.json(hasuraVariables);
    }
});
exports.authHandler = authHandler;
//# sourceMappingURL=handler.js.map