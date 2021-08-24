/* eslint-disable */
import gql from 'fake-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  type: Scalars['String'];
};

/** aggregated selection of "AccountType" */
export type AccountType_Aggregate = {
  aggregate?: Maybe<AccountType_Aggregate_Fields>;
  nodes: Array<AccountType>;
};

/** aggregate fields of "AccountType" */
export type AccountType_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<AccountType_Max_Fields>;
  min?: Maybe<AccountType_Min_Fields>;
};


/** aggregate fields of "AccountType" */
export type AccountType_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<AccountType_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "AccountType" */
export type AccountType_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<AccountType_Max_Order_By>;
  min?: Maybe<AccountType_Min_Order_By>;
};

/** input type for inserting array relation for remote table "AccountType" */
export type AccountType_Arr_Rel_Insert_Input = {
  data: Array<AccountType_Insert_Input>;
  on_conflict?: Maybe<AccountType_On_Conflict>;
};

/** Boolean expression to filter rows from the table "AccountType". All fields are combined with a logical 'AND'. */
export type AccountType_Bool_Exp = {
  _and?: Maybe<Array<Maybe<AccountType_Bool_Exp>>>;
  _not?: Maybe<AccountType_Bool_Exp>;
  _or?: Maybe<Array<Maybe<AccountType_Bool_Exp>>>;
  type?: Maybe<String_Comparison_Exp>;
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
  _eq?: Maybe<AccountType_Enum>;
  _in?: Maybe<Array<AccountType_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<AccountType_Enum>;
  _nin?: Maybe<Array<AccountType_Enum>>;
};

