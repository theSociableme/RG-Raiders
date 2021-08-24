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
exports.updateCompletion = void 0;
const hasura_sdk_1 = require("../../../../lib/autogen/hasura-sdk");
const hasuraClient_1 = require("../../../../lib/hasuraClient");
function updateCompletion(playerId, updateData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { quest_completion_by_pk: questCompletion, } = yield hasuraClient_1.client.GetQuestCompletionById({
            quest_completion_id: updateData.quest_completion_id,
        });
        if (!questCompletion) {
            throw new Error('Quest completion not found');
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
        if (quest.created_by_player_id !== playerId) {
            throw new Error('Only quest creator can update a completion');
        }
        if (questCompletion.status !== hasura_sdk_1.QuestCompletionStatus_Enum.Pending) {
            throw new Error('Quest completion already marked as done');
        }
        // Workaround as Hasura can't share enums between root schema and custom actions
        const newQuestCompletionStatus = updateData.status === hasura_sdk_1.QuestCompletionStatus_ActionEnum.Accepted
            ? hasura_sdk_1.QuestCompletionStatus_Enum.Accepted
            : hasura_sdk_1.QuestCompletionStatus_Enum.Rejected;
        const updateQuestCompletionResult = yield hasuraClient_1.client.UpdateQuestCompletionStatus({
            quest_completion_id: questCompletion.id,
            status: newQuestCompletionStatus,
        });
        const questCompletionUpdated = updateQuestCompletionResult.update_quest_completion_by_pk;
        if (!questCompletionUpdated) {
            throw new Error('Error while updating quest completion');
        }
        if (newQuestCompletionStatus === hasura_sdk_1.QuestCompletionStatus_Enum.Accepted &&
            quest.repetition === hasura_sdk_1.QuestRepetition_Enum.Unique) {
            const updateQuestStatusResult = yield hasuraClient_1.client.UpdateQuestStatus({
                quest_id: quest.id,
                status: hasura_sdk_1.QuestStatus_Enum.Closed,
            });
            const questStatusUpdated = updateQuestStatusResult.update_quest_by_pk;
            if (!questStatusUpdated) {
                throw new Error('Error while setting unique quest status to closed after being completed');
            }
            yield hasuraClient_1.client.RejectOtherQuestCompletions({
                accepted_quest_completion_id: questCompletion.id,
                quest_id: quest.id,
            });
        }
        return {
            success: true,
            quest_completion_id: questCompletion.id,
        };
    });
}
exports.updateCompletion = updateCompletion;
//# sourceMappingURL=updateCompletion.js.map