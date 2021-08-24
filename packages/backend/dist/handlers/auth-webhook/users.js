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
exports.getOrCreatePlayer = void 0;
const hasuraClient_1 = require("../../lib/hasuraClient");
function createPlayer(ethAddress) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const resProfile = yield hasuraClient_1.client.CreatePlayerFromETH({
            ethereum_address: ethAddress,
            username: ethAddress,
        });
        if (((_a = resProfile.insert_player) === null || _a === void 0 ? void 0 : _a.affected_rows) !== 1) {
            throw new Error('Error while creating player');
        }
        return resProfile.insert_player.returning[0];
    });
}
function getOrCreatePlayer(ethereumAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        const ethAddress = ethereumAddress.toLowerCase();
        const res = yield hasuraClient_1.client.GetPlayerFromETH({
            ethereum_address: ethAddress,
        });
        let player = res.player[0];
        if (!player) {
            player = yield createPlayer(ethAddress);
        }
        return player;
    });
}
exports.getOrCreatePlayer = getOrCreatePlayer;
//# sourceMappingURL=users.js.map