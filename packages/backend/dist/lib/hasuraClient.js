"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.getClient = void 0;
const graphql_request_1 = require("graphql-request");
const config_1 = require("../config");
const hasura_sdk_1 = require("./autogen/hasura-sdk");
const getClient = (params = {}) => hasura_sdk_1.getSdk(new graphql_request_1.GraphQLClient(config_1.CONFIG.graphqlURL, {
    headers: {
        'Content-Type': 'application/json',
        'x-hasura-access-key': config_1.CONFIG.adminKey,
        'x-hasura-role': params.role || 'admin',
        'x-hasura-user-id': params.userId || '',
        'x-hasura-use-backend-only-permissions': params.backendOnly === true ? 'true' : 'false',
    },
}));
exports.getClient = getClient;
exports.client = exports.getClient();
//# sourceMappingURL=hasuraClient.js.map