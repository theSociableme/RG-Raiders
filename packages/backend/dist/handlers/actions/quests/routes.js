"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const apiHelpers_1 = require("../../../lib/apiHelpers");
const handler_1 = require("./createCompletion/handler");
const handler_2 = require("./createQuest/handler");
const handler_3 = require("./updateCompletion/handler");
exports.questsRoutes = express_1.default.Router();
exports.questsRoutes.post('/createQuest', apiHelpers_1.asyncHandlerWrapper(handler_2.createQuestHandler));
exports.questsRoutes.post('/createCompletion', apiHelpers_1.asyncHandlerWrapper(handler_1.createCompletionHandler));
exports.questsRoutes.post('/updateCompletion', apiHelpers_1.asyncHandlerWrapper(handler_3.updateCompletionHandler));
//# sourceMappingURL=routes.js.map