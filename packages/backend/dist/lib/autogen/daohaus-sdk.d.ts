import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigDecimal: any;
    BigInt: any;
    Bytes: any;
};
export declare type Block_Height = {
    hash: Maybe<Scalars['Bytes']>;
    number: Maybe<Scalars['Int']>;
};
export declare type DaoMeta = {
    __typename?: 'DaoMeta';
    id: Scalars['ID'];
    title: Maybe<Scalars['String']>;
    version: Maybe<Scalars['String']>;
    newContract: Maybe<Scalars['String']>;
    http: Maybe<Scalars['String']>;
};
export declare type DaoMeta_Filter = {
    id: Maybe<Scalars['ID']>;
    id_not: Maybe<Scalars['ID']>;
    id_gt: Maybe<Scalars['ID']>;
    id_lt: Maybe<Scalars['ID']>;
    id_gte: Maybe<Scalars['ID']>;
    id_lte: Maybe<Scalars['ID']>;
    id_in: Maybe<Array<Scalars['ID']>>;
    id_not_in: Maybe<Array<Scalars['ID']>>;
    title: Maybe<Scalars['String']>;
    title_not: Maybe<Scalars['String']>;
    title_gt: Maybe<Scalars['String']>;
    title_lt: Maybe<Scalars['String']>;
    title_gte: Maybe<Scalars['String']>;
    title_lte: Maybe<Scalars['String']>;
    title_in: Maybe<Array<Scalars['String']>>;
    title_not_in: Maybe<Array<Scalars['String']>>;
    title_contains: Maybe<Scalars['String']>;
    title_not_contains: Maybe<Scalars['String']>;
    title_starts_with: Maybe<Scalars['String']>;
    title_not_starts_with: Maybe<Scalars['String']>;
    title_ends_with: Maybe<Scalars['String']>;
    title_not_ends_with: Maybe<Scalars['String']>;
    version: Maybe<Scalars['String']>;
    version_not: Maybe<Scalars['String']>;
    version_gt: Maybe<Scalars['String']>;
    version_lt: Maybe<Scalars['String']>;
    version_gte: Maybe<Scalars['String']>;
    version_lte: Maybe<Scalars['String']>;
    version_in: Maybe<Array<Scalars['String']>>;
    version_not_in: Maybe<Array<Scalars['String']>>;
    version_contains: Maybe<Scalars['String']>;
    version_not_contains: Maybe<Scalars['String']>;
    version_starts_with: Maybe<Scalars['String']>;
    version_not_starts_with: Maybe<Scalars['String']>;
    version_ends_with: Maybe<Scalars['String']>;
    version_not_ends_with: Maybe<Scalars['String']>;
    newContract: Maybe<Scalars['String']>;
    newContract_not: Maybe<Scalars['String']>;
    newContract_gt: Maybe<Scalars['String']>;
    newContract_lt: Maybe<Scalars['String']>;
    newContract_gte: Maybe<Scalars['String']>;
    newContract_lte: Maybe<Scalars['String']>;
    newContract_in: Maybe<Array<Scalars['String']>>;
    newContract_not_in: Maybe<Array<Scalars['String']>>;
    newContract_contains: Maybe<Scalars['String']>;
    newContract_not_contains: Maybe<Scalars['String']>;
    newContract_starts_with: Maybe<Scalars['String']>;
    newContract_not_starts_with: Maybe<Scalars['String']>;
    newContract_ends_with: Maybe<Scalars['String']>;
    newContract_not_ends_with: Maybe<Scalars['String']>;
    http: Maybe<Scalars['String']>;
    http_not: Maybe<Scalars['String']>;
    http_gt: Maybe<Scalars['String']>;
    http_lt: Maybe<Scalars['String']>;
    http_gte: Maybe<Scalars['String']>;
    http_lte: Maybe<Scalars['String']>;
    http_in: Maybe<Array<Scalars['String']>>;
    http_not_in: Maybe<Array<Scalars['String']>>;
    http_contains: Maybe<Scalars['String']>;
    http_not_contains: Maybe<Scalars['String']>;
    http_starts_with: Maybe<Scalars['String']>;
    http_not_starts_with: Maybe<Scalars['String']>;
    http_ends_with: Maybe<Scalars['String']>;
    http_not_ends_with: Maybe<Scalars['String']>;
};
export declare enum DaoMeta_OrderBy {
    Id = "id",
    Title = "title",
    Version = "version",
    NewContract = "newContract",
    Http = "http"
}
export declare type Member = {
    __typename?: 'Member';
    id: Scalars['ID'];
    createdAt: Scalars['String'];
    moloch: Moloch;
    molochAddress: Scalars['Bytes'];
    memberAddress: Scalars['Bytes'];
    delegateKey: Scalars['Bytes'];
    shares: Scalars['BigInt'];
    loot: Maybe<Scalars['BigInt']>;
    exists: Scalars['Boolean'];
    highestIndexYesVote: Maybe<Proposal>;
    tokenTribute: Scalars['BigInt'];
    didRagequit: Scalars['Boolean'];
    votes: Maybe<Array<Vote>>;
    submissions: Maybe<Array<Proposal>>;
    tokenBalances: Maybe<Array<TokenBalance>>;
    rageQuits: Maybe<Array<RageQuit>>;
    proposedToKick: Maybe<Scalars['Boolean']>;
    kicked: Maybe<Scalars['Boolean']>;
    jailed: Maybe<Scalars['BigInt']>;
};
export declare type MemberVotesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Vote_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Vote_Filter>;
};
export declare type MemberSubmissionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Proposal_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Proposal_Filter>;
};
export declare type MemberTokenBalancesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<TokenBalance_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<TokenBalance_Filter>;
};
export declare type MemberRageQuitsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<RageQuit_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<RageQuit_Filter>;
};
export declare type Member_Filter = {
    id: Maybe<Scalars['ID']>;
    id_not: Maybe<Scalars['ID']>;
    id_gt: Maybe<Scalars['ID']>;
    id_lt: Maybe<Scalars['ID']>;
    id_gte: Maybe<Scalars['ID']>;
    id_lte: Maybe<Scalars['ID']>;
    id_in: Maybe<Array<Scalars['ID']>>;
    id_not_in: Maybe<Array<Scalars['ID']>>;
    createdAt: Maybe<Scalars['String']>;
    createdAt_not: Maybe<Scalars['String']>;
    createdAt_gt: Maybe<Scalars['String']>;
    createdAt_lt: Maybe<Scalars['String']>;
    createdAt_gte: Maybe<Scalars['String']>;
    createdAt_lte: Maybe<Scalars['String']>;
    createdAt_in: Maybe<Array<Scalars['String']>>;
    createdAt_not_in: Maybe<Array<Scalars['String']>>;
    createdAt_contains: Maybe<Scalars['String']>;
    createdAt_not_contains: Maybe<Scalars['String']>;
    createdAt_starts_with: Maybe<Scalars['String']>;
    createdAt_not_starts_with: Maybe<Scalars['String']>;
    createdAt_ends_with: Maybe<Scalars['String']>;
    createdAt_not_ends_with: Maybe<Scalars['String']>;
    moloch: Maybe<Scalars['String']>;
    moloch_not: Maybe<Scalars['String']>;
    moloch_gt: Maybe<Scalars['String']>;
    moloch_lt: Maybe<Scalars['String']>;
    moloch_gte: Maybe<Scalars['String']>;
    moloch_lte: Maybe<Scalars['String']>;
    moloch_in: Maybe<Array<Scalars['String']>>;
    moloch_not_in: Maybe<Array<Scalars['String']>>;
    moloch_contains: Maybe<Scalars['String']>;
    moloch_not_contains: Maybe<Scalars['String']>;
    moloch_starts_with: Maybe<Scalars['String']>;
    moloch_not_starts_with: Maybe<Scalars['String']>;
    moloch_ends_with: Maybe<Scalars['String']>;
    moloch_not_ends_with: Maybe<Scalars['String']>;
    molochAddress: Maybe<Scalars['Bytes']>;
    molochAddress_not: Maybe<Scalars['Bytes']>;
    molochAddress_in: Maybe<Array<Scalars['Bytes']>>;
    molochAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    molochAddress_contains: Maybe<Scalars['Bytes']>;
    molochAddress_not_contains: Maybe<Scalars['Bytes']>;
    memberAddress: Maybe<Scalars['Bytes']>;
    memberAddress_not: Maybe<Scalars['Bytes']>;
    memberAddress_in: Maybe<Array<Scalars['Bytes']>>;
    memberAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    memberAddress_contains: Maybe<Scalars['Bytes']>;
    memberAddress_not_contains: Maybe<Scalars['Bytes']>;
    delegateKey: Maybe<Scalars['Bytes']>;
    delegateKey_not: Maybe<Scalars['Bytes']>;
    delegateKey_in: Maybe<Array<Scalars['Bytes']>>;
    delegateKey_not_in: Maybe<Array<Scalars['Bytes']>>;
    delegateKey_contains: Maybe<Scalars['Bytes']>;
    delegateKey_not_contains: Maybe<Scalars['Bytes']>;
    shares: Maybe<Scalars['BigInt']>;
    shares_not: Maybe<Scalars['BigInt']>;
    shares_gt: Maybe<Scalars['BigInt']>;
    shares_lt: Maybe<Scalars['BigInt']>;
    shares_gte: Maybe<Scalars['BigInt']>;
    shares_lte: Maybe<Scalars['BigInt']>;
    shares_in: Maybe<Array<Scalars['BigInt']>>;
    shares_not_in: Maybe<Array<Scalars['BigInt']>>;
    loot: Maybe<Scalars['BigInt']>;
    loot_not: Maybe<Scalars['BigInt']>;
    loot_gt: Maybe<Scalars['BigInt']>;
    loot_lt: Maybe<Scalars['BigInt']>;
    loot_gte: Maybe<Scalars['BigInt']>;
    loot_lte: Maybe<Scalars['BigInt']>;
    loot_in: Maybe<Array<Scalars['BigInt']>>;
    loot_not_in: Maybe<Array<Scalars['BigInt']>>;
    exists: Maybe<Scalars['Boolean']>;
    exists_not: Maybe<Scalars['Boolean']>;
    exists_in: Maybe<Array<Scalars['Boolean']>>;
    exists_not_in: Maybe<Array<Scalars['Boolean']>>;
    highestIndexYesVote: Maybe<Scalars['String']>;
    highestIndexYesVote_not: Maybe<Scalars['String']>;
    highestIndexYesVote_gt: Maybe<Scalars['String']>;
    highestIndexYesVote_lt: Maybe<Scalars['String']>;
    highestIndexYesVote_gte: Maybe<Scalars['String']>;
    highestIndexYesVote_lte: Maybe<Scalars['String']>;
    highestIndexYesVote_in: Maybe<Array<Scalars['String']>>;
    highestIndexYesVote_not_in: Maybe<Array<Scalars['String']>>;
    highestIndexYesVote_contains: Maybe<Scalars['String']>;
    highestIndexYesVote_not_contains: Maybe<Scalars['String']>;
    highestIndexYesVote_starts_with: Maybe<Scalars['String']>;
    highestIndexYesVote_not_starts_with: Maybe<Scalars['String']>;
    highestIndexYesVote_ends_with: Maybe<Scalars['String']>;
    highestIndexYesVote_not_ends_with: Maybe<Scalars['String']>;
    tokenTribute: Maybe<Scalars['BigInt']>;
    tokenTribute_not: Maybe<Scalars['BigInt']>;
    tokenTribute_gt: Maybe<Scalars['BigInt']>;
    tokenTribute_lt: Maybe<Scalars['BigInt']>;
    tokenTribute_gte: Maybe<Scalars['BigInt']>;
    tokenTribute_lte: Maybe<Scalars['BigInt']>;
    tokenTribute_in: Maybe<Array<Scalars['BigInt']>>;
    tokenTribute_not_in: Maybe<Array<Scalars['BigInt']>>;
    didRagequit: Maybe<Scalars['Boolean']>;
    didRagequit_not: Maybe<Scalars['Boolean']>;
    didRagequit_in: Maybe<Array<Scalars['Boolean']>>;
    didRagequit_not_in: Maybe<Array<Scalars['Boolean']>>;
    proposedToKick: Maybe<Scalars['Boolean']>;
    proposedToKick_not: Maybe<Scalars['Boolean']>;
    proposedToKick_in: Maybe<Array<Scalars['Boolean']>>;
    proposedToKick_not_in: Maybe<Array<Scalars['Boolean']>>;
    kicked: Maybe<Scalars['Boolean']>;
    kicked_not: Maybe<Scalars['Boolean']>;
    kicked_in: Maybe<Array<Scalars['Boolean']>>;
    kicked_not_in: Maybe<Array<Scalars['Boolean']>>;
    jailed: Maybe<Scalars['BigInt']>;
    jailed_not: Maybe<Scalars['BigInt']>;
    jailed_gt: Maybe<Scalars['BigInt']>;
    jailed_lt: Maybe<Scalars['BigInt']>;
    jailed_gte: Maybe<Scalars['BigInt']>;
    jailed_lte: Maybe<Scalars['BigInt']>;
    jailed_in: Maybe<Array<Scalars['BigInt']>>;
    jailed_not_in: Maybe<Array<Scalars['BigInt']>>;
};
export declare enum Member_OrderBy {
    Id = "id",
    CreatedAt = "createdAt",
    Moloch = "moloch",
    MolochAddress = "molochAddress",
    MemberAddress = "memberAddress",
    DelegateKey = "delegateKey",
    Shares = "shares",
    Loot = "loot",
    Exists = "exists",
    HighestIndexYesVote = "highestIndexYesVote",
    TokenTribute = "tokenTribute",
    DidRagequit = "didRagequit",
    Votes = "votes",
    Submissions = "submissions",
    TokenBalances = "tokenBalances",
    RageQuits = "rageQuits",
    ProposedToKick = "proposedToKick",
    Kicked = "kicked",
    Jailed = "jailed"
}
export declare type Minion = {
    __typename?: 'Minion';
    id: Scalars['ID'];
    createdAt: Scalars['String'];
    minionAddress: Scalars['Bytes'];
    molochAddress: Scalars['Bytes'];
    moloch: Moloch;
    details: Scalars['String'];
    minionType: Scalars['String'];
    proposals: Maybe<Array<Proposal>>;
    uberHausAddress: Maybe<Scalars['Bytes']>;
    uberHaus: Maybe<Moloch>;
    uberHausDelegateRewardFactor: Maybe<Scalars['BigInt']>;
    uberHausDelegate: Maybe<Scalars['Bytes']>;
    version: Maybe<Scalars['String']>;
    minQuorum: Maybe<Scalars['BigInt']>;
    streams: Maybe<Array<MinionStream>>;
};
export declare type MinionProposalsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Proposal_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Proposal_Filter>;
};
export declare type MinionStreamsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<MinionStream_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<MinionStream_Filter>;
};
export declare type MinionAction = {
    __typename?: 'MinionAction';
    id: Scalars['ID'];
    proposal: Proposal;
    minionAddress: Scalars['Bytes'];
    molochAddress: Scalars['Bytes'];
    target: Scalars['Bytes'];
    value: Scalars['BigInt'];
    data: Scalars['Bytes'];
    index: Scalars['BigInt'];
};
export declare type MinionAction_Filter = {
    id: Maybe<Scalars['ID']>;
    id_not: Maybe<Scalars['ID']>;
    id_gt: Maybe<Scalars['ID']>;
    id_lt: Maybe<Scalars['ID']>;
    id_gte: Maybe<Scalars['ID']>;
    id_lte: Maybe<Scalars['ID']>;
    id_in: Maybe<Array<Scalars['ID']>>;
    id_not_in: Maybe<Array<Scalars['ID']>>;
    proposal: Maybe<Scalars['String']>;
    proposal_not: Maybe<Scalars['String']>;
    proposal_gt: Maybe<Scalars['String']>;
    proposal_lt: Maybe<Scalars['String']>;
    proposal_gte: Maybe<Scalars['String']>;
    proposal_lte: Maybe<Scalars['String']>;
    proposal_in: Maybe<Array<Scalars['String']>>;
    proposal_not_in: Maybe<Array<Scalars['String']>>;
    proposal_contains: Maybe<Scalars['String']>;
    proposal_not_contains: Maybe<Scalars['String']>;
    proposal_starts_with: Maybe<Scalars['String']>;
    proposal_not_starts_with: Maybe<Scalars['String']>;
    proposal_ends_with: Maybe<Scalars['String']>;
    proposal_not_ends_with: Maybe<Scalars['String']>;
    minionAddress: Maybe<Scalars['Bytes']>;
    minionAddress_not: Maybe<Scalars['Bytes']>;
    minionAddress_in: Maybe<Array<Scalars['Bytes']>>;
    minionAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    minionAddress_contains: Maybe<Scalars['Bytes']>;
    minionAddress_not_contains: Maybe<Scalars['Bytes']>;
    molochAddress: Maybe<Scalars['Bytes']>;
    molochAddress_not: Maybe<Scalars['Bytes']>;
    molochAddress_in: Maybe<Array<Scalars['Bytes']>>;
    molochAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    molochAddress_contains: Maybe<Scalars['Bytes']>;
    molochAddress_not_contains: Maybe<Scalars['Bytes']>;
    target: Maybe<Scalars['Bytes']>;
    target_not: Maybe<Scalars['Bytes']>;
    target_in: Maybe<Array<Scalars['Bytes']>>;
    target_not_in: Maybe<Array<Scalars['Bytes']>>;
    target_contains: Maybe<Scalars['Bytes']>;
    target_not_contains: Maybe<Scalars['Bytes']>;
    value: Maybe<Scalars['BigInt']>;
    value_not: Maybe<Scalars['BigInt']>;
    value_gt: Maybe<Scalars['BigInt']>;
    value_lt: Maybe<Scalars['BigInt']>;
    value_gte: Maybe<Scalars['BigInt']>;
    value_lte: Maybe<Scalars['BigInt']>;
    value_in: Maybe<Array<Scalars['BigInt']>>;
    value_not_in: Maybe<Array<Scalars['BigInt']>>;
    data: Maybe<Scalars['Bytes']>;
    data_not: Maybe<Scalars['Bytes']>;
    data_in: Maybe<Array<Scalars['Bytes']>>;
    data_not_in: Maybe<Array<Scalars['Bytes']>>;
    data_contains: Maybe<Scalars['Bytes']>;
    data_not_contains: Maybe<Scalars['Bytes']>;
    index: Maybe<Scalars['BigInt']>;
    index_not: Maybe<Scalars['BigInt']>;
    index_gt: Maybe<Scalars['BigInt']>;
    index_lt: Maybe<Scalars['BigInt']>;
    index_gte: Maybe<Scalars['BigInt']>;
    index_lte: Maybe<Scalars['BigInt']>;
    index_in: Maybe<Array<Scalars['BigInt']>>;
    index_not_in: Maybe<Array<Scalars['BigInt']>>;
};
export declare enum MinionAction_OrderBy {
    Id = "id",
    Proposal = "proposal",
    MinionAddress = "minionAddress",
    MolochAddress = "molochAddress",
    Target = "target",
    Value = "value",
    Data = "data",
    Index = "index"
}
export declare type MinionStream = {
    __typename?: 'MinionStream';
    id: Scalars['ID'];
    proposalId: Scalars['String'];
    createdAt: Scalars['String'];
    to: Scalars['Bytes'];
    tokenAddress: Scalars['Bytes'];
    superTokenAddress: Scalars['Bytes'];
    rate: Scalars['BigInt'];
    minDeposit: Scalars['BigInt'];
    proposer: Scalars['Bytes'];
    executed: Scalars['Boolean'];
    executedBlock: Maybe<Scalars['BigInt']>;
    executedAt: Maybe<Scalars['String']>;
    execTxHash: Maybe<Scalars['Bytes']>;
    active: Scalars['Boolean'];
    ctx: Scalars['Bytes'];
    canceledAt: Maybe<Scalars['String']>;
    canceledBy: Maybe<Scalars['Bytes']>;
    minion: Minion;
};
export declare type MinionStream_Filter = {
    id: Maybe<Scalars['ID']>;
    id_not: Maybe<Scalars['ID']>;
    id_gt: Maybe<Scalars['ID']>;
    id_lt: Maybe<Scalars['ID']>;
    id_gte: Maybe<Scalars['ID']>;
    id_lte: Maybe<Scalars['ID']>;
    id_in: Maybe<Array<Scalars['ID']>>;
    id_not_in: Maybe<Array<Scalars['ID']>>;
    proposalId: Maybe<Scalars['String']>;
    proposalId_not: Maybe<Scalars['String']>;
    proposalId_gt: Maybe<Scalars['String']>;
    proposalId_lt: Maybe<Scalars['String']>;
    proposalId_gte: Maybe<Scalars['String']>;
    proposalId_lte: Maybe<Scalars['String']>;
    proposalId_in: Maybe<Array<Scalars['String']>>;
    proposalId_not_in: Maybe<Array<Scalars['String']>>;
    proposalId_contains: Maybe<Scalars['String']>;
    proposalId_not_contains: Maybe<Scalars['String']>;
    proposalId_starts_with: Maybe<Scalars['String']>;
    proposalId_not_starts_with: Maybe<Scalars['String']>;
    proposalId_ends_with: Maybe<Scalars['String']>;
    proposalId_not_ends_with: Maybe<Scalars['String']>;
    createdAt: Maybe<Scalars['String']>;
    createdAt_not: Maybe<Scalars['String']>;
    createdAt_gt: Maybe<Scalars['String']>;
    createdAt_lt: Maybe<Scalars['String']>;
    createdAt_gte: Maybe<Scalars['String']>;
    createdAt_lte: Maybe<Scalars['String']>;
    createdAt_in: Maybe<Array<Scalars['String']>>;
    createdAt_not_in: Maybe<Array<Scalars['String']>>;
    createdAt_contains: Maybe<Scalars['String']>;
    createdAt_not_contains: Maybe<Scalars['String']>;
    createdAt_starts_with: Maybe<Scalars['String']>;
    createdAt_not_starts_with: Maybe<Scalars['String']>;
    createdAt_ends_with: Maybe<Scalars['String']>;
    createdAt_not_ends_with: Maybe<Scalars['String']>;
    to: Maybe<Scalars['Bytes']>;
    to_not: Maybe<Scalars['Bytes']>;
    to_in: Maybe<Array<Scalars['Bytes']>>;
    to_not_in: Maybe<Array<Scalars['Bytes']>>;
    to_contains: Maybe<Scalars['Bytes']>;
    to_not_contains: Maybe<Scalars['Bytes']>;
    tokenAddress: Maybe<Scalars['Bytes']>;
    tokenAddress_not: Maybe<Scalars['Bytes']>;
    tokenAddress_in: Maybe<Array<Scalars['Bytes']>>;
    tokenAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    tokenAddress_contains: Maybe<Scalars['Bytes']>;
    tokenAddress_not_contains: Maybe<Scalars['Bytes']>;
    superTokenAddress: Maybe<Scalars['Bytes']>;
    superTokenAddress_not: Maybe<Scalars['Bytes']>;
    superTokenAddress_in: Maybe<Array<Scalars['Bytes']>>;
    superTokenAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    superTokenAddress_contains: Maybe<Scalars['Bytes']>;
    superTokenAddress_not_contains: Maybe<Scalars['Bytes']>;
    rate: Maybe<Scalars['BigInt']>;
    rate_not: Maybe<Scalars['BigInt']>;
    rate_gt: Maybe<Scalars['BigInt']>;
    rate_lt: Maybe<Scalars['BigInt']>;
    rate_gte: Maybe<Scalars['BigInt']>;
    rate_lte: Maybe<Scalars['BigInt']>;
    rate_in: Maybe<Array<Scalars['BigInt']>>;
    rate_not_in: Maybe<Array<Scalars['BigInt']>>;
    minDeposit: Maybe<Scalars['BigInt']>;
    minDeposit_not: Maybe<Scalars['BigInt']>;
    minDeposit_gt: Maybe<Scalars['BigInt']>;
    minDeposit_lt: Maybe<Scalars['BigInt']>;
    minDeposit_gte: Maybe<Scalars['BigInt']>;
    minDeposit_lte: Maybe<Scalars['BigInt']>;
    minDeposit_in: Maybe<Array<Scalars['BigInt']>>;
    minDeposit_not_in: Maybe<Array<Scalars['BigInt']>>;
    proposer: Maybe<Scalars['Bytes']>;
    proposer_not: Maybe<Scalars['Bytes']>;
    proposer_in: Maybe<Array<Scalars['Bytes']>>;
    proposer_not_in: Maybe<Array<Scalars['Bytes']>>;
    proposer_contains: Maybe<Scalars['Bytes']>;
    proposer_not_contains: Maybe<Scalars['Bytes']>;
    executed: Maybe<Scalars['Boolean']>;
    executed_not: Maybe<Scalars['Boolean']>;
    executed_in: Maybe<Array<Scalars['Boolean']>>;
    executed_not_in: Maybe<Array<Scalars['Boolean']>>;
    executedBlock: Maybe<Scalars['BigInt']>;
    executedBlock_not: Maybe<Scalars['BigInt']>;
    executedBlock_gt: Maybe<Scalars['BigInt']>;
    executedBlock_lt: Maybe<Scalars['BigInt']>;
    executedBlock_gte: Maybe<Scalars['BigInt']>;
    executedBlock_lte: Maybe<Scalars['BigInt']>;
    executedBlock_in: Maybe<Array<Scalars['BigInt']>>;
    executedBlock_not_in: Maybe<Array<Scalars['BigInt']>>;
    executedAt: Maybe<Scalars['String']>;
    executedAt_not: Maybe<Scalars['String']>;
    executedAt_gt: Maybe<Scalars['String']>;
    executedAt_lt: Maybe<Scalars['String']>;
    executedAt_gte: Maybe<Scalars['String']>;
    executedAt_lte: Maybe<Scalars['String']>;
    executedAt_in: Maybe<Array<Scalars['String']>>;
    executedAt_not_in: Maybe<Array<Scalars['String']>>;
    executedAt_contains: Maybe<Scalars['String']>;
    executedAt_not_contains: Maybe<Scalars['String']>;
    executedAt_starts_with: Maybe<Scalars['String']>;
    executedAt_not_starts_with: Maybe<Scalars['String']>;
    executedAt_ends_with: Maybe<Scalars['String']>;
    executedAt_not_ends_with: Maybe<Scalars['String']>;
    execTxHash: Maybe<Scalars['Bytes']>;
    execTxHash_not: Maybe<Scalars['Bytes']>;
    execTxHash_in: Maybe<Array<Scalars['Bytes']>>;
    execTxHash_not_in: Maybe<Array<Scalars['Bytes']>>;
    execTxHash_contains: Maybe<Scalars['Bytes']>;
    execTxHash_not_contains: Maybe<Scalars['Bytes']>;
    active: Maybe<Scalars['Boolean']>;
    active_not: Maybe<Scalars['Boolean']>;
    active_in: Maybe<Array<Scalars['Boolean']>>;
    active_not_in: Maybe<Array<Scalars['Boolean']>>;
    ctx: Maybe<Scalars['Bytes']>;
    ctx_not: Maybe<Scalars['Bytes']>;
    ctx_in: Maybe<Array<Scalars['Bytes']>>;
    ctx_not_in: Maybe<Array<Scalars['Bytes']>>;
    ctx_contains: Maybe<Scalars['Bytes']>;
    ctx_not_contains: Maybe<Scalars['Bytes']>;
    canceledAt: Maybe<Scalars['String']>;
    canceledAt_not: Maybe<Scalars['String']>;
    canceledAt_gt: Maybe<Scalars['String']>;
    canceledAt_lt: Maybe<Scalars['String']>;
    canceledAt_gte: Maybe<Scalars['String']>;
    canceledAt_lte: Maybe<Scalars['String']>;
    canceledAt_in: Maybe<Array<Scalars['String']>>;
    canceledAt_not_in: Maybe<Array<Scalars['String']>>;
    canceledAt_contains: Maybe<Scalars['String']>;
    canceledAt_not_contains: Maybe<Scalars['String']>;
    canceledAt_starts_with: Maybe<Scalars['String']>;
    canceledAt_not_starts_with: Maybe<Scalars['String']>;
    canceledAt_ends_with: Maybe<Scalars['String']>;
    canceledAt_not_ends_with: Maybe<Scalars['String']>;
    canceledBy: Maybe<Scalars['Bytes']>;
    canceledBy_not: Maybe<Scalars['Bytes']>;
    canceledBy_in: Maybe<Array<Scalars['Bytes']>>;
    canceledBy_not_in: Maybe<Array<Scalars['Bytes']>>;
    canceledBy_contains: Maybe<Scalars['Bytes']>;
    canceledBy_not_contains: Maybe<Scalars['Bytes']>;
    minion: Maybe<Scalars['String']>;
    minion_not: Maybe<Scalars['String']>;
    minion_gt: Maybe<Scalars['String']>;
    minion_lt: Maybe<Scalars['String']>;
    minion_gte: Maybe<Scalars['String']>;
    minion_lte: Maybe<Scalars['String']>;
    minion_in: Maybe<Array<Scalars['String']>>;
    minion_not_in: Maybe<Array<Scalars['String']>>;
    minion_contains: Maybe<Scalars['String']>;
    minion_not_contains: Maybe<Scalars['String']>;
    minion_starts_with: Maybe<Scalars['String']>;
    minion_not_starts_with: Maybe<Scalars['String']>;
    minion_ends_with: Maybe<Scalars['String']>;
    minion_not_ends_with: Maybe<Scalars['String']>;
};
export declare enum MinionStream_OrderBy {
    Id = "id",
    ProposalId = "proposalId",
    CreatedAt = "createdAt",
    To = "to",
    TokenAddress = "tokenAddress",
    SuperTokenAddress = "superTokenAddress",
    Rate = "rate",
    MinDeposit = "minDeposit",
    Proposer = "proposer",
    Executed = "executed",
    ExecutedBlock = "executedBlock",
    ExecutedAt = "executedAt",
    ExecTxHash = "execTxHash",
    Active = "active",
    Ctx = "ctx",
    CanceledAt = "canceledAt",
    CanceledBy = "canceledBy",
    Minion = "minion"
}
export declare type Minion_Filter = {
    id: Maybe<Scalars['ID']>;
    id_not: Maybe<Scalars['ID']>;
    id_gt: Maybe<Scalars['ID']>;
    id_lt: Maybe<Scalars['ID']>;
    id_gte: Maybe<Scalars['ID']>;
    id_lte: Maybe<Scalars['ID']>;
    id_in: Maybe<Array<Scalars['ID']>>;
    id_not_in: Maybe<Array<Scalars['ID']>>;
    createdAt: Maybe<Scalars['String']>;
    createdAt_not: Maybe<Scalars['String']>;
    createdAt_gt: Maybe<Scalars['String']>;
    createdAt_lt: Maybe<Scalars['String']>;
    createdAt_gte: Maybe<Scalars['String']>;
    createdAt_lte: Maybe<Scalars['String']>;
    createdAt_in: Maybe<Array<Scalars['String']>>;
    createdAt_not_in: Maybe<Array<Scalars['String']>>;
    createdAt_contains: Maybe<Scalars['String']>;
    createdAt_not_contains: Maybe<Scalars['String']>;
    createdAt_starts_with: Maybe<Scalars['String']>;
    createdAt_not_starts_with: Maybe<Scalars['String']>;
    createdAt_ends_with: Maybe<Scalars['String']>;
    createdAt_not_ends_with: Maybe<Scalars['String']>;
    minionAddress: Maybe<Scalars['Bytes']>;
    minionAddress_not: Maybe<Scalars['Bytes']>;
    minionAddress_in: Maybe<Array<Scalars['Bytes']>>;
    minionAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    minionAddress_contains: Maybe<Scalars['Bytes']>;
    minionAddress_not_contains: Maybe<Scalars['Bytes']>;
    molochAddress: Maybe<Scalars['Bytes']>;
    molochAddress_not: Maybe<Scalars['Bytes']>;
    molochAddress_in: Maybe<Array<Scalars['Bytes']>>;
    molochAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    molochAddress_contains: Maybe<Scalars['Bytes']>;
    molochAddress_not_contains: Maybe<Scalars['Bytes']>;
    moloch: Maybe<Scalars['String']>;
    moloch_not: Maybe<Scalars['String']>;
    moloch_gt: Maybe<Scalars['String']>;
    moloch_lt: Maybe<Scalars['String']>;
    moloch_gte: Maybe<Scalars['String']>;
    moloch_lte: Maybe<Scalars['String']>;
    moloch_in: Maybe<Array<Scalars['String']>>;
    moloch_not_in: Maybe<Array<Scalars['String']>>;
    moloch_contains: Maybe<Scalars['String']>;
    moloch_not_contains: Maybe<Scalars['String']>;
    moloch_starts_with: Maybe<Scalars['String']>;
    moloch_not_starts_with: Maybe<Scalars['String']>;
    moloch_ends_with: Maybe<Scalars['String']>;
    moloch_not_ends_with: Maybe<Scalars['String']>;
    details: Maybe<Scalars['String']>;
    details_not: Maybe<Scalars['String']>;
    details_gt: Maybe<Scalars['String']>;
    details_lt: Maybe<Scalars['String']>;
    details_gte: Maybe<Scalars['String']>;
    details_lte: Maybe<Scalars['String']>;
    details_in: Maybe<Array<Scalars['String']>>;
    details_not_in: Maybe<Array<Scalars['String']>>;
    details_contains: Maybe<Scalars['String']>;
    details_not_contains: Maybe<Scalars['String']>;
    details_starts_with: Maybe<Scalars['String']>;
    details_not_starts_with: Maybe<Scalars['String']>;
    details_ends_with: Maybe<Scalars['String']>;
    details_not_ends_with: Maybe<Scalars['String']>;
    minionType: Maybe<Scalars['String']>;
    minionType_not: Maybe<Scalars['String']>;
    minionType_gt: Maybe<Scalars['String']>;
    minionType_lt: Maybe<Scalars['String']>;
    minionType_gte: Maybe<Scalars['String']>;
    minionType_lte: Maybe<Scalars['String']>;
    minionType_in: Maybe<Array<Scalars['String']>>;
    minionType_not_in: Maybe<Array<Scalars['String']>>;
    minionType_contains: Maybe<Scalars['String']>;
    minionType_not_contains: Maybe<Scalars['String']>;
    minionType_starts_with: Maybe<Scalars['String']>;
    minionType_not_starts_with: Maybe<Scalars['String']>;
    minionType_ends_with: Maybe<Scalars['String']>;
    minionType_not_ends_with: Maybe<Scalars['String']>;
    uberHausAddress: Maybe<Scalars['Bytes']>;
    uberHausAddress_not: Maybe<Scalars['Bytes']>;
    uberHausAddress_in: Maybe<Array<Scalars['Bytes']>>;
    uberHausAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    uberHausAddress_contains: Maybe<Scalars['Bytes']>;
    uberHausAddress_not_contains: Maybe<Scalars['Bytes']>;
    uberHaus: Maybe<Scalars['String']>;
    uberHaus_not: Maybe<Scalars['String']>;
    uberHaus_gt: Maybe<Scalars['String']>;
    uberHaus_lt: Maybe<Scalars['String']>;
    uberHaus_gte: Maybe<Scalars['String']>;
    uberHaus_lte: Maybe<Scalars['String']>;
    uberHaus_in: Maybe<Array<Scalars['String']>>;
    uberHaus_not_in: Maybe<Array<Scalars['String']>>;
    uberHaus_contains: Maybe<Scalars['String']>;
    uberHaus_not_contains: Maybe<Scalars['String']>;
    uberHaus_starts_with: Maybe<Scalars['String']>;
    uberHaus_not_starts_with: Maybe<Scalars['String']>;
    uberHaus_ends_with: Maybe<Scalars['String']>;
    uberHaus_not_ends_with: Maybe<Scalars['String']>;
    uberHausDelegateRewardFactor: Maybe<Scalars['BigInt']>;
    uberHausDelegateRewardFactor_not: Maybe<Scalars['BigInt']>;
    uberHausDelegateRewardFactor_gt: Maybe<Scalars['BigInt']>;
    uberHausDelegateRewardFactor_lt: Maybe<Scalars['BigInt']>;
    uberHausDelegateRewardFactor_gte: Maybe<Scalars['BigInt']>;
    uberHausDelegateRewardFactor_lte: Maybe<Scalars['BigInt']>;
    uberHausDelegateRewardFactor_in: Maybe<Array<Scalars['BigInt']>>;
    uberHausDelegateRewardFactor_not_in: Maybe<Array<Scalars['BigInt']>>;
    uberHausDelegate: Maybe<Scalars['Bytes']>;
    uberHausDelegate_not: Maybe<Scalars['Bytes']>;
    uberHausDelegate_in: Maybe<Array<Scalars['Bytes']>>;
    uberHausDelegate_not_in: Maybe<Array<Scalars['Bytes']>>;
    uberHausDelegate_contains: Maybe<Scalars['Bytes']>;
    uberHausDelegate_not_contains: Maybe<Scalars['Bytes']>;
    version: Maybe<Scalars['String']>;
    version_not: Maybe<Scalars['String']>;
    version_gt: Maybe<Scalars['String']>;
    version_lt: Maybe<Scalars['String']>;
    version_gte: Maybe<Scalars['String']>;
    version_lte: Maybe<Scalars['String']>;
    version_in: Maybe<Array<Scalars['String']>>;
    version_not_in: Maybe<Array<Scalars['String']>>;
    version_contains: Maybe<Scalars['String']>;
    version_not_contains: Maybe<Scalars['String']>;
    version_starts_with: Maybe<Scalars['String']>;
    version_not_starts_with: Maybe<Scalars['String']>;
    version_ends_with: Maybe<Scalars['String']>;
    version_not_ends_with: Maybe<Scalars['String']>;
    minQuorum: Maybe<Scalars['BigInt']>;
    minQuorum_not: Maybe<Scalars['BigInt']>;
    minQuorum_gt: Maybe<Scalars['BigInt']>;
    minQuorum_lt: Maybe<Scalars['BigInt']>;
    minQuorum_gte: Maybe<Scalars['BigInt']>;
    minQuorum_lte: Maybe<Scalars['BigInt']>;
    minQuorum_in: Maybe<Array<Scalars['BigInt']>>;
    minQuorum_not_in: Maybe<Array<Scalars['BigInt']>>;
};
export declare enum Minion_OrderBy {
    Id = "id",
    CreatedAt = "createdAt",
    MinionAddress = "minionAddress",
    MolochAddress = "molochAddress",
    Moloch = "moloch",
    Details = "details",
    MinionType = "minionType",
    Proposals = "proposals",
    UberHausAddress = "uberHausAddress",
    UberHaus = "uberHaus",
    UberHausDelegateRewardFactor = "uberHausDelegateRewardFactor",
    UberHausDelegate = "uberHausDelegate",
    Version = "version",
    MinQuorum = "minQuorum",
    Streams = "streams"
}
export declare type Moloch = {
    __typename?: 'Moloch';
    id: Scalars['ID'];
    version: Maybe<Scalars['String']>;
    summoner: Scalars['Bytes'];
    newContract: Maybe<Scalars['String']>;
    deleted: Maybe<Scalars['Boolean']>;
    summoningTime: Scalars['BigInt'];
    createdAt: Scalars['String'];
    periodDuration: Scalars['BigInt'];
    votingPeriodLength: Scalars['BigInt'];
    gracePeriodLength: Scalars['BigInt'];
    proposalDeposit: Scalars['BigInt'];
    dilutionBound: Scalars['BigInt'];
    processingReward: Scalars['BigInt'];
    depositToken: Maybe<Token>;
    approvedTokens: Array<Token>;
    guildBankAddress: Maybe<Scalars['Bytes']>;
    guildBankBalanceV1: Maybe<Scalars['BigInt']>;
    tokens: Maybe<Array<Token>>;
    members: Maybe<Array<Member>>;
    tokenBalances: Maybe<Array<TokenBalance>>;
    proposals: Maybe<Array<Proposal>>;
    rageQuits: Maybe<Array<RageQuit>>;
    minions: Maybe<Array<Minion>>;
    totalShares: Scalars['BigInt'];
    totalLoot: Scalars['BigInt'];
};
export declare type MolochApprovedTokensArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Token_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Token_Filter>;
};
export declare type MolochTokensArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Token_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Token_Filter>;
};
export declare type MolochMembersArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Member_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Member_Filter>;
};
export declare type MolochTokenBalancesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<TokenBalance_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<TokenBalance_Filter>;
};
export declare type MolochProposalsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Proposal_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Proposal_Filter>;
};
export declare type MolochRageQuitsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<RageQuit_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<RageQuit_Filter>;
};
export declare type MolochMinionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Minion_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Minion_Filter>;
};
export declare type MolochTransaction = {
    __typename?: 'MolochTransaction';
    id: Scalars['ID'];
    createdAt: Scalars['String'];
};
export declare type MolochTransaction_Filter = {
    id: Maybe<Scalars['ID']>;
    id_not: Maybe<Scalars['ID']>;
    id_gt: Maybe<Scalars['ID']>;
    id_lt: Maybe<Scalars['ID']>;
    id_gte: Maybe<Scalars['ID']>;
    id_lte: Maybe<Scalars['ID']>;
    id_in: Maybe<Array<Scalars['ID']>>;
    id_not_in: Maybe<Array<Scalars['ID']>>;
    createdAt: Maybe<Scalars['String']>;
    createdAt_not: Maybe<Scalars['String']>;
    createdAt_gt: Maybe<Scalars['String']>;
    createdAt_lt: Maybe<Scalars['String']>;
    createdAt_gte: Maybe<Scalars['String']>;
    createdAt_lte: Maybe<Scalars['String']>;
    createdAt_in: Maybe<Array<Scalars['String']>>;
    createdAt_not_in: Maybe<Array<Scalars['String']>>;
    createdAt_contains: Maybe<Scalars['String']>;
    createdAt_not_contains: Maybe<Scalars['String']>;
    createdAt_starts_with: Maybe<Scalars['String']>;
    createdAt_not_starts_with: Maybe<Scalars['String']>;
    createdAt_ends_with: Maybe<Scalars['String']>;
    createdAt_not_ends_with: Maybe<Scalars['String']>;
};
export declare enum MolochTransaction_OrderBy {
    Id = "id",
    CreatedAt = "createdAt"
}
export declare type Moloch_Filter = {
    id: Maybe<Scalars['ID']>;
    id_not: Maybe<Scalars['ID']>;
    id_gt: Maybe<Scalars['ID']>;
    id_lt: Maybe<Scalars['ID']>;
    id_gte: Maybe<Scalars['ID']>;
    id_lte: Maybe<Scalars['ID']>;
    id_in: Maybe<Array<Scalars['ID']>>;
    id_not_in: Maybe<Array<Scalars['ID']>>;
    version: Maybe<Scalars['String']>;
    version_not: Maybe<Scalars['String']>;
    version_gt: Maybe<Scalars['String']>;
    version_lt: Maybe<Scalars['String']>;
    version_gte: Maybe<Scalars['String']>;
    version_lte: Maybe<Scalars['String']>;
    version_in: Maybe<Array<Scalars['String']>>;
    version_not_in: Maybe<Array<Scalars['String']>>;
    version_contains: Maybe<Scalars['String']>;
    version_not_contains: Maybe<Scalars['String']>;
    version_starts_with: Maybe<Scalars['String']>;
    version_not_starts_with: Maybe<Scalars['String']>;
    version_ends_with: Maybe<Scalars['String']>;
    version_not_ends_with: Maybe<Scalars['String']>;
    summoner: Maybe<Scalars['Bytes']>;
    summoner_not: Maybe<Scalars['Bytes']>;
    summoner_in: Maybe<Array<Scalars['Bytes']>>;
    summoner_not_in: Maybe<Array<Scalars['Bytes']>>;
    summoner_contains: Maybe<Scalars['Bytes']>;
    summoner_not_contains: Maybe<Scalars['Bytes']>;
    newContract: Maybe<Scalars['String']>;
    newContract_not: Maybe<Scalars['String']>;
    newContract_gt: Maybe<Scalars['String']>;
    newContract_lt: Maybe<Scalars['String']>;
    newContract_gte: Maybe<Scalars['String']>;
    newContract_lte: Maybe<Scalars['String']>;
    newContract_in: Maybe<Array<Scalars['String']>>;
    newContract_not_in: Maybe<Array<Scalars['String']>>;
    newContract_contains: Maybe<Scalars['String']>;
    newContract_not_contains: Maybe<Scalars['String']>;
    newContract_starts_with: Maybe<Scalars['String']>;
    newContract_not_starts_with: Maybe<Scalars['String']>;
    newContract_ends_with: Maybe<Scalars['String']>;
    newContract_not_ends_with: Maybe<Scalars['String']>;
    deleted: Maybe<Scalars['Boolean']>;
    deleted_not: Maybe<Scalars['Boolean']>;
    deleted_in: Maybe<Array<Scalars['Boolean']>>;
    deleted_not_in: Maybe<Array<Scalars['Boolean']>>;
    summoningTime: Maybe<Scalars['BigInt']>;
    summoningTime_not: Maybe<Scalars['BigInt']>;
    summoningTime_gt: Maybe<Scalars['BigInt']>;
    summoningTime_lt: Maybe<Scalars['BigInt']>;
    summoningTime_gte: Maybe<Scalars['BigInt']>;
    summoningTime_lte: Maybe<Scalars['BigInt']>;
    summoningTime_in: Maybe<Array<Scalars['BigInt']>>;
    summoningTime_not_in: Maybe<Array<Scalars['BigInt']>>;
    createdAt: Maybe<Scalars['String']>;
    createdAt_not: Maybe<Scalars['String']>;
    createdAt_gt: Maybe<Scalars['String']>;
    createdAt_lt: Maybe<Scalars['String']>;
    createdAt_gte: Maybe<Scalars['String']>;
    createdAt_lte: Maybe<Scalars['String']>;
    createdAt_in: Maybe<Array<Scalars['String']>>;
    createdAt_not_in: Maybe<Array<Scalars['String']>>;
    createdAt_contains: Maybe<Scalars['String']>;
    createdAt_not_contains: Maybe<Scalars['String']>;
    createdAt_starts_with: Maybe<Scalars['String']>;
    createdAt_not_starts_with: Maybe<Scalars['String']>;
    createdAt_ends_with: Maybe<Scalars['String']>;
    createdAt_not_ends_with: Maybe<Scalars['String']>;
    periodDuration: Maybe<Scalars['BigInt']>;
    periodDuration_not: Maybe<Scalars['BigInt']>;
    periodDuration_gt: Maybe<Scalars['BigInt']>;
    periodDuration_lt: Maybe<Scalars['BigInt']>;
    periodDuration_gte: Maybe<Scalars['BigInt']>;
    periodDuration_lte: Maybe<Scalars['BigInt']>;
    periodDuration_in: Maybe<Array<Scalars['BigInt']>>;
    periodDuration_not_in: Maybe<Array<Scalars['BigInt']>>;
    votingPeriodLength: Maybe<Scalars['BigInt']>;
    votingPeriodLength_not: Maybe<Scalars['BigInt']>;
    votingPeriodLength_gt: Maybe<Scalars['BigInt']>;
    votingPeriodLength_lt: Maybe<Scalars['BigInt']>;
    votingPeriodLength_gte: Maybe<Scalars['BigInt']>;
    votingPeriodLength_lte: Maybe<Scalars['BigInt']>;
    votingPeriodLength_in: Maybe<Array<Scalars['BigInt']>>;
    votingPeriodLength_not_in: Maybe<Array<Scalars['BigInt']>>;
    gracePeriodLength: Maybe<Scalars['BigInt']>;
    gracePeriodLength_not: Maybe<Scalars['BigInt']>;
    gracePeriodLength_gt: Maybe<Scalars['BigInt']>;
    gracePeriodLength_lt: Maybe<Scalars['BigInt']>;
    gracePeriodLength_gte: Maybe<Scalars['BigInt']>;
    gracePeriodLength_lte: Maybe<Scalars['BigInt']>;
    gracePeriodLength_in: Maybe<Array<Scalars['BigInt']>>;
    gracePeriodLength_not_in: Maybe<Array<Scalars['BigInt']>>;
    proposalDeposit: Maybe<Scalars['BigInt']>;
    proposalDeposit_not: Maybe<Scalars['BigInt']>;
    proposalDeposit_gt: Maybe<Scalars['BigInt']>;
    proposalDeposit_lt: Maybe<Scalars['BigInt']>;
    proposalDeposit_gte: Maybe<Scalars['BigInt']>;
    proposalDeposit_lte: Maybe<Scalars['BigInt']>;
    proposalDeposit_in: Maybe<Array<Scalars['BigInt']>>;
    proposalDeposit_not_in: Maybe<Array<Scalars['BigInt']>>;
    dilutionBound: Maybe<Scalars['BigInt']>;
    dilutionBound_not: Maybe<Scalars['BigInt']>;
    dilutionBound_gt: Maybe<Scalars['BigInt']>;
    dilutionBound_lt: Maybe<Scalars['BigInt']>;
    dilutionBound_gte: Maybe<Scalars['BigInt']>;
    dilutionBound_lte: Maybe<Scalars['BigInt']>;
    dilutionBound_in: Maybe<Array<Scalars['BigInt']>>;
    dilutionBound_not_in: Maybe<Array<Scalars['BigInt']>>;
    processingReward: Maybe<Scalars['BigInt']>;
    processingReward_not: Maybe<Scalars['BigInt']>;
    processingReward_gt: Maybe<Scalars['BigInt']>;
    processingReward_lt: Maybe<Scalars['BigInt']>;
    processingReward_gte: Maybe<Scalars['BigInt']>;
    processingReward_lte: Maybe<Scalars['BigInt']>;
    processingReward_in: Maybe<Array<Scalars['BigInt']>>;
    processingReward_not_in: Maybe<Array<Scalars['BigInt']>>;
    depositToken: Maybe<Scalars['String']>;
    depositToken_not: Maybe<Scalars['String']>;
    depositToken_gt: Maybe<Scalars['String']>;
    depositToken_lt: Maybe<Scalars['String']>;
    depositToken_gte: Maybe<Scalars['String']>;
    depositToken_lte: Maybe<Scalars['String']>;
    depositToken_in: Maybe<Array<Scalars['String']>>;
    depositToken_not_in: Maybe<Array<Scalars['String']>>;
    depositToken_contains: Maybe<Scalars['String']>;
    depositToken_not_contains: Maybe<Scalars['String']>;
    depositToken_starts_with: Maybe<Scalars['String']>;
    depositToken_not_starts_with: Maybe<Scalars['String']>;
    depositToken_ends_with: Maybe<Scalars['String']>;
    depositToken_not_ends_with: Maybe<Scalars['String']>;
    approvedTokens: Maybe<Array<Scalars['String']>>;
    approvedTokens_not: Maybe<Array<Scalars['String']>>;
    approvedTokens_contains: Maybe<Array<Scalars['String']>>;
    approvedTokens_not_contains: Maybe<Array<Scalars['String']>>;
    guildBankAddress: Maybe<Scalars['Bytes']>;
    guildBankAddress_not: Maybe<Scalars['Bytes']>;
    guildBankAddress_in: Maybe<Array<Scalars['Bytes']>>;
    guildBankAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    guildBankAddress_contains: Maybe<Scalars['Bytes']>;
    guildBankAddress_not_contains: Maybe<Scalars['Bytes']>;
    guildBankBalanceV1: Maybe<Scalars['BigInt']>;
    guildBankBalanceV1_not: Maybe<Scalars['BigInt']>;
    guildBankBalanceV1_gt: Maybe<Scalars['BigInt']>;
    guildBankBalanceV1_lt: Maybe<Scalars['BigInt']>;
    guildBankBalanceV1_gte: Maybe<Scalars['BigInt']>;
    guildBankBalanceV1_lte: Maybe<Scalars['BigInt']>;
    guildBankBalanceV1_in: Maybe<Array<Scalars['BigInt']>>;
    guildBankBalanceV1_not_in: Maybe<Array<Scalars['BigInt']>>;
    totalShares: Maybe<Scalars['BigInt']>;
    totalShares_not: Maybe<Scalars['BigInt']>;
    totalShares_gt: Maybe<Scalars['BigInt']>;
    totalShares_lt: Maybe<Scalars['BigInt']>;
    totalShares_gte: Maybe<Scalars['BigInt']>;
    totalShares_lte: Maybe<Scalars['BigInt']>;
    totalShares_in: Maybe<Array<Scalars['BigInt']>>;
    totalShares_not_in: Maybe<Array<Scalars['BigInt']>>;
    totalLoot: Maybe<Scalars['BigInt']>;
    totalLoot_not: Maybe<Scalars['BigInt']>;
    totalLoot_gt: Maybe<Scalars['BigInt']>;
    totalLoot_lt: Maybe<Scalars['BigInt']>;
    totalLoot_gte: Maybe<Scalars['BigInt']>;
    totalLoot_lte: Maybe<Scalars['BigInt']>;
    totalLoot_in: Maybe<Array<Scalars['BigInt']>>;
    totalLoot_not_in: Maybe<Array<Scalars['BigInt']>>;
};
export declare enum Moloch_OrderBy {
    Id = "id",
    Version = "version",
    Summoner = "summoner",
    NewContract = "newContract",
    Deleted = "deleted",
    SummoningTime = "summoningTime",
    CreatedAt = "createdAt",
    PeriodDuration = "periodDuration",
    VotingPeriodLength = "votingPeriodLength",
    GracePeriodLength = "gracePeriodLength",
    ProposalDeposit = "proposalDeposit",
    DilutionBound = "dilutionBound",
    ProcessingReward = "processingReward",
    DepositToken = "depositToken",
    ApprovedTokens = "approvedTokens",
    GuildBankAddress = "guildBankAddress",
    GuildBankBalanceV1 = "guildBankBalanceV1",
    Tokens = "tokens",
    Members = "members",
    TokenBalances = "tokenBalances",
    Proposals = "proposals",
    RageQuits = "rageQuits",
    Minions = "minions",
    TotalShares = "totalShares",
    TotalLoot = "totalLoot"
}
export declare enum OrderDirection {
    Asc = "asc",
    Desc = "desc"
}
export declare type Proposal = {
    __typename?: 'Proposal';
    id: Scalars['ID'];
    createdAt: Scalars['String'];
    proposalIndex: Maybe<Scalars['BigInt']>;
    proposalId: Scalars['BigInt'];
    moloch: Moloch;
    molochAddress: Scalars['Bytes'];
    member: Member;
    memberAddress: Scalars['Bytes'];
    delegateKey: Scalars['Bytes'];
    applicant: Scalars['Bytes'];
    proposer: Maybe<Scalars['Bytes']>;
    sponsor: Scalars['Bytes'];
    processor: Maybe<Scalars['Bytes']>;
    sharesRequested: Scalars['BigInt'];
    lootRequested: Scalars['BigInt'];
    tributeOffered: Scalars['BigInt'];
    tributeToken: Scalars['Bytes'];
    tributeTokenSymbol: Maybe<Scalars['String']>;
    tributeTokenDecimals: Maybe<Scalars['BigInt']>;
    paymentRequested: Scalars['BigInt'];
    paymentToken: Scalars['Bytes'];
    paymentTokenSymbol: Maybe<Scalars['String']>;
    paymentTokenDecimals: Maybe<Scalars['BigInt']>;
    startingPeriod: Maybe<Scalars['BigInt']>;
    yesVotes: Scalars['BigInt'];
    noVotes: Scalars['BigInt'];
    sponsored: Scalars['Boolean'];
    sponsoredAt: Maybe<Scalars['String']>;
    processed: Scalars['Boolean'];
    processedAt: Maybe<Scalars['String']>;
    didPass: Scalars['Boolean'];
    cancelled: Maybe<Scalars['Boolean']>;
    cancelledAt: Maybe<Scalars['String']>;
    aborted: Maybe<Scalars['Boolean']>;
    whitelist: Maybe<Scalars['Boolean']>;
    guildkick: Maybe<Scalars['Boolean']>;
    newMember: Maybe<Scalars['Boolean']>;
    trade: Maybe<Scalars['Boolean']>;
    details: Maybe<Scalars['String']>;
    maxTotalSharesAndLootAtYesVote: Maybe<Scalars['BigInt']>;
    votes: Maybe<Array<Vote>>;
    yesShares: Scalars['BigInt'];
    noShares: Scalars['BigInt'];
    votingPeriodStarts: Scalars['BigInt'];
    votingPeriodEnds: Scalars['BigInt'];
    gracePeriodEnds: Scalars['BigInt'];
    molochVersion: Scalars['String'];
    isMinion: Scalars['Boolean'];
    uberHausMinionExecuted: Maybe<Scalars['Boolean']>;
    executed: Maybe<Scalars['Boolean']>;
    minionAddress: Maybe<Scalars['Bytes']>;
    minion: Maybe<Minion>;
    escrow: Maybe<ProposalEscrow>;
    actions: Maybe<Array<MinionAction>>;
};
export declare type ProposalVotesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Vote_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Vote_Filter>;
};
export declare type ProposalActionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<MinionAction_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<MinionAction_Filter>;
};
export declare type ProposalEscrow = {
    __typename?: 'ProposalEscrow';
    id: Scalars['ID'];
    proposal: Proposal;
    minionAddress: Scalars['Bytes'];
    molochAddress: Scalars['Bytes'];
    proposer: Scalars['Bytes'];
    tokenAddresses: Maybe<Array<Scalars['Bytes']>>;
    tokenTypes: Maybe<Array<Scalars['BigInt']>>;
    tokenIds: Maybe<Array<Scalars['BigInt']>>;
    amounts: Maybe<Array<Scalars['BigInt']>>;
};
export declare type ProposalEscrow_Filter = {
    id: Maybe<Scalars['ID']>;
    id_not: Maybe<Scalars['ID']>;
    id_gt: Maybe<Scalars['ID']>;
    id_lt: Maybe<Scalars['ID']>;
    id_gte: Maybe<Scalars['ID']>;
    id_lte: Maybe<Scalars['ID']>;
    id_in: Maybe<Array<Scalars['ID']>>;
    id_not_in: Maybe<Array<Scalars['ID']>>;
    proposal: Maybe<Scalars['String']>;
    proposal_not: Maybe<Scalars['String']>;
    proposal_gt: Maybe<Scalars['String']>;
    proposal_lt: Maybe<Scalars['String']>;
    proposal_gte: Maybe<Scalars['String']>;
    proposal_lte: Maybe<Scalars['String']>;
    proposal_in: Maybe<Array<Scalars['String']>>;
    proposal_not_in: Maybe<Array<Scalars['String']>>;
    proposal_contains: Maybe<Scalars['String']>;
    proposal_not_contains: Maybe<Scalars['String']>;
    proposal_starts_with: Maybe<Scalars['String']>;
    proposal_not_starts_with: Maybe<Scalars['String']>;
    proposal_ends_with: Maybe<Scalars['String']>;
    proposal_not_ends_with: Maybe<Scalars['String']>;
    minionAddress: Maybe<Scalars['Bytes']>;
    minionAddress_not: Maybe<Scalars['Bytes']>;
    minionAddress_in: Maybe<Array<Scalars['Bytes']>>;
    minionAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    minionAddress_contains: Maybe<Scalars['Bytes']>;
    minionAddress_not_contains: Maybe<Scalars['Bytes']>;
    molochAddress: Maybe<Scalars['Bytes']>;
    molochAddress_not: Maybe<Scalars['Bytes']>;
    molochAddress_in: Maybe<Array<Scalars['Bytes']>>;
    molochAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    molochAddress_contains: Maybe<Scalars['Bytes']>;
    molochAddress_not_contains: Maybe<Scalars['Bytes']>;
    proposer: Maybe<Scalars['Bytes']>;
    proposer_not: Maybe<Scalars['Bytes']>;
    proposer_in: Maybe<Array<Scalars['Bytes']>>;
    proposer_not_in: Maybe<Array<Scalars['Bytes']>>;
    proposer_contains: Maybe<Scalars['Bytes']>;
    proposer_not_contains: Maybe<Scalars['Bytes']>;
    tokenAddresses: Maybe<Array<Scalars['Bytes']>>;
    tokenAddresses_not: Maybe<Array<Scalars['Bytes']>>;
    tokenAddresses_contains: Maybe<Array<Scalars['Bytes']>>;
    tokenAddresses_not_contains: Maybe<Array<Scalars['Bytes']>>;
    tokenTypes: Maybe<Array<Scalars['BigInt']>>;
    tokenTypes_not: Maybe<Array<Scalars['BigInt']>>;
    tokenTypes_contains: Maybe<Array<Scalars['BigInt']>>;
    tokenTypes_not_contains: Maybe<Array<Scalars['BigInt']>>;
    tokenIds: Maybe<Array<Scalars['BigInt']>>;
    tokenIds_not: Maybe<Array<Scalars['BigInt']>>;
    tokenIds_contains: Maybe<Array<Scalars['BigInt']>>;
    tokenIds_not_contains: Maybe<Array<Scalars['BigInt']>>;
    amounts: Maybe<Array<Scalars['BigInt']>>;
    amounts_not: Maybe<Array<Scalars['BigInt']>>;
    amounts_contains: Maybe<Array<Scalars['BigInt']>>;
    amounts_not_contains: Maybe<Array<Scalars['BigInt']>>;
};
export declare enum ProposalEscrow_OrderBy {
    Id = "id",
    Proposal = "proposal",
    MinionAddress = "minionAddress",
    MolochAddress = "molochAddress",
    Proposer = "proposer",
    TokenAddresses = "tokenAddresses",
    TokenTypes = "tokenTypes",
    TokenIds = "tokenIds",
    Amounts = "amounts"
}
export declare type Proposal_Filter = {
    id: Maybe<Scalars['ID']>;
    id_not: Maybe<Scalars['ID']>;
    id_gt: Maybe<Scalars['ID']>;
    id_lt: Maybe<Scalars['ID']>;
    id_gte: Maybe<Scalars['ID']>;
    id_lte: Maybe<Scalars['ID']>;
    id_in: Maybe<Array<Scalars['ID']>>;
    id_not_in: Maybe<Array<Scalars['ID']>>;
    createdAt: Maybe<Scalars['String']>;
    createdAt_not: Maybe<Scalars['String']>;
    createdAt_gt: Maybe<Scalars['String']>;
    createdAt_lt: Maybe<Scalars['String']>;
    createdAt_gte: Maybe<Scalars['String']>;
    createdAt_lte: Maybe<Scalars['String']>;
    createdAt_in: Maybe<Array<Scalars['String']>>;
    createdAt_not_in: Maybe<Array<Scalars['String']>>;
    createdAt_contains: Maybe<Scalars['String']>;
    createdAt_not_contains: Maybe<Scalars['String']>;
    createdAt_starts_with: Maybe<Scalars['String']>;
    createdAt_not_starts_with: Maybe<Scalars['String']>;
    createdAt_ends_with: Maybe<Scalars['String']>;
    createdAt_not_ends_with: Maybe<Scalars['String']>;
    proposalIndex: Maybe<Scalars['BigInt']>;
    proposalIndex_not: Maybe<Scalars['BigInt']>;
    proposalIndex_gt: Maybe<Scalars['BigInt']>;
    proposalIndex_lt: Maybe<Scalars['BigInt']>;
    proposalIndex_gte: Maybe<Scalars['BigInt']>;
    proposalIndex_lte: Maybe<Scalars['BigInt']>;
    proposalIndex_in: Maybe<Array<Scalars['BigInt']>>;
    proposalIndex_not_in: Maybe<Array<Scalars['BigInt']>>;
    proposalId: Maybe<Scalars['BigInt']>;
    proposalId_not: Maybe<Scalars['BigInt']>;
    proposalId_gt: Maybe<Scalars['BigInt']>;
    proposalId_lt: Maybe<Scalars['BigInt']>;
    proposalId_gte: Maybe<Scalars['BigInt']>;
    proposalId_lte: Maybe<Scalars['BigInt']>;
    proposalId_in: Maybe<Array<Scalars['BigInt']>>;
    proposalId_not_in: Maybe<Array<Scalars['BigInt']>>;
    moloch: Maybe<Scalars['String']>;
    moloch_not: Maybe<Scalars['String']>;
    moloch_gt: Maybe<Scalars['String']>;
    moloch_lt: Maybe<Scalars['String']>;
    moloch_gte: Maybe<Scalars['String']>;
    moloch_lte: Maybe<Scalars['String']>;
    moloch_in: Maybe<Array<Scalars['String']>>;
    moloch_not_in: Maybe<Array<Scalars['String']>>;
    moloch_contains: Maybe<Scalars['String']>;
    moloch_not_contains: Maybe<Scalars['String']>;
    moloch_starts_with: Maybe<Scalars['String']>;
    moloch_not_starts_with: Maybe<Scalars['String']>;
    moloch_ends_with: Maybe<Scalars['String']>;
    moloch_not_ends_with: Maybe<Scalars['String']>;
    molochAddress: Maybe<Scalars['Bytes']>;
    molochAddress_not: Maybe<Scalars['Bytes']>;
    molochAddress_in: Maybe<Array<Scalars['Bytes']>>;
    molochAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    molochAddress_contains: Maybe<Scalars['Bytes']>;
    molochAddress_not_contains: Maybe<Scalars['Bytes']>;
    member: Maybe<Scalars['String']>;
    member_not: Maybe<Scalars['String']>;
    member_gt: Maybe<Scalars['String']>;
    member_lt: Maybe<Scalars['String']>;
    member_gte: Maybe<Scalars['String']>;
    member_lte: Maybe<Scalars['String']>;
    member_in: Maybe<Array<Scalars['String']>>;
    member_not_in: Maybe<Array<Scalars['String']>>;
    member_contains: Maybe<Scalars['String']>;
    member_not_contains: Maybe<Scalars['String']>;
    member_starts_with: Maybe<Scalars['String']>;
    member_not_starts_with: Maybe<Scalars['String']>;
    member_ends_with: Maybe<Scalars['String']>;
    member_not_ends_with: Maybe<Scalars['String']>;
    memberAddress: Maybe<Scalars['Bytes']>;
    memberAddress_not: Maybe<Scalars['Bytes']>;
    memberAddress_in: Maybe<Array<Scalars['Bytes']>>;
    memberAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    memberAddress_contains: Maybe<Scalars['Bytes']>;
    memberAddress_not_contains: Maybe<Scalars['Bytes']>;
    delegateKey: Maybe<Scalars['Bytes']>;
    delegateKey_not: Maybe<Scalars['Bytes']>;
    delegateKey_in: Maybe<Array<Scalars['Bytes']>>;
    delegateKey_not_in: Maybe<Array<Scalars['Bytes']>>;
    delegateKey_contains: Maybe<Scalars['Bytes']>;
    delegateKey_not_contains: Maybe<Scalars['Bytes']>;
    applicant: Maybe<Scalars['Bytes']>;
    applicant_not: Maybe<Scalars['Bytes']>;
    applicant_in: Maybe<Array<Scalars['Bytes']>>;
    applicant_not_in: Maybe<Array<Scalars['Bytes']>>;
    applicant_contains: Maybe<Scalars['Bytes']>;
    applicant_not_contains: Maybe<Scalars['Bytes']>;
    proposer: Maybe<Scalars['Bytes']>;
    proposer_not: Maybe<Scalars['Bytes']>;
    proposer_in: Maybe<Array<Scalars['Bytes']>>;
    proposer_not_in: Maybe<Array<Scalars['Bytes']>>;
    proposer_contains: Maybe<Scalars['Bytes']>;
    proposer_not_contains: Maybe<Scalars['Bytes']>;
    sponsor: Maybe<Scalars['Bytes']>;
    sponsor_not: Maybe<Scalars['Bytes']>;
    sponsor_in: Maybe<Array<Scalars['Bytes']>>;
    sponsor_not_in: Maybe<Array<Scalars['Bytes']>>;
    sponsor_contains: Maybe<Scalars['Bytes']>;
    sponsor_not_contains: Maybe<Scalars['Bytes']>;
    processor: Maybe<Scalars['Bytes']>;
    processor_not: Maybe<Scalars['Bytes']>;
    processor_in: Maybe<Array<Scalars['Bytes']>>;
    processor_not_in: Maybe<Array<Scalars['Bytes']>>;
    processor_contains: Maybe<Scalars['Bytes']>;
    processor_not_contains: Maybe<Scalars['Bytes']>;
    sharesRequested: Maybe<Scalars['BigInt']>;
    sharesRequested_not: Maybe<Scalars['BigInt']>;
    sharesRequested_gt: Maybe<Scalars['BigInt']>;
    sharesRequested_lt: Maybe<Scalars['BigInt']>;
    sharesRequested_gte: Maybe<Scalars['BigInt']>;
    sharesRequested_lte: Maybe<Scalars['BigInt']>;
    sharesRequested_in: Maybe<Array<Scalars['BigInt']>>;
    sharesRequested_not_in: Maybe<Array<Scalars['BigInt']>>;
    lootRequested: Maybe<Scalars['BigInt']>;
    lootRequested_not: Maybe<Scalars['BigInt']>;
    lootRequested_gt: Maybe<Scalars['BigInt']>;
    lootRequested_lt: Maybe<Scalars['BigInt']>;
    lootRequested_gte: Maybe<Scalars['BigInt']>;
    lootRequested_lte: Maybe<Scalars['BigInt']>;
    lootRequested_in: Maybe<Array<Scalars['BigInt']>>;
    lootRequested_not_in: Maybe<Array<Scalars['BigInt']>>;
    tributeOffered: Maybe<Scalars['BigInt']>;
    tributeOffered_not: Maybe<Scalars['BigInt']>;
    tributeOffered_gt: Maybe<Scalars['BigInt']>;
    tributeOffered_lt: Maybe<Scalars['BigInt']>;
    tributeOffered_gte: Maybe<Scalars['BigInt']>;
    tributeOffered_lte: Maybe<Scalars['BigInt']>;
    tributeOffered_in: Maybe<Array<Scalars['BigInt']>>;
    tributeOffered_not_in: Maybe<Array<Scalars['BigInt']>>;
    tributeToken: Maybe<Scalars['Bytes']>;
    tributeToken_not: Maybe<Scalars['Bytes']>;
    tributeToken_in: Maybe<Array<Scalars['Bytes']>>;
    tributeToken_not_in: Maybe<Array<Scalars['Bytes']>>;
    tributeToken_contains: Maybe<Scalars['Bytes']>;
    tributeToken_not_contains: Maybe<Scalars['Bytes']>;
    tributeTokenSymbol: Maybe<Scalars['String']>;
    tributeTokenSymbol_not: Maybe<Scalars['String']>;
    tributeTokenSymbol_gt: Maybe<Scalars['String']>;
    tributeTokenSymbol_lt: Maybe<Scalars['String']>;
    tributeTokenSymbol_gte: Maybe<Scalars['String']>;
    tributeTokenSymbol_lte: Maybe<Scalars['String']>;
    tributeTokenSymbol_in: Maybe<Array<Scalars['String']>>;
    tributeTokenSymbol_not_in: Maybe<Array<Scalars['String']>>;
    tributeTokenSymbol_contains: Maybe<Scalars['String']>;
    tributeTokenSymbol_not_contains: Maybe<Scalars['String']>;
    tributeTokenSymbol_starts_with: Maybe<Scalars['String']>;
    tributeTokenSymbol_not_starts_with: Maybe<Scalars['String']>;
    tributeTokenSymbol_ends_with: Maybe<Scalars['String']>;
    tributeTokenSymbol_not_ends_with: Maybe<Scalars['String']>;
    tributeTokenDecimals: Maybe<Scalars['BigInt']>;
    tributeTokenDecimals_not: Maybe<Scalars['BigInt']>;
    tributeTokenDecimals_gt: Maybe<Scalars['BigInt']>;
    tributeTokenDecimals_lt: Maybe<Scalars['BigInt']>;
    tributeTokenDecimals_gte: Maybe<Scalars['BigInt']>;
    tributeTokenDecimals_lte: Maybe<Scalars['BigInt']>;
    tributeTokenDecimals_in: Maybe<Array<Scalars['BigInt']>>;
    tributeTokenDecimals_not_in: Maybe<Array<Scalars['BigInt']>>;
    paymentRequested: Maybe<Scalars['BigInt']>;
    paymentRequested_not: Maybe<Scalars['BigInt']>;
    paymentRequested_gt: Maybe<Scalars['BigInt']>;
    paymentRequested_lt: Maybe<Scalars['BigInt']>;
    paymentRequested_gte: Maybe<Scalars['BigInt']>;
    paymentRequested_lte: Maybe<Scalars['BigInt']>;
    paymentRequested_in: Maybe<Array<Scalars['BigInt']>>;
    paymentRequested_not_in: Maybe<Array<Scalars['BigInt']>>;
    paymentToken: Maybe<Scalars['Bytes']>;
    paymentToken_not: Maybe<Scalars['Bytes']>;
    paymentToken_in: Maybe<Array<Scalars['Bytes']>>;
    paymentToken_not_in: Maybe<Array<Scalars['Bytes']>>;
    paymentToken_contains: Maybe<Scalars['Bytes']>;
    paymentToken_not_contains: Maybe<Scalars['Bytes']>;
    paymentTokenSymbol: Maybe<Scalars['String']>;
    paymentTokenSymbol_not: Maybe<Scalars['String']>;
    paymentTokenSymbol_gt: Maybe<Scalars['String']>;
    paymentTokenSymbol_lt: Maybe<Scalars['String']>;
    paymentTokenSymbol_gte: Maybe<Scalars['String']>;
    paymentTokenSymbol_lte: Maybe<Scalars['String']>;
    paymentTokenSymbol_in: Maybe<Array<Scalars['String']>>;
    paymentTokenSymbol_not_in: Maybe<Array<Scalars['String']>>;
    paymentTokenSymbol_contains: Maybe<Scalars['String']>;
    paymentTokenSymbol_not_contains: Maybe<Scalars['String']>;
    paymentTokenSymbol_starts_with: Maybe<Scalars['String']>;
    paymentTokenSymbol_not_starts_with: Maybe<Scalars['String']>;
    paymentTokenSymbol_ends_with: Maybe<Scalars['String']>;
    paymentTokenSymbol_not_ends_with: Maybe<Scalars['String']>;
    paymentTokenDecimals: Maybe<Scalars['BigInt']>;
    paymentTokenDecimals_not: Maybe<Scalars['BigInt']>;
    paymentTokenDecimals_gt: Maybe<Scalars['BigInt']>;
    paymentTokenDecimals_lt: Maybe<Scalars['BigInt']>;
    paymentTokenDecimals_gte: Maybe<Scalars['BigInt']>;
    paymentTokenDecimals_lte: Maybe<Scalars['BigInt']>;
    paymentTokenDecimals_in: Maybe<Array<Scalars['BigInt']>>;
    paymentTokenDecimals_not_in: Maybe<Array<Scalars['BigInt']>>;
    startingPeriod: Maybe<Scalars['BigInt']>;
    startingPeriod_not: Maybe<Scalars['BigInt']>;
    startingPeriod_gt: Maybe<Scalars['BigInt']>;
    startingPeriod_lt: Maybe<Scalars['BigInt']>;
    startingPeriod_gte: Maybe<Scalars['BigInt']>;
    startingPeriod_lte: Maybe<Scalars['BigInt']>;
    startingPeriod_in: Maybe<Array<Scalars['BigInt']>>;
    startingPeriod_not_in: Maybe<Array<Scalars['BigInt']>>;
    yesVotes: Maybe<Scalars['BigInt']>;
    yesVotes_not: Maybe<Scalars['BigInt']>;
    yesVotes_gt: Maybe<Scalars['BigInt']>;
    yesVotes_lt: Maybe<Scalars['BigInt']>;
    yesVotes_gte: Maybe<Scalars['BigInt']>;
    yesVotes_lte: Maybe<Scalars['BigInt']>;
    yesVotes_in: Maybe<Array<Scalars['BigInt']>>;
    yesVotes_not_in: Maybe<Array<Scalars['BigInt']>>;
    noVotes: Maybe<Scalars['BigInt']>;
    noVotes_not: Maybe<Scalars['BigInt']>;
    noVotes_gt: Maybe<Scalars['BigInt']>;
    noVotes_lt: Maybe<Scalars['BigInt']>;
    noVotes_gte: Maybe<Scalars['BigInt']>;
    noVotes_lte: Maybe<Scalars['BigInt']>;
    noVotes_in: Maybe<Array<Scalars['BigInt']>>;
    noVotes_not_in: Maybe<Array<Scalars['BigInt']>>;
    sponsored: Maybe<Scalars['Boolean']>;
    sponsored_not: Maybe<Scalars['Boolean']>;
    sponsored_in: Maybe<Array<Scalars['Boolean']>>;
    sponsored_not_in: Maybe<Array<Scalars['Boolean']>>;
    sponsoredAt: Maybe<Scalars['String']>;
    sponsoredAt_not: Maybe<Scalars['String']>;
    sponsoredAt_gt: Maybe<Scalars['String']>;
    sponsoredAt_lt: Maybe<Scalars['String']>;
    sponsoredAt_gte: Maybe<Scalars['String']>;
    sponsoredAt_lte: Maybe<Scalars['String']>;
    sponsoredAt_in: Maybe<Array<Scalars['String']>>;
    sponsoredAt_not_in: Maybe<Array<Scalars['String']>>;
    sponsoredAt_contains: Maybe<Scalars['String']>;
    sponsoredAt_not_contains: Maybe<Scalars['String']>;
    sponsoredAt_starts_with: Maybe<Scalars['String']>;
    sponsoredAt_not_starts_with: Maybe<Scalars['String']>;
    sponsoredAt_ends_with: Maybe<Scalars['String']>;
    sponsoredAt_not_ends_with: Maybe<Scalars['String']>;
    processed: Maybe<Scalars['Boolean']>;
    processed_not: Maybe<Scalars['Boolean']>;
    processed_in: Maybe<Array<Scalars['Boolean']>>;
    processed_not_in: Maybe<Array<Scalars['Boolean']>>;
    processedAt: Maybe<Scalars['String']>;
    processedAt_not: Maybe<Scalars['String']>;
    processedAt_gt: Maybe<Scalars['String']>;
    processedAt_lt: Maybe<Scalars['String']>;
    processedAt_gte: Maybe<Scalars['String']>;
    processedAt_lte: Maybe<Scalars['String']>;
    processedAt_in: Maybe<Array<Scalars['String']>>;
    processedAt_not_in: Maybe<Array<Scalars['String']>>;
    processedAt_contains: Maybe<Scalars['String']>;
    processedAt_not_contains: Maybe<Scalars['String']>;
    processedAt_starts_with: Maybe<Scalars['String']>;
    processedAt_not_starts_with: Maybe<Scalars['String']>;
    processedAt_ends_with: Maybe<Scalars['String']>;
    processedAt_not_ends_with: Maybe<Scalars['String']>;
    didPass: Maybe<Scalars['Boolean']>;
    didPass_not: Maybe<Scalars['Boolean']>;
    didPass_in: Maybe<Array<Scalars['Boolean']>>;
    didPass_not_in: Maybe<Array<Scalars['Boolean']>>;
    cancelled: Maybe<Scalars['Boolean']>;
    cancelled_not: Maybe<Scalars['Boolean']>;
    cancelled_in: Maybe<Array<Scalars['Boolean']>>;
    cancelled_not_in: Maybe<Array<Scalars['Boolean']>>;
    cancelledAt: Maybe<Scalars['String']>;
    cancelledAt_not: Maybe<Scalars['String']>;
    cancelledAt_gt: Maybe<Scalars['String']>;
    cancelledAt_lt: Maybe<Scalars['String']>;
    cancelledAt_gte: Maybe<Scalars['String']>;
    cancelledAt_lte: Maybe<Scalars['String']>;
    cancelledAt_in: Maybe<Array<Scalars['String']>>;
    cancelledAt_not_in: Maybe<Array<Scalars['String']>>;
    cancelledAt_contains: Maybe<Scalars['String']>;
    cancelledAt_not_contains: Maybe<Scalars['String']>;
    cancelledAt_starts_with: Maybe<Scalars['String']>;
    cancelledAt_not_starts_with: Maybe<Scalars['String']>;
    cancelledAt_ends_with: Maybe<Scalars['String']>;
    cancelledAt_not_ends_with: Maybe<Scalars['String']>;
    aborted: Maybe<Scalars['Boolean']>;
    aborted_not: Maybe<Scalars['Boolean']>;
    aborted_in: Maybe<Array<Scalars['Boolean']>>;
    aborted_not_in: Maybe<Array<Scalars['Boolean']>>;
    whitelist: Maybe<Scalars['Boolean']>;
    whitelist_not: Maybe<Scalars['Boolean']>;
    whitelist_in: Maybe<Array<Scalars['Boolean']>>;
    whitelist_not_in: Maybe<Array<Scalars['Boolean']>>;
    guildkick: Maybe<Scalars['Boolean']>;
    guildkick_not: Maybe<Scalars['Boolean']>;
    guildkick_in: Maybe<Array<Scalars['Boolean']>>;
    guildkick_not_in: Maybe<Array<Scalars['Boolean']>>;
    newMember: Maybe<Scalars['Boolean']>;
    newMember_not: Maybe<Scalars['Boolean']>;
    newMember_in: Maybe<Array<Scalars['Boolean']>>;
    newMember_not_in: Maybe<Array<Scalars['Boolean']>>;
    trade: Maybe<Scalars['Boolean']>;
    trade_not: Maybe<Scalars['Boolean']>;
    trade_in: Maybe<Array<Scalars['Boolean']>>;
    trade_not_in: Maybe<Array<Scalars['Boolean']>>;
    details: Maybe<Scalars['String']>;
    details_not: Maybe<Scalars['String']>;
    details_gt: Maybe<Scalars['String']>;
    details_lt: Maybe<Scalars['String']>;
    details_gte: Maybe<Scalars['String']>;
    details_lte: Maybe<Scalars['String']>;
    details_in: Maybe<Array<Scalars['String']>>;
    details_not_in: Maybe<Array<Scalars['String']>>;
    details_contains: Maybe<Scalars['String']>;
    details_not_contains: Maybe<Scalars['String']>;
    details_starts_with: Maybe<Scalars['String']>;
    details_not_starts_with: Maybe<Scalars['String']>;
    details_ends_with: Maybe<Scalars['String']>;
    details_not_ends_with: Maybe<Scalars['String']>;
    maxTotalSharesAndLootAtYesVote: Maybe<Scalars['BigInt']>;
    maxTotalSharesAndLootAtYesVote_not: Maybe<Scalars['BigInt']>;
    maxTotalSharesAndLootAtYesVote_gt: Maybe<Scalars['BigInt']>;
    maxTotalSharesAndLootAtYesVote_lt: Maybe<Scalars['BigInt']>;
    maxTotalSharesAndLootAtYesVote_gte: Maybe<Scalars['BigInt']>;
    maxTotalSharesAndLootAtYesVote_lte: Maybe<Scalars['BigInt']>;
    maxTotalSharesAndLootAtYesVote_in: Maybe<Array<Scalars['BigInt']>>;
    maxTotalSharesAndLootAtYesVote_not_in: Maybe<Array<Scalars['BigInt']>>;
    yesShares: Maybe<Scalars['BigInt']>;
    yesShares_not: Maybe<Scalars['BigInt']>;
    yesShares_gt: Maybe<Scalars['BigInt']>;
    yesShares_lt: Maybe<Scalars['BigInt']>;
    yesShares_gte: Maybe<Scalars['BigInt']>;
    yesShares_lte: Maybe<Scalars['BigInt']>;
    yesShares_in: Maybe<Array<Scalars['BigInt']>>;
    yesShares_not_in: Maybe<Array<Scalars['BigInt']>>;
    noShares: Maybe<Scalars['BigInt']>;
    noShares_not: Maybe<Scalars['BigInt']>;
    noShares_gt: Maybe<Scalars['BigInt']>;
    noShares_lt: Maybe<Scalars['BigInt']>;
    noShares_gte: Maybe<Scalars['BigInt']>;
    noShares_lte: Maybe<Scalars['BigInt']>;
    noShares_in: Maybe<Array<Scalars['BigInt']>>;
    noShares_not_in: Maybe<Array<Scalars['BigInt']>>;
    votingPeriodStarts: Maybe<Scalars['BigInt']>;
    votingPeriodStarts_not: Maybe<Scalars['BigInt']>;
    votingPeriodStarts_gt: Maybe<Scalars['BigInt']>;
    votingPeriodStarts_lt: Maybe<Scalars['BigInt']>;
    votingPeriodStarts_gte: Maybe<Scalars['BigInt']>;
    votingPeriodStarts_lte: Maybe<Scalars['BigInt']>;
    votingPeriodStarts_in: Maybe<Array<Scalars['BigInt']>>;
    votingPeriodStarts_not_in: Maybe<Array<Scalars['BigInt']>>;
    votingPeriodEnds: Maybe<Scalars['BigInt']>;
    votingPeriodEnds_not: Maybe<Scalars['BigInt']>;
    votingPeriodEnds_gt: Maybe<Scalars['BigInt']>;
    votingPeriodEnds_lt: Maybe<Scalars['BigInt']>;
    votingPeriodEnds_gte: Maybe<Scalars['BigInt']>;
    votingPeriodEnds_lte: Maybe<Scalars['BigInt']>;
    votingPeriodEnds_in: Maybe<Array<Scalars['BigInt']>>;
    votingPeriodEnds_not_in: Maybe<Array<Scalars['BigInt']>>;
    gracePeriodEnds: Maybe<Scalars['BigInt']>;
    gracePeriodEnds_not: Maybe<Scalars['BigInt']>;
    gracePeriodEnds_gt: Maybe<Scalars['BigInt']>;
    gracePeriodEnds_lt: Maybe<Scalars['BigInt']>;
    gracePeriodEnds_gte: Maybe<Scalars['BigInt']>;
    gracePeriodEnds_lte: Maybe<Scalars['BigInt']>;
    gracePeriodEnds_in: Maybe<Array<Scalars['BigInt']>>;
    gracePeriodEnds_not_in: Maybe<Array<Scalars['BigInt']>>;
    molochVersion: Maybe<Scalars['String']>;
    molochVersion_not: Maybe<Scalars['String']>;
    molochVersion_gt: Maybe<Scalars['String']>;
    molochVersion_lt: Maybe<Scalars['String']>;
    molochVersion_gte: Maybe<Scalars['String']>;
    molochVersion_lte: Maybe<Scalars['String']>;
    molochVersion_in: Maybe<Array<Scalars['String']>>;
    molochVersion_not_in: Maybe<Array<Scalars['String']>>;
    molochVersion_contains: Maybe<Scalars['String']>;
    molochVersion_not_contains: Maybe<Scalars['String']>;
    molochVersion_starts_with: Maybe<Scalars['String']>;
    molochVersion_not_starts_with: Maybe<Scalars['String']>;
    molochVersion_ends_with: Maybe<Scalars['String']>;
    molochVersion_not_ends_with: Maybe<Scalars['String']>;
    isMinion: Maybe<Scalars['Boolean']>;
    isMinion_not: Maybe<Scalars['Boolean']>;
    isMinion_in: Maybe<Array<Scalars['Boolean']>>;
    isMinion_not_in: Maybe<Array<Scalars['Boolean']>>;
    uberHausMinionExecuted: Maybe<Scalars['Boolean']>;
    uberHausMinionExecuted_not: Maybe<Scalars['Boolean']>;
    uberHausMinionExecuted_in: Maybe<Array<Scalars['Boolean']>>;
    uberHausMinionExecuted_not_in: Maybe<Array<Scalars['Boolean']>>;
    executed: Maybe<Scalars['Boolean']>;
    executed_not: Maybe<Scalars['Boolean']>;
    executed_in: Maybe<Array<Scalars['Boolean']>>;
    executed_not_in: Maybe<Array<Scalars['Boolean']>>;
    minionAddress: Maybe<Scalars['Bytes']>;
    minionAddress_not: Maybe<Scalars['Bytes']>;
    minionAddress_in: Maybe<Array<Scalars['Bytes']>>;
    minionAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    minionAddress_contains: Maybe<Scalars['Bytes']>;
    minionAddress_not_contains: Maybe<Scalars['Bytes']>;
    minion: Maybe<Scalars['String']>;
    minion_not: Maybe<Scalars['String']>;
    minion_gt: Maybe<Scalars['String']>;
    minion_lt: Maybe<Scalars['String']>;
    minion_gte: Maybe<Scalars['String']>;
    minion_lte: Maybe<Scalars['String']>;
    minion_in: Maybe<Array<Scalars['String']>>;
    minion_not_in: Maybe<Array<Scalars['String']>>;
    minion_contains: Maybe<Scalars['String']>;
    minion_not_contains: Maybe<Scalars['String']>;
    minion_starts_with: Maybe<Scalars['String']>;
    minion_not_starts_with: Maybe<Scalars['String']>;
    minion_ends_with: Maybe<Scalars['String']>;
    minion_not_ends_with: Maybe<Scalars['String']>;
};
export declare enum Proposal_OrderBy {
    Id = "id",
    CreatedAt = "createdAt",
    ProposalIndex = "proposalIndex",
    ProposalId = "proposalId",
    Moloch = "moloch",
    MolochAddress = "molochAddress",
    Member = "member",
    MemberAddress = "memberAddress",
    DelegateKey = "delegateKey",
    Applicant = "applicant",
    Proposer = "proposer",
    Sponsor = "sponsor",
    Processor = "processor",
    SharesRequested = "sharesRequested",
    LootRequested = "lootRequested",
    TributeOffered = "tributeOffered",
    TributeToken = "tributeToken",
    TributeTokenSymbol = "tributeTokenSymbol",
    TributeTokenDecimals = "tributeTokenDecimals",
    PaymentRequested = "paymentRequested",
    PaymentToken = "paymentToken",
    PaymentTokenSymbol = "paymentTokenSymbol",
    PaymentTokenDecimals = "paymentTokenDecimals",
    StartingPeriod = "startingPeriod",
    YesVotes = "yesVotes",
    NoVotes = "noVotes",
    Sponsored = "sponsored",
    SponsoredAt = "sponsoredAt",
    Processed = "processed",
    ProcessedAt = "processedAt",
    DidPass = "didPass",
    Cancelled = "cancelled",
    CancelledAt = "cancelledAt",
    Aborted = "aborted",
    Whitelist = "whitelist",
    Guildkick = "guildkick",
    NewMember = "newMember",
    Trade = "trade",
    Details = "details",
    MaxTotalSharesAndLootAtYesVote = "maxTotalSharesAndLootAtYesVote",
    Votes = "votes",
    YesShares = "yesShares",
    NoShares = "noShares",
    VotingPeriodStarts = "votingPeriodStarts",
    VotingPeriodEnds = "votingPeriodEnds",
    GracePeriodEnds = "gracePeriodEnds",
    MolochVersion = "molochVersion",
    IsMinion = "isMinion",
    UberHausMinionExecuted = "uberHausMinionExecuted",
    Executed = "executed",
    MinionAddress = "minionAddress",
    Minion = "minion",
    Escrow = "escrow",
    Actions = "actions"
}
export declare type Query = {
    __typename?: 'Query';
    moloch: Maybe<Moloch>;
    moloches: Array<Moloch>;
    tokenBalance: Maybe<TokenBalance>;
    tokenBalances: Array<TokenBalance>;
    token: Maybe<Token>;
    tokens: Array<Token>;
    member: Maybe<Member>;
    members: Array<Member>;
    vote: Maybe<Vote>;
    votes: Array<Vote>;
    proposal: Maybe<Proposal>;
    proposals: Array<Proposal>;
    rageQuit: Maybe<RageQuit>;
    rageQuits: Array<RageQuit>;
    daoMeta: Maybe<DaoMeta>;
    daoMetas: Array<DaoMeta>;
    minion: Maybe<Minion>;
    minions: Array<Minion>;
    minionStream: Maybe<MinionStream>;
    minionStreams: Array<MinionStream>;
    molochTransaction: Maybe<MolochTransaction>;
    molochTransactions: Array<MolochTransaction>;
    proposalEscrow: Maybe<ProposalEscrow>;
    proposalEscrows: Array<ProposalEscrow>;
    minionAction: Maybe<MinionAction>;
    minionActions: Array<MinionAction>;
    /** Access to subgraph metadata */
    _meta: Maybe<_Meta_>;
};
export declare type QueryMolochArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type QueryMolochesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Moloch_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Moloch_Filter>;
    block: Maybe<Block_Height>;
};
export declare type QueryTokenBalanceArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type QueryTokenBalancesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<TokenBalance_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<TokenBalance_Filter>;
    block: Maybe<Block_Height>;
};
export declare type QueryTokenArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type QueryTokensArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Token_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Token_Filter>;
    block: Maybe<Block_Height>;
};
export declare type QueryMemberArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type QueryMembersArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Member_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Member_Filter>;
    block: Maybe<Block_Height>;
};
export declare type QueryVoteArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type QueryVotesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Vote_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Vote_Filter>;
    block: Maybe<Block_Height>;
};
export declare type QueryProposalArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type QueryProposalsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Proposal_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Proposal_Filter>;
    block: Maybe<Block_Height>;
};
export declare type QueryRageQuitArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type QueryRageQuitsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<RageQuit_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<RageQuit_Filter>;
    block: Maybe<Block_Height>;
};
export declare type QueryDaoMetaArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type QueryDaoMetasArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<DaoMeta_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<DaoMeta_Filter>;
    block: Maybe<Block_Height>;
};
export declare type QueryMinionArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type QueryMinionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Minion_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Minion_Filter>;
    block: Maybe<Block_Height>;
};
export declare type QueryMinionStreamArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type QueryMinionStreamsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<MinionStream_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<MinionStream_Filter>;
    block: Maybe<Block_Height>;
};
export declare type QueryMolochTransactionArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type QueryMolochTransactionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<MolochTransaction_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<MolochTransaction_Filter>;
    block: Maybe<Block_Height>;
};
export declare type QueryProposalEscrowArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type QueryProposalEscrowsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<ProposalEscrow_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<ProposalEscrow_Filter>;
    block: Maybe<Block_Height>;
};
export declare type QueryMinionActionArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type QueryMinionActionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<MinionAction_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<MinionAction_Filter>;
    block: Maybe<Block_Height>;
};
export declare type Query_MetaArgs = {
    block: Maybe<Block_Height>;
};
export declare type RageQuit = {
    __typename?: 'RageQuit';
    id: Scalars['ID'];
    createdAt: Scalars['String'];
    moloch: Moloch;
    molochAddress: Scalars['Bytes'];
    member: Member;
    memberAddress: Scalars['Bytes'];
    shares: Scalars['BigInt'];
    loot: Scalars['BigInt'];
};
export declare type RageQuit_Filter = {
    id: Maybe<Scalars['ID']>;
    id_not: Maybe<Scalars['ID']>;
    id_gt: Maybe<Scalars['ID']>;
    id_lt: Maybe<Scalars['ID']>;
    id_gte: Maybe<Scalars['ID']>;
    id_lte: Maybe<Scalars['ID']>;
    id_in: Maybe<Array<Scalars['ID']>>;
    id_not_in: Maybe<Array<Scalars['ID']>>;
    createdAt: Maybe<Scalars['String']>;
    createdAt_not: Maybe<Scalars['String']>;
    createdAt_gt: Maybe<Scalars['String']>;
    createdAt_lt: Maybe<Scalars['String']>;
    createdAt_gte: Maybe<Scalars['String']>;
    createdAt_lte: Maybe<Scalars['String']>;
    createdAt_in: Maybe<Array<Scalars['String']>>;
    createdAt_not_in: Maybe<Array<Scalars['String']>>;
    createdAt_contains: Maybe<Scalars['String']>;
    createdAt_not_contains: Maybe<Scalars['String']>;
    createdAt_starts_with: Maybe<Scalars['String']>;
    createdAt_not_starts_with: Maybe<Scalars['String']>;
    createdAt_ends_with: Maybe<Scalars['String']>;
    createdAt_not_ends_with: Maybe<Scalars['String']>;
    moloch: Maybe<Scalars['String']>;
    moloch_not: Maybe<Scalars['String']>;
    moloch_gt: Maybe<Scalars['String']>;
    moloch_lt: Maybe<Scalars['String']>;
    moloch_gte: Maybe<Scalars['String']>;
    moloch_lte: Maybe<Scalars['String']>;
    moloch_in: Maybe<Array<Scalars['String']>>;
    moloch_not_in: Maybe<Array<Scalars['String']>>;
    moloch_contains: Maybe<Scalars['String']>;
    moloch_not_contains: Maybe<Scalars['String']>;
    moloch_starts_with: Maybe<Scalars['String']>;
    moloch_not_starts_with: Maybe<Scalars['String']>;
    moloch_ends_with: Maybe<Scalars['String']>;
    moloch_not_ends_with: Maybe<Scalars['String']>;
    molochAddress: Maybe<Scalars['Bytes']>;
    molochAddress_not: Maybe<Scalars['Bytes']>;
    molochAddress_in: Maybe<Array<Scalars['Bytes']>>;
    molochAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    molochAddress_contains: Maybe<Scalars['Bytes']>;
    molochAddress_not_contains: Maybe<Scalars['Bytes']>;
    member: Maybe<Scalars['String']>;
    member_not: Maybe<Scalars['String']>;
    member_gt: Maybe<Scalars['String']>;
    member_lt: Maybe<Scalars['String']>;
    member_gte: Maybe<Scalars['String']>;
    member_lte: Maybe<Scalars['String']>;
    member_in: Maybe<Array<Scalars['String']>>;
    member_not_in: Maybe<Array<Scalars['String']>>;
    member_contains: Maybe<Scalars['String']>;
    member_not_contains: Maybe<Scalars['String']>;
    member_starts_with: Maybe<Scalars['String']>;
    member_not_starts_with: Maybe<Scalars['String']>;
    member_ends_with: Maybe<Scalars['String']>;
    member_not_ends_with: Maybe<Scalars['String']>;
    memberAddress: Maybe<Scalars['Bytes']>;
    memberAddress_not: Maybe<Scalars['Bytes']>;
    memberAddress_in: Maybe<Array<Scalars['Bytes']>>;
    memberAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    memberAddress_contains: Maybe<Scalars['Bytes']>;
    memberAddress_not_contains: Maybe<Scalars['Bytes']>;
    shares: Maybe<Scalars['BigInt']>;
    shares_not: Maybe<Scalars['BigInt']>;
    shares_gt: Maybe<Scalars['BigInt']>;
    shares_lt: Maybe<Scalars['BigInt']>;
    shares_gte: Maybe<Scalars['BigInt']>;
    shares_lte: Maybe<Scalars['BigInt']>;
    shares_in: Maybe<Array<Scalars['BigInt']>>;
    shares_not_in: Maybe<Array<Scalars['BigInt']>>;
    loot: Maybe<Scalars['BigInt']>;
    loot_not: Maybe<Scalars['BigInt']>;
    loot_gt: Maybe<Scalars['BigInt']>;
    loot_lt: Maybe<Scalars['BigInt']>;
    loot_gte: Maybe<Scalars['BigInt']>;
    loot_lte: Maybe<Scalars['BigInt']>;
    loot_in: Maybe<Array<Scalars['BigInt']>>;
    loot_not_in: Maybe<Array<Scalars['BigInt']>>;
};
export declare enum RageQuit_OrderBy {
    Id = "id",
    CreatedAt = "createdAt",
    Moloch = "moloch",
    MolochAddress = "molochAddress",
    Member = "member",
    MemberAddress = "memberAddress",
    Shares = "shares",
    Loot = "loot"
}
export declare type Subscription = {
    __typename?: 'Subscription';
    moloch: Maybe<Moloch>;
    moloches: Array<Moloch>;
    tokenBalance: Maybe<TokenBalance>;
    tokenBalances: Array<TokenBalance>;
    token: Maybe<Token>;
    tokens: Array<Token>;
    member: Maybe<Member>;
    members: Array<Member>;
    vote: Maybe<Vote>;
    votes: Array<Vote>;
    proposal: Maybe<Proposal>;
    proposals: Array<Proposal>;
    rageQuit: Maybe<RageQuit>;
    rageQuits: Array<RageQuit>;
    daoMeta: Maybe<DaoMeta>;
    daoMetas: Array<DaoMeta>;
    minion: Maybe<Minion>;
    minions: Array<Minion>;
    minionStream: Maybe<MinionStream>;
    minionStreams: Array<MinionStream>;
    molochTransaction: Maybe<MolochTransaction>;
    molochTransactions: Array<MolochTransaction>;
    proposalEscrow: Maybe<ProposalEscrow>;
    proposalEscrows: Array<ProposalEscrow>;
    minionAction: Maybe<MinionAction>;
    minionActions: Array<MinionAction>;
    /** Access to subgraph metadata */
    _meta: Maybe<_Meta_>;
};
export declare type SubscriptionMolochArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type SubscriptionMolochesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Moloch_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Moloch_Filter>;
    block: Maybe<Block_Height>;
};
export declare type SubscriptionTokenBalanceArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type SubscriptionTokenBalancesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<TokenBalance_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<TokenBalance_Filter>;
    block: Maybe<Block_Height>;
};
export declare type SubscriptionTokenArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type SubscriptionTokensArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Token_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Token_Filter>;
    block: Maybe<Block_Height>;
};
export declare type SubscriptionMemberArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type SubscriptionMembersArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Member_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Member_Filter>;
    block: Maybe<Block_Height>;
};
export declare type SubscriptionVoteArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type SubscriptionVotesArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Vote_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Vote_Filter>;
    block: Maybe<Block_Height>;
};
export declare type SubscriptionProposalArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type SubscriptionProposalsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Proposal_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Proposal_Filter>;
    block: Maybe<Block_Height>;
};
export declare type SubscriptionRageQuitArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type SubscriptionRageQuitsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<RageQuit_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<RageQuit_Filter>;
    block: Maybe<Block_Height>;
};
export declare type SubscriptionDaoMetaArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type SubscriptionDaoMetasArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<DaoMeta_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<DaoMeta_Filter>;
    block: Maybe<Block_Height>;
};
export declare type SubscriptionMinionArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type SubscriptionMinionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<Minion_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<Minion_Filter>;
    block: Maybe<Block_Height>;
};
export declare type SubscriptionMinionStreamArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type SubscriptionMinionStreamsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<MinionStream_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<MinionStream_Filter>;
    block: Maybe<Block_Height>;
};
export declare type SubscriptionMolochTransactionArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type SubscriptionMolochTransactionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<MolochTransaction_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<MolochTransaction_Filter>;
    block: Maybe<Block_Height>;
};
export declare type SubscriptionProposalEscrowArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type SubscriptionProposalEscrowsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<ProposalEscrow_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<ProposalEscrow_Filter>;
    block: Maybe<Block_Height>;
};
export declare type SubscriptionMinionActionArgs = {
    id: Scalars['ID'];
    block: Maybe<Block_Height>;
};
export declare type SubscriptionMinionActionsArgs = {
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy: Maybe<MinionAction_OrderBy>;
    orderDirection: Maybe<OrderDirection>;
    where: Maybe<MinionAction_Filter>;
    block: Maybe<Block_Height>;
};
export declare type Subscription_MetaArgs = {
    block: Maybe<Block_Height>;
};
export declare type Token = {
    __typename?: 'Token';
    id: Scalars['ID'];
    moloch: Moloch;
    tokenAddress: Scalars['Bytes'];
    whitelisted: Scalars['Boolean'];
    symbol: Maybe<Scalars['String']>;
    decimals: Maybe<Scalars['BigInt']>;
};
export declare type TokenBalance = {
    __typename?: 'TokenBalance';
    id: Scalars['ID'];
    moloch: Moloch;
    token: Token;
    tokenBalance: Scalars['BigInt'];
    member: Maybe<Member>;
    guildBank: Scalars['Boolean'];
    ecrowBank: Scalars['Boolean'];
    memberBank: Scalars['Boolean'];
};
export declare type TokenBalance_Filter = {
    id: Maybe<Scalars['ID']>;
    id_not: Maybe<Scalars['ID']>;
    id_gt: Maybe<Scalars['ID']>;
    id_lt: Maybe<Scalars['ID']>;
    id_gte: Maybe<Scalars['ID']>;
    id_lte: Maybe<Scalars['ID']>;
    id_in: Maybe<Array<Scalars['ID']>>;
    id_not_in: Maybe<Array<Scalars['ID']>>;
    moloch: Maybe<Scalars['String']>;
    moloch_not: Maybe<Scalars['String']>;
    moloch_gt: Maybe<Scalars['String']>;
    moloch_lt: Maybe<Scalars['String']>;
    moloch_gte: Maybe<Scalars['String']>;
    moloch_lte: Maybe<Scalars['String']>;
    moloch_in: Maybe<Array<Scalars['String']>>;
    moloch_not_in: Maybe<Array<Scalars['String']>>;
    moloch_contains: Maybe<Scalars['String']>;
    moloch_not_contains: Maybe<Scalars['String']>;
    moloch_starts_with: Maybe<Scalars['String']>;
    moloch_not_starts_with: Maybe<Scalars['String']>;
    moloch_ends_with: Maybe<Scalars['String']>;
    moloch_not_ends_with: Maybe<Scalars['String']>;
    token: Maybe<Scalars['String']>;
    token_not: Maybe<Scalars['String']>;
    token_gt: Maybe<Scalars['String']>;
    token_lt: Maybe<Scalars['String']>;
    token_gte: Maybe<Scalars['String']>;
    token_lte: Maybe<Scalars['String']>;
    token_in: Maybe<Array<Scalars['String']>>;
    token_not_in: Maybe<Array<Scalars['String']>>;
    token_contains: Maybe<Scalars['String']>;
    token_not_contains: Maybe<Scalars['String']>;
    token_starts_with: Maybe<Scalars['String']>;
    token_not_starts_with: Maybe<Scalars['String']>;
    token_ends_with: Maybe<Scalars['String']>;
    token_not_ends_with: Maybe<Scalars['String']>;
    tokenBalance: Maybe<Scalars['BigInt']>;
    tokenBalance_not: Maybe<Scalars['BigInt']>;
    tokenBalance_gt: Maybe<Scalars['BigInt']>;
    tokenBalance_lt: Maybe<Scalars['BigInt']>;
    tokenBalance_gte: Maybe<Scalars['BigInt']>;
    tokenBalance_lte: Maybe<Scalars['BigInt']>;
    tokenBalance_in: Maybe<Array<Scalars['BigInt']>>;
    tokenBalance_not_in: Maybe<Array<Scalars['BigInt']>>;
    member: Maybe<Scalars['String']>;
    member_not: Maybe<Scalars['String']>;
    member_gt: Maybe<Scalars['String']>;
    member_lt: Maybe<Scalars['String']>;
    member_gte: Maybe<Scalars['String']>;
    member_lte: Maybe<Scalars['String']>;
    member_in: Maybe<Array<Scalars['String']>>;
    member_not_in: Maybe<Array<Scalars['String']>>;
    member_contains: Maybe<Scalars['String']>;
    member_not_contains: Maybe<Scalars['String']>;
    member_starts_with: Maybe<Scalars['String']>;
    member_not_starts_with: Maybe<Scalars['String']>;
    member_ends_with: Maybe<Scalars['String']>;
    member_not_ends_with: Maybe<Scalars['String']>;
    guildBank: Maybe<Scalars['Boolean']>;
    guildBank_not: Maybe<Scalars['Boolean']>;
    guildBank_in: Maybe<Array<Scalars['Boolean']>>;
    guildBank_not_in: Maybe<Array<Scalars['Boolean']>>;
    ecrowBank: Maybe<Scalars['Boolean']>;
    ecrowBank_not: Maybe<Scalars['Boolean']>;
    ecrowBank_in: Maybe<Array<Scalars['Boolean']>>;
    ecrowBank_not_in: Maybe<Array<Scalars['Boolean']>>;
    memberBank: Maybe<Scalars['Boolean']>;
    memberBank_not: Maybe<Scalars['Boolean']>;
    memberBank_in: Maybe<Array<Scalars['Boolean']>>;
    memberBank_not_in: Maybe<Array<Scalars['Boolean']>>;
};
export declare enum TokenBalance_OrderBy {
    Id = "id",
    Moloch = "moloch",
    Token = "token",
    TokenBalance = "tokenBalance",
    Member = "member",
    GuildBank = "guildBank",
    EcrowBank = "ecrowBank",
    MemberBank = "memberBank"
}
export declare type Token_Filter = {
    id: Maybe<Scalars['ID']>;
    id_not: Maybe<Scalars['ID']>;
    id_gt: Maybe<Scalars['ID']>;
    id_lt: Maybe<Scalars['ID']>;
    id_gte: Maybe<Scalars['ID']>;
    id_lte: Maybe<Scalars['ID']>;
    id_in: Maybe<Array<Scalars['ID']>>;
    id_not_in: Maybe<Array<Scalars['ID']>>;
    moloch: Maybe<Scalars['String']>;
    moloch_not: Maybe<Scalars['String']>;
    moloch_gt: Maybe<Scalars['String']>;
    moloch_lt: Maybe<Scalars['String']>;
    moloch_gte: Maybe<Scalars['String']>;
    moloch_lte: Maybe<Scalars['String']>;
    moloch_in: Maybe<Array<Scalars['String']>>;
    moloch_not_in: Maybe<Array<Scalars['String']>>;
    moloch_contains: Maybe<Scalars['String']>;
    moloch_not_contains: Maybe<Scalars['String']>;
    moloch_starts_with: Maybe<Scalars['String']>;
    moloch_not_starts_with: Maybe<Scalars['String']>;
    moloch_ends_with: Maybe<Scalars['String']>;
    moloch_not_ends_with: Maybe<Scalars['String']>;
    tokenAddress: Maybe<Scalars['Bytes']>;
    tokenAddress_not: Maybe<Scalars['Bytes']>;
    tokenAddress_in: Maybe<Array<Scalars['Bytes']>>;
    tokenAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    tokenAddress_contains: Maybe<Scalars['Bytes']>;
    tokenAddress_not_contains: Maybe<Scalars['Bytes']>;
    whitelisted: Maybe<Scalars['Boolean']>;
    whitelisted_not: Maybe<Scalars['Boolean']>;
    whitelisted_in: Maybe<Array<Scalars['Boolean']>>;
    whitelisted_not_in: Maybe<Array<Scalars['Boolean']>>;
    symbol: Maybe<Scalars['String']>;
    symbol_not: Maybe<Scalars['String']>;
    symbol_gt: Maybe<Scalars['String']>;
    symbol_lt: Maybe<Scalars['String']>;
    symbol_gte: Maybe<Scalars['String']>;
    symbol_lte: Maybe<Scalars['String']>;
    symbol_in: Maybe<Array<Scalars['String']>>;
    symbol_not_in: Maybe<Array<Scalars['String']>>;
    symbol_contains: Maybe<Scalars['String']>;
    symbol_not_contains: Maybe<Scalars['String']>;
    symbol_starts_with: Maybe<Scalars['String']>;
    symbol_not_starts_with: Maybe<Scalars['String']>;
    symbol_ends_with: Maybe<Scalars['String']>;
    symbol_not_ends_with: Maybe<Scalars['String']>;
    decimals: Maybe<Scalars['BigInt']>;
    decimals_not: Maybe<Scalars['BigInt']>;
    decimals_gt: Maybe<Scalars['BigInt']>;
    decimals_lt: Maybe<Scalars['BigInt']>;
    decimals_gte: Maybe<Scalars['BigInt']>;
    decimals_lte: Maybe<Scalars['BigInt']>;
    decimals_in: Maybe<Array<Scalars['BigInt']>>;
    decimals_not_in: Maybe<Array<Scalars['BigInt']>>;
};
export declare enum Token_OrderBy {
    Id = "id",
    Moloch = "moloch",
    TokenAddress = "tokenAddress",
    Whitelisted = "whitelisted",
    Symbol = "symbol",
    Decimals = "decimals"
}
export declare type Vote = {
    __typename?: 'Vote';
    id: Scalars['ID'];
    createdAt: Scalars['String'];
    proposal: Proposal;
    member: Member;
    uintVote: Scalars['Int'];
    molochAddress: Scalars['Bytes'];
    memberAddress: Maybe<Scalars['Bytes']>;
    memberPower: Maybe<Scalars['BigInt']>;
    proposalIndex: Maybe<Scalars['BigInt']>;
    delegateKey: Maybe<Scalars['Bytes']>;
};
export declare type Vote_Filter = {
    id: Maybe<Scalars['ID']>;
    id_not: Maybe<Scalars['ID']>;
    id_gt: Maybe<Scalars['ID']>;
    id_lt: Maybe<Scalars['ID']>;
    id_gte: Maybe<Scalars['ID']>;
    id_lte: Maybe<Scalars['ID']>;
    id_in: Maybe<Array<Scalars['ID']>>;
    id_not_in: Maybe<Array<Scalars['ID']>>;
    createdAt: Maybe<Scalars['String']>;
    createdAt_not: Maybe<Scalars['String']>;
    createdAt_gt: Maybe<Scalars['String']>;
    createdAt_lt: Maybe<Scalars['String']>;
    createdAt_gte: Maybe<Scalars['String']>;
    createdAt_lte: Maybe<Scalars['String']>;
    createdAt_in: Maybe<Array<Scalars['String']>>;
    createdAt_not_in: Maybe<Array<Scalars['String']>>;
    createdAt_contains: Maybe<Scalars['String']>;
    createdAt_not_contains: Maybe<Scalars['String']>;
    createdAt_starts_with: Maybe<Scalars['String']>;
    createdAt_not_starts_with: Maybe<Scalars['String']>;
    createdAt_ends_with: Maybe<Scalars['String']>;
    createdAt_not_ends_with: Maybe<Scalars['String']>;
    proposal: Maybe<Scalars['String']>;
    proposal_not: Maybe<Scalars['String']>;
    proposal_gt: Maybe<Scalars['String']>;
    proposal_lt: Maybe<Scalars['String']>;
    proposal_gte: Maybe<Scalars['String']>;
    proposal_lte: Maybe<Scalars['String']>;
    proposal_in: Maybe<Array<Scalars['String']>>;
    proposal_not_in: Maybe<Array<Scalars['String']>>;
    proposal_contains: Maybe<Scalars['String']>;
    proposal_not_contains: Maybe<Scalars['String']>;
    proposal_starts_with: Maybe<Scalars['String']>;
    proposal_not_starts_with: Maybe<Scalars['String']>;
    proposal_ends_with: Maybe<Scalars['String']>;
    proposal_not_ends_with: Maybe<Scalars['String']>;
    member: Maybe<Scalars['String']>;
    member_not: Maybe<Scalars['String']>;
    member_gt: Maybe<Scalars['String']>;
    member_lt: Maybe<Scalars['String']>;
    member_gte: Maybe<Scalars['String']>;
    member_lte: Maybe<Scalars['String']>;
    member_in: Maybe<Array<Scalars['String']>>;
    member_not_in: Maybe<Array<Scalars['String']>>;
    member_contains: Maybe<Scalars['String']>;
    member_not_contains: Maybe<Scalars['String']>;
    member_starts_with: Maybe<Scalars['String']>;
    member_not_starts_with: Maybe<Scalars['String']>;
    member_ends_with: Maybe<Scalars['String']>;
    member_not_ends_with: Maybe<Scalars['String']>;
    uintVote: Maybe<Scalars['Int']>;
    uintVote_not: Maybe<Scalars['Int']>;
    uintVote_gt: Maybe<Scalars['Int']>;
    uintVote_lt: Maybe<Scalars['Int']>;
    uintVote_gte: Maybe<Scalars['Int']>;
    uintVote_lte: Maybe<Scalars['Int']>;
    uintVote_in: Maybe<Array<Scalars['Int']>>;
    uintVote_not_in: Maybe<Array<Scalars['Int']>>;
    molochAddress: Maybe<Scalars['Bytes']>;
    molochAddress_not: Maybe<Scalars['Bytes']>;
    molochAddress_in: Maybe<Array<Scalars['Bytes']>>;
    molochAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    molochAddress_contains: Maybe<Scalars['Bytes']>;
    molochAddress_not_contains: Maybe<Scalars['Bytes']>;
    memberAddress: Maybe<Scalars['Bytes']>;
    memberAddress_not: Maybe<Scalars['Bytes']>;
    memberAddress_in: Maybe<Array<Scalars['Bytes']>>;
    memberAddress_not_in: Maybe<Array<Scalars['Bytes']>>;
    memberAddress_contains: Maybe<Scalars['Bytes']>;
    memberAddress_not_contains: Maybe<Scalars['Bytes']>;
    memberPower: Maybe<Scalars['BigInt']>;
    memberPower_not: Maybe<Scalars['BigInt']>;
    memberPower_gt: Maybe<Scalars['BigInt']>;
    memberPower_lt: Maybe<Scalars['BigInt']>;
    memberPower_gte: Maybe<Scalars['BigInt']>;
    memberPower_lte: Maybe<Scalars['BigInt']>;
    memberPower_in: Maybe<Array<Scalars['BigInt']>>;
    memberPower_not_in: Maybe<Array<Scalars['BigInt']>>;
    proposalIndex: Maybe<Scalars['BigInt']>;
    proposalIndex_not: Maybe<Scalars['BigInt']>;
    proposalIndex_gt: Maybe<Scalars['BigInt']>;
    proposalIndex_lt: Maybe<Scalars['BigInt']>;
    proposalIndex_gte: Maybe<Scalars['BigInt']>;
    proposalIndex_lte: Maybe<Scalars['BigInt']>;
    proposalIndex_in: Maybe<Array<Scalars['BigInt']>>;
    proposalIndex_not_in: Maybe<Array<Scalars['BigInt']>>;
    delegateKey: Maybe<Scalars['Bytes']>;
    delegateKey_not: Maybe<Scalars['Bytes']>;
    delegateKey_in: Maybe<Array<Scalars['Bytes']>>;
    delegateKey_not_in: Maybe<Array<Scalars['Bytes']>>;
    delegateKey_contains: Maybe<Scalars['Bytes']>;
    delegateKey_not_contains: Maybe<Scalars['Bytes']>;
};
export declare enum Vote_OrderBy {
    Id = "id",
    CreatedAt = "createdAt",
    Proposal = "proposal",
    Member = "member",
    UintVote = "uintVote",
    MolochAddress = "molochAddress",
    MemberAddress = "memberAddress",
    MemberPower = "memberPower",
    ProposalIndex = "proposalIndex",
    DelegateKey = "delegateKey"
}
export declare type _Block_ = {
    __typename?: '_Block_';
    /** The hash of the block */
    hash: Maybe<Scalars['Bytes']>;
    /** The block number */
    number: Scalars['Int'];
};
/** The type for the top-level _meta field */
export declare type _Meta_ = {
    __typename?: '_Meta_';
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean'];
};
export declare enum _SubgraphErrorPolicy_ {
    /** Data will be returned even if the subgraph has indexing errors */
    Allow = "allow",
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    Deny = "deny"
}
export declare type GetDaoHausMembershipsQueryVariables = Exact<{
    memberAddress: Scalars['Bytes'];
}>;
export declare type GetDaoHausMembershipsQuery = ({
    __typename?: 'Query';
} & {
    members: Array<({
        __typename?: 'Member';
    } & Pick<Member, 'id' | 'shares' | 'molochAddress' | 'createdAt' | 'memberAddress' | 'loot' | 'exists' | 'kicked' | 'delegateKey'> & {
        moloch: ({
            __typename?: 'Moloch';
        } & Pick<Moloch, 'id' | 'version' | 'summoner' | 'totalShares' | 'totalLoot'>);
    })>;
});
export declare type GetDaoHausTitlesQueryVariables = Exact<{
    ids: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;
export declare type GetDaoHausTitlesQuery = ({
    __typename?: 'Query';
} & {
    daoMetas: Array<({
        __typename?: 'DaoMeta';
    } & Pick<DaoMeta, 'id' | 'title'>)>;
});
export declare const GetDaoHausMembershipsDocument: import("graphql").DocumentNode;
export declare const GetDaoHausTitlesDocument: import("graphql").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    GetDaoHausMemberships(variables: GetDaoHausMembershipsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDaoHausMembershipsQuery>;
    GetDaoHausTitles(variables?: Exact<{
        ids: Maybe<string | string[]>;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDaoHausTitlesQuery>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
//# sourceMappingURL=daohaus-sdk.d.ts.map