"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: `${__dirname}/../.env` });
function parseEnv(v, defaultValue) {
    if (!v)
        return defaultValue;
    if (typeof defaultValue === 'number') {
        return Number(v);
    }
    return v;
}
exports.CONFIG = {
    port: parseEnv(process.env.PORT, 5000),
    graphqlURL: (() => {
        const { GRAPHQL_URL: url, GRAPHQL_HOST: host } = process.env;
        if (url)
            return url;
        if (host) {
            return `https://${host}.onrender.com/v1/graphql`;
        }
        return 'http://localhost:8080/v1/graphql';
    })(),
    adminKey: parseEnv(process.env.HASURA_GRAPHQL_ADMIN_SECRET, 'metagame_secret'),
    frontendUrl: parseEnv(process.env.FRONTEND_URL, 'http://localhost:3000'),
    githubApiToken: parseEnv(process.env.GITHUB_API_TOKEN, ''),
    discordBotToken: parseEnv(process.env.DISCORD_BOT_TOKEN, ''),
    discordBotClientSecret: parseEnv(process.env.DISCORD_BOT_CLIENT_SECRET, ''),
    sourceCredLedgerBranch: parseEnv(process.env.SOURCECRED_LEDGER_BRANCH, 'staging'),
};
//# sourceMappingURL=config.js.map