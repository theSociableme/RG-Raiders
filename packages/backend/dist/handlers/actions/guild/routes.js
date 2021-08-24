"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guildRoutes = void 0;
const express_1 = __importDefault(require("express"));
const apiHelpers_1 = require("../../../lib/apiHelpers");
const handler_1 = require("./discordOAuth/handler");
exports.guildRoutes = express_1.default.Router();
exports.guildRoutes.post('/discordAuth', apiHelpers_1.asyncHandlerWrapper(handler_1.handleOAuthCallback));
//# sourceMappingURL=routes.js.map