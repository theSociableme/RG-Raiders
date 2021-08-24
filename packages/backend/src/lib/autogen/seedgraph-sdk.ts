/* eslint-disable */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};






export type Block_Height = {
  hash: Maybe<Scalars['Bytes']>;
  number: Maybe<Scalars['Int']>;
};


export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  transfer: Maybe<Transfer>;
  transfers: Array<Transfer>;
  userToken: Maybe<UserToken>;
  userTokens: Array<UserToken>;
  /** Access to subgraph metadata */
  _meta: Maybe<_Meta_>;
};


export type QueryTransferArgs = {
  id: Scalars['ID'];
  block: Maybe<Block_Height>;
};


export type QueryTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy: Maybe<Transfer_OrderBy>;
  orderDirection: Maybe<OrderDirection>;
  where: Maybe<Transfer_Filter>;
  block: Maybe<Block_Height>;
};


export type QueryUserTokenArgs = {
  id: Scalars['ID'];
  block: Maybe<Block_Height>;
};


export type QueryUserTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy: Maybe<UserToken_OrderBy>;
  orderDirection: Maybe<OrderDirection>;
  where: Maybe<UserToken_Filter>;
  block: Maybe<Block_Height>;
};


export type Query_MetaArgs = {
  block: Maybe<Block_Height>;
};

export type Subscription = {
  __typename?: 'Subscription';
  transfer: Maybe<Transfer>;
  transfers: Array<Transfer>;
  userToken: Maybe<UserToken>;
  userTokens: Array<UserToken>;
  /** Access to subgraph metadata */
  _meta: Maybe<_Meta_>;
};


export type SubscriptionTransferArgs = {
  id: Scalars['ID'];
  block: Maybe<Block_Height>;
};


export type SubscriptionTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy: Maybe<Transfer_OrderBy>;
  orderDirection: Maybe<OrderDirection>;
  where: Maybe<Transfer_Filter>;
  block: Maybe<Block_Height>;
};


export type SubscriptionUserTokenArgs = {
  id: Scalars['ID'];
  block: Maybe<Block_Height>;
};


export type SubscriptionUserTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy: Maybe<UserToken_OrderBy>;
  orderDirection: Maybe<OrderDirection>;
  where: Maybe<UserToken_Filter>;
  block: Maybe<Block_Height>;
};


export type Subscription_MetaArgs = {
  block: Maybe<Block_Height>;
};

export type Transfer = {
  __typename?: 'Transfer';
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  token: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
};

export type Transfer_Filter = {
  id: Maybe<Scalars['ID']>;
  id_not: Maybe<Scalars['ID']>;
  id_gt: Maybe<Scalars['ID']>;
  id_lt: Maybe<Scalars['ID']>;
  id_gte: Maybe<Scalars['ID']>;
  id_lte: Maybe<Scalars['ID']>;
  id_in: Maybe<Array<Scalars['ID']>>;
  id_not_in: Maybe<Array<Scalars['ID']>>;
  txHash: Maybe<Scalars['Bytes']>;
  txHash_not: Maybe<Scalars['Bytes']>;
  txHash_in: Maybe<Array<Scalars['Bytes']>>;
  txHash_not_in: Maybe<Array<Scalars['Bytes']>>;
  txHash_contains: Maybe<Scalars['Bytes']>;
  txHash_not_contains: Maybe<Scalars['Bytes']>;
  from: Maybe<Scalars['Bytes']>;
  from_not: Maybe<Scalars['Bytes']>;
  from_in: Maybe<Array<Scalars['Bytes']>>;
  from_not_in: Maybe<Array<Scalars['Bytes']>>;
  from_contains: Maybe<Scalars['Bytes']>;
  from_not_contains: Maybe<Scalars['Bytes']>;
  to: Maybe<Scalars['Bytes']>;
  to_not: Maybe<Scalars['Bytes']>;
  to_in: Maybe<Array<Scalars['Bytes']>>;
  to_not_in: Maybe<Array<Scalars['Bytes']>>;
  to_contains: Maybe<Scalars['Bytes']>;
  to_not_contains: Maybe<Scalars['Bytes']>;
  amount: Maybe<Scalars['BigInt']>;
  amount_not: Maybe<Scalars['BigInt']>;
  amount_gt: Maybe<Scalars['BigInt']>;
  amount_lt: Maybe<Scalars['BigInt']>;
  amount_gte: Maybe<Scalars['BigInt']>;
  amount_lte: Maybe<Scalars['BigInt']>;
  amount_in: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in: Maybe<Array<Scalars['BigInt']>>;
  token: Maybe<Scalars['Bytes']>;
  token_not: Maybe<Scalars['Bytes']>;
  token_in: Maybe<Array<Scalars['Bytes']>>;
  token_not_in: Maybe<Array<Scalars['Bytes']>>;
  token_contains: Maybe<Scalars['Bytes']>;
  token_not_contains: Maybe<Scalars['Bytes']>;
  timestamp: Maybe<Scalars['BigInt']>;
  timestamp_not: Maybe<Scalars['BigInt']>;
  timestamp_gt: Maybe<Scalars['BigInt']>;
  timestamp_lt: Maybe<Scalars['BigInt']>;
  timestamp_gte: Maybe<Scalars['BigInt']>;
  timestamp_lte: Maybe<Scalars['BigInt']>;
  timestamp_in: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in: Maybe<Array<Scalars['BigInt']>>;
};

