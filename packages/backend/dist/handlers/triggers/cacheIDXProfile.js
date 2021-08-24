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
exports.cacheIDXProfile = void 0;
const updateSingle_1 = __importDefault(require("../actions/idxCache/updateSingle"));
// This trigger is called when new accounts are created.
// It skips the update queue associated with the normal
// cache invalidation process.
const cacheIDXProfile = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const address = (_a = payload.event.data.new) === null || _a === void 0 ? void 0 : _a.ethereum_address;
    if (!address)
        return;
    const playerId = (_b = payload.event.data.new) === null || _b === void 0 ? void 0 : _b.id;
    yield updateSingle_1.default(playerId);
});
exports.cacheIDXProfile = cacheIDXProfile;
//# sourceMappingURL=cacheIDXProfile.js.map