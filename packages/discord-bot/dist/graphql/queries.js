"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlayerFromEth = exports.GetPlayer = void 0;
const dist_1 = require("graphql-request/dist");
exports.GetPlayer = dist_1.gql `
  query GetPlayer($playerId: uuid!) {
    player_by_pk(id: $playerId) {
      id
      ethereum_address
    }
  }
`;
exports.GetPlayerFromEth = dist_1.gql `
  query GetPlayerFromETH($ethereum_address: String) {
    player(where: { ethereum_address: { _eq: $ethereum_address } }) {
      id
    }
  }
`;
//# sourceMappingURL=queries.js.map