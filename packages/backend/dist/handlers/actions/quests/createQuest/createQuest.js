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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuest = void 0;
const hasura_sdk_1 = require("../../../../lib/autogen/hasura-sdk");
const hasuraClient_1 = require("../../../../lib/hasuraClient");
const permissions_1 = require("./permissions");
function createQuest(playerId, quest) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        // Workaround as Hasura can't share enums between root schema and custom actions
        const questRepetition = quest.repetition;
        if (questRepetition === hasura_sdk_1.QuestRepetition_Enum.Recurring && !quest.cooldown) {
            throw new Error('Recurring quests need to have a cooldown');
        }
        if (questRepetition !== hasura_sdk_1.QuestRepetition_Enum.Recurring && quest.cooldown) {
            throw new Error('Non recurring quests cannot have a cooldown');
        }
        const playerData = yield hasuraClient_1.client.GetPlayer({ playerId });
        const ethAddress = (_a = playerData.player_by_pk) === null || _a === void 0 ? void 0 : _a.ethereum_address;
        if (!ethAddress) {
            throw new Error('Ethereum address not found for player');
        }
        const allowed = yield permissions_1.isAllowedToCreateQuest(ethAddress);
        if (!allowed) {
            throw new Error('Player not allowed to create quests');
        }
        const { skills_id: skillsId } = quest, questValues = __rest(quest, ["skills_id"]);
        const questInput = Object.assign(Object.assign({}, questValues), { repetition: questRepetition, created_by_player_id: playerId, quest_skills: {
                data: skillsId.map((s) => ({ skill_id: s })),
            } });
        const data = yield hasuraClient_1.client.CreateQuest({ objects: questInput });
        return {
            success: true,
            quest_id: (_b = data.insert_quest) === null || _b === void 0 ? void 0 : _b.returning[0].id,
        };
    });
}
exports.createQuest = createQuest;
//# sourceMappingURL=createQuest.js.map