"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheRoutes = void 0;
const express_1 = __importDefault(require("express"));
const apiHelpers_1 = require("../../../lib/apiHelpers");
const handler_1 = __importDefault(require("./updateExpiredProfiles/handler"));
const handler_2 = __importDefault(require("./updateSingleProfile/handler"));
exports.cacheRoutes = express_1.default.Router();
exports.cacheRoutes.post('/updateSingle', apiHelpers_1.asyncHandlerWrapper(handler_2.default));
exports.cacheRoutes.post('/checkExpired', apiHelpers_1.asyncHandlerWrapper(handler_1.default));
//# sourceMappingURL=routes.js.map