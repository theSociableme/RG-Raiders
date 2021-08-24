"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const apiHelpers_1 = require("../../lib/apiHelpers");
const routes_1 = require("./guild/routes");
const routes_2 = require("./idxCache/routes");
const handler_1 = require("./migrateSourceCredAccounts/handler");
const routes_3 = require("./quests/routes");
exports.actionRoutes = express_1.default.Router();
exports.actionRoutes.use('/idxCache', routes_2.cacheRoutes);
exports.actionRoutes.post('/migrateSourceCredAccounts', apiHelpers_1.asyncHandlerWrapper(handler_1.migrateSourceCredAccounts));
exports.actionRoutes.use('/quests', routes_3.questsRoutes);
exports.actionRoutes.use('/guild', routes_1.guildRoutes);
//# sourceMappingURL=routes.js.map