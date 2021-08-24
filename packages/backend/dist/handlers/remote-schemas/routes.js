"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remoteSchemaRoutes = void 0;
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const schema_1 = require("./schema");
exports.remoteSchemaRoutes = express_1.default.Router();
exports.remoteSchemaRoutes.use('/graphql', express_graphql_1.graphqlHTTP({
    schema: schema_1.schema,
    graphiql: true,
}));
//# sourceMappingURL=routes.js.map