"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = void 0;
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const nilUUID = '00000000-0000-0000-0000-000000000000';
const isUUID = (value) => uuidRegex.test(value) || nilUUID === value;
exports.uuid = new graphql_1.GraphQLScalarType({
    name: 'uuid',
    description: 'The `uuid` scalar type represents UUID values as specified by [RFC 4122](https://tools.ietf.org/html/rfc4122).',
    serialize: (value) => {
        if (!isUUID(value)) {
            throw new TypeError(`UUID cannot represent non-UUID value: ${value}`);
        }
        return value.toLowerCase();
    },
    parseValue: (value) => {
        if (!isUUID(value)) {
            throw new TypeError(`UUID cannot represent non-UUID value: ${value}`);
        }
        return value.toLowerCase();
    },
    parseLiteral: (ast) => {
        if (ast.kind === language_1.Kind.STRING) {
            if (isUUID(ast.value)) {
                return ast.value;
            }
        }
        return undefined;
    },
});
//# sourceMappingURL=uuid.js.map