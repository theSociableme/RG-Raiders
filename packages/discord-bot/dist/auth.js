"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exchangeCodeForAccessToken = exports.tokenRequestData = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("@raidguild/utils");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const url_1 = require("url");
const config_1 = require("./config");
exports.tokenRequestData = {
    client_id: utils_1.Constants.DISCORD_BOT_CLIENT_ID,
    client_secret: config_1.CONFIG.discordBotClientSecret,
    grant_type: 'authorization_code',
    redirect_uri: `${config_1.CONFIG.frontendUrl}/${utils_1.Constants.DISCORD_OAUTH_CALLBACK_PATH}`,
    scope: utils_1.Constants.DISCORD_OAUTH_SCOPES,
};
const exchangeCodeForAccessToken = (code) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const data = Object.assign(Object.assign({}, exports.tokenRequestData), { code });
    const discordResponse = yield node_fetch_1.default('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: new url_1.URLSearchParams(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    const response = {
        statusCode: discordResponse.status,
    };
    if (discordResponse.ok) {
        const parsedBody = yield discordResponse.json();
        response.oauthResponse = parsedBody;
    }
    else {
        response.error = discordResponse.statusText;
    }
    return response;
});
exports.exchangeCodeForAccessToken = exchangeCodeForAccessToken;
//# sourceMappingURL=auth.js.map