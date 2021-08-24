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
exports.triggerHandler = void 0;
const cacheIDXProfile_1 = require("./cacheIDXProfile");
const updateDiscordRole_1 = require("./updateDiscordRole");
const TRIGGERS = {
    cacheIDXProfile: cacheIDXProfile_1.cacheIDXProfile,
    player_rank_updated: updateDiscordRole_1.updateDiscordRole,
};
const triggerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const role = (_b = (_a = req.body.event) === null || _a === void 0 ? void 0 : _a.session_variables) === null || _b === void 0 ? void 0 : _b['x-hasura-role'];
    if (role !== 'admin') {
        throw new Error('Unauthorized');
    }
    const trigger = TRIGGERS[req.body.trigger.name];
    if (trigger) {
        yield trigger(req.body);
        res.sendStatus(200);
    }
    else {
        res.sendStatus(404);
    }
});
exports.triggerHandler = triggerHandler;
//# sourceMappingURL=handler.js.map