export enum Transfer_OrderBy {
  Id = 'id',
  TxHash = 'txHash',
  From = 'from',
  To = 'to',
  Amount = 'amount',
  Token = 'token',
  Timestamp = 'timestamp'
}

export type UserToken = {
  __typename?: 'UserToken';
  id: Scalars['ID'];
  address: Scalars['String'];
  pSeedBalance: Scalars['BigInt'];
  pSeedTransfers: Array<Transfer>;
  seedBalance: Scalars['BigInt'];
  seedTransfers: Array<Transfer>;
};


export type UserTokenPSeedTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy: Maybe<Transfer_OrderBy>;
  orderDirection: Maybe<OrderDirection>;
  where: Maybe<Transfer_Filter>;
};


export type UserTokenSeedTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy: Maybe<Transfer_OrderBy>;
  orderDirection: Maybe<OrderDirection>;
  where: Maybe<Transfer_Filter>;
};

export type UserToken_Filter = {
  id: Maybe<Scalars['ID']>;
  id_not: Maybe<Scalars['ID']>;
  id_gt: Maybe<Scalars['ID']>;
  id_lt: Maybe<Scalars['ID']>;
  id_gte: Maybe<Scalars['ID']>;
  id_lte: Maybe<Scalars['ID']>;
  id_in: Maybe<Array<Scalars['ID']>>;
  id_not_in: Maybe<Array<Scalars['ID']>>;
  address: Maybe<Scalars['String']>;
  address_not: Maybe<Scalars['String']>;
  address_gt: Maybe<Scalars['String']>;
  address_lt: Maybe<Scalars['String']>;
  address_gte: Maybe<Scalars['String']>;
  address_lte: Maybe<Scalars['String']>;
  address_in: Maybe<Array<Scalars['String']>>;
  address_not_in: Maybe<Array<Scalars['String']>>;
  address_contains: Maybe<Scalars['String']>;
  address_not_contains: Maybe<Scalars['String']>;
  address_starts_with: Maybe<Scalars['String']>;
  address_not_starts_with: Maybe<Scalars['String']>;
  address_ends_with: Maybe<Scalars['String']>;
  address_not_ends_with: Maybe<Scalars['String']>;
  pSeedBalance: Maybe<Scalars['BigInt']>;
  pSeedBalance_not: Maybe<Scalars['BigInt']>;
  pSeedBalance_gt: Maybe<Scalars['BigInt']>;
  pSeedBalance_lt: Maybe<Scalars['BigInt']>;
  pSeedBalance_gte: Maybe<Scalars['BigInt']>;
  pSeedBalance_lte: Maybe<Scalars['BigInt']>;
  pSeedBalance_in: Maybe<Array<Scalars['BigInt']>>;
  pSeedBalance_not_in: Maybe<Array<Scalars['BigInt']>>;
  pSeedTransfers: Maybe<Array<Scalars['String']>>;
  pSeedTransfers_not: Maybe<Array<Scalars['String']>>;
  pSeedTransfers_contains: Maybe<Array<Scalars['String']>>;
  pSeedTransfers_not_contains: Maybe<Array<Scalars['String']>>;
  seedBalance: Maybe<Scalars['BigInt']>;
  seedBalance_not: Maybe<Scalars['BigInt']>;
  seedBalance_gt: Maybe<Scalars['BigInt']>;
  seedBalance_lt: Maybe<Scalars['BigInt']>;
  seedBalance_gte: Maybe<Scalars['BigInt']>;
  seedBalance_lte: Maybe<Scalars['BigInt']>;
  seedBalance_in: Maybe<Array<Scalars['BigInt']>>;
  seedBalance_not_in: Maybe<Array<Scalars['BigInt']>>;
  seedTransfers: Maybe<Array<Scalars['String']>>;
  seedTransfers_not: Maybe<Array<Scalars['String']>>;
  seedTransfers_contains: Maybe<Array<Scalars['String']>>;
  seedTransfers_not_contains: Maybe<Array<Scalars['String']>>;
};

export enum UserToken_OrderBy {
  Id = 'id',
  Address = 'address',
  PSeedBalance = 'pSeedBalance',
  PSeedTransfers = 'pSeedTransfers',
  SeedBalance = 'seedBalance',
  SeedTransfers = 'seedTransfers'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
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

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetTokenBalancesQueryVariables = Exact<{
  address: Scalars['ID'];
}>;


export type GetTokenBalancesQuery = (
  { __typename?: 'Query' }
  & { userToken: Maybe<(
    { __typename?: 'UserToken' }
    & Pick<UserToken, 'id' | 'seedBalance' | 'pSeedBalance'>
  )> }
);

export type GetTopPSeedHoldersQueryVariables = Exact<{
  limit: Maybe<Scalars['Int']>;
}>;


export type GetTopPSeedHoldersQuery = (
  { __typename?: 'Query' }
  & { userTokens: Array<(
    { __typename?: 'UserToken' }
    & Pick<UserToken, 'id' | 'seedBalance' | 'pSeedBalance'>
  )> }
);


export const GetTokenBalancesDocument = gql`
    query GetTokenBalances($address: ID!) {
  userToken(id: $address) {
    id
    seedBalance
    pSeedBalance
  }
}
    `;
export const GetTopPSeedHoldersDocument = gql`
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetTokenBalances(variables: GetTokenBalancesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTokenBalancesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTokenBalancesQuery>(GetTokenBalancesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTokenBalances');
    },
    GetTopPSeedHolders(variables?: GetTopPSeedHoldersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTopPSeedHoldersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTopPSeedHoldersQuery>(GetTopPSeedHoldersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTopPSeedHolders');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;