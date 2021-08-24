"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.GetDaoHausTitlesDocument = exports.GetDaoHausMembershipsDocument = exports._SubgraphErrorPolicy_ = exports.Vote_OrderBy = exports.Token_OrderBy = exports.TokenBalance_OrderBy = exports.RageQuit_OrderBy = exports.Proposal_OrderBy = exports.ProposalEscrow_OrderBy = exports.OrderDirection = exports.Moloch_OrderBy = exports.MolochTransaction_OrderBy = exports.Minion_OrderBy = exports.MinionStream_OrderBy = exports.MinionAction_OrderBy = exports.Member_OrderBy = exports.DaoMeta_OrderBy = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
var DaoMeta_OrderBy;
(function (DaoMeta_OrderBy) {
    DaoMeta_OrderBy["Id"] = "id";
    DaoMeta_OrderBy["Title"] = "title";
    DaoMeta_OrderBy["Version"] = "version";
    DaoMeta_OrderBy["NewContract"] = "newContract";
    DaoMeta_OrderBy["Http"] = "http";
})(DaoMeta_OrderBy = exports.DaoMeta_OrderBy || (exports.DaoMeta_OrderBy = {}));
var Member_OrderBy;
(function (Member_OrderBy) {
    Member_OrderBy["Id"] = "id";
    Member_OrderBy["CreatedAt"] = "createdAt";
    Member_OrderBy["Moloch"] = "moloch";
    Member_OrderBy["MolochAddress"] = "molochAddress";
    Member_OrderBy["MemberAddress"] = "memberAddress";
    Member_OrderBy["DelegateKey"] = "delegateKey";
    Member_OrderBy["Shares"] = "shares";
    Member_OrderBy["Loot"] = "loot";
    Member_OrderBy["Exists"] = "exists";
    Member_OrderBy["HighestIndexYesVote"] = "highestIndexYesVote";
    Member_OrderBy["TokenTribute"] = "tokenTribute";
    Member_OrderBy["DidRagequit"] = "didRagequit";
    Member_OrderBy["Votes"] = "votes";
    Member_OrderBy["Submissions"] = "submissions";
    Member_OrderBy["TokenBalances"] = "tokenBalances";
    Member_OrderBy["RageQuits"] = "rageQuits";
    Member_OrderBy["ProposedToKick"] = "proposedToKick";
    Member_OrderBy["Kicked"] = "kicked";
    Member_OrderBy["Jailed"] = "jailed";
})(Member_OrderBy = exports.Member_OrderBy || (exports.Member_OrderBy = {}));
var MinionAction_OrderBy;
(function (MinionAction_OrderBy) {
    MinionAction_OrderBy["Id"] = "id";
    MinionAction_OrderBy["Proposal"] = "proposal";
    MinionAction_OrderBy["MinionAddress"] = "minionAddress";
    MinionAction_OrderBy["MolochAddress"] = "molochAddress";
    MinionAction_OrderBy["Target"] = "target";
    MinionAction_OrderBy["Value"] = "value";
    MinionAction_OrderBy["Data"] = "data";
    MinionAction_OrderBy["Index"] = "index";
})(MinionAction_OrderBy = exports.MinionAction_OrderBy || (exports.MinionAction_OrderBy = {}));
var MinionStream_OrderBy;
(function (MinionStream_OrderBy) {
    MinionStream_OrderBy["Id"] = "id";
    MinionStream_OrderBy["ProposalId"] = "proposalId";
    MinionStream_OrderBy["CreatedAt"] = "createdAt";
    MinionStream_OrderBy["To"] = "to";
    MinionStream_OrderBy["TokenAddress"] = "tokenAddress";
    MinionStream_OrderBy["SuperTokenAddress"] = "superTokenAddress";
    MinionStream_OrderBy["Rate"] = "rate";
    MinionStream_OrderBy["MinDeposit"] = "minDeposit";
    MinionStream_OrderBy["Proposer"] = "proposer";
    MinionStream_OrderBy["Executed"] = "executed";
    MinionStream_OrderBy["ExecutedBlock"] = "executedBlock";
    MinionStream_OrderBy["ExecutedAt"] = "executedAt";
    MinionStream_OrderBy["ExecTxHash"] = "execTxHash";
    MinionStream_OrderBy["Active"] = "active";
    MinionStream_OrderBy["Ctx"] = "ctx";
    MinionStream_OrderBy["CanceledAt"] = "canceledAt";
    MinionStream_OrderBy["CanceledBy"] = "canceledBy";
    MinionStream_OrderBy["Minion"] = "minion";
})(MinionStream_OrderBy = exports.MinionStream_OrderBy || (exports.MinionStream_OrderBy = {}));
var Minion_OrderBy;
(function (Minion_OrderBy) {
    Minion_OrderBy["Id"] = "id";
    Minion_OrderBy["CreatedAt"] = "createdAt";
    Minion_OrderBy["MinionAddress"] = "minionAddress";
    Minion_OrderBy["MolochAddress"] = "molochAddress";
    Minion_OrderBy["Moloch"] = "moloch";
    Minion_OrderBy["Details"] = "details";
    Minion_OrderBy["MinionType"] = "minionType";
    Minion_OrderBy["Proposals"] = "proposals";
    Minion_OrderBy["UberHausAddress"] = "uberHausAddress";
    Minion_OrderBy["UberHaus"] = "uberHaus";
    Minion_OrderBy["UberHausDelegateRewardFactor"] = "uberHausDelegateRewardFactor";
    Minion_OrderBy["UberHausDelegate"] = "uberHausDelegate";
    Minion_OrderBy["Version"] = "version";
    Minion_OrderBy["MinQuorum"] = "minQuorum";
    Minion_OrderBy["Streams"] = "streams";
})(Minion_OrderBy = exports.Minion_OrderBy || (exports.Minion_OrderBy = {}));
var MolochTransaction_OrderBy;
(function (MolochTransaction_OrderBy) {
    MolochTransaction_OrderBy["Id"] = "id";
    MolochTransaction_OrderBy["CreatedAt"] = "createdAt";
})(MolochTransaction_OrderBy = exports.MolochTransaction_OrderBy || (exports.MolochTransaction_OrderBy = {}));
var Moloch_OrderBy;
(function (Moloch_OrderBy) {
    Moloch_OrderBy["Id"] = "id";
    Moloch_OrderBy["Version"] = "version";
    Moloch_OrderBy["Summoner"] = "summoner";
    Moloch_OrderBy["NewContract"] = "newContract";
    Moloch_OrderBy["Deleted"] = "deleted";
    Moloch_OrderBy["SummoningTime"] = "summoningTime";
    Moloch_OrderBy["CreatedAt"] = "createdAt";
    Moloch_OrderBy["PeriodDuration"] = "periodDuration";
    Moloch_OrderBy["VotingPeriodLength"] = "votingPeriodLength";
    Moloch_OrderBy["GracePeriodLength"] = "gracePeriodLength";
    Moloch_OrderBy["ProposalDeposit"] = "proposalDeposit";
    Moloch_OrderBy["DilutionBound"] = "dilutionBound";
    Moloch_OrderBy["ProcessingReward"] = "processingReward";
    Moloch_OrderBy["DepositToken"] = "depositToken";
    Moloch_OrderBy["ApprovedTokens"] = "approvedTokens";
    Moloch_OrderBy["GuildBankAddress"] = "guildBankAddress";
    Moloch_OrderBy["GuildBankBalanceV1"] = "guildBankBalanceV1";
    Moloch_OrderBy["Tokens"] = "tokens";
    Moloch_OrderBy["Members"] = "members";
    Moloch_OrderBy["TokenBalances"] = "tokenBalances";
    Moloch_OrderBy["Proposals"] = "proposals";
    Moloch_OrderBy["RageQuits"] = "rageQuits";
    Moloch_OrderBy["Minions"] = "minions";
    Moloch_OrderBy["TotalShares"] = "totalShares";
    Moloch_OrderBy["TotalLoot"] = "totalLoot";
})(Moloch_OrderBy = exports.Moloch_OrderBy || (exports.Moloch_OrderBy = {}));
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["Asc"] = "asc";
    OrderDirection["Desc"] = "desc";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
