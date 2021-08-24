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
const updateSingle_1 = __importDefault(require("../updateSingle"));
// eslint-disable-next-line import/no-default-export
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const session = req.body.session_variables;
    const role = session['x-hasura-role'];
    const playerId = (_a = req.body.input) === null || _a === void 0 ? void 0 : _a.playerId;
    if (!['admin', 'player'].includes(role)) {
        throw new Error(`Expected Role: admin or player. Got "${role}".`);
    }
    if (!playerId) {
        throw new Error('No playerId specified to update.');
    }
    if (!req.app.locals.queuedRecacheFor[playerId]) {
        req.app.locals.queuedRecacheFor[playerId] = true;
        req.app.locals.limiter.schedule(() => (() => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield updateSingle_1.default(playerId);
            }
            finally {
                req.app.locals.queuedRecacheFor[playerId] = false;
            }
        }))());
        res.json({ success: true });
    }
    else {
        throw new Error('Already queued to be refreshed.');
    }
});
//# sourceMappingURL=handler.js.map