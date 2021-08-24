"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const apiHelpers_1 = require("../lib/apiHelpers");
const routes_1 = require("./actions/routes");
const handler_1 = require("./auth-webhook/handler");
const routes_2 = require("./remote-schemas/routes");
const handler_2 = require("./triggers/handler");
exports.router = express_1.default.Router();
exports.router.get('/', (_, res) => {
    res.send('ok');
});
exports.router.get('/healthz', (_, res) => {
    res.send('ok');
});
exports.router.get('/auth-webhook', apiHelpers_1.asyncHandlerWrapper(handler_1.authHandler));
exports.router.post('/triggers', apiHelpers_1.asyncHandlerWrapper(handler_2.triggerHandler));
exports.router.use('/actions', routes_1.actionRoutes);
exports.router.use('/remote-schemas', routes_2.remoteSchemaRoutes);
//# sourceMappingURL=routes.js.map