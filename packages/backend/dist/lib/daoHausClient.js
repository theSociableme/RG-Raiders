"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = void 0;
const graphql_request_1 = require("graphql-request");
const config_1 = require("../config");
const daohaus_sdk_1 = require("./autogen/daohaus-sdk");
const clients = new Map([
    ['polygon', new graphql_request_1.GraphQLClient(config_1.CONFIG.daoHausPolygonGraphqlURL)],
    ['xdai', new graphql_request_1.GraphQLClient(config_1.CONFIG.daoHausXdaiGraphqlURL)],
    ['ethereum', new graphql_request_1.GraphQLClient(config_1.CONFIG.daoHausGraphqlURL)],
]);
function getClient(chain) {
    const gqlClient = clients.get(chain);
    if (!gqlClient)
        throw new Error(`The '${chain}' chain is unrecognized, unable to create GQL Client`);
    return daohaus_sdk_1.getSdk(gqlClient);
}
exports.getClient = getClient;
//# sourceMappingURL=daoHausClient.js.map