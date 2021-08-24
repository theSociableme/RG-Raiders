"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.GetTopPSeedHoldersDocument = exports.GetTokenBalancesDocument = exports._SubgraphErrorPolicy_ = exports.UserToken_OrderBy = exports.Transfer_OrderBy = exports.OrderDirection = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["Asc"] = "asc";
    OrderDirection["Desc"] = "desc";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
var Transfer_OrderBy;
(function (Transfer_OrderBy) {
    Transfer_OrderBy["Id"] = "id";
    Transfer_OrderBy["TxHash"] = "txHash";
    Transfer_OrderBy["From"] = "from";
    Transfer_OrderBy["To"] = "to";
    Transfer_OrderBy["Amount"] = "amount";
    Transfer_OrderBy["Token"] = "token";
    Transfer_OrderBy["Timestamp"] = "timestamp";
})(Transfer_OrderBy = exports.Transfer_OrderBy || (exports.Transfer_OrderBy = {}));
var UserToken_OrderBy;
(function (UserToken_OrderBy) {
    UserToken_OrderBy["Id"] = "id";
    UserToken_OrderBy["Address"] = "address";
    UserToken_OrderBy["PSeedBalance"] = "pSeedBalance";
    UserToken_OrderBy["PSeedTransfers"] = "pSeedTransfers";
    UserToken_OrderBy["SeedBalance"] = "seedBalance";
    UserToken_OrderBy["SeedTransfers"] = "seedTransfers";
})(UserToken_OrderBy = exports.UserToken_OrderBy || (exports.UserToken_OrderBy = {}));
var _SubgraphErrorPolicy_;
(function (_SubgraphErrorPolicy_) {
    /** Data will be returned even if the subgraph has indexing errors */
    _SubgraphErrorPolicy_["Allow"] = "allow";
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    _SubgraphErrorPolicy_["Deny"] = "deny";
})(_SubgraphErrorPolicy_ = exports._SubgraphErrorPolicy_ || (exports._SubgraphErrorPolicy_ = {}));
exports.GetTokenBalancesDocument = graphql_tag_1.default `
    query GetTokenBalances($address: ID!) {
  userToken(id: $address) {
    id
    seedBalance
    pSeedBalance
  }
}
    `;
exports.GetTopPSeedHoldersDocument = graphql_tag_1.default `
    query GetTopPSeedHolders($limit: Int) {
  userTokens(
    orderBy: pSeedBalance
    orderDirection: desc
    where: {pSeedBalance_gt: "0"}
    first: $limit
  ) {
    id
    seedBalance
    pSeedBalance
  }
}
    `;
const defaultWrapper = (action, _operationName) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        GetTokenBalances(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetTokenBalancesDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetTokenBalances');
        },
        GetTopPSeedHolders(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetTopPSeedHoldersDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetTopPSeedHolders');
        }
    };
}
exports.getSdk = getSdk;
//# sourceMappingURL=seedgraph-sdk.js.map