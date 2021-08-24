"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_tools_1 = require("graphql-tools");
const resolver_1 = require("./resolvers/brightId/resolver");
const resolver_2 = require("./resolvers/daohaus/resolver");
const resolver_3 = require("./resolvers/getBoxProfile/resolver");
const resolver_4 = require("./resolvers/seedGraph/resolver");
const typeDefs_1 = require("./typeDefs");
const uuid_1 = require("./types/uuid");
const resolvers = {
    Query: {
        getBoxProfile: resolver_3.getBoxProfile,
        getDaoHausMemberships: resolver_2.getDaoHausMemberships,
        getBrightIdStatus: resolver_1.getBrightIdStatus,
        getTokenBalances: resolver_4.getTokenBalances,
        getTopPSeedHolders: resolver_4.getTopPSeedHolders,
    },
    uuid: uuid_1.uuid,
};
exports.schema = graphql_tools_1.makeExecutableSchema({ typeDefs: typeDefs_1.typeDefs, resolvers });
//# sourceMappingURL=schema.js.map