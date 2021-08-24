"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiscordClient = void 0;
const tslib_1 = require("tslib");
// Use the Client that are provided by @typeit/discord NOT discord.js
const discord_1 = require("@typeit/discord");
const config_1 = require("./config");
// Within a docker container: We are using tsc, so we want to load the compiled files.
// For local dev, we are transpiling: Load the .ts files.
const glob = process.env.RUNTIME_ENV === 'docker'
    ? `${__dirname}/discord/**/*.js`
    : `${__dirname}/discord/**/!(*.d).ts`;
function createDiscordClient() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const client = new discord_1.Client({
            classes: [glob],
            silent: false,
            variablesChar: ':',
        });
        yield client.login(config_1.CONFIG.discordBotToken);
        return client;
    });
}
exports.createDiscordClient = createDiscordClient;
tslib_1.__exportStar(require("./auth"), exports);
tslib_1.__exportStar(require("./types"), exports);
//# sourceMappingURL=index.js.map