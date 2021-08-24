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
exports.updateCompletionHandler = void 0;
const updateCompletion_1 = require("./updateCompletion");
const updateCompletionHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { input, session_variables: sessionVariables } = req.body;
    const role = sessionVariables['x-hasura-role'];
    const playerId = sessionVariables['x-hasura-user-id'];
    try {
        if (role !== 'player') {
            throw new Error('Expected player role');
        }
        const updateCompletionArgs = input;
        const result = yield updateCompletion_1.updateCompletion(playerId, updateCompletionArgs.updateData);
        res.json(result);
    }
    catch (error) {
        const errorResponse = {
            success: false,
            error: error.message,
        };
        res.json(errorResponse);
    }
});
exports.updateCompletionHandler = updateCompletionHandler;
//# sourceMappingURL=handler.js.map