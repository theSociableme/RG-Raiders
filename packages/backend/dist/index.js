"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const bottleneck_1 = __importDefault(require("bottleneck"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const routes_1 = require("./handlers/routes");
const apiHelpers_1 = require("./lib/apiHelpers");
const app = express_1.default();
app.locals.limiter = new bottleneck_1.default({
    maxConcurrent: 10,
});
// tracks the current contents of Bottleneck
app.locals.queuedRecacheFor = {};
app.use(body_parser_1.default.json());
app.use(routes_1.router);
app.use(apiHelpers_1.errorMiddleware);
app.listen(config_1.CONFIG.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${config_1.CONFIG.port}`);
});
//# sourceMappingURL=index.js.map