var ProposalEscrow_OrderBy;
(function (ProposalEscrow_OrderBy) {
    ProposalEscrow_OrderBy["Id"] = "id";
    ProposalEscrow_OrderBy["Proposal"] = "proposal";
    ProposalEscrow_OrderBy["MinionAddress"] = "minionAddress";
    ProposalEscrow_OrderBy["MolochAddress"] = "molochAddress";
    ProposalEscrow_OrderBy["Proposer"] = "proposer";
    ProposalEscrow_OrderBy["TokenAddresses"] = "tokenAddresses";
    ProposalEscrow_OrderBy["TokenTypes"] = "tokenTypes";
    ProposalEscrow_OrderBy["TokenIds"] = "tokenIds";
    ProposalEscrow_OrderBy["Amounts"] = "amounts";
})(ProposalEscrow_OrderBy = exports.ProposalEscrow_OrderBy || (exports.ProposalEscrow_OrderBy = {}));
var Proposal_OrderBy;
(function (Proposal_OrderBy) {
    Proposal_OrderBy["Id"] = "id";
    Proposal_OrderBy["CreatedAt"] = "createdAt";
    Proposal_OrderBy["ProposalIndex"] = "proposalIndex";
    Proposal_OrderBy["ProposalId"] = "proposalId";
    Proposal_OrderBy["Moloch"] = "moloch";
    Proposal_OrderBy["MolochAddress"] = "molochAddress";
    Proposal_OrderBy["Member"] = "member";
    Proposal_OrderBy["MemberAddress"] = "memberAddress";
    Proposal_OrderBy["DelegateKey"] = "delegateKey";
    Proposal_OrderBy["Applicant"] = "applicant";
    Proposal_OrderBy["Proposer"] = "proposer";
    Proposal_OrderBy["Sponsor"] = "sponsor";
    Proposal_OrderBy["Processor"] = "processor";
    Proposal_OrderBy["SharesRequested"] = "sharesRequested";
    Proposal_OrderBy["LootRequested"] = "lootRequested";
    Proposal_OrderBy["TributeOffered"] = "tributeOffered";
    Proposal_OrderBy["TributeToken"] = "tributeToken";
    Proposal_OrderBy["TributeTokenSymbol"] = "tributeTokenSymbol";
    Proposal_OrderBy["TributeTokenDecimals"] = "tributeTokenDecimals";
    Proposal_OrderBy["PaymentRequested"] = "paymentRequested";
    Proposal_OrderBy["PaymentToken"] = "paymentToken";
    Proposal_OrderBy["PaymentTokenSymbol"] = "paymentTokenSymbol";
    Proposal_OrderBy["PaymentTokenDecimals"] = "paymentTokenDecimals";
    Proposal_OrderBy["StartingPeriod"] = "startingPeriod";
    Proposal_OrderBy["YesVotes"] = "yesVotes";
    Proposal_OrderBy["NoVotes"] = "noVotes";
    Proposal_OrderBy["Sponsored"] = "sponsored";
    Proposal_OrderBy["SponsoredAt"] = "sponsoredAt";
    Proposal_OrderBy["Processed"] = "processed";
    Proposal_OrderBy["ProcessedAt"] = "processedAt";
    Proposal_OrderBy["DidPass"] = "didPass";
    Proposal_OrderBy["Cancelled"] = "cancelled";
    Proposal_OrderBy["CancelledAt"] = "cancelledAt";
    Proposal_OrderBy["Aborted"] = "aborted";
    Proposal_OrderBy["Whitelist"] = "whitelist";
    Proposal_OrderBy["Guildkick"] = "guildkick";
    Proposal_OrderBy["NewMember"] = "newMember";
    Proposal_OrderBy["Trade"] = "trade";
    Proposal_OrderBy["Details"] = "details";
    Proposal_OrderBy["MaxTotalSharesAndLootAtYesVote"] = "maxTotalSharesAndLootAtYesVote";
    Proposal_OrderBy["Votes"] = "votes";
    Proposal_OrderBy["YesShares"] = "yesShares";
    Proposal_OrderBy["NoShares"] = "noShares";
    Proposal_OrderBy["VotingPeriodStarts"] = "votingPeriodStarts";
    Proposal_OrderBy["VotingPeriodEnds"] = "votingPeriodEnds";
    Proposal_OrderBy["GracePeriodEnds"] = "gracePeriodEnds";
    Proposal_OrderBy["MolochVersion"] = "molochVersion";
    Proposal_OrderBy["IsMinion"] = "isMinion";
    Proposal_OrderBy["UberHausMinionExecuted"] = "uberHausMinionExecuted";
    Proposal_OrderBy["Executed"] = "executed";
    Proposal_OrderBy["MinionAddress"] = "minionAddress";
    Proposal_OrderBy["Minion"] = "minion";
    Proposal_OrderBy["Escrow"] = "escrow";
    Proposal_OrderBy["Actions"] = "actions";
})(Proposal_OrderBy = exports.Proposal_OrderBy || (exports.Proposal_OrderBy = {}));
var RageQuit_OrderBy;
(function (RageQuit_OrderBy) {
    RageQuit_OrderBy["Id"] = "id";
    RageQuit_OrderBy["CreatedAt"] = "createdAt";
    RageQuit_OrderBy["Moloch"] = "moloch";
    RageQuit_OrderBy["MolochAddress"] = "molochAddress";
    RageQuit_OrderBy["Member"] = "member";
    RageQuit_OrderBy["MemberAddress"] = "memberAddress";
    RageQuit_OrderBy["Shares"] = "shares";
    RageQuit_OrderBy["Loot"] = "loot";
})(RageQuit_OrderBy = exports.RageQuit_OrderBy || (exports.RageQuit_OrderBy = {}));
var TokenBalance_OrderBy;
(function (TokenBalance_OrderBy) {
    TokenBalance_OrderBy["Id"] = "id";
    TokenBalance_OrderBy["Moloch"] = "moloch";
    TokenBalance_OrderBy["Token"] = "token";
    TokenBalance_OrderBy["TokenBalance"] = "tokenBalance";
    TokenBalance_OrderBy["Member"] = "member";
    TokenBalance_OrderBy["GuildBank"] = "guildBank";
    TokenBalance_OrderBy["EcrowBank"] = "ecrowBank";
    TokenBalance_OrderBy["MemberBank"] = "memberBank";
})(TokenBalance_OrderBy = exports.TokenBalance_OrderBy || (exports.TokenBalance_OrderBy = {}));
var Token_OrderBy;
(function (Token_OrderBy) {
    Token_OrderBy["Id"] = "id";
    Token_OrderBy["Moloch"] = "moloch";
    Token_OrderBy["TokenAddress"] = "tokenAddress";
    Token_OrderBy["Whitelisted"] = "whitelisted";
    Token_OrderBy["Symbol"] = "symbol";
    Token_OrderBy["Decimals"] = "decimals";
})(Token_OrderBy = exports.Token_OrderBy || (exports.Token_OrderBy = {}));
var Vote_OrderBy;
(function (Vote_OrderBy) {
    Vote_OrderBy["Id"] = "id";
    Vote_OrderBy["CreatedAt"] = "createdAt";
    Vote_OrderBy["Proposal"] = "proposal";
    Vote_OrderBy["Member"] = "member";
    Vote_OrderBy["UintVote"] = "uintVote";
    Vote_OrderBy["MolochAddress"] = "molochAddress";
    Vote_OrderBy["MemberAddress"] = "memberAddress";
    Vote_OrderBy["MemberPower"] = "memberPower";
    Vote_OrderBy["ProposalIndex"] = "proposalIndex";
    Vote_OrderBy["DelegateKey"] = "delegateKey";
})(Vote_OrderBy = exports.Vote_OrderBy || (exports.Vote_OrderBy = {}));
var _SubgraphErrorPolicy_;
(function (_SubgraphErrorPolicy_) {
    /** Data will be returned even if the subgraph has indexing errors */
    _SubgraphErrorPolicy_["Allow"] = "allow";
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    _SubgraphErrorPolicy_["Deny"] = "deny";
})(_SubgraphErrorPolicy_ = exports._SubgraphErrorPolicy_ || (exports._SubgraphErrorPolicy_ = {}));
exports.GetDaoHausMembershipsDocument = graphql_tag_1.default `
    query GetDaoHausMemberships($memberAddress: Bytes!) {
  members(
    where: {memberAddress: $memberAddress, didRagequit: false, exists: true}
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
exports.GetDaoHausTitlesDocument = graphql_tag_1.default `
    query GetDaoHausTitles($ids: [ID!]) {
  daoMetas(where: {id_in: $ids}) {
    id
    title
  }
}
    `;
const defaultWrapper = (action, _operationName) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        GetDaoHausMemberships(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetDaoHausMembershipsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetDaoHausMemberships');
        },
        GetDaoHausTitles(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetDaoHausTitlesDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetDaoHausTitles');
        }
    };
}
exports.getSdk = getSdk;
//# sourceMappingURL=daohaus-sdk.js.map