/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T extends PromiseLike<infer U> ? Promise<U | null> : T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
};


export type Query = {
  __typename?: 'Query';
  getBoxProfile: Maybe<BoxProfile>;
  getDaoHausMemberships: Array<Member>;
  getBrightIdStatus: Maybe<BrightIdStatus>;
  getTokenBalances: Maybe<TokenBalances>;
  getTopPSeedHolders: Maybe<Array<TokenBalances>>;
};


export type QueryGetBoxProfileArgs = {
  address: Maybe<Scalars['String']>;
};


export type QueryGetDaoHausMembershipsArgs = {
  memberAddress: Maybe<Scalars['String']>;
};


export type QueryGetBrightIdStatusArgs = {
  contextId: Maybe<Scalars['uuid']>;
};


export type QueryGetTokenBalancesArgs = {
  address: Maybe<Scalars['String']>;
};


export type QueryGetTopPSeedHoldersArgs = {
  limit: Maybe<Scalars['Int']>;
};

export type BrightIdStatus = {
  __typename?: 'BrightIdStatus';
  unique: Scalars['Boolean'];
  app: Scalars['String'];
  context: Scalars['String'];
  contextIds: Array<Scalars['String']>;
};

export type BoxProfile = {
  __typename?: 'BoxProfile';
  ethereumAddress: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  location: Maybe<Scalars['String']>;
  job: Maybe<Scalars['String']>;
  emoji: Maybe<Scalars['String']>;
  imageURL: Maybe<Scalars['String']>;
  coverImageURL: Maybe<Scalars['String']>;
  website: Maybe<Scalars['String']>;
  collectiblesFavorites: Maybe<Array<CollectiblesFavorites>>;
};

export type CollectiblesFavorites = {
  __typename?: 'CollectiblesFavorites';
  address: Maybe<Scalars['String']>;
  tokenId: Maybe<Scalars['String']>;
};

export type Moloch = {
  __typename?: 'Moloch';
  id: Scalars['ID'];
  summoner: Scalars['String'];
  title: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  totalShares: Scalars['String'];
  totalLoot: Scalars['String'];
  chain: Scalars['String'];
};

export type Member = {
  __typename?: 'Member';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  moloch: Moloch;
  molochAddress: Scalars['String'];
  memberAddress: Scalars['String'];
  delegateKey: Scalars['String'];
  shares: Scalars['String'];
  loot: Maybe<Scalars['String']>;
  exists: Scalars['Boolean'];
  kicked: Maybe<Scalars['Boolean']>;
};

export type TokenBalances = {
  __typename?: 'TokenBalances';
  id: Scalars['ID'];
  seedBalance: Scalars['String'];
  pSeedBalance: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  BrightIdStatus: ResolverTypeWrapper<BrightIdStatus>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BoxProfile: ResolverTypeWrapper<BoxProfile>;
  CollectiblesFavorites: ResolverTypeWrapper<CollectiblesFavorites>;
  Moloch: ResolverTypeWrapper<Moloch>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Member: ResolverTypeWrapper<Member>;
  TokenBalances: ResolverTypeWrapper<TokenBalances>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  uuid: Scalars['uuid'];
  Query: {};
  String: Scalars['String'];
  Int: Scalars['Int'];
  BrightIdStatus: BrightIdStatus;
  Boolean: Scalars['Boolean'];
  BoxProfile: BoxProfile;
  CollectiblesFavorites: CollectiblesFavorites;
  Moloch: Moloch;
  ID: Scalars['ID'];
  Member: Member;
  TokenBalances: TokenBalances;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getBoxProfile: Resolver<Maybe<ResolversTypes['BoxProfile']>, ParentType, ContextType, RequireFields<QueryGetBoxProfileArgs, never>>;
  getDaoHausMemberships: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<QueryGetDaoHausMembershipsArgs, never>>;
  getBrightIdStatus: Resolver<Maybe<ResolversTypes['BrightIdStatus']>, ParentType, ContextType, RequireFields<QueryGetBrightIdStatusArgs, never>>;
  getTokenBalances: Resolver<Maybe<ResolversTypes['TokenBalances']>, ParentType, ContextType, RequireFields<QueryGetTokenBalancesArgs, never>>;
  getTopPSeedHolders: Resolver<Maybe<Array<ResolversTypes['TokenBalances']>>, ParentType, ContextType, RequireFields<QueryGetTopPSeedHoldersArgs, never>>;
};

export type BrightIdStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['BrightIdStatus'] = ResolversParentTypes['BrightIdStatus']> = {
  unique: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  app: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  context: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contextIds: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BoxProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['BoxProfile'] = ResolversParentTypes['BoxProfile']> = {
  ethereumAddress: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  job: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emoji: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageURL: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coverImageURL: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collectiblesFavorites: Resolver<Maybe<Array<ResolversTypes['CollectiblesFavorites']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectiblesFavoritesResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectiblesFavorites'] = ResolversParentTypes['CollectiblesFavorites']> = {
  address: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MolochResolvers<ContextType = any, ParentType extends ResolversParentTypes['Moloch'] = ResolversParentTypes['Moloch']> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  summoner: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalShares: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalLoot: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chain: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  moloch: Resolver<ResolversTypes['Moloch'], ParentType, ContextType>;
  molochAddress: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  memberAddress: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  delegateKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shares: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  loot: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exists: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kicked: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenBalancesResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBalances'] = ResolversParentTypes['TokenBalances']> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  seedBalance: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pSeedBalance: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  uuid: GraphQLScalarType;
  Query: QueryResolvers<ContextType>;
  BrightIdStatus: BrightIdStatusResolvers<ContextType>;
  BoxProfile: BoxProfileResolvers<ContextType>;
  CollectiblesFavorites: CollectiblesFavoritesResolvers<ContextType>;
  Moloch: MolochResolvers<ContextType>;
  Member: MemberResolvers<ContextType>;
  TokenBalances: TokenBalancesResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
