"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDaoHausTitles = exports.GetDaoHausMemberships = void 0;
const dist_1 = require("graphql-request/dist");
exports.GetDaoHausMemberships = dist_1.gql `
  query GetDaoHausMemberships($memberAddress: Bytes!) {
    members(
      where: { memberAddress: $memberAddress, didRagequit: false, exists: true }
    ) {
      id
      shares
      molochAddress
      createdAt
      memberAddress
      loot
      exists
      kicked
      moloch {
        id
        version
        summoner
        totalShares
        totalLoot
      }
      delegateKey
    }
  }
`;
exports.GetDaoHausTitles = dist_1.gql `
  query GetDaoHausTitles($ids: [ID!]) {
    daoMetas(where: { id_in: $ids }) {
      id
      title
    }
  }
`;
//# sourceMappingURL=queries.js.map