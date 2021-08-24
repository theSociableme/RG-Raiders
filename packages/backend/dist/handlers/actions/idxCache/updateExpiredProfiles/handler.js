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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hasuraClient_1 = require("../../../../lib/hasuraClient");
const updateSingle_1 = __importDefault(require("../updateSingle"));
const INVALIDATE_AFTER_DAYS = 4; // number of days after which to recache
// eslint-disable-next-line import/no-default-export
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const expiration = new Date();
    expiration.setDate(expiration.getDate() - INVALIDATE_AFTER_DAYS);
    const { profile_cache: players } = yield hasuraClient_1.client.GetCacheEntries({
        updatedBefore: expiration,
    });
    const idsToProcess = [];
    yield Promise.all(players.map(({ playerId }) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.app.locals.queuedRecacheFor[playerId]) {
            req.app.locals.queuedRecacheFor[playerId] = true;
            idsToProcess.push(playerId);
            req.app.locals.limiter.schedule(() => (() => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    yield updateSingle_1.default(playerId);
                }
                finally {
                    req.app.locals.queuedRecacheFor[playerId] = false;
                }
            }))());
        }
    })));
    res.json({ ids: idsToProcess });
});
//# sourceMappingURL=handler.js.map