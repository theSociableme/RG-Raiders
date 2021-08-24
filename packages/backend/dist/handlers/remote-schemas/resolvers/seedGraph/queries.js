"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTopPSeedHoldersQuery = exports.GetTokenBalances = void 0;
const dist_1 = require("graphql-request/dist");
exports.GetTokenBalances = dist_1.gql `
  query GetTokenBalances($address: ID!) {
    userToken(id: $address) {
      id
      seedBalance
      pSeedBalance
    }
  }
`;
exports.GetTopPSeedHoldersQuery = dist_1.gql `
  query GetTopPSeedHolders($limit: Int) {
    userTokens(
      orderBy: pSeedBalance
      orderDirection: desc
      where: { pSeedBalance_gt: "0" }
      first: $limit
    ) {
      id
      seedBalance
      pSeedBalance
    }
  }
`;
//# sourceMappingURL=queries.js.map