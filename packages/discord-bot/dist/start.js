"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const _1 = require(".");
const config_1 = require("./config");
const discordClientPromise = _1.createDiscordClient();
const app = express_1.default();
app.get('/healthz', (_, res) => {
    res.send('ok');
});
app.listen(config_1.CONFIG.port, () => {
    discordClientPromise.then(() => {
        console.log(`Discord bot started on port ${config_1.CONFIG.port}`);
    });
});
//# sourceMappingURL=start.js.map