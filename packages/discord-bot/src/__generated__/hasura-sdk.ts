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
  json: any;
  jsonb: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** columns and relationships of "AccountType" */
export type AccountType = {
  readonly __typename?: 'AccountType';
  readonly type: Scalars['String'];
};

/** aggregated selection of "AccountType" */
export type AccountType_Aggregate = {
  readonly __typename?: 'AccountType_aggregate';
  readonly aggregate?: Maybe<AccountType_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<AccountType>;
};

/** aggregate fields of "AccountType" */
export type AccountType_Aggregate_Fields = {
  readonly __typename?: 'AccountType_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<AccountType_Max_Fields>;
  readonly min?: Maybe<AccountType_Min_Fields>;
};


/** aggregate fields of "AccountType" */
export type AccountType_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<AccountType_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "AccountType" */
export type AccountType_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<AccountType_Max_Order_By>;
  readonly min?: Maybe<AccountType_Min_Order_By>;
};

/** input type for inserting array relation for remote table "AccountType" */
export type AccountType_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<AccountType_Insert_Input>;
  readonly on_conflict?: Maybe<AccountType_On_Conflict>;
};

/** Boolean expression to filter rows from the table "AccountType". All fields are combined with a logical 'AND'. */
export type AccountType_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<AccountType_Bool_Exp>>>;
  readonly _not?: Maybe<AccountType_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<AccountType_Bool_Exp>>>;
  readonly type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "AccountType" */
export enum AccountType_Constraint {
  /** unique or primary key constraint */
  AccountTypePkey = 'AccountType_pkey'
}

export enum AccountType_Enum {
  Discord = 'DISCORD',
  Discourse = 'DISCOURSE',
  Ethereum = 'ETHEREUM',
  Github = 'GITHUB',
  Twitter = 'TWITTER'
}

/** expression to compare columns of type AccountType_enum. All fields are combined with logical 'AND'. */
export type AccountType_Enum_Comparison_Exp = {
  readonly _eq?: Maybe<AccountType_Enum>;
  readonly _in?: Maybe<ReadonlyArray<AccountType_Enum>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _neq?: Maybe<AccountType_Enum>;
  readonly _nin?: Maybe<ReadonlyArray<AccountType_Enum>>;
};