/** input type for inserting data into table "AccountType" */
export type AccountType_Insert_Input = {
  type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AccountType_Max_Fields = {
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "AccountType" */
export type AccountType_Max_Order_By = {
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type AccountType_Min_Fields = {
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "AccountType" */
export type AccountType_Min_Order_By = {
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "AccountType" */
export type AccountType_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<AccountType>;
};

/** input type for inserting object relation for remote table "AccountType" */
export type AccountType_Obj_Rel_Insert_Input = {
  data: AccountType_Insert_Input;
  on_conflict?: Maybe<AccountType_On_Conflict>;
};

/** on conflict condition type for table "AccountType" */
export type AccountType_On_Conflict = {
  constraint: AccountType_Constraint;
  update_columns: Array<AccountType_Update_Column>;
  where?: Maybe<AccountType_Bool_Exp>;
};

/** ordering options when selecting data from "AccountType" */
export type AccountType_Order_By = {
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "AccountType" */
export type AccountType_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "AccountType" */
export enum AccountType_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "AccountType" */
export type AccountType_Set_Input = {
  type?: Maybe<Scalars['String']>;
};

/** update columns of table "AccountType" */
export enum AccountType_Update_Column {
  /** column name */
  Type = 'type'
}

export type BoxProfile = {
  collectiblesFavorites?: Maybe<Array<CollectiblesFavorites>>;
  coverImageURL?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  ethereumAddress?: Maybe<Scalars['String']>;
  imageURL?: Maybe<Scalars['String']>;
  job?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type BrightIdStatus = {
  app: Scalars['String'];
  context: Scalars['String'];
  contextIds: Array<Scalars['String']>;
  unique: Scalars['Boolean'];
};

export type CacheProcessOutput = {
  error?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type CollectiblesFavorites = {
  address?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
};

/** columns and relationships of "ColorAspect" */
export type ColorAspect = {
  description?: Maybe<Scalars['String']>;
  mask: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  players: Array<Player>;
  /** An aggregated array relationship */
  players_aggregate: Player_Aggregate;
};


/** columns and relationships of "ColorAspect" */
export type ColorAspectPlayersArgs = {
  distinct_on?: Maybe<Array<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


/** columns and relationships of "ColorAspect" */
export type ColorAspectPlayers_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};

/** aggregated selection of "ColorAspect" */
export type ColorAspect_Aggregate = {
  aggregate?: Maybe<ColorAspect_Aggregate_Fields>;
  nodes: Array<ColorAspect>;
};

/** aggregate fields of "ColorAspect" */
export type ColorAspect_Aggregate_Fields = {
  avg?: Maybe<ColorAspect_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ColorAspect_Max_Fields>;
  min?: Maybe<ColorAspect_Min_Fields>;
  stddev?: Maybe<ColorAspect_Stddev_Fields>;
  stddev_pop?: Maybe<ColorAspect_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ColorAspect_Stddev_Samp_Fields>;
  sum?: Maybe<ColorAspect_Sum_Fields>;
  var_pop?: Maybe<ColorAspect_Var_Pop_Fields>;
  var_samp?: Maybe<ColorAspect_Var_Samp_Fields>;
  variance?: Maybe<ColorAspect_Variance_Fields>;
};


/** aggregate fields of "ColorAspect" */
export type ColorAspect_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ColorAspect_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ColorAspect" */
export type ColorAspect_Aggregate_Order_By = {
  avg?: Maybe<ColorAspect_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<ColorAspect_Max_Order_By>;
  min?: Maybe<ColorAspect_Min_Order_By>;
  stddev?: Maybe<ColorAspect_Stddev_Order_By>;
  stddev_pop?: Maybe<ColorAspect_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<ColorAspect_Stddev_Samp_Order_By>;
  sum?: Maybe<ColorAspect_Sum_Order_By>;
  var_pop?: Maybe<ColorAspect_Var_Pop_Order_By>;
  var_samp?: Maybe<ColorAspect_Var_Samp_Order_By>;
  variance?: Maybe<ColorAspect_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ColorAspect" */
export type ColorAspect_Arr_Rel_Insert_Input = {
  data: Array<ColorAspect_Insert_Input>;
  on_conflict?: Maybe<ColorAspect_On_Conflict>;
};

/** aggregate avg on columns */
export type ColorAspect_Avg_Fields = {
  mask?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ColorAspect" */
export type ColorAspect_Avg_Order_By = {
  mask?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ColorAspect". All fields are combined with a logical 'AND'. */
export type ColorAspect_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ColorAspect_Bool_Exp>>>;
  _not?: Maybe<ColorAspect_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ColorAspect_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  mask?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  players?: Maybe<Player_Bool_Exp>;
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
  mask?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "ColorAspect" */
export type ColorAspect_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  mask?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  players?: Maybe<Player_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type ColorAspect_Max_Fields = {
  description?: Maybe<Scalars['String']>;
  mask?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ColorAspect" */
export type ColorAspect_Max_Order_By = {
  description?: Maybe<Order_By>;
  mask?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ColorAspect_Min_Fields = {
  description?: Maybe<Scalars['String']>;
  mask?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ColorAspect" */
export type ColorAspect_Min_Order_By = {
  description?: Maybe<Order_By>;
  mask?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "ColorAspect" */
export type ColorAspect_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ColorAspect>;
};

/** input type for inserting object relation for remote table "ColorAspect" */
export type ColorAspect_Obj_Rel_Insert_Input = {
  data: ColorAspect_Insert_Input;
  on_conflict?: Maybe<ColorAspect_On_Conflict>;
};

/** on conflict condition type for table "ColorAspect" */
export type ColorAspect_On_Conflict = {
  constraint: ColorAspect_Constraint;
  update_columns: Array<ColorAspect_Update_Column>;
  where?: Maybe<ColorAspect_Bool_Exp>;
};

/** ordering options when selecting data from "ColorAspect" */
export type ColorAspect_Order_By = {
  description?: Maybe<Order_By>;
  mask?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  players_aggregate?: Maybe<Player_Aggregate_Order_By>;
};

/** primary key columns input for table: "ColorAspect" */
export type ColorAspect_Pk_Columns_Input = {
  mask: Scalars['Int'];
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
  description?: Maybe<Scalars['String']>;
  mask?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ColorAspect_Stddev_Fields = {
  mask?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ColorAspect" */
export type ColorAspect_Stddev_Order_By = {
  mask?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ColorAspect_Stddev_Pop_Fields = {
  mask?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ColorAspect" */
export type ColorAspect_Stddev_Pop_Order_By = {
  mask?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ColorAspect_Stddev_Samp_Fields = {
  mask?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ColorAspect" */
export type ColorAspect_Stddev_Samp_Order_By = {
  mask?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type ColorAspect_Sum_Fields = {
  mask?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ColorAspect" */
export type ColorAspect_Sum_Order_By = {
  mask?: Maybe<Order_By>;
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
  mask?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ColorAspect" */
export type ColorAspect_Var_Pop_Order_By = {
  mask?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ColorAspect_Var_Samp_Fields = {
  mask?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ColorAspect" */
export type ColorAspect_Var_Samp_Order_By = {
  mask?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type ColorAspect_Variance_Fields = {
  mask?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ColorAspect" */
export type ColorAspect_Variance_Order_By = {
  mask?: Maybe<Order_By>;
};

export type CreateQuestCompletionInput = {
  quest_id: Scalars['String'];
  submission_link?: Maybe<Scalars['String']>;
  submission_text?: Maybe<Scalars['String']>;
};

export type CreateQuestCompletionOutput = {
  error?: Maybe<Scalars['String']>;
  quest_completion?: Maybe<Quest_Completion>;
  quest_completion_id?: Maybe<Scalars['uuid']>;
  success: Scalars['Boolean'];
};

export type CreateQuestInput = {
  cooldown?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  external_link?: Maybe<Scalars['String']>;
  guild_id: Scalars['uuid'];
  repetition?: Maybe<QuestRepetition_ActionEnum>;
  skills_id: Array<Maybe<Scalars['uuid']>>;
  title: Scalars['String'];
};

export type CreateQuestOutput = {
  error?: Maybe<Scalars['String']>;
  quest?: Maybe<Quest>;
  quest_id?: Maybe<Scalars['uuid']>;
  success: Scalars['Boolean'];
};

export type DiscordGuildAuthResponse = {
  error?: Maybe<Scalars['String']>;
  exists?: Maybe<Scalars['Boolean']>;
  guildname?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type ExpiredPlayerProfiles = {
  ids: Array<Maybe<Scalars['String']>>;
};

/** columns and relationships of "guild" */
export type Guild = {
  /** An object relationship */
  GuildType: GuildType;
  description?: Maybe<Scalars['String']>;
  discord_id?: Maybe<Scalars['String']>;
  discord_invite_url?: Maybe<Scalars['String']>;
  discord_metadata?: Maybe<Scalars['jsonb']>;
  github_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  guild_accounts: Array<Guild_Account>;
  /** An aggregated array relationship */
  guild_accounts_aggregate: Guild_Account_Aggregate;
  /** An array relationship */
  guild_players: Array<Guild_Player>;
  /** An aggregated array relationship */
  guild_players_aggregate: Guild_Player_Aggregate;
  /** Unique friendly identifier for the Guild (used in URL) */
  guildname: Scalars['String'];
  id: Scalars['uuid'];
  join_button_url?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  moloch_address?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  position?: Maybe<GuildPosition_Enum>;
  /** An array relationship */
  quests: Array<Quest>;
  /** An aggregated array relationship */
  quests_aggregate: Quest_Aggregate;
  status: GuildStatus_Enum;
  twitter_url?: Maybe<Scalars['String']>;
  /** The area of focus for the guild (e.g. funding, project, etc) */
  type: GuildType_Enum;
  website_url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "guild" */
export type GuildDiscord_MetadataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "guild" */
export type GuildGuild_AccountsArgs = {
  distinct_on?: Maybe<Array<Guild_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Account_Order_By>>;
  where?: Maybe<Guild_Account_Bool_Exp>;
};


/** columns and relationships of "guild" */
export type GuildGuild_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Guild_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Account_Order_By>>;
  where?: Maybe<Guild_Account_Bool_Exp>;
};


/** columns and relationships of "guild" */
export type GuildGuild_PlayersArgs = {
  distinct_on?: Maybe<Array<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** columns and relationships of "guild" */
export type GuildGuild_Players_AggregateArgs = {
  distinct_on?: Maybe<Array<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** columns and relationships of "guild" */
export type GuildQuestsArgs = {
  distinct_on?: Maybe<Array<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** columns and relationships of "guild" */
export type GuildQuests_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};

/** columns and relationships of "guild_account" */
export type Guild_Account = {
  /** An object relationship */
  AccountType: AccountType;
  /** An object relationship */
  Guild: Guild;
  guild_id: Scalars['uuid'];
  identifier: Scalars['String'];
  type: AccountType_Enum;
};

/** aggregated selection of "guild_account" */
export type Guild_Account_Aggregate = {
  aggregate?: Maybe<Guild_Account_Aggregate_Fields>;
  nodes: Array<Guild_Account>;
};

/** aggregate fields of "guild_account" */
export type Guild_Account_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Guild_Account_Max_Fields>;
  min?: Maybe<Guild_Account_Min_Fields>;
};


/** aggregate fields of "guild_account" */
export type Guild_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Guild_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "guild_account" */
export type Guild_Account_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Guild_Account_Max_Order_By>;
  min?: Maybe<Guild_Account_Min_Order_By>;
};

/** input type for inserting array relation for remote table "guild_account" */
export type Guild_Account_Arr_Rel_Insert_Input = {
  data: Array<Guild_Account_Insert_Input>;
  on_conflict?: Maybe<Guild_Account_On_Conflict>;
};

/** Boolean expression to filter rows from the table "guild_account". All fields are combined with a logical 'AND'. */
export type Guild_Account_Bool_Exp = {
  AccountType?: Maybe<AccountType_Bool_Exp>;
  Guild?: Maybe<Guild_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Guild_Account_Bool_Exp>>>;
  _not?: Maybe<Guild_Account_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Guild_Account_Bool_Exp>>>;
  guild_id?: Maybe<Uuid_Comparison_Exp>;
  identifier?: Maybe<String_Comparison_Exp>;
  type?: Maybe<AccountType_Enum_Comparison_Exp>;
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
  AccountType?: Maybe<AccountType_Obj_Rel_Insert_Input>;
  Guild?: Maybe<Guild_Obj_Rel_Insert_Input>;
  guild_id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  type?: Maybe<AccountType_Enum>;
};

/** aggregate max on columns */
export type Guild_Account_Max_Fields = {
  guild_id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "guild_account" */
export type Guild_Account_Max_Order_By = {
  guild_id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Guild_Account_Min_Fields = {
  guild_id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "guild_account" */
export type Guild_Account_Min_Order_By = {
  guild_id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
};

/** response of any mutation on the table "guild_account" */
export type Guild_Account_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Guild_Account>;
};

/** input type for inserting object relation for remote table "guild_account" */
export type Guild_Account_Obj_Rel_Insert_Input = {
  data: Guild_Account_Insert_Input;
  on_conflict?: Maybe<Guild_Account_On_Conflict>;
};

/** on conflict condition type for table "guild_account" */
export type Guild_Account_On_Conflict = {
  constraint: Guild_Account_Constraint;
  update_columns: Array<Guild_Account_Update_Column>;
  where?: Maybe<Guild_Account_Bool_Exp>;
};

/** ordering options when selecting data from "guild_account" */
export type Guild_Account_Order_By = {
  AccountType?: Maybe<AccountType_Order_By>;
  Guild?: Maybe<Guild_Order_By>;
  guild_id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "guild_account" */
export type Guild_Account_Pk_Columns_Input = {
  guild_id: Scalars['uuid'];
  type: AccountType_Enum;
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
  guild_id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  type?: Maybe<AccountType_Enum>;
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
  aggregate?: Maybe<Guild_Aggregate_Fields>;
  nodes: Array<Guild>;
};

/** aggregate fields of "guild" */
export type Guild_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Guild_Max_Fields>;
  min?: Maybe<Guild_Min_Fields>;
};


/** aggregate fields of "guild" */
export type Guild_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Guild_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "guild" */
export type Guild_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Guild_Max_Order_By>;
  min?: Maybe<Guild_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Guild_Append_Input = {
  discord_metadata?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "guild" */
export type Guild_Arr_Rel_Insert_Input = {
  data: Array<Guild_Insert_Input>;
  on_conflict?: Maybe<Guild_On_Conflict>;
};

/** Boolean expression to filter rows from the table "guild". All fields are combined with a logical 'AND'. */
export type Guild_Bool_Exp = {
  GuildType?: Maybe<GuildType_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Guild_Bool_Exp>>>;
  _not?: Maybe<Guild_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Guild_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  discord_id?: Maybe<String_Comparison_Exp>;
  discord_invite_url?: Maybe<String_Comparison_Exp>;
  discord_metadata?: Maybe<Jsonb_Comparison_Exp>;
  github_url?: Maybe<String_Comparison_Exp>;
  guild_accounts?: Maybe<Guild_Account_Bool_Exp>;
  guild_players?: Maybe<Guild_Player_Bool_Exp>;
  guildname?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  join_button_url?: Maybe<String_Comparison_Exp>;
  logo?: Maybe<String_Comparison_Exp>;
  moloch_address?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  position?: Maybe<GuildPosition_Enum_Comparison_Exp>;
  quests?: Maybe<Quest_Bool_Exp>;
  status?: Maybe<GuildStatus_Enum_Comparison_Exp>;
  twitter_url?: Maybe<String_Comparison_Exp>;
  type?: Maybe<GuildType_Enum_Comparison_Exp>;
  website_url?: Maybe<String_Comparison_Exp>;
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
  discord_metadata?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Guild_Delete_Elem_Input = {
  discord_metadata?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Guild_Delete_Key_Input = {
  discord_metadata?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "guild" */
export type Guild_Insert_Input = {
  GuildType?: Maybe<GuildType_Obj_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  discord_id?: Maybe<Scalars['String']>;
  discord_invite_url?: Maybe<Scalars['String']>;
  discord_metadata?: Maybe<Scalars['jsonb']>;
  github_url?: Maybe<Scalars['String']>;
  guild_accounts?: Maybe<Guild_Account_Arr_Rel_Insert_Input>;
  guild_players?: Maybe<Guild_Player_Arr_Rel_Insert_Input>;
  guildname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  join_button_url?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  moloch_address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<GuildPosition_Enum>;
  quests?: Maybe<Quest_Arr_Rel_Insert_Input>;
  status?: Maybe<GuildStatus_Enum>;
  twitter_url?: Maybe<Scalars['String']>;
  type?: Maybe<GuildType_Enum>;
  website_url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Guild_Max_Fields = {
  description?: Maybe<Scalars['String']>;
  discord_id?: Maybe<Scalars['String']>;
  discord_invite_url?: Maybe<Scalars['String']>;
  github_url?: Maybe<Scalars['String']>;
  guildname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  join_button_url?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  moloch_address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  twitter_url?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "guild" */
export type Guild_Max_Order_By = {
  description?: Maybe<Order_By>;
  discord_id?: Maybe<Order_By>;
  discord_invite_url?: Maybe<Order_By>;
  github_url?: Maybe<Order_By>;
  guildname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  join_button_url?: Maybe<Order_By>;
  logo?: Maybe<Order_By>;
  moloch_address?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  twitter_url?: Maybe<Order_By>;
  website_url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Guild_Min_Fields = {
  description?: Maybe<Scalars['String']>;
  discord_id?: Maybe<Scalars['String']>;
  discord_invite_url?: Maybe<Scalars['String']>;
  github_url?: Maybe<Scalars['String']>;
  guildname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  join_button_url?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  moloch_address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  twitter_url?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "guild" */
export type Guild_Min_Order_By = {
  description?: Maybe<Order_By>;
  discord_id?: Maybe<Order_By>;
  discord_invite_url?: Maybe<Order_By>;
  github_url?: Maybe<Order_By>;
  guildname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  join_button_url?: Maybe<Order_By>;
  logo?: Maybe<Order_By>;
  moloch_address?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  twitter_url?: Maybe<Order_By>;
  website_url?: Maybe<Order_By>;
};

/** response of any mutation on the table "guild" */
export type Guild_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Guild>;
};

/** input type for inserting object relation for remote table "guild" */
export type Guild_Obj_Rel_Insert_Input = {
  data: Guild_Insert_Input;
  on_conflict?: Maybe<Guild_On_Conflict>;
};

/** on conflict condition type for table "guild" */
export type Guild_On_Conflict = {
  constraint: Guild_Constraint;
  update_columns: Array<Guild_Update_Column>;
  where?: Maybe<Guild_Bool_Exp>;
};

/** ordering options when selecting data from "guild" */
export type Guild_Order_By = {
  GuildType?: Maybe<GuildType_Order_By>;
  description?: Maybe<Order_By>;
  discord_id?: Maybe<Order_By>;
  discord_invite_url?: Maybe<Order_By>;
  discord_metadata?: Maybe<Order_By>;
  github_url?: Maybe<Order_By>;
  guild_accounts_aggregate?: Maybe<Guild_Account_Aggregate_Order_By>;
  guild_players_aggregate?: Maybe<Guild_Player_Aggregate_Order_By>;
  guildname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  join_button_url?: Maybe<Order_By>;
  logo?: Maybe<Order_By>;
  moloch_address?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  quests_aggregate?: Maybe<Quest_Aggregate_Order_By>;
  status?: Maybe<Order_By>;
  twitter_url?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  website_url?: Maybe<Order_By>;
};

/** primary key columns input for table: "guild" */
export type Guild_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "guild_player" */
export type Guild_Player = {
  /** An object relationship */
  Guild: Guild;
  /** An object relationship */
  Player: Player;
  guild_id: Scalars['uuid'];
  player_id: Scalars['uuid'];
};

/** aggregated selection of "guild_player" */
export type Guild_Player_Aggregate = {
  aggregate?: Maybe<Guild_Player_Aggregate_Fields>;
  nodes: Array<Guild_Player>;
};

/** aggregate fields of "guild_player" */
export type Guild_Player_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Guild_Player_Max_Fields>;
  min?: Maybe<Guild_Player_Min_Fields>;
};


/** aggregate fields of "guild_player" */
export type Guild_Player_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Guild_Player_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "guild_player" */
export type Guild_Player_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Guild_Player_Max_Order_By>;
  min?: Maybe<Guild_Player_Min_Order_By>;
};

/** input type for inserting array relation for remote table "guild_player" */
export type Guild_Player_Arr_Rel_Insert_Input = {
  data: Array<Guild_Player_Insert_Input>;
  on_conflict?: Maybe<Guild_Player_On_Conflict>;
};

/** Boolean expression to filter rows from the table "guild_player". All fields are combined with a logical 'AND'. */
export type Guild_Player_Bool_Exp = {
  Guild?: Maybe<Guild_Bool_Exp>;
  Player?: Maybe<Player_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Guild_Player_Bool_Exp>>>;
  _not?: Maybe<Guild_Player_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Guild_Player_Bool_Exp>>>;
  guild_id?: Maybe<Uuid_Comparison_Exp>;
  player_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "guild_player" */
export enum Guild_Player_Constraint {
  /** unique or primary key constraint */
  GuildPlayerPkey = 'guild_player_pkey'
}

/** input type for inserting data into table "guild_player" */
export type Guild_Player_Insert_Input = {
  Guild?: Maybe<Guild_Obj_Rel_Insert_Input>;
  Player?: Maybe<Player_Obj_Rel_Insert_Input>;
  guild_id?: Maybe<Scalars['uuid']>;
  player_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Guild_Player_Max_Fields = {
  guild_id?: Maybe<Scalars['uuid']>;
  player_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "guild_player" */
export type Guild_Player_Max_Order_By = {
  guild_id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Guild_Player_Min_Fields = {
  guild_id?: Maybe<Scalars['uuid']>;
  player_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "guild_player" */
export type Guild_Player_Min_Order_By = {
  guild_id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "guild_player" */
export type Guild_Player_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Guild_Player>;
};

/** input type for inserting object relation for remote table "guild_player" */
export type Guild_Player_Obj_Rel_Insert_Input = {
  data: Guild_Player_Insert_Input;
  on_conflict?: Maybe<Guild_Player_On_Conflict>;
};

/** on conflict condition type for table "guild_player" */
export type Guild_Player_On_Conflict = {
  constraint: Guild_Player_Constraint;
  update_columns: Array<Guild_Player_Update_Column>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};

/** ordering options when selecting data from "guild_player" */
export type Guild_Player_Order_By = {
  Guild?: Maybe<Guild_Order_By>;
  Player?: Maybe<Player_Order_By>;
  guild_id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "guild_player" */
export type Guild_Player_Pk_Columns_Input = {
  guild_id: Scalars['uuid'];
  player_id: Scalars['uuid'];
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
  guild_id?: Maybe<Scalars['uuid']>;
  player_id?: Maybe<Scalars['uuid']>;
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
  discord_metadata?: Maybe<Scalars['jsonb']>;
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
  description?: Maybe<Scalars['String']>;
  discord_id?: Maybe<Scalars['String']>;
  discord_invite_url?: Maybe<Scalars['String']>;
  discord_metadata?: Maybe<Scalars['jsonb']>;
  github_url?: Maybe<Scalars['String']>;
  guildname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  join_button_url?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  moloch_address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<GuildPosition_Enum>;
  status?: Maybe<GuildStatus_Enum>;
  twitter_url?: Maybe<Scalars['String']>;
  type?: Maybe<GuildType_Enum>;
  website_url?: Maybe<Scalars['String']>;
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
  position: Scalars['String'];
};

/** aggregated selection of "GuildPosition" */
export type GuildPosition_Aggregate = {
  aggregate?: Maybe<GuildPosition_Aggregate_Fields>;
  nodes: Array<GuildPosition>;
};

/** aggregate fields of "GuildPosition" */
export type GuildPosition_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<GuildPosition_Max_Fields>;
  min?: Maybe<GuildPosition_Min_Fields>;
};


/** aggregate fields of "GuildPosition" */
export type GuildPosition_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<GuildPosition_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "GuildPosition" */
export type GuildPosition_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<GuildPosition_Max_Order_By>;
  min?: Maybe<GuildPosition_Min_Order_By>;
};

/** input type for inserting array relation for remote table "GuildPosition" */
export type GuildPosition_Arr_Rel_Insert_Input = {
  data: Array<GuildPosition_Insert_Input>;
  on_conflict?: Maybe<GuildPosition_On_Conflict>;
};

/** Boolean expression to filter rows from the table "GuildPosition". All fields are combined with a logical 'AND'. */
export type GuildPosition_Bool_Exp = {
  _and?: Maybe<Array<Maybe<GuildPosition_Bool_Exp>>>;
  _not?: Maybe<GuildPosition_Bool_Exp>;
  _or?: Maybe<Array<Maybe<GuildPosition_Bool_Exp>>>;
  position?: Maybe<String_Comparison_Exp>;
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
  _eq?: Maybe<GuildPosition_Enum>;
  _in?: Maybe<Array<GuildPosition_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<GuildPosition_Enum>;
  _nin?: Maybe<Array<GuildPosition_Enum>>;
};

/** input type for inserting data into table "GuildPosition" */
export type GuildPosition_Insert_Input = {
  position?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type GuildPosition_Max_Fields = {
  position?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "GuildPosition" */
export type GuildPosition_Max_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type GuildPosition_Min_Fields = {
  position?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "GuildPosition" */
export type GuildPosition_Min_Order_By = {
  position?: Maybe<Order_By>;
};

/** response of any mutation on the table "GuildPosition" */
export type GuildPosition_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<GuildPosition>;
};

/** input type for inserting object relation for remote table "GuildPosition" */
export type GuildPosition_Obj_Rel_Insert_Input = {
  data: GuildPosition_Insert_Input;
  on_conflict?: Maybe<GuildPosition_On_Conflict>;
};

/** on conflict condition type for table "GuildPosition" */
export type GuildPosition_On_Conflict = {
  constraint: GuildPosition_Constraint;
  update_columns: Array<GuildPosition_Update_Column>;
  where?: Maybe<GuildPosition_Bool_Exp>;
};

/** ordering options when selecting data from "GuildPosition" */
export type GuildPosition_Order_By = {
  position?: Maybe<Order_By>;
};

/** primary key columns input for table: "GuildPosition" */
export type GuildPosition_Pk_Columns_Input = {
  position: Scalars['String'];
};

/** select columns of table "GuildPosition" */
export enum GuildPosition_Select_Column {
  /** column name */
  Position = 'position'
}

/** input type for updating data in table "GuildPosition" */
export type GuildPosition_Set_Input = {
  position?: Maybe<Scalars['String']>;
};

/** update columns of table "GuildPosition" */
export enum GuildPosition_Update_Column {
  /** column name */
  Position = 'position'
}

/** columns and relationships of "GuildStatus" */
export type GuildStatus = {
  status: Scalars['String'];
};

/** aggregated selection of "GuildStatus" */
export type GuildStatus_Aggregate = {
  aggregate?: Maybe<GuildStatus_Aggregate_Fields>;
  nodes: Array<GuildStatus>;
};

/** aggregate fields of "GuildStatus" */
export type GuildStatus_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<GuildStatus_Max_Fields>;
  min?: Maybe<GuildStatus_Min_Fields>;
};


/** aggregate fields of "GuildStatus" */
export type GuildStatus_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<GuildStatus_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "GuildStatus" */
export type GuildStatus_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<GuildStatus_Max_Order_By>;
  min?: Maybe<GuildStatus_Min_Order_By>;
};

/** input type for inserting array relation for remote table "GuildStatus" */
export type GuildStatus_Arr_Rel_Insert_Input = {
  data: Array<GuildStatus_Insert_Input>;
  on_conflict?: Maybe<GuildStatus_On_Conflict>;
};

/** Boolean expression to filter rows from the table "GuildStatus". All fields are combined with a logical 'AND'. */
export type GuildStatus_Bool_Exp = {
  _and?: Maybe<Array<Maybe<GuildStatus_Bool_Exp>>>;
  _not?: Maybe<GuildStatus_Bool_Exp>;
  _or?: Maybe<Array<Maybe<GuildStatus_Bool_Exp>>>;
  status?: Maybe<String_Comparison_Exp>;
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
  _eq?: Maybe<GuildStatus_Enum>;
  _in?: Maybe<Array<GuildStatus_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<GuildStatus_Enum>;
  _nin?: Maybe<Array<GuildStatus_Enum>>;
};

/** input type for inserting data into table "GuildStatus" */
export type GuildStatus_Insert_Input = {
  status?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type GuildStatus_Max_Fields = {
  status?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "GuildStatus" */
export type GuildStatus_Max_Order_By = {
  status?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type GuildStatus_Min_Fields = {
  status?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "GuildStatus" */
export type GuildStatus_Min_Order_By = {
  status?: Maybe<Order_By>;
};

/** response of any mutation on the table "GuildStatus" */
export type GuildStatus_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<GuildStatus>;
};

/** input type for inserting object relation for remote table "GuildStatus" */
export type GuildStatus_Obj_Rel_Insert_Input = {
  data: GuildStatus_Insert_Input;
  on_conflict?: Maybe<GuildStatus_On_Conflict>;
};

/** on conflict condition type for table "GuildStatus" */
export type GuildStatus_On_Conflict = {
  constraint: GuildStatus_Constraint;
  update_columns: Array<GuildStatus_Update_Column>;
  where?: Maybe<GuildStatus_Bool_Exp>;
};

/** ordering options when selecting data from "GuildStatus" */
export type GuildStatus_Order_By = {
  status?: Maybe<Order_By>;
};

/** primary key columns input for table: "GuildStatus" */
export type GuildStatus_Pk_Columns_Input = {
  status: Scalars['String'];
};

/** select columns of table "GuildStatus" */
export enum GuildStatus_Select_Column {
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "GuildStatus" */
export type GuildStatus_Set_Input = {
  status?: Maybe<Scalars['String']>;
};

/** update columns of table "GuildStatus" */
export enum GuildStatus_Update_Column {
  /** column name */
  Status = 'status'
}

/** columns and relationships of "GuildType" */
export type GuildType = {
  /** An array relationship */
  Guilds: Array<Guild>;
  /** An aggregated array relationship */
  Guilds_aggregate: Guild_Aggregate;
  name: Scalars['String'];
};


/** columns and relationships of "GuildType" */
export type GuildTypeGuildsArgs = {
  distinct_on?: Maybe<Array<Guild_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Order_By>>;
  where?: Maybe<Guild_Bool_Exp>;
};


/** columns and relationships of "GuildType" */
export type GuildTypeGuilds_AggregateArgs = {
  distinct_on?: Maybe<Array<Guild_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Order_By>>;
  where?: Maybe<Guild_Bool_Exp>;
};

/** aggregated selection of "GuildType" */
export type GuildType_Aggregate = {
  aggregate?: Maybe<GuildType_Aggregate_Fields>;
  nodes: Array<GuildType>;
};

/** aggregate fields of "GuildType" */
export type GuildType_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<GuildType_Max_Fields>;
  min?: Maybe<GuildType_Min_Fields>;
};


/** aggregate fields of "GuildType" */
export type GuildType_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<GuildType_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "GuildType" */
export type GuildType_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<GuildType_Max_Order_By>;
  min?: Maybe<GuildType_Min_Order_By>;
};

/** input type for inserting array relation for remote table "GuildType" */
export type GuildType_Arr_Rel_Insert_Input = {
  data: Array<GuildType_Insert_Input>;
  on_conflict?: Maybe<GuildType_On_Conflict>;
};

/** Boolean expression to filter rows from the table "GuildType". All fields are combined with a logical 'AND'. */
export type GuildType_Bool_Exp = {
  Guilds?: Maybe<Guild_Bool_Exp>;
  _and?: Maybe<Array<Maybe<GuildType_Bool_Exp>>>;
  _not?: Maybe<GuildType_Bool_Exp>;
  _or?: Maybe<Array<Maybe<GuildType_Bool_Exp>>>;
  name?: Maybe<String_Comparison_Exp>;
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
  _eq?: Maybe<GuildType_Enum>;
  _in?: Maybe<Array<GuildType_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<GuildType_Enum>;
  _nin?: Maybe<Array<GuildType_Enum>>;
};

/** input type for inserting data into table "GuildType" */
export type GuildType_Insert_Input = {
  Guilds?: Maybe<Guild_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type GuildType_Max_Fields = {
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "GuildType" */
export type GuildType_Max_Order_By = {
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type GuildType_Min_Fields = {
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "GuildType" */
export type GuildType_Min_Order_By = {
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "GuildType" */
export type GuildType_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<GuildType>;
};

/** input type for inserting object relation for remote table "GuildType" */
export type GuildType_Obj_Rel_Insert_Input = {
  data: GuildType_Insert_Input;
  on_conflict?: Maybe<GuildType_On_Conflict>;
};

/** on conflict condition type for table "GuildType" */
export type GuildType_On_Conflict = {
  constraint: GuildType_Constraint;
  update_columns: Array<GuildType_Update_Column>;
  where?: Maybe<GuildType_Bool_Exp>;
};

/** ordering options when selecting data from "GuildType" */
export type GuildType_Order_By = {
  Guilds_aggregate?: Maybe<Guild_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "GuildType" */
export type GuildType_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "GuildType" */
export enum GuildType_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "GuildType" */
export type GuildType_Set_Input = {
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "GuildType" */
export enum GuildType_Update_Column {
  /** column name */
  Name = 'name'
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "me" */
export type Me = {
  ethereum_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  player?: Maybe<Player>;
  username?: Maybe<Scalars['String']>;
};

/** aggregated selection of "me" */
export type Me_Aggregate = {
  aggregate?: Maybe<Me_Aggregate_Fields>;
  nodes: Array<Me>;
};

/** aggregate fields of "me" */
export type Me_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Me_Max_Fields>;
  min?: Maybe<Me_Min_Fields>;
};


/** aggregate fields of "me" */
export type Me_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Me_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "me" */
export type Me_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Me_Max_Order_By>;
  min?: Maybe<Me_Min_Order_By>;
};

/** input type for inserting array relation for remote table "me" */
export type Me_Arr_Rel_Insert_Input = {
  data: Array<Me_Insert_Input>;
};

/** Boolean expression to filter rows from the table "me". All fields are combined with a logical 'AND'. */
export type Me_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Me_Bool_Exp>>>;
  _not?: Maybe<Me_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Me_Bool_Exp>>>;
  ethereum_address?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  player?: Maybe<Player_Bool_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "me" */
export type Me_Insert_Input = {
  ethereum_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  player?: Maybe<Player_Obj_Rel_Insert_Input>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Me_Max_Fields = {
  ethereum_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "me" */
export type Me_Max_Order_By = {
  ethereum_address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Me_Min_Fields = {
  ethereum_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "me" */
export type Me_Min_Order_By = {
  ethereum_address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "me" */
export type Me_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Me>;
};

/** input type for inserting object relation for remote table "me" */
export type Me_Obj_Rel_Insert_Input = {
  data: Me_Insert_Input;
};

/** ordering options when selecting data from "me" */
export type Me_Order_By = {
  ethereum_address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  player?: Maybe<Player_Order_By>;
  username?: Maybe<Order_By>;
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
  ethereum_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

export type Member = {
  createdAt: Scalars['String'];
  delegateKey: Scalars['String'];
  exists: Scalars['Boolean'];
  id: Scalars['ID'];
  kicked?: Maybe<Scalars['Boolean']>;
  loot?: Maybe<Scalars['String']>;
  memberAddress: Scalars['String'];
  moloch: Moloch;
  molochAddress: Scalars['String'];
  shares: Scalars['String'];
};

export type Moloch = {
  chain: Scalars['String'];
  id: Scalars['ID'];
  summoner: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  totalLoot: Scalars['String'];
  totalShares: Scalars['String'];
  version?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  /** perform the action: "authenticateDiscordGuild" */
  authenticateDiscordGuild?: Maybe<DiscordGuildAuthResponse>;
  /** perform the action: "createQuest" */
  createQuest?: Maybe<CreateQuestOutput>;
  /** perform the action: "createQuestCompletion" */
  createQuestCompletion?: Maybe<CreateQuestCompletionOutput>;
  /** delete data from the table: "AccountType" */
  delete_AccountType?: Maybe<AccountType_Mutation_Response>;
  /** delete single row from the table: "AccountType" */
  delete_AccountType_by_pk?: Maybe<AccountType>;
  /** delete data from the table: "ColorAspect" */
  delete_ColorAspect?: Maybe<ColorAspect_Mutation_Response>;
  /** delete single row from the table: "ColorAspect" */
  delete_ColorAspect_by_pk?: Maybe<ColorAspect>;
  /** delete data from the table: "GuildPosition" */
  delete_GuildPosition?: Maybe<GuildPosition_Mutation_Response>;
  /** delete single row from the table: "GuildPosition" */
  delete_GuildPosition_by_pk?: Maybe<GuildPosition>;
  /** delete data from the table: "GuildStatus" */
  delete_GuildStatus?: Maybe<GuildStatus_Mutation_Response>;
  /** delete single row from the table: "GuildStatus" */
  delete_GuildStatus_by_pk?: Maybe<GuildStatus>;
  /** delete data from the table: "GuildType" */
  delete_GuildType?: Maybe<GuildType_Mutation_Response>;
  /** delete single row from the table: "GuildType" */
  delete_GuildType_by_pk?: Maybe<GuildType>;
  /** delete data from the table: "PlayerRank" */
  delete_PlayerRank?: Maybe<PlayerRank_Mutation_Response>;
  /** delete single row from the table: "PlayerRank" */
  delete_PlayerRank_by_pk?: Maybe<PlayerRank>;
  /** delete data from the table: "QuestCompletionStatus" */
  delete_QuestCompletionStatus?: Maybe<QuestCompletionStatus_Mutation_Response>;
  /** delete single row from the table: "QuestCompletionStatus" */
  delete_QuestCompletionStatus_by_pk?: Maybe<QuestCompletionStatus>;
  /** delete data from the table: "QuestRepetition" */
  delete_QuestRepetition?: Maybe<QuestRepetition_Mutation_Response>;
  /** delete single row from the table: "QuestRepetition" */
  delete_QuestRepetition_by_pk?: Maybe<QuestRepetition>;
  /** delete data from the table: "QuestStatus" */
  delete_QuestStatus?: Maybe<QuestStatus_Mutation_Response>;
  /** delete single row from the table: "QuestStatus" */
  delete_QuestStatus_by_pk?: Maybe<QuestStatus>;
  /** delete data from the table: "SkillCategory" */
  delete_SkillCategory?: Maybe<SkillCategory_Mutation_Response>;
  /** delete single row from the table: "SkillCategory" */
  delete_SkillCategory_by_pk?: Maybe<SkillCategory>;
  /** delete data from the table: "guild" */
  delete_guild?: Maybe<Guild_Mutation_Response>;
  /** delete data from the table: "guild_account" */
  delete_guild_account?: Maybe<Guild_Account_Mutation_Response>;
  /** delete single row from the table: "guild_account" */
  delete_guild_account_by_pk?: Maybe<Guild_Account>;
  /** delete single row from the table: "guild" */
  delete_guild_by_pk?: Maybe<Guild>;
  /** delete data from the table: "guild_player" */
  delete_guild_player?: Maybe<Guild_Player_Mutation_Response>;
  /** delete single row from the table: "guild_player" */
  delete_guild_player_by_pk?: Maybe<Guild_Player>;
  /** delete data from the table: "me" */
  delete_me?: Maybe<Me_Mutation_Response>;
  /** delete data from the table: "player" */
  delete_player?: Maybe<Player_Mutation_Response>;
  /** delete data from the table: "player_account" */
  delete_player_account?: Maybe<Player_Account_Mutation_Response>;
  /** delete single row from the table: "player" */
  delete_player_by_pk?: Maybe<Player>;
  /** delete data from the table: "player_skill" */
  delete_player_skill?: Maybe<Player_Skill_Mutation_Response>;
  /** delete single row from the table: "player_skill" */
  delete_player_skill_by_pk?: Maybe<Player_Skill>;
  /** delete data from the table: "player_type" */
  delete_player_type?: Maybe<Player_Type_Mutation_Response>;
  /** delete single row from the table: "player_type" */
  delete_player_type_by_pk?: Maybe<Player_Type>;
  /** delete data from the table: "profile_cache" */
  delete_profile_cache?: Maybe<Profile_Cache_Mutation_Response>;
  /** delete single row from the table: "profile_cache" */
  delete_profile_cache_by_pk?: Maybe<Profile_Cache>;
  /** delete data from the table: "quest" */
  delete_quest?: Maybe<Quest_Mutation_Response>;
  /** delete single row from the table: "quest" */
  delete_quest_by_pk?: Maybe<Quest>;
  /** delete data from the table: "quest_completion" */
  delete_quest_completion?: Maybe<Quest_Completion_Mutation_Response>;
  /** delete single row from the table: "quest_completion" */
  delete_quest_completion_by_pk?: Maybe<Quest_Completion>;
  /** delete data from the table: "quest_skill" */
  delete_quest_skill?: Maybe<Quest_Skill_Mutation_Response>;
  /** delete single row from the table: "quest_skill" */
  delete_quest_skill_by_pk?: Maybe<Quest_Skill>;
  /** delete data from the table: "skill" */
  delete_skill?: Maybe<Skill_Mutation_Response>;
  /** delete single row from the table: "skill" */
  delete_skill_by_pk?: Maybe<Skill>;
  /** insert data into the table: "AccountType" */
  insert_AccountType?: Maybe<AccountType_Mutation_Response>;
  /** insert a single row into the table: "AccountType" */
  insert_AccountType_one?: Maybe<AccountType>;
  /** insert data into the table: "ColorAspect" */
  insert_ColorAspect?: Maybe<ColorAspect_Mutation_Response>;
  /** insert a single row into the table: "ColorAspect" */
  insert_ColorAspect_one?: Maybe<ColorAspect>;
  /** insert data into the table: "GuildPosition" */
  insert_GuildPosition?: Maybe<GuildPosition_Mutation_Response>;
  /** insert a single row into the table: "GuildPosition" */
  insert_GuildPosition_one?: Maybe<GuildPosition>;
  /** insert data into the table: "GuildStatus" */
  insert_GuildStatus?: Maybe<GuildStatus_Mutation_Response>;
  /** insert a single row into the table: "GuildStatus" */
  insert_GuildStatus_one?: Maybe<GuildStatus>;
  /** insert data into the table: "GuildType" */
  insert_GuildType?: Maybe<GuildType_Mutation_Response>;
  /** insert a single row into the table: "GuildType" */
  insert_GuildType_one?: Maybe<GuildType>;
  /** insert data into the table: "PlayerRank" */
  insert_PlayerRank?: Maybe<PlayerRank_Mutation_Response>;
  /** insert a single row into the table: "PlayerRank" */
  insert_PlayerRank_one?: Maybe<PlayerRank>;
  /** insert data into the table: "QuestCompletionStatus" */
  insert_QuestCompletionStatus?: Maybe<QuestCompletionStatus_Mutation_Response>;
  /** insert a single row into the table: "QuestCompletionStatus" */
  insert_QuestCompletionStatus_one?: Maybe<QuestCompletionStatus>;
  /** insert data into the table: "QuestRepetition" */
  insert_QuestRepetition?: Maybe<QuestRepetition_Mutation_Response>;
  /** insert a single row into the table: "QuestRepetition" */
  insert_QuestRepetition_one?: Maybe<QuestRepetition>;
  /** insert data into the table: "QuestStatus" */
  insert_QuestStatus?: Maybe<QuestStatus_Mutation_Response>;
  /** insert a single row into the table: "QuestStatus" */
  insert_QuestStatus_one?: Maybe<QuestStatus>;
  /** insert data into the table: "SkillCategory" */
  insert_SkillCategory?: Maybe<SkillCategory_Mutation_Response>;
  /** insert a single row into the table: "SkillCategory" */
  insert_SkillCategory_one?: Maybe<SkillCategory>;
  /** insert data into the table: "guild" */
  insert_guild?: Maybe<Guild_Mutation_Response>;
  /** insert data into the table: "guild_account" */
  insert_guild_account?: Maybe<Guild_Account_Mutation_Response>;
  /** insert a single row into the table: "guild_account" */
  insert_guild_account_one?: Maybe<Guild_Account>;
  /** insert a single row into the table: "guild" */
  insert_guild_one?: Maybe<Guild>;
  /** insert data into the table: "guild_player" */
  insert_guild_player?: Maybe<Guild_Player_Mutation_Response>;
  /** insert a single row into the table: "guild_player" */
  insert_guild_player_one?: Maybe<Guild_Player>;
  /** insert data into the table: "me" */
  insert_me?: Maybe<Me_Mutation_Response>;
  /** insert a single row into the table: "me" */
  insert_me_one?: Maybe<Me>;
  /** insert data into the table: "player" */
  insert_player?: Maybe<Player_Mutation_Response>;
  /** insert data into the table: "player_account" */
  insert_player_account?: Maybe<Player_Account_Mutation_Response>;
  /** insert a single row into the table: "player_account" */
  insert_player_account_one?: Maybe<Player_Account>;
  /** insert a single row into the table: "player" */
  insert_player_one?: Maybe<Player>;
  /** insert data into the table: "player_skill" */
  insert_player_skill?: Maybe<Player_Skill_Mutation_Response>;
  /** insert a single row into the table: "player_skill" */
  insert_player_skill_one?: Maybe<Player_Skill>;
  /** insert data into the table: "player_type" */
  insert_player_type?: Maybe<Player_Type_Mutation_Response>;
  /** insert a single row into the table: "player_type" */
  insert_player_type_one?: Maybe<Player_Type>;
  /** insert data into the table: "profile_cache" */
  insert_profile_cache?: Maybe<Profile_Cache_Mutation_Response>;
  /** insert a single row into the table: "profile_cache" */
  insert_profile_cache_one?: Maybe<Profile_Cache>;
  /** insert data into the table: "quest" */
  insert_quest?: Maybe<Quest_Mutation_Response>;
  /** insert data into the table: "quest_completion" */
  insert_quest_completion?: Maybe<Quest_Completion_Mutation_Response>;
  /** insert a single row into the table: "quest_completion" */
  insert_quest_completion_one?: Maybe<Quest_Completion>;
  /** insert a single row into the table: "quest" */
  insert_quest_one?: Maybe<Quest>;
  /** insert data into the table: "quest_skill" */
  insert_quest_skill?: Maybe<Quest_Skill_Mutation_Response>;
  /** insert a single row into the table: "quest_skill" */
  insert_quest_skill_one?: Maybe<Quest_Skill>;
  /** insert data into the table: "skill" */
  insert_skill?: Maybe<Skill_Mutation_Response>;
  /** insert a single row into the table: "skill" */
  insert_skill_one?: Maybe<Skill>;
  /** perform the action: "updateExpiredIDXProfiles" */
  updateExpiredIDXProfiles?: Maybe<ExpiredPlayerProfiles>;
  /** perform the action: "updateIDXProfile" */
  updateIDXProfile?: Maybe<CacheProcessOutput>;
  /** perform the action: "updateQuestCompletion" */
  updateQuestCompletion?: Maybe<UpdateQuestCompletionOutput>;
  /** update data of the table: "AccountType" */
  update_AccountType?: Maybe<AccountType_Mutation_Response>;
  /** update single row of the table: "AccountType" */
  update_AccountType_by_pk?: Maybe<AccountType>;
  /** update data of the table: "ColorAspect" */
  update_ColorAspect?: Maybe<ColorAspect_Mutation_Response>;
  /** update single row of the table: "ColorAspect" */
  update_ColorAspect_by_pk?: Maybe<ColorAspect>;
  /** update data of the table: "GuildPosition" */
  update_GuildPosition?: Maybe<GuildPosition_Mutation_Response>;
  /** update single row of the table: "GuildPosition" */
  update_GuildPosition_by_pk?: Maybe<GuildPosition>;
  /** update data of the table: "GuildStatus" */
  update_GuildStatus?: Maybe<GuildStatus_Mutation_Response>;
  /** update single row of the table: "GuildStatus" */
  update_GuildStatus_by_pk?: Maybe<GuildStatus>;
  /** update data of the table: "GuildType" */
  update_GuildType?: Maybe<GuildType_Mutation_Response>;
  /** update single row of the table: "GuildType" */
  update_GuildType_by_pk?: Maybe<GuildType>;
  /** update data of the table: "PlayerRank" */
  update_PlayerRank?: Maybe<PlayerRank_Mutation_Response>;
  /** update single row of the table: "PlayerRank" */
  update_PlayerRank_by_pk?: Maybe<PlayerRank>;
  /** update data of the table: "QuestCompletionStatus" */
  update_QuestCompletionStatus?: Maybe<QuestCompletionStatus_Mutation_Response>;
  /** update single row of the table: "QuestCompletionStatus" */
  update_QuestCompletionStatus_by_pk?: Maybe<QuestCompletionStatus>;
  /** update data of the table: "QuestRepetition" */
  update_QuestRepetition?: Maybe<QuestRepetition_Mutation_Response>;
  /** update single row of the table: "QuestRepetition" */
  update_QuestRepetition_by_pk?: Maybe<QuestRepetition>;
  /** update data of the table: "QuestStatus" */
  update_QuestStatus?: Maybe<QuestStatus_Mutation_Response>;
  /** update single row of the table: "QuestStatus" */
  update_QuestStatus_by_pk?: Maybe<QuestStatus>;
  /** update data of the table: "SkillCategory" */
  update_SkillCategory?: Maybe<SkillCategory_Mutation_Response>;
  /** update single row of the table: "SkillCategory" */
  update_SkillCategory_by_pk?: Maybe<SkillCategory>;
  /** update data of the table: "guild" */
  update_guild?: Maybe<Guild_Mutation_Response>;
  /** update data of the table: "guild_account" */
  update_guild_account?: Maybe<Guild_Account_Mutation_Response>;
  /** update single row of the table: "guild_account" */
  update_guild_account_by_pk?: Maybe<Guild_Account>;
  /** update single row of the table: "guild" */
  update_guild_by_pk?: Maybe<Guild>;
  /** update data of the table: "guild_player" */
  update_guild_player?: Maybe<Guild_Player_Mutation_Response>;
  /** update single row of the table: "guild_player" */
  update_guild_player_by_pk?: Maybe<Guild_Player>;
  /** update data of the table: "me" */
  update_me?: Maybe<Me_Mutation_Response>;
  /** update data of the table: "player" */
  update_player?: Maybe<Player_Mutation_Response>;
  /** update data of the table: "player_account" */
  update_player_account?: Maybe<Player_Account_Mutation_Response>;
  /** update single row of the table: "player" */
  update_player_by_pk?: Maybe<Player>;
  /** update data of the table: "player_skill" */
  update_player_skill?: Maybe<Player_Skill_Mutation_Response>;
  /** update single row of the table: "player_skill" */
  update_player_skill_by_pk?: Maybe<Player_Skill>;
  /** update data of the table: "player_type" */
  update_player_type?: Maybe<Player_Type_Mutation_Response>;
  /** update single row of the table: "player_type" */
  update_player_type_by_pk?: Maybe<Player_Type>;
  /** update data of the table: "profile_cache" */
  update_profile_cache?: Maybe<Profile_Cache_Mutation_Response>;
  /** update single row of the table: "profile_cache" */
  update_profile_cache_by_pk?: Maybe<Profile_Cache>;
  /** update data of the table: "quest" */
  update_quest?: Maybe<Quest_Mutation_Response>;
  /** update single row of the table: "quest" */
  update_quest_by_pk?: Maybe<Quest>;
  /** update data of the table: "quest_completion" */
  update_quest_completion?: Maybe<Quest_Completion_Mutation_Response>;
  /** update single row of the table: "quest_completion" */
  update_quest_completion_by_pk?: Maybe<Quest_Completion>;
  /** update data of the table: "quest_skill" */
  update_quest_skill?: Maybe<Quest_Skill_Mutation_Response>;
  /** update single row of the table: "quest_skill" */
  update_quest_skill_by_pk?: Maybe<Quest_Skill>;
  /** update data of the table: "skill" */
  update_skill?: Maybe<Skill_Mutation_Response>;
  /** update single row of the table: "skill" */
  update_skill_by_pk?: Maybe<Skill>;
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
  objects: Array<AccountType_Insert_Input>;
  on_conflict?: Maybe<AccountType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AccountType_OneArgs = {
  object: AccountType_Insert_Input;
  on_conflict?: Maybe<AccountType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ColorAspectArgs = {
  objects: Array<ColorAspect_Insert_Input>;
  on_conflict?: Maybe<ColorAspect_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ColorAspect_OneArgs = {
  object: ColorAspect_Insert_Input;
  on_conflict?: Maybe<ColorAspect_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuildPositionArgs = {
  objects: Array<GuildPosition_Insert_Input>;
  on_conflict?: Maybe<GuildPosition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuildPosition_OneArgs = {
  object: GuildPosition_Insert_Input;
  on_conflict?: Maybe<GuildPosition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuildStatusArgs = {
  objects: Array<GuildStatus_Insert_Input>;
  on_conflict?: Maybe<GuildStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuildStatus_OneArgs = {
  object: GuildStatus_Insert_Input;
  on_conflict?: Maybe<GuildStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuildTypeArgs = {
  objects: Array<GuildType_Insert_Input>;
  on_conflict?: Maybe<GuildType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuildType_OneArgs = {
  object: GuildType_Insert_Input;
  on_conflict?: Maybe<GuildType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlayerRankArgs = {
  objects: Array<PlayerRank_Insert_Input>;
  on_conflict?: Maybe<PlayerRank_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlayerRank_OneArgs = {
  object: PlayerRank_Insert_Input;
  on_conflict?: Maybe<PlayerRank_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestCompletionStatusArgs = {
  objects: Array<QuestCompletionStatus_Insert_Input>;
  on_conflict?: Maybe<QuestCompletionStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestCompletionStatus_OneArgs = {
  object: QuestCompletionStatus_Insert_Input;
  on_conflict?: Maybe<QuestCompletionStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestRepetitionArgs = {
  objects: Array<QuestRepetition_Insert_Input>;
  on_conflict?: Maybe<QuestRepetition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestRepetition_OneArgs = {
  object: QuestRepetition_Insert_Input;
  on_conflict?: Maybe<QuestRepetition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestStatusArgs = {
  objects: Array<QuestStatus_Insert_Input>;
  on_conflict?: Maybe<QuestStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestStatus_OneArgs = {
  object: QuestStatus_Insert_Input;
  on_conflict?: Maybe<QuestStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SkillCategoryArgs = {
  objects: Array<SkillCategory_Insert_Input>;
  on_conflict?: Maybe<SkillCategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SkillCategory_OneArgs = {
  object: SkillCategory_Insert_Input;
  on_conflict?: Maybe<SkillCategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuildArgs = {
  objects: Array<Guild_Insert_Input>;
  on_conflict?: Maybe<Guild_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Guild_AccountArgs = {
  objects: Array<Guild_Account_Insert_Input>;
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
  objects: Array<Guild_Player_Insert_Input>;
  on_conflict?: Maybe<Guild_Player_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Guild_Player_OneArgs = {
  object: Guild_Player_Insert_Input;
  on_conflict?: Maybe<Guild_Player_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MeArgs = {
  objects: Array<Me_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Me_OneArgs = {
  object: Me_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_PlayerArgs = {
  objects: Array<Player_Insert_Input>;
  on_conflict?: Maybe<Player_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_AccountArgs = {
  objects: Array<Player_Account_Insert_Input>;
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
  objects: Array<Player_Skill_Insert_Input>;
  on_conflict?: Maybe<Player_Skill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_Skill_OneArgs = {
  object: Player_Skill_Insert_Input;
  on_conflict?: Maybe<Player_Skill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_TypeArgs = {
  objects: Array<Player_Type_Insert_Input>;
  on_conflict?: Maybe<Player_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Player_Type_OneArgs = {
  object: Player_Type_Insert_Input;
  on_conflict?: Maybe<Player_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profile_CacheArgs = {
  objects: Array<Profile_Cache_Insert_Input>;
  on_conflict?: Maybe<Profile_Cache_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profile_Cache_OneArgs = {
  object: Profile_Cache_Insert_Input;
  on_conflict?: Maybe<Profile_Cache_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestArgs = {
  objects: Array<Quest_Insert_Input>;
  on_conflict?: Maybe<Quest_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_CompletionArgs = {
  objects: Array<Quest_Completion_Insert_Input>;
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
  objects: Array<Quest_Skill_Insert_Input>;
  on_conflict?: Maybe<Quest_Skill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quest_Skill_OneArgs = {
  object: Quest_Skill_Insert_Input;
  on_conflict?: Maybe<Quest_Skill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SkillArgs = {
  objects: Array<Skill_Insert_Input>;
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
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
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
  /** An array relationship */
  Accounts: Array<Player_Account>;
  /** An aggregated array relationship */
  Accounts_aggregate: Player_Account_Aggregate;
  /** An object relationship */
  ColorAspect?: Maybe<ColorAspect>;
  /** An array relationship */
  Player_Skills: Array<Player_Skill>;
  /** An aggregated array relationship */
  Player_Skills_aggregate: Player_Skill_Aggregate;
  availability_hours?: Maybe<Scalars['Int']>;
  /** Remote relationship field */
  box_profile?: Maybe<BoxProfile>;
  /** Remote relationship field */
  brightid_status?: Maybe<BrightIdStatus>;
  color_mask?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** Remote relationship field */
  daohausMemberships: Array<Member>;
  discord_id?: Maybe<Scalars['String']>;
  ethereum_address: Scalars['String'];
  /** An array relationship */
  guilds: Array<Guild_Player>;
  /** An aggregated array relationship */
  guilds_aggregate: Guild_Player_Aggregate;
  id: Scalars['uuid'];
  /** An object relationship */
  playerType?: Maybe<Player_Type>;
  player_type_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  profile_cache?: Maybe<Profile_Cache>;
  /** An array relationship */
  quest_completions: Array<Quest_Completion>;
  /** An aggregated array relationship */
  quest_completions_aggregate: Quest_Completion_Aggregate;
  /** An array relationship */
  quests: Array<Quest>;
  /** An aggregated array relationship */
  quests_aggregate: Quest_Aggregate;
  rank?: Maybe<PlayerRank_Enum>;
  role?: Maybe<Scalars['String']>;
  season_xp: Scalars['numeric'];
  timezone?: Maybe<Scalars['String']>;
  /** Remote relationship field */
  token_balances?: Maybe<TokenBalances>;
  total_xp?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username: Scalars['String'];
};


/** columns and relationships of "player" */
export type PlayerAccountsArgs = {
  distinct_on?: Maybe<Array<Player_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Account_Order_By>>;
  where?: Maybe<Player_Account_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Account_Order_By>>;
  where?: Maybe<Player_Account_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerPlayer_SkillsArgs = {
  distinct_on?: Maybe<Array<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerPlayer_Skills_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerGuildsArgs = {
  distinct_on?: Maybe<Array<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerGuilds_AggregateArgs = {
  distinct_on?: Maybe<Array<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerQuest_CompletionsArgs = {
  distinct_on?: Maybe<Array<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerQuest_Completions_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerQuestsArgs = {
  distinct_on?: Maybe<Array<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerQuests_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};

/** columns and relationships of "player_account" */
export type Player_Account = {
  /** An object relationship */
  Player: Player;
  identifier: Scalars['String'];
  player_id: Scalars['uuid'];
  type: AccountType_Enum;
};

/** aggregated selection of "player_account" */
export type Player_Account_Aggregate = {
  aggregate?: Maybe<Player_Account_Aggregate_Fields>;
  nodes: Array<Player_Account>;
};

/** aggregate fields of "player_account" */
export type Player_Account_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Player_Account_Max_Fields>;
  min?: Maybe<Player_Account_Min_Fields>;
};


/** aggregate fields of "player_account" */
export type Player_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Player_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player_account" */
export type Player_Account_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Player_Account_Max_Order_By>;
  min?: Maybe<Player_Account_Min_Order_By>;
};

/** input type for inserting array relation for remote table "player_account" */
export type Player_Account_Arr_Rel_Insert_Input = {
  data: Array<Player_Account_Insert_Input>;
  on_conflict?: Maybe<Player_Account_On_Conflict>;
};

/** Boolean expression to filter rows from the table "player_account". All fields are combined with a logical 'AND'. */
export type Player_Account_Bool_Exp = {
  Player?: Maybe<Player_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Player_Account_Bool_Exp>>>;
  _not?: Maybe<Player_Account_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Player_Account_Bool_Exp>>>;
  identifier?: Maybe<String_Comparison_Exp>;
  player_id?: Maybe<Uuid_Comparison_Exp>;
  type?: Maybe<AccountType_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "player_account" */
export enum Player_Account_Constraint {
  /** unique or primary key constraint */
  AccountIdentifierTypeKey = 'Account_identifier_type_key'
}

/** input type for inserting data into table "player_account" */
export type Player_Account_Insert_Input = {
  Player?: Maybe<Player_Obj_Rel_Insert_Input>;
  identifier?: Maybe<Scalars['String']>;
  player_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<AccountType_Enum>;
};

/** aggregate max on columns */
export type Player_Account_Max_Fields = {
  identifier?: Maybe<Scalars['String']>;
  player_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "player_account" */
export type Player_Account_Max_Order_By = {
  identifier?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Account_Min_Fields = {
  identifier?: Maybe<Scalars['String']>;
  player_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "player_account" */
export type Player_Account_Min_Order_By = {
  identifier?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "player_account" */
export type Player_Account_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Player_Account>;
};

/** input type for inserting object relation for remote table "player_account" */
export type Player_Account_Obj_Rel_Insert_Input = {
  data: Player_Account_Insert_Input;
  on_conflict?: Maybe<Player_Account_On_Conflict>;
};

/** on conflict condition type for table "player_account" */
export type Player_Account_On_Conflict = {
  constraint: Player_Account_Constraint;
  update_columns: Array<Player_Account_Update_Column>;
  where?: Maybe<Player_Account_Bool_Exp>;
};

/** ordering options when selecting data from "player_account" */
export type Player_Account_Order_By = {
  Player?: Maybe<Player_Order_By>;
  identifier?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
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
  identifier?: Maybe<Scalars['String']>;
  player_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<AccountType_Enum>;
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
  aggregate?: Maybe<Player_Aggregate_Fields>;
  nodes: Array<Player>;
};

/** aggregate fields of "player" */
export type Player_Aggregate_Fields = {
  avg?: Maybe<Player_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Player_Max_Fields>;
  min?: Maybe<Player_Min_Fields>;
  stddev?: Maybe<Player_Stddev_Fields>;
  stddev_pop?: Maybe<Player_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Player_Stddev_Samp_Fields>;
  sum?: Maybe<Player_Sum_Fields>;
  var_pop?: Maybe<Player_Var_Pop_Fields>;
  var_samp?: Maybe<Player_Var_Samp_Fields>;
  variance?: Maybe<Player_Variance_Fields>;
};


/** aggregate fields of "player" */
export type Player_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Player_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player" */
export type Player_Aggregate_Order_By = {
  avg?: Maybe<Player_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Player_Max_Order_By>;
  min?: Maybe<Player_Min_Order_By>;
  stddev?: Maybe<Player_Stddev_Order_By>;
  stddev_pop?: Maybe<Player_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Player_Stddev_Samp_Order_By>;
  sum?: Maybe<Player_Sum_Order_By>;
  var_pop?: Maybe<Player_Var_Pop_Order_By>;
  var_samp?: Maybe<Player_Var_Samp_Order_By>;
  variance?: Maybe<Player_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "player" */
export type Player_Arr_Rel_Insert_Input = {
  data: Array<Player_Insert_Input>;
  on_conflict?: Maybe<Player_On_Conflict>;
};

/** aggregate avg on columns */
export type Player_Avg_Fields = {
  availability_hours?: Maybe<Scalars['Float']>;
  color_mask?: Maybe<Scalars['Float']>;
  player_type_id?: Maybe<Scalars['Float']>;
  season_xp?: Maybe<Scalars['Float']>;
  total_xp?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "player" */
export type Player_Avg_Order_By = {
  availability_hours?: Maybe<Order_By>;
  color_mask?: Maybe<Order_By>;
  player_type_id?: Maybe<Order_By>;
  season_xp?: Maybe<Order_By>;
  total_xp?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "player". All fields are combined with a logical 'AND'. */
export type Player_Bool_Exp = {
  Accounts?: Maybe<Player_Account_Bool_Exp>;
  ColorAspect?: Maybe<ColorAspect_Bool_Exp>;
  Player_Skills?: Maybe<Player_Skill_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Player_Bool_Exp>>>;
  _not?: Maybe<Player_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Player_Bool_Exp>>>;
  availability_hours?: Maybe<Int_Comparison_Exp>;
  color_mask?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  discord_id?: Maybe<String_Comparison_Exp>;
  ethereum_address?: Maybe<String_Comparison_Exp>;
  guilds?: Maybe<Guild_Player_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  playerType?: Maybe<Player_Type_Bool_Exp>;
  player_type_id?: Maybe<Int_Comparison_Exp>;
  profile_cache?: Maybe<Profile_Cache_Bool_Exp>;
  quest_completions?: Maybe<Quest_Completion_Bool_Exp>;
  quests?: Maybe<Quest_Bool_Exp>;
  rank?: Maybe<PlayerRank_Enum_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  season_xp?: Maybe<Numeric_Comparison_Exp>;
  timezone?: Maybe<String_Comparison_Exp>;
  total_xp?: Maybe<Numeric_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
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
  availability_hours?: Maybe<Scalars['Int']>;
  color_mask?: Maybe<Scalars['Int']>;
  player_type_id?: Maybe<Scalars['Int']>;
  season_xp?: Maybe<Scalars['numeric']>;
  total_xp?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "player" */
export type Player_Insert_Input = {
  Accounts?: Maybe<Player_Account_Arr_Rel_Insert_Input>;
  ColorAspect?: Maybe<ColorAspect_Obj_Rel_Insert_Input>;
  Player_Skills?: Maybe<Player_Skill_Arr_Rel_Insert_Input>;
  availability_hours?: Maybe<Scalars['Int']>;
  color_mask?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discord_id?: Maybe<Scalars['String']>;
  ethereum_address?: Maybe<Scalars['String']>;
  guilds?: Maybe<Guild_Player_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  playerType?: Maybe<Player_Type_Obj_Rel_Insert_Input>;
  player_type_id?: Maybe<Scalars['Int']>;
  profile_cache?: Maybe<Profile_Cache_Obj_Rel_Insert_Input>;
  quest_completions?: Maybe<Quest_Completion_Arr_Rel_Insert_Input>;
  quests?: Maybe<Quest_Arr_Rel_Insert_Input>;
  rank?: Maybe<PlayerRank_Enum>;
  role?: Maybe<Scalars['String']>;
  season_xp?: Maybe<Scalars['numeric']>;
  timezone?: Maybe<Scalars['String']>;
  total_xp?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Player_Max_Fields = {
  availability_hours?: Maybe<Scalars['Int']>;
  color_mask?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discord_id?: Maybe<Scalars['String']>;
  ethereum_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  player_type_id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  season_xp?: Maybe<Scalars['numeric']>;
  timezone?: Maybe<Scalars['String']>;
  total_xp?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "player" */
export type Player_Max_Order_By = {
  availability_hours?: Maybe<Order_By>;
  color_mask?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discord_id?: Maybe<Order_By>;
  ethereum_address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  player_type_id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  season_xp?: Maybe<Order_By>;
  timezone?: Maybe<Order_By>;
  total_xp?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Min_Fields = {
  availability_hours?: Maybe<Scalars['Int']>;
  color_mask?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discord_id?: Maybe<Scalars['String']>;
  ethereum_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  player_type_id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  season_xp?: Maybe<Scalars['numeric']>;
  timezone?: Maybe<Scalars['String']>;
  total_xp?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "player" */
export type Player_Min_Order_By = {
  availability_hours?: Maybe<Order_By>;
  color_mask?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discord_id?: Maybe<Order_By>;
  ethereum_address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  player_type_id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  season_xp?: Maybe<Order_By>;
  timezone?: Maybe<Order_By>;
  total_xp?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "player" */
export type Player_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Player>;
};

/** input type for inserting object relation for remote table "player" */
export type Player_Obj_Rel_Insert_Input = {
  data: Player_Insert_Input;
  on_conflict?: Maybe<Player_On_Conflict>;
};

/** on conflict condition type for table "player" */
export type Player_On_Conflict = {
  constraint: Player_Constraint;
  update_columns: Array<Player_Update_Column>;
  where?: Maybe<Player_Bool_Exp>;
};

/** ordering options when selecting data from "player" */
export type Player_Order_By = {
  Accounts_aggregate?: Maybe<Player_Account_Aggregate_Order_By>;
  ColorAspect?: Maybe<ColorAspect_Order_By>;
  Player_Skills_aggregate?: Maybe<Player_Skill_Aggregate_Order_By>;
  availability_hours?: Maybe<Order_By>;
  color_mask?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discord_id?: Maybe<Order_By>;
  ethereum_address?: Maybe<Order_By>;
  guilds_aggregate?: Maybe<Guild_Player_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  playerType?: Maybe<Player_Type_Order_By>;
  player_type_id?: Maybe<Order_By>;
  profile_cache?: Maybe<Profile_Cache_Order_By>;
  quest_completions_aggregate?: Maybe<Quest_Completion_Aggregate_Order_By>;
  quests_aggregate?: Maybe<Quest_Aggregate_Order_By>;
  rank?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  season_xp?: Maybe<Order_By>;
  timezone?: Maybe<Order_By>;
  total_xp?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "player" */
export type Player_Pk_Columns_Input = {
  id: Scalars['uuid'];
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
  availability_hours?: Maybe<Scalars['Int']>;
  color_mask?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discord_id?: Maybe<Scalars['String']>;
  ethereum_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  player_type_id?: Maybe<Scalars['Int']>;
  rank?: Maybe<PlayerRank_Enum>;
  role?: Maybe<Scalars['String']>;
  season_xp?: Maybe<Scalars['numeric']>;
  timezone?: Maybe<Scalars['String']>;
  total_xp?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** columns and relationships of "player_skill" */
export type Player_Skill = {
  /** An object relationship */
  Skill: Skill;
  player_id: Scalars['uuid'];
  skill_id: Scalars['uuid'];
};

/** aggregated selection of "player_skill" */
export type Player_Skill_Aggregate = {
  aggregate?: Maybe<Player_Skill_Aggregate_Fields>;
  nodes: Array<Player_Skill>;
};

/** aggregate fields of "player_skill" */
export type Player_Skill_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Player_Skill_Max_Fields>;
  min?: Maybe<Player_Skill_Min_Fields>;
};


/** aggregate fields of "player_skill" */
export type Player_Skill_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Player_Skill_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player_skill" */
export type Player_Skill_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Player_Skill_Max_Order_By>;
  min?: Maybe<Player_Skill_Min_Order_By>;
};

/** input type for inserting array relation for remote table "player_skill" */
export type Player_Skill_Arr_Rel_Insert_Input = {
  data: Array<Player_Skill_Insert_Input>;
  on_conflict?: Maybe<Player_Skill_On_Conflict>;
};

/** Boolean expression to filter rows from the table "player_skill". All fields are combined with a logical 'AND'. */
export type Player_Skill_Bool_Exp = {
  Skill?: Maybe<Skill_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Player_Skill_Bool_Exp>>>;
  _not?: Maybe<Player_Skill_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Player_Skill_Bool_Exp>>>;
  player_id?: Maybe<Uuid_Comparison_Exp>;
  skill_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "player_skill" */
export enum Player_Skill_Constraint {
  /** unique or primary key constraint */
  PlayerSkillUniqueKey = 'Player_Skill_unique_key'
}

/** input type for inserting data into table "player_skill" */
export type Player_Skill_Insert_Input = {
  Skill?: Maybe<Skill_Obj_Rel_Insert_Input>;
  player_id?: Maybe<Scalars['uuid']>;
  skill_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Player_Skill_Max_Fields = {
  player_id?: Maybe<Scalars['uuid']>;
  skill_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "player_skill" */
export type Player_Skill_Max_Order_By = {
  player_id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Skill_Min_Fields = {
  player_id?: Maybe<Scalars['uuid']>;
  skill_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "player_skill" */
export type Player_Skill_Min_Order_By = {
  player_id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "player_skill" */
export type Player_Skill_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Player_Skill>;
};

/** input type for inserting object relation for remote table "player_skill" */
export type Player_Skill_Obj_Rel_Insert_Input = {
  data: Player_Skill_Insert_Input;
  on_conflict?: Maybe<Player_Skill_On_Conflict>;
};

/** on conflict condition type for table "player_skill" */
export type Player_Skill_On_Conflict = {
  constraint: Player_Skill_Constraint;
  update_columns: Array<Player_Skill_Update_Column>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};

/** ordering options when selecting data from "player_skill" */
export type Player_Skill_Order_By = {
  Skill?: Maybe<Skill_Order_By>;
  player_id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "player_skill" */
export type Player_Skill_Pk_Columns_Input = {
  player_id: Scalars['uuid'];
  skill_id: Scalars['uuid'];
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
  player_id?: Maybe<Scalars['uuid']>;
  skill_id?: Maybe<Scalars['uuid']>;
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
  availability_hours?: Maybe<Scalars['Float']>;
  color_mask?: Maybe<Scalars['Float']>;
  player_type_id?: Maybe<Scalars['Float']>;
  season_xp?: Maybe<Scalars['Float']>;
  total_xp?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "player" */
export type Player_Stddev_Order_By = {
  availability_hours?: Maybe<Order_By>;
  color_mask?: Maybe<Order_By>;
  player_type_id?: Maybe<Order_By>;
  season_xp?: Maybe<Order_By>;
  total_xp?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Player_Stddev_Pop_Fields = {
  availability_hours?: Maybe<Scalars['Float']>;
  color_mask?: Maybe<Scalars['Float']>;
  player_type_id?: Maybe<Scalars['Float']>;
  season_xp?: Maybe<Scalars['Float']>;
  total_xp?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "player" */
export type Player_Stddev_Pop_Order_By = {
  availability_hours?: Maybe<Order_By>;
  color_mask?: Maybe<Order_By>;
  player_type_id?: Maybe<Order_By>;
  season_xp?: Maybe<Order_By>;
  total_xp?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Player_Stddev_Samp_Fields = {
  availability_hours?: Maybe<Scalars['Float']>;
  color_mask?: Maybe<Scalars['Float']>;
  player_type_id?: Maybe<Scalars['Float']>;
  season_xp?: Maybe<Scalars['Float']>;
  total_xp?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "player" */
export type Player_Stddev_Samp_Order_By = {
  availability_hours?: Maybe<Order_By>;
  color_mask?: Maybe<Order_By>;
  player_type_id?: Maybe<Order_By>;
  season_xp?: Maybe<Order_By>;
  total_xp?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Player_Sum_Fields = {
  availability_hours?: Maybe<Scalars['Int']>;
  color_mask?: Maybe<Scalars['Int']>;
  player_type_id?: Maybe<Scalars['Int']>;
  season_xp?: Maybe<Scalars['numeric']>;
  total_xp?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "player" */
export type Player_Sum_Order_By = {
  availability_hours?: Maybe<Order_By>;
  color_mask?: Maybe<Order_By>;
  player_type_id?: Maybe<Order_By>;
  season_xp?: Maybe<Order_By>;
  total_xp?: Maybe<Order_By>;
};

/** columns and relationships of "player_type" */
export type Player_Type = {
  description: Scalars['String'];
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

/** aggregated selection of "player_type" */
export type Player_Type_Aggregate = {
  aggregate?: Maybe<Player_Type_Aggregate_Fields>;
  nodes: Array<Player_Type>;
};

/** aggregate fields of "player_type" */
export type Player_Type_Aggregate_Fields = {
  avg?: Maybe<Player_Type_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Player_Type_Max_Fields>;
  min?: Maybe<Player_Type_Min_Fields>;
  stddev?: Maybe<Player_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Player_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Player_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Player_Type_Sum_Fields>;
  var_pop?: Maybe<Player_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Player_Type_Var_Samp_Fields>;
  variance?: Maybe<Player_Type_Variance_Fields>;
};


/** aggregate fields of "player_type" */
export type Player_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Player_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player_type" */
export type Player_Type_Aggregate_Order_By = {
  avg?: Maybe<Player_Type_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Player_Type_Max_Order_By>;
  min?: Maybe<Player_Type_Min_Order_By>;
  stddev?: Maybe<Player_Type_Stddev_Order_By>;
  stddev_pop?: Maybe<Player_Type_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Player_Type_Stddev_Samp_Order_By>;
  sum?: Maybe<Player_Type_Sum_Order_By>;
  var_pop?: Maybe<Player_Type_Var_Pop_Order_By>;
  var_samp?: Maybe<Player_Type_Var_Samp_Order_By>;
  variance?: Maybe<Player_Type_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "player_type" */
export type Player_Type_Arr_Rel_Insert_Input = {
  data: Array<Player_Type_Insert_Input>;
  on_conflict?: Maybe<Player_Type_On_Conflict>;
};

/** aggregate avg on columns */
export type Player_Type_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "player_type" */
export type Player_Type_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "player_type". All fields are combined with a logical 'AND'. */
export type Player_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Player_Type_Bool_Exp>>>;
  _not?: Maybe<Player_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Player_Type_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  imageUrl?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
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
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "player_type" */
export type Player_Type_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Player_Type_Max_Fields = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "player_type" */
export type Player_Type_Max_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Type_Min_Fields = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "player_type" */
export type Player_Type_Min_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "player_type" */
export type Player_Type_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Player_Type>;
};

/** input type for inserting object relation for remote table "player_type" */
export type Player_Type_Obj_Rel_Insert_Input = {
  data: Player_Type_Insert_Input;
  on_conflict?: Maybe<Player_Type_On_Conflict>;
};

/** on conflict condition type for table "player_type" */
export type Player_Type_On_Conflict = {
  constraint: Player_Type_Constraint;
  update_columns: Array<Player_Type_Update_Column>;
  where?: Maybe<Player_Type_Bool_Exp>;
};

/** ordering options when selecting data from "player_type" */
export type Player_Type_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "player_type" */
export type Player_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
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
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Player_Type_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "player_type" */
export type Player_Type_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Player_Type_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "player_type" */
export type Player_Type_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Player_Type_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "player_type" */
export type Player_Type_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Player_Type_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "player_type" */
export type Player_Type_Sum_Order_By = {
  id?: Maybe<Order_By>;
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
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "player_type" */
export type Player_Type_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Player_Type_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "player_type" */
export type Player_Type_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Player_Type_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "player_type" */
export type Player_Type_Variance_Order_By = {
  id?: Maybe<Order_By>;
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
  availability_hours?: Maybe<Scalars['Float']>;
  color_mask?: Maybe<Scalars['Float']>;
  player_type_id?: Maybe<Scalars['Float']>;
  season_xp?: Maybe<Scalars['Float']>;
  total_xp?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "player" */
export type Player_Var_Pop_Order_By = {
  availability_hours?: Maybe<Order_By>;
  color_mask?: Maybe<Order_By>;
  player_type_id?: Maybe<Order_By>;
  season_xp?: Maybe<Order_By>;
  total_xp?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Player_Var_Samp_Fields = {
  availability_hours?: Maybe<Scalars['Float']>;
  color_mask?: Maybe<Scalars['Float']>;
  player_type_id?: Maybe<Scalars['Float']>;
  season_xp?: Maybe<Scalars['Float']>;
  total_xp?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "player" */
export type Player_Var_Samp_Order_By = {
  availability_hours?: Maybe<Order_By>;
  color_mask?: Maybe<Order_By>;
  player_type_id?: Maybe<Order_By>;
  season_xp?: Maybe<Order_By>;
  total_xp?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Player_Variance_Fields = {
  availability_hours?: Maybe<Scalars['Float']>;
  color_mask?: Maybe<Scalars['Float']>;
  player_type_id?: Maybe<Scalars['Float']>;
  season_xp?: Maybe<Scalars['Float']>;
  total_xp?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "player" */
export type Player_Variance_Order_By = {
  availability_hours?: Maybe<Order_By>;
  color_mask?: Maybe<Order_By>;
  player_type_id?: Maybe<Order_By>;
  season_xp?: Maybe<Order_By>;
  total_xp?: Maybe<Order_By>;
};

/** columns and relationships of "PlayerRank" */
export type PlayerRank = {
  rank: Scalars['String'];
};

/** aggregated selection of "PlayerRank" */
export type PlayerRank_Aggregate = {
  aggregate?: Maybe<PlayerRank_Aggregate_Fields>;
  nodes: Array<PlayerRank>;
};

/** aggregate fields of "PlayerRank" */
export type PlayerRank_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PlayerRank_Max_Fields>;
  min?: Maybe<PlayerRank_Min_Fields>;
};


/** aggregate fields of "PlayerRank" */
export type PlayerRank_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<PlayerRank_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "PlayerRank" */
export type PlayerRank_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<PlayerRank_Max_Order_By>;
  min?: Maybe<PlayerRank_Min_Order_By>;
};

/** input type for inserting array relation for remote table "PlayerRank" */
export type PlayerRank_Arr_Rel_Insert_Input = {
  data: Array<PlayerRank_Insert_Input>;
  on_conflict?: Maybe<PlayerRank_On_Conflict>;
};

/** Boolean expression to filter rows from the table "PlayerRank". All fields are combined with a logical 'AND'. */
export type PlayerRank_Bool_Exp = {
  _and?: Maybe<Array<Maybe<PlayerRank_Bool_Exp>>>;
  _not?: Maybe<PlayerRank_Bool_Exp>;
  _or?: Maybe<Array<Maybe<PlayerRank_Bool_Exp>>>;
  rank?: Maybe<String_Comparison_Exp>;
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
  _eq?: Maybe<PlayerRank_Enum>;
  _in?: Maybe<Array<PlayerRank_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<PlayerRank_Enum>;
  _nin?: Maybe<Array<PlayerRank_Enum>>;
};

/** input type for inserting data into table "PlayerRank" */
export type PlayerRank_Insert_Input = {
  rank?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PlayerRank_Max_Fields = {
  rank?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "PlayerRank" */
export type PlayerRank_Max_Order_By = {
  rank?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type PlayerRank_Min_Fields = {
  rank?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "PlayerRank" */
export type PlayerRank_Min_Order_By = {
  rank?: Maybe<Order_By>;
};

/** response of any mutation on the table "PlayerRank" */
export type PlayerRank_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<PlayerRank>;
};

/** input type for inserting object relation for remote table "PlayerRank" */
export type PlayerRank_Obj_Rel_Insert_Input = {
  data: PlayerRank_Insert_Input;
  on_conflict?: Maybe<PlayerRank_On_Conflict>;
};

/** on conflict condition type for table "PlayerRank" */
export type PlayerRank_On_Conflict = {
  constraint: PlayerRank_Constraint;
  update_columns: Array<PlayerRank_Update_Column>;
  where?: Maybe<PlayerRank_Bool_Exp>;
};

/** ordering options when selecting data from "PlayerRank" */
export type PlayerRank_Order_By = {
  rank?: Maybe<Order_By>;
};

/** primary key columns input for table: "PlayerRank" */
export type PlayerRank_Pk_Columns_Input = {
  rank: Scalars['String'];
};

/** select columns of table "PlayerRank" */
export enum PlayerRank_Select_Column {
  /** column name */
  Rank = 'rank'
}

/** input type for updating data in table "PlayerRank" */
export type PlayerRank_Set_Input = {
  rank?: Maybe<Scalars['String']>;
};

/** update columns of table "PlayerRank" */
export enum PlayerRank_Update_Column {
  /** column name */
  Rank = 'rank'
}

/** columns and relationships of "profile_cache" */
export type Profile_Cache = {
  backgroundImageURL?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  imageURL?: Maybe<Scalars['String']>;
  last_checked_at?: Maybe<Scalars['timestamptz']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  player: Player;
  playerId: Scalars['uuid'];
  website?: Maybe<Scalars['String']>;
};

/** aggregated selection of "profile_cache" */
export type Profile_Cache_Aggregate = {
  aggregate?: Maybe<Profile_Cache_Aggregate_Fields>;
  nodes: Array<Profile_Cache>;
};

/** aggregate fields of "profile_cache" */
export type Profile_Cache_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Profile_Cache_Max_Fields>;
  min?: Maybe<Profile_Cache_Min_Fields>;
};


/** aggregate fields of "profile_cache" */
export type Profile_Cache_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Profile_Cache_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "profile_cache" */
export type Profile_Cache_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Profile_Cache_Max_Order_By>;
  min?: Maybe<Profile_Cache_Min_Order_By>;
};

/** input type for inserting array relation for remote table "profile_cache" */
export type Profile_Cache_Arr_Rel_Insert_Input = {
  data: Array<Profile_Cache_Insert_Input>;
  on_conflict?: Maybe<Profile_Cache_On_Conflict>;
};

/** Boolean expression to filter rows from the table "profile_cache". All fields are combined with a logical 'AND'. */
export type Profile_Cache_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Profile_Cache_Bool_Exp>>>;
  _not?: Maybe<Profile_Cache_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Profile_Cache_Bool_Exp>>>;
  backgroundImageURL?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  emoji?: Maybe<String_Comparison_Exp>;
  gender?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  imageURL?: Maybe<String_Comparison_Exp>;
  last_checked_at?: Maybe<Timestamptz_Comparison_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  player?: Maybe<Player_Bool_Exp>;
  playerId?: Maybe<Uuid_Comparison_Exp>;
  website?: Maybe<String_Comparison_Exp>;
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
  backgroundImageURL?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageURL?: Maybe<Scalars['String']>;
  last_checked_at?: Maybe<Scalars['timestamptz']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  player?: Maybe<Player_Obj_Rel_Insert_Input>;
  playerId?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Profile_Cache_Max_Fields = {
  backgroundImageURL?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageURL?: Maybe<Scalars['String']>;
  last_checked_at?: Maybe<Scalars['timestamptz']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  playerId?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "profile_cache" */
export type Profile_Cache_Max_Order_By = {
  backgroundImageURL?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  emoji?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageURL?: Maybe<Order_By>;
  last_checked_at?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  playerId?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Profile_Cache_Min_Fields = {
  backgroundImageURL?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageURL?: Maybe<Scalars['String']>;
  last_checked_at?: Maybe<Scalars['timestamptz']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  playerId?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "profile_cache" */
export type Profile_Cache_Min_Order_By = {
  backgroundImageURL?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  emoji?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageURL?: Maybe<Order_By>;
  last_checked_at?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  playerId?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** response of any mutation on the table "profile_cache" */
export type Profile_Cache_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Profile_Cache>;
};

/** input type for inserting object relation for remote table "profile_cache" */
export type Profile_Cache_Obj_Rel_Insert_Input = {
  data: Profile_Cache_Insert_Input;
  on_conflict?: Maybe<Profile_Cache_On_Conflict>;
};

/** on conflict condition type for table "profile_cache" */
export type Profile_Cache_On_Conflict = {
  constraint: Profile_Cache_Constraint;
  update_columns: Array<Profile_Cache_Update_Column>;
  where?: Maybe<Profile_Cache_Bool_Exp>;
};

/** ordering options when selecting data from "profile_cache" */
export type Profile_Cache_Order_By = {
  backgroundImageURL?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  emoji?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageURL?: Maybe<Order_By>;
  last_checked_at?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  player?: Maybe<Player_Order_By>;
  playerId?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** primary key columns input for table: "profile_cache" */
export type Profile_Cache_Pk_Columns_Input = {
  id: Scalars['uuid'];
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
  backgroundImageURL?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageURL?: Maybe<Scalars['String']>;
  last_checked_at?: Maybe<Scalars['timestamptz']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  playerId?: Maybe<Scalars['uuid']>;
  website?: Maybe<Scalars['String']>;
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
  getBoxProfile?: Maybe<BoxProfile>;
  getBrightIdStatus?: Maybe<BrightIdStatus>;
  getDaoHausMemberships: Array<Member>;
  getTokenBalances?: Maybe<TokenBalances>;
  getTopPSeedHolders?: Maybe<Array<TokenBalances>>;
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
  /** fetch data from the table: "AccountType" */
  AccountType: Array<AccountType>;
  /** fetch aggregated fields from the table: "AccountType" */
  AccountType_aggregate: AccountType_Aggregate;
  /** fetch data from the table: "AccountType" using primary key columns */
  AccountType_by_pk?: Maybe<AccountType>;
  /** fetch data from the table: "ColorAspect" */
  ColorAspect: Array<ColorAspect>;
  /** fetch aggregated fields from the table: "ColorAspect" */
  ColorAspect_aggregate: ColorAspect_Aggregate;
  /** fetch data from the table: "ColorAspect" using primary key columns */
  ColorAspect_by_pk?: Maybe<ColorAspect>;
  /** fetch data from the table: "GuildPosition" */
  GuildPosition: Array<GuildPosition>;
  /** fetch aggregated fields from the table: "GuildPosition" */
  GuildPosition_aggregate: GuildPosition_Aggregate;
  /** fetch data from the table: "GuildPosition" using primary key columns */
  GuildPosition_by_pk?: Maybe<GuildPosition>;
  /** fetch data from the table: "GuildStatus" */
  GuildStatus: Array<GuildStatus>;
  /** fetch aggregated fields from the table: "GuildStatus" */
  GuildStatus_aggregate: GuildStatus_Aggregate;
  /** fetch data from the table: "GuildStatus" using primary key columns */
  GuildStatus_by_pk?: Maybe<GuildStatus>;
  /** fetch data from the table: "GuildType" */
  GuildType: Array<GuildType>;
  /** fetch aggregated fields from the table: "GuildType" */
  GuildType_aggregate: GuildType_Aggregate;
  /** fetch data from the table: "GuildType" using primary key columns */
  GuildType_by_pk?: Maybe<GuildType>;
  /** fetch data from the table: "PlayerRank" */
  PlayerRank: Array<PlayerRank>;
  /** fetch aggregated fields from the table: "PlayerRank" */
  PlayerRank_aggregate: PlayerRank_Aggregate;
  /** fetch data from the table: "PlayerRank" using primary key columns */
  PlayerRank_by_pk?: Maybe<PlayerRank>;
  /** fetch data from the table: "QuestCompletionStatus" */
  QuestCompletionStatus: Array<QuestCompletionStatus>;
  /** fetch aggregated fields from the table: "QuestCompletionStatus" */
  QuestCompletionStatus_aggregate: QuestCompletionStatus_Aggregate;
  /** fetch data from the table: "QuestCompletionStatus" using primary key columns */
  QuestCompletionStatus_by_pk?: Maybe<QuestCompletionStatus>;
  /** fetch data from the table: "QuestRepetition" */
  QuestRepetition: Array<QuestRepetition>;
  /** fetch aggregated fields from the table: "QuestRepetition" */
  QuestRepetition_aggregate: QuestRepetition_Aggregate;
  /** fetch data from the table: "QuestRepetition" using primary key columns */
  QuestRepetition_by_pk?: Maybe<QuestRepetition>;
  /** fetch data from the table: "QuestStatus" */
  QuestStatus: Array<QuestStatus>;
  /** fetch aggregated fields from the table: "QuestStatus" */
  QuestStatus_aggregate: QuestStatus_Aggregate;
  /** fetch data from the table: "QuestStatus" using primary key columns */
  QuestStatus_by_pk?: Maybe<QuestStatus>;
  /** fetch data from the table: "SkillCategory" */
  SkillCategory: Array<SkillCategory>;
  /** fetch aggregated fields from the table: "SkillCategory" */
  SkillCategory_aggregate: SkillCategory_Aggregate;
  /** fetch data from the table: "SkillCategory" using primary key columns */
  SkillCategory_by_pk?: Maybe<SkillCategory>;
  getBoxProfile?: Maybe<BoxProfile>;
  getBrightIdStatus?: Maybe<BrightIdStatus>;
  getDaoHausMemberships: Array<Member>;
  getTokenBalances?: Maybe<TokenBalances>;
  getTopPSeedHolders?: Maybe<Array<TokenBalances>>;
  /** fetch data from the table: "guild" */
  guild: Array<Guild>;
  /** fetch data from the table: "guild_account" */
  guild_account: Array<Guild_Account>;
  /** fetch aggregated fields from the table: "guild_account" */
  guild_account_aggregate: Guild_Account_Aggregate;
  /** fetch data from the table: "guild_account" using primary key columns */
  guild_account_by_pk?: Maybe<Guild_Account>;
  /** fetch aggregated fields from the table: "guild" */
  guild_aggregate: Guild_Aggregate;
  /** fetch data from the table: "guild" using primary key columns */
  guild_by_pk?: Maybe<Guild>;
  /** fetch data from the table: "guild_player" */
  guild_player: Array<Guild_Player>;
  /** fetch aggregated fields from the table: "guild_player" */
  guild_player_aggregate: Guild_Player_Aggregate;
  /** fetch data from the table: "guild_player" using primary key columns */
  guild_player_by_pk?: Maybe<Guild_Player>;
  /** fetch data from the table: "me" */
  me: Array<Me>;
  /** fetch aggregated fields from the table: "me" */
  me_aggregate: Me_Aggregate;
  /** fetch data from the table: "player" */
  player: Array<Player>;
  /** fetch data from the table: "player_account" */
  player_account: Array<Player_Account>;
  /** fetch aggregated fields from the table: "player_account" */
  player_account_aggregate: Player_Account_Aggregate;
  /** fetch aggregated fields from the table: "player" */
  player_aggregate: Player_Aggregate;
  /** fetch data from the table: "player" using primary key columns */
  player_by_pk?: Maybe<Player>;
  /** fetch data from the table: "player_skill" */
  player_skill: Array<Player_Skill>;
  /** fetch aggregated fields from the table: "player_skill" */
  player_skill_aggregate: Player_Skill_Aggregate;
  /** fetch data from the table: "player_skill" using primary key columns */
  player_skill_by_pk?: Maybe<Player_Skill>;
  /** fetch data from the table: "player_type" */
  player_type: Array<Player_Type>;
  /** fetch aggregated fields from the table: "player_type" */
  player_type_aggregate: Player_Type_Aggregate;
  /** fetch data from the table: "player_type" using primary key columns */
  player_type_by_pk?: Maybe<Player_Type>;
  /** fetch data from the table: "profile_cache" */
  profile_cache: Array<Profile_Cache>;
  /** fetch aggregated fields from the table: "profile_cache" */
  profile_cache_aggregate: Profile_Cache_Aggregate;
  /** fetch data from the table: "profile_cache" using primary key columns */
  profile_cache_by_pk?: Maybe<Profile_Cache>;
  /** fetch data from the table: "quest" */
  quest: Array<Quest>;
  /** fetch aggregated fields from the table: "quest" */
  quest_aggregate: Quest_Aggregate;
  /** fetch data from the table: "quest" using primary key columns */
  quest_by_pk?: Maybe<Quest>;
  /** fetch data from the table: "quest_completion" */
  quest_completion: Array<Quest_Completion>;
  /** fetch aggregated fields from the table: "quest_completion" */
  quest_completion_aggregate: Quest_Completion_Aggregate;
  /** fetch data from the table: "quest_completion" using primary key columns */
  quest_completion_by_pk?: Maybe<Quest_Completion>;
  /** fetch data from the table: "quest_skill" */
  quest_skill: Array<Quest_Skill>;
  /** fetch aggregated fields from the table: "quest_skill" */
  quest_skill_aggregate: Quest_Skill_Aggregate;
  /** fetch data from the table: "quest_skill" using primary key columns */
  quest_skill_by_pk?: Maybe<Quest_Skill>;
  /** fetch data from the table: "skill" */
  skill: Array<Skill>;
  /** fetch aggregated fields from the table: "skill" */
  skill_aggregate: Skill_Aggregate;
  /** fetch data from the table: "skill" using primary key columns */
  skill_by_pk?: Maybe<Skill>;
};


/** query root */
export type Query_RootAccountTypeArgs = {
  distinct_on?: Maybe<Array<AccountType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AccountType_Order_By>>;
  where?: Maybe<AccountType_Bool_Exp>;
};


/** query root */
export type Query_RootAccountType_AggregateArgs = {
  distinct_on?: Maybe<Array<AccountType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AccountType_Order_By>>;
  where?: Maybe<AccountType_Bool_Exp>;
};


/** query root */
export type Query_RootAccountType_By_PkArgs = {
  type: Scalars['String'];
};


/** query root */
export type Query_RootColorAspectArgs = {
  distinct_on?: Maybe<Array<ColorAspect_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ColorAspect_Order_By>>;
  where?: Maybe<ColorAspect_Bool_Exp>;
};


/** query root */
export type Query_RootColorAspect_AggregateArgs = {
  distinct_on?: Maybe<Array<ColorAspect_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ColorAspect_Order_By>>;
  where?: Maybe<ColorAspect_Bool_Exp>;
};


/** query root */
export type Query_RootColorAspect_By_PkArgs = {
  mask: Scalars['Int'];
};


/** query root */
export type Query_RootGuildPositionArgs = {
  distinct_on?: Maybe<Array<GuildPosition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GuildPosition_Order_By>>;
  where?: Maybe<GuildPosition_Bool_Exp>;
};


/** query root */
export type Query_RootGuildPosition_AggregateArgs = {
  distinct_on?: Maybe<Array<GuildPosition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GuildPosition_Order_By>>;
  where?: Maybe<GuildPosition_Bool_Exp>;
};


/** query root */
export type Query_RootGuildPosition_By_PkArgs = {
  position: Scalars['String'];
};


/** query root */
export type Query_RootGuildStatusArgs = {
  distinct_on?: Maybe<Array<GuildStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GuildStatus_Order_By>>;
  where?: Maybe<GuildStatus_Bool_Exp>;
};


/** query root */
export type Query_RootGuildStatus_AggregateArgs = {
  distinct_on?: Maybe<Array<GuildStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GuildStatus_Order_By>>;
  where?: Maybe<GuildStatus_Bool_Exp>;
};


/** query root */
export type Query_RootGuildStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** query root */
export type Query_RootGuildTypeArgs = {
  distinct_on?: Maybe<Array<GuildType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GuildType_Order_By>>;
  where?: Maybe<GuildType_Bool_Exp>;
};


/** query root */
export type Query_RootGuildType_AggregateArgs = {
  distinct_on?: Maybe<Array<GuildType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GuildType_Order_By>>;
  where?: Maybe<GuildType_Bool_Exp>;
};


/** query root */
export type Query_RootGuildType_By_PkArgs = {
  name: Scalars['String'];
};


/** query root */
export type Query_RootPlayerRankArgs = {
  distinct_on?: Maybe<Array<PlayerRank_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayerRank_Order_By>>;
  where?: Maybe<PlayerRank_Bool_Exp>;
};


/** query root */
export type Query_RootPlayerRank_AggregateArgs = {
  distinct_on?: Maybe<Array<PlayerRank_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayerRank_Order_By>>;
  where?: Maybe<PlayerRank_Bool_Exp>;
};


/** query root */
export type Query_RootPlayerRank_By_PkArgs = {
  rank: Scalars['String'];
};


/** query root */
export type Query_RootQuestCompletionStatusArgs = {
  distinct_on?: Maybe<Array<QuestCompletionStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<QuestCompletionStatus_Order_By>>;
  where?: Maybe<QuestCompletionStatus_Bool_Exp>;
};


/** query root */
export type Query_RootQuestCompletionStatus_AggregateArgs = {
  distinct_on?: Maybe<Array<QuestCompletionStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<QuestCompletionStatus_Order_By>>;
  where?: Maybe<QuestCompletionStatus_Bool_Exp>;
};


/** query root */
export type Query_RootQuestCompletionStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** query root */
export type Query_RootQuestRepetitionArgs = {
  distinct_on?: Maybe<Array<QuestRepetition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<QuestRepetition_Order_By>>;
  where?: Maybe<QuestRepetition_Bool_Exp>;
};


/** query root */
export type Query_RootQuestRepetition_AggregateArgs = {
  distinct_on?: Maybe<Array<QuestRepetition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<QuestRepetition_Order_By>>;
  where?: Maybe<QuestRepetition_Bool_Exp>;
};


/** query root */
export type Query_RootQuestRepetition_By_PkArgs = {
  repetition: Scalars['String'];
};


/** query root */
export type Query_RootQuestStatusArgs = {
  distinct_on?: Maybe<Array<QuestStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<QuestStatus_Order_By>>;
  where?: Maybe<QuestStatus_Bool_Exp>;
};


/** query root */
export type Query_RootQuestStatus_AggregateArgs = {
  distinct_on?: Maybe<Array<QuestStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<QuestStatus_Order_By>>;
  where?: Maybe<QuestStatus_Bool_Exp>;
};


/** query root */
export type Query_RootQuestStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** query root */
export type Query_RootSkillCategoryArgs = {
  distinct_on?: Maybe<Array<SkillCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SkillCategory_Order_By>>;
  where?: Maybe<SkillCategory_Bool_Exp>;
};


/** query root */
export type Query_RootSkillCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<SkillCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SkillCategory_Order_By>>;
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
  distinct_on?: Maybe<Array<Guild_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Order_By>>;
  where?: Maybe<Guild_Bool_Exp>;
};


/** query root */
export type Query_RootGuild_AccountArgs = {
  distinct_on?: Maybe<Array<Guild_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Account_Order_By>>;
  where?: Maybe<Guild_Account_Bool_Exp>;
};


/** query root */
export type Query_RootGuild_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Guild_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Account_Order_By>>;
  where?: Maybe<Guild_Account_Bool_Exp>;
};


/** query root */
export type Query_RootGuild_Account_By_PkArgs = {
  guild_id: Scalars['uuid'];
  type: AccountType_Enum;
};


/** query root */
export type Query_RootGuild_AggregateArgs = {
  distinct_on?: Maybe<Array<Guild_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Order_By>>;
  where?: Maybe<Guild_Bool_Exp>;
};


/** query root */
export type Query_RootGuild_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGuild_PlayerArgs = {
  distinct_on?: Maybe<Array<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** query root */
export type Query_RootGuild_Player_AggregateArgs = {
  distinct_on?: Maybe<Array<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** query root */
export type Query_RootGuild_Player_By_PkArgs = {
  guild_id: Scalars['uuid'];
  player_id: Scalars['uuid'];
};


/** query root */
export type Query_RootMeArgs = {
  distinct_on?: Maybe<Array<Me_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Me_Order_By>>;
  where?: Maybe<Me_Bool_Exp>;
};


/** query root */
export type Query_RootMe_AggregateArgs = {
  distinct_on?: Maybe<Array<Me_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Me_Order_By>>;
  where?: Maybe<Me_Bool_Exp>;
};


/** query root */
export type Query_RootPlayerArgs = {
  distinct_on?: Maybe<Array<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_AccountArgs = {
  distinct_on?: Maybe<Array<Player_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Account_Order_By>>;
  where?: Maybe<Player_Account_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Account_Order_By>>;
  where?: Maybe<Player_Account_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootPlayer_SkillArgs = {
  distinct_on?: Maybe<Array<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_Skill_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_Skill_By_PkArgs = {
  player_id: Scalars['uuid'];
  skill_id: Scalars['uuid'];
};


/** query root */
export type Query_RootPlayer_TypeArgs = {
  distinct_on?: Maybe<Array<Player_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Type_Order_By>>;
  where?: Maybe<Player_Type_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Type_Order_By>>;
  where?: Maybe<Player_Type_Bool_Exp>;
};


/** query root */
export type Query_RootPlayer_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootProfile_CacheArgs = {
  distinct_on?: Maybe<Array<Profile_Cache_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Cache_Order_By>>;
  where?: Maybe<Profile_Cache_Bool_Exp>;
};


/** query root */
export type Query_RootProfile_Cache_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Cache_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Cache_Order_By>>;
  where?: Maybe<Profile_Cache_Bool_Exp>;
};


/** query root */
export type Query_RootProfile_Cache_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootQuestArgs = {
  distinct_on?: Maybe<Array<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** query root */
export type Query_RootQuest_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** query root */
export type Query_RootQuest_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootQuest_CompletionArgs = {
  distinct_on?: Maybe<Array<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** query root */
export type Query_RootQuest_Completion_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** query root */
export type Query_RootQuest_Completion_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootQuest_SkillArgs = {
  distinct_on?: Maybe<Array<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};


/** query root */
export type Query_RootQuest_Skill_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};


/** query root */
export type Query_RootQuest_Skill_By_PkArgs = {
  quest_id: Scalars['uuid'];
  skill_id: Scalars['uuid'];
};


/** query root */
export type Query_RootSkillArgs = {
  distinct_on?: Maybe<Array<Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Skill_Order_By>>;
  where?: Maybe<Skill_Bool_Exp>;
};


/** query root */
export type Query_RootSkill_AggregateArgs = {
  distinct_on?: Maybe<Array<Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Skill_Order_By>>;
  where?: Maybe<Skill_Bool_Exp>;
};


/** query root */
export type Query_RootSkill_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "quest" */
export type Quest = {
  /** An object relationship */
  QuestRepetition: QuestRepetition;
  /** An object relationship */
  QuestStatus: QuestStatus;
  cooldown?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  created_by_player_id: Scalars['uuid'];
  description?: Maybe<Scalars['String']>;
  external_link?: Maybe<Scalars['String']>;
  /** An object relationship */
  guild: Guild;
  guild_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  player: Player;
  /** An array relationship */
  quest_completions: Array<Quest_Completion>;
  /** An aggregated array relationship */
  quest_completions_aggregate: Quest_Completion_Aggregate;
  /** An array relationship */
  quest_skills: Array<Quest_Skill>;
  /** An aggregated array relationship */
  quest_skills_aggregate: Quest_Skill_Aggregate;
  repetition: QuestRepetition_Enum;
  status: QuestStatus_Enum;
  title: Scalars['String'];
};


/** columns and relationships of "quest" */
export type QuestQuest_CompletionsArgs = {
  distinct_on?: Maybe<Array<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** columns and relationships of "quest" */
export type QuestQuest_Completions_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** columns and relationships of "quest" */
export type QuestQuest_SkillsArgs = {
  distinct_on?: Maybe<Array<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};


/** columns and relationships of "quest" */
export type QuestQuest_Skills_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};

/** aggregated selection of "quest" */
export type Quest_Aggregate = {
  aggregate?: Maybe<Quest_Aggregate_Fields>;
  nodes: Array<Quest>;
};

/** aggregate fields of "quest" */
export type Quest_Aggregate_Fields = {
  avg?: Maybe<Quest_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Quest_Max_Fields>;
  min?: Maybe<Quest_Min_Fields>;
  stddev?: Maybe<Quest_Stddev_Fields>;
  stddev_pop?: Maybe<Quest_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Quest_Stddev_Samp_Fields>;
  sum?: Maybe<Quest_Sum_Fields>;
  var_pop?: Maybe<Quest_Var_Pop_Fields>;
  var_samp?: Maybe<Quest_Var_Samp_Fields>;
  variance?: Maybe<Quest_Variance_Fields>;
};


/** aggregate fields of "quest" */
export type Quest_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Quest_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quest" */
export type Quest_Aggregate_Order_By = {
  avg?: Maybe<Quest_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Quest_Max_Order_By>;
  min?: Maybe<Quest_Min_Order_By>;
  stddev?: Maybe<Quest_Stddev_Order_By>;
  stddev_pop?: Maybe<Quest_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Quest_Stddev_Samp_Order_By>;
  sum?: Maybe<Quest_Sum_Order_By>;
  var_pop?: Maybe<Quest_Var_Pop_Order_By>;
  var_samp?: Maybe<Quest_Var_Samp_Order_By>;
  variance?: Maybe<Quest_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "quest" */
export type Quest_Arr_Rel_Insert_Input = {
  data: Array<Quest_Insert_Input>;
  on_conflict?: Maybe<Quest_On_Conflict>;
};

/** aggregate avg on columns */
export type Quest_Avg_Fields = {
  cooldown?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "quest" */
export type Quest_Avg_Order_By = {
  cooldown?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "quest". All fields are combined with a logical 'AND'. */
export type Quest_Bool_Exp = {
  QuestRepetition?: Maybe<QuestRepetition_Bool_Exp>;
  QuestStatus?: Maybe<QuestStatus_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Quest_Bool_Exp>>>;
  _not?: Maybe<Quest_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Quest_Bool_Exp>>>;
  cooldown?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by_player_id?: Maybe<Uuid_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  external_link?: Maybe<String_Comparison_Exp>;
  guild?: Maybe<Guild_Bool_Exp>;
  guild_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  player?: Maybe<Player_Bool_Exp>;
  quest_completions?: Maybe<Quest_Completion_Bool_Exp>;
  quest_skills?: Maybe<Quest_Skill_Bool_Exp>;
  repetition?: Maybe<QuestRepetition_Enum_Comparison_Exp>;
  status?: Maybe<QuestStatus_Enum_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** columns and relationships of "quest_completion" */
export type Quest_Completion = {
  /** An object relationship */
  QuestCompletionStatus: QuestCompletionStatus;
  completed_by_player_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  player: Player;
  /** An object relationship */
  quest: Quest;
  quest_id: Scalars['uuid'];
  status: QuestCompletionStatus_Enum;
  submission_link?: Maybe<Scalars['String']>;
  submission_text?: Maybe<Scalars['String']>;
  submitted_at: Scalars['timestamptz'];
};

/** aggregated selection of "quest_completion" */
export type Quest_Completion_Aggregate = {
  aggregate?: Maybe<Quest_Completion_Aggregate_Fields>;
  nodes: Array<Quest_Completion>;
};

/** aggregate fields of "quest_completion" */
export type Quest_Completion_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Quest_Completion_Max_Fields>;
  min?: Maybe<Quest_Completion_Min_Fields>;
};


/** aggregate fields of "quest_completion" */
export type Quest_Completion_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Quest_Completion_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quest_completion" */
export type Quest_Completion_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Quest_Completion_Max_Order_By>;
  min?: Maybe<Quest_Completion_Min_Order_By>;
};

/** input type for inserting array relation for remote table "quest_completion" */
export type Quest_Completion_Arr_Rel_Insert_Input = {
  data: Array<Quest_Completion_Insert_Input>;
  on_conflict?: Maybe<Quest_Completion_On_Conflict>;
};

/** Boolean expression to filter rows from the table "quest_completion". All fields are combined with a logical 'AND'. */
export type Quest_Completion_Bool_Exp = {
  QuestCompletionStatus?: Maybe<QuestCompletionStatus_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Quest_Completion_Bool_Exp>>>;
  _not?: Maybe<Quest_Completion_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Quest_Completion_Bool_Exp>>>;
  completed_by_player_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  player?: Maybe<Player_Bool_Exp>;
  quest?: Maybe<Quest_Bool_Exp>;
  quest_id?: Maybe<Uuid_Comparison_Exp>;
  status?: Maybe<QuestCompletionStatus_Enum_Comparison_Exp>;
  submission_link?: Maybe<String_Comparison_Exp>;
  submission_text?: Maybe<String_Comparison_Exp>;
  submitted_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "quest_completion" */
export enum Quest_Completion_Constraint {
  /** unique or primary key constraint */
  QuestCompletionPkey = 'quest_completion_pkey'
}

/** input type for inserting data into table "quest_completion" */
export type Quest_Completion_Insert_Input = {
  QuestCompletionStatus?: Maybe<QuestCompletionStatus_Obj_Rel_Insert_Input>;
  completed_by_player_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  player?: Maybe<Player_Obj_Rel_Insert_Input>;
  quest?: Maybe<Quest_Obj_Rel_Insert_Input>;
  quest_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<QuestCompletionStatus_Enum>;
  submission_link?: Maybe<Scalars['String']>;
  submission_text?: Maybe<Scalars['String']>;
  submitted_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Quest_Completion_Max_Fields = {
  completed_by_player_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  quest_id?: Maybe<Scalars['uuid']>;
  submission_link?: Maybe<Scalars['String']>;
  submission_text?: Maybe<Scalars['String']>;
  submitted_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "quest_completion" */
export type Quest_Completion_Max_Order_By = {
  completed_by_player_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quest_id?: Maybe<Order_By>;
  submission_link?: Maybe<Order_By>;
  submission_text?: Maybe<Order_By>;
  submitted_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Quest_Completion_Min_Fields = {
  completed_by_player_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  quest_id?: Maybe<Scalars['uuid']>;
  submission_link?: Maybe<Scalars['String']>;
  submission_text?: Maybe<Scalars['String']>;
  submitted_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "quest_completion" */
export type Quest_Completion_Min_Order_By = {
  completed_by_player_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quest_id?: Maybe<Order_By>;
  submission_link?: Maybe<Order_By>;
  submission_text?: Maybe<Order_By>;
  submitted_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "quest_completion" */
export type Quest_Completion_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Quest_Completion>;
};

/** input type for inserting object relation for remote table "quest_completion" */
export type Quest_Completion_Obj_Rel_Insert_Input = {
  data: Quest_Completion_Insert_Input;
  on_conflict?: Maybe<Quest_Completion_On_Conflict>;
};

/** on conflict condition type for table "quest_completion" */
export type Quest_Completion_On_Conflict = {
  constraint: Quest_Completion_Constraint;
  update_columns: Array<Quest_Completion_Update_Column>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};

/** ordering options when selecting data from "quest_completion" */
export type Quest_Completion_Order_By = {
  QuestCompletionStatus?: Maybe<QuestCompletionStatus_Order_By>;
  completed_by_player_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  player?: Maybe<Player_Order_By>;
  quest?: Maybe<Quest_Order_By>;
  quest_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  submission_link?: Maybe<Order_By>;
  submission_text?: Maybe<Order_By>;
  submitted_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "quest_completion" */
export type Quest_Completion_Pk_Columns_Input = {
  id: Scalars['uuid'];
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
  completed_by_player_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  quest_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<QuestCompletionStatus_Enum>;
  submission_link?: Maybe<Scalars['String']>;
  submission_text?: Maybe<Scalars['String']>;
  submitted_at?: Maybe<Scalars['timestamptz']>;
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
  cooldown?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "quest" */
export type Quest_Insert_Input = {
  QuestRepetition?: Maybe<QuestRepetition_Obj_Rel_Insert_Input>;
  QuestStatus?: Maybe<QuestStatus_Obj_Rel_Insert_Input>;
  cooldown?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_player_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  external_link?: Maybe<Scalars['String']>;
  guild?: Maybe<Guild_Obj_Rel_Insert_Input>;
  guild_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  player?: Maybe<Player_Obj_Rel_Insert_Input>;
  quest_completions?: Maybe<Quest_Completion_Arr_Rel_Insert_Input>;
  quest_skills?: Maybe<Quest_Skill_Arr_Rel_Insert_Input>;
  repetition?: Maybe<QuestRepetition_Enum>;
  status?: Maybe<QuestStatus_Enum>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Quest_Max_Fields = {
  cooldown?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_player_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  external_link?: Maybe<Scalars['String']>;
  guild_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "quest" */
export type Quest_Max_Order_By = {
  cooldown?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_player_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  external_link?: Maybe<Order_By>;
  guild_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Quest_Min_Fields = {
  cooldown?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_player_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  external_link?: Maybe<Scalars['String']>;
  guild_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "quest" */
export type Quest_Min_Order_By = {
  cooldown?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_player_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  external_link?: Maybe<Order_By>;
  guild_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "quest" */
export type Quest_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Quest>;
};

/** input type for inserting object relation for remote table "quest" */
export type Quest_Obj_Rel_Insert_Input = {
  data: Quest_Insert_Input;
  on_conflict?: Maybe<Quest_On_Conflict>;
};

/** on conflict condition type for table "quest" */
export type Quest_On_Conflict = {
  constraint: Quest_Constraint;
  update_columns: Array<Quest_Update_Column>;
  where?: Maybe<Quest_Bool_Exp>;
};

/** ordering options when selecting data from "quest" */
export type Quest_Order_By = {
  QuestRepetition?: Maybe<QuestRepetition_Order_By>;
  QuestStatus?: Maybe<QuestStatus_Order_By>;
  cooldown?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_player_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  external_link?: Maybe<Order_By>;
  guild?: Maybe<Guild_Order_By>;
  guild_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  player?: Maybe<Player_Order_By>;
  quest_completions_aggregate?: Maybe<Quest_Completion_Aggregate_Order_By>;
  quest_skills_aggregate?: Maybe<Quest_Skill_Aggregate_Order_By>;
  repetition?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "quest" */
export type Quest_Pk_Columns_Input = {
  id: Scalars['uuid'];
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
  cooldown?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_player_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  external_link?: Maybe<Scalars['String']>;
  guild_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  repetition?: Maybe<QuestRepetition_Enum>;
  status?: Maybe<QuestStatus_Enum>;
  title?: Maybe<Scalars['String']>;
};

/** columns and relationships of "quest_skill" */
export type Quest_Skill = {
  /** An object relationship */
  quest: Quest;
  quest_id: Scalars['uuid'];
  /** An object relationship */
  skill: Skill;
  skill_id: Scalars['uuid'];
};

/** aggregated selection of "quest_skill" */
export type Quest_Skill_Aggregate = {
  aggregate?: Maybe<Quest_Skill_Aggregate_Fields>;
  nodes: Array<Quest_Skill>;
};

/** aggregate fields of "quest_skill" */
export type Quest_Skill_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Quest_Skill_Max_Fields>;
  min?: Maybe<Quest_Skill_Min_Fields>;
};


/** aggregate fields of "quest_skill" */
export type Quest_Skill_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Quest_Skill_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quest_skill" */
export type Quest_Skill_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Quest_Skill_Max_Order_By>;
  min?: Maybe<Quest_Skill_Min_Order_By>;
};

/** input type for inserting array relation for remote table "quest_skill" */
export type Quest_Skill_Arr_Rel_Insert_Input = {
  data: Array<Quest_Skill_Insert_Input>;
  on_conflict?: Maybe<Quest_Skill_On_Conflict>;
};

/** Boolean expression to filter rows from the table "quest_skill". All fields are combined with a logical 'AND'. */
export type Quest_Skill_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Quest_Skill_Bool_Exp>>>;
  _not?: Maybe<Quest_Skill_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Quest_Skill_Bool_Exp>>>;
  quest?: Maybe<Quest_Bool_Exp>;
  quest_id?: Maybe<Uuid_Comparison_Exp>;
  skill?: Maybe<Skill_Bool_Exp>;
  skill_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "quest_skill" */
export enum Quest_Skill_Constraint {
  /** unique or primary key constraint */
  QuestSkillPkey = 'quest_skill_pkey'
}

/** input type for inserting data into table "quest_skill" */
export type Quest_Skill_Insert_Input = {
  quest?: Maybe<Quest_Obj_Rel_Insert_Input>;
  quest_id?: Maybe<Scalars['uuid']>;
  skill?: Maybe<Skill_Obj_Rel_Insert_Input>;
  skill_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Quest_Skill_Max_Fields = {
  quest_id?: Maybe<Scalars['uuid']>;
  skill_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "quest_skill" */
export type Quest_Skill_Max_Order_By = {
  quest_id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Quest_Skill_Min_Fields = {
  quest_id?: Maybe<Scalars['uuid']>;
  skill_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "quest_skill" */
export type Quest_Skill_Min_Order_By = {
  quest_id?: Maybe<Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "quest_skill" */
export type Quest_Skill_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Quest_Skill>;
};

/** input type for inserting object relation for remote table "quest_skill" */
export type Quest_Skill_Obj_Rel_Insert_Input = {
  data: Quest_Skill_Insert_Input;
  on_conflict?: Maybe<Quest_Skill_On_Conflict>;
};

/** on conflict condition type for table "quest_skill" */
export type Quest_Skill_On_Conflict = {
  constraint: Quest_Skill_Constraint;
  update_columns: Array<Quest_Skill_Update_Column>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};

/** ordering options when selecting data from "quest_skill" */
export type Quest_Skill_Order_By = {
  quest?: Maybe<Quest_Order_By>;
  quest_id?: Maybe<Order_By>;
  skill?: Maybe<Skill_Order_By>;
  skill_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "quest_skill" */
export type Quest_Skill_Pk_Columns_Input = {
  quest_id: Scalars['uuid'];
  skill_id: Scalars['uuid'];
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
  quest_id?: Maybe<Scalars['uuid']>;
  skill_id?: Maybe<Scalars['uuid']>;
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
  cooldown?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "quest" */
export type Quest_Stddev_Order_By = {
  cooldown?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Quest_Stddev_Pop_Fields = {
  cooldown?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "quest" */
export type Quest_Stddev_Pop_Order_By = {
  cooldown?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Quest_Stddev_Samp_Fields = {
  cooldown?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "quest" */
export type Quest_Stddev_Samp_Order_By = {
  cooldown?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Quest_Sum_Fields = {
  cooldown?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "quest" */
export type Quest_Sum_Order_By = {
  cooldown?: Maybe<Order_By>;
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
  cooldown?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "quest" */
export type Quest_Var_Pop_Order_By = {
  cooldown?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Quest_Var_Samp_Fields = {
  cooldown?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "quest" */
export type Quest_Var_Samp_Order_By = {
  cooldown?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Quest_Variance_Fields = {
  cooldown?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "quest" */
export type Quest_Variance_Order_By = {
  cooldown?: Maybe<Order_By>;
};

/** columns and relationships of "QuestCompletionStatus" */
export type QuestCompletionStatus = {
  /** An array relationship */
  quest_completions: Array<Quest_Completion>;
  /** An aggregated array relationship */
  quest_completions_aggregate: Quest_Completion_Aggregate;
  status: Scalars['String'];
};


/** columns and relationships of "QuestCompletionStatus" */
export type QuestCompletionStatusQuest_CompletionsArgs = {
  distinct_on?: Maybe<Array<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** columns and relationships of "QuestCompletionStatus" */
export type QuestCompletionStatusQuest_Completions_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};

export enum QuestCompletionStatus_ActionEnum {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED'
}

/** aggregated selection of "QuestCompletionStatus" */
export type QuestCompletionStatus_Aggregate = {
  aggregate?: Maybe<QuestCompletionStatus_Aggregate_Fields>;
  nodes: Array<QuestCompletionStatus>;
};

/** aggregate fields of "QuestCompletionStatus" */
export type QuestCompletionStatus_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<QuestCompletionStatus_Max_Fields>;
  min?: Maybe<QuestCompletionStatus_Min_Fields>;
};


/** aggregate fields of "QuestCompletionStatus" */
export type QuestCompletionStatus_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<QuestCompletionStatus_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "QuestCompletionStatus" */
export type QuestCompletionStatus_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<QuestCompletionStatus_Max_Order_By>;
  min?: Maybe<QuestCompletionStatus_Min_Order_By>;
};

/** input type for inserting array relation for remote table "QuestCompletionStatus" */
export type QuestCompletionStatus_Arr_Rel_Insert_Input = {
  data: Array<QuestCompletionStatus_Insert_Input>;
  on_conflict?: Maybe<QuestCompletionStatus_On_Conflict>;
};

/** Boolean expression to filter rows from the table "QuestCompletionStatus". All fields are combined with a logical 'AND'. */
export type QuestCompletionStatus_Bool_Exp = {
  _and?: Maybe<Array<Maybe<QuestCompletionStatus_Bool_Exp>>>;
  _not?: Maybe<QuestCompletionStatus_Bool_Exp>;
  _or?: Maybe<Array<Maybe<QuestCompletionStatus_Bool_Exp>>>;
  quest_completions?: Maybe<Quest_Completion_Bool_Exp>;
  status?: Maybe<String_Comparison_Exp>;
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
  _eq?: Maybe<QuestCompletionStatus_Enum>;
  _in?: Maybe<Array<QuestCompletionStatus_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<QuestCompletionStatus_Enum>;
  _nin?: Maybe<Array<QuestCompletionStatus_Enum>>;
};

/** input type for inserting data into table "QuestCompletionStatus" */
export type QuestCompletionStatus_Insert_Input = {
  quest_completions?: Maybe<Quest_Completion_Arr_Rel_Insert_Input>;
  status?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type QuestCompletionStatus_Max_Fields = {
  status?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "QuestCompletionStatus" */
export type QuestCompletionStatus_Max_Order_By = {
  status?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type QuestCompletionStatus_Min_Fields = {
  status?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "QuestCompletionStatus" */
export type QuestCompletionStatus_Min_Order_By = {
  status?: Maybe<Order_By>;
};

/** response of any mutation on the table "QuestCompletionStatus" */
export type QuestCompletionStatus_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<QuestCompletionStatus>;
};

/** input type for inserting object relation for remote table "QuestCompletionStatus" */
export type QuestCompletionStatus_Obj_Rel_Insert_Input = {
  data: QuestCompletionStatus_Insert_Input;
  on_conflict?: Maybe<QuestCompletionStatus_On_Conflict>;
};

/** on conflict condition type for table "QuestCompletionStatus" */
export type QuestCompletionStatus_On_Conflict = {
  constraint: QuestCompletionStatus_Constraint;
  update_columns: Array<QuestCompletionStatus_Update_Column>;
  where?: Maybe<QuestCompletionStatus_Bool_Exp>;
};

/** ordering options when selecting data from "QuestCompletionStatus" */
export type QuestCompletionStatus_Order_By = {
  quest_completions_aggregate?: Maybe<Quest_Completion_Aggregate_Order_By>;
  status?: Maybe<Order_By>;
};

/** primary key columns input for table: "QuestCompletionStatus" */
export type QuestCompletionStatus_Pk_Columns_Input = {
  status: Scalars['String'];
};

/** select columns of table "QuestCompletionStatus" */
export enum QuestCompletionStatus_Select_Column {
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "QuestCompletionStatus" */
export type QuestCompletionStatus_Set_Input = {
  status?: Maybe<Scalars['String']>;
};

/** update columns of table "QuestCompletionStatus" */
export enum QuestCompletionStatus_Update_Column {
  /** column name */
  Status = 'status'
}

/** columns and relationships of "QuestRepetition" */
export type QuestRepetition = {
  /** An array relationship */
  quests: Array<Quest>;
  /** An aggregated array relationship */
  quests_aggregate: Quest_Aggregate;
  repetition: Scalars['String'];
};


/** columns and relationships of "QuestRepetition" */
export type QuestRepetitionQuestsArgs = {
  distinct_on?: Maybe<Array<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** columns and relationships of "QuestRepetition" */
export type QuestRepetitionQuests_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};

export enum QuestRepetition_ActionEnum {
  Personal = 'PERSONAL',
  Recurring = 'RECURRING',
  Unique = 'UNIQUE'
}

/** aggregated selection of "QuestRepetition" */
export type QuestRepetition_Aggregate = {
  aggregate?: Maybe<QuestRepetition_Aggregate_Fields>;
  nodes: Array<QuestRepetition>;
};

/** aggregate fields of "QuestRepetition" */
export type QuestRepetition_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<QuestRepetition_Max_Fields>;
  min?: Maybe<QuestRepetition_Min_Fields>;
};


/** aggregate fields of "QuestRepetition" */
export type QuestRepetition_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<QuestRepetition_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "QuestRepetition" */
export type QuestRepetition_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<QuestRepetition_Max_Order_By>;
  min?: Maybe<QuestRepetition_Min_Order_By>;
};

/** input type for inserting array relation for remote table "QuestRepetition" */
export type QuestRepetition_Arr_Rel_Insert_Input = {
  data: Array<QuestRepetition_Insert_Input>;
  on_conflict?: Maybe<QuestRepetition_On_Conflict>;
};

/** Boolean expression to filter rows from the table "QuestRepetition". All fields are combined with a logical 'AND'. */
export type QuestRepetition_Bool_Exp = {
  _and?: Maybe<Array<Maybe<QuestRepetition_Bool_Exp>>>;
  _not?: Maybe<QuestRepetition_Bool_Exp>;
  _or?: Maybe<Array<Maybe<QuestRepetition_Bool_Exp>>>;
  quests?: Maybe<Quest_Bool_Exp>;
  repetition?: Maybe<String_Comparison_Exp>;
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
  _eq?: Maybe<QuestRepetition_Enum>;
  _in?: Maybe<Array<QuestRepetition_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<QuestRepetition_Enum>;
  _nin?: Maybe<Array<QuestRepetition_Enum>>;
};

/** input type for inserting data into table "QuestRepetition" */
export type QuestRepetition_Insert_Input = {
  quests?: Maybe<Quest_Arr_Rel_Insert_Input>;
  repetition?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type QuestRepetition_Max_Fields = {
  repetition?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "QuestRepetition" */
export type QuestRepetition_Max_Order_By = {
  repetition?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type QuestRepetition_Min_Fields = {
  repetition?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "QuestRepetition" */
export type QuestRepetition_Min_Order_By = {
  repetition?: Maybe<Order_By>;
};

/** response of any mutation on the table "QuestRepetition" */
export type QuestRepetition_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<QuestRepetition>;
};

/** input type for inserting object relation for remote table "QuestRepetition" */
export type QuestRepetition_Obj_Rel_Insert_Input = {
  data: QuestRepetition_Insert_Input;
  on_conflict?: Maybe<QuestRepetition_On_Conflict>;
};

/** on conflict condition type for table "QuestRepetition" */
export type QuestRepetition_On_Conflict = {
  constraint: QuestRepetition_Constraint;
  update_columns: Array<QuestRepetition_Update_Column>;
  where?: Maybe<QuestRepetition_Bool_Exp>;
};

/** ordering options when selecting data from "QuestRepetition" */
export type QuestRepetition_Order_By = {
  quests_aggregate?: Maybe<Quest_Aggregate_Order_By>;
  repetition?: Maybe<Order_By>;
};

/** primary key columns input for table: "QuestRepetition" */
export type QuestRepetition_Pk_Columns_Input = {
  repetition: Scalars['String'];
};

/** select columns of table "QuestRepetition" */
export enum QuestRepetition_Select_Column {
  /** column name */
  Repetition = 'repetition'
}

/** input type for updating data in table "QuestRepetition" */
export type QuestRepetition_Set_Input = {
  repetition?: Maybe<Scalars['String']>;
};

/** update columns of table "QuestRepetition" */
export enum QuestRepetition_Update_Column {
  /** column name */
  Repetition = 'repetition'
}

/** columns and relationships of "QuestStatus" */
export type QuestStatus = {
  /** An array relationship */
  quests: Array<Quest>;
  /** An aggregated array relationship */
  quests_aggregate: Quest_Aggregate;
  status: Scalars['String'];
};


/** columns and relationships of "QuestStatus" */
export type QuestStatusQuestsArgs = {
  distinct_on?: Maybe<Array<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** columns and relationships of "QuestStatus" */
export type QuestStatusQuests_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};

/** aggregated selection of "QuestStatus" */
export type QuestStatus_Aggregate = {
  aggregate?: Maybe<QuestStatus_Aggregate_Fields>;
  nodes: Array<QuestStatus>;
};

/** aggregate fields of "QuestStatus" */
export type QuestStatus_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<QuestStatus_Max_Fields>;
  min?: Maybe<QuestStatus_Min_Fields>;
};


/** aggregate fields of "QuestStatus" */
export type QuestStatus_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<QuestStatus_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "QuestStatus" */
export type QuestStatus_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<QuestStatus_Max_Order_By>;
  min?: Maybe<QuestStatus_Min_Order_By>;
};

/** input type for inserting array relation for remote table "QuestStatus" */
export type QuestStatus_Arr_Rel_Insert_Input = {
  data: Array<QuestStatus_Insert_Input>;
  on_conflict?: Maybe<QuestStatus_On_Conflict>;
};

/** Boolean expression to filter rows from the table "QuestStatus". All fields are combined with a logical 'AND'. */
export type QuestStatus_Bool_Exp = {
  _and?: Maybe<Array<Maybe<QuestStatus_Bool_Exp>>>;
  _not?: Maybe<QuestStatus_Bool_Exp>;
  _or?: Maybe<Array<Maybe<QuestStatus_Bool_Exp>>>;
  quests?: Maybe<Quest_Bool_Exp>;
  status?: Maybe<String_Comparison_Exp>;
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
  _eq?: Maybe<QuestStatus_Enum>;
  _in?: Maybe<Array<QuestStatus_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<QuestStatus_Enum>;
  _nin?: Maybe<Array<QuestStatus_Enum>>;
};

/** input type for inserting data into table "QuestStatus" */
export type QuestStatus_Insert_Input = {
  quests?: Maybe<Quest_Arr_Rel_Insert_Input>;
  status?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type QuestStatus_Max_Fields = {
  status?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "QuestStatus" */
export type QuestStatus_Max_Order_By = {
  status?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type QuestStatus_Min_Fields = {
  status?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "QuestStatus" */
export type QuestStatus_Min_Order_By = {
  status?: Maybe<Order_By>;
};

/** response of any mutation on the table "QuestStatus" */
export type QuestStatus_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<QuestStatus>;
};

/** input type for inserting object relation for remote table "QuestStatus" */
export type QuestStatus_Obj_Rel_Insert_Input = {
  data: QuestStatus_Insert_Input;
  on_conflict?: Maybe<QuestStatus_On_Conflict>;
};

/** on conflict condition type for table "QuestStatus" */
export type QuestStatus_On_Conflict = {
  constraint: QuestStatus_Constraint;
  update_columns: Array<QuestStatus_Update_Column>;
  where?: Maybe<QuestStatus_Bool_Exp>;
};

/** ordering options when selecting data from "QuestStatus" */
export type QuestStatus_Order_By = {
  quests_aggregate?: Maybe<Quest_Aggregate_Order_By>;
  status?: Maybe<Order_By>;
};

/** primary key columns input for table: "QuestStatus" */
export type QuestStatus_Pk_Columns_Input = {
  status: Scalars['String'];
};

/** select columns of table "QuestStatus" */
export enum QuestStatus_Select_Column {
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "QuestStatus" */
export type QuestStatus_Set_Input = {
  status?: Maybe<Scalars['String']>;
};

/** update columns of table "QuestStatus" */
export enum QuestStatus_Update_Column {
  /** column name */
  Status = 'status'
}

/** columns and relationships of "skill" */
export type Skill = {
  /** An array relationship */
  Player_Skills: Array<Player_Skill>;
  /** An aggregated array relationship */
  Player_Skills_aggregate: Player_Skill_Aggregate;
  category: SkillCategory_Enum;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  quest_skills: Array<Quest_Skill>;
  /** An aggregated array relationship */
  quest_skills_aggregate: Quest_Skill_Aggregate;
};


/** columns and relationships of "skill" */
export type SkillPlayer_SkillsArgs = {
  distinct_on?: Maybe<Array<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** columns and relationships of "skill" */
export type SkillPlayer_Skills_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** columns and relationships of "skill" */
export type SkillQuest_SkillsArgs = {
  distinct_on?: Maybe<Array<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};


/** columns and relationships of "skill" */
export type SkillQuest_Skills_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};

/** aggregated selection of "skill" */
export type Skill_Aggregate = {
  aggregate?: Maybe<Skill_Aggregate_Fields>;
  nodes: Array<Skill>;
};

/** aggregate fields of "skill" */
export type Skill_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Skill_Max_Fields>;
  min?: Maybe<Skill_Min_Fields>;
};


/** aggregate fields of "skill" */
export type Skill_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Skill_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "skill" */
export type Skill_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Skill_Max_Order_By>;
  min?: Maybe<Skill_Min_Order_By>;
};

/** input type for inserting array relation for remote table "skill" */
export type Skill_Arr_Rel_Insert_Input = {
  data: Array<Skill_Insert_Input>;
  on_conflict?: Maybe<Skill_On_Conflict>;
};

/** Boolean expression to filter rows from the table "skill". All fields are combined with a logical 'AND'. */
export type Skill_Bool_Exp = {
  Player_Skills?: Maybe<Player_Skill_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Skill_Bool_Exp>>>;
  _not?: Maybe<Skill_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Skill_Bool_Exp>>>;
  category?: Maybe<SkillCategory_Enum_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  quest_skills?: Maybe<Quest_Skill_Bool_Exp>;
};

/** unique or primary key constraints on table "skill" */
export enum Skill_Constraint {
  /** unique or primary key constraint */
  SkillPkey = 'Skill_pkey'
}

/** input type for inserting data into table "skill" */
export type Skill_Insert_Input = {
  Player_Skills?: Maybe<Player_Skill_Arr_Rel_Insert_Input>;
  category?: Maybe<SkillCategory_Enum>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  quest_skills?: Maybe<Quest_Skill_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Skill_Max_Fields = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "skill" */
export type Skill_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Skill_Min_Fields = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "skill" */
export type Skill_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "skill" */
export type Skill_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Skill>;
};

/** input type for inserting object relation for remote table "skill" */
export type Skill_Obj_Rel_Insert_Input = {
  data: Skill_Insert_Input;
  on_conflict?: Maybe<Skill_On_Conflict>;
};

/** on conflict condition type for table "skill" */
export type Skill_On_Conflict = {
  constraint: Skill_Constraint;
  update_columns: Array<Skill_Update_Column>;
  where?: Maybe<Skill_Bool_Exp>;
};

/** ordering options when selecting data from "skill" */
export type Skill_Order_By = {
  Player_Skills_aggregate?: Maybe<Player_Skill_Aggregate_Order_By>;
  category?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  quest_skills_aggregate?: Maybe<Quest_Skill_Aggregate_Order_By>;
};

/** primary key columns input for table: "skill" */
export type Skill_Pk_Columns_Input = {
  id: Scalars['uuid'];
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
  category?: Maybe<SkillCategory_Enum>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
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
  name: Scalars['String'];
};

/** aggregated selection of "SkillCategory" */
export type SkillCategory_Aggregate = {
  aggregate?: Maybe<SkillCategory_Aggregate_Fields>;
  nodes: Array<SkillCategory>;
};

/** aggregate fields of "SkillCategory" */
export type SkillCategory_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<SkillCategory_Max_Fields>;
  min?: Maybe<SkillCategory_Min_Fields>;
};


/** aggregate fields of "SkillCategory" */
export type SkillCategory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<SkillCategory_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "SkillCategory" */
export type SkillCategory_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<SkillCategory_Max_Order_By>;
  min?: Maybe<SkillCategory_Min_Order_By>;
};

/** input type for inserting array relation for remote table "SkillCategory" */
export type SkillCategory_Arr_Rel_Insert_Input = {
  data: Array<SkillCategory_Insert_Input>;
  on_conflict?: Maybe<SkillCategory_On_Conflict>;
};

/** Boolean expression to filter rows from the table "SkillCategory". All fields are combined with a logical 'AND'. */
export type SkillCategory_Bool_Exp = {
  _and?: Maybe<Array<Maybe<SkillCategory_Bool_Exp>>>;
  _not?: Maybe<SkillCategory_Bool_Exp>;
  _or?: Maybe<Array<Maybe<SkillCategory_Bool_Exp>>>;
  name?: Maybe<String_Comparison_Exp>;
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
  _eq?: Maybe<SkillCategory_Enum>;
  _in?: Maybe<Array<SkillCategory_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<SkillCategory_Enum>;
  _nin?: Maybe<Array<SkillCategory_Enum>>;
};

/** input type for inserting data into table "SkillCategory" */
export type SkillCategory_Insert_Input = {
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type SkillCategory_Max_Fields = {
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "SkillCategory" */
export type SkillCategory_Max_Order_By = {
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type SkillCategory_Min_Fields = {
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "SkillCategory" */
export type SkillCategory_Min_Order_By = {
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "SkillCategory" */
export type SkillCategory_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<SkillCategory>;
};

/** input type for inserting object relation for remote table "SkillCategory" */
export type SkillCategory_Obj_Rel_Insert_Input = {
  data: SkillCategory_Insert_Input;
  on_conflict?: Maybe<SkillCategory_On_Conflict>;
};

/** on conflict condition type for table "SkillCategory" */
export type SkillCategory_On_Conflict = {
  constraint: SkillCategory_Constraint;
  update_columns: Array<SkillCategory_Update_Column>;
  where?: Maybe<SkillCategory_Bool_Exp>;
};

/** ordering options when selecting data from "SkillCategory" */
export type SkillCategory_Order_By = {
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "SkillCategory" */
export type SkillCategory_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "SkillCategory" */
export enum SkillCategory_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "SkillCategory" */
export type SkillCategory_Set_Input = {
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "SkillCategory" */
export enum SkillCategory_Update_Column {
  /** column name */
  Name = 'name'
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** subscription root */
export type Subscription_Root = {
  /** fetch data from the table: "AccountType" */
  AccountType: Array<AccountType>;
  /** fetch aggregated fields from the table: "AccountType" */
  AccountType_aggregate: AccountType_Aggregate;
  /** fetch data from the table: "AccountType" using primary key columns */
  AccountType_by_pk?: Maybe<AccountType>;
  /** fetch data from the table: "ColorAspect" */
  ColorAspect: Array<ColorAspect>;
  /** fetch aggregated fields from the table: "ColorAspect" */
  ColorAspect_aggregate: ColorAspect_Aggregate;
  /** fetch data from the table: "ColorAspect" using primary key columns */
  ColorAspect_by_pk?: Maybe<ColorAspect>;
  /** fetch data from the table: "GuildPosition" */
  GuildPosition: Array<GuildPosition>;
  /** fetch aggregated fields from the table: "GuildPosition" */
  GuildPosition_aggregate: GuildPosition_Aggregate;
  /** fetch data from the table: "GuildPosition" using primary key columns */
  GuildPosition_by_pk?: Maybe<GuildPosition>;
  /** fetch data from the table: "GuildStatus" */
  GuildStatus: Array<GuildStatus>;
  /** fetch aggregated fields from the table: "GuildStatus" */
  GuildStatus_aggregate: GuildStatus_Aggregate;
  /** fetch data from the table: "GuildStatus" using primary key columns */
  GuildStatus_by_pk?: Maybe<GuildStatus>;
  /** fetch data from the table: "GuildType" */
  GuildType: Array<GuildType>;
  /** fetch aggregated fields from the table: "GuildType" */
  GuildType_aggregate: GuildType_Aggregate;
  /** fetch data from the table: "GuildType" using primary key columns */
  GuildType_by_pk?: Maybe<GuildType>;
  /** fetch data from the table: "PlayerRank" */
  PlayerRank: Array<PlayerRank>;
  /** fetch aggregated fields from the table: "PlayerRank" */
  PlayerRank_aggregate: PlayerRank_Aggregate;
  /** fetch data from the table: "PlayerRank" using primary key columns */
  PlayerRank_by_pk?: Maybe<PlayerRank>;
  /** fetch data from the table: "QuestCompletionStatus" */
  QuestCompletionStatus: Array<QuestCompletionStatus>;
  /** fetch aggregated fields from the table: "QuestCompletionStatus" */
  QuestCompletionStatus_aggregate: QuestCompletionStatus_Aggregate;
  /** fetch data from the table: "QuestCompletionStatus" using primary key columns */
  QuestCompletionStatus_by_pk?: Maybe<QuestCompletionStatus>;
  /** fetch data from the table: "QuestRepetition" */
  QuestRepetition: Array<QuestRepetition>;
  /** fetch aggregated fields from the table: "QuestRepetition" */
  QuestRepetition_aggregate: QuestRepetition_Aggregate;
  /** fetch data from the table: "QuestRepetition" using primary key columns */
  QuestRepetition_by_pk?: Maybe<QuestRepetition>;
  /** fetch data from the table: "QuestStatus" */
  QuestStatus: Array<QuestStatus>;
  /** fetch aggregated fields from the table: "QuestStatus" */
  QuestStatus_aggregate: QuestStatus_Aggregate;
  /** fetch data from the table: "QuestStatus" using primary key columns */
  QuestStatus_by_pk?: Maybe<QuestStatus>;
  /** fetch data from the table: "SkillCategory" */
  SkillCategory: Array<SkillCategory>;
  /** fetch aggregated fields from the table: "SkillCategory" */
  SkillCategory_aggregate: SkillCategory_Aggregate;
  /** fetch data from the table: "SkillCategory" using primary key columns */
  SkillCategory_by_pk?: Maybe<SkillCategory>;
  /** fetch data from the table: "guild" */
  guild: Array<Guild>;
  /** fetch data from the table: "guild_account" */
  guild_account: Array<Guild_Account>;
  /** fetch aggregated fields from the table: "guild_account" */
  guild_account_aggregate: Guild_Account_Aggregate;
  /** fetch data from the table: "guild_account" using primary key columns */
  guild_account_by_pk?: Maybe<Guild_Account>;
  /** fetch aggregated fields from the table: "guild" */
  guild_aggregate: Guild_Aggregate;
  /** fetch data from the table: "guild" using primary key columns */
  guild_by_pk?: Maybe<Guild>;
  /** fetch data from the table: "guild_player" */
  guild_player: Array<Guild_Player>;
  /** fetch aggregated fields from the table: "guild_player" */
  guild_player_aggregate: Guild_Player_Aggregate;
  /** fetch data from the table: "guild_player" using primary key columns */
  guild_player_by_pk?: Maybe<Guild_Player>;
  /** fetch data from the table: "me" */
  me: Array<Me>;
  /** fetch aggregated fields from the table: "me" */
  me_aggregate: Me_Aggregate;
  /** fetch data from the table: "player" */
  player: Array<Player>;
  /** fetch data from the table: "player_account" */
  player_account: Array<Player_Account>;
  /** fetch aggregated fields from the table: "player_account" */
  player_account_aggregate: Player_Account_Aggregate;
  /** fetch aggregated fields from the table: "player" */
  player_aggregate: Player_Aggregate;
  /** fetch data from the table: "player" using primary key columns */
  player_by_pk?: Maybe<Player>;
  /** fetch data from the table: "player_skill" */
  player_skill: Array<Player_Skill>;
  /** fetch aggregated fields from the table: "player_skill" */
  player_skill_aggregate: Player_Skill_Aggregate;
  /** fetch data from the table: "player_skill" using primary key columns */
  player_skill_by_pk?: Maybe<Player_Skill>;
  /** fetch data from the table: "player_type" */
  player_type: Array<Player_Type>;
  /** fetch aggregated fields from the table: "player_type" */
  player_type_aggregate: Player_Type_Aggregate;
  /** fetch data from the table: "player_type" using primary key columns */
  player_type_by_pk?: Maybe<Player_Type>;
  /** fetch data from the table: "profile_cache" */
  profile_cache: Array<Profile_Cache>;
  /** fetch aggregated fields from the table: "profile_cache" */
  profile_cache_aggregate: Profile_Cache_Aggregate;
  /** fetch data from the table: "profile_cache" using primary key columns */
  profile_cache_by_pk?: Maybe<Profile_Cache>;
  /** fetch data from the table: "quest" */
  quest: Array<Quest>;
  /** fetch aggregated fields from the table: "quest" */
  quest_aggregate: Quest_Aggregate;
  /** fetch data from the table: "quest" using primary key columns */
  quest_by_pk?: Maybe<Quest>;
  /** fetch data from the table: "quest_completion" */
  quest_completion: Array<Quest_Completion>;
  /** fetch aggregated fields from the table: "quest_completion" */
  quest_completion_aggregate: Quest_Completion_Aggregate;
  /** fetch data from the table: "quest_completion" using primary key columns */
  quest_completion_by_pk?: Maybe<Quest_Completion>;
  /** fetch data from the table: "quest_skill" */
  quest_skill: Array<Quest_Skill>;
  /** fetch aggregated fields from the table: "quest_skill" */
  quest_skill_aggregate: Quest_Skill_Aggregate;
  /** fetch data from the table: "quest_skill" using primary key columns */
  quest_skill_by_pk?: Maybe<Quest_Skill>;
  /** fetch data from the table: "skill" */
  skill: Array<Skill>;
  /** fetch aggregated fields from the table: "skill" */
  skill_aggregate: Skill_Aggregate;
  /** fetch data from the table: "skill" using primary key columns */
  skill_by_pk?: Maybe<Skill>;
};


/** subscription root */
export type Subscription_RootAccountTypeArgs = {
  distinct_on?: Maybe<Array<AccountType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AccountType_Order_By>>;
  where?: Maybe<AccountType_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccountType_AggregateArgs = {
  distinct_on?: Maybe<Array<AccountType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AccountType_Order_By>>;
  where?: Maybe<AccountType_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccountType_By_PkArgs = {
  type: Scalars['String'];
};


/** subscription root */
export type Subscription_RootColorAspectArgs = {
  distinct_on?: Maybe<Array<ColorAspect_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ColorAspect_Order_By>>;
  where?: Maybe<ColorAspect_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootColorAspect_AggregateArgs = {
  distinct_on?: Maybe<Array<ColorAspect_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ColorAspect_Order_By>>;
  where?: Maybe<ColorAspect_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootColorAspect_By_PkArgs = {
  mask: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootGuildPositionArgs = {
  distinct_on?: Maybe<Array<GuildPosition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GuildPosition_Order_By>>;
  where?: Maybe<GuildPosition_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuildPosition_AggregateArgs = {
  distinct_on?: Maybe<Array<GuildPosition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GuildPosition_Order_By>>;
  where?: Maybe<GuildPosition_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuildPosition_By_PkArgs = {
  position: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGuildStatusArgs = {
  distinct_on?: Maybe<Array<GuildStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GuildStatus_Order_By>>;
  where?: Maybe<GuildStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuildStatus_AggregateArgs = {
  distinct_on?: Maybe<Array<GuildStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GuildStatus_Order_By>>;
  where?: Maybe<GuildStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuildStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGuildTypeArgs = {
  distinct_on?: Maybe<Array<GuildType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GuildType_Order_By>>;
  where?: Maybe<GuildType_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuildType_AggregateArgs = {
  distinct_on?: Maybe<Array<GuildType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<GuildType_Order_By>>;
  where?: Maybe<GuildType_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuildType_By_PkArgs = {
  name: Scalars['String'];
};


/** subscription root */
export type Subscription_RootPlayerRankArgs = {
  distinct_on?: Maybe<Array<PlayerRank_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayerRank_Order_By>>;
  where?: Maybe<PlayerRank_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayerRank_AggregateArgs = {
  distinct_on?: Maybe<Array<PlayerRank_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PlayerRank_Order_By>>;
  where?: Maybe<PlayerRank_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayerRank_By_PkArgs = {
  rank: Scalars['String'];
};


/** subscription root */
export type Subscription_RootQuestCompletionStatusArgs = {
  distinct_on?: Maybe<Array<QuestCompletionStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<QuestCompletionStatus_Order_By>>;
  where?: Maybe<QuestCompletionStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestCompletionStatus_AggregateArgs = {
  distinct_on?: Maybe<Array<QuestCompletionStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<QuestCompletionStatus_Order_By>>;
  where?: Maybe<QuestCompletionStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestCompletionStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** subscription root */
export type Subscription_RootQuestRepetitionArgs = {
  distinct_on?: Maybe<Array<QuestRepetition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<QuestRepetition_Order_By>>;
  where?: Maybe<QuestRepetition_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestRepetition_AggregateArgs = {
  distinct_on?: Maybe<Array<QuestRepetition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<QuestRepetition_Order_By>>;
  where?: Maybe<QuestRepetition_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestRepetition_By_PkArgs = {
  repetition: Scalars['String'];
};


/** subscription root */
export type Subscription_RootQuestStatusArgs = {
  distinct_on?: Maybe<Array<QuestStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<QuestStatus_Order_By>>;
  where?: Maybe<QuestStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestStatus_AggregateArgs = {
  distinct_on?: Maybe<Array<QuestStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<QuestStatus_Order_By>>;
  where?: Maybe<QuestStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestStatus_By_PkArgs = {
  status: Scalars['String'];
};


/** subscription root */
export type Subscription_RootSkillCategoryArgs = {
  distinct_on?: Maybe<Array<SkillCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SkillCategory_Order_By>>;
  where?: Maybe<SkillCategory_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSkillCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<SkillCategory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SkillCategory_Order_By>>;
  where?: Maybe<SkillCategory_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSkillCategory_By_PkArgs = {
  name: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGuildArgs = {
  distinct_on?: Maybe<Array<Guild_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Order_By>>;
  where?: Maybe<Guild_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuild_AccountArgs = {
  distinct_on?: Maybe<Array<Guild_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Account_Order_By>>;
  where?: Maybe<Guild_Account_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuild_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Guild_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Account_Order_By>>;
  where?: Maybe<Guild_Account_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuild_Account_By_PkArgs = {
  guild_id: Scalars['uuid'];
  type: AccountType_Enum;
};


/** subscription root */
export type Subscription_RootGuild_AggregateArgs = {
  distinct_on?: Maybe<Array<Guild_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Order_By>>;
  where?: Maybe<Guild_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuild_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGuild_PlayerArgs = {
  distinct_on?: Maybe<Array<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuild_Player_AggregateArgs = {
  distinct_on?: Maybe<Array<Guild_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Guild_Player_Order_By>>;
  where?: Maybe<Guild_Player_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGuild_Player_By_PkArgs = {
  guild_id: Scalars['uuid'];
  player_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootMeArgs = {
  distinct_on?: Maybe<Array<Me_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Me_Order_By>>;
  where?: Maybe<Me_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMe_AggregateArgs = {
  distinct_on?: Maybe<Array<Me_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Me_Order_By>>;
  where?: Maybe<Me_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayerArgs = {
  distinct_on?: Maybe<Array<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_AccountArgs = {
  distinct_on?: Maybe<Array<Player_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Account_Order_By>>;
  where?: Maybe<Player_Account_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Account_Order_By>>;
  where?: Maybe<Player_Account_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPlayer_SkillArgs = {
  distinct_on?: Maybe<Array<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_Skill_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Skill_Order_By>>;
  where?: Maybe<Player_Skill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_Skill_By_PkArgs = {
  player_id: Scalars['uuid'];
  skill_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPlayer_TypeArgs = {
  distinct_on?: Maybe<Array<Player_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Type_Order_By>>;
  where?: Maybe<Player_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Type_Order_By>>;
  where?: Maybe<Player_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlayer_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootProfile_CacheArgs = {
  distinct_on?: Maybe<Array<Profile_Cache_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Cache_Order_By>>;
  where?: Maybe<Profile_Cache_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProfile_Cache_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Cache_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Cache_Order_By>>;
  where?: Maybe<Profile_Cache_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProfile_Cache_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuestArgs = {
  distinct_on?: Maybe<Array<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuest_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Order_By>>;
  where?: Maybe<Quest_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuest_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuest_CompletionArgs = {
  distinct_on?: Maybe<Array<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuest_Completion_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Completion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Completion_Order_By>>;
  where?: Maybe<Quest_Completion_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuest_Completion_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuest_SkillArgs = {
  distinct_on?: Maybe<Array<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuest_Skill_AggregateArgs = {
  distinct_on?: Maybe<Array<Quest_Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quest_Skill_Order_By>>;
  where?: Maybe<Quest_Skill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuest_Skill_By_PkArgs = {
  quest_id: Scalars['uuid'];
  skill_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootSkillArgs = {
  distinct_on?: Maybe<Array<Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Skill_Order_By>>;
  where?: Maybe<Skill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSkill_AggregateArgs = {
  distinct_on?: Maybe<Array<Skill_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Skill_Order_By>>;
  where?: Maybe<Skill_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSkill_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type TokenBalances = {
  id: Scalars['ID'];
  pSeedBalance: Scalars['String'];
  seedBalance: Scalars['String'];
};

export type UpdateBoxProfileResponse = {
  success: Scalars['Boolean'];
  updatedProfiles: Array<Scalars['String']>;
};

export type UpdateIdxProfileResponse = {
  success: Scalars['Boolean'];
  updatedProfiles: Array<Scalars['String']>;
};

export type UpdateQuestCompletionInput = {
  quest_completion_id: Scalars['String'];
  status: QuestCompletionStatus_ActionEnum;
};

export type UpdateQuestCompletionOutput = {
  error?: Maybe<Scalars['String']>;
  quest_completion?: Maybe<Quest_Completion>;
  quest_completion_id?: Maybe<Scalars['uuid']>;
  success: Scalars['Boolean'];
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type PlayerFragmentFragment = (
  Pick<Player, 'id' | 'username' | 'total_xp' | 'rank' | 'ethereum_address' | 'availability_hours' | 'timezone'>
  & { ColorAspect?: Maybe<Pick<ColorAspect, 'name' | 'description' | 'mask'>>, playerType?: Maybe<Pick<Player_Type, 'description' | 'id' | 'imageUrl' | 'title'>>, Player_Skills: Array<{ Skill: Pick<Skill, 'category' | 'id' | 'name'> }>, Accounts: Array<Pick<Player_Account, 'identifier' | 'type'>>, profile_cache?: Maybe<Pick<Profile_Cache, 'description' | 'emoji' | 'backgroundImageURL' | 'imageURL' | 'location' | 'name'>>, daohausMemberships: Array<(
    Pick<Member, 'id' | 'shares' | 'molochAddress'>
    & { moloch: Pick<Moloch, 'id' | 'title' | 'version' | 'totalShares' | 'chain'> }
  )>, brightid_status?: Maybe<Pick<BrightIdStatus, 'unique' | 'contextIds'>> }
);

export type GuildFragmentFragment = Pick<Guild, 'id' | 'guildname' | 'description' | 'discord_invite_url' | 'join_button_url' | 'logo' | 'moloch_address' | 'name' | 'type' | 'position' | 'website_url' | 'github_url' | 'twitter_url'>;

export type QuestFragmentFragment = (
  Pick<Quest, 'id' | 'created_at' | 'cooldown' | 'description' | 'external_link' | 'guild_id' | 'status' | 'title' | 'repetition'>
  & { guild: Pick<Guild, 'name' | 'logo'>, player: Pick<Player, 'id' | 'ethereum_address'>, quest_skills: Array<{ skill: Pick<Skill, 'id' | 'name' | 'category'> }> }
);

export type QuestWithCompletionFragmentFragment = (
  Pick<Quest, 'id' | 'created_at' | 'cooldown' | 'description' | 'external_link' | 'guild_id' | 'status' | 'title' | 'repetition'>
  & { guild: Pick<Guild, 'name' | 'logo'>, quest_skills: Array<{ skill: Pick<Skill, 'id' | 'name' | 'category'> }>, quest_completions: Array<(
    { player: Pick<Player, 'id' | 'ethereum_address' | 'username'> }
    & QuestCompletionFragmentFragment
  )> }
);

export type QuestCompletionFragmentFragment = Pick<Quest_Completion, 'id' | 'completed_by_player_id' | 'status' | 'submission_link' | 'submission_text' | 'submitted_at'>;

export type TokenBalancesFragmentFragment = (
  Pick<TokenBalances, 'pSeedBalance'>
  & { address: TokenBalances['id'] }
);

export type PlayerSkillFragmentFragment = Pick<Skill, 'id' | 'name' | 'category'>;

export type GetGuildQueryVariables = Exact<{
  guildname: Scalars['String'];
}>;


export type GetGuildQuery = { guild: Array<GuildFragmentFragment> };

export type GetGuildsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetGuildsQuery = { guild: Array<GuildFragmentFragment> };

export type GetGuildnamesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetGuildnamesQuery = { guild: Array<Pick<Guild, 'guildname'>> };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { me: Array<(
    Pick<Me, 'id' | 'ethereum_address' | 'username'>
    & { player?: Maybe<PlayerFragmentFragment> }
  )> };

export type GetMembershipsQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type GetMembershipsQuery = { getDaoHausMemberships: Array<(
    Pick<Member, 'id'>
    & { moloch: Pick<Moloch, 'id' | 'title' | 'version' | 'chain'> }
  )> };

export type GetpSeedBalanceQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type GetpSeedBalanceQuery = { getTokenBalances?: Maybe<TokenBalancesFragmentFragment> };

export type GetPatronsQueryVariables = Exact<{
  addresses?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetPatronsQuery = { player: Array<PlayerFragmentFragment> };

export type GetpSeedHoldersQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetpSeedHoldersQuery = { pSeedHolders?: Maybe<Array<TokenBalancesFragmentFragment>> };

export type GetAspectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAspectsQuery = { ColorAspect: Array<Pick<ColorAspect, 'mask' | 'name' | 'description'>> };

export type GetPlayerQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetPlayerQuery = { player: Array<PlayerFragmentFragment> };

export type GetPlayerTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlayerTypesQuery = { player_type: Array<Pick<Player_Type, 'description' | 'id' | 'title' | 'imageUrl'>> };

export type GetPlayersQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  skillIds?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
  playerTypeIds?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
  availability?: Maybe<Scalars['Int']>;
  timezones?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  search?: Maybe<Scalars['String']>;
}>;


export type GetPlayersQuery = { player: Array<PlayerFragmentFragment>, player_aggregate: { aggregate?: Maybe<Pick<Player_Aggregate_Fields, 'count'>> } };

export type GetPlayerUsernamesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetPlayerUsernamesQuery = { player: Array<Pick<Player, 'username'>> };

export type GetPlayerFiltersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlayerFiltersQuery = { skill_aggregate: { nodes: Array<{ name: Skill['category'] }> }, skill: Array<PlayerSkillFragmentFragment>, player_type: Array<{ value: Player_Type['id'], label: Player_Type['title'] }> };

export type GetQuestQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetQuestQuery = { quest_by_pk?: Maybe<QuestFragmentFragment> };

export type GetQuestWithCompletionsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetQuestWithCompletionsQuery = { quest_by_pk?: Maybe<(
    { player: PlayerFragmentFragment }
    & QuestWithCompletionFragmentFragment
  )> };

export type GetQuestIdsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetQuestIdsQuery = { quest: Array<Pick<Quest, 'id'>> };

export type GetQuestsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  status?: Maybe<QuestStatus_Enum>;
  guild_id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Order_By>;
  created_by_player_id?: Maybe<Scalars['uuid']>;
}>;


export type GetQuestsQuery = { quest: Array<QuestFragmentFragment> };

export type GetQuestGuildsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQuestGuildsQuery = { quest_aggregate: { nodes: Array<(
      Pick<Quest, 'guild_id'>
      & { guild: Pick<Guild, 'name'> }
    )> } };

export type GetSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkillsQuery = { skill: Array<PlayerSkillFragmentFragment> };

export type CreateQuestMutationVariables = Exact<{
  input: CreateQuestInput;
}>;


export type CreateQuestMutation = { createQuest?: Maybe<(
    Pick<CreateQuestOutput, 'success' | 'error' | 'quest_id'>
    & { quest?: Maybe<Pick<Quest, 'id'>> }
  )> };

export type CreateQuestCompletionMutationVariables = Exact<{
  input: CreateQuestCompletionInput;
}>;


export type CreateQuestCompletionMutation = { createQuestCompletion?: Maybe<(
    Pick<CreateQuestCompletionOutput, 'success' | 'error' | 'quest_completion_id'>
    & { quest_completion?: Maybe<(
      Pick<Quest_Completion, 'id'>
      & { quest: Pick<Quest, 'id'> }
    )> }
  )> };

export type AuthenticateDiscordGuildMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type AuthenticateDiscordGuildMutation = { authenticateDiscordGuild?: Maybe<Pick<DiscordGuildAuthResponse, 'success' | 'guildname' | 'error' | 'exists'>> };

export type InsertCacheInvalidationMutationVariables = Exact<{
  playerId: Scalars['uuid'];
}>;


export type InsertCacheInvalidationMutation = { updateIDXProfile?: Maybe<Pick<CacheProcessOutput, 'success' | 'error'>> };

export type UpdatePlayerUsernameMutationVariables = Exact<{
  playerId: Scalars['uuid'];
  username: Scalars['String'];
}>;


export type UpdatePlayerUsernameMutation = { update_player_by_pk?: Maybe<Pick<Player, 'id' | 'username'>> };

export type UpdateProfileMutationVariables = Exact<{
  playerId: Scalars['uuid'];
  input: Player_Set_Input;
}>;


export type UpdateProfileMutation = { update_player_by_pk?: Maybe<Pick<Player, 'id' | 'availability_hours' | 'timezone'>> };

export type UpdateAboutYouMutationVariables = Exact<{
  playerId: Scalars['uuid'];
  input: Player_Set_Input;
}>;


export type UpdateAboutYouMutation = { update_player_by_pk?: Maybe<(
    Pick<Player, 'color_mask' | 'id'>
    & { playerType?: Maybe<Pick<Player_Type, 'description' | 'id' | 'imageUrl' | 'title'>> }
  )> };

export type UpdatePlayerSkillsMutationVariables = Exact<{
  skills: Array<Player_Skill_Insert_Input> | Player_Skill_Insert_Input;
}>;


export type UpdatePlayerSkillsMutation = { delete_player_skill?: Maybe<Pick<Player_Skill_Mutation_Response, 'affected_rows'>>, insert_player_skill?: Maybe<Pick<Player_Skill_Mutation_Response, 'affected_rows'>> };

export type UpdateQuestMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Quest_Set_Input;
  skills: Array<Quest_Skill_Insert_Input> | Quest_Skill_Insert_Input;
}>;


export type UpdateQuestMutation = { update_quest_by_pk?: Maybe<Pick<Quest, 'id'>>, delete_quest_skill?: Maybe<Pick<Quest_Skill_Mutation_Response, 'affected_rows'>>, insert_quest_skill?: Maybe<(
    Pick<Quest_Skill_Mutation_Response, 'affected_rows'>
    & { returning: Array<Pick<Quest_Skill, 'quest_id' | 'skill_id'>> }
  )> };

export type UpdateQuestCompletionMutationVariables = Exact<{
  quest_completion_id: Scalars['String'];
  status: QuestCompletionStatus_ActionEnum;
}>;


export type UpdateQuestCompletionMutation = { updateQuestCompletion?: Maybe<(
    Pick<UpdateQuestCompletionOutput, 'error' | 'success' | 'quest_completion_id'>
    & { quest_completion?: Maybe<Pick<Quest_Completion, 'id'>> }
  )> };

export const PlayerFragmentFragmentDoc = gql`
    fragment PlayerFragment on player {
  id
  username
  total_xp
  rank
  ethereum_address
  availability_hours
  timezone
  ColorAspect {
    name
    description
    mask
  }
  playerType {
    description
    id
    imageUrl
    title
  }
  Player_Skills {
    Skill {
      category
      id
      name
    }
  }
  Accounts(where: {type: {_in: [TWITTER, GITHUB]}}) {
    identifier
    type
  }
  profile_cache {
    description
    emoji
    backgroundImageURL
    imageURL
    location
    name
  }
  daohausMemberships {
    id
    shares
    molochAddress
    moloch {
      id
      title
      version
      totalShares
      chain
    }
  }
  brightid_status {
    unique
    contextIds
  }
}
    `;
export const GuildFragmentFragmentDoc = gql`
    fragment GuildFragment on guild {
  id
  guildname
  description
  discord_invite_url
  join_button_url
  logo
  moloch_address
  name
  type
  position
  website_url
  github_url
  twitter_url
}
    `;
export const QuestFragmentFragmentDoc = gql`
    fragment QuestFragment on quest {
  id
  created_at
  cooldown
  description
  external_link
  guild_id
  status
  title
  repetition
  guild {
    name
    logo
  }
  player {
    id
    ethereum_address
  }
  quest_skills {
    skill {
      id
      name
      category
    }
  }
}
    `;
export const QuestCompletionFragmentFragmentDoc = gql`
    fragment QuestCompletionFragment on quest_completion {
  id
  completed_by_player_id
  status
  submission_link
  submission_text
  submitted_at
}
    `;
export const QuestWithCompletionFragmentFragmentDoc = gql`
    fragment QuestWithCompletionFragment on quest {
  id
  created_at
  cooldown
  description
  external_link
  guild_id
  status
  title
  repetition
  guild {
    name
    logo
  }
  quest_skills {
    skill {
      id
      name
      category
    }
  }
  quest_completions(order_by: [{submitted_at: desc}]) {
    ...QuestCompletionFragment
    player {
      id
      ethereum_address
      username
    }
  }
}
    ${QuestCompletionFragmentFragmentDoc}`;
export const TokenBalancesFragmentFragmentDoc = gql`
    fragment TokenBalancesFragment on TokenBalances {
  address: id
  pSeedBalance
}
    `;
export const PlayerSkillFragmentFragmentDoc = gql`
    fragment PlayerSkillFragment on skill {
  id
  name
  category
}
    `;
export const GetGuildDocument = gql`
    query GetGuild($guildname: String!) {
  guild(where: {guildname: {_eq: $guildname}}) {
    ...GuildFragment
  }
}
    ${GuildFragmentFragmentDoc}`;

export function useGetGuildQuery(options: Omit<Urql.UseQueryArgs<GetGuildQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetGuildQuery>({ query: GetGuildDocument, ...options });
};
export const GetGuildsDocument = gql`
    query GetGuilds($limit: Int) {
  guild(where: {status: {_eq: ACTIVE}}, limit: $limit) {
    ...GuildFragment
  }
}
    ${GuildFragmentFragmentDoc}`;

export function useGetGuildsQuery(options: Omit<Urql.UseQueryArgs<GetGuildsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetGuildsQuery>({ query: GetGuildsDocument, ...options });
};
export const GetGuildnamesDocument = gql`
    query GetGuildnames($limit: Int) {
  guild(where: {status: {_eq: ACTIVE}}, limit: $limit) {
    guildname
  }
}
    `;

export function useGetGuildnamesQuery(options: Omit<Urql.UseQueryArgs<GetGuildnamesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetGuildnamesQuery>({ query: GetGuildnamesDocument, ...options });
};
export const GetMeDocument = gql`
    query GetMe {
  me {
    id
    ethereum_address
    username
    player {
      ...PlayerFragment
    }
  }
}
    ${PlayerFragmentFragmentDoc}`;

export function useGetMeQuery(options: Omit<Urql.UseQueryArgs<GetMeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMeQuery>({ query: GetMeDocument, ...options });
};
export const GetMembershipsDocument = gql`
    query GetMemberships($address: String!) {
  getDaoHausMemberships(memberAddress: $address) {
    id
    moloch {
      id
      title
      version
      chain
    }
  }
}
    `;

export function useGetMembershipsQuery(options: Omit<Urql.UseQueryArgs<GetMembershipsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMembershipsQuery>({ query: GetMembershipsDocument, ...options });
};
export const GetpSeedBalanceDocument = gql`
    query GetpSeedBalance($address: String!) {
  getTokenBalances(address: $address) {
    ...TokenBalancesFragment
  }
}
    ${TokenBalancesFragmentFragmentDoc}`;

export function useGetpSeedBalanceQuery(options: Omit<Urql.UseQueryArgs<GetpSeedBalanceQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetpSeedBalanceQuery>({ query: GetpSeedBalanceDocument, ...options });
};
export const GetPatronsDocument = gql`
    query GetPatrons($addresses: [String!], $limit: Int) {
  player(where: {ethereum_address: {_in: $addresses}}, limit: $limit) {
    ...PlayerFragment
  }
}
    ${PlayerFragmentFragmentDoc}`;

export function useGetPatronsQuery(options: Omit<Urql.UseQueryArgs<GetPatronsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPatronsQuery>({ query: GetPatronsDocument, ...options });
};
export const GetpSeedHoldersDocument = gql`
    query GetpSeedHolders($limit: Int) {
  pSeedHolders: getTopPSeedHolders(limit: $limit) {
    ...TokenBalancesFragment
  }
}
    ${TokenBalancesFragmentFragmentDoc}`;

export function useGetpSeedHoldersQuery(options: Omit<Urql.UseQueryArgs<GetpSeedHoldersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetpSeedHoldersQuery>({ query: GetpSeedHoldersDocument, ...options });
};
export const GetAspectsDocument = gql`
    query GetAspects {
  ColorAspect {
    mask
    name
    description
  }
}
    `;

export function useGetAspectsQuery(options: Omit<Urql.UseQueryArgs<GetAspectsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAspectsQuery>({ query: GetAspectsDocument, ...options });
};
export const GetPlayerDocument = gql`
    query GetPlayer($username: String!) {
  player(where: {username: {_eq: $username}}) {
    ...PlayerFragment
  }
}
    ${PlayerFragmentFragmentDoc}`;

export function useGetPlayerQuery(options: Omit<Urql.UseQueryArgs<GetPlayerQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPlayerQuery>({ query: GetPlayerDocument, ...options });
};
export const GetPlayerTypesDocument = gql`
    query GetPlayerTypes {
  player_type {
    description
    id
    title
    imageUrl
  }
}
    `;

export function useGetPlayerTypesQuery(options: Omit<Urql.UseQueryArgs<GetPlayerTypesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPlayerTypesQuery>({ query: GetPlayerTypesDocument, ...options });
};
export const GetPlayersDocument = gql`
    query GetPlayers($offset: Int, $limit: Int, $skillIds: [uuid!], $playerTypeIds: [Int!], $availability: Int, $timezones: [String!], $search: String) {
  player(
    order_by: {total_xp: desc}
    offset: $offset
    limit: $limit
    where: {availability_hours: {_gte: $availability}, timezone: {_in: $timezones}, playerType: {id: {_in: $playerTypeIds}}, Player_Skills: {Skill: {id: {_in: $skillIds}}}, _or: [{username: {_ilike: $search}}, {ethereum_address: {_ilike: $search}}]}
  ) {
    ...PlayerFragment
  }
  player_aggregate(
    where: {availability_hours: {_gte: $availability}, timezone: {_in: $timezones}, playerType: {id: {_in: $playerTypeIds}}, Player_Skills: {Skill: {id: {_in: $skillIds}}}, _or: [{username: {_ilike: $search}}, {ethereum_address: {_ilike: $search}}]}
  ) {
    aggregate {
      count
    }
  }
}
    ${PlayerFragmentFragmentDoc}`;

export function useGetPlayersQuery(options: Omit<Urql.UseQueryArgs<GetPlayersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPlayersQuery>({ query: GetPlayersDocument, ...options });
};
export const GetPlayerUsernamesDocument = gql`
    query GetPlayerUsernames($limit: Int) {
  player(order_by: {total_xp: desc}, limit: $limit) {
    username
  }
}
    `;

export function useGetPlayerUsernamesQuery(options: Omit<Urql.UseQueryArgs<GetPlayerUsernamesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPlayerUsernamesQuery>({ query: GetPlayerUsernamesDocument, ...options });
};
export const GetPlayerFiltersDocument = gql`
    query GetPlayerFilters {
  skill_aggregate(distinct_on: category) {
    nodes {
      name: category
    }
  }
  skill(order_by: {Player_Skills_aggregate: {count: desc}, category: asc}) {
    ...PlayerSkillFragment
  }
  player_type(distinct_on: id) {
    value: id
    label: title
  }
}
    ${PlayerSkillFragmentFragmentDoc}`;

export function useGetPlayerFiltersQuery(options: Omit<Urql.UseQueryArgs<GetPlayerFiltersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPlayerFiltersQuery>({ query: GetPlayerFiltersDocument, ...options });
};
export const GetQuestDocument = gql`
    query GetQuest($id: uuid!) {
  quest_by_pk(id: $id) {
    ...QuestFragment
  }
}
    ${QuestFragmentFragmentDoc}`;

export function useGetQuestQuery(options: Omit<Urql.UseQueryArgs<GetQuestQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetQuestQuery>({ query: GetQuestDocument, ...options });
};
export const GetQuestWithCompletionsDocument = gql`
    query GetQuestWithCompletions($id: uuid!) {
  quest_by_pk(id: $id) {
    ...QuestWithCompletionFragment
    player {
      ...PlayerFragment
    }
  }
}
    ${QuestWithCompletionFragmentFragmentDoc}
${PlayerFragmentFragmentDoc}`;

export function useGetQuestWithCompletionsQuery(options: Omit<Urql.UseQueryArgs<GetQuestWithCompletionsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetQuestWithCompletionsQuery>({ query: GetQuestWithCompletionsDocument, ...options });
};
export const GetQuestIdsDocument = gql`
    query GetQuestIds($limit: Int) {
  quest(limit: $limit, order_by: {created_at: desc}) {
    id
  }
}
    `;

export function useGetQuestIdsQuery(options: Omit<Urql.UseQueryArgs<GetQuestIdsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetQuestIdsQuery>({ query: GetQuestIdsDocument, ...options });
};
export const GetQuestsDocument = gql`
    query GetQuests($limit: Int, $status: QuestStatus_enum, $guild_id: uuid, $order: order_by, $created_by_player_id: uuid) {
  quest(
    limit: $limit
    order_by: {created_at: $order}
    where: {status: {_eq: $status}, guild_id: {_eq: $guild_id}, created_by_player_id: {_eq: $created_by_player_id}}
  ) {
    ...QuestFragment
  }
}
    ${QuestFragmentFragmentDoc}`;

export function useGetQuestsQuery(options: Omit<Urql.UseQueryArgs<GetQuestsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetQuestsQuery>({ query: GetQuestsDocument, ...options });
};
export const GetQuestGuildsDocument = gql`
    query GetQuestGuilds {
  quest_aggregate(distinct_on: guild_id) {
    nodes {
      guild_id
      guild {
        name
      }
    }
  }
}
    `;

export function useGetQuestGuildsQuery(options: Omit<Urql.UseQueryArgs<GetQuestGuildsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetQuestGuildsQuery>({ query: GetQuestGuildsDocument, ...options });
};
export const GetSkillsDocument = gql`
    query GetSkills {
  skill(order_by: {Player_Skills_aggregate: {count: desc}, category: asc}) {
    ...PlayerSkillFragment
  }
}
    ${PlayerSkillFragmentFragmentDoc}`;

export function useGetSkillsQuery(options: Omit<Urql.UseQueryArgs<GetSkillsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetSkillsQuery>({ query: GetSkillsDocument, ...options });
};
export const CreateQuestDocument = gql`
    mutation CreateQuest($input: CreateQuestInput!) {
  createQuest(quest: $input) {
    success
    error
    quest_id
    quest {
      id
    }
  }
}
    `;

export function useCreateQuestMutation() {
  return Urql.useMutation<CreateQuestMutation, CreateQuestMutationVariables>(CreateQuestDocument);
};
export const CreateQuestCompletionDocument = gql`
    mutation CreateQuestCompletion($input: CreateQuestCompletionInput!) {
  createQuestCompletion(questCompletion: $input) {
    success
    error
    quest_completion_id
    quest_completion {
      id
      quest {
        id
      }
    }
  }
}
    `;

export function useCreateQuestCompletionMutation() {
  return Urql.useMutation<CreateQuestCompletionMutation, CreateQuestCompletionMutationVariables>(CreateQuestCompletionDocument);
};
export const AuthenticateDiscordGuildDocument = gql`
    mutation AuthenticateDiscordGuild($code: String!) {
  authenticateDiscordGuild(code: $code) {
    success
    guildname
    error
    exists
  }
}
    `;

export function useAuthenticateDiscordGuildMutation() {
  return Urql.useMutation<AuthenticateDiscordGuildMutation, AuthenticateDiscordGuildMutationVariables>(AuthenticateDiscordGuildDocument);
};
export const InsertCacheInvalidationDocument = gql`
    mutation InsertCacheInvalidation($playerId: uuid!) {
  updateIDXProfile(playerId: $playerId) {
    success
    error
  }
}
    `;

export function useInsertCacheInvalidationMutation() {
  return Urql.useMutation<InsertCacheInvalidationMutation, InsertCacheInvalidationMutationVariables>(InsertCacheInvalidationDocument);
};
export const UpdatePlayerUsernameDocument = gql`
    mutation UpdatePlayerUsername($playerId: uuid!, $username: String!) {
  update_player_by_pk(pk_columns: {id: $playerId}, _set: {username: $username}) {
    id
    username
  }
}
    `;

export function useUpdatePlayerUsernameMutation() {
  return Urql.useMutation<UpdatePlayerUsernameMutation, UpdatePlayerUsernameMutationVariables>(UpdatePlayerUsernameDocument);
};
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($playerId: uuid!, $input: player_set_input!) {
  update_player_by_pk(pk_columns: {id: $playerId}, _set: $input) {
    id
    availability_hours
    timezone
  }
}
    `;

export function useUpdateProfileMutation() {
  return Urql.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument);
};
export const UpdateAboutYouDocument = gql`
    mutation UpdateAboutYou($playerId: uuid!, $input: player_set_input!) {
  update_player_by_pk(pk_columns: {id: $playerId}, _set: $input) {
    color_mask
    playerType {
      description
      id
      imageUrl
      title
    }
    id
  }
}
    `;

export function useUpdateAboutYouMutation() {
  return Urql.useMutation<UpdateAboutYouMutation, UpdateAboutYouMutationVariables>(UpdateAboutYouDocument);
};
export const UpdatePlayerSkillsDocument = gql`
    mutation UpdatePlayerSkills($skills: [player_skill_insert_input!]!) {
  delete_player_skill(where: {}) {
    affected_rows
  }
  insert_player_skill(objects: $skills) {
    affected_rows
  }
}
    `;

export function useUpdatePlayerSkillsMutation() {
  return Urql.useMutation<UpdatePlayerSkillsMutation, UpdatePlayerSkillsMutationVariables>(UpdatePlayerSkillsDocument);
};
export const UpdateQuestDocument = gql`
    mutation UpdateQuest($id: uuid!, $input: quest_set_input!, $skills: [quest_skill_insert_input!]!) {
  update_quest_by_pk(pk_columns: {id: $id}, _set: $input) {
    id
  }
  delete_quest_skill(where: {quest_id: {_eq: $id}}) {
    affected_rows
  }
  insert_quest_skill(objects: $skills) {
    affected_rows
    returning {
      quest_id
      skill_id
    }
  }
}
    `;

export function useUpdateQuestMutation() {
  return Urql.useMutation<UpdateQuestMutation, UpdateQuestMutationVariables>(UpdateQuestDocument);
};
export const UpdateQuestCompletionDocument = gql`
    mutation UpdateQuestCompletion($quest_completion_id: String!, $status: QuestCompletionStatus_ActionEnum!) {
  updateQuestCompletion(
    updateData: {quest_completion_id: $quest_completion_id, status: $status}
  ) {
    error
    success
    quest_completion_id
    quest_completion {
      id
    }
  }
}
    `;

export function useUpdateQuestCompletionMutation() {
  return Urql.useMutation<UpdateQuestCompletionMutation, UpdateQuestCompletionMutationVariables>(UpdateQuestCompletionDocument);
};