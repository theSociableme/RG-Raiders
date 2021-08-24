"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDiscord = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const Path = tslib_1.__importStar(require("path"));
// Within a docker container: We are using tsc, so we want to load the compiled files.
// For local dev, we are transpiling: Load the .ts files.
const glob = process.env.RUNTIME_ENV === 'docker'
    ? Path.join(__dirname, 'commands', '*.js')
    : Path.join(__dirname, 'commands', '!(*.d).ts');
let AppDiscord = class AppDiscord {
};
AppDiscord = tslib_1.__decorate([
    discord_1.Discord('', {
        import: [glob],
    })
], AppDiscord);
exports.AppDiscord = AppDiscord;
//# sourceMappingURL=AppDiscord.js.map