/** input type for inserting data into table "AccountType" */
export type AccountType_Insert_Input = {
  readonly type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AccountType_Max_Fields = {
  readonly __typename?: 'AccountType_max_fields';
  readonly type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "AccountType" */
export type AccountType_Max_Order_By = {
  readonly type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type AccountType_Min_Fields = {
  readonly __typename?: 'AccountType_min_fields';
  readonly type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "AccountType" */
export type AccountType_Min_Order_By = {
  readonly type?: Maybe<Order_By>;
};

/** response of any mutation on the table "AccountType" */
export type AccountType_Mutation_Response = {
  readonly __typename?: 'AccountType_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<AccountType>;
};

/** input type for inserting object relation for remote table "AccountType" */
export type AccountType_Obj_Rel_Insert_Input = {
  readonly data: AccountType_Insert_Input;
  readonly on_conflict?: Maybe<AccountType_On_Conflict>;
};

/** on conflict condition type for table "AccountType" */
export type AccountType_On_Conflict = {
  readonly constraint: AccountType_Constraint;
  readonly update_columns: ReadonlyArray<AccountType_Update_Column>;
  readonly where?: Maybe<AccountType_Bool_Exp>;
};

/** ordering options when selecting data from "AccountType" */
export type AccountType_Order_By = {
  readonly type?: Maybe<Order_By>;
};

/** primary key columns input for table: "AccountType" */
export type AccountType_Pk_Columns_Input = {
  readonly type: Scalars['String'];
};

/** select columns of table "AccountType" */
export enum AccountType_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "AccountType" */
export type AccountType_Set_Input = {
  readonly type?: Maybe<Scalars['String']>;
};

/** update columns of table "AccountType" */
export enum AccountType_Update_Column {
  /** column name */
  Type = 'type'
}

export type BoxProfile = {
  readonly __typename?: 'BoxProfile';
  readonly collectiblesFavorites?: Maybe<ReadonlyArray<CollectiblesFavorites>>;
  readonly coverImageURL?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly emoji?: Maybe<Scalars['String']>;
  readonly ethereumAddress?: Maybe<Scalars['String']>;
  readonly imageURL?: Maybe<Scalars['String']>;
  readonly job?: Maybe<Scalars['String']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly website?: Maybe<Scalars['String']>;
};

export type BrightIdStatus = {
  readonly __typename?: 'BrightIdStatus';
  readonly app: Scalars['String'];
  readonly context: Scalars['String'];
  readonly contextIds: ReadonlyArray<Scalars['String']>;
  readonly unique: Scalars['Boolean'];
};

export type CacheProcessOutput = {
  readonly __typename?: 'CacheProcessOutput';
  readonly error?: Maybe<Scalars['String']>;
  readonly success: Scalars['Boolean'];
};

export type CollectiblesFavorites = {
  readonly __typename?: 'CollectiblesFavorites';
  readonly address?: Maybe<Scalars['String']>;
  readonly tokenId?: Maybe<Scalars['String']>;
};

/** columns and relationships of "ColorAspect" */
export type ColorAspect = {
  readonly __typename?: 'ColorAspect';
  readonly description?: Maybe<Scalars['String']>;
  readonly mask: Scalars['Int'];
  readonly name: Scalars['String'];
  /** An array relationship */
  readonly players: ReadonlyArray<Player>;
  /** An aggregated array relationship */
  readonly players_aggregate: Player_Aggregate;
};


/** columns and relationships of "ColorAspect" */
export type ColorAspectPlayersArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


/** columns and relationships of "ColorAspect" */
export type ColorAspectPlayers_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};

/** aggregated selection of "ColorAspect" */
export type ColorAspect_Aggregate = {
  readonly __typename?: 'ColorAspect_aggregate';
  readonly aggregate?: Maybe<ColorAspect_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<ColorAspect>;
};

/** aggregate fields of "ColorAspect" */
export type ColorAspect_Aggregate_Fields = {
  readonly __typename?: 'ColorAspect_aggregate_fields';
  readonly avg?: Maybe<ColorAspect_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<ColorAspect_Max_Fields>;
  readonly min?: Maybe<ColorAspect_Min_Fields>;
  readonly stddev?: Maybe<ColorAspect_Stddev_Fields>;
  readonly stddev_pop?: Maybe<ColorAspect_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<ColorAspect_Stddev_Samp_Fields>;
  readonly sum?: Maybe<ColorAspect_Sum_Fields>;
  readonly var_pop?: Maybe<ColorAspect_Var_Pop_Fields>;
  readonly var_samp?: Maybe<ColorAspect_Var_Samp_Fields>;
  readonly variance?: Maybe<ColorAspect_Variance_Fields>;
};


/** aggregate fields of "ColorAspect" */
export type ColorAspect_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<ColorAspect_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ColorAspect" */
export type ColorAspect_Aggregate_Order_By = {
  readonly avg?: Maybe<ColorAspect_Avg_Order_By>;
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<ColorAspect_Max_Order_By>;
  readonly min?: Maybe<ColorAspect_Min_Order_By>;
  readonly stddev?: Maybe<ColorAspect_Stddev_Order_By>;
  readonly stddev_pop?: Maybe<ColorAspect_Stddev_Pop_Order_By>;
  readonly stddev_samp?: Maybe<ColorAspect_Stddev_Samp_Order_By>;
  readonly sum?: Maybe<ColorAspect_Sum_Order_By>;
  readonly var_pop?: Maybe<ColorAspect_Var_Pop_Order_By>;
  readonly var_samp?: Maybe<ColorAspect_Var_Samp_Order_By>;
  readonly variance?: Maybe<ColorAspect_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ColorAspect" */
export type ColorAspect_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<ColorAspect_Insert_Input>;
  readonly on_conflict?: Maybe<ColorAspect_On_Conflict>;
};

/** aggregate avg on columns */
export type ColorAspect_Avg_Fields = {
  readonly __typename?: 'ColorAspect_avg_fields';
  readonly mask?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ColorAspect" */
export type ColorAspect_Avg_Order_By = {
  readonly mask?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ColorAspect". All fields are combined with a logical 'AND'. */
export type ColorAspect_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<ColorAspect_Bool_Exp>>>;
  readonly _not?: Maybe<ColorAspect_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<ColorAspect_Bool_Exp>>>;
  readonly description?: Maybe<String_Comparison_Exp>;
  readonly mask?: Maybe<Int_Comparison_Exp>;
  readonly name?: Maybe<String_Comparison_Exp>;
  readonly players?: Maybe<Player_Bool_Exp>;
};

/** unique or primary key constraints on table "ColorAspect" */
export enum ColorAspect_Constraint {
  /** unique or primary key constraint */
  ColorAspectNameKey = 'ColorAspect_name_key',
  /** unique or primary key constraint */
  ColorAspectPkey = 'ColorAspect_pkey'
}

/** input type for incrementing integer column in table "ColorAspect" */
export type ColorAspect_Inc_Input = {
  readonly mask?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "ColorAspect" */
export type ColorAspect_Insert_Input = {
  readonly description?: Maybe<Scalars['String']>;
  readonly mask?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly players?: Maybe<Player_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type ColorAspect_Max_Fields = {
  readonly __typename?: 'ColorAspect_max_fields';
  readonly description?: Maybe<Scalars['String']>;
  readonly mask?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ColorAspect" */
export type ColorAspect_Max_Order_By = {
  readonly description?: Maybe<Order_By>;
  readonly mask?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ColorAspect_Min_Fields = {
  readonly __typename?: 'ColorAspect_min_fields';
  readonly description?: Maybe<Scalars['String']>;
  readonly mask?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ColorAspect" */
export type ColorAspect_Min_Order_By = {
  readonly description?: Maybe<Order_By>;
  readonly mask?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** response of any mutation on the table "ColorAspect" */
export type ColorAspect_Mutation_Response = {
  readonly __typename?: 'ColorAspect_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<ColorAspect>;
};

/** input type for inserting object relation for remote table "ColorAspect" */
export type ColorAspect_Obj_Rel_Insert_Input = {
  readonly data: ColorAspect_Insert_Input;
  readonly on_conflict?: Maybe<ColorAspect_On_Conflict>;
};

/** on conflict condition type for table "ColorAspect" */
export type ColorAspect_On_Conflict = {
  readonly constraint: ColorAspect_Constraint;
  readonly update_columns: ReadonlyArray<ColorAspect_Update_Column>;
  readonly where?: Maybe<ColorAspect_Bool_Exp>;
};

/** ordering options when selecting data from "ColorAspect" */
export type ColorAspect_Order_By = {
  readonly description?: Maybe<Order_By>;
  readonly mask?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly players_aggregate?: Maybe<Player_Aggregate_Order_By>;
};

/** primary key columns input for table: "ColorAspect" */
export type ColorAspect_Pk_Columns_Input = {
  readonly mask: Scalars['Int'];
};

/** select columns of table "ColorAspect" */
export enum ColorAspect_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Mask = 'mask',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ColorAspect" */
export type ColorAspect_Set_Input = {
  readonly description?: Maybe<Scalars['String']>;
  readonly mask?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ColorAspect_Stddev_Fields = {
  readonly __typename?: 'ColorAspect_stddev_fields';
  readonly mask?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ColorAspect" */
export type ColorAspect_Stddev_Order_By = {
  readonly mask?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ColorAspect_Stddev_Pop_Fields = {
  readonly __typename?: 'ColorAspect_stddev_pop_fields';
  readonly mask?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ColorAspect" */
export type ColorAspect_Stddev_Pop_Order_By = {
  readonly mask?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ColorAspect_Stddev_Samp_Fields = {
  readonly __typename?: 'ColorAspect_stddev_samp_fields';
  readonly mask?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ColorAspect" */
export type ColorAspect_Stddev_Samp_Order_By = {
  readonly mask?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type ColorAspect_Sum_Fields = {
  readonly __typename?: 'ColorAspect_sum_fields';
  readonly mask?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ColorAspect" */
export type ColorAspect_Sum_Order_By = {
  readonly mask?: Maybe<Order_By>;
};

/** update columns of table "ColorAspect" */
export enum ColorAspect_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Mask = 'mask',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type ColorAspect_Var_Pop_Fields = {
  readonly __typename?: 'ColorAspect_var_pop_fields';
  readonly mask?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ColorAspect" */
export type ColorAspect_Var_Pop_Order_By = {
  readonly mask?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ColorAspect_Var_Samp_Fields = {
  readonly __typename?: 'ColorAspect_var_samp_fields';
  readonly mask?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ColorAspect" */
export type ColorAspect_Var_Samp_Order_By = {
  readonly mask?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type ColorAspect_Variance_Fields = {
  readonly __typename?: 'ColorAspect_variance_fields';
  readonly mask?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ColorAspect" */
export type ColorAspect_Variance_Order_By = {
  readonly mask?: Maybe<Order_By>;
};

export type CreateQuestCompletionInput = {
  readonly quest_id: Scalars['String'];
  readonly submission_link?: Maybe<Scalars['String']>;
  readonly submission_text?: Maybe<Scalars['String']>;
};

export type CreateQuestCompletionOutput = {
  readonly __typename?: 'CreateQuestCompletionOutput';
  readonly error?: Maybe<Scalars['String']>;
  readonly quest_completion?: Maybe<Quest_Completion>;
  readonly quest_completion_id?: Maybe<Scalars['uuid']>;
  readonly success: Scalars['Boolean'];
};

export type CreateQuestInput = {
  readonly cooldown?: Maybe<Scalars['Int']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly external_link?: Maybe<Scalars['String']>;
  readonly guild_id: Scalars['uuid'];
  readonly repetition?: Maybe<QuestRepetition_ActionEnum>;
  readonly skills_id: ReadonlyArray<Maybe<Scalars['uuid']>>;
  readonly title: Scalars['String'];
};

export type CreateQuestOutput = {
  readonly __typename?: 'CreateQuestOutput';
  readonly error?: Maybe<Scalars['String']>;
  readonly quest?: Maybe<Quest>;
  readonly quest_id?: Maybe<Scalars['uuid']>;
  readonly success: Scalars['Boolean'];
};

export type DiscordGuildAuthResponse = {
  readonly __typename?: 'DiscordGuildAuthResponse';
  readonly error?: Maybe<Scalars['String']>;
  readonly exists?: Maybe<Scalars['Boolean']>;
  readonly guildname?: Maybe<Scalars['String']>;
  readonly success: Scalars['Boolean'];
};

export type ExpiredPlayerProfiles = {
  readonly __typename?: 'ExpiredPlayerProfiles';
  readonly ids: ReadonlyArray<Maybe<Scalars['String']>>;
};

/** columns and relationships of "guild" */
export type Guild = {
  readonly __typename?: 'guild';
  /** An object relationship */
  readonly GuildType: GuildType;
  readonly description?: Maybe<Scalars['String']>;
  readonly discord_id?: Maybe<Scalars['String']>;
  readonly discord_invite_url?: Maybe<Scalars['String']>;
  readonly discord_metadata?: Maybe<Scalars['jsonb']>;
  readonly github_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  readonly guild_accounts: ReadonlyArray<Guild_Account>;
  /** An aggregated array relationship */
  readonly guild_accounts_aggregate: Guild_Account_Aggregate;
  /** An array relationship */
  readonly guild_players: ReadonlyArray<Guild_Player>;
  /** An aggregated array relationship */
  readonly guild_players_aggregate: Guild_Player_Aggregate;
  /** Unique friendly identifier for the Guild (used in URL) */
  readonly guildname: Scalars['String'];
  readonly id: Scalars['uuid'];
  readonly join_button_url?: Maybe<Scalars['String']>;
  readonly logo?: Maybe<Scalars['String']>;
  readonly moloch_address?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly position?: Maybe<GuildPosition_Enum>;
  /** An array relationship */
  readonly quests: ReadonlyArray<Quest>;
  /** An aggregated array relationship */
  readonly quests_aggregate: Quest_Aggregate;
  readonly status: GuildStatus_Enum;
  readonly twitter_url?: Maybe<Scalars['String']>;
  /** The area of focus for the guild (e.g. funding, project, etc) */
  readonly type: GuildType_Enum;
  readonly website_url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "guild" */
export type GuildDiscord_MetadataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "guild" */
export type GuildGuild_AccountsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Account_Order_By>>;
  where?: Maybe<Guild_Account_Bool_Exp>;
};


/** columns and relationships of "guild" */
export type GuildGuild_Accounts_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Account_Order_By>>;
  where?: Maybe<Guild_Account_Bool_Exp>;
};


/** columns and relationships of "guild" */
export type GuildGuild_PlayersArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** columns and relationships of "guild" */
export type GuildGuild_Players_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** columns and relationships of "guild" */
export type GuildQuestsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** columns and relationships of "guild" */
export type GuildQuests_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};

/** columns and relationships of "guild_account" */
export type Guild_Account = {
  readonly __typename?: 'guild_account';
  /** An object relationship */
  readonly AccountType: AccountType;
  /** An object relationship */
  readonly Guild: Guild;
  readonly guild_id: Scalars['uuid'];
  readonly identifier: Scalars['String'];
  readonly type: AccountType_Enum;
};

/** aggregated selection of "guild_account" */
export type Guild_Account_Aggregate = {
  readonly __typename?: 'guild_account_aggregate';
  readonly aggregate?: Maybe<Guild_Account_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Guild_Account>;
};

/** aggregate fields of "guild_account" */
export type Guild_Account_Aggregate_Fields = {
  readonly __typename?: 'guild_account_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Guild_Account_Max_Fields>;
  readonly min?: Maybe<Guild_Account_Min_Fields>;
};


/** aggregate fields of "guild_account" */
export type Guild_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Guild_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "guild_account" */
export type Guild_Account_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Guild_Account_Max_Order_By>;
  readonly min?: Maybe<Guild_Account_Min_Order_By>;
};

/** input type for inserting array relation for remote table "guild_account" */
export type Guild_Account_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Guild_Account_Insert_Input>;
  readonly on_conflict?: Maybe<Guild_Account_On_Conflict>;
};

/** Boolean expression to filter rows from the table "guild_account". All fields are combined with a logical 'AND'. */
export type Guild_Account_Bool_Exp = {
  readonly AccountType?: Maybe<AccountType_Bool_Exp>;
  readonly Guild?: Maybe<Guild_Bool_Exp>;
  readonly _and?: Maybe<ReadonlyArray<Maybe<Guild_Account_Bool_Exp>>>;
  readonly _not?: Maybe<Guild_Account_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Guild_Account_Bool_Exp>>>;
  readonly guild_id?: Maybe<Uuid_Comparison_Exp>;
  readonly identifier?: Maybe<String_Comparison_Exp>;
  readonly type?: Maybe<AccountType_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "guild_account" */
export enum Guild_Account_Constraint {
  /** unique or primary key constraint */
  GuildAccountPkey = 'guild_account_pkey',
  /** unique or primary key constraint */
  GuildAccountTypeIdentifierKey = 'guild_account_type_identifier_key'
}

/** input type for inserting data into table "guild_account" */
export type Guild_Account_Insert_Input = {
  readonly AccountType?: Maybe<AccountType_Obj_Rel_Insert_Input>;
  readonly Guild?: Maybe<Guild_Obj_Rel_Insert_Input>;
  readonly guild_id?: Maybe<Scalars['uuid']>;
  readonly identifier?: Maybe<Scalars['String']>;
  readonly type?: Maybe<AccountType_Enum>;
};

/** aggregate max on columns */
export type Guild_Account_Max_Fields = {
  readonly __typename?: 'guild_account_max_fields';
  readonly guild_id?: Maybe<Scalars['uuid']>;
  readonly identifier?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "guild_account" */
export type Guild_Account_Max_Order_By = {
  readonly guild_id?: Maybe<Order_By>;
  readonly identifier?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Guild_Account_Min_Fields = {
  readonly __typename?: 'guild_account_min_fields';
  readonly guild_id?: Maybe<Scalars['uuid']>;
  readonly identifier?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "guild_account" */
export type Guild_Account_Min_Order_By = {
  readonly guild_id?: Maybe<Order_By>;
  readonly identifier?: Maybe<Order_By>;
};

/** response of any mutation on the table "guild_account" */
export type Guild_Account_Mutation_Response = {
  readonly __typename?: 'guild_account_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Guild_Account>;
};

/** input type for inserting object relation for remote table "guild_account" */
export type Guild_Account_Obj_Rel_Insert_Input = {
  readonly data: Guild_Account_Insert_Input;
  readonly on_conflict?: Maybe<Guild_Account_On_Conflict>;
};

/** on conflict condition type for table "guild_account" */
export type Guild_Account_On_Conflict = {
  readonly constraint: Guild_Account_Constraint;
  readonly update_columns: ReadonlyArray<Guild_Account_Update_Column>;
  readonly where?: Maybe<Guild_Account_Bool_Exp>;
};

/** ordering options when selecting data from "guild_account" */
export type Guild_Account_Order_By = {
  readonly AccountType?: Maybe<AccountType_Order_By>;
  readonly Guild?: Maybe<Guild_Order_By>;
  readonly guild_id?: Maybe<Order_By>;
  readonly identifier?: Maybe<Order_By>;
  readonly type?: Maybe<Order_By>;
};

/** primary key columns input for table: "guild_account" */
export type Guild_Account_Pk_Columns_Input = {
  readonly guild_id: Scalars['uuid'];
  readonly type: AccountType_Enum;
};

/** select columns of table "guild_account" */
export enum Guild_Account_Select_Column {
  /** column name */
  GuildId = 'guild_id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "guild_account" */
export type Guild_Account_Set_Input = {
  readonly guild_id?: Maybe<Scalars['uuid']>;
  readonly identifier?: Maybe<Scalars['String']>;
  readonly type?: Maybe<AccountType_Enum>;
};

/** update columns of table "guild_account" */
export enum Guild_Account_Update_Column {
  /** column name */
  GuildId = 'guild_id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Type = 'type'
}

/** aggregated selection of "guild" */
export type Guild_Aggregate = {
  readonly __typename?: 'guild_aggregate';
  readonly aggregate?: Maybe<Guild_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Guild>;
};

/** aggregate fields of "guild" */
export type Guild_Aggregate_Fields = {
  readonly __typename?: 'guild_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Guild_Max_Fields>;
  readonly min?: Maybe<Guild_Min_Fields>;
};


/** aggregate fields of "guild" */
export type Guild_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Guild_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "guild" */
export type Guild_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Guild_Max_Order_By>;
  readonly min?: Maybe<Guild_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Guild_Append_Input = {
  readonly discord_metadata?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "guild" */
export type Guild_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Guild_Insert_Input>;
  readonly on_conflict?: Maybe<Guild_On_Conflict>;
};

/** Boolean expression to filter rows from the table "guild". All fields are combined with a logical 'AND'. */
export type Guild_Bool_Exp = {
  readonly GuildType?: Maybe<GuildType_Bool_Exp>;
  readonly _and?: Maybe<ReadonlyArray<Maybe<Guild_Bool_Exp>>>;
  readonly _not?: Maybe<Guild_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Guild_Bool_Exp>>>;
  readonly description?: Maybe<String_Comparison_Exp>;
  readonly discord_id?: Maybe<String_Comparison_Exp>;
  readonly discord_invite_url?: Maybe<String_Comparison_Exp>;
  readonly discord_metadata?: Maybe<Jsonb_Comparison_Exp>;
  readonly github_url?: Maybe<String_Comparison_Exp>;
  readonly guild_accounts?: Maybe<Guild_Account_Bool_Exp>;
  readonly guild_players?: Maybe<Guild_Player_Bool_Exp>;
  readonly guildname?: Maybe<String_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly join_button_url?: Maybe<String_Comparison_Exp>;
  readonly logo?: Maybe<String_Comparison_Exp>;
  readonly moloch_address?: Maybe<String_Comparison_Exp>;
  readonly name?: Maybe<String_Comparison_Exp>;
  readonly position?: Maybe<GuildPosition_Enum_Comparison_Exp>;
  readonly quests?: Maybe<Quest_Bool_Exp>;
  readonly status?: Maybe<GuildStatus_Enum_Comparison_Exp>;
  readonly twitter_url?: Maybe<String_Comparison_Exp>;
  readonly type?: Maybe<GuildType_Enum_Comparison_Exp>;
  readonly website_url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "guild" */
export enum Guild_Constraint {
  /** unique or primary key constraint */
  GuildGuildnameKey = 'Guild_guildname_key',
  /** unique or primary key constraint */
  GuildPkey = 'Guild_pkey',
  /** unique or primary key constraint */
  GuildDiscordIdKey = 'guild_discord_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Guild_Delete_At_Path_Input = {
  readonly discord_metadata?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

/**
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Guild_Delete_Elem_Input = {
  readonly discord_metadata?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Guild_Delete_Key_Input = {
  readonly discord_metadata?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "guild" */
export type Guild_Insert_Input = {
  readonly GuildType?: Maybe<GuildType_Obj_Rel_Insert_Input>;
  readonly description?: Maybe<Scalars['String']>;
  readonly discord_id?: Maybe<Scalars['String']>;
  readonly discord_invite_url?: Maybe<Scalars['String']>;
  readonly discord_metadata?: Maybe<Scalars['jsonb']>;
  readonly github_url?: Maybe<Scalars['String']>;
  readonly guild_accounts?: Maybe<Guild_Account_Arr_Rel_Insert_Input>;
  readonly guild_players?: Maybe<Guild_Player_Arr_Rel_Insert_Input>;
  readonly guildname?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly join_button_url?: Maybe<Scalars['String']>;
  readonly logo?: Maybe<Scalars['String']>;
  readonly moloch_address?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly position?: Maybe<GuildPosition_Enum>;
  readonly quests?: Maybe<Quest_Arr_Rel_Insert_Input>;
  readonly status?: Maybe<GuildStatus_Enum>;
  readonly twitter_url?: Maybe<Scalars['String']>;
  readonly type?: Maybe<GuildType_Enum>;
  readonly website_url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Guild_Max_Fields = {
  readonly __typename?: 'guild_max_fields';
  readonly description?: Maybe<Scalars['String']>;
  readonly discord_id?: Maybe<Scalars['String']>;
  readonly discord_invite_url?: Maybe<Scalars['String']>;
  readonly github_url?: Maybe<Scalars['String']>;
  readonly guildname?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly join_button_url?: Maybe<Scalars['String']>;
  readonly logo?: Maybe<Scalars['String']>;
  readonly moloch_address?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly twitter_url?: Maybe<Scalars['String']>;
  readonly website_url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "guild" */
export type Guild_Max_Order_By = {
  readonly description?: Maybe<Order_By>;
  readonly discord_id?: Maybe<Order_By>;
  readonly discord_invite_url?: Maybe<Order_By>;
  readonly github_url?: Maybe<Order_By>;
  readonly guildname?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly join_button_url?: Maybe<Order_By>;
  readonly logo?: Maybe<Order_By>;
  readonly moloch_address?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly twitter_url?: Maybe<Order_By>;
  readonly website_url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Guild_Min_Fields = {
  readonly __typename?: 'guild_min_fields';
  readonly description?: Maybe<Scalars['String']>;
  readonly discord_id?: Maybe<Scalars['String']>;
  readonly discord_invite_url?: Maybe<Scalars['String']>;
  readonly github_url?: Maybe<Scalars['String']>;
  readonly guildname?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly join_button_url?: Maybe<Scalars['String']>;
  readonly logo?: Maybe<Scalars['String']>;
  readonly moloch_address?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly twitter_url?: Maybe<Scalars['String']>;
  readonly website_url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "guild" */
export type Guild_Min_Order_By = {
  readonly description?: Maybe<Order_By>;
  readonly discord_id?: Maybe<Order_By>;
  readonly discord_invite_url?: Maybe<Order_By>;
  readonly github_url?: Maybe<Order_By>;
  readonly guildname?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly join_button_url?: Maybe<Order_By>;
  readonly logo?: Maybe<Order_By>;
  readonly moloch_address?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly twitter_url?: Maybe<Order_By>;
  readonly website_url?: Maybe<Order_By>;
};

/** response of any mutation on the table "guild" */
export type Guild_Mutation_Response = {
  readonly __typename?: 'guild_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Guild>;
};

/** input type for inserting object relation for remote table "guild" */
export type Guild_Obj_Rel_Insert_Input = {
  readonly data: Guild_Insert_Input;
  readonly on_conflict?: Maybe<Guild_On_Conflict>;
};

/** on conflict condition type for table "guild" */
export type Guild_On_Conflict = {
  readonly constraint: Guild_Constraint;
  readonly update_columns: ReadonlyArray<Guild_Update_Column>;
  readonly where?: Maybe<Guild_Bool_Exp>;
};

/** ordering options when selecting data from "guild" */
export type Guild_Order_By = {
  readonly GuildType?: Maybe<GuildType_Order_By>;
  readonly description?: Maybe<Order_By>;
  readonly discord_id?: Maybe<Order_By>;
  readonly discord_invite_url?: Maybe<Order_By>;
  readonly discord_metadata?: Maybe<Order_By>;
  readonly github_url?: Maybe<Order_By>;
  readonly guild_accounts_aggregate?: Maybe<Guild_Account_Aggregate_Order_By>;
  readonly guild_players_aggregate?: Maybe<Guild_Player_Aggregate_Order_By>;
  readonly guildname?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly join_button_url?: Maybe<Order_By>;
  readonly logo?: Maybe<Order_By>;
  readonly moloch_address?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly position?: Maybe<Order_By>;
  readonly quests_aggregate?: Maybe<Quest_Aggregate_Order_By>;
  readonly status?: Maybe<Order_By>;
  readonly twitter_url?: Maybe<Order_By>;
  readonly type?: Maybe<Order_By>;
  readonly website_url?: Maybe<Order_By>;
};

/** primary key columns input for table: "guild" */
export type Guild_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** columns and relationships of "guild_player" */
export type Guild_Player = {
  readonly __typename?: 'guild_player';
  /** An object relationship */
  readonly Guild: Guild;
  /** An object relationship */
  readonly Player: Player;
  readonly guild_id: Scalars['uuid'];
  readonly player_id: Scalars['uuid'];
};

/** aggregated selection of "guild_player" */
export type Guild_Player_Aggregate = {
  readonly __typename?: 'guild_player_aggregate';
  readonly aggregate?: Maybe<Guild_Player_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Guild_Player>;
};

/** aggregate fields of "guild_player" */
export type Guild_Player_Aggregate_Fields = {
  readonly __typename?: 'guild_player_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Guild_Player_Max_Fields>;
  readonly min?: Maybe<Guild_Player_Min_Fields>;
};


/** aggregate fields of "guild_player" */
export type Guild_Player_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Guild_Player_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "guild_player" */
export type Guild_Player_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Guild_Player_Max_Order_By>;
  readonly min?: Maybe<Guild_Player_Min_Order_By>;
};

/** input type for inserting array relation for remote table "guild_player" */
export type Guild_Player_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Guild_Player_Insert_Input>;
  readonly on_conflict?: Maybe<Guild_Player_On_Conflict>;
};

/** Boolean expression to filter rows from the table "guild_player". All fields are combined with a logical 'AND'. */
export type Guild_Player_Bool_Exp = {
  readonly Guild?: Maybe<Guild_Bool_Exp>;
  readonly Player?: Maybe<Player_Bool_Exp>;
  readonly _and?: Maybe<ReadonlyArray<Maybe<Guild_Player_Bool_Exp>>>;
  readonly _not?: Maybe<Guild_Player_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Guild_Player_Bool_Exp>>>;
  readonly guild_id?: Maybe<Uuid_Comparison_Exp>;
  readonly player_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "guild_player" */
export enum Guild_Player_Constraint {
  /** unique or primary key constraint */
  GuildPlayerPkey = 'guild_player_pkey'
}

/** input type for inserting data into table "guild_player" */
export type Guild_Player_Insert_Input = {
  readonly Guild?: Maybe<Guild_Obj_Rel_Insert_Input>;
  readonly Player?: Maybe<Player_Obj_Rel_Insert_Input>;
  readonly guild_id?: Maybe<Scalars['uuid']>;
  readonly player_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Guild_Player_Max_Fields = {
  readonly __typename?: 'guild_player_max_fields';
  readonly guild_id?: Maybe<Scalars['uuid']>;
  readonly player_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "guild_player" */
export type Guild_Player_Max_Order_By = {
  readonly guild_id?: Maybe<Order_By>;
  readonly player_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Guild_Player_Min_Fields = {
  readonly __typename?: 'guild_player_min_fields';
  readonly guild_id?: Maybe<Scalars['uuid']>;
  readonly player_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "guild_player" */
export type Guild_Player_Min_Order_By = {
  readonly guild_id?: Maybe<Order_By>;
  readonly player_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "guild_player" */
export type Guild_Player_Mutation_Response = {
  readonly __typename?: 'guild_player_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Guild_Player>;
};

/** input type for inserting object relation for remote table "guild_player" */
export type Guild_Player_Obj_Rel_Insert_Input = {
  readonly data: Guild_Player_Insert_Input;
  readonly on_conflict?: Maybe<Guild_Player_On_Conflict>;
};

/** on conflict condition type for table "guild_player" */
export type Guild_Player_On_Conflict = {
  readonly constraint: Guild_Player_Constraint;
  readonly update_columns: ReadonlyArray<Guild_Player_Update_Column>;
  readonly where?: Maybe<Guild_Player_Bool_Exp>;
};

/** ordering options when selecting data from "guild_player" */
export type Guild_Player_Order_By = {
  readonly Guild?: Maybe<Guild_Order_By>;
  readonly Player?: Maybe<Player_Order_By>;
  readonly guild_id?: Maybe<Order_By>;
  readonly player_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "guild_player" */
export type Guild_Player_Pk_Columns_Input = {
  readonly guild_id: Scalars['uuid'];
  readonly player_id: Scalars['uuid'];
};

/** select columns of table "guild_player" */
export enum Guild_Player_Select_Column {
  /** column name */
  GuildId = 'guild_id',
  /** column name */
  PlayerId = 'player_id'
}

/** input type for updating data in table "guild_player" */
export type Guild_Player_Set_Input = {
  readonly guild_id?: Maybe<Scalars['uuid']>;
  readonly player_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "guild_player" */
export enum Guild_Player_Update_Column {
  /** column name */
  GuildId = 'guild_id',
  /** column name */
  PlayerId = 'player_id'
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Guild_Prepend_Input = {
  readonly discord_metadata?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "guild" */
export enum Guild_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  DiscordId = 'discord_id',
  /** column name */
  DiscordInviteUrl = 'discord_invite_url',
  /** column name */
  DiscordMetadata = 'discord_metadata',
  /** column name */
  GithubUrl = 'github_url',
  /** column name */
  Guildname = 'guildname',
  /** column name */
  Id = 'id',
  /** column name */
  JoinButtonUrl = 'join_button_url',
  /** column name */
  Logo = 'logo',
  /** column name */
  MolochAddress = 'moloch_address',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  Status = 'status',
  /** column name */
  TwitterUrl = 'twitter_url',
  /** column name */
  Type = 'type',
  /** column name */
  WebsiteUrl = 'website_url'
}

/** input type for updating data in table "guild" */
export type Guild_Set_Input = {
  readonly description?: Maybe<Scalars['String']>;
  readonly discord_id?: Maybe<Scalars['String']>;
  readonly discord_invite_url?: Maybe<Scalars['String']>;
  readonly discord_metadata?: Maybe<Scalars['jsonb']>;
  readonly github_url?: Maybe<Scalars['String']>;
  readonly guildname?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly join_button_url?: Maybe<Scalars['String']>;
  readonly logo?: Maybe<Scalars['String']>;
  readonly moloch_address?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly position?: Maybe<GuildPosition_Enum>;
  readonly status?: Maybe<GuildStatus_Enum>;
  readonly twitter_url?: Maybe<Scalars['String']>;
  readonly type?: Maybe<GuildType_Enum>;
  readonly website_url?: Maybe<Scalars['String']>;
};

/** update columns of table "guild" */
export enum Guild_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  DiscordId = 'discord_id',
  /** column name */
  DiscordInviteUrl = 'discord_invite_url',
  /** column name */
  DiscordMetadata = 'discord_metadata',
  /** column name */
  GithubUrl = 'github_url',
  /** column name */
  Guildname = 'guildname',
  /** column name */
  Id = 'id',
  /** column name */
  JoinButtonUrl = 'join_button_url',
  /** column name */
  Logo = 'logo',
  /** column name */
  MolochAddress = 'moloch_address',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  Status = 'status',
  /** column name */
  TwitterUrl = 'twitter_url',
  /** column name */
  Type = 'type',
  /** column name */
  WebsiteUrl = 'website_url'
}

/** columns and relationships of "GuildPosition" */
export type GuildPosition = {
  readonly __typename?: 'GuildPosition';
  readonly position: Scalars['String'];
};

/** aggregated selection of "GuildPosition" */
export type GuildPosition_Aggregate = {
  readonly __typename?: 'GuildPosition_aggregate';
  readonly aggregate?: Maybe<GuildPosition_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<GuildPosition>;
};

/** aggregate fields of "GuildPosition" */
export type GuildPosition_Aggregate_Fields = {
  readonly __typename?: 'GuildPosition_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<GuildPosition_Max_Fields>;
  readonly min?: Maybe<GuildPosition_Min_Fields>;
};


/** aggregate fields of "GuildPosition" */
export type GuildPosition_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<GuildPosition_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "GuildPosition" */
export type GuildPosition_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<GuildPosition_Max_Order_By>;
  readonly min?: Maybe<GuildPosition_Min_Order_By>;
};

/** input type for inserting array relation for remote table "GuildPosition" */
export type GuildPosition_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<GuildPosition_Insert_Input>;
  readonly on_conflict?: Maybe<GuildPosition_On_Conflict>;
};

/** Boolean expression to filter rows from the table "GuildPosition". All fields are combined with a logical 'AND'. */
export type GuildPosition_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<GuildPosition_Bool_Exp>>>;
  readonly _not?: Maybe<GuildPosition_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<GuildPosition_Bool_Exp>>>;
  readonly position?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "GuildPosition" */
export enum GuildPosition_Constraint {
  /** unique or primary key constraint */
  GuildPositionPkey = 'GuildPosition_pkey'
}

export enum GuildPosition_Enum {
  External = 'EXTERNAL',
  Internal = 'INTERNAL'
}

/** expression to compare columns of type GuildPosition_enum. All fields are combined with logical 'AND'. */
export type GuildPosition_Enum_Comparison_Exp = {
  readonly _eq?: Maybe<GuildPosition_Enum>;
  readonly _in?: Maybe<ReadonlyArray<GuildPosition_Enum>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _neq?: Maybe<GuildPosition_Enum>;
  readonly _nin?: Maybe<ReadonlyArray<GuildPosition_Enum>>;
};

/** input type for inserting data into table "GuildPosition" */
export type GuildPosition_Insert_Input = {
  readonly position?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type GuildPosition_Max_Fields = {
  readonly __typename?: 'GuildPosition_max_fields';
  readonly position?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "GuildPosition" */
export type GuildPosition_Max_Order_By = {
  readonly position?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type GuildPosition_Min_Fields = {
  readonly __typename?: 'GuildPosition_min_fields';
  readonly position?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "GuildPosition" */
export type GuildPosition_Min_Order_By = {
  readonly position?: Maybe<Order_By>;
};

/** response of any mutation on the table "GuildPosition" */
export type GuildPosition_Mutation_Response = {
  readonly __typename?: 'GuildPosition_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<GuildPosition>;
};

/** input type for inserting object relation for remote table "GuildPosition" */
export type GuildPosition_Obj_Rel_Insert_Input = {
  readonly data: GuildPosition_Insert_Input;
  readonly on_conflict?: Maybe<GuildPosition_On_Conflict>;
};

/** on conflict condition type for table "GuildPosition" */
export type GuildPosition_On_Conflict = {
  readonly constraint: GuildPosition_Constraint;
  readonly update_columns: ReadonlyArray<GuildPosition_Update_Column>;
  readonly where?: Maybe<GuildPosition_Bool_Exp>;
};

/** ordering options when selecting data from "GuildPosition" */
export type GuildPosition_Order_By = {
  readonly position?: Maybe<Order_By>;
};

/** primary key columns input for table: "GuildPosition" */
export type GuildPosition_Pk_Columns_Input = {
  readonly position: Scalars['String'];
};

/** select columns of table "GuildPosition" */
export enum GuildPosition_Select_Column {
  /** column name */
  Position = 'position'
}

/** input type for updating data in table "GuildPosition" */
export type GuildPosition_Set_Input = {
  readonly position?: Maybe<Scalars['String']>;
};

/** update columns of table "GuildPosition" */
export enum GuildPosition_Update_Column {
  /** column name */
  Position = 'position'
}

/** columns and relationships of "GuildStatus" */
export type GuildStatus = {
  readonly __typename?: 'GuildStatus';
  readonly status: Scalars['String'];
};

/** aggregated selection of "GuildStatus" */
export type GuildStatus_Aggregate = {
  readonly __typename?: 'GuildStatus_aggregate';
  readonly aggregate?: Maybe<GuildStatus_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<GuildStatus>;
};

/** aggregate fields of "GuildStatus" */
export type GuildStatus_Aggregate_Fields = {
  readonly __typename?: 'GuildStatus_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<GuildStatus_Max_Fields>;
  readonly min?: Maybe<GuildStatus_Min_Fields>;
};


/** aggregate fields of "GuildStatus" */
export type GuildStatus_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<GuildStatus_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "GuildStatus" */
export type GuildStatus_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<GuildStatus_Max_Order_By>;
  readonly min?: Maybe<GuildStatus_Min_Order_By>;
};

/** input type for inserting array relation for remote table "GuildStatus" */
export type GuildStatus_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<GuildStatus_Insert_Input>;
  readonly on_conflict?: Maybe<GuildStatus_On_Conflict>;
};

/** Boolean expression to filter rows from the table "GuildStatus". All fields are combined with a logical 'AND'. */
export type GuildStatus_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<GuildStatus_Bool_Exp>>>;
  readonly _not?: Maybe<GuildStatus_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<GuildStatus_Bool_Exp>>>;
  readonly status?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "GuildStatus" */
export enum GuildStatus_Constraint {
  /** unique or primary key constraint */
  GuildStatusPkey = 'GuildStatus_pkey'
}

export enum GuildStatus_Enum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING'
}

/** expression to compare columns of type GuildStatus_enum. All fields are combined with logical 'AND'. */
export type GuildStatus_Enum_Comparison_Exp = {
  readonly _eq?: Maybe<GuildStatus_Enum>;
  readonly _in?: Maybe<ReadonlyArray<GuildStatus_Enum>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _neq?: Maybe<GuildStatus_Enum>;
  readonly _nin?: Maybe<ReadonlyArray<GuildStatus_Enum>>;
};

/** input type for inserting data into table "GuildStatus" */
export type GuildStatus_Insert_Input = {
  readonly status?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type GuildStatus_Max_Fields = {
  readonly __typename?: 'GuildStatus_max_fields';
  readonly status?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "GuildStatus" */
export type GuildStatus_Max_Order_By = {
  readonly status?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type GuildStatus_Min_Fields = {
  readonly __typename?: 'GuildStatus_min_fields';
  readonly status?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "GuildStatus" */
export type GuildStatus_Min_Order_By = {
  readonly status?: Maybe<Order_By>;
};

/** response of any mutation on the table "GuildStatus" */
export type GuildStatus_Mutation_Response = {
  readonly __typename?: 'GuildStatus_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<GuildStatus>;
};

/** input type for inserting object relation for remote table "GuildStatus" */
export type GuildStatus_Obj_Rel_Insert_Input = {
  readonly data: GuildStatus_Insert_Input;
  readonly on_conflict?: Maybe<GuildStatus_On_Conflict>;
};

/** on conflict condition type for table "GuildStatus" */
export type GuildStatus_On_Conflict = {
  readonly constraint: GuildStatus_Constraint;
  readonly update_columns: ReadonlyArray<GuildStatus_Update_Column>;
  readonly where?: Maybe<GuildStatus_Bool_Exp>;
};

/** ordering options when selecting data from "GuildStatus" */
export type GuildStatus_Order_By = {
  readonly status?: Maybe<Order_By>;
};

/** primary key columns input for table: "GuildStatus" */
export type GuildStatus_Pk_Columns_Input = {
  readonly status: Scalars['String'];
};

/** select columns of table "GuildStatus" */
export enum GuildStatus_Select_Column {
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "GuildStatus" */
export type GuildStatus_Set_Input = {
  readonly status?: Maybe<Scalars['String']>;
};

/** update columns of table "GuildStatus" */
export enum GuildStatus_Update_Column {
  /** column name */
  Status = 'status'
}

/** columns and relationships of "GuildType" */
export type GuildType = {
  readonly __typename?: 'GuildType';
  /** An array relationship */
  readonly Guilds: ReadonlyArray<Guild>;
  /** An aggregated array relationship */
  readonly Guilds_aggregate: Guild_Aggregate;
  readonly name: Scalars['String'];
};


/** columns and relationships of "GuildType" */
export type GuildTypeGuildsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Order_By>>;
  where?: Maybe<Guild_Bool_Exp>;
};


/** columns and relationships of "GuildType" */
export type GuildTypeGuilds_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Order_By>>;
  where?: Maybe<Guild_Bool_Exp>;
};

/** aggregated selection of "GuildType" */
export type GuildType_Aggregate = {
  readonly __typename?: 'GuildType_aggregate';
  readonly aggregate?: Maybe<GuildType_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<GuildType>;
};

/** aggregate fields of "GuildType" */
export type GuildType_Aggregate_Fields = {
  readonly __typename?: 'GuildType_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<GuildType_Max_Fields>;
  readonly min?: Maybe<GuildType_Min_Fields>;
};


/** aggregate fields of "GuildType" */
export type GuildType_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<GuildType_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "GuildType" */
export type GuildType_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<GuildType_Max_Order_By>;
  readonly min?: Maybe<GuildType_Min_Order_By>;
};

/** input type for inserting array relation for remote table "GuildType" */
export type GuildType_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<GuildType_Insert_Input>;
  readonly on_conflict?: Maybe<GuildType_On_Conflict>;
};

/** Boolean expression to filter rows from the table "GuildType". All fields are combined with a logical 'AND'. */
export type GuildType_Bool_Exp = {
  readonly Guilds?: Maybe<Guild_Bool_Exp>;
  readonly _and?: Maybe<ReadonlyArray<Maybe<GuildType_Bool_Exp>>>;
  readonly _not?: Maybe<GuildType_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<GuildType_Bool_Exp>>>;
  readonly name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "GuildType" */
export enum GuildType_Constraint {
  /** unique or primary key constraint */
  GuildTypePkey = 'GuildType_pkey'
}

export enum GuildType_Enum {
  Funding = 'FUNDING',
  Project = 'PROJECT',
  Research = 'RESEARCH',
  Service = 'SERVICE',
  Social = 'SOCIAL'
}

/** expression to compare columns of type GuildType_enum. All fields are combined with logical 'AND'. */
export type GuildType_Enum_Comparison_Exp = {
  readonly _eq?: Maybe<GuildType_Enum>;
  readonly _in?: Maybe<ReadonlyArray<GuildType_Enum>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _neq?: Maybe<GuildType_Enum>;
  readonly _nin?: Maybe<ReadonlyArray<GuildType_Enum>>;
};

/** input type for inserting data into table "GuildType" */
export type GuildType_Insert_Input = {
  readonly Guilds?: Maybe<Guild_Arr_Rel_Insert_Input>;
  readonly name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type GuildType_Max_Fields = {
  readonly __typename?: 'GuildType_max_fields';
  readonly name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "GuildType" */
export type GuildType_Max_Order_By = {
  readonly name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type GuildType_Min_Fields = {
  readonly __typename?: 'GuildType_min_fields';
  readonly name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "GuildType" */
export type GuildType_Min_Order_By = {
  readonly name?: Maybe<Order_By>;
};

/** response of any mutation on the table "GuildType" */
export type GuildType_Mutation_Response = {
  readonly __typename?: 'GuildType_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<GuildType>;
};

/** input type for inserting object relation for remote table "GuildType" */
export type GuildType_Obj_Rel_Insert_Input = {
  readonly data: GuildType_Insert_Input;
  readonly on_conflict?: Maybe<GuildType_On_Conflict>;
};

/** on conflict condition type for table "GuildType" */
export type GuildType_On_Conflict = {
  readonly constraint: GuildType_Constraint;
  readonly update_columns: ReadonlyArray<GuildType_Update_Column>;
  readonly where?: Maybe<GuildType_Bool_Exp>;
};

/** ordering options when selecting data from "GuildType" */
export type GuildType_Order_By = {
  readonly Guilds_aggregate?: Maybe<Guild_Aggregate_Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** primary key columns input for table: "GuildType" */
export type GuildType_Pk_Columns_Input = {
  readonly name: Scalars['String'];
};

/** select columns of table "GuildType" */
export enum GuildType_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "GuildType" */
export type GuildType_Set_Input = {
  readonly name?: Maybe<Scalars['String']>;
};

/** update columns of table "GuildType" */
export enum GuildType_Update_Column {
  /** column name */
  Name = 'name'
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars['Int']>;
  readonly _gt?: Maybe<Scalars['Int']>;
  readonly _gte?: Maybe<Scalars['Int']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['Int']>;
  readonly _lte?: Maybe<Scalars['Int']>;
  readonly _neq?: Maybe<Scalars['Int']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['Int']>>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars['json']>;
  readonly _gt?: Maybe<Scalars['json']>;
  readonly _gte?: Maybe<Scalars['json']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['json']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['json']>;
  readonly _lte?: Maybe<Scalars['json']>;
  readonly _neq?: Maybe<Scalars['json']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['json']>>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  readonly _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  readonly _contains?: Maybe<Scalars['jsonb']>;
  readonly _eq?: Maybe<Scalars['jsonb']>;
  readonly _gt?: Maybe<Scalars['jsonb']>;
  readonly _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  readonly _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  readonly _has_keys_all?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  readonly _has_keys_any?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['jsonb']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['jsonb']>;
  readonly _lte?: Maybe<Scalars['jsonb']>;
  readonly _neq?: Maybe<Scalars['jsonb']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['jsonb']>>;
};

/** columns and relationships of "me" */
export type Me = {
  readonly __typename?: 'me';
  readonly ethereum_address?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  readonly player?: Maybe<Player>;
  readonly username?: Maybe<Scalars['String']>;
};

/** aggregated selection of "me" */
export type Me_Aggregate = {
  readonly __typename?: 'me_aggregate';
  readonly aggregate?: Maybe<Me_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Me>;
};

/** aggregate fields of "me" */
export type Me_Aggregate_Fields = {
  readonly __typename?: 'me_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Me_Max_Fields>;
  readonly min?: Maybe<Me_Min_Fields>;
};


/** aggregate fields of "me" */
export type Me_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Me_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "me" */
export type Me_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Me_Max_Order_By>;
  readonly min?: Maybe<Me_Min_Order_By>;
};

/** input type for inserting array relation for remote table "me" */
export type Me_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Me_Insert_Input>;
};

/** Boolean expression to filter rows from the table "me". All fields are combined with a logical 'AND'. */
export type Me_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Me_Bool_Exp>>>;
  readonly _not?: Maybe<Me_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Me_Bool_Exp>>>;
  readonly ethereum_address?: Maybe<String_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly player?: Maybe<Player_Bool_Exp>;
  readonly username?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "me" */
export type Me_Insert_Input = {
  readonly ethereum_address?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly player?: Maybe<Player_Obj_Rel_Insert_Input>;
  readonly username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Me_Max_Fields = {
  readonly __typename?: 'me_max_fields';
  readonly ethereum_address?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "me" */
export type Me_Max_Order_By = {
  readonly ethereum_address?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Me_Min_Fields = {
  readonly __typename?: 'me_min_fields';
  readonly ethereum_address?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "me" */
export type Me_Min_Order_By = {
  readonly ethereum_address?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly username?: Maybe<Order_By>;
};

/** response of any mutation on the table "me" */
export type Me_Mutation_Response = {
  readonly __typename?: 'me_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Me>;
};

/** input type for inserting object relation for remote table "me" */
export type Me_Obj_Rel_Insert_Input = {
  readonly data: Me_Insert_Input;
};

/** ordering options when selecting data from "me" */
export type Me_Order_By = {
  readonly ethereum_address?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly player?: Maybe<Player_Order_By>;
  readonly username?: Maybe<Order_By>;
};

/** select columns of table "me" */
export enum Me_Select_Column {
  /** column name */
  EthereumAddress = 'ethereum_address',
  /** column name */
  Id = 'id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "me" */
export type Me_Set_Input = {
  readonly ethereum_address?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly username?: Maybe<Scalars['String']>;
};

export type Member = {
  readonly __typename?: 'Member';
  readonly createdAt: Scalars['String'];
  readonly delegateKey: Scalars['String'];
  readonly exists: Scalars['Boolean'];
  readonly id: Scalars['ID'];
  readonly kicked?: Maybe<Scalars['Boolean']>;
  readonly loot?: Maybe<Scalars['String']>;
  readonly memberAddress: Scalars['String'];
  readonly moloch: Moloch;
  readonly molochAddress: Scalars['String'];
  readonly shares: Scalars['String'];
};

export type Moloch = {
  readonly __typename?: 'Moloch';
  readonly chain: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly summoner: Scalars['String'];
  readonly title?: Maybe<Scalars['String']>;
  readonly totalLoot: Scalars['String'];
  readonly totalShares: Scalars['String'];
  readonly version?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  readonly __typename?: 'mutation_root';
  /** perform the action: "authenticateDiscordGuild" */
  readonly authenticateDiscordGuild?: Maybe<DiscordGuildAuthResponse>;
  /** perform the action: "createQuest" */
  readonly createQuest?: Maybe<CreateQuestOutput>;
  /** perform the action: "createQuestCompletion" */
  readonly createQuestCompletion?: Maybe<CreateQuestCompletionOutput>;
  /** delete data from the table: "AccountType" */
  readonly delete_AccountType?: Maybe<AccountType_Mutation_Response>;
  /** delete single row from the table: "AccountType" */
  readonly delete_AccountType_by_pk?: Maybe<AccountType>;
  /** delete data from the table: "ColorAspect" */
  readonly delete_ColorAspect?: Maybe<ColorAspect_Mutation_Response>;
  /** delete single row from the table: "ColorAspect" */
  readonly delete_ColorAspect_by_pk?: Maybe<ColorAspect>;
  /** delete data from the table: "GuildPosition" */
  readonly delete_GuildPosition?: Maybe<GuildPosition_Mutation_Response>;
  /** delete single row from the table: "GuildPosition" */
  readonly delete_GuildPosition_by_pk?: Maybe<GuildPosition>;
  /** delete data from the table: "GuildStatus" */
  readonly delete_GuildStatus?: Maybe<GuildStatus_Mutation_Response>;
  /** delete single row from the table: "GuildStatus" */
  readonly delete_GuildStatus_by_pk?: Maybe<GuildStatus>;
  /** delete data from the table: "GuildType" */
  readonly delete_GuildType?: Maybe<GuildType_Mutation_Response>;
  /** delete single row from the table: "GuildType" */
  readonly delete_GuildType_by_pk?: Maybe<GuildType>;
  /** delete data from the table: "PlayerRank" */
  readonly delete_PlayerRank?: Maybe<PlayerRank_Mutation_Response>;
  /** delete single row from the table: "PlayerRank" */
  readonly delete_PlayerRank_by_pk?: Maybe<PlayerRank>;
  /** delete data from the table: "QuestCompletionStatus" */
  readonly delete_QuestCompletionStatus?: Maybe<QuestCompletionStatus_Mutation_Response>;
  /** delete single row from the table: "QuestCompletionStatus" */
  readonly delete_QuestCompletionStatus_by_pk?: Maybe<QuestCompletionStatus>;
  /** delete data from the table: "QuestRepetition" */
  readonly delete_QuestRepetition?: Maybe<QuestRepetition_Mutation_Response>;
  /** delete single row from the table: "QuestRepetition" */
  readonly delete_QuestRepetition_by_pk?: Maybe<QuestRepetition>;
  /** delete data from the table: "QuestStatus" */
  readonly delete_QuestStatus?: Maybe<QuestStatus_Mutation_Response>;
  /** delete single row from the table: "QuestStatus" */
  readonly delete_QuestStatus_by_pk?: Maybe<QuestStatus>;
  /** delete data from the table: "SkillCategory" */
  readonly delete_SkillCategory?: Maybe<SkillCategory_Mutation_Response>;
  /** delete single row from the table: "SkillCategory" */
  readonly delete_SkillCategory_by_pk?: Maybe<SkillCategory>;
  /** delete data from the table: "guild" */
  readonly delete_guild?: Maybe<Guild_Mutation_Response>;
  /** delete data from the table: "guild_account" */
  readonly delete_guild_account?: Maybe<Guild_Account_Mutation_Response>;
  /** delete single row from the table: "guild_account" */
  readonly delete_guild_account_by_pk?: Maybe<Guild_Account>;
  /** delete single row from the table: "guild" */
  readonly delete_guild_by_pk?: Maybe<Guild>;
  /** delete data from the table: "guild_player" */
  readonly delete_guild_player?: Maybe<Guild_Player_Mutation_Response>;
  /** delete single row from the table: "guild_player" */
  readonly delete_guild_player_by_pk?: Maybe<Guild_Player>;
  /** delete data from the table: "me" */
  readonly delete_me?: Maybe<Me_Mutation_Response>;
  /** delete data from the table: "player" */
  readonly delete_player?: Maybe<Player_Mutation_Response>;
  /** delete data from the table: "player_account" */
  readonly delete_player_account?: Maybe<Player_Account_Mutation_Response>;
  /** delete single row from the table: "player" */
  readonly delete_player_by_pk?: Maybe<Player>;
  /** delete data from the table: "player_skill" */
  readonly delete_player_skill?: Maybe<Player_Skill_Mutation_Response>;
  /** delete single row from the table: "player_skill" */
  readonly delete_player_skill_by_pk?: Maybe<Player_Skill>;
  /** delete data from the table: "player_type" */
  readonly delete_player_type?: Maybe<Player_Type_Mutation_Response>;
  /** delete single row from the table: "player_type" */
  readonly delete_player_type_by_pk?: Maybe<Player_Type>;
  /** delete data from the table: "profile_cache" */
  readonly delete_profile_cache?: Maybe<Profile_Cache_Mutation_Response>;
  /** delete single row from the table: "profile_cache" */
  readonly delete_profile_cache_by_pk?: Maybe<Profile_Cache>;
  /** delete data from the table: "quest" */
  readonly delete_quest?: Maybe<Quest_Mutation_Response>;
  /** delete single row from the table: "quest" */
  readonly delete_quest_by_pk?: Maybe<Quest>;
  /** delete data from the table: "quest_completion" */
  readonly delete_quest_completion?: Maybe<Quest_Completion_Mutation_Response>;
  /** delete single row from the table: "quest_completion" */
  readonly delete_quest_completion_by_pk?: Maybe<Quest_Completion>;
  /** delete data from the table: "quest_skill" */
  readonly delete_quest_skill?: Maybe<Quest_Skill_Mutation_Response>;
  /** delete single row from the table: "quest_skill" */
  readonly delete_quest_skill_by_pk?: Maybe<Quest_Skill>;
  /** delete data from the table: "skill" */
  readonly delete_skill?: Maybe<Skill_Mutation_Response>;
  /** delete single row from the table: "skill" */
  readonly delete_skill_by_pk?: Maybe<Skill>;
  /** insert data into the table: "AccountType" */
  readonly insert_AccountType?: Maybe<AccountType_Mutation_Response>;
  /** insert a single row into the table: "AccountType" */
  readonly insert_AccountType_one?: Maybe<AccountType>;
  /** insert data into the table: "ColorAspect" */
  readonly insert_ColorAspect?: Maybe<ColorAspect_Mutation_Response>;
  /** insert a single row into the table: "ColorAspect" */
  readonly insert_ColorAspect_one?: Maybe<ColorAspect>;
  /** insert data into the table: "GuildPosition" */
  readonly insert_GuildPosition?: Maybe<GuildPosition_Mutation_Response>;
  /** insert a single row into the table: "GuildPosition" */
  readonly insert_GuildPosition_one?: Maybe<GuildPosition>;
  /** insert data into the table: "GuildStatus" */
  readonly insert_GuildStatus?: Maybe<GuildStatus_Mutation_Response>;
  /** insert a single row into the table: "GuildStatus" */
  readonly insert_GuildStatus_one?: Maybe<GuildStatus>;
  /** insert data into the table: "GuildType" */
  readonly insert_GuildType?: Maybe<GuildType_Mutation_Response>;
  /** insert a single row into the table: "GuildType" */
  readonly insert_GuildType_one?: Maybe<GuildType>;
  /** insert data into the table: "PlayerRank" */
  readonly insert_PlayerRank?: Maybe<PlayerRank_Mutation_Response>;
  /** insert a single row into the table: "PlayerRank" */
  readonly insert_PlayerRank_one?: Maybe<PlayerRank>;
  /** insert data into the table: "QuestCompletionStatus" */
  readonly insert_QuestCompletionStatus?: Maybe<QuestCompletionStatus_Mutation_Response>;
  /** insert a single row into the table: "QuestCompletionStatus" */
  readonly insert_QuestCompletionStatus_one?: Maybe<QuestCompletionStatus>;
  /** insert data into the table: "QuestRepetition" */
  readonly insert_QuestRepetition?: Maybe<QuestRepetition_Mutation_Response>;
  /** insert a single row into the table: "QuestRepetition" */
  readonly insert_QuestRepetition_one?: Maybe<QuestRepetition>;
  /** insert data into the table: "QuestStatus" */
  readonly insert_QuestStatus?: Maybe<QuestStatus_Mutation_Response>;
  /** insert a single row into the table: "QuestStatus" */
  readonly insert_QuestStatus_one?: Maybe<QuestStatus>;
  /** insert data into the table: "SkillCategory" */
  readonly insert_SkillCategory?: Maybe<SkillCategory_Mutation_Response>;
  /** insert a single row into the table: "SkillCategory" */
  readonly insert_SkillCategory_one?: Maybe<SkillCategory>;
  /** insert data into the table: "guild" */
  readonly insert_guild?: Maybe<Guild_Mutation_Response>;
  /** insert data into the table: "guild_account" */
  readonly insert_guild_account?: Maybe<Guild_Account_Mutation_Response>;
  /** insert a single row into the table: "guild_account" */
  readonly insert_guild_account_one?: Maybe<Guild_Account>;
  /** insert a single row into the table: "guild" */
  readonly insert_guild_one?: Maybe<Guild>;
  /** insert data into the table: "guild_player" */
  readonly insert_guild_player?: Maybe<Guild_Player_Mutation_Response>;
  /** insert a single row into the table: "guild_player" */
  readonly insert_guild_player_one?: Maybe<Guild_Player>;
  /** insert data into the table: "me" */
  readonly insert_me?: Maybe<Me_Mutation_Response>;
  /** insert a single row into the table: "me" */
  readonly insert_me_one?: Maybe<Me>;
  /** insert data into the table: "player" */
  readonly insert_player?: Maybe<Player_Mutation_Response>;
  /** insert data into the table: "player_account" */
  readonly insert_player_account?: Maybe<Player_Account_Mutation_Response>;
  /** insert a single row into the table: "player_account" */
  readonly insert_player_account_one?: Maybe<Player_Account>;
  /** insert a single row into the table: "player" */
  readonly insert_player_one?: Maybe<Player>;
  /** insert data into the table: "player_skill" */
  readonly insert_player_skill?: Maybe<Player_Skill_Mutation_Response>;
  /** insert a single row into the table: "player_skill" */
  readonly insert_player_skill_one?: Maybe<Player_Skill>;
  /** insert data into the table: "player_type" */
  readonly insert_player_type?: Maybe<Player_Type_Mutation_Response>;
  /** insert a single row into the table: "player_type" */
  readonly insert_player_type_one?: Maybe<Player_Type>;
  /** insert data into the table: "profile_cache" */
  readonly insert_profile_cache?: Maybe<Profile_Cache_Mutation_Response>;
  /** insert a single row into the table: "profile_cache" */
  readonly insert_profile_cache_one?: Maybe<Profile_Cache>;
  /** insert data into the table: "quest" */
  readonly insert_quest?: Maybe<Quest_Mutation_Response>;
  /** insert data into the table: "quest_completion" */
  readonly insert_quest_completion?: Maybe<Quest_Completion_Mutation_Response>;
  /** insert a single row into the table: "quest_completion" */
  readonly insert_quest_completion_one?: Maybe<Quest_Completion>;
  /** insert a single row into the table: "quest" */
  readonly insert_quest_one?: Maybe<Quest>;
  /** insert data into the table: "quest_skill" */
  readonly insert_quest_skill?: Maybe<Quest_Skill_Mutation_Response>;
  /** insert a single row into the table: "quest_skill" */
  readonly insert_quest_skill_one?: Maybe<Quest_Skill>;
  /** insert data into the table: "skill" */
  readonly insert_skill?: Maybe<Skill_Mutation_Response>;
  /** insert a single row into the table: "skill" */
  readonly insert_skill_one?: Maybe<Skill>;
  /** perform the action: "updateExpiredIDXProfiles" */
  readonly updateExpiredIDXProfiles?: Maybe<ExpiredPlayerProfiles>;
  /** perform the action: "updateIDXProfile" */
  readonly updateIDXProfile?: Maybe<CacheProcessOutput>;
  /** perform the action: "updateQuestCompletion" */
  readonly updateQuestCompletion?: Maybe<UpdateQuestCompletionOutput>;
  /** update data of the table: "AccountType" */
  readonly update_AccountType?: Maybe<AccountType_Mutation_Response>;
  /** update single row of the table: "AccountType" */
  readonly update_AccountType_by_pk?: Maybe<AccountType>;
  /** update data of the table: "ColorAspect" */
  readonly update_ColorAspect?: Maybe<ColorAspect_Mutation_Response>;
  /** update single row of the table: "ColorAspect" */
  readonly update_ColorAspect_by_pk?: Maybe<ColorAspect>;
  /** update data of the table: "GuildPosition" */
  readonly update_GuildPosition?: Maybe<GuildPosition_Mutation_Response>;
  /** update single row of the table: "GuildPosition" */
  readonly update_GuildPosition_by_pk?: Maybe<GuildPosition>;
  /** update data of the table: "GuildStatus" */
  readonly update_GuildStatus?: Maybe<GuildStatus_Mutation_Response>;
  /** update single row of the table: "GuildStatus" */
  readonly update_GuildStatus_by_pk?: Maybe<GuildStatus>;
  /** update data of the table: "GuildType" */
  readonly update_GuildType?: Maybe<GuildType_Mutation_Response>;
  /** update single row of the table: "GuildType" */
  readonly update_GuildType_by_pk?: Maybe<GuildType>;
  /** update data of the table: "PlayerRank" */
  readonly update_PlayerRank?: Maybe<PlayerRank_Mutation_Response>;
  /** update single row of the table: "PlayerRank" */
  readonly update_PlayerRank_by_pk?: Maybe<PlayerRank>;
  /** update data of the table: "QuestCompletionStatus" */
  readonly update_QuestCompletionStatus?: Maybe<QuestCompletionStatus_Mutation_Response>;
  /** update single row of the table: "QuestCompletionStatus" */
  readonly update_QuestCompletionStatus_by_pk?: Maybe<QuestCompletionStatus>;
  /** update data of the table: "QuestRepetition" */
  readonly update_QuestRepetition?: Maybe<QuestRepetition_Mutation_Response>;
  /** update single row of the table: "QuestRepetition" */
  readonly update_QuestRepetition_by_pk?: Maybe<QuestRepetition>;
  /** update data of the table: "QuestStatus" */
  readonly update_QuestStatus?: Maybe<QuestStatus_Mutation_Response>;
  /** update single row of the table: "QuestStatus" */
  readonly update_QuestStatus_by_pk?: Maybe<QuestStatus>;
  /** update data of the table: "SkillCategory" */
  readonly update_SkillCategory?: Maybe<SkillCategory_Mutation_Response>;
  /** update single row of the table: "SkillCategory" */
  readonly update_SkillCategory_by_pk?: Maybe<SkillCategory>;
  /** update data of the table: "guild" */
  readonly update_guild?: Maybe<Guild_Mutation_Response>;
  /** update data of the table: "guild_account" */
  readonly update_guild_account?: Maybe<Guild_Account_Mutation_Response>;
  /** update single row of the table: "guild_account" */
  readonly update_guild_account_by_pk?: Maybe<Guild_Account>;
  /** update single row of the table: "guild" */
  readonly update_guild_by_pk?: Maybe<Guild>;
  /** update data of the table: "guild_player" */
  readonly update_guild_player?: Maybe<Guild_Player_Mutation_Response>;
  /** update single row of the table: "guild_player" */
  readonly update_guild_player_by_pk?: Maybe<Guild_Player>;
  /** update data of the table: "me" */
  readonly update_me?: Maybe<Me_Mutation_Response>;
  /** update data of the table: "player" */
  readonly update_player?: Maybe<Player_Mutation_Response>;
  /** update data of the table: "player_account" */
  readonly update_player_account?: Maybe<Player_Account_Mutation_Response>;
  /** update single row of the table: "player" */
  readonly update_player_by_pk?: Maybe<Player>;
  /** update data of the table: "player_skill" */
  readonly update_player_skill?: Maybe<Player_Skill_Mutation_Response>;
  /** update single row of the table: "player_skill" */
  readonly update_player_skill_by_pk?: Maybe<Player_Skill>;
  /** update data of the table: "player_type" */
  readonly update_player_type?: Maybe<Player_Type_Mutation_Response>;
  /** update single row of the table: "player_type" */
  readonly update_player_type_by_pk?: Maybe<Player_Type>;
  /** update data of the table: "profile_cache" */
  readonly update_profile_cache?: Maybe<Profile_Cache_Mutation_Response>;
  /** update single row of the table: "profile_cache" */
  readonly update_profile_cache_by_pk?: Maybe<Profile_Cache>;
  /** update data of the table: "quest" */
  readonly update_quest?: Maybe<Quest_Mutation_Response>;
  /** update single row of the table: "quest" */
  readonly update_quest_by_pk?: Maybe<Quest>;
  /** update data of the table: "quest_completion" */
  readonly update_quest_completion?: Maybe<Quest_Completion_Mutation_Response>;
  /** update single row of the table: "quest_completion" */
  readonly update_quest_completion_by_pk?: Maybe<Quest_Completion>;
  /** update data of the table: "quest_skill" */
  readonly update_quest_skill?: Maybe<Quest_Skill_Mutation_Response>;
  /** update single row of the table: "quest_skill" */
  readonly update_quest_skill_by_pk?: Maybe<Quest_Skill>;
  /** update data of the table: "skill" */
  readonly update_skill?: Maybe<Skill_Mutation_Response>;
  /** update single row of the table: "skill" */
  readonly update_skill_by_pk?: Maybe<Skill>;
};


/** mutation root */
export type Mutation_RootAuthenticateDiscordGuildArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCreateQuestArgs = {
  quest: CreateQuestInput;
};


/** mutation root */
export type Mutation_RootCreateQuestCompletionArgs = {
  questCompletion: CreateQuestCompletionInput;
};


/** mutation root */
export type Mutation_RootDelete_AccountTypeArgs = {
  where: AccountType_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_AccountType_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ColorAspectArgs = {
  where: ColorAspect_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ColorAspect_By_PkArgs = {
  mask: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_GuildPositionArgs = {
  where: GuildPosition_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GuildPosition_By_PkArgs = {
  position: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_GuildStatusArgs = {
  where: GuildStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GuildStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_GuildTypeArgs = {
  where: GuildType_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GuildType_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_PlayerRankArgs = {
  where: PlayerRank_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PlayerRank_By_PkArgs = {
  rank: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_QuestCompletionStatusArgs = {
  where: QuestCompletionStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_QuestCompletionStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_QuestRepetitionArgs = {
  where: QuestRepetition_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_QuestRepetition_By_PkArgs = {
  repetition: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_QuestStatusArgs = {
  where: QuestStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_QuestStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_SkillCategoryArgs = {
  where: SkillCategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SkillCategory_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_GuildArgs = {
  where: Guild_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Guild_AccountArgs = {
  where: Guild_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Guild_Account_By_PkArgs = {
  guild_id: Scalars['uuid'];
  type: AccountType_Enum;
};


/** mutation root */
export type Mutation_RootDelete_Guild_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Guild_PlayerArgs = {
  where: Guild_Player_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Guild_Player_By_PkArgs = {
  guild_id: Scalars['uuid'];
  player_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MeArgs = {
  where: Me_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PlayerArgs = {
  where: Player_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Player_AccountArgs = {
  where: Player_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Player_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Player_SkillArgs = {
  where: Player_Skill_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Player_Skill_By_PkArgs = {
  player_id: Scalars['uuid'];
  skill_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Player_TypeArgs = {
  where: Player_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Player_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Profile_CacheArgs = {
  where: Profile_Cache_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profile_Cache_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_QuestArgs = {
  where: Quest_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quest_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Quest_CompletionArgs = {
  where: Quest_Completion_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quest_Completion_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Quest_SkillArgs = {
  where: Quest_Skill_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quest_Skill_By_PkArgs = {
  quest_id: Scalars['uuid'];
  skill_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SkillArgs = {
  where: Skill_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Skill_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AccountTypeArgs = {
  objects: ReadonlyArray<AccountType_Insert_Input>;
  on_conflict?: Maybe<AccountType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AccountType_OneArgs = {
  object: AccountType_Insert_Input;
  on_conflict?: Maybe<AccountType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ColorAspectArgs = {
  objects: ReadonlyArray<ColorAspect_Insert_Input>;
  on_conflict?: Maybe<ColorAspect_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ColorAspect_OneArgs = {
  object: ColorAspect_Insert_Input;
  on_conflict?: Maybe<ColorAspect_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuildPositionArgs = {
  objects: ReadonlyArray<GuildPosition_Insert_Input>;
  on_conflict?: Maybe<GuildPosition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuildPosition_OneArgs = {
  object: GuildPosition_Insert_Input;
  on_conflict?: Maybe<GuildPosition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuildStatusArgs = {
  objects: ReadonlyArray<GuildStatus_Insert_Input>;
  on_conflict?: Maybe<GuildStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuildStatus_OneArgs = {
  object: GuildStatus_Insert_Input;
  on_conflict?: Maybe<GuildStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuildTypeArgs = {
  objects: ReadonlyArray<GuildType_Insert_Input>;
  on_conflict?: Maybe<GuildType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuildType_OneArgs = {
  object: GuildType_Insert_Input;
  on_conflict?: Maybe<GuildType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlayerRankArgs = {
  objects: ReadonlyArray<PlayerRank_Insert_Input>;
  on_conflict?: Maybe<PlayerRank_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlayerRank_OneArgs = {
  object: PlayerRank_Insert_Input;
  on_conflict?: Maybe<PlayerRank_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestCompletionStatusArgs = {
  objects: ReadonlyArray<QuestCompletionStatus_Insert_Input>;
  on_conflict?: Maybe<QuestCompletionStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestCompletionStatus_OneArgs = {
  object: QuestCompletionStatus_Insert_Input;
  on_conflict?: Maybe<QuestCompletionStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestRepetitionArgs = {
  objects: ReadonlyArray<QuestRepetition_Insert_Input>;
  on_conflict?: Maybe<QuestRepetition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestRepetition_OneArgs = {
  object: QuestRepetition_Insert_Input;
  on_conflict?: Maybe<QuestRepetition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestStatusArgs = {
  objects: ReadonlyArray<QuestStatus_Insert_Input>;
  on_conflict?: Maybe<QuestStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestStatus_OneArgs = {
  object: QuestStatus_Insert_Input;
  on_conflict?: Maybe<QuestStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SkillCategoryArgs = {
  objects: ReadonlyArray<SkillCategory_Insert_Input>;
  on_conflict?: Maybe<SkillCategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SkillCategory_OneArgs = {
  object: SkillCategory_Insert_Input;
  on_conflict?: Maybe<SkillCategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuildArgs = {
  objects: ReadonlyArray<Guild_Insert_Input>;
  on_conflict?: Maybe<Guild_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Guild_AccountArgs = {
  objects: ReadonlyArray<Guild_Account_Insert_Input>;
  on_conflict?: Maybe<Guild_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Guild_Account_OneArgs = {
  object: Guild_Account_Insert_Input;
  on_conflict?: Maybe<Guild_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Guild_OneArgs = {
  object: Guild_Insert_Input;
  on_conflict?: Maybe<Guild_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Guild_PlayerArgs = {
  objects: ReadonlyArray<Guild_Player_Insert_Input>;
  on_conflict?: Maybe<Guild_Player_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Guild_Player_OneArgs = {
  object: Guild_Player_Insert_Input;
  on_conflict?: Maybe<Guild_Player_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MeArgs = {
  objects: ReadonlyArray<Me_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Me_OneArgs = {
  object: Me_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_PlayerArgs = {
  objects: ReadonlyArray<Player_Insert_Input>;
  on_conflict?: Maybe<Player_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_AccountArgs = {
  objects: ReadonlyArray<Player_Account_Insert_Input>;
  on_conflict?: Maybe<Player_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_Account_OneArgs = {
  object: Player_Account_Insert_Input;
  on_conflict?: Maybe<Player_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_OneArgs = {
  object: Player_Insert_Input;
  on_conflict?: Maybe<Player_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_SkillArgs = {
  objects: ReadonlyArray<Player_Skill_Insert_Input>;
  on_conflict?: Maybe<Player_Skill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_Skill_OneArgs = {
  object: Player_Skill_Insert_Input;
  on_conflict?: Maybe<Player_Skill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_TypeArgs = {
  objects: ReadonlyArray<Player_Type_Insert_Input>;
  on_conflict?: Maybe<Player_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_Type_OneArgs = {
  object: Player_Type_Insert_Input;
  on_conflict?: Maybe<Player_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profile_CacheArgs = {
  objects: ReadonlyArray<Profile_Cache_Insert_Input>;
  on_conflict?: Maybe<Profile_Cache_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profile_Cache_OneArgs = {
  object: Profile_Cache_Insert_Input;
  on_conflict?: Maybe<Profile_Cache_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestArgs = {
  objects: ReadonlyArray<Quest_Insert_Input>;
  on_conflict?: Maybe<Quest_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_CompletionArgs = {
  objects: ReadonlyArray<Quest_Completion_Insert_Input>;
  on_conflict?: Maybe<Quest_Completion_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_Completion_OneArgs = {
  object: Quest_Completion_Insert_Input;
  on_conflict?: Maybe<Quest_Completion_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_OneArgs = {
  object: Quest_Insert_Input;
  on_conflict?: Maybe<Quest_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_SkillArgs = {
  objects: ReadonlyArray<Quest_Skill_Insert_Input>;
  on_conflict?: Maybe<Quest_Skill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_Skill_OneArgs = {
  object: Quest_Skill_Insert_Input;
  on_conflict?: Maybe<Quest_Skill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SkillArgs = {
  objects: ReadonlyArray<Skill_Insert_Input>;
  on_conflict?: Maybe<Skill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Skill_OneArgs = {
  object: Skill_Insert_Input;
  on_conflict?: Maybe<Skill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateIdxProfileArgs = {
  playerId?: Maybe<Scalars['uuid']>;
};


/** mutation root */
export type Mutation_RootUpdateQuestCompletionArgs = {
  updateData: UpdateQuestCompletionInput;
};


/** mutation root */
export type Mutation_RootUpdate_AccountTypeArgs = {
  _set?: Maybe<AccountType_Set_Input>;
  where: AccountType_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AccountType_By_PkArgs = {
  _set?: Maybe<AccountType_Set_Input>;
  pk_columns: AccountType_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ColorAspectArgs = {
  _inc?: Maybe<ColorAspect_Inc_Input>;
  _set?: Maybe<ColorAspect_Set_Input>;
  where: ColorAspect_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ColorAspect_By_PkArgs = {
  _inc?: Maybe<ColorAspect_Inc_Input>;
  _set?: Maybe<ColorAspect_Set_Input>;
  pk_columns: ColorAspect_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GuildPositionArgs = {
  _set?: Maybe<GuildPosition_Set_Input>;
  where: GuildPosition_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GuildPosition_By_PkArgs = {
  _set?: Maybe<GuildPosition_Set_Input>;
  pk_columns: GuildPosition_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GuildStatusArgs = {
  _set?: Maybe<GuildStatus_Set_Input>;
  where: GuildStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GuildStatus_By_PkArgs = {
  _set?: Maybe<GuildStatus_Set_Input>;
  pk_columns: GuildStatus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GuildTypeArgs = {
  _set?: Maybe<GuildType_Set_Input>;
  where: GuildType_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GuildType_By_PkArgs = {
  _set?: Maybe<GuildType_Set_Input>;
  pk_columns: GuildType_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PlayerRankArgs = {
  _set?: Maybe<PlayerRank_Set_Input>;
  where: PlayerRank_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_PlayerRank_By_PkArgs = {
  _set?: Maybe<PlayerRank_Set_Input>;
  pk_columns: PlayerRank_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuestCompletionStatusArgs = {
  _set?: Maybe<QuestCompletionStatus_Set_Input>;
  where: QuestCompletionStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_QuestCompletionStatus_By_PkArgs = {
  _set?: Maybe<QuestCompletionStatus_Set_Input>;
  pk_columns: QuestCompletionStatus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuestRepetitionArgs = {
  _set?: Maybe<QuestRepetition_Set_Input>;
  where: QuestRepetition_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_QuestRepetition_By_PkArgs = {
  _set?: Maybe<QuestRepetition_Set_Input>;
  pk_columns: QuestRepetition_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuestStatusArgs = {
  _set?: Maybe<QuestStatus_Set_Input>;
  where: QuestStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_QuestStatus_By_PkArgs = {
  _set?: Maybe<QuestStatus_Set_Input>;
  pk_columns: QuestStatus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SkillCategoryArgs = {
  _set?: Maybe<SkillCategory_Set_Input>;
  where: SkillCategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_SkillCategory_By_PkArgs = {
  _set?: Maybe<SkillCategory_Set_Input>;
  pk_columns: SkillCategory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GuildArgs = {
  _append?: Maybe<Guild_Append_Input>;
  _delete_at_path?: Maybe<Guild_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Guild_Delete_Elem_Input>;
  _delete_key?: Maybe<Guild_Delete_Key_Input>;
  _prepend?: Maybe<Guild_Prepend_Input>;
  _set?: Maybe<Guild_Set_Input>;
  where: Guild_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Guild_AccountArgs = {
  _set?: Maybe<Guild_Account_Set_Input>;
  where: Guild_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Guild_Account_By_PkArgs = {
  _set?: Maybe<Guild_Account_Set_Input>;
  pk_columns: Guild_Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Guild_By_PkArgs = {
  _append?: Maybe<Guild_Append_Input>;
  _delete_at_path?: Maybe<Guild_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Guild_Delete_Elem_Input>;
  _delete_key?: Maybe<Guild_Delete_Key_Input>;
  _prepend?: Maybe<Guild_Prepend_Input>;
  _set?: Maybe<Guild_Set_Input>;
  pk_columns: Guild_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Guild_PlayerArgs = {
  _set?: Maybe<Guild_Player_Set_Input>;
  where: Guild_Player_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Guild_Player_By_PkArgs = {
  _set?: Maybe<Guild_Player_Set_Input>;
  pk_columns: Guild_Player_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MeArgs = {
  _set?: Maybe<Me_Set_Input>;
  where: Me_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_PlayerArgs = {
  _inc?: Maybe<Player_Inc_Input>;
  _set?: Maybe<Player_Set_Input>;
  where: Player_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Player_AccountArgs = {
  _set?: Maybe<Player_Account_Set_Input>;
  where: Player_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Player_By_PkArgs = {
  _inc?: Maybe<Player_Inc_Input>;
  _set?: Maybe<Player_Set_Input>;
  pk_columns: Player_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Player_SkillArgs = {
  _set?: Maybe<Player_Skill_Set_Input>;
  where: Player_Skill_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Player_Skill_By_PkArgs = {
  _set?: Maybe<Player_Skill_Set_Input>;
  pk_columns: Player_Skill_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Player_TypeArgs = {
  _inc?: Maybe<Player_Type_Inc_Input>;
  _set?: Maybe<Player_Type_Set_Input>;
  where: Player_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Player_Type_By_PkArgs = {
  _inc?: Maybe<Player_Type_Inc_Input>;
  _set?: Maybe<Player_Type_Set_Input>;
  pk_columns: Player_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Profile_CacheArgs = {
  _set?: Maybe<Profile_Cache_Set_Input>;
  where: Profile_Cache_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profile_Cache_By_PkArgs = {
  _set?: Maybe<Profile_Cache_Set_Input>;
  pk_columns: Profile_Cache_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuestArgs = {
  _inc?: Maybe<Quest_Inc_Input>;
  _set?: Maybe<Quest_Set_Input>;
  where: Quest_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_By_PkArgs = {
  _inc?: Maybe<Quest_Inc_Input>;
  _set?: Maybe<Quest_Set_Input>;
  pk_columns: Quest_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_CompletionArgs = {
  _set?: Maybe<Quest_Completion_Set_Input>;
  where: Quest_Completion_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_Completion_By_PkArgs = {
  _set?: Maybe<Quest_Completion_Set_Input>;
  pk_columns: Quest_Completion_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_SkillArgs = {
  _set?: Maybe<Quest_Skill_Set_Input>;
  where: Quest_Skill_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quest_Skill_By_PkArgs = {
  _set?: Maybe<Quest_Skill_Set_Input>;
  pk_columns: Quest_Skill_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SkillArgs = {
  _set?: Maybe<Skill_Set_Input>;
  where: Skill_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Skill_By_PkArgs = {
  _set?: Maybe<Skill_Set_Input>;
  pk_columns: Skill_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars['numeric']>;
  readonly _gt?: Maybe<Scalars['numeric']>;
  readonly _gte?: Maybe<Scalars['numeric']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['numeric']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['numeric']>;
  readonly _lte?: Maybe<Scalars['numeric']>;
  readonly _neq?: Maybe<Scalars['numeric']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "player" */
export type Player = {
  readonly __typename?: 'player';
  /** An array relationship */
  readonly Accounts: ReadonlyArray<Player_Account>;
  /** An aggregated array relationship */
  readonly Accounts_aggregate: Player_Account_Aggregate;
  /** An object relationship */
  readonly ColorAspect?: Maybe<ColorAspect>;
  /** An array relationship */
  readonly Player_Skills: ReadonlyArray<Player_Skill>;
  /** An aggregated array relationship */
  readonly Player_Skills_aggregate: Player_Skill_Aggregate;
  readonly availability_hours?: Maybe<Scalars['Int']>;
  /** Remote relationship field */
  readonly box_profile?: Maybe<BoxProfile>;
  /** Remote relationship field */
  readonly brightid_status?: Maybe<BrightIdStatus>;
  readonly color_mask?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  /** Remote relationship field */
  readonly daohausMemberships: ReadonlyArray<Member>;
  readonly discord_id?: Maybe<Scalars['String']>;
  readonly ethereum_address: Scalars['String'];
  /** An array relationship */
  readonly guilds: ReadonlyArray<Guild_Player>;
  /** An aggregated array relationship */
  readonly guilds_aggregate: Guild_Player_Aggregate;
  readonly id: Scalars['uuid'];
  /** An object relationship */
  readonly playerType?: Maybe<Player_Type>;
  readonly player_type_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  readonly profile_cache?: Maybe<Profile_Cache>;
  /** An array relationship */
  readonly quest_completions: ReadonlyArray<Quest_Completion>;
  /** An aggregated array relationship */
  readonly quest_completions_aggregate: Quest_Completion_Aggregate;
  /** An array relationship */
  readonly quests: ReadonlyArray<Quest>;
  /** An aggregated array relationship */
  readonly quests_aggregate: Quest_Aggregate;
  readonly rank?: Maybe<PlayerRank_Enum>;
  readonly role?: Maybe<Scalars['String']>;
  readonly season_xp: Scalars['numeric'];
  readonly timezone?: Maybe<Scalars['String']>;
  /** Remote relationship field */
  readonly token_balances?: Maybe<TokenBalances>;
  readonly total_xp?: Maybe<Scalars['numeric']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
  readonly username: Scalars['String'];
};


/** columns and relationships of "player" */
export type PlayerAccountsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Account_Order_By>>;
  where?: Maybe<Player_Account_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerAccounts_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Account_Order_By>>;
  where?: Maybe<Player_Account_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerPlayer_SkillsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerPlayer_Skills_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerGuildsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerGuilds_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerQuest_CompletionsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerQuest_Completions_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerQuestsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerQuests_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};

/** columns and relationships of "player_account" */
export type Player_Account = {
  readonly __typename?: 'player_account';
  /** An object relationship */
  readonly Player: Player;
  readonly identifier: Scalars['String'];
  readonly player_id: Scalars['uuid'];
  readonly type: AccountType_Enum;
};

/** aggregated selection of "player_account" */
export type Player_Account_Aggregate = {
  readonly __typename?: 'player_account_aggregate';
  readonly aggregate?: Maybe<Player_Account_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Player_Account>;
};

/** aggregate fields of "player_account" */
export type Player_Account_Aggregate_Fields = {
  readonly __typename?: 'player_account_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Player_Account_Max_Fields>;
  readonly min?: Maybe<Player_Account_Min_Fields>;
};


/** aggregate fields of "player_account" */
export type Player_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Player_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player_account" */
export type Player_Account_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Player_Account_Max_Order_By>;
  readonly min?: Maybe<Player_Account_Min_Order_By>;
};

/** input type for inserting array relation for remote table "player_account" */
export type Player_Account_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Player_Account_Insert_Input>;
  readonly on_conflict?: Maybe<Player_Account_On_Conflict>;
};

/** Boolean expression to filter rows from the table "player_account". All fields are combined with a logical 'AND'. */
export type Player_Account_Bool_Exp = {
  readonly Player?: Maybe<Player_Bool_Exp>;
  readonly _and?: Maybe<ReadonlyArray<Maybe<Player_Account_Bool_Exp>>>;
  readonly _not?: Maybe<Player_Account_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Player_Account_Bool_Exp>>>;
  readonly identifier?: Maybe<String_Comparison_Exp>;
  readonly player_id?: Maybe<Uuid_Comparison_Exp>;
  readonly type?: Maybe<AccountType_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "player_account" */
export enum Player_Account_Constraint {
  /** unique or primary key constraint */
  AccountIdentifierTypeKey = 'Account_identifier_type_key'
}

/** input type for inserting data into table "player_account" */
export type Player_Account_Insert_Input = {
  readonly Player?: Maybe<Player_Obj_Rel_Insert_Input>;
  readonly identifier?: Maybe<Scalars['String']>;
  readonly player_id?: Maybe<Scalars['uuid']>;
  readonly type?: Maybe<AccountType_Enum>;
};

/** aggregate max on columns */
export type Player_Account_Max_Fields = {
  readonly __typename?: 'player_account_max_fields';
  readonly identifier?: Maybe<Scalars['String']>;
  readonly player_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "player_account" */
export type Player_Account_Max_Order_By = {
  readonly identifier?: Maybe<Order_By>;
  readonly player_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Account_Min_Fields = {
  readonly __typename?: 'player_account_min_fields';
  readonly identifier?: Maybe<Scalars['String']>;
  readonly player_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "player_account" */
export type Player_Account_Min_Order_By = {
  readonly identifier?: Maybe<Order_By>;
  readonly player_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "player_account" */
export type Player_Account_Mutation_Response = {
  readonly __typename?: 'player_account_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Player_Account>;
};

/** input type for inserting object relation for remote table "player_account" */
export type Player_Account_Obj_Rel_Insert_Input = {
  readonly data: Player_Account_Insert_Input;
  readonly on_conflict?: Maybe<Player_Account_On_Conflict>;
};

/** on conflict condition type for table "player_account" */
export type Player_Account_On_Conflict = {
  readonly constraint: Player_Account_Constraint;
  readonly update_columns: ReadonlyArray<Player_Account_Update_Column>;
  readonly where?: Maybe<Player_Account_Bool_Exp>;
};

/** ordering options when selecting data from "player_account" */
export type Player_Account_Order_By = {
  readonly Player?: Maybe<Player_Order_By>;
  readonly identifier?: Maybe<Order_By>;
  readonly player_id?: Maybe<Order_By>;
  readonly type?: Maybe<Order_By>;
};

/** select columns of table "player_account" */
export enum Player_Account_Select_Column {
  /** column name */
  Identifier = 'identifier',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "player_account" */
export type Player_Account_Set_Input = {
  readonly identifier?: Maybe<Scalars['String']>;
  readonly player_id?: Maybe<Scalars['uuid']>;
  readonly type?: Maybe<AccountType_Enum>;
};

/** update columns of table "player_account" */
export enum Player_Account_Update_Column {
  /** column name */
  Identifier = 'identifier',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  Type = 'type'
}

/** aggregated selection of "player" */
export type Player_Aggregate = {
  readonly __typename?: 'player_aggregate';
  readonly aggregate?: Maybe<Player_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Player>;
};

/** aggregate fields of "player" */
export type Player_Aggregate_Fields = {
  readonly __typename?: 'player_aggregate_fields';
  readonly avg?: Maybe<Player_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Player_Max_Fields>;
  readonly min?: Maybe<Player_Min_Fields>;
  readonly stddev?: Maybe<Player_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Player_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Player_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Player_Sum_Fields>;
  readonly var_pop?: Maybe<Player_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Player_Var_Samp_Fields>;
  readonly variance?: Maybe<Player_Variance_Fields>;
};


/** aggregate fields of "player" */
export type Player_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Player_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player" */
export type Player_Aggregate_Order_By = {
  readonly avg?: Maybe<Player_Avg_Order_By>;
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Player_Max_Order_By>;
  readonly min?: Maybe<Player_Min_Order_By>;
  readonly stddev?: Maybe<Player_Stddev_Order_By>;
  readonly stddev_pop?: Maybe<Player_Stddev_Pop_Order_By>;
  readonly stddev_samp?: Maybe<Player_Stddev_Samp_Order_By>;
  readonly sum?: Maybe<Player_Sum_Order_By>;
  readonly var_pop?: Maybe<Player_Var_Pop_Order_By>;
  readonly var_samp?: Maybe<Player_Var_Samp_Order_By>;
  readonly variance?: Maybe<Player_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "player" */
export type Player_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Player_Insert_Input>;
  readonly on_conflict?: Maybe<Player_On_Conflict>;
};

/** aggregate avg on columns */
export type Player_Avg_Fields = {
  readonly __typename?: 'player_avg_fields';
  readonly availability_hours?: Maybe<Scalars['Float']>;
  readonly color_mask?: Maybe<Scalars['Float']>;
  readonly player_type_id?: Maybe<Scalars['Float']>;
  readonly season_xp?: Maybe<Scalars['Float']>;
  readonly total_xp?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "player" */
export type Player_Avg_Order_By = {
  readonly availability_hours?: Maybe<Order_By>;
  readonly color_mask?: Maybe<Order_By>;
  readonly player_type_id?: Maybe<Order_By>;
  readonly season_xp?: Maybe<Order_By>;
  readonly total_xp?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "player". All fields are combined with a logical 'AND'. */
export type Player_Bool_Exp = {
  readonly Accounts?: Maybe<Player_Account_Bool_Exp>;
  readonly ColorAspect?: Maybe<ColorAspect_Bool_Exp>;
  readonly Player_Skills?: Maybe<Player_Skill_Bool_Exp>;
  readonly _and?: Maybe<ReadonlyArray<Maybe<Player_Bool_Exp>>>;
  readonly _not?: Maybe<Player_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Player_Bool_Exp>>>;
  readonly availability_hours?: Maybe<Int_Comparison_Exp>;
  readonly color_mask?: Maybe<Int_Comparison_Exp>;
  readonly created_at?: Maybe<Timestamptz_Comparison_Exp>;
  readonly discord_id?: Maybe<String_Comparison_Exp>;
  readonly ethereum_address?: Maybe<String_Comparison_Exp>;
  readonly guilds?: Maybe<Guild_Player_Bool_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly playerType?: Maybe<Player_Type_Bool_Exp>;
  readonly player_type_id?: Maybe<Int_Comparison_Exp>;
  readonly profile_cache?: Maybe<Profile_Cache_Bool_Exp>;
  readonly quest_completions?: Maybe<Quest_Completion_Bool_Exp>;
  readonly quests?: Maybe<Quest_Bool_Exp>;
  readonly rank?: Maybe<PlayerRank_Enum_Comparison_Exp>;
  readonly role?: Maybe<String_Comparison_Exp>;
  readonly season_xp?: Maybe<Numeric_Comparison_Exp>;
  readonly timezone?: Maybe<String_Comparison_Exp>;
  readonly total_xp?: Maybe<Numeric_Comparison_Exp>;
  readonly updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  readonly username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "player" */
export enum Player_Constraint {
  /** unique or primary key constraint */
  PlayerEthereumAddressUniqueKey = 'Player_ethereum_address_unique_key',
  /** unique or primary key constraint */
  PlayerPkey = 'Player_pkey',
  /** unique or primary key constraint */
  PlayerUsernameUniqueKey = 'Player_username_unique_key',
  /** unique or primary key constraint */
  PlayerDiscordIdKey = 'player_discord_id_key'
}

/** input type for incrementing integer column in table "player" */
export type Player_Inc_Input = {
  readonly availability_hours?: Maybe<Scalars['Int']>;
  readonly color_mask?: Maybe<Scalars['Int']>;
  readonly player_type_id?: Maybe<Scalars['Int']>;
  readonly season_xp?: Maybe<Scalars['numeric']>;
  readonly total_xp?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "player" */
export type Player_Insert_Input = {
  readonly Accounts?: Maybe<Player_Account_Arr_Rel_Insert_Input>;
  readonly ColorAspect?: Maybe<ColorAspect_Obj_Rel_Insert_Input>;
  readonly Player_Skills?: Maybe<Player_Skill_Arr_Rel_Insert_Input>;
  readonly availability_hours?: Maybe<Scalars['Int']>;
  readonly color_mask?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly discord_id?: Maybe<Scalars['String']>;
  readonly ethereum_address?: Maybe<Scalars['String']>;
  readonly guilds?: Maybe<Guild_Player_Arr_Rel_Insert_Input>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly playerType?: Maybe<Player_Type_Obj_Rel_Insert_Input>;
  readonly player_type_id?: Maybe<Scalars['Int']>;
  readonly profile_cache?: Maybe<Profile_Cache_Obj_Rel_Insert_Input>;
  readonly quest_completions?: Maybe<Quest_Completion_Arr_Rel_Insert_Input>;
  readonly quests?: Maybe<Quest_Arr_Rel_Insert_Input>;
  readonly rank?: Maybe<PlayerRank_Enum>;
  readonly role?: Maybe<Scalars['String']>;
  readonly season_xp?: Maybe<Scalars['numeric']>;
  readonly timezone?: Maybe<Scalars['String']>;
  readonly total_xp?: Maybe<Scalars['numeric']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
  readonly username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Player_Max_Fields = {
  readonly __typename?: 'player_max_fields';
  readonly availability_hours?: Maybe<Scalars['Int']>;
  readonly color_mask?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly discord_id?: Maybe<Scalars['String']>;
  readonly ethereum_address?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly player_type_id?: Maybe<Scalars['Int']>;
  readonly role?: Maybe<Scalars['String']>;
  readonly season_xp?: Maybe<Scalars['numeric']>;
  readonly timezone?: Maybe<Scalars['String']>;
  readonly total_xp?: Maybe<Scalars['numeric']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
  readonly username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "player" */
export type Player_Max_Order_By = {
  readonly availability_hours?: Maybe<Order_By>;
  readonly color_mask?: Maybe<Order_By>;
  readonly created_at?: Maybe<Order_By>;
  readonly discord_id?: Maybe<Order_By>;
  readonly ethereum_address?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly player_type_id?: Maybe<Order_By>;
  readonly role?: Maybe<Order_By>;
  readonly season_xp?: Maybe<Order_By>;
  readonly timezone?: Maybe<Order_By>;
  readonly total_xp?: Maybe<Order_By>;
  readonly updated_at?: Maybe<Order_By>;
  readonly username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Min_Fields = {
  readonly __typename?: 'player_min_fields';
  readonly availability_hours?: Maybe<Scalars['Int']>;
  readonly color_mask?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly discord_id?: Maybe<Scalars['String']>;
  readonly ethereum_address?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly player_type_id?: Maybe<Scalars['Int']>;
  readonly role?: Maybe<Scalars['String']>;
  readonly season_xp?: Maybe<Scalars['numeric']>;
  readonly timezone?: Maybe<Scalars['String']>;
  readonly total_xp?: Maybe<Scalars['numeric']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
  readonly username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "player" */
export type Player_Min_Order_By = {
  readonly availability_hours?: Maybe<Order_By>;
  readonly color_mask?: Maybe<Order_By>;
  readonly created_at?: Maybe<Order_By>;
  readonly discord_id?: Maybe<Order_By>;
  readonly ethereum_address?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly player_type_id?: Maybe<Order_By>;
  readonly role?: Maybe<Order_By>;
  readonly season_xp?: Maybe<Order_By>;
  readonly timezone?: Maybe<Order_By>;
  readonly total_xp?: Maybe<Order_By>;
  readonly updated_at?: Maybe<Order_By>;
  readonly username?: Maybe<Order_By>;
};

/** response of any mutation on the table "player" */
export type Player_Mutation_Response = {
  readonly __typename?: 'player_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Player>;
};

/** input type for inserting object relation for remote table "player" */
export type Player_Obj_Rel_Insert_Input = {
  readonly data: Player_Insert_Input;
  readonly on_conflict?: Maybe<Player_On_Conflict>;
};

/** on conflict condition type for table "player" */
export type Player_On_Conflict = {
  readonly constraint: Player_Constraint;
  readonly update_columns: ReadonlyArray<Player_Update_Column>;
  readonly where?: Maybe<Player_Bool_Exp>;
};

/** ordering options when selecting data from "player" */
export type Player_Order_By = {
  readonly Accounts_aggregate?: Maybe<Player_Account_Aggregate_Order_By>;
  readonly ColorAspect?: Maybe<ColorAspect_Order_By>;
  readonly Player_Skills_aggregate?: Maybe<Player_Skill_Aggregate_Order_By>;
  readonly availability_hours?: Maybe<Order_By>;
  readonly color_mask?: Maybe<Order_By>;
  readonly created_at?: Maybe<Order_By>;
  readonly discord_id?: Maybe<Order_By>;
  readonly ethereum_address?: Maybe<Order_By>;
  readonly guilds_aggregate?: Maybe<Guild_Player_Aggregate_Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly playerType?: Maybe<Player_Type_Order_By>;
  readonly player_type_id?: Maybe<Order_By>;
  readonly profile_cache?: Maybe<Profile_Cache_Order_By>;
  readonly quest_completions_aggregate?: Maybe<Quest_Completion_Aggregate_Order_By>;
  readonly quests_aggregate?: Maybe<Quest_Aggregate_Order_By>;
  readonly rank?: Maybe<Order_By>;
  readonly role?: Maybe<Order_By>;
  readonly season_xp?: Maybe<Order_By>;
  readonly timezone?: Maybe<Order_By>;
  readonly total_xp?: Maybe<Order_By>;
  readonly updated_at?: Maybe<Order_By>;
  readonly username?: Maybe<Order_By>;
};

/** primary key columns input for table: "player" */
export type Player_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "player" */
export enum Player_Select_Column {
  /** column name */
  AvailabilityHours = 'availability_hours',
  /** column name */
  ColorMask = 'color_mask',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscordId = 'discord_id',
  /** column name */
  EthereumAddress = 'ethereum_address',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerTypeId = 'player_type_id',
  /** column name */
  Rank = 'rank',
  /** column name */
  Role = 'role',
  /** column name */
  SeasonXp = 'season_xp',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  TotalXp = 'total_xp',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "player" */
export type Player_Set_Input = {
  readonly availability_hours?: Maybe<Scalars['Int']>;
  readonly color_mask?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly discord_id?: Maybe<Scalars['String']>;
  readonly ethereum_address?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly player_type_id?: Maybe<Scalars['Int']>;
  readonly rank?: Maybe<PlayerRank_Enum>;
  readonly role?: Maybe<Scalars['String']>;
  readonly season_xp?: Maybe<Scalars['numeric']>;
  readonly timezone?: Maybe<Scalars['String']>;
  readonly total_xp?: Maybe<Scalars['numeric']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
  readonly username?: Maybe<Scalars['String']>;
};

/** columns and relationships of "player_skill" */
export type Player_Skill = {
  readonly __typename?: 'player_skill';
  /** An object relationship */
  readonly Skill: Skill;
  readonly player_id: Scalars['uuid'];
  readonly skill_id: Scalars['uuid'];
};

/** aggregated selection of "player_skill" */
export type Player_Skill_Aggregate = {
  readonly __typename?: 'player_skill_aggregate';
  readonly aggregate?: Maybe<Player_Skill_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Player_Skill>;
};

/** aggregate fields of "player_skill" */
export type Player_Skill_Aggregate_Fields = {
  readonly __typename?: 'player_skill_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Player_Skill_Max_Fields>;
  readonly min?: Maybe<Player_Skill_Min_Fields>;
};


/** aggregate fields of "player_skill" */
export type Player_Skill_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Player_Skill_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player_skill" */
export type Player_Skill_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Player_Skill_Max_Order_By>;
  readonly min?: Maybe<Player_Skill_Min_Order_By>;
};

/** input type for inserting array relation for remote table "player_skill" */
export type Player_Skill_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Player_Skill_Insert_Input>;
  readonly on_conflict?: Maybe<Player_Skill_On_Conflict>;
};

/** Boolean expression to filter rows from the table "player_skill". All fields are combined with a logical 'AND'. */
export type Player_Skill_Bool_Exp = {
  readonly Skill?: Maybe<Skill_Bool_Exp>;
  readonly _and?: Maybe<ReadonlyArray<Maybe<Player_Skill_Bool_Exp>>>;
  readonly _not?: Maybe<Player_Skill_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Player_Skill_Bool_Exp>>>;
  readonly player_id?: Maybe<Uuid_Comparison_Exp>;
  readonly skill_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "player_skill" */
export enum Player_Skill_Constraint {
  /** unique or primary key constraint */
  PlayerSkillUniqueKey = 'Player_Skill_unique_key'
}

/** input type for inserting data into table "player_skill" */
export type Player_Skill_Insert_Input = {
  readonly Skill?: Maybe<Skill_Obj_Rel_Insert_Input>;
  readonly player_id?: Maybe<Scalars['uuid']>;
  readonly skill_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Player_Skill_Max_Fields = {
  readonly __typename?: 'player_skill_max_fields';
  readonly player_id?: Maybe<Scalars['uuid']>;
  readonly skill_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "player_skill" */
export type Player_Skill_Max_Order_By = {
  readonly player_id?: Maybe<Order_By>;
  readonly skill_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Skill_Min_Fields = {
  readonly __typename?: 'player_skill_min_fields';
  readonly player_id?: Maybe<Scalars['uuid']>;
  readonly skill_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "player_skill" */
export type Player_Skill_Min_Order_By = {
  readonly player_id?: Maybe<Order_By>;
  readonly skill_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "player_skill" */
export type Player_Skill_Mutation_Response = {
  readonly __typename?: 'player_skill_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Player_Skill>;
};

/** input type for inserting object relation for remote table "player_skill" */
export type Player_Skill_Obj_Rel_Insert_Input = {
  readonly data: Player_Skill_Insert_Input;
  readonly on_conflict?: Maybe<Player_Skill_On_Conflict>;
};

/** on conflict condition type for table "player_skill" */
export type Player_Skill_On_Conflict = {
  readonly constraint: Player_Skill_Constraint;
  readonly update_columns: ReadonlyArray<Player_Skill_Update_Column>;
  readonly where?: Maybe<Player_Skill_Bool_Exp>;
};

/** ordering options when selecting data from "player_skill" */
export type Player_Skill_Order_By = {
  readonly Skill?: Maybe<Skill_Order_By>;
  readonly player_id?: Maybe<Order_By>;
  readonly skill_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "player_skill" */
export type Player_Skill_Pk_Columns_Input = {
  readonly player_id: Scalars['uuid'];
  readonly skill_id: Scalars['uuid'];
};

/** select columns of table "player_skill" */
export enum Player_Skill_Select_Column {
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  SkillId = 'skill_id'
}

/** input type for updating data in table "player_skill" */
export type Player_Skill_Set_Input = {
  readonly player_id?: Maybe<Scalars['uuid']>;
  readonly skill_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "player_skill" */
export enum Player_Skill_Update_Column {
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  SkillId = 'skill_id'
}

/** aggregate stddev on columns */
export type Player_Stddev_Fields = {
  readonly __typename?: 'player_stddev_fields';
  readonly availability_hours?: Maybe<Scalars['Float']>;
  readonly color_mask?: Maybe<Scalars['Float']>;
  readonly player_type_id?: Maybe<Scalars['Float']>;
  readonly season_xp?: Maybe<Scalars['Float']>;
  readonly total_xp?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "player" */
export type Player_Stddev_Order_By = {
  readonly availability_hours?: Maybe<Order_By>;
  readonly color_mask?: Maybe<Order_By>;
  readonly player_type_id?: Maybe<Order_By>;
  readonly season_xp?: Maybe<Order_By>;
  readonly total_xp?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Player_Stddev_Pop_Fields = {
  readonly __typename?: 'player_stddev_pop_fields';
  readonly availability_hours?: Maybe<Scalars['Float']>;
  readonly color_mask?: Maybe<Scalars['Float']>;
  readonly player_type_id?: Maybe<Scalars['Float']>;
  readonly season_xp?: Maybe<Scalars['Float']>;
  readonly total_xp?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "player" */
export type Player_Stddev_Pop_Order_By = {
  readonly availability_hours?: Maybe<Order_By>;
  readonly color_mask?: Maybe<Order_By>;
  readonly player_type_id?: Maybe<Order_By>;
  readonly season_xp?: Maybe<Order_By>;
  readonly total_xp?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Player_Stddev_Samp_Fields = {
  readonly __typename?: 'player_stddev_samp_fields';
  readonly availability_hours?: Maybe<Scalars['Float']>;
  readonly color_mask?: Maybe<Scalars['Float']>;
  readonly player_type_id?: Maybe<Scalars['Float']>;
  readonly season_xp?: Maybe<Scalars['Float']>;
  readonly total_xp?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "player" */
export type Player_Stddev_Samp_Order_By = {
  readonly availability_hours?: Maybe<Order_By>;
  readonly color_mask?: Maybe<Order_By>;
  readonly player_type_id?: Maybe<Order_By>;
  readonly season_xp?: Maybe<Order_By>;
  readonly total_xp?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Player_Sum_Fields = {
  readonly __typename?: 'player_sum_fields';
  readonly availability_hours?: Maybe<Scalars['Int']>;
  readonly color_mask?: Maybe<Scalars['Int']>;
  readonly player_type_id?: Maybe<Scalars['Int']>;
  readonly season_xp?: Maybe<Scalars['numeric']>;
  readonly total_xp?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "player" */
export type Player_Sum_Order_By = {
  readonly availability_hours?: Maybe<Order_By>;
  readonly color_mask?: Maybe<Order_By>;
  readonly player_type_id?: Maybe<Order_By>;
  readonly season_xp?: Maybe<Order_By>;
  readonly total_xp?: Maybe<Order_By>;
};

/** columns and relationships of "player_type" */
export type Player_Type = {
  readonly __typename?: 'player_type';
  readonly description: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly imageUrl?: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
};

/** aggregated selection of "player_type" */
export type Player_Type_Aggregate = {
  readonly __typename?: 'player_type_aggregate';
  readonly aggregate?: Maybe<Player_Type_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Player_Type>;
};

/** aggregate fields of "player_type" */
export type Player_Type_Aggregate_Fields = {
  readonly __typename?: 'player_type_aggregate_fields';
  readonly avg?: Maybe<Player_Type_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Player_Type_Max_Fields>;
  readonly min?: Maybe<Player_Type_Min_Fields>;
  readonly stddev?: Maybe<Player_Type_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Player_Type_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Player_Type_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Player_Type_Sum_Fields>;
  readonly var_pop?: Maybe<Player_Type_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Player_Type_Var_Samp_Fields>;
  readonly variance?: Maybe<Player_Type_Variance_Fields>;
};


/** aggregate fields of "player_type" */
export type Player_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Player_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player_type" */
export type Player_Type_Aggregate_Order_By = {
  readonly avg?: Maybe<Player_Type_Avg_Order_By>;
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Player_Type_Max_Order_By>;
  readonly min?: Maybe<Player_Type_Min_Order_By>;
  readonly stddev?: Maybe<Player_Type_Stddev_Order_By>;
  readonly stddev_pop?: Maybe<Player_Type_Stddev_Pop_Order_By>;
  readonly stddev_samp?: Maybe<Player_Type_Stddev_Samp_Order_By>;
  readonly sum?: Maybe<Player_Type_Sum_Order_By>;
  readonly var_pop?: Maybe<Player_Type_Var_Pop_Order_By>;
  readonly var_samp?: Maybe<Player_Type_Var_Samp_Order_By>;
  readonly variance?: Maybe<Player_Type_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "player_type" */
export type Player_Type_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Player_Type_Insert_Input>;
  readonly on_conflict?: Maybe<Player_Type_On_Conflict>;
};

/** aggregate avg on columns */
export type Player_Type_Avg_Fields = {
  readonly __typename?: 'player_type_avg_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "player_type" */
export type Player_Type_Avg_Order_By = {
  readonly id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "player_type". All fields are combined with a logical 'AND'. */
export type Player_Type_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Player_Type_Bool_Exp>>>;
  readonly _not?: Maybe<Player_Type_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Player_Type_Bool_Exp>>>;
  readonly description?: Maybe<String_Comparison_Exp>;
  readonly id?: Maybe<Int_Comparison_Exp>;
  readonly imageUrl?: Maybe<String_Comparison_Exp>;
  readonly title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "player_type" */
export enum Player_Type_Constraint {
  /** unique or primary key constraint */
  PlayerTypePkey = 'PlayerType_pkey',
  /** unique or primary key constraint */
  PlayerTypeTitleKey = 'PlayerType_title_key'
}

/** input type for incrementing integer column in table "player_type" */
export type Player_Type_Inc_Input = {
  readonly id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "player_type" */
export type Player_Type_Insert_Input = {
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly imageUrl?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Player_Type_Max_Fields = {
  readonly __typename?: 'player_type_max_fields';
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly imageUrl?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "player_type" */
export type Player_Type_Max_Order_By = {
  readonly description?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly imageUrl?: Maybe<Order_By>;
  readonly title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Type_Min_Fields = {
  readonly __typename?: 'player_type_min_fields';
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly imageUrl?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "player_type" */
export type Player_Type_Min_Order_By = {
  readonly description?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly imageUrl?: Maybe<Order_By>;
  readonly title?: Maybe<Order_By>;
};

/** response of any mutation on the table "player_type" */
export type Player_Type_Mutation_Response = {
  readonly __typename?: 'player_type_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Player_Type>;
};

/** input type for inserting object relation for remote table "player_type" */
export type Player_Type_Obj_Rel_Insert_Input = {
  readonly data: Player_Type_Insert_Input;
  readonly on_conflict?: Maybe<Player_Type_On_Conflict>;
};

/** on conflict condition type for table "player_type" */
export type Player_Type_On_Conflict = {
  readonly constraint: Player_Type_Constraint;
  readonly update_columns: ReadonlyArray<Player_Type_Update_Column>;
  readonly where?: Maybe<Player_Type_Bool_Exp>;
};

/** ordering options when selecting data from "player_type" */
export type Player_Type_Order_By = {
  readonly description?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly imageUrl?: Maybe<Order_By>;
  readonly title?: Maybe<Order_By>;
};

/** primary key columns input for table: "player_type" */
export type Player_Type_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "player_type" */
export enum Player_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "player_type" */
export type Player_Type_Set_Input = {
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly imageUrl?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Player_Type_Stddev_Fields = {
  readonly __typename?: 'player_type_stddev_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "player_type" */
export type Player_Type_Stddev_Order_By = {
  readonly id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Player_Type_Stddev_Pop_Fields = {
  readonly __typename?: 'player_type_stddev_pop_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "player_type" */
export type Player_Type_Stddev_Pop_Order_By = {
  readonly id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Player_Type_Stddev_Samp_Fields = {
  readonly __typename?: 'player_type_stddev_samp_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "player_type" */
export type Player_Type_Stddev_Samp_Order_By = {
  readonly id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Player_Type_Sum_Fields = {
  readonly __typename?: 'player_type_sum_fields';
  readonly id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "player_type" */
export type Player_Type_Sum_Order_By = {
  readonly id?: Maybe<Order_By>;
};

/** update columns of table "player_type" */
export enum Player_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Player_Type_Var_Pop_Fields = {
  readonly __typename?: 'player_type_var_pop_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "player_type" */
export type Player_Type_Var_Pop_Order_By = {
  readonly id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Player_Type_Var_Samp_Fields = {
  readonly __typename?: 'player_type_var_samp_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "player_type" */
export type Player_Type_Var_Samp_Order_By = {
  readonly id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Player_Type_Variance_Fields = {
  readonly __typename?: 'player_type_variance_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "player_type" */
export type Player_Type_Variance_Order_By = {
  readonly id?: Maybe<Order_By>;
};

/** update columns of table "player" */
export enum Player_Update_Column {
  /** column name */
  AvailabilityHours = 'availability_hours',
  /** column name */
  ColorMask = 'color_mask',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscordId = 'discord_id',
  /** column name */
  EthereumAddress = 'ethereum_address',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerTypeId = 'player_type_id',
  /** column name */
  Rank = 'rank',
  /** column name */
  Role = 'role',
  /** column name */
  SeasonXp = 'season_xp',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  TotalXp = 'total_xp',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type Player_Var_Pop_Fields = {
  readonly __typename?: 'player_var_pop_fields';
  readonly availability_hours?: Maybe<Scalars['Float']>;
  readonly color_mask?: Maybe<Scalars['Float']>;
  readonly player_type_id?: Maybe<Scalars['Float']>;
  readonly season_xp?: Maybe<Scalars['Float']>;
  readonly total_xp?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "player" */
export type Player_Var_Pop_Order_By = {
  readonly availability_hours?: Maybe<Order_By>;
  readonly color_mask?: Maybe<Order_By>;
  readonly player_type_id?: Maybe<Order_By>;
  readonly season_xp?: Maybe<Order_By>;
  readonly total_xp?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Player_Var_Samp_Fields = {
  readonly __typename?: 'player_var_samp_fields';
  readonly availability_hours?: Maybe<Scalars['Float']>;
  readonly color_mask?: Maybe<Scalars['Float']>;
  readonly player_type_id?: Maybe<Scalars['Float']>;
  readonly season_xp?: Maybe<Scalars['Float']>;
  readonly total_xp?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "player" */
export type Player_Var_Samp_Order_By = {
  readonly availability_hours?: Maybe<Order_By>;
  readonly color_mask?: Maybe<Order_By>;
  readonly player_type_id?: Maybe<Order_By>;
  readonly season_xp?: Maybe<Order_By>;
  readonly total_xp?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Player_Variance_Fields = {
  readonly __typename?: 'player_variance_fields';
  readonly availability_hours?: Maybe<Scalars['Float']>;
  readonly color_mask?: Maybe<Scalars['Float']>;
  readonly player_type_id?: Maybe<Scalars['Float']>;
  readonly season_xp?: Maybe<Scalars['Float']>;
  readonly total_xp?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "player" */
export type Player_Variance_Order_By = {
  readonly availability_hours?: Maybe<Order_By>;
  readonly color_mask?: Maybe<Order_By>;
  readonly player_type_id?: Maybe<Order_By>;
  readonly season_xp?: Maybe<Order_By>;
  readonly total_xp?: Maybe<Order_By>;
};

/** columns and relationships of "PlayerRank" */
export type PlayerRank = {
  readonly __typename?: 'PlayerRank';
  readonly rank: Scalars['String'];
};

/** aggregated selection of "PlayerRank" */
export type PlayerRank_Aggregate = {
  readonly __typename?: 'PlayerRank_aggregate';
  readonly aggregate?: Maybe<PlayerRank_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<PlayerRank>;
};

/** aggregate fields of "PlayerRank" */
export type PlayerRank_Aggregate_Fields = {
  readonly __typename?: 'PlayerRank_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<PlayerRank_Max_Fields>;
  readonly min?: Maybe<PlayerRank_Min_Fields>;
};


/** aggregate fields of "PlayerRank" */
export type PlayerRank_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<PlayerRank_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "PlayerRank" */
export type PlayerRank_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<PlayerRank_Max_Order_By>;
  readonly min?: Maybe<PlayerRank_Min_Order_By>;
};

/** input type for inserting array relation for remote table "PlayerRank" */
export type PlayerRank_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<PlayerRank_Insert_Input>;
  readonly on_conflict?: Maybe<PlayerRank_On_Conflict>;
};

/** Boolean expression to filter rows from the table "PlayerRank". All fields are combined with a logical 'AND'. */
export type PlayerRank_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<PlayerRank_Bool_Exp>>>;
  readonly _not?: Maybe<PlayerRank_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<PlayerRank_Bool_Exp>>>;
  readonly rank?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "PlayerRank" */
export enum PlayerRank_Constraint {
  /** unique or primary key constraint */
  PlayerRankPkey = 'Player_Rank_pkey'
}

export enum PlayerRank_Enum {
  Bronze = 'BRONZE',
  Diamond = 'DIAMOND',
  Gold = 'GOLD',
  Platinum = 'PLATINUM',
  Silver = 'SILVER'
}

/** expression to compare columns of type PlayerRank_enum. All fields are combined with logical 'AND'. */
export type PlayerRank_Enum_Comparison_Exp = {
  readonly _eq?: Maybe<PlayerRank_Enum>;
  readonly _in?: Maybe<ReadonlyArray<PlayerRank_Enum>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _neq?: Maybe<PlayerRank_Enum>;
  readonly _nin?: Maybe<ReadonlyArray<PlayerRank_Enum>>;
};

/** input type for inserting data into table "PlayerRank" */
export type PlayerRank_Insert_Input = {
  readonly rank?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PlayerRank_Max_Fields = {
  readonly __typename?: 'PlayerRank_max_fields';
  readonly rank?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "PlayerRank" */
export type PlayerRank_Max_Order_By = {
  readonly rank?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type PlayerRank_Min_Fields = {
  readonly __typename?: 'PlayerRank_min_fields';
  readonly rank?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "PlayerRank" */
export type PlayerRank_Min_Order_By = {
  readonly rank?: Maybe<Order_By>;
};

/** response of any mutation on the table "PlayerRank" */
export type PlayerRank_Mutation_Response = {
  readonly __typename?: 'PlayerRank_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<PlayerRank>;
};

/** input type for inserting object relation for remote table "PlayerRank" */
export type PlayerRank_Obj_Rel_Insert_Input = {
  readonly data: PlayerRank_Insert_Input;
  readonly on_conflict?: Maybe<PlayerRank_On_Conflict>;
};

/** on conflict condition type for table "PlayerRank" */
export type PlayerRank_On_Conflict = {
  readonly constraint: PlayerRank_Constraint;
  readonly update_columns: ReadonlyArray<PlayerRank_Update_Column>;
  readonly where?: Maybe<PlayerRank_Bool_Exp>;
};

/** ordering options when selecting data from "PlayerRank" */
export type PlayerRank_Order_By = {
  readonly rank?: Maybe<Order_By>;
};

/** primary key columns input for table: "PlayerRank" */
export type PlayerRank_Pk_Columns_Input = {
  readonly rank: Scalars['String'];
};

/** select columns of table "PlayerRank" */
export enum PlayerRank_Select_Column {
  /** column name */
  Rank = 'rank'
}

/** input type for updating data in table "PlayerRank" */
export type PlayerRank_Set_Input = {
  readonly rank?: Maybe<Scalars['String']>;
};

/** update columns of table "PlayerRank" */
export enum PlayerRank_Update_Column {
  /** column name */
  Rank = 'rank'
}

/** columns and relationships of "profile_cache" */
export type Profile_Cache = {
  readonly __typename?: 'profile_cache';
  readonly backgroundImageURL?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly emoji?: Maybe<Scalars['String']>;
  readonly gender?: Maybe<Scalars['String']>;
  readonly id: Scalars['uuid'];
  readonly imageURL?: Maybe<Scalars['String']>;
  readonly last_checked_at?: Maybe<Scalars['timestamptz']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  /** An object relationship */
  readonly player: Player;
  readonly playerId: Scalars['uuid'];
  readonly website?: Maybe<Scalars['String']>;
};

/** aggregated selection of "profile_cache" */
export type Profile_Cache_Aggregate = {
  readonly __typename?: 'profile_cache_aggregate';
  readonly aggregate?: Maybe<Profile_Cache_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Profile_Cache>;
};

/** aggregate fields of "profile_cache" */
export type Profile_Cache_Aggregate_Fields = {
  readonly __typename?: 'profile_cache_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Profile_Cache_Max_Fields>;
  readonly min?: Maybe<Profile_Cache_Min_Fields>;
};


/** aggregate fields of "profile_cache" */
export type Profile_Cache_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Profile_Cache_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "profile_cache" */
export type Profile_Cache_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Profile_Cache_Max_Order_By>;
  readonly min?: Maybe<Profile_Cache_Min_Order_By>;
};

/** input type for inserting array relation for remote table "profile_cache" */
export type Profile_Cache_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Profile_Cache_Insert_Input>;
  readonly on_conflict?: Maybe<Profile_Cache_On_Conflict>;
};

/** Boolean expression to filter rows from the table "profile_cache". All fields are combined with a logical 'AND'. */
export type Profile_Cache_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Profile_Cache_Bool_Exp>>>;
  readonly _not?: Maybe<Profile_Cache_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Profile_Cache_Bool_Exp>>>;
  readonly backgroundImageURL?: Maybe<String_Comparison_Exp>;
  readonly country?: Maybe<String_Comparison_Exp>;
  readonly description?: Maybe<String_Comparison_Exp>;
  readonly emoji?: Maybe<String_Comparison_Exp>;
  readonly gender?: Maybe<String_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly imageURL?: Maybe<String_Comparison_Exp>;
  readonly last_checked_at?: Maybe<Timestamptz_Comparison_Exp>;
  readonly location?: Maybe<String_Comparison_Exp>;
  readonly name?: Maybe<String_Comparison_Exp>;
  readonly player?: Maybe<Player_Bool_Exp>;
  readonly playerId?: Maybe<Uuid_Comparison_Exp>;
  readonly website?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "profile_cache" */
export enum Profile_Cache_Constraint {
  /** unique or primary key constraint */
  ProfileCachePkey = 'profile_cache_pkey',
  /** unique or primary key constraint */
  ProfileCachePlayerIdKey = 'profile_cache_player_id_key'
}

/** input type for inserting data into table "profile_cache" */
export type Profile_Cache_Insert_Input = {
  readonly backgroundImageURL?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly emoji?: Maybe<Scalars['String']>;
  readonly gender?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly imageURL?: Maybe<Scalars['String']>;
  readonly last_checked_at?: Maybe<Scalars['timestamptz']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly player?: Maybe<Player_Obj_Rel_Insert_Input>;
  readonly playerId?: Maybe<Scalars['uuid']>;
  readonly website?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Profile_Cache_Max_Fields = {
  readonly __typename?: 'profile_cache_max_fields';
  readonly backgroundImageURL?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly emoji?: Maybe<Scalars['String']>;
  readonly gender?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly imageURL?: Maybe<Scalars['String']>;
  readonly last_checked_at?: Maybe<Scalars['timestamptz']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly playerId?: Maybe<Scalars['uuid']>;
  readonly website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "profile_cache" */
export type Profile_Cache_Max_Order_By = {
  readonly backgroundImageURL?: Maybe<Order_By>;
  readonly country?: Maybe<Order_By>;
  readonly description?: Maybe<Order_By>;
  readonly emoji?: Maybe<Order_By>;
  readonly gender?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly imageURL?: Maybe<Order_By>;
  readonly last_checked_at?: Maybe<Order_By>;
  readonly location?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly playerId?: Maybe<Order_By>;
  readonly website?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Profile_Cache_Min_Fields = {
  readonly __typename?: 'profile_cache_min_fields';
  readonly backgroundImageURL?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly emoji?: Maybe<Scalars['String']>;
  readonly gender?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly imageURL?: Maybe<Scalars['String']>;
  readonly last_checked_at?: Maybe<Scalars['timestamptz']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly playerId?: Maybe<Scalars['uuid']>;
  readonly website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "profile_cache" */
export type Profile_Cache_Min_Order_By = {
  readonly backgroundImageURL?: Maybe<Order_By>;
  readonly country?: Maybe<Order_By>;
  readonly description?: Maybe<Order_By>;
  readonly emoji?: Maybe<Order_By>;
  readonly gender?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly imageURL?: Maybe<Order_By>;
  readonly last_checked_at?: Maybe<Order_By>;
  readonly location?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly playerId?: Maybe<Order_By>;
  readonly website?: Maybe<Order_By>;
};

/** response of any mutation on the table "profile_cache" */
export type Profile_Cache_Mutation_Response = {
  readonly __typename?: 'profile_cache_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Profile_Cache>;
};

/** input type for inserting object relation for remote table "profile_cache" */
export type Profile_Cache_Obj_Rel_Insert_Input = {
  readonly data: Profile_Cache_Insert_Input;
  readonly on_conflict?: Maybe<Profile_Cache_On_Conflict>;
};

/** on conflict condition type for table "profile_cache" */
export type Profile_Cache_On_Conflict = {
  readonly constraint: Profile_Cache_Constraint;
  readonly update_columns: ReadonlyArray<Profile_Cache_Update_Column>;
  readonly where?: Maybe<Profile_Cache_Bool_Exp>;
};

/** ordering options when selecting data from "profile_cache" */
export type Profile_Cache_Order_By = {
  readonly backgroundImageURL?: Maybe<Order_By>;
  readonly country?: Maybe<Order_By>;
  readonly description?: Maybe<Order_By>;
  readonly emoji?: Maybe<Order_By>;
  readonly gender?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly imageURL?: Maybe<Order_By>;
  readonly last_checked_at?: Maybe<Order_By>;
  readonly location?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly player?: Maybe<Player_Order_By>;
  readonly playerId?: Maybe<Order_By>;
  readonly website?: Maybe<Order_By>;
};

/** primary key columns input for table: "profile_cache" */
export type Profile_Cache_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "profile_cache" */
export enum Profile_Cache_Select_Column {
  /** column name */
  BackgroundImageUrl = 'backgroundImageURL',
  /** column name */
  Country = 'country',
  /** column name */
  Description = 'description',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageURL',
  /** column name */
  LastCheckedAt = 'last_checked_at',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "profile_cache" */
export type Profile_Cache_Set_Input = {
  readonly backgroundImageURL?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly emoji?: Maybe<Scalars['String']>;
  readonly gender?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly imageURL?: Maybe<Scalars['String']>;
  readonly last_checked_at?: Maybe<Scalars['timestamptz']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly playerId?: Maybe<Scalars['uuid']>;
  readonly website?: Maybe<Scalars['String']>;
};

/** update columns of table "profile_cache" */
export enum Profile_Cache_Update_Column {
  /** column name */
  BackgroundImageUrl = 'backgroundImageURL',
  /** column name */
  Country = 'country',
  /** column name */
  Description = 'description',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageURL',
  /** column name */
  LastCheckedAt = 'last_checked_at',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  Website = 'website'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly getBoxProfile?: Maybe<BoxProfile>;
  readonly getBrightIdStatus?: Maybe<BrightIdStatus>;
  readonly getDaoHausMemberships: ReadonlyArray<Member>;
  readonly getTokenBalances?: Maybe<TokenBalances>;
  readonly getTopPSeedHolders?: Maybe<ReadonlyArray<TokenBalances>>;
};


export type QueryGetBoxProfileArgs = {
  address?: Maybe<Scalars['String']>;
};


export type QueryGetBrightIdStatusArgs = {
  contextId?: Maybe<Scalars['uuid']>;
};


export type QueryGetDaoHausMembershipsArgs = {
  memberAddress?: Maybe<Scalars['String']>;
};


export type QueryGetTokenBalancesArgs = {
  address?: Maybe<Scalars['String']>;
};


export type QueryGetTopPSeedHoldersArgs = {
  limit?: Maybe<Scalars['Int']>;
};

/** query root */
export type Query_Root = {
  readonly __typename?: 'query_root';
  /** fetch data from the table: "AccountType" */
  readonly AccountType: ReadonlyArray<AccountType>;
  /** fetch aggregated fields from the table: "AccountType" */
  readonly AccountType_aggregate: AccountType_Aggregate;
  /** fetch data from the table: "AccountType" using primary key columns */
  readonly AccountType_by_pk?: Maybe<AccountType>;
  /** fetch data from the table: "ColorAspect" */
  readonly ColorAspect: ReadonlyArray<ColorAspect>;
  /** fetch aggregated fields from the table: "ColorAspect" */
  readonly ColorAspect_aggregate: ColorAspect_Aggregate;
  /** fetch data from the table: "ColorAspect" using primary key columns */
  readonly ColorAspect_by_pk?: Maybe<ColorAspect>;
  /** fetch data from the table: "GuildPosition" */
  readonly GuildPosition: ReadonlyArray<GuildPosition>;
  /** fetch aggregated fields from the table: "GuildPosition" */
  readonly GuildPosition_aggregate: GuildPosition_Aggregate;
  /** fetch data from the table: "GuildPosition" using primary key columns */
  readonly GuildPosition_by_pk?: Maybe<GuildPosition>;
  /** fetch data from the table: "GuildStatus" */
  readonly GuildStatus: ReadonlyArray<GuildStatus>;
  /** fetch aggregated fields from the table: "GuildStatus" */
  readonly GuildStatus_aggregate: GuildStatus_Aggregate;
  /** fetch data from the table: "GuildStatus" using primary key columns */
  readonly GuildStatus_by_pk?: Maybe<GuildStatus>;
  /** fetch data from the table: "GuildType" */
  readonly GuildType: ReadonlyArray<GuildType>;
  /** fetch aggregated fields from the table: "GuildType" */
  readonly GuildType_aggregate: GuildType_Aggregate;
  /** fetch data from the table: "GuildType" using primary key columns */
  readonly GuildType_by_pk?: Maybe<GuildType>;
  /** fetch data from the table: "PlayerRank" */
  readonly PlayerRank: ReadonlyArray<PlayerRank>;
  /** fetch aggregated fields from the table: "PlayerRank" */
  readonly PlayerRank_aggregate: PlayerRank_Aggregate;
  /** fetch data from the table: "PlayerRank" using primary key columns */
  readonly PlayerRank_by_pk?: Maybe<PlayerRank>;
  /** fetch data from the table: "QuestCompletionStatus" */
  readonly QuestCompletionStatus: ReadonlyArray<QuestCompletionStatus>;
  /** fetch aggregated fields from the table: "QuestCompletionStatus" */
  readonly QuestCompletionStatus_aggregate: QuestCompletionStatus_Aggregate;
  /** fetch data from the table: "QuestCompletionStatus" using primary key columns */
  readonly QuestCompletionStatus_by_pk?: Maybe<QuestCompletionStatus>;
  /** fetch data from the table: "QuestRepetition" */
  readonly QuestRepetition: ReadonlyArray<QuestRepetition>;
  /** fetch aggregated fields from the table: "QuestRepetition" */
  readonly QuestRepetition_aggregate: QuestRepetition_Aggregate;
  /** fetch data from the table: "QuestRepetition" using primary key columns */
  readonly QuestRepetition_by_pk?: Maybe<QuestRepetition>;
  /** fetch data from the table: "QuestStatus" */
  readonly QuestStatus: ReadonlyArray<QuestStatus>;
  /** fetch aggregated fields from the table: "QuestStatus" */
  readonly QuestStatus_aggregate: QuestStatus_Aggregate;
  /** fetch data from the table: "QuestStatus" using primary key columns */
  readonly QuestStatus_by_pk?: Maybe<QuestStatus>;
  /** fetch data from the table: "SkillCategory" */
  readonly SkillCategory: ReadonlyArray<SkillCategory>;
  /** fetch aggregated fields from the table: "SkillCategory" */
  readonly SkillCategory_aggregate: SkillCategory_Aggregate;
  /** fetch data from the table: "SkillCategory" using primary key columns */
  readonly SkillCategory_by_pk?: Maybe<SkillCategory>;
  readonly getBoxProfile?: Maybe<BoxProfile>;
  readonly getBrightIdStatus?: Maybe<BrightIdStatus>;
  readonly getDaoHausMemberships: ReadonlyArray<Member>;
  readonly getTokenBalances?: Maybe<TokenBalances>;
  readonly getTopPSeedHolders?: Maybe<ReadonlyArray<TokenBalances>>;
  /** fetch data from the table: "guild" */
  readonly guild: ReadonlyArray<Guild>;
  /** fetch data from the table: "guild_account" */
  readonly guild_account: ReadonlyArray<Guild_Account>;
  /** fetch aggregated fields from the table: "guild_account" */
  readonly guild_account_aggregate: Guild_Account_Aggregate;
  /** fetch data from the table: "guild_account" using primary key columns */
  readonly guild_account_by_pk?: Maybe<Guild_Account>;
  /** fetch aggregated fields from the table: "guild" */
  readonly guild_aggregate: Guild_Aggregate;
  /** fetch data from the table: "guild" using primary key columns */
  readonly guild_by_pk?: Maybe<Guild>;
  /** fetch data from the table: "guild_player" */
  readonly guild_player: ReadonlyArray<Guild_Player>;
  /** fetch aggregated fields from the table: "guild_player" */
  readonly guild_player_aggregate: Guild_Player_Aggregate;
  /** fetch data from the table: "guild_player" using primary key columns */
  readonly guild_player_by_pk?: Maybe<Guild_Player>;
  /** fetch data from the table: "me" */
  readonly me: ReadonlyArray<Me>;
  /** fetch aggregated fields from the table: "me" */
  readonly me_aggregate: Me_Aggregate;
  /** fetch data from the table: "player" */
  readonly player: ReadonlyArray<Player>;
  /** fetch data from the table: "player_account" */
  readonly player_account: ReadonlyArray<Player_Account>;
  /** fetch aggregated fields from the table: "player_account" */
  readonly player_account_aggregate: Player_Account_Aggregate;
  /** fetch aggregated fields from the table: "player" */
  readonly player_aggregate: Player_Aggregate;
  /** fetch data from the table: "player" using primary key columns */
  readonly player_by_pk?: Maybe<Player>;
  /** fetch data from the table: "player_skill" */
  readonly player_skill: ReadonlyArray<Player_Skill>;
  /** fetch aggregated fields from the table: "player_skill" */
  readonly player_skill_aggregate: Player_Skill_Aggregate;
  /** fetch data from the table: "player_skill" using primary key columns */
  readonly player_skill_by_pk?: Maybe<Player_Skill>;
  /** fetch data from the table: "player_type" */
  readonly player_type: ReadonlyArray<Player_Type>;
  /** fetch aggregated fields from the table: "player_type" */
  readonly player_type_aggregate: Player_Type_Aggregate;
  /** fetch data from the table: "player_type" using primary key columns */
  readonly player_type_by_pk?: Maybe<Player_Type>;
  /** fetch data from the table: "profile_cache" */
  readonly profile_cache: ReadonlyArray<Profile_Cache>;
  /** fetch aggregated fields from the table: "profile_cache" */
  readonly profile_cache_aggregate: Profile_Cache_Aggregate;
  /** fetch data from the table: "profile_cache" using primary key columns */
  readonly profile_cache_by_pk?: Maybe<Profile_Cache>;
  /** fetch data from the table: "quest" */
  readonly quest: ReadonlyArray<Quest>;
  /** fetch aggregated fields from the table: "quest" */
  readonly quest_aggregate: Quest_Aggregate;
  /** fetch data from the table: "quest" using primary key columns */
  readonly quest_by_pk?: Maybe<Quest>;
  /** fetch data from the table: "quest_completion" */
  readonly quest_completion: ReadonlyArray<Quest_Completion>;
  /** fetch aggregated fields from the table: "quest_completion" */
  readonly quest_completion_aggregate: Quest_Completion_Aggregate;
  /** fetch data from the table: "quest_completion" using primary key columns */
  readonly quest_completion_by_pk?: Maybe<Quest_Completion>;
  /** fetch data from the table: "quest_skill" */
  readonly quest_skill: ReadonlyArray<Quest_Skill>;
  /** fetch aggregated fields from the table: "quest_skill" */
  readonly quest_skill_aggregate: Quest_Skill_Aggregate;
  /** fetch data from the table: "quest_skill" using primary key columns */
  readonly quest_skill_by_pk?: Maybe<Quest_Skill>;
  /** fetch data from the table: "skill" */
  readonly skill: ReadonlyArray<Skill>;
  /** fetch aggregated fields from the table: "skill" */
  readonly skill_aggregate: Skill_Aggregate;
  /** fetch data from the table: "skill" using primary key columns */
  readonly skill_by_pk?: Maybe<Skill>;
};


/** query root */
export type Query_RootAccountTypeArgs = {
  distinct_on?: Maybe<ReadonlyArray<AccountType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<AccountType_Order_By>>;
  where?: Maybe<AccountType_Bool_Exp>;
};


/** query root */
export type Query_RootAccountType_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<AccountType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<AccountType_Order_By>>;
  where?: Maybe<AccountType_Bool_Exp>;
};


/** query root */
export type Query_RootAccountType_By_PkArgs = {
  type: Scalars['String'];
};


/** query root */
export type Query_RootColorAspectArgs = {
  distinct_on?: Maybe<ReadonlyArray<ColorAspect_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ColorAspect_Order_By>>;
  where?: Maybe<ColorAspect_Bool_Exp>;
};


/** query root */
export type Query_RootColorAspect_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ColorAspect_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ColorAspect_Order_By>>;
  where?: Maybe<ColorAspect_Bool_Exp>;
};


/** query root */
export type Query_RootColorAspect_By_PkArgs = {
  mask: Scalars['Int'];
};


/** query root */
export type Query_RootGuildPositionArgs = {
  distinct_on?: Maybe<ReadonlyArray<GuildPosition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GuildPosition_Order_By>>;
  where?: Maybe<GuildPosition_Bool_Exp>;
};


/** query root */
export type Query_RootGuildPosition_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GuildPosition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GuildPosition_Order_By>>;
  where?: Maybe<GuildPosition_Bool_Exp>;
};


/** query root */
export type Query_RootGuildPosition_By_PkArgs = {
  position: Scalars['String'];
};


/** query root */
export type Query_RootGuildStatusArgs = {
  distinct_on?: Maybe<ReadonlyArray<GuildStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GuildStatus_Order_By>>;
  where?: Maybe<GuildStatus_Bool_Exp>;
};


/** query root */
export type Query_RootGuildStatus_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GuildStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GuildStatus_Order_By>>;
  where?: Maybe<GuildStatus_Bool_Exp>;
};


/** query root */
export type Query_RootGuildStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** query root */
export type Query_RootGuildTypeArgs = {
  distinct_on?: Maybe<ReadonlyArray<GuildType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GuildType_Order_By>>;
  where?: Maybe<GuildType_Bool_Exp>;
};


/** query root */
export type Query_RootGuildType_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GuildType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GuildType_Order_By>>;
  where?: Maybe<GuildType_Bool_Exp>;
};


/** query root */
export type Query_RootGuildType_By_PkArgs = {
  name: Scalars['String'];
};


/** query root */
export type Query_RootPlayerRankArgs = {
  distinct_on?: Maybe<ReadonlyArray<PlayerRank_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<PlayerRank_Order_By>>;
  where?: Maybe<PlayerRank_Bool_Exp>;
};


/** query root */
export type Query_RootPlayerRank_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<PlayerRank_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<PlayerRank_Order_By>>;
  where?: Maybe<PlayerRank_Bool_Exp>;
};


/** query root */
export type Query_RootPlayerRank_By_PkArgs = {
  rank: Scalars['String'];
};


/** query root */
export type Query_RootQuestCompletionStatusArgs = {
  distinct_on?: Maybe<ReadonlyArray<QuestCompletionStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<QuestCompletionStatus_Order_By>>;
  where?: Maybe<QuestCompletionStatus_Bool_Exp>;
};


/** query root */
export type Query_RootQuestCompletionStatus_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<QuestCompletionStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<QuestCompletionStatus_Order_By>>;
  where?: Maybe<QuestCompletionStatus_Bool_Exp>;
};


/** query root */
export type Query_RootQuestCompletionStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** query root */
export type Query_RootQuestRepetitionArgs = {
  distinct_on?: Maybe<ReadonlyArray<QuestRepetition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<QuestRepetition_Order_By>>;
  where?: Maybe<QuestRepetition_Bool_Exp>;
};


/** query root */
export type Query_RootQuestRepetition_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<QuestRepetition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<QuestRepetition_Order_By>>;
  where?: Maybe<QuestRepetition_Bool_Exp>;
};


/** query root */
export type Query_RootQuestRepetition_By_PkArgs = {
  repetition: Scalars['String'];
};


/** query root */
export type Query_RootQuestStatusArgs = {
  distinct_on?: Maybe<ReadonlyArray<QuestStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<QuestStatus_Order_By>>;
  where?: Maybe<QuestStatus_Bool_Exp>;
};


/** query root */
export type Query_RootQuestStatus_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<QuestStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<QuestStatus_Order_By>>;
  where?: Maybe<QuestStatus_Bool_Exp>;
};


/** query root */
export type Query_RootQuestStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** query root */
export type Query_RootSkillCategoryArgs = {
  distinct_on?: Maybe<ReadonlyArray<SkillCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<SkillCategory_Order_By>>;
  where?: Maybe<SkillCategory_Bool_Exp>;
};


/** query root */
export type Query_RootSkillCategory_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<SkillCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<SkillCategory_Order_By>>;
  where?: Maybe<SkillCategory_Bool_Exp>;
};


/** query root */
export type Query_RootSkillCategory_By_PkArgs = {
  name: Scalars['String'];
};


/** query root */
export type Query_RootGetBoxProfileArgs = {
  address?: Maybe<Scalars['String']>;
};


/** query root */
export type Query_RootGetBrightIdStatusArgs = {
  contextId?: Maybe<Scalars['uuid']>;
};


/** query root */
export type Query_RootGetDaoHausMembershipsArgs = {
  memberAddress?: Maybe<Scalars['String']>;
};


/** query root */
export type Query_RootGetTokenBalancesArgs = {
  address?: Maybe<Scalars['String']>;
};


/** query root */
export type Query_RootGetTopPSeedHoldersArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** query root */
export type Query_RootGuildArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Order_By>>;
  where?: Maybe<Guild_Bool_Exp>;
};


/** query root */
export type Query_RootGuild_AccountArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Account_Order_By>>;
  where?: Maybe<Guild_Account_Bool_Exp>;
};


/** query root */
export type Query_RootGuild_Account_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Account_Order_By>>;
  where?: Maybe<Guild_Account_Bool_Exp>;
};


/** query root */
export type Query_RootGuild_Account_By_PkArgs = {
  guild_id: Scalars['uuid'];
  type: AccountType_Enum;
};


/** query root */
export type Query_RootGuild_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Order_By>>;
  where?: Maybe<Guild_Bool_Exp>;
};


/** query root */
export type Query_RootGuild_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGuild_PlayerArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** query root */
export type Query_RootGuild_Player_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** query root */
export type Query_RootGuild_Player_By_PkArgs = {
  guild_id: Scalars['uuid'];
  player_id: Scalars['uuid'];
};


/** query root */
export type Query_RootMeArgs = {
  distinct_on?: Maybe<ReadonlyArray<Me_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Me_Order_By>>;
  where?: Maybe<Me_Bool_Exp>;
};


/** query root */
export type Query_RootMe_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Me_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Me_Order_By>>;
  where?: Maybe<Me_Bool_Exp>;
};


/** query root */
export type Query_RootPlayerArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_AccountArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Account_Order_By>>;
  where?: Maybe<Player_Account_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_Account_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Account_Order_By>>;
  where?: Maybe<Player_Account_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootPlayer_SkillArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_Skill_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_Skill_By_PkArgs = {
  player_id: Scalars['uuid'];
  skill_id: Scalars['uuid'];
};


/** query root */
export type Query_RootPlayer_TypeArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Type_Order_By>>;
  where?: Maybe<Player_Type_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_Type_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Type_Order_By>>;
  where?: Maybe<Player_Type_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootProfile_CacheArgs = {
  distinct_on?: Maybe<ReadonlyArray<Profile_Cache_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Profile_Cache_Order_By>>;
  where?: Maybe<Profile_Cache_Bool_Exp>;
};


/** query root */
export type Query_RootProfile_Cache_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Profile_Cache_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Profile_Cache_Order_By>>;
  where?: Maybe<Profile_Cache_Bool_Exp>;
};


/** query root */
export type Query_RootProfile_Cache_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootQuestArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** query root */
export type Query_RootQuest_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** query root */
export type Query_RootQuest_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootQuest_CompletionArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** query root */
export type Query_RootQuest_Completion_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** query root */
export type Query_RootQuest_Completion_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootQuest_SkillArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};


/** query root */
export type Query_RootQuest_Skill_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};


/** query root */
export type Query_RootQuest_Skill_By_PkArgs = {
  quest_id: Scalars['uuid'];
  skill_id: Scalars['uuid'];
};


/** query root */
export type Query_RootSkillArgs = {
  distinct_on?: Maybe<ReadonlyArray<Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Skill_Order_By>>;
  where?: Maybe<Skill_Bool_Exp>;
};


/** query root */
export type Query_RootSkill_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Skill_Order_By>>;
  where?: Maybe<Skill_Bool_Exp>;
};


/** query root */
export type Query_RootSkill_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "quest" */
export type Quest = {
  readonly __typename?: 'quest';
  /** An object relationship */
  readonly QuestRepetition: QuestRepetition;
  /** An object relationship */
  readonly QuestStatus: QuestStatus;
  readonly cooldown?: Maybe<Scalars['Int']>;
  readonly created_at: Scalars['timestamptz'];
  readonly created_by_player_id: Scalars['uuid'];
  readonly description?: Maybe<Scalars['String']>;
  readonly external_link?: Maybe<Scalars['String']>;
  /** An object relationship */
  readonly guild: Guild;
  readonly guild_id: Scalars['uuid'];
  readonly id: Scalars['uuid'];
  /** An object relationship */
  readonly player: Player;
  /** An array relationship */
  readonly quest_completions: ReadonlyArray<Quest_Completion>;
  /** An aggregated array relationship */
  readonly quest_completions_aggregate: Quest_Completion_Aggregate;
  /** An array relationship */
  readonly quest_skills: ReadonlyArray<Quest_Skill>;
  /** An aggregated array relationship */
  readonly quest_skills_aggregate: Quest_Skill_Aggregate;
  readonly repetition: QuestRepetition_Enum;
  readonly status: QuestStatus_Enum;
  readonly title: Scalars['String'];
};


/** columns and relationships of "quest" */
export type QuestQuest_CompletionsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** columns and relationships of "quest" */
export type QuestQuest_Completions_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** columns and relationships of "quest" */
export type QuestQuest_SkillsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};


/** columns and relationships of "quest" */
export type QuestQuest_Skills_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};

/** aggregated selection of "quest" */
export type Quest_Aggregate = {
  readonly __typename?: 'quest_aggregate';
  readonly aggregate?: Maybe<Quest_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Quest>;
};

/** aggregate fields of "quest" */
export type Quest_Aggregate_Fields = {
  readonly __typename?: 'quest_aggregate_fields';
  readonly avg?: Maybe<Quest_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Quest_Max_Fields>;
  readonly min?: Maybe<Quest_Min_Fields>;
  readonly stddev?: Maybe<Quest_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Quest_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Quest_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Quest_Sum_Fields>;
  readonly var_pop?: Maybe<Quest_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Quest_Var_Samp_Fields>;
  readonly variance?: Maybe<Quest_Variance_Fields>;
};


/** aggregate fields of "quest" */
export type Quest_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Quest_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quest" */
export type Quest_Aggregate_Order_By = {
  readonly avg?: Maybe<Quest_Avg_Order_By>;
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Quest_Max_Order_By>;
  readonly min?: Maybe<Quest_Min_Order_By>;
  readonly stddev?: Maybe<Quest_Stddev_Order_By>;
  readonly stddev_pop?: Maybe<Quest_Stddev_Pop_Order_By>;
  readonly stddev_samp?: Maybe<Quest_Stddev_Samp_Order_By>;
  readonly sum?: Maybe<Quest_Sum_Order_By>;
  readonly var_pop?: Maybe<Quest_Var_Pop_Order_By>;
  readonly var_samp?: Maybe<Quest_Var_Samp_Order_By>;
  readonly variance?: Maybe<Quest_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "quest" */
export type Quest_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Quest_Insert_Input>;
  readonly on_conflict?: Maybe<Quest_On_Conflict>;
};

/** aggregate avg on columns */
export type Quest_Avg_Fields = {
  readonly __typename?: 'quest_avg_fields';
  readonly cooldown?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "quest" */
export type Quest_Avg_Order_By = {
  readonly cooldown?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "quest". All fields are combined with a logical 'AND'. */
export type Quest_Bool_Exp = {
  readonly QuestRepetition?: Maybe<QuestRepetition_Bool_Exp>;
  readonly QuestStatus?: Maybe<QuestStatus_Bool_Exp>;
  readonly _and?: Maybe<ReadonlyArray<Maybe<Quest_Bool_Exp>>>;
  readonly _not?: Maybe<Quest_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Quest_Bool_Exp>>>;
  readonly cooldown?: Maybe<Int_Comparison_Exp>;
  readonly created_at?: Maybe<Timestamptz_Comparison_Exp>;
  readonly created_by_player_id?: Maybe<Uuid_Comparison_Exp>;
  readonly description?: Maybe<String_Comparison_Exp>;
  readonly external_link?: Maybe<String_Comparison_Exp>;
  readonly guild?: Maybe<Guild_Bool_Exp>;
  readonly guild_id?: Maybe<Uuid_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly player?: Maybe<Player_Bool_Exp>;
  readonly quest_completions?: Maybe<Quest_Completion_Bool_Exp>;
  readonly quest_skills?: Maybe<Quest_Skill_Bool_Exp>;
  readonly repetition?: Maybe<QuestRepetition_Enum_Comparison_Exp>;
  readonly status?: Maybe<QuestStatus_Enum_Comparison_Exp>;
  readonly title?: Maybe<String_Comparison_Exp>;
};

/** columns and relationships of "quest_completion" */
export type Quest_Completion = {
  readonly __typename?: 'quest_completion';
  /** An object relationship */
  readonly QuestCompletionStatus: QuestCompletionStatus;
  readonly completed_by_player_id: Scalars['uuid'];
  readonly id: Scalars['uuid'];
  /** An object relationship */
  readonly player: Player;
  /** An object relationship */
  readonly quest: Quest;
  readonly quest_id: Scalars['uuid'];
  readonly status: QuestCompletionStatus_Enum;
  readonly submission_link?: Maybe<Scalars['String']>;
  readonly submission_text?: Maybe<Scalars['String']>;
  readonly submitted_at: Scalars['timestamptz'];
};

/** aggregated selection of "quest_completion" */
export type Quest_Completion_Aggregate = {
  readonly __typename?: 'quest_completion_aggregate';
  readonly aggregate?: Maybe<Quest_Completion_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Quest_Completion>;
};

/** aggregate fields of "quest_completion" */
export type Quest_Completion_Aggregate_Fields = {
  readonly __typename?: 'quest_completion_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Quest_Completion_Max_Fields>;
  readonly min?: Maybe<Quest_Completion_Min_Fields>;
};


/** aggregate fields of "quest_completion" */
export type Quest_Completion_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Quest_Completion_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quest_completion" */
export type Quest_Completion_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Quest_Completion_Max_Order_By>;
  readonly min?: Maybe<Quest_Completion_Min_Order_By>;
};

/** input type for inserting array relation for remote table "quest_completion" */
export type Quest_Completion_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Quest_Completion_Insert_Input>;
  readonly on_conflict?: Maybe<Quest_Completion_On_Conflict>;
};

/** Boolean expression to filter rows from the table "quest_completion". All fields are combined with a logical 'AND'. */
export type Quest_Completion_Bool_Exp = {
  readonly QuestCompletionStatus?: Maybe<QuestCompletionStatus_Bool_Exp>;
  readonly _and?: Maybe<ReadonlyArray<Maybe<Quest_Completion_Bool_Exp>>>;
  readonly _not?: Maybe<Quest_Completion_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Quest_Completion_Bool_Exp>>>;
  readonly completed_by_player_id?: Maybe<Uuid_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly player?: Maybe<Player_Bool_Exp>;
  readonly quest?: Maybe<Quest_Bool_Exp>;
  readonly quest_id?: Maybe<Uuid_Comparison_Exp>;
  readonly status?: Maybe<QuestCompletionStatus_Enum_Comparison_Exp>;
  readonly submission_link?: Maybe<String_Comparison_Exp>;
  readonly submission_text?: Maybe<String_Comparison_Exp>;
  readonly submitted_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "quest_completion" */
export enum Quest_Completion_Constraint {
  /** unique or primary key constraint */
  QuestCompletionPkey = 'quest_completion_pkey'
}

/** input type for inserting data into table "quest_completion" */
export type Quest_Completion_Insert_Input = {
  readonly QuestCompletionStatus?: Maybe<QuestCompletionStatus_Obj_Rel_Insert_Input>;
  readonly completed_by_player_id?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly player?: Maybe<Player_Obj_Rel_Insert_Input>;
  readonly quest?: Maybe<Quest_Obj_Rel_Insert_Input>;
  readonly quest_id?: Maybe<Scalars['uuid']>;
  readonly status?: Maybe<QuestCompletionStatus_Enum>;
  readonly submission_link?: Maybe<Scalars['String']>;
  readonly submission_text?: Maybe<Scalars['String']>;
  readonly submitted_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Quest_Completion_Max_Fields = {
  readonly __typename?: 'quest_completion_max_fields';
  readonly completed_by_player_id?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly quest_id?: Maybe<Scalars['uuid']>;
  readonly submission_link?: Maybe<Scalars['String']>;
  readonly submission_text?: Maybe<Scalars['String']>;
  readonly submitted_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "quest_completion" */
export type Quest_Completion_Max_Order_By = {
  readonly completed_by_player_id?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly quest_id?: Maybe<Order_By>;
  readonly submission_link?: Maybe<Order_By>;
  readonly submission_text?: Maybe<Order_By>;
  readonly submitted_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Quest_Completion_Min_Fields = {
  readonly __typename?: 'quest_completion_min_fields';
  readonly completed_by_player_id?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly quest_id?: Maybe<Scalars['uuid']>;
  readonly submission_link?: Maybe<Scalars['String']>;
  readonly submission_text?: Maybe<Scalars['String']>;
  readonly submitted_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "quest_completion" */
export type Quest_Completion_Min_Order_By = {
  readonly completed_by_player_id?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly quest_id?: Maybe<Order_By>;
  readonly submission_link?: Maybe<Order_By>;
  readonly submission_text?: Maybe<Order_By>;
  readonly submitted_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "quest_completion" */
export type Quest_Completion_Mutation_Response = {
  readonly __typename?: 'quest_completion_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Quest_Completion>;
};

/** input type for inserting object relation for remote table "quest_completion" */
export type Quest_Completion_Obj_Rel_Insert_Input = {
  readonly data: Quest_Completion_Insert_Input;
  readonly on_conflict?: Maybe<Quest_Completion_On_Conflict>;
};

/** on conflict condition type for table "quest_completion" */
export type Quest_Completion_On_Conflict = {
  readonly constraint: Quest_Completion_Constraint;
  readonly update_columns: ReadonlyArray<Quest_Completion_Update_Column>;
  readonly where?: Maybe<Quest_Completion_Bool_Exp>;
};

/** ordering options when selecting data from "quest_completion" */
export type Quest_Completion_Order_By = {
  readonly QuestCompletionStatus?: Maybe<QuestCompletionStatus_Order_By>;
  readonly completed_by_player_id?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly player?: Maybe<Player_Order_By>;
  readonly quest?: Maybe<Quest_Order_By>;
  readonly quest_id?: Maybe<Order_By>;
  readonly status?: Maybe<Order_By>;
  readonly submission_link?: Maybe<Order_By>;
  readonly submission_text?: Maybe<Order_By>;
  readonly submitted_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "quest_completion" */
export type Quest_Completion_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "quest_completion" */
export enum Quest_Completion_Select_Column {
  /** column name */
  CompletedByPlayerId = 'completed_by_player_id',
  /** column name */
  Id = 'id',
  /** column name */
  QuestId = 'quest_id',
  /** column name */
  Status = 'status',
  /** column name */
  SubmissionLink = 'submission_link',
  /** column name */
  SubmissionText = 'submission_text',
  /** column name */
  SubmittedAt = 'submitted_at'
}

/** input type for updating data in table "quest_completion" */
export type Quest_Completion_Set_Input = {
  readonly completed_by_player_id?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly quest_id?: Maybe<Scalars['uuid']>;
  readonly status?: Maybe<QuestCompletionStatus_Enum>;
  readonly submission_link?: Maybe<Scalars['String']>;
  readonly submission_text?: Maybe<Scalars['String']>;
  readonly submitted_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "quest_completion" */
export enum Quest_Completion_Update_Column {
  /** column name */
  CompletedByPlayerId = 'completed_by_player_id',
  /** column name */
  Id = 'id',
  /** column name */
  QuestId = 'quest_id',
  /** column name */
  Status = 'status',
  /** column name */
  SubmissionLink = 'submission_link',
  /** column name */
  SubmissionText = 'submission_text',
  /** column name */
  SubmittedAt = 'submitted_at'
}

/** unique or primary key constraints on table "quest" */
export enum Quest_Constraint {
  /** unique or primary key constraint */
  QuestPkey = 'quest_pkey'
}

/** input type for incrementing integer column in table "quest" */
export type Quest_Inc_Input = {
  readonly cooldown?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "quest" */
export type Quest_Insert_Input = {
  readonly QuestRepetition?: Maybe<QuestRepetition_Obj_Rel_Insert_Input>;
  readonly QuestStatus?: Maybe<QuestStatus_Obj_Rel_Insert_Input>;
  readonly cooldown?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly created_by_player_id?: Maybe<Scalars['uuid']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly external_link?: Maybe<Scalars['String']>;
  readonly guild?: Maybe<Guild_Obj_Rel_Insert_Input>;
  readonly guild_id?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly player?: Maybe<Player_Obj_Rel_Insert_Input>;
  readonly quest_completions?: Maybe<Quest_Completion_Arr_Rel_Insert_Input>;
  readonly quest_skills?: Maybe<Quest_Skill_Arr_Rel_Insert_Input>;
  readonly repetition?: Maybe<QuestRepetition_Enum>;
  readonly status?: Maybe<QuestStatus_Enum>;
  readonly title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Quest_Max_Fields = {
  readonly __typename?: 'quest_max_fields';
  readonly cooldown?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly created_by_player_id?: Maybe<Scalars['uuid']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly external_link?: Maybe<Scalars['String']>;
  readonly guild_id?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "quest" */
export type Quest_Max_Order_By = {
  readonly cooldown?: Maybe<Order_By>;
  readonly created_at?: Maybe<Order_By>;
  readonly created_by_player_id?: Maybe<Order_By>;
  readonly description?: Maybe<Order_By>;
  readonly external_link?: Maybe<Order_By>;
  readonly guild_id?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Quest_Min_Fields = {
  readonly __typename?: 'quest_min_fields';
  readonly cooldown?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly created_by_player_id?: Maybe<Scalars['uuid']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly external_link?: Maybe<Scalars['String']>;
  readonly guild_id?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "quest" */
export type Quest_Min_Order_By = {
  readonly cooldown?: Maybe<Order_By>;
  readonly created_at?: Maybe<Order_By>;
  readonly created_by_player_id?: Maybe<Order_By>;
  readonly description?: Maybe<Order_By>;
  readonly external_link?: Maybe<Order_By>;
  readonly guild_id?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly title?: Maybe<Order_By>;
};

/** response of any mutation on the table "quest" */
export type Quest_Mutation_Response = {
  readonly __typename?: 'quest_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Quest>;
};

/** input type for inserting object relation for remote table "quest" */
export type Quest_Obj_Rel_Insert_Input = {
  readonly data: Quest_Insert_Input;
  readonly on_conflict?: Maybe<Quest_On_Conflict>;
};

/** on conflict condition type for table "quest" */
export type Quest_On_Conflict = {
  readonly constraint: Quest_Constraint;
  readonly update_columns: ReadonlyArray<Quest_Update_Column>;
  readonly where?: Maybe<Quest_Bool_Exp>;
};

/** ordering options when selecting data from "quest" */
export type Quest_Order_By = {
  readonly QuestRepetition?: Maybe<QuestRepetition_Order_By>;
  readonly QuestStatus?: Maybe<QuestStatus_Order_By>;
  readonly cooldown?: Maybe<Order_By>;
  readonly created_at?: Maybe<Order_By>;
  readonly created_by_player_id?: Maybe<Order_By>;
  readonly description?: Maybe<Order_By>;
  readonly external_link?: Maybe<Order_By>;
  readonly guild?: Maybe<Guild_Order_By>;
  readonly guild_id?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly player?: Maybe<Player_Order_By>;
  readonly quest_completions_aggregate?: Maybe<Quest_Completion_Aggregate_Order_By>;
  readonly quest_skills_aggregate?: Maybe<Quest_Skill_Aggregate_Order_By>;
  readonly repetition?: Maybe<Order_By>;
  readonly status?: Maybe<Order_By>;
  readonly title?: Maybe<Order_By>;
};

/** primary key columns input for table: "quest" */
export type Quest_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "quest" */
export enum Quest_Select_Column {
  /** column name */
  Cooldown = 'cooldown',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedByPlayerId = 'created_by_player_id',
  /** column name */
  Description = 'description',
  /** column name */
  ExternalLink = 'external_link',
  /** column name */
  GuildId = 'guild_id',
  /** column name */
  Id = 'id',
  /** column name */
  Repetition = 'repetition',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "quest" */
export type Quest_Set_Input = {
  readonly cooldown?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly created_by_player_id?: Maybe<Scalars['uuid']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly external_link?: Maybe<Scalars['String']>;
  readonly guild_id?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly repetition?: Maybe<QuestRepetition_Enum>;
  readonly status?: Maybe<QuestStatus_Enum>;
  readonly title?: Maybe<Scalars['String']>;
};

/** columns and relationships of "quest_skill" */
export type Quest_Skill = {
  readonly __typename?: 'quest_skill';
  /** An object relationship */
  readonly quest: Quest;
  readonly quest_id: Scalars['uuid'];
  /** An object relationship */
  readonly skill: Skill;
  readonly skill_id: Scalars['uuid'];
};

/** aggregated selection of "quest_skill" */
export type Quest_Skill_Aggregate = {
  readonly __typename?: 'quest_skill_aggregate';
  readonly aggregate?: Maybe<Quest_Skill_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Quest_Skill>;
};

/** aggregate fields of "quest_skill" */
export type Quest_Skill_Aggregate_Fields = {
  readonly __typename?: 'quest_skill_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Quest_Skill_Max_Fields>;
  readonly min?: Maybe<Quest_Skill_Min_Fields>;
};


/** aggregate fields of "quest_skill" */
export type Quest_Skill_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Quest_Skill_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quest_skill" */
export type Quest_Skill_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Quest_Skill_Max_Order_By>;
  readonly min?: Maybe<Quest_Skill_Min_Order_By>;
};

/** input type for inserting array relation for remote table "quest_skill" */
export type Quest_Skill_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Quest_Skill_Insert_Input>;
  readonly on_conflict?: Maybe<Quest_Skill_On_Conflict>;
};

/** Boolean expression to filter rows from the table "quest_skill". All fields are combined with a logical 'AND'. */
export type Quest_Skill_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Quest_Skill_Bool_Exp>>>;
  readonly _not?: Maybe<Quest_Skill_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Quest_Skill_Bool_Exp>>>;
  readonly quest?: Maybe<Quest_Bool_Exp>;
  readonly quest_id?: Maybe<Uuid_Comparison_Exp>;
  readonly skill?: Maybe<Skill_Bool_Exp>;
  readonly skill_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "quest_skill" */
export enum Quest_Skill_Constraint {
  /** unique or primary key constraint */
  QuestSkillPkey = 'quest_skill_pkey'
}

/** input type for inserting data into table "quest_skill" */
export type Quest_Skill_Insert_Input = {
  readonly quest?: Maybe<Quest_Obj_Rel_Insert_Input>;
  readonly quest_id?: Maybe<Scalars['uuid']>;
  readonly skill?: Maybe<Skill_Obj_Rel_Insert_Input>;
  readonly skill_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Quest_Skill_Max_Fields = {
  readonly __typename?: 'quest_skill_max_fields';
  readonly quest_id?: Maybe<Scalars['uuid']>;
  readonly skill_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "quest_skill" */
export type Quest_Skill_Max_Order_By = {
  readonly quest_id?: Maybe<Order_By>;
  readonly skill_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Quest_Skill_Min_Fields = {
  readonly __typename?: 'quest_skill_min_fields';
  readonly quest_id?: Maybe<Scalars['uuid']>;
  readonly skill_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "quest_skill" */
export type Quest_Skill_Min_Order_By = {
  readonly quest_id?: Maybe<Order_By>;
  readonly skill_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "quest_skill" */
export type Quest_Skill_Mutation_Response = {
  readonly __typename?: 'quest_skill_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Quest_Skill>;
};

/** input type for inserting object relation for remote table "quest_skill" */
export type Quest_Skill_Obj_Rel_Insert_Input = {
  readonly data: Quest_Skill_Insert_Input;
  readonly on_conflict?: Maybe<Quest_Skill_On_Conflict>;
};

/** on conflict condition type for table "quest_skill" */
export type Quest_Skill_On_Conflict = {
  readonly constraint: Quest_Skill_Constraint;
  readonly update_columns: ReadonlyArray<Quest_Skill_Update_Column>;
  readonly where?: Maybe<Quest_Skill_Bool_Exp>;
};

/** ordering options when selecting data from "quest_skill" */
export type Quest_Skill_Order_By = {
  readonly quest?: Maybe<Quest_Order_By>;
  readonly quest_id?: Maybe<Order_By>;
  readonly skill?: Maybe<Skill_Order_By>;
  readonly skill_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "quest_skill" */
export type Quest_Skill_Pk_Columns_Input = {
  readonly quest_id: Scalars['uuid'];
  readonly skill_id: Scalars['uuid'];
};

/** select columns of table "quest_skill" */
export enum Quest_Skill_Select_Column {
  /** column name */
  QuestId = 'quest_id',
  /** column name */
  SkillId = 'skill_id'
}

/** input type for updating data in table "quest_skill" */
export type Quest_Skill_Set_Input = {
  readonly quest_id?: Maybe<Scalars['uuid']>;
  readonly skill_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "quest_skill" */
export enum Quest_Skill_Update_Column {
  /** column name */
  QuestId = 'quest_id',
  /** column name */
  SkillId = 'skill_id'
}

/** aggregate stddev on columns */
export type Quest_Stddev_Fields = {
  readonly __typename?: 'quest_stddev_fields';
  readonly cooldown?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "quest" */
export type Quest_Stddev_Order_By = {
  readonly cooldown?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Quest_Stddev_Pop_Fields = {
  readonly __typename?: 'quest_stddev_pop_fields';
  readonly cooldown?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "quest" */
export type Quest_Stddev_Pop_Order_By = {
  readonly cooldown?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Quest_Stddev_Samp_Fields = {
  readonly __typename?: 'quest_stddev_samp_fields';
  readonly cooldown?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "quest" */
export type Quest_Stddev_Samp_Order_By = {
  readonly cooldown?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Quest_Sum_Fields = {
  readonly __typename?: 'quest_sum_fields';
  readonly cooldown?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "quest" */
export type Quest_Sum_Order_By = {
  readonly cooldown?: Maybe<Order_By>;
};

/** update columns of table "quest" */
export enum Quest_Update_Column {
  /** column name */
  Cooldown = 'cooldown',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedByPlayerId = 'created_by_player_id',
  /** column name */
  Description = 'description',
  /** column name */
  ExternalLink = 'external_link',
  /** column name */
  GuildId = 'guild_id',
  /** column name */
  Id = 'id',
  /** column name */
  Repetition = 'repetition',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Quest_Var_Pop_Fields = {
  readonly __typename?: 'quest_var_pop_fields';
  readonly cooldown?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "quest" */
export type Quest_Var_Pop_Order_By = {
  readonly cooldown?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Quest_Var_Samp_Fields = {
  readonly __typename?: 'quest_var_samp_fields';
  readonly cooldown?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "quest" */
export type Quest_Var_Samp_Order_By = {
  readonly cooldown?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Quest_Variance_Fields = {
  readonly __typename?: 'quest_variance_fields';
  readonly cooldown?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "quest" */
export type Quest_Variance_Order_By = {
  readonly cooldown?: Maybe<Order_By>;
};

/** columns and relationships of "QuestCompletionStatus" */
export type QuestCompletionStatus = {
  readonly __typename?: 'QuestCompletionStatus';
  /** An array relationship */
  readonly quest_completions: ReadonlyArray<Quest_Completion>;
  /** An aggregated array relationship */
  readonly quest_completions_aggregate: Quest_Completion_Aggregate;
  readonly status: Scalars['String'];
};


/** columns and relationships of "QuestCompletionStatus" */
export type QuestCompletionStatusQuest_CompletionsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** columns and relationships of "QuestCompletionStatus" */
export type QuestCompletionStatusQuest_Completions_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};

export enum QuestCompletionStatus_ActionEnum {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED'
}

/** aggregated selection of "QuestCompletionStatus" */
export type QuestCompletionStatus_Aggregate = {
  readonly __typename?: 'QuestCompletionStatus_aggregate';
  readonly aggregate?: Maybe<QuestCompletionStatus_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<QuestCompletionStatus>;
};

/** aggregate fields of "QuestCompletionStatus" */
export type QuestCompletionStatus_Aggregate_Fields = {
  readonly __typename?: 'QuestCompletionStatus_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<QuestCompletionStatus_Max_Fields>;
  readonly min?: Maybe<QuestCompletionStatus_Min_Fields>;
};


/** aggregate fields of "QuestCompletionStatus" */
export type QuestCompletionStatus_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<QuestCompletionStatus_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "QuestCompletionStatus" */
export type QuestCompletionStatus_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<QuestCompletionStatus_Max_Order_By>;
  readonly min?: Maybe<QuestCompletionStatus_Min_Order_By>;
};

/** input type for inserting array relation for remote table "QuestCompletionStatus" */
export type QuestCompletionStatus_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<QuestCompletionStatus_Insert_Input>;
  readonly on_conflict?: Maybe<QuestCompletionStatus_On_Conflict>;
};

/** Boolean expression to filter rows from the table "QuestCompletionStatus". All fields are combined with a logical 'AND'. */
export type QuestCompletionStatus_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<QuestCompletionStatus_Bool_Exp>>>;
  readonly _not?: Maybe<QuestCompletionStatus_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<QuestCompletionStatus_Bool_Exp>>>;
  readonly quest_completions?: Maybe<Quest_Completion_Bool_Exp>;
  readonly status?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "QuestCompletionStatus" */
export enum QuestCompletionStatus_Constraint {
  /** unique or primary key constraint */
  QuestCompletionStatusPkey = 'QuestCompletionStatus_pkey'
}

export enum QuestCompletionStatus_Enum {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

/** expression to compare columns of type QuestCompletionStatus_enum. All fields are combined with logical 'AND'. */
export type QuestCompletionStatus_Enum_Comparison_Exp = {
  readonly _eq?: Maybe<QuestCompletionStatus_Enum>;
  readonly _in?: Maybe<ReadonlyArray<QuestCompletionStatus_Enum>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _neq?: Maybe<QuestCompletionStatus_Enum>;
  readonly _nin?: Maybe<ReadonlyArray<QuestCompletionStatus_Enum>>;
};

/** input type for inserting data into table "QuestCompletionStatus" */
export type QuestCompletionStatus_Insert_Input = {
  readonly quest_completions?: Maybe<Quest_Completion_Arr_Rel_Insert_Input>;
  readonly status?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type QuestCompletionStatus_Max_Fields = {
  readonly __typename?: 'QuestCompletionStatus_max_fields';
  readonly status?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "QuestCompletionStatus" */
export type QuestCompletionStatus_Max_Order_By = {
  readonly status?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type QuestCompletionStatus_Min_Fields = {
  readonly __typename?: 'QuestCompletionStatus_min_fields';
  readonly status?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "QuestCompletionStatus" */
export type QuestCompletionStatus_Min_Order_By = {
  readonly status?: Maybe<Order_By>;
};

/** response of any mutation on the table "QuestCompletionStatus" */
export type QuestCompletionStatus_Mutation_Response = {
  readonly __typename?: 'QuestCompletionStatus_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<QuestCompletionStatus>;
};

/** input type for inserting object relation for remote table "QuestCompletionStatus" */
export type QuestCompletionStatus_Obj_Rel_Insert_Input = {
  readonly data: QuestCompletionStatus_Insert_Input;
  readonly on_conflict?: Maybe<QuestCompletionStatus_On_Conflict>;
};

/** on conflict condition type for table "QuestCompletionStatus" */
export type QuestCompletionStatus_On_Conflict = {
  readonly constraint: QuestCompletionStatus_Constraint;
  readonly update_columns: ReadonlyArray<QuestCompletionStatus_Update_Column>;
  readonly where?: Maybe<QuestCompletionStatus_Bool_Exp>;
};

/** ordering options when selecting data from "QuestCompletionStatus" */
export type QuestCompletionStatus_Order_By = {
  readonly quest_completions_aggregate?: Maybe<Quest_Completion_Aggregate_Order_By>;
  readonly status?: Maybe<Order_By>;
};

/** primary key columns input for table: "QuestCompletionStatus" */
export type QuestCompletionStatus_Pk_Columns_Input = {
  readonly status: Scalars['String'];
};

/** select columns of table "QuestCompletionStatus" */
export enum QuestCompletionStatus_Select_Column {
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "QuestCompletionStatus" */
export type QuestCompletionStatus_Set_Input = {
  readonly status?: Maybe<Scalars['String']>;
};

/** update columns of table "QuestCompletionStatus" */
export enum QuestCompletionStatus_Update_Column {
  /** column name */
  Status = 'status'
}

/** columns and relationships of "QuestRepetition" */
export type QuestRepetition = {
  readonly __typename?: 'QuestRepetition';
  /** An array relationship */
  readonly quests: ReadonlyArray<Quest>;
  /** An aggregated array relationship */
  readonly quests_aggregate: Quest_Aggregate;
  readonly repetition: Scalars['String'];
};


/** columns and relationships of "QuestRepetition" */
export type QuestRepetitionQuestsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** columns and relationships of "QuestRepetition" */
export type QuestRepetitionQuests_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};

export enum QuestRepetition_ActionEnum {
  Personal = 'PERSONAL',
  Recurring = 'RECURRING',
  Unique = 'UNIQUE'
}

/** aggregated selection of "QuestRepetition" */
export type QuestRepetition_Aggregate = {
  readonly __typename?: 'QuestRepetition_aggregate';
  readonly aggregate?: Maybe<QuestRepetition_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<QuestRepetition>;
};

/** aggregate fields of "QuestRepetition" */
export type QuestRepetition_Aggregate_Fields = {
  readonly __typename?: 'QuestRepetition_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<QuestRepetition_Max_Fields>;
  readonly min?: Maybe<QuestRepetition_Min_Fields>;
};


/** aggregate fields of "QuestRepetition" */
export type QuestRepetition_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<QuestRepetition_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "QuestRepetition" */
export type QuestRepetition_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<QuestRepetition_Max_Order_By>;
  readonly min?: Maybe<QuestRepetition_Min_Order_By>;
};

/** input type for inserting array relation for remote table "QuestRepetition" */
export type QuestRepetition_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<QuestRepetition_Insert_Input>;
  readonly on_conflict?: Maybe<QuestRepetition_On_Conflict>;
};

/** Boolean expression to filter rows from the table "QuestRepetition". All fields are combined with a logical 'AND'. */
export type QuestRepetition_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<QuestRepetition_Bool_Exp>>>;
  readonly _not?: Maybe<QuestRepetition_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<QuestRepetition_Bool_Exp>>>;
  readonly quests?: Maybe<Quest_Bool_Exp>;
  readonly repetition?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "QuestRepetition" */
export enum QuestRepetition_Constraint {
  /** unique or primary key constraint */
  QuestRepetitionPkey = 'QuestRepetition_pkey'
}

export enum QuestRepetition_Enum {
  Personal = 'PERSONAL',
  Recurring = 'RECURRING',
  Unique = 'UNIQUE'
}

/** expression to compare columns of type QuestRepetition_enum. All fields are combined with logical 'AND'. */
export type QuestRepetition_Enum_Comparison_Exp = {
  readonly _eq?: Maybe<QuestRepetition_Enum>;
  readonly _in?: Maybe<ReadonlyArray<QuestRepetition_Enum>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _neq?: Maybe<QuestRepetition_Enum>;
  readonly _nin?: Maybe<ReadonlyArray<QuestRepetition_Enum>>;
};

/** input type for inserting data into table "QuestRepetition" */
export type QuestRepetition_Insert_Input = {
  readonly quests?: Maybe<Quest_Arr_Rel_Insert_Input>;
  readonly repetition?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type QuestRepetition_Max_Fields = {
  readonly __typename?: 'QuestRepetition_max_fields';
  readonly repetition?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "QuestRepetition" */
export type QuestRepetition_Max_Order_By = {
  readonly repetition?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type QuestRepetition_Min_Fields = {
  readonly __typename?: 'QuestRepetition_min_fields';
  readonly repetition?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "QuestRepetition" */
export type QuestRepetition_Min_Order_By = {
  readonly repetition?: Maybe<Order_By>;
};

/** response of any mutation on the table "QuestRepetition" */
export type QuestRepetition_Mutation_Response = {
  readonly __typename?: 'QuestRepetition_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<QuestRepetition>;
};

/** input type for inserting object relation for remote table "QuestRepetition" */
export type QuestRepetition_Obj_Rel_Insert_Input = {
  readonly data: QuestRepetition_Insert_Input;
  readonly on_conflict?: Maybe<QuestRepetition_On_Conflict>;
};

/** on conflict condition type for table "QuestRepetition" */
export type QuestRepetition_On_Conflict = {
  readonly constraint: QuestRepetition_Constraint;
  readonly update_columns: ReadonlyArray<QuestRepetition_Update_Column>;
  readonly where?: Maybe<QuestRepetition_Bool_Exp>;
};

/** ordering options when selecting data from "QuestRepetition" */
export type QuestRepetition_Order_By = {
  readonly quests_aggregate?: Maybe<Quest_Aggregate_Order_By>;
  readonly repetition?: Maybe<Order_By>;
};

/** primary key columns input for table: "QuestRepetition" */
export type QuestRepetition_Pk_Columns_Input = {
  readonly repetition: Scalars['String'];
};

/** select columns of table "QuestRepetition" */
export enum QuestRepetition_Select_Column {
  /** column name */
  Repetition = 'repetition'
}

/** input type for updating data in table "QuestRepetition" */
export type QuestRepetition_Set_Input = {
  readonly repetition?: Maybe<Scalars['String']>;
};

/** update columns of table "QuestRepetition" */
export enum QuestRepetition_Update_Column {
  /** column name */
  Repetition = 'repetition'
}

/** columns and relationships of "QuestStatus" */
export type QuestStatus = {
  readonly __typename?: 'QuestStatus';
  /** An array relationship */
  readonly quests: ReadonlyArray<Quest>;
  /** An aggregated array relationship */
  readonly quests_aggregate: Quest_Aggregate;
  readonly status: Scalars['String'];
};


/** columns and relationships of "QuestStatus" */
export type QuestStatusQuestsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** columns and relationships of "QuestStatus" */
export type QuestStatusQuests_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};

/** aggregated selection of "QuestStatus" */
export type QuestStatus_Aggregate = {
  readonly __typename?: 'QuestStatus_aggregate';
  readonly aggregate?: Maybe<QuestStatus_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<QuestStatus>;
};

/** aggregate fields of "QuestStatus" */
export type QuestStatus_Aggregate_Fields = {
  readonly __typename?: 'QuestStatus_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<QuestStatus_Max_Fields>;
  readonly min?: Maybe<QuestStatus_Min_Fields>;
};


/** aggregate fields of "QuestStatus" */
export type QuestStatus_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<QuestStatus_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "QuestStatus" */
export type QuestStatus_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<QuestStatus_Max_Order_By>;
  readonly min?: Maybe<QuestStatus_Min_Order_By>;
};

/** input type for inserting array relation for remote table "QuestStatus" */
export type QuestStatus_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<QuestStatus_Insert_Input>;
  readonly on_conflict?: Maybe<QuestStatus_On_Conflict>;
};

/** Boolean expression to filter rows from the table "QuestStatus". All fields are combined with a logical 'AND'. */
export type QuestStatus_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<QuestStatus_Bool_Exp>>>;
  readonly _not?: Maybe<QuestStatus_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<QuestStatus_Bool_Exp>>>;
  readonly quests?: Maybe<Quest_Bool_Exp>;
  readonly status?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "QuestStatus" */
export enum QuestStatus_Constraint {
  /** unique or primary key constraint */
  QuestStatusPkey = 'QuestStatus_pkey'
}

export enum QuestStatus_Enum {
  Closed = 'CLOSED',
  Open = 'OPEN'
}

/** expression to compare columns of type QuestStatus_enum. All fields are combined with logical 'AND'. */
export type QuestStatus_Enum_Comparison_Exp = {
  readonly _eq?: Maybe<QuestStatus_Enum>;
  readonly _in?: Maybe<ReadonlyArray<QuestStatus_Enum>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _neq?: Maybe<QuestStatus_Enum>;
  readonly _nin?: Maybe<ReadonlyArray<QuestStatus_Enum>>;
};

/** input type for inserting data into table "QuestStatus" */
export type QuestStatus_Insert_Input = {
  readonly quests?: Maybe<Quest_Arr_Rel_Insert_Input>;
  readonly status?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type QuestStatus_Max_Fields = {
  readonly __typename?: 'QuestStatus_max_fields';
  readonly status?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "QuestStatus" */
export type QuestStatus_Max_Order_By = {
  readonly status?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type QuestStatus_Min_Fields = {
  readonly __typename?: 'QuestStatus_min_fields';
  readonly status?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "QuestStatus" */
export type QuestStatus_Min_Order_By = {
  readonly status?: Maybe<Order_By>;
};

/** response of any mutation on the table "QuestStatus" */
export type QuestStatus_Mutation_Response = {
  readonly __typename?: 'QuestStatus_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<QuestStatus>;
};

/** input type for inserting object relation for remote table "QuestStatus" */
export type QuestStatus_Obj_Rel_Insert_Input = {
  readonly data: QuestStatus_Insert_Input;
  readonly on_conflict?: Maybe<QuestStatus_On_Conflict>;
};

/** on conflict condition type for table "QuestStatus" */
export type QuestStatus_On_Conflict = {
  readonly constraint: QuestStatus_Constraint;
  readonly update_columns: ReadonlyArray<QuestStatus_Update_Column>;
  readonly where?: Maybe<QuestStatus_Bool_Exp>;
};

/** ordering options when selecting data from "QuestStatus" */
export type QuestStatus_Order_By = {
  readonly quests_aggregate?: Maybe<Quest_Aggregate_Order_By>;
  readonly status?: Maybe<Order_By>;
};

/** primary key columns input for table: "QuestStatus" */
export type QuestStatus_Pk_Columns_Input = {
  readonly status: Scalars['String'];
};

/** select columns of table "QuestStatus" */
export enum QuestStatus_Select_Column {
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "QuestStatus" */
export type QuestStatus_Set_Input = {
  readonly status?: Maybe<Scalars['String']>;
};

/** update columns of table "QuestStatus" */
export enum QuestStatus_Update_Column {
  /** column name */
  Status = 'status'
}

/** columns and relationships of "skill" */
export type Skill = {
  readonly __typename?: 'skill';
  /** An array relationship */
  readonly Player_Skills: ReadonlyArray<Player_Skill>;
  /** An aggregated array relationship */
  readonly Player_Skills_aggregate: Player_Skill_Aggregate;
  readonly category: SkillCategory_Enum;
  readonly id: Scalars['uuid'];
  readonly name: Scalars['String'];
  /** An array relationship */
  readonly quest_skills: ReadonlyArray<Quest_Skill>;
  /** An aggregated array relationship */
  readonly quest_skills_aggregate: Quest_Skill_Aggregate;
};


/** columns and relationships of "skill" */
export type SkillPlayer_SkillsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** columns and relationships of "skill" */
export type SkillPlayer_Skills_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** columns and relationships of "skill" */
export type SkillQuest_SkillsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};


/** columns and relationships of "skill" */
export type SkillQuest_Skills_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};

/** aggregated selection of "skill" */
export type Skill_Aggregate = {
  readonly __typename?: 'skill_aggregate';
  readonly aggregate?: Maybe<Skill_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Skill>;
};

/** aggregate fields of "skill" */
export type Skill_Aggregate_Fields = {
  readonly __typename?: 'skill_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Skill_Max_Fields>;
  readonly min?: Maybe<Skill_Min_Fields>;
};


/** aggregate fields of "skill" */
export type Skill_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Skill_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "skill" */
export type Skill_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Skill_Max_Order_By>;
  readonly min?: Maybe<Skill_Min_Order_By>;
};

/** input type for inserting array relation for remote table "skill" */
export type Skill_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Skill_Insert_Input>;
  readonly on_conflict?: Maybe<Skill_On_Conflict>;
};

/** Boolean expression to filter rows from the table "skill". All fields are combined with a logical 'AND'. */
export type Skill_Bool_Exp = {
  readonly Player_Skills?: Maybe<Player_Skill_Bool_Exp>;
  readonly _and?: Maybe<ReadonlyArray<Maybe<Skill_Bool_Exp>>>;
  readonly _not?: Maybe<Skill_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Skill_Bool_Exp>>>;
  readonly category?: Maybe<SkillCategory_Enum_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly name?: Maybe<String_Comparison_Exp>;
  readonly quest_skills?: Maybe<Quest_Skill_Bool_Exp>;
};

/** unique or primary key constraints on table "skill" */
export enum Skill_Constraint {
  /** unique or primary key constraint */
  SkillPkey = 'Skill_pkey'
}

/** input type for inserting data into table "skill" */
export type Skill_Insert_Input = {
  readonly Player_Skills?: Maybe<Player_Skill_Arr_Rel_Insert_Input>;
  readonly category?: Maybe<SkillCategory_Enum>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly quest_skills?: Maybe<Quest_Skill_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Skill_Max_Fields = {
  readonly __typename?: 'skill_max_fields';
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "skill" */
export type Skill_Max_Order_By = {
  readonly id?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Skill_Min_Fields = {
  readonly __typename?: 'skill_min_fields';
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "skill" */
export type Skill_Min_Order_By = {
  readonly id?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** response of any mutation on the table "skill" */
export type Skill_Mutation_Response = {
  readonly __typename?: 'skill_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Skill>;
};

/** input type for inserting object relation for remote table "skill" */
export type Skill_Obj_Rel_Insert_Input = {
  readonly data: Skill_Insert_Input;
  readonly on_conflict?: Maybe<Skill_On_Conflict>;
};

/** on conflict condition type for table "skill" */
export type Skill_On_Conflict = {
  readonly constraint: Skill_Constraint;
  readonly update_columns: ReadonlyArray<Skill_Update_Column>;
  readonly where?: Maybe<Skill_Bool_Exp>;
};

/** ordering options when selecting data from "skill" */
export type Skill_Order_By = {
  readonly Player_Skills_aggregate?: Maybe<Player_Skill_Aggregate_Order_By>;
  readonly category?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly quest_skills_aggregate?: Maybe<Quest_Skill_Aggregate_Order_By>;
};

/** primary key columns input for table: "skill" */
export type Skill_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "skill" */
export enum Skill_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "skill" */
export type Skill_Set_Input = {
  readonly category?: Maybe<SkillCategory_Enum>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** update columns of table "skill" */
export enum Skill_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "SkillCategory" */
export type SkillCategory = {
  readonly __typename?: 'SkillCategory';
  readonly name: Scalars['String'];
};

/** aggregated selection of "SkillCategory" */
export type SkillCategory_Aggregate = {
  readonly __typename?: 'SkillCategory_aggregate';
  readonly aggregate?: Maybe<SkillCategory_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<SkillCategory>;
};

/** aggregate fields of "SkillCategory" */
export type SkillCategory_Aggregate_Fields = {
  readonly __typename?: 'SkillCategory_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<SkillCategory_Max_Fields>;
  readonly min?: Maybe<SkillCategory_Min_Fields>;
};


/** aggregate fields of "SkillCategory" */
export type SkillCategory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<SkillCategory_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "SkillCategory" */
export type SkillCategory_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<SkillCategory_Max_Order_By>;
  readonly min?: Maybe<SkillCategory_Min_Order_By>;
};

/** input type for inserting array relation for remote table "SkillCategory" */
export type SkillCategory_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<SkillCategory_Insert_Input>;
  readonly on_conflict?: Maybe<SkillCategory_On_Conflict>;
};

/** Boolean expression to filter rows from the table "SkillCategory". All fields are combined with a logical 'AND'. */
export type SkillCategory_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<SkillCategory_Bool_Exp>>>;
  readonly _not?: Maybe<SkillCategory_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<SkillCategory_Bool_Exp>>>;
  readonly name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "SkillCategory" */
export enum SkillCategory_Constraint {
  /** unique or primary key constraint */
  SkillCategoryPkey = 'SkillCategory_pkey'
}

export enum SkillCategory_Enum {
  Community = 'COMMUNITY',
  Design = 'DESIGN',
  Dev = 'DEV',
  Engineering = 'ENGINEERING',
  Strategy = 'STRATEGY',
  Technologies = 'TECHNOLOGIES'
}

/** expression to compare columns of type SkillCategory_enum. All fields are combined with logical 'AND'. */
export type SkillCategory_Enum_Comparison_Exp = {
  readonly _eq?: Maybe<SkillCategory_Enum>;
  readonly _in?: Maybe<ReadonlyArray<SkillCategory_Enum>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _neq?: Maybe<SkillCategory_Enum>;
  readonly _nin?: Maybe<ReadonlyArray<SkillCategory_Enum>>;
};

/** input type for inserting data into table "SkillCategory" */
export type SkillCategory_Insert_Input = {
  readonly name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type SkillCategory_Max_Fields = {
  readonly __typename?: 'SkillCategory_max_fields';
  readonly name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "SkillCategory" */
export type SkillCategory_Max_Order_By = {
  readonly name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type SkillCategory_Min_Fields = {
  readonly __typename?: 'SkillCategory_min_fields';
  readonly name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "SkillCategory" */
export type SkillCategory_Min_Order_By = {
  readonly name?: Maybe<Order_By>;
};

/** response of any mutation on the table "SkillCategory" */
export type SkillCategory_Mutation_Response = {
  readonly __typename?: 'SkillCategory_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<SkillCategory>;
};

/** input type for inserting object relation for remote table "SkillCategory" */
export type SkillCategory_Obj_Rel_Insert_Input = {
  readonly data: SkillCategory_Insert_Input;
  readonly on_conflict?: Maybe<SkillCategory_On_Conflict>;
};

/** on conflict condition type for table "SkillCategory" */
export type SkillCategory_On_Conflict = {
  readonly constraint: SkillCategory_Constraint;
  readonly update_columns: ReadonlyArray<SkillCategory_Update_Column>;
  readonly where?: Maybe<SkillCategory_Bool_Exp>;
};

/** ordering options when selecting data from "SkillCategory" */
export type SkillCategory_Order_By = {
  readonly name?: Maybe<Order_By>;
};

/** primary key columns input for table: "SkillCategory" */
export type SkillCategory_Pk_Columns_Input = {
  readonly name: Scalars['String'];
};

/** select columns of table "SkillCategory" */
export enum SkillCategory_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "SkillCategory" */
export type SkillCategory_Set_Input = {
  readonly name?: Maybe<Scalars['String']>;
};

/** update columns of table "SkillCategory" */
export enum SkillCategory_Update_Column {
  /** column name */
  Name = 'name'
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars['String']>;
  readonly _gt?: Maybe<Scalars['String']>;
  readonly _gte?: Maybe<Scalars['String']>;
  readonly _ilike?: Maybe<Scalars['String']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _like?: Maybe<Scalars['String']>;
  readonly _lt?: Maybe<Scalars['String']>;
  readonly _lte?: Maybe<Scalars['String']>;
  readonly _neq?: Maybe<Scalars['String']>;
  readonly _nilike?: Maybe<Scalars['String']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly _nlike?: Maybe<Scalars['String']>;
  readonly _nsimilar?: Maybe<Scalars['String']>;
  readonly _similar?: Maybe<Scalars['String']>;
};

/** subscription root */
export type Subscription_Root = {
  readonly __typename?: 'subscription_root';
  /** fetch data from the table: "AccountType" */
  readonly AccountType: ReadonlyArray<AccountType>;
  /** fetch aggregated fields from the table: "AccountType" */
  readonly AccountType_aggregate: AccountType_Aggregate;
  /** fetch data from the table: "AccountType" using primary key columns */
  readonly AccountType_by_pk?: Maybe<AccountType>;
  /** fetch data from the table: "ColorAspect" */
  readonly ColorAspect: ReadonlyArray<ColorAspect>;
  /** fetch aggregated fields from the table: "ColorAspect" */
  readonly ColorAspect_aggregate: ColorAspect_Aggregate;
  /** fetch data from the table: "ColorAspect" using primary key columns */
  readonly ColorAspect_by_pk?: Maybe<ColorAspect>;
  /** fetch data from the table: "GuildPosition" */
  readonly GuildPosition: ReadonlyArray<GuildPosition>;
  /** fetch aggregated fields from the table: "GuildPosition" */
  readonly GuildPosition_aggregate: GuildPosition_Aggregate;
  /** fetch data from the table: "GuildPosition" using primary key columns */
  readonly GuildPosition_by_pk?: Maybe<GuildPosition>;
  /** fetch data from the table: "GuildStatus" */
  readonly GuildStatus: ReadonlyArray<GuildStatus>;
  /** fetch aggregated fields from the table: "GuildStatus" */
  readonly GuildStatus_aggregate: GuildStatus_Aggregate;
  /** fetch data from the table: "GuildStatus" using primary key columns */
  readonly GuildStatus_by_pk?: Maybe<GuildStatus>;
  /** fetch data from the table: "GuildType" */
  readonly GuildType: ReadonlyArray<GuildType>;
  /** fetch aggregated fields from the table: "GuildType" */
  readonly GuildType_aggregate: GuildType_Aggregate;
  /** fetch data from the table: "GuildType" using primary key columns */
  readonly GuildType_by_pk?: Maybe<GuildType>;
  /** fetch data from the table: "PlayerRank" */
  readonly PlayerRank: ReadonlyArray<PlayerRank>;
  /** fetch aggregated fields from the table: "PlayerRank" */
  readonly PlayerRank_aggregate: PlayerRank_Aggregate;
  /** fetch data from the table: "PlayerRank" using primary key columns */
  readonly PlayerRank_by_pk?: Maybe<PlayerRank>;
  /** fetch data from the table: "QuestCompletionStatus" */
  readonly QuestCompletionStatus: ReadonlyArray<QuestCompletionStatus>;
  /** fetch aggregated fields from the table: "QuestCompletionStatus" */
  readonly QuestCompletionStatus_aggregate: QuestCompletionStatus_Aggregate;
  /** fetch data from the table: "QuestCompletionStatus" using primary key columns */
  readonly QuestCompletionStatus_by_pk?: Maybe<QuestCompletionStatus>;
  /** fetch data from the table: "QuestRepetition" */
  readonly QuestRepetition: ReadonlyArray<QuestRepetition>;
  /** fetch aggregated fields from the table: "QuestRepetition" */
  readonly QuestRepetition_aggregate: QuestRepetition_Aggregate;
  /** fetch data from the table: "QuestRepetition" using primary key columns */
  readonly QuestRepetition_by_pk?: Maybe<QuestRepetition>;
  /** fetch data from the table: "QuestStatus" */
  readonly QuestStatus: ReadonlyArray<QuestStatus>;
  /** fetch aggregated fields from the table: "QuestStatus" */
  readonly QuestStatus_aggregate: QuestStatus_Aggregate;
  /** fetch data from the table: "QuestStatus" using primary key columns */
  readonly QuestStatus_by_pk?: Maybe<QuestStatus>;
  /** fetch data from the table: "SkillCategory" */
  readonly SkillCategory: ReadonlyArray<SkillCategory>;
  /** fetch aggregated fields from the table: "SkillCategory" */
  readonly SkillCategory_aggregate: SkillCategory_Aggregate;
  /** fetch data from the table: "SkillCategory" using primary key columns */
  readonly SkillCategory_by_pk?: Maybe<SkillCategory>;
  /** fetch data from the table: "guild" */
  readonly guild: ReadonlyArray<Guild>;
  /** fetch data from the table: "guild_account" */
  readonly guild_account: ReadonlyArray<Guild_Account>;
  /** fetch aggregated fields from the table: "guild_account" */
  readonly guild_account_aggregate: Guild_Account_Aggregate;
  /** fetch data from the table: "guild_account" using primary key columns */
  readonly guild_account_by_pk?: Maybe<Guild_Account>;
  /** fetch aggregated fields from the table: "guild" */
  readonly guild_aggregate: Guild_Aggregate;
  /** fetch data from the table: "guild" using primary key columns */
  readonly guild_by_pk?: Maybe<Guild>;
  /** fetch data from the table: "guild_player" */
  readonly guild_player: ReadonlyArray<Guild_Player>;
  /** fetch aggregated fields from the table: "guild_player" */
  readonly guild_player_aggregate: Guild_Player_Aggregate;
  /** fetch data from the table: "guild_player" using primary key columns */
  readonly guild_player_by_pk?: Maybe<Guild_Player>;
  /** fetch data from the table: "me" */
  readonly me: ReadonlyArray<Me>;
  /** fetch aggregated fields from the table: "me" */
  readonly me_aggregate: Me_Aggregate;
  /** fetch data from the table: "player" */
  readonly player: ReadonlyArray<Player>;
  /** fetch data from the table: "player_account" */
  readonly player_account: ReadonlyArray<Player_Account>;
  /** fetch aggregated fields from the table: "player_account" */
  readonly player_account_aggregate: Player_Account_Aggregate;
  /** fetch aggregated fields from the table: "player" */
  readonly player_aggregate: Player_Aggregate;
  /** fetch data from the table: "player" using primary key columns */
  readonly player_by_pk?: Maybe<Player>;
  /** fetch data from the table: "player_skill" */
  readonly player_skill: ReadonlyArray<Player_Skill>;
  /** fetch aggregated fields from the table: "player_skill" */
  readonly player_skill_aggregate: Player_Skill_Aggregate;
  /** fetch data from the table: "player_skill" using primary key columns */
  readonly player_skill_by_pk?: Maybe<Player_Skill>;
  /** fetch data from the table: "player_type" */
  readonly player_type: ReadonlyArray<Player_Type>;
  /** fetch aggregated fields from the table: "player_type" */
  readonly player_type_aggregate: Player_Type_Aggregate;
  /** fetch data from the table: "player_type" using primary key columns */
  readonly player_type_by_pk?: Maybe<Player_Type>;
  /** fetch data from the table: "profile_cache" */
  readonly profile_cache: ReadonlyArray<Profile_Cache>;
  /** fetch aggregated fields from the table: "profile_cache" */
  readonly profile_cache_aggregate: Profile_Cache_Aggregate;
  /** fetch data from the table: "profile_cache" using primary key columns */
  readonly profile_cache_by_pk?: Maybe<Profile_Cache>;
  /** fetch data from the table: "quest" */
  readonly quest: ReadonlyArray<Quest>;
  /** fetch aggregated fields from the table: "quest" */
  readonly quest_aggregate: Quest_Aggregate;
  /** fetch data from the table: "quest" using primary key columns */
  readonly quest_by_pk?: Maybe<Quest>;
  /** fetch data from the table: "quest_completion" */
  readonly quest_completion: ReadonlyArray<Quest_Completion>;
  /** fetch aggregated fields from the table: "quest_completion" */
  readonly quest_completion_aggregate: Quest_Completion_Aggregate;
  /** fetch data from the table: "quest_completion" using primary key columns */
  readonly quest_completion_by_pk?: Maybe<Quest_Completion>;
  /** fetch data from the table: "quest_skill" */
  readonly quest_skill: ReadonlyArray<Quest_Skill>;
  /** fetch aggregated fields from the table: "quest_skill" */
  readonly quest_skill_aggregate: Quest_Skill_Aggregate;
  /** fetch data from the table: "quest_skill" using primary key columns */
  readonly quest_skill_by_pk?: Maybe<Quest_Skill>;
  /** fetch data from the table: "skill" */
  readonly skill: ReadonlyArray<Skill>;
  /** fetch aggregated fields from the table: "skill" */
  readonly skill_aggregate: Skill_Aggregate;
  /** fetch data from the table: "skill" using primary key columns */
  readonly skill_by_pk?: Maybe<Skill>;
};


/** subscription root */
export type Subscription_RootAccountTypeArgs = {
  distinct_on?: Maybe<ReadonlyArray<AccountType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<AccountType_Order_By>>;
  where?: Maybe<AccountType_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccountType_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<AccountType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<AccountType_Order_By>>;
  where?: Maybe<AccountType_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccountType_By_PkArgs = {
  type: Scalars['String'];
};


/** subscription root */
export type Subscription_RootColorAspectArgs = {
  distinct_on?: Maybe<ReadonlyArray<ColorAspect_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ColorAspect_Order_By>>;
  where?: Maybe<ColorAspect_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootColorAspect_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ColorAspect_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ColorAspect_Order_By>>;
  where?: Maybe<ColorAspect_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootColorAspect_By_PkArgs = {
  mask: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootGuildPositionArgs = {
  distinct_on?: Maybe<ReadonlyArray<GuildPosition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GuildPosition_Order_By>>;
  where?: Maybe<GuildPosition_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuildPosition_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GuildPosition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GuildPosition_Order_By>>;
  where?: Maybe<GuildPosition_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuildPosition_By_PkArgs = {
  position: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGuildStatusArgs = {
  distinct_on?: Maybe<ReadonlyArray<GuildStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GuildStatus_Order_By>>;
  where?: Maybe<GuildStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuildStatus_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GuildStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GuildStatus_Order_By>>;
  where?: Maybe<GuildStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuildStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGuildTypeArgs = {
  distinct_on?: Maybe<ReadonlyArray<GuildType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GuildType_Order_By>>;
  where?: Maybe<GuildType_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuildType_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GuildType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GuildType_Order_By>>;
  where?: Maybe<GuildType_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuildType_By_PkArgs = {
  name: Scalars['String'];
};


/** subscription root */
export type Subscription_RootPlayerRankArgs = {
  distinct_on?: Maybe<ReadonlyArray<PlayerRank_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<PlayerRank_Order_By>>;
  where?: Maybe<PlayerRank_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayerRank_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<PlayerRank_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<PlayerRank_Order_By>>;
  where?: Maybe<PlayerRank_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayerRank_By_PkArgs = {
  rank: Scalars['String'];
};


/** subscription root */
export type Subscription_RootQuestCompletionStatusArgs = {
  distinct_on?: Maybe<ReadonlyArray<QuestCompletionStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<QuestCompletionStatus_Order_By>>;
  where?: Maybe<QuestCompletionStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestCompletionStatus_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<QuestCompletionStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<QuestCompletionStatus_Order_By>>;
  where?: Maybe<QuestCompletionStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestCompletionStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** subscription root */
export type Subscription_RootQuestRepetitionArgs = {
  distinct_on?: Maybe<ReadonlyArray<QuestRepetition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<QuestRepetition_Order_By>>;
  where?: Maybe<QuestRepetition_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestRepetition_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<QuestRepetition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<QuestRepetition_Order_By>>;
  where?: Maybe<QuestRepetition_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestRepetition_By_PkArgs = {
  repetition: Scalars['String'];
};


/** subscription root */
export type Subscription_RootQuestStatusArgs = {
  distinct_on?: Maybe<ReadonlyArray<QuestStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<QuestStatus_Order_By>>;
  where?: Maybe<QuestStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestStatus_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<QuestStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<QuestStatus_Order_By>>;
  where?: Maybe<QuestStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** subscription root */
export type Subscription_RootSkillCategoryArgs = {
  distinct_on?: Maybe<ReadonlyArray<SkillCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<SkillCategory_Order_By>>;
  where?: Maybe<SkillCategory_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSkillCategory_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<SkillCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<SkillCategory_Order_By>>;
  where?: Maybe<SkillCategory_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSkillCategory_By_PkArgs = {
  name: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGuildArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Order_By>>;
  where?: Maybe<Guild_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuild_AccountArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Account_Order_By>>;
  where?: Maybe<Guild_Account_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuild_Account_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Account_Order_By>>;
  where?: Maybe<Guild_Account_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuild_Account_By_PkArgs = {
  guild_id: Scalars['uuid'];
  type: AccountType_Enum;
};


/** subscription root */
export type Subscription_RootGuild_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Order_By>>;
  where?: Maybe<Guild_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuild_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGuild_PlayerArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuild_Player_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuild_Player_By_PkArgs = {
  guild_id: Scalars['uuid'];
  player_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootMeArgs = {
  distinct_on?: Maybe<ReadonlyArray<Me_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Me_Order_By>>;
  where?: Maybe<Me_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMe_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Me_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Me_Order_By>>;
  where?: Maybe<Me_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayerArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_AccountArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Account_Order_By>>;
  where?: Maybe<Player_Account_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_Account_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Account_Order_By>>;
  where?: Maybe<Player_Account_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPlayer_SkillArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_Skill_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_Skill_By_PkArgs = {
  player_id: Scalars['uuid'];
  skill_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPlayer_TypeArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Type_Order_By>>;
  where?: Maybe<Player_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_Type_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Player_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Player_Type_Order_By>>;
  where?: Maybe<Player_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootProfile_CacheArgs = {
  distinct_on?: Maybe<ReadonlyArray<Profile_Cache_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Profile_Cache_Order_By>>;
  where?: Maybe<Profile_Cache_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProfile_Cache_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Profile_Cache_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Profile_Cache_Order_By>>;
  where?: Maybe<Profile_Cache_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProfile_Cache_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuestArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuest_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuest_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuest_CompletionArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuest_Completion_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuest_Completion_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuest_SkillArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuest_Skill_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuest_Skill_By_PkArgs = {
  quest_id: Scalars['uuid'];
  skill_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootSkillArgs = {
  distinct_on?: Maybe<ReadonlyArray<Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Skill_Order_By>>;
  where?: Maybe<Skill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSkill_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Skill_Order_By>>;
  where?: Maybe<Skill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSkill_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars['timestamptz']>;
  readonly _gt?: Maybe<Scalars['timestamptz']>;
  readonly _gte?: Maybe<Scalars['timestamptz']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['timestamptz']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['timestamptz']>;
  readonly _lte?: Maybe<Scalars['timestamptz']>;
  readonly _neq?: Maybe<Scalars['timestamptz']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['timestamptz']>>;
};

export type TokenBalances = {
  readonly __typename?: 'TokenBalances';
  readonly id: Scalars['ID'];
  readonly pSeedBalance: Scalars['String'];
  readonly seedBalance: Scalars['String'];
};

export type UpdateBoxProfileResponse = {
  readonly __typename?: 'UpdateBoxProfileResponse';
  readonly success: Scalars['Boolean'];
  readonly updatedProfiles: ReadonlyArray<Scalars['String']>;
};

export type UpdateIdxProfileResponse = {
  readonly __typename?: 'UpdateIDXProfileResponse';
  readonly success: Scalars['Boolean'];
  readonly updatedProfiles: ReadonlyArray<Scalars['String']>;
};

export type UpdateQuestCompletionInput = {
  readonly quest_completion_id: Scalars['String'];
  readonly status: QuestCompletionStatus_ActionEnum;
};

export type UpdateQuestCompletionOutput = {
  readonly __typename?: 'UpdateQuestCompletionOutput';
  readonly error?: Maybe<Scalars['String']>;
  readonly quest_completion?: Maybe<Quest_Completion>;
  readonly quest_completion_id?: Maybe<Scalars['uuid']>;
  readonly success: Scalars['Boolean'];
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars['uuid']>;
  readonly _gt?: Maybe<Scalars['uuid']>;
  readonly _gte?: Maybe<Scalars['uuid']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['uuid']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['uuid']>;
  readonly _lte?: Maybe<Scalars['uuid']>;
  readonly _neq?: Maybe<Scalars['uuid']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['uuid']>>;
};

export type GetPlayerQueryVariables = Exact<{
  playerId: Scalars['uuid'];
}>;


export type GetPlayerQuery = (
  { readonly __typename?: 'query_root' }
  & { readonly player_by_pk?: Maybe<(
    { readonly __typename?: 'player' }
    & Pick<Player, 'id' | 'ethereum_address'>
  )> }
);

export type GetPlayerFromEthQueryVariables = Exact<{
  ethereum_address?: Maybe<Scalars['String']>;
}>;


export type GetPlayerFromEthQuery = (
  { readonly __typename?: 'query_root' }
  & { readonly player: ReadonlyArray<(
    { readonly __typename?: 'player' }
    & Pick<Player, 'id'>
  )> }
);


export const GetPlayerDocument = gql`
    query GetPlayer($playerId: uuid!) {
  player_by_pk(id: $playerId) {
    id
    ethereum_address
  }
}
    `;
export const GetPlayerFromEthDocument = gql`
    query GetPlayerFromETH($ethereum_address: String) {
  player(where: {ethereum_address: {_eq: $ethereum_address}}) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetPlayer(variables: GetPlayerQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPlayerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPlayerQuery>(GetPlayerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPlayer');
    },
    GetPlayerFromETH(variables?: GetPlayerFromEthQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPlayerFromEthQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPlayerFromEthQuery>(GetPlayerFromEthDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPlayerFromETH');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;