"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedGraphClient = void 0;
const graphql_request_1 = require("graphql-request");
const config_1 = require("../config");
const seedgraph_sdk_1 = require("./autogen/seedgraph-sdk");
exports.seedGraphClient = seedgraph_sdk_1.getSdk(new graphql_request_1.GraphQLClient(config_1.CONFIG.seedGraphqlURL));
//# sourceMappingURL=seedGraphClient.js.map