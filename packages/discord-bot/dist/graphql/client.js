"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const graphql_request_1 = require("graphql-request");
const hasura_sdk_1 = require("../__generated__/hasura-sdk");
const config_1 = require("../config");
exports.client = hasura_sdk_1.getSdk(new graphql_request_1.GraphQLClient(config_1.CONFIG.graphqlURL, {
    headers: {
        'Content-Type': 'application/json',
        'x-hasura-access-key': config_1.CONFIG.adminKey,
    },
}));
//# sourceMappingURL=client.js.map