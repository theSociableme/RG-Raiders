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
exports.createCompletion = void 0;
const hasura_sdk_1 = require("../../../../lib/autogen/hasura-sdk");
const hasuraClient_1 = require("../../../../lib/hasuraClient");
function createCompletion(playerId, questCompletion) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (!questCompletion.submission_link && !questCompletion.submission_text) {
            throw new Error('Must provide at least a submission link or text');
        }
        const { quest_by_pk: quest } = yield hasuraClient_1.client.GetQuestById({
            quest_id: questCompletion.quest_id,
        });
        if (!quest) {
            throw new Error('Quest not found');
        }
        if (quest.status !== hasura_sdk_1.QuestStatus_Enum.Open) {
            throw new Error('Quest must be open');
        }
        // Personal or unique, check if not already done by player
        if (quest.repetition === hasura_sdk_1.QuestRepetition_Enum.Unique ||
            quest.repetition === hasura_sdk_1.QuestRepetition_Enum.Personal) {
            const { quest_completion: existingQuestCompletions, } = yield hasuraClient_1.client.GetQuestCompletions({
                player_id: playerId,
                quest_id: questCompletion.quest_id,
            });
            if (existingQuestCompletions.length > 0) {
                throw new Error('You already submitted a completion this personal/unique quest');
            }
        }
        // Recurring, check if not already done by player within cooldown
        if (quest.repetition === hasura_sdk_1.QuestRepetition_Enum.Recurring && quest.cooldown) {
            const { quest_completion: existingQuestCompletions, } = yield hasuraClient_1.client.GetLastQuestCompletionForPlayer({
                player_id: playerId,
                quest_id: quest.id,
            });
            if (existingQuestCompletions.length > 0) {
                const existingQuestCompletion = existingQuestCompletions[0];
                const submittedAt = new Date(existingQuestCompletion.submitted_at);
                const now = new Date();
                const diff = +now - +submittedAt;
                if (diff < quest.cooldown * 1000) {
                    throw new Error('Player have to wait before being able to do this quest again');
                }
            }
        }
        const questCompletionInput = Object.assign(Object.assign({}, questCompletion), { completed_by_player_id: playerId });
        const createQuestCompletionResult = yield hasuraClient_1.client.CreateQuestCompletion({
            objects: questCompletionInput,
        });
        const questCompletionCreated = (_a = createQuestCompletionResult.insert_quest_completion) === null || _a === void 0 ? void 0 : _a.returning[0];
        if (!questCompletionCreated) {
            throw new Error('Error while completing quest');
        }
        return {
            success: true,
            quest_completion_id: questCompletionCreated.id,
        };
    });
}
exports.createCompletion = createCompletion;
//# sourceMappingURL=createCompletion.js.map