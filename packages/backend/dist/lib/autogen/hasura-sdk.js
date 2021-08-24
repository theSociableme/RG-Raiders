"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quest_Completion_Constraint = exports.Profile_Cache_Update_Column = exports.Profile_Cache_Select_Column = exports.Profile_Cache_Constraint = exports.PlayerRank_Update_Column = exports.PlayerRank_Select_Column = exports.PlayerRank_Enum = exports.PlayerRank_Constraint = exports.Player_Update_Column = exports.Player_Type_Update_Column = exports.Player_Type_Select_Column = exports.Player_Type_Constraint = exports.Player_Skill_Update_Column = exports.Player_Skill_Select_Column = exports.Player_Skill_Constraint = exports.Player_Select_Column = exports.Player_Constraint = exports.Player_Account_Update_Column = exports.Player_Account_Select_Column = exports.Player_Account_Constraint = exports.Order_By = exports.Me_Select_Column = exports.GuildType_Update_Column = exports.GuildType_Select_Column = exports.GuildType_Enum = exports.GuildType_Constraint = exports.GuildStatus_Update_Column = exports.GuildStatus_Select_Column = exports.GuildStatus_Enum = exports.GuildStatus_Constraint = exports.GuildPosition_Update_Column = exports.GuildPosition_Select_Column = exports.GuildPosition_Enum = exports.GuildPosition_Constraint = exports.Guild_Update_Column = exports.Guild_Select_Column = exports.Guild_Player_Update_Column = exports.Guild_Player_Select_Column = exports.Guild_Player_Constraint = exports.Guild_Constraint = exports.Guild_Account_Update_Column = exports.Guild_Account_Select_Column = exports.Guild_Account_Constraint = exports.ColorAspect_Update_Column = exports.ColorAspect_Select_Column = exports.ColorAspect_Constraint = exports.AccountType_Update_Column = exports.AccountType_Select_Column = exports.AccountType_Enum = exports.AccountType_Constraint = void 0;
exports.GetDiscordGuildDocument = exports.GetGuildDocument = exports.GetLastQuestCompletionForPlayerDocument = exports.GetQuestCompletionByIdDocument = exports.GetQuestCompletionsDocument = exports.GetQuestByIdDocument = exports.GetPlayerFromEthDocument = exports.GetPlayerDocument = exports.UpdateGuildDiscordMetadataDocument = exports.CreateGuildDocument = exports.RejectOtherQuestCompletionsDocument = exports.UpdateQuestCompletionStatusDocument = exports.UpdateQuestStatusDocument = exports.CreateQuestCompletionDocument = exports.CreateQuestDocument = exports.InsertPlayersDocument = exports.UpdatePlayerDocument = exports.UpsertProfileCacheDocument = exports.UpsertAccountDocument = exports.CreatePlayerFromEthDocument = exports.GuildFragmentFragmentDoc = exports.SkillCategory_Update_Column = exports.SkillCategory_Select_Column = exports.SkillCategory_Enum = exports.SkillCategory_Constraint = exports.Skill_Update_Column = exports.Skill_Select_Column = exports.Skill_Constraint = exports.QuestStatus_Update_Column = exports.QuestStatus_Select_Column = exports.QuestStatus_Enum = exports.QuestStatus_Constraint = exports.QuestRepetition_Update_Column = exports.QuestRepetition_Select_Column = exports.QuestRepetition_Enum = exports.QuestRepetition_Constraint = exports.QuestRepetition_ActionEnum = exports.QuestCompletionStatus_Update_Column = exports.QuestCompletionStatus_Select_Column = exports.QuestCompletionStatus_Enum = exports.QuestCompletionStatus_Constraint = exports.QuestCompletionStatus_ActionEnum = exports.Quest_Update_Column = exports.Quest_Skill_Update_Column = exports.Quest_Skill_Select_Column = exports.Quest_Skill_Constraint = exports.Quest_Select_Column = exports.Quest_Constraint = exports.Quest_Completion_Update_Column = exports.Quest_Completion_Select_Column = void 0;
exports.getSdk = exports.GetCacheEntriesDocument = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
/** unique or primary key constraints on table "AccountType" */
var AccountType_Constraint;
(function (AccountType_Constraint) {
    /** unique or primary key constraint */
    AccountType_Constraint["AccountTypePkey"] = "AccountType_pkey";
})(AccountType_Constraint = exports.AccountType_Constraint || (exports.AccountType_Constraint = {}));
var AccountType_Enum;
(function (AccountType_Enum) {
    AccountType_Enum["Discord"] = "DISCORD";
    AccountType_Enum["Discourse"] = "DISCOURSE";
    AccountType_Enum["Ethereum"] = "ETHEREUM";
    AccountType_Enum["Github"] = "GITHUB";
    AccountType_Enum["Twitter"] = "TWITTER";
})(AccountType_Enum = exports.AccountType_Enum || (exports.AccountType_Enum = {}));
/** select columns of table "AccountType" */
var AccountType_Select_Column;
(function (AccountType_Select_Column) {
    /** column name */
    AccountType_Select_Column["Type"] = "type";
})(AccountType_Select_Column = exports.AccountType_Select_Column || (exports.AccountType_Select_Column = {}));
/** update columns of table "AccountType" */
var AccountType_Update_Column;
(function (AccountType_Update_Column) {
    /** column name */
    AccountType_Update_Column["Type"] = "type";
})(AccountType_Update_Column = exports.AccountType_Update_Column || (exports.AccountType_Update_Column = {}));
/** unique or primary key constraints on table "ColorAspect" */
var ColorAspect_Constraint;
(function (ColorAspect_Constraint) {
    /** unique or primary key constraint */
    ColorAspect_Constraint["ColorAspectNameKey"] = "ColorAspect_name_key";
    /** unique or primary key constraint */
    ColorAspect_Constraint["ColorAspectPkey"] = "ColorAspect_pkey";
})(ColorAspect_Constraint = exports.ColorAspect_Constraint || (exports.ColorAspect_Constraint = {}));
/** select columns of table "ColorAspect" */
var ColorAspect_Select_Column;
(function (ColorAspect_Select_Column) {
    /** column name */
    ColorAspect_Select_Column["Description"] = "description";
    /** column name */
    ColorAspect_Select_Column["Mask"] = "mask";
    /** column name */
    ColorAspect_Select_Column["Name"] = "name";
})(ColorAspect_Select_Column = exports.ColorAspect_Select_Column || (exports.ColorAspect_Select_Column = {}));
/** update columns of table "ColorAspect" */
var ColorAspect_Update_Column;
(function (ColorAspect_Update_Column) {
    /** column name */
    ColorAspect_Update_Column["Description"] = "description";
    /** column name */
    ColorAspect_Update_Column["Mask"] = "mask";
    /** column name */
    ColorAspect_Update_Column["Name"] = "name";
})(ColorAspect_Update_Column = exports.ColorAspect_Update_Column || (exports.ColorAspect_Update_Column = {}));
/** unique or primary key constraints on table "guild_account" */
var Guild_Account_Constraint;
(function (Guild_Account_Constraint) {
    /** unique or primary key constraint */
    Guild_Account_Constraint["GuildAccountPkey"] = "guild_account_pkey";
    /** unique or primary key constraint */
    Guild_Account_Constraint["GuildAccountTypeIdentifierKey"] = "guild_account_type_identifier_key";
})(Guild_Account_Constraint = exports.Guild_Account_Constraint || (exports.Guild_Account_Constraint = {}));
/** select columns of table "guild_account" */
var Guild_Account_Select_Column;
(function (Guild_Account_Select_Column) {
    /** column name */
    Guild_Account_Select_Column["GuildId"] = "guild_id";
    /** column name */
    Guild_Account_Select_Column["Identifier"] = "identifier";
    /** column name */
    Guild_Account_Select_Column["Type"] = "type";
})(Guild_Account_Select_Column = exports.Guild_Account_Select_Column || (exports.Guild_Account_Select_Column = {}));
/** update columns of table "guild_account" */
var Guild_Account_Update_Column;
(function (Guild_Account_Update_Column) {
    /** column name */
    Guild_Account_Update_Column["GuildId"] = "guild_id";
    /** column name */
    Guild_Account_Update_Column["Identifier"] = "identifier";
    /** column name */
    Guild_Account_Update_Column["Type"] = "type";
})(Guild_Account_Update_Column = exports.Guild_Account_Update_Column || (exports.Guild_Account_Update_Column = {}));
/** unique or primary key constraints on table "guild" */
var Guild_Constraint;
(function (Guild_Constraint) {
    /** unique or primary key constraint */
    Guild_Constraint["GuildGuildnameKey"] = "Guild_guildname_key";
    /** unique or primary key constraint */
    Guild_Constraint["GuildPkey"] = "Guild_pkey";
    /** unique or primary key constraint */
    Guild_Constraint["GuildDiscordIdKey"] = "guild_discord_id_key";
})(Guild_Constraint = exports.Guild_Constraint || (exports.Guild_Constraint = {}));
/** unique or primary key constraints on table "guild_player" */
var Guild_Player_Constraint;
(function (Guild_Player_Constraint) {
    /** unique or primary key constraint */
    Guild_Player_Constraint["GuildPlayerPkey"] = "guild_player_pkey";
})(Guild_Player_Constraint = exports.Guild_Player_Constraint || (exports.Guild_Player_Constraint = {}));
/** select columns of table "guild_player" */
var Guild_Player_Select_Column;
(function (Guild_Player_Select_Column) {
    /** column name */
    Guild_Player_Select_Column["GuildId"] = "guild_id";
    /** column name */
    Guild_Player_Select_Column["PlayerId"] = "player_id";
})(Guild_Player_Select_Column = exports.Guild_Player_Select_Column || (exports.Guild_Player_Select_Column = {}));
/** update columns of table "guild_player" */
var Guild_Player_Update_Column;
(function (Guild_Player_Update_Column) {
    /** column name */
    Guild_Player_Update_Column["GuildId"] = "guild_id";
    /** column name */
    Guild_Player_Update_Column["PlayerId"] = "player_id";
})(Guild_Player_Update_Column = exports.Guild_Player_Update_Column || (exports.Guild_Player_Update_Column = {}));
/** select columns of table "guild" */
var Guild_Select_Column;
(function (Guild_Select_Column) {
    /** column name */
    Guild_Select_Column["Description"] = "description";
    /** column name */
    Guild_Select_Column["DiscordId"] = "discord_id";
    /** column name */
    Guild_Select_Column["DiscordInviteUrl"] = "discord_invite_url";
    /** column name */
    Guild_Select_Column["DiscordMetadata"] = "discord_metadata";
    /** column name */
    Guild_Select_Column["GithubUrl"] = "github_url";
    /** column name */
    Guild_Select_Column["Guildname"] = "guildname";
    /** column name */
    Guild_Select_Column["Id"] = "id";
    /** column name */
    Guild_Select_Column["JoinButtonUrl"] = "join_button_url";
    /** column name */
    Guild_Select_Column["Logo"] = "logo";
    /** column name */
    Guild_Select_Column["MolochAddress"] = "moloch_address";
    /** column name */
    Guild_Select_Column["Name"] = "name";
    /** column name */
    Guild_Select_Column["Position"] = "position";
    /** column name */
    Guild_Select_Column["Status"] = "status";
    /** column name */
    Guild_Select_Column["TwitterUrl"] = "twitter_url";
    /** column name */
    Guild_Select_Column["Type"] = "type";
    /** column name */
    Guild_Select_Column["WebsiteUrl"] = "website_url";
})(Guild_Select_Column = exports.Guild_Select_Column || (exports.Guild_Select_Column = {}));
/** update columns of table "guild" */
var Guild_Update_Column;
(function (Guild_Update_Column) {
    /** column name */
    Guild_Update_Column["Description"] = "description";
    /** column name */
    Guild_Update_Column["DiscordId"] = "discord_id";
    /** column name */
    Guild_Update_Column["DiscordInviteUrl"] = "discord_invite_url";
    /** column name */
    Guild_Update_Column["DiscordMetadata"] = "discord_metadata";
    /** column name */
    Guild_Update_Column["GithubUrl"] = "github_url";
    /** column name */
    Guild_Update_Column["Guildname"] = "guildname";
    /** column name */
    Guild_Update_Column["Id"] = "id";
    /** column name */
    Guild_Update_Column["JoinButtonUrl"] = "join_button_url";
    /** column name */
    Guild_Update_Column["Logo"] = "logo";
    /** column name */
    Guild_Update_Column["MolochAddress"] = "moloch_address";
    /** column name */
    Guild_Update_Column["Name"] = "name";
    /** column name */
    Guild_Update_Column["Position"] = "position";
    /** column name */
    Guild_Update_Column["Status"] = "status";
    /** column name */
    Guild_Update_Column["TwitterUrl"] = "twitter_url";
    /** column name */
    Guild_Update_Column["Type"] = "type";
    /** column name */
    Guild_Update_Column["WebsiteUrl"] = "website_url";
})(Guild_Update_Column = exports.Guild_Update_Column || (exports.Guild_Update_Column = {}));
/** unique or primary key constraints on table "GuildPosition" */
var GuildPosition_Constraint;
(function (GuildPosition_Constraint) {
    /** unique or primary key constraint */
    GuildPosition_Constraint["GuildPositionPkey"] = "GuildPosition_pkey";
})(GuildPosition_Constraint = exports.GuildPosition_Constraint || (exports.GuildPosition_Constraint = {}));
var GuildPosition_Enum;
(function (GuildPosition_Enum) {
    GuildPosition_Enum["External"] = "EXTERNAL";
    GuildPosition_Enum["Internal"] = "INTERNAL";
})(GuildPosition_Enum = exports.GuildPosition_Enum || (exports.GuildPosition_Enum = {}));
/** select columns of table "GuildPosition" */
var GuildPosition_Select_Column;
(function (GuildPosition_Select_Column) {
    /** column name */
    GuildPosition_Select_Column["Position"] = "position";
})(GuildPosition_Select_Column = exports.GuildPosition_Select_Column || (exports.GuildPosition_Select_Column = {}));
/** update columns of table "GuildPosition" */
var GuildPosition_Update_Column;
(function (GuildPosition_Update_Column) {
    /** column name */
    GuildPosition_Update_Column["Position"] = "position";
})(GuildPosition_Update_Column = exports.GuildPosition_Update_Column || (exports.GuildPosition_Update_Column = {}));
/** unique or primary key constraints on table "GuildStatus" */
var GuildStatus_Constraint;
(function (GuildStatus_Constraint) {
    /** unique or primary key constraint */
    GuildStatus_Constraint["GuildStatusPkey"] = "GuildStatus_pkey";
})(GuildStatus_Constraint = exports.GuildStatus_Constraint || (exports.GuildStatus_Constraint = {}));
var GuildStatus_Enum;
(function (GuildStatus_Enum) {
    GuildStatus_Enum["Active"] = "ACTIVE";
    GuildStatus_Enum["Inactive"] = "INACTIVE";
    GuildStatus_Enum["Pending"] = "PENDING";
})(GuildStatus_Enum = exports.GuildStatus_Enum || (exports.GuildStatus_Enum = {}));
/** select columns of table "GuildStatus" */
var GuildStatus_Select_Column;
(function (GuildStatus_Select_Column) {
    /** column name */
    GuildStatus_Select_Column["Status"] = "status";
})(GuildStatus_Select_Column = exports.GuildStatus_Select_Column || (exports.GuildStatus_Select_Column = {}));
/** update columns of table "GuildStatus" */
var GuildStatus_Update_Column;
(function (GuildStatus_Update_Column) {
    /** column name */
    GuildStatus_Update_Column["Status"] = "status";
})(GuildStatus_Update_Column = exports.GuildStatus_Update_Column || (exports.GuildStatus_Update_Column = {}));
/** unique or primary key constraints on table "GuildType" */
var GuildType_Constraint;
(function (GuildType_Constraint) {
    /** unique or primary key constraint */
    GuildType_Constraint["GuildTypePkey"] = "GuildType_pkey";
})(GuildType_Constraint = exports.GuildType_Constraint || (exports.GuildType_Constraint = {}));
var GuildType_Enum;
(function (GuildType_Enum) {
    GuildType_Enum["Funding"] = "FUNDING";
    GuildType_Enum["Project"] = "PROJECT";
    GuildType_Enum["Research"] = "RESEARCH";
    GuildType_Enum["Service"] = "SERVICE";
    GuildType_Enum["Social"] = "SOCIAL";
})(GuildType_Enum = exports.GuildType_Enum || (exports.GuildType_Enum = {}));
/** select columns of table "GuildType" */
var GuildType_Select_Column;
(function (GuildType_Select_Column) {
    /** column name */
    GuildType_Select_Column["Name"] = "name";
})(GuildType_Select_Column = exports.GuildType_Select_Column || (exports.GuildType_Select_Column = {}));
/** update columns of table "GuildType" */
var GuildType_Update_Column;
(function (GuildType_Update_Column) {
    /** column name */
    GuildType_Update_Column["Name"] = "name";
})(GuildType_Update_Column = exports.GuildType_Update_Column || (exports.GuildType_Update_Column = {}));
/** select columns of table "me" */
var Me_Select_Column;
(function (Me_Select_Column) {
    /** column name */
    Me_Select_Column["EthereumAddress"] = "ethereum_address";
    /** column name */
    Me_Select_Column["Id"] = "id";
    /** column name */
    Me_Select_Column["Username"] = "username";
})(Me_Select_Column = exports.Me_Select_Column || (exports.Me_Select_Column = {}));
/** column ordering options */
var Order_By;
(function (Order_By) {
    /** in the ascending order, nulls last */
    Order_By["Asc"] = "asc";
    /** in the ascending order, nulls first */
    Order_By["AscNullsFirst"] = "asc_nulls_first";
    /** in the ascending order, nulls last */
    Order_By["AscNullsLast"] = "asc_nulls_last";
    /** in the descending order, nulls first */
    Order_By["Desc"] = "desc";
    /** in the descending order, nulls first */
    Order_By["DescNullsFirst"] = "desc_nulls_first";
    /** in the descending order, nulls last */
    Order_By["DescNullsLast"] = "desc_nulls_last";
})(Order_By = exports.Order_By || (exports.Order_By = {}));
/** unique or primary key constraints on table "player_account" */
var Player_Account_Constraint;
(function (Player_Account_Constraint) {
    /** unique or primary key constraint */
    Player_Account_Constraint["AccountIdentifierTypeKey"] = "Account_identifier_type_key";
})(Player_Account_Constraint = exports.Player_Account_Constraint || (exports.Player_Account_Constraint = {}));
/** select columns of table "player_account" */
var Player_Account_Select_Column;
(function (Player_Account_Select_Column) {
    /** column name */
    Player_Account_Select_Column["Identifier"] = "identifier";
    /** column name */
    Player_Account_Select_Column["PlayerId"] = "player_id";
    /** column name */
    Player_Account_Select_Column["Type"] = "type";
})(Player_Account_Select_Column = exports.Player_Account_Select_Column || (exports.Player_Account_Select_Column = {}));
/** update columns of table "player_account" */
var Player_Account_Update_Column;
(function (Player_Account_Update_Column) {
    /** column name */
    Player_Account_Update_Column["Identifier"] = "identifier";
    /** column name */
    Player_Account_Update_Column["PlayerId"] = "player_id";
    /** column name */
    Player_Account_Update_Column["Type"] = "type";
})(Player_Account_Update_Column = exports.Player_Account_Update_Column || (exports.Player_Account_Update_Column = {}));
/** unique or primary key constraints on table "player" */
var Player_Constraint;
(function (Player_Constraint) {
    /** unique or primary key constraint */
    Player_Constraint["PlayerEthereumAddressUniqueKey"] = "Player_ethereum_address_unique_key";
    /** unique or primary key constraint */
    Player_Constraint["PlayerPkey"] = "Player_pkey";
    /** unique or primary key constraint */
    Player_Constraint["PlayerUsernameUniqueKey"] = "Player_username_unique_key";
    /** unique or primary key constraint */
    Player_Constraint["PlayerDiscordIdKey"] = "player_discord_id_key";
})(Player_Constraint = exports.Player_Constraint || (exports.Player_Constraint = {}));
/** select columns of table "player" */
var Player_Select_Column;
(function (Player_Select_Column) {
    /** column name */
    Player_Select_Column["AvailabilityHours"] = "availability_hours";
    /** column name */
    Player_Select_Column["ColorMask"] = "color_mask";
    /** column name */
    Player_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Player_Select_Column["DiscordId"] = "discord_id";
    /** column name */
    Player_Select_Column["EthereumAddress"] = "ethereum_address";
    /** column name */
    Player_Select_Column["Id"] = "id";
    /** column name */
    Player_Select_Column["PlayerTypeId"] = "player_type_id";
    /** column name */
    Player_Select_Column["Rank"] = "rank";
    /** column name */
    Player_Select_Column["Role"] = "role";
    /** column name */
    Player_Select_Column["SeasonXp"] = "season_xp";
    /** column name */
    Player_Select_Column["Timezone"] = "timezone";
    /** column name */
    Player_Select_Column["TotalXp"] = "total_xp";
    /** column name */
    Player_Select_Column["UpdatedAt"] = "updated_at";
    /** column name */
    Player_Select_Column["Username"] = "username";
})(Player_Select_Column = exports.Player_Select_Column || (exports.Player_Select_Column = {}));
/** unique or primary key constraints on table "player_skill" */
var Player_Skill_Constraint;
(function (Player_Skill_Constraint) {
    /** unique or primary key constraint */
    Player_Skill_Constraint["PlayerSkillUniqueKey"] = "Player_Skill_unique_key";
})(Player_Skill_Constraint = exports.Player_Skill_Constraint || (exports.Player_Skill_Constraint = {}));
/** select columns of table "player_skill" */
var Player_Skill_Select_Column;
(function (Player_Skill_Select_Column) {
    /** column name */
    Player_Skill_Select_Column["PlayerId"] = "player_id";
    /** column name */
    Player_Skill_Select_Column["SkillId"] = "skill_id";
})(Player_Skill_Select_Column = exports.Player_Skill_Select_Column || (exports.Player_Skill_Select_Column = {}));
/** update columns of table "player_skill" */
var Player_Skill_Update_Column;
(function (Player_Skill_Update_Column) {
    /** column name */
    Player_Skill_Update_Column["PlayerId"] = "player_id";
    /** column name */
    Player_Skill_Update_Column["SkillId"] = "skill_id";
})(Player_Skill_Update_Column = exports.Player_Skill_Update_Column || (exports.Player_Skill_Update_Column = {}));
/** unique or primary key constraints on table "player_type" */
var Player_Type_Constraint;
(function (Player_Type_Constraint) {
    /** unique or primary key constraint */
    Player_Type_Constraint["PlayerTypePkey"] = "PlayerType_pkey";
    /** unique or primary key constraint */
    Player_Type_Constraint["PlayerTypeTitleKey"] = "PlayerType_title_key";
})(Player_Type_Constraint = exports.Player_Type_Constraint || (exports.Player_Type_Constraint = {}));
/** select columns of table "player_type" */
var Player_Type_Select_Column;
(function (Player_Type_Select_Column) {
    /** column name */
    Player_Type_Select_Column["Description"] = "description";
    /** column name */
    Player_Type_Select_Column["Id"] = "id";
    /** column name */
    Player_Type_Select_Column["ImageUrl"] = "imageUrl";
    /** column name */
    Player_Type_Select_Column["Title"] = "title";
})(Player_Type_Select_Column = exports.Player_Type_Select_Column || (exports.Player_Type_Select_Column = {}));
/** update columns of table "player_type" */
var Player_Type_Update_Column;
(function (Player_Type_Update_Column) {
    /** column name */
    Player_Type_Update_Column["Description"] = "description";
    /** column name */
    Player_Type_Update_Column["Id"] = "id";
    /** column name */
    Player_Type_Update_Column["ImageUrl"] = "imageUrl";
    /** column name */
    Player_Type_Update_Column["Title"] = "title";
})(Player_Type_Update_Column = exports.Player_Type_Update_Column || (exports.Player_Type_Update_Column = {}));
/** update columns of table "player" */
var Player_Update_Column;
(function (Player_Update_Column) {
    /** column name */
    Player_Update_Column["AvailabilityHours"] = "availability_hours";
    /** column name */
    Player_Update_Column["ColorMask"] = "color_mask";
    /** column name */
    Player_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Player_Update_Column["DiscordId"] = "discord_id";
    /** column name */
    Player_Update_Column["EthereumAddress"] = "ethereum_address";
    /** column name */
    Player_Update_Column["Id"] = "id";
    /** column name */
    Player_Update_Column["PlayerTypeId"] = "player_type_id";
    /** column name */
    Player_Update_Column["Rank"] = "rank";
    /** column name */
    Player_Update_Column["Role"] = "role";
    /** column name */
    Player_Update_Column["SeasonXp"] = "season_xp";
    /** column name */
    Player_Update_Column["Timezone"] = "timezone";
    /** column name */
    Player_Update_Column["TotalXp"] = "total_xp";
    /** column name */
    Player_Update_Column["UpdatedAt"] = "updated_at";
    /** column name */
    Player_Update_Column["Username"] = "username";
})(Player_Update_Column = exports.Player_Update_Column || (exports.Player_Update_Column = {}));
/** unique or primary key constraints on table "PlayerRank" */
var PlayerRank_Constraint;
(function (PlayerRank_Constraint) {
    /** unique or primary key constraint */
    PlayerRank_Constraint["PlayerRankPkey"] = "Player_Rank_pkey";
})(PlayerRank_Constraint = exports.PlayerRank_Constraint || (exports.PlayerRank_Constraint = {}));
var PlayerRank_Enum;
(function (PlayerRank_Enum) {
    PlayerRank_Enum["Bronze"] = "BRONZE";
    PlayerRank_Enum["Diamond"] = "DIAMOND";
    PlayerRank_Enum["Gold"] = "GOLD";
    PlayerRank_Enum["Platinum"] = "PLATINUM";
    PlayerRank_Enum["Silver"] = "SILVER";
})(PlayerRank_Enum = exports.PlayerRank_Enum || (exports.PlayerRank_Enum = {}));
/** select columns of table "PlayerRank" */
var PlayerRank_Select_Column;
(function (PlayerRank_Select_Column) {
    /** column name */
    PlayerRank_Select_Column["Rank"] = "rank";
})(PlayerRank_Select_Column = exports.PlayerRank_Select_Column || (exports.PlayerRank_Select_Column = {}));
/** update columns of table "PlayerRank" */
var PlayerRank_Update_Column;
(function (PlayerRank_Update_Column) {
    /** column name */
    PlayerRank_Update_Column["Rank"] = "rank";
})(PlayerRank_Update_Column = exports.PlayerRank_Update_Column || (exports.PlayerRank_Update_Column = {}));
/** unique or primary key constraints on table "profile_cache" */
var Profile_Cache_Constraint;
(function (Profile_Cache_Constraint) {
    /** unique or primary key constraint */
    Profile_Cache_Constraint["ProfileCachePkey"] = "profile_cache_pkey";
    /** unique or primary key constraint */
    Profile_Cache_Constraint["ProfileCachePlayerIdKey"] = "profile_cache_player_id_key";
})(Profile_Cache_Constraint = exports.Profile_Cache_Constraint || (exports.Profile_Cache_Constraint = {}));
/** select columns of table "profile_cache" */
var Profile_Cache_Select_Column;
(function (Profile_Cache_Select_Column) {
    /** column name */
    Profile_Cache_Select_Column["BackgroundImageUrl"] = "backgroundImageURL";
    /** column name */
    Profile_Cache_Select_Column["Country"] = "country";
    /** column name */
    Profile_Cache_Select_Column["Description"] = "description";
    /** column name */
    Profile_Cache_Select_Column["Emoji"] = "emoji";
    /** column name */
    Profile_Cache_Select_Column["Gender"] = "gender";
    /** column name */
    Profile_Cache_Select_Column["Id"] = "id";
    /** column name */
    Profile_Cache_Select_Column["ImageUrl"] = "imageURL";
    /** column name */
    Profile_Cache_Select_Column["LastCheckedAt"] = "last_checked_at";
    /** column name */
    Profile_Cache_Select_Column["Location"] = "location";
    /** column name */
    Profile_Cache_Select_Column["Name"] = "name";
    /** column name */
    Profile_Cache_Select_Column["PlayerId"] = "playerId";
    /** column name */
    Profile_Cache_Select_Column["Website"] = "website";
})(Profile_Cache_Select_Column = exports.Profile_Cache_Select_Column || (exports.Profile_Cache_Select_Column = {}));
/** update columns of table "profile_cache" */
var Profile_Cache_Update_Column;
(function (Profile_Cache_Update_Column) {
    /** column name */
    Profile_Cache_Update_Column["BackgroundImageUrl"] = "backgroundImageURL";
    /** column name */
    Profile_Cache_Update_Column["Country"] = "country";
    /** column name */
    Profile_Cache_Update_Column["Description"] = "description";
    /** column name */
    Profile_Cache_Update_Column["Emoji"] = "emoji";
    /** column name */
    Profile_Cache_Update_Column["Gender"] = "gender";
    /** column name */
    Profile_Cache_Update_Column["Id"] = "id";
    /** column name */
    Profile_Cache_Update_Column["ImageUrl"] = "imageURL";
    /** column name */
    Profile_Cache_Update_Column["LastCheckedAt"] = "last_checked_at";
    /** column name */
    Profile_Cache_Update_Column["Location"] = "location";
    /** column name */
    Profile_Cache_Update_Column["Name"] = "name";
    /** column name */
    Profile_Cache_Update_Column["PlayerId"] = "playerId";
    /** column name */
    Profile_Cache_Update_Column["Website"] = "website";
})(Profile_Cache_Update_Column = exports.Profile_Cache_Update_Column || (exports.Profile_Cache_Update_Column = {}));
/** unique or primary key constraints on table "quest_completion" */
var Quest_Completion_Constraint;
(function (Quest_Completion_Constraint) {
    /** unique or primary key constraint */
    Quest_Completion_Constraint["QuestCompletionPkey"] = "quest_completion_pkey";
})(Quest_Completion_Constraint = exports.Quest_Completion_Constraint || (exports.Quest_Completion_Constraint = {}));
/** select columns of table "quest_completion" */
var Quest_Completion_Select_Column;
(function (Quest_Completion_Select_Column) {
    /** column name */
    Quest_Completion_Select_Column["CompletedByPlayerId"] = "completed_by_player_id";
    /** column name */
    Quest_Completion_Select_Column["Id"] = "id";
    /** column name */
    Quest_Completion_Select_Column["QuestId"] = "quest_id";
    /** column name */
    Quest_Completion_Select_Column["Status"] = "status";
    /** column name */
    Quest_Completion_Select_Column["SubmissionLink"] = "submission_link";
    /** column name */
    Quest_Completion_Select_Column["SubmissionText"] = "submission_text";
    /** column name */
    Quest_Completion_Select_Column["SubmittedAt"] = "submitted_at";
})(Quest_Completion_Select_Column = exports.Quest_Completion_Select_Column || (exports.Quest_Completion_Select_Column = {}));
/** update columns of table "quest_completion" */
var Quest_Completion_Update_Column;
(function (Quest_Completion_Update_Column) {
    /** column name */
    Quest_Completion_Update_Column["CompletedByPlayerId"] = "completed_by_player_id";
    /** column name */
    Quest_Completion_Update_Column["Id"] = "id";
    /** column name */
    Quest_Completion_Update_Column["QuestId"] = "quest_id";
    /** column name */
    Quest_Completion_Update_Column["Status"] = "status";
    /** column name */
    Quest_Completion_Update_Column["SubmissionLink"] = "submission_link";
    /** column name */
    Quest_Completion_Update_Column["SubmissionText"] = "submission_text";
    /** column name */
    Quest_Completion_Update_Column["SubmittedAt"] = "submitted_at";
})(Quest_Completion_Update_Column = exports.Quest_Completion_Update_Column || (exports.Quest_Completion_Update_Column = {}));
/** unique or primary key constraints on table "quest" */
var Quest_Constraint;
(function (Quest_Constraint) {
    /** unique or primary key constraint */
    Quest_Constraint["QuestPkey"] = "quest_pkey";
})(Quest_Constraint = exports.Quest_Constraint || (exports.Quest_Constraint = {}));
/** select columns of table "quest" */
var Quest_Select_Column;
(function (Quest_Select_Column) {
    /** column name */
    Quest_Select_Column["Cooldown"] = "cooldown";
    /** column name */
    Quest_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Quest_Select_Column["CreatedByPlayerId"] = "created_by_player_id";
    /** column name */
    Quest_Select_Column["Description"] = "description";
    /** column name */
    Quest_Select_Column["ExternalLink"] = "external_link";
    /** column name */
    Quest_Select_Column["GuildId"] = "guild_id";
    /** column name */
    Quest_Select_Column["Id"] = "id";
    /** column name */
    Quest_Select_Column["Repetition"] = "repetition";
    /** column name */
    Quest_Select_Column["Status"] = "status";
    /** column name */
    Quest_Select_Column["Title"] = "title";
})(Quest_Select_Column = exports.Quest_Select_Column || (exports.Quest_Select_Column = {}));
/** unique or primary key constraints on table "quest_skill" */
var Quest_Skill_Constraint;
(function (Quest_Skill_Constraint) {
    /** unique or primary key constraint */
    Quest_Skill_Constraint["QuestSkillPkey"] = "quest_skill_pkey";
})(Quest_Skill_Constraint = exports.Quest_Skill_Constraint || (exports.Quest_Skill_Constraint = {}));
/** select columns of table "quest_skill" */
var Quest_Skill_Select_Column;
(function (Quest_Skill_Select_Column) {
    /** column name */
    Quest_Skill_Select_Column["QuestId"] = "quest_id";
    /** column name */
    Quest_Skill_Select_Column["SkillId"] = "skill_id";
})(Quest_Skill_Select_Column = exports.Quest_Skill_Select_Column || (exports.Quest_Skill_Select_Column = {}));
/** update columns of table "quest_skill" */
var Quest_Skill_Update_Column;
(function (Quest_Skill_Update_Column) {
    /** column name */
    Quest_Skill_Update_Column["QuestId"] = "quest_id";
    /** column name */
    Quest_Skill_Update_Column["SkillId"] = "skill_id";
})(Quest_Skill_Update_Column = exports.Quest_Skill_Update_Column || (exports.Quest_Skill_Update_Column = {}));
/** update columns of table "quest" */
var Quest_Update_Column;
(function (Quest_Update_Column) {
    /** column name */
    Quest_Update_Column["Cooldown"] = "cooldown";
    /** column name */
    Quest_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Quest_Update_Column["CreatedByPlayerId"] = "created_by_player_id";
    /** column name */
    Quest_Update_Column["Description"] = "description";
    /** column name */
    Quest_Update_Column["ExternalLink"] = "external_link";
    /** column name */
    Quest_Update_Column["GuildId"] = "guild_id";
    /** column name */
    Quest_Update_Column["Id"] = "id";
    /** column name */
    Quest_Update_Column["Repetition"] = "repetition";
    /** column name */
    Quest_Update_Column["Status"] = "status";
    /** column name */
    Quest_Update_Column["Title"] = "title";
})(Quest_Update_Column = exports.Quest_Update_Column || (exports.Quest_Update_Column = {}));
var QuestCompletionStatus_ActionEnum;
(function (QuestCompletionStatus_ActionEnum) {
    QuestCompletionStatus_ActionEnum["Accepted"] = "ACCEPTED";
    QuestCompletionStatus_ActionEnum["Rejected"] = "REJECTED";
})(QuestCompletionStatus_ActionEnum = exports.QuestCompletionStatus_ActionEnum || (exports.QuestCompletionStatus_ActionEnum = {}));
/** unique or primary key constraints on table "QuestCompletionStatus" */
var QuestCompletionStatus_Constraint;
(function (QuestCompletionStatus_Constraint) {
    /** unique or primary key constraint */
    QuestCompletionStatus_Constraint["QuestCompletionStatusPkey"] = "QuestCompletionStatus_pkey";
})(QuestCompletionStatus_Constraint = exports.QuestCompletionStatus_Constraint || (exports.QuestCompletionStatus_Constraint = {}));
var QuestCompletionStatus_Enum;
(function (QuestCompletionStatus_Enum) {
    QuestCompletionStatus_Enum["Accepted"] = "ACCEPTED";
    QuestCompletionStatus_Enum["Pending"] = "PENDING";
    QuestCompletionStatus_Enum["Rejected"] = "REJECTED";
})(QuestCompletionStatus_Enum = exports.QuestCompletionStatus_Enum || (exports.QuestCompletionStatus_Enum = {}));
/** select columns of table "QuestCompletionStatus" */
var QuestCompletionStatus_Select_Column;
(function (QuestCompletionStatus_Select_Column) {
    /** column name */
    QuestCompletionStatus_Select_Column["Status"] = "status";
})(QuestCompletionStatus_Select_Column = exports.QuestCompletionStatus_Select_Column || (exports.QuestCompletionStatus_Select_Column = {}));
/** update columns of table "QuestCompletionStatus" */
var QuestCompletionStatus_Update_Column;
(function (QuestCompletionStatus_Update_Column) {
    /** column name */
    QuestCompletionStatus_Update_Column["Status"] = "status";
})(QuestCompletionStatus_Update_Column = exports.QuestCompletionStatus_Update_Column || (exports.QuestCompletionStatus_Update_Column = {}));
var QuestRepetition_ActionEnum;
(function (QuestRepetition_ActionEnum) {
    QuestRepetition_ActionEnum["Personal"] = "PERSONAL";
    QuestRepetition_ActionEnum["Recurring"] = "RECURRING";
    QuestRepetition_ActionEnum["Unique"] = "UNIQUE";
})(QuestRepetition_ActionEnum = exports.QuestRepetition_ActionEnum || (exports.QuestRepetition_ActionEnum = {}));
/** unique or primary key constraints on table "QuestRepetition" */
var QuestRepetition_Constraint;
(function (QuestRepetition_Constraint) {
    /** unique or primary key constraint */
    QuestRepetition_Constraint["QuestRepetitionPkey"] = "QuestRepetition_pkey";
})(QuestRepetition_Constraint = exports.QuestRepetition_Constraint || (exports.QuestRepetition_Constraint = {}));
var QuestRepetition_Enum;
(function (QuestRepetition_Enum) {
    QuestRepetition_Enum["Personal"] = "PERSONAL";
    QuestRepetition_Enum["Recurring"] = "RECURRING";
    QuestRepetition_Enum["Unique"] = "UNIQUE";
})(QuestRepetition_Enum = exports.QuestRepetition_Enum || (exports.QuestRepetition_Enum = {}));
/** select columns of table "QuestRepetition" */
var QuestRepetition_Select_Column;
(function (QuestRepetition_Select_Column) {
    /** column name */
    QuestRepetition_Select_Column["Repetition"] = "repetition";
})(QuestRepetition_Select_Column = exports.QuestRepetition_Select_Column || (exports.QuestRepetition_Select_Column = {}));
/** update columns of table "QuestRepetition" */
var QuestRepetition_Update_Column;
(function (QuestRepetition_Update_Column) {
    /** column name */
    QuestRepetition_Update_Column["Repetition"] = "repetition";
})(QuestRepetition_Update_Column = exports.QuestRepetition_Update_Column || (exports.QuestRepetition_Update_Column = {}));
/** unique or primary key constraints on table "QuestStatus" */
var QuestStatus_Constraint;
(function (QuestStatus_Constraint) {
    /** unique or primary key constraint */
    QuestStatus_Constraint["QuestStatusPkey"] = "QuestStatus_pkey";
})(QuestStatus_Constraint = exports.QuestStatus_Constraint || (exports.QuestStatus_Constraint = {}));
var QuestStatus_Enum;
(function (QuestStatus_Enum) {
    QuestStatus_Enum["Closed"] = "CLOSED";
    QuestStatus_Enum["Open"] = "OPEN";
})(QuestStatus_Enum = exports.QuestStatus_Enum || (exports.QuestStatus_Enum = {}));
/** select columns of table "QuestStatus" */
var QuestStatus_Select_Column;
(function (QuestStatus_Select_Column) {
    /** column name */
    QuestStatus_Select_Column["Status"] = "status";
})(QuestStatus_Select_Column = exports.QuestStatus_Select_Column || (exports.QuestStatus_Select_Column = {}));
/** update columns of table "QuestStatus" */
var QuestStatus_Update_Column;
(function (QuestStatus_Update_Column) {
    /** column name */
    QuestStatus_Update_Column["Status"] = "status";
})(QuestStatus_Update_Column = exports.QuestStatus_Update_Column || (exports.QuestStatus_Update_Column = {}));
/** unique or primary key constraints on table "skill" */
var Skill_Constraint;
(function (Skill_Constraint) {
    /** unique or primary key constraint */
    Skill_Constraint["SkillPkey"] = "Skill_pkey";
})(Skill_Constraint = exports.Skill_Constraint || (exports.Skill_Constraint = {}));
/** select columns of table "skill" */
var Skill_Select_Column;
(function (Skill_Select_Column) {
    /** column name */
    Skill_Select_Column["Category"] = "category";
    /** column name */
    Skill_Select_Column["Id"] = "id";
    /** column name */
    Skill_Select_Column["Name"] = "name";
})(Skill_Select_Column = exports.Skill_Select_Column || (exports.Skill_Select_Column = {}));
/** update columns of table "skill" */
var Skill_Update_Column;
(function (Skill_Update_Column) {
    /** column name */
    Skill_Update_Column["Category"] = "category";
    /** column name */
    Skill_Update_Column["Id"] = "id";
    /** column name */
    Skill_Update_Column["Name"] = "name";
})(Skill_Update_Column = exports.Skill_Update_Column || (exports.Skill_Update_Column = {}));
/** unique or primary key constraints on table "SkillCategory" */
var SkillCategory_Constraint;
(function (SkillCategory_Constraint) {
    /** unique or primary key constraint */
    SkillCategory_Constraint["SkillCategoryPkey"] = "SkillCategory_pkey";
})(SkillCategory_Constraint = exports.SkillCategory_Constraint || (exports.SkillCategory_Constraint = {}));
var SkillCategory_Enum;
(function (SkillCategory_Enum) {
    SkillCategory_Enum["Community"] = "COMMUNITY";
    SkillCategory_Enum["Design"] = "DESIGN";
    SkillCategory_Enum["Dev"] = "DEV";
    SkillCategory_Enum["Engineering"] = "ENGINEERING";
    SkillCategory_Enum["Strategy"] = "STRATEGY";
    SkillCategory_Enum["Technologies"] = "TECHNOLOGIES";
})(SkillCategory_Enum = exports.SkillCategory_Enum || (exports.SkillCategory_Enum = {}));
/** select columns of table "SkillCategory" */
var SkillCategory_Select_Column;
(function (SkillCategory_Select_Column) {
    /** column name */
    SkillCategory_Select_Column["Name"] = "name";
})(SkillCategory_Select_Column = exports.SkillCategory_Select_Column || (exports.SkillCategory_Select_Column = {}));
/** update columns of table "SkillCategory" */
var SkillCategory_Update_Column;
(function (SkillCategory_Update_Column) {
    /** column name */
    SkillCategory_Update_Column["Name"] = "name";
})(SkillCategory_Update_Column = exports.SkillCategory_Update_Column || (exports.SkillCategory_Update_Column = {}));
exports.GuildFragmentFragmentDoc = graphql_tag_1.default `
    fragment GuildFragment on guild {
  id
  guildname
  description
  join_button_url
  logo
  moloch_address
  name
  type
  website_url
  discord_id
  discord_metadata
}
    `;
exports.CreatePlayerFromEthDocument = graphql_tag_1.default `
    mutation CreatePlayerFromETH($ethereum_address: String!, $username: String!) {
  insert_player(
    objects: {username: $username, ethereum_address: $ethereum_address}
  ) {
    affected_rows
    returning {
      id
      username
      ethereum_address
    }
  }
}
    `;
exports.UpsertAccountDocument = graphql_tag_1.default `
    mutation UpsertAccount($objects: [player_account_insert_input!]!, $on_conflict: player_account_on_conflict = {constraint: Account_identifier_type_key, update_columns: []}) {
  insert_player_account(objects: $objects, on_conflict: $on_conflict) {
    affected_rows
  }
}
    `;
exports.UpsertProfileCacheDocument = graphql_tag_1.default `
    mutation UpsertProfileCache($objects: [profile_cache_insert_input!]!, $onConflict: profile_cache_on_conflict = {constraint: profile_cache_player_id_key, update_columns: [name, description, emoji, imageURL, backgroundImageURL, gender, location, country, website]}) {
  insert_profile_cache(on_conflict: $onConflict, objects: $objects) {
    affected_rows
  }
}
    `;
exports.UpdatePlayerDocument = graphql_tag_1.default `
    mutation UpdatePlayer($ethAddress: String, $rank: PlayerRank_enum, $totalXp: numeric, $seasonXp: numeric, $discordId: String) {
  update_player(
    where: {ethereum_address: {_eq: $ethAddress}}
    _set: {ethereum_address: $ethAddress, rank: $rank, total_xp: $totalXp, season_xp: $seasonXp, discord_id: $discordId}
  ) {
    affected_rows
    returning {
      id
      ethereum_address
      username
    }
  }
}
    `;
exports.InsertPlayersDocument = graphql_tag_1.default `
    mutation InsertPlayers($objects: [player_insert_input!]!) {
  insert_player(objects: $objects) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
exports.CreateQuestDocument = graphql_tag_1.default `
    mutation CreateQuest($objects: [quest_insert_input!]!) {
  insert_quest(objects: $objects) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
exports.CreateQuestCompletionDocument = graphql_tag_1.default `
    mutation CreateQuestCompletion($objects: [quest_completion_insert_input!]!) {
  insert_quest_completion(objects: $objects) {
    affected_rows
    returning {
      id
      quest_id
      completed_by_player_id
    }
  }
}
    `;
exports.UpdateQuestStatusDocument = graphql_tag_1.default `
    mutation UpdateQuestStatus($quest_id: uuid!, $status: QuestStatus_enum!) {
  update_quest_by_pk(pk_columns: {id: $quest_id}, _set: {status: $status}) {
    id
  }
}
    `;
exports.UpdateQuestCompletionStatusDocument = graphql_tag_1.default `
    mutation UpdateQuestCompletionStatus($quest_completion_id: uuid!, $status: QuestCompletionStatus_enum!) {
  update_quest_completion_by_pk(
    pk_columns: {id: $quest_completion_id}
    _set: {status: $status}
  ) {
    id
  }
}
    `;
exports.RejectOtherQuestCompletionsDocument = graphql_tag_1.default `
    mutation RejectOtherQuestCompletions($accepted_quest_completion_id: uuid!, $quest_id: uuid!) {
  update_quest_completion(
    where: {_and: [{id: {_neq: $accepted_quest_completion_id}}, {quest_id: {_eq: $quest_id}}]}
    _set: {status: REJECTED}
  ) {
    affected_rows
  }
}
    `;
exports.CreateGuildDocument = graphql_tag_1.default `
    mutation CreateGuild($objects: [guild_insert_input!]!) {
  insert_guild(objects: $objects) {
    affected_rows
    returning {
      guildname
      id
    }
  }
}
    `;
exports.UpdateGuildDiscordMetadataDocument = graphql_tag_1.default `
    mutation UpdateGuildDiscordMetadata($guildId: uuid!, $discordMetadata: jsonb) {
  update_guild_by_pk(
    pk_columns: {id: $guildId}
    _set: {discord_metadata: $discordMetadata}
  ) {
    id
  }
}
    `;
exports.GetPlayerDocument = graphql_tag_1.default `
    query GetPlayer($playerId: uuid!) {
  player_by_pk(id: $playerId) {
    id
    ethereum_address
    discord_id
    Accounts {
      identifier
      type
    }
  }
}
    `;
exports.GetPlayerFromEthDocument = graphql_tag_1.default `
    query GetPlayerFromETH($ethereum_address: String) {
  player(where: {ethereum_address: {_eq: $ethereum_address}}) {
    id
  }
}
    `;
exports.GetQuestByIdDocument = graphql_tag_1.default `
    query GetQuestById($quest_id: uuid!) {
  quest_by_pk(id: $quest_id) {
    id
    cooldown
    status
    repetition
    created_by_player_id
  }
}
    `;
exports.GetQuestCompletionsDocument = graphql_tag_1.default `
    query GetQuestCompletions($quest_id: uuid!, $player_id: uuid!) {
  quest_completion(
    where: {quest_id: {_eq: $quest_id}, completed_by_player_id: {_eq: $player_id}}
  ) {
    id
    quest_id
    completed_by_player_id
  }
}
    `;
exports.GetQuestCompletionByIdDocument = graphql_tag_1.default `
    query GetQuestCompletionById($quest_completion_id: uuid!) {
  quest_completion_by_pk(id: $quest_completion_id) {
    id
    quest_id
    completed_by_player_id
    status
  }
}
    `;
exports.GetLastQuestCompletionForPlayerDocument = graphql_tag_1.default `
    query GetLastQuestCompletionForPlayer($quest_id: uuid!, $player_id: uuid!) {
  quest_completion(
    limit: 1
    order_by: {submitted_at: desc}
    where: {quest_id: {_eq: $quest_id}, completed_by_player_id: {_eq: $player_id}}
  ) {
    id
    quest_id
    completed_by_player_id
    submitted_at
  }
}
    `;
exports.GetGuildDocument = graphql_tag_1.default `
    query GetGuild($guildname: String!) {
  guild(where: {guildname: {_eq: $guildname}}) {
    ...GuildFragment
  }
}
    ${exports.GuildFragmentFragmentDoc}`;
exports.GetDiscordGuildDocument = graphql_tag_1.default `
    query GetDiscordGuild($discordId: String!) {
  guild(where: {discord_id: {_eq: $discordId}}) {
    ...GuildFragment
  }
}
    ${exports.GuildFragmentFragmentDoc}`;
exports.GetCacheEntriesDocument = graphql_tag_1.default `
    query GetCacheEntries($updatedBefore: timestamptz!) {
  profile_cache(
    where: {_or: [{last_checked_at: {_lt: $updatedBefore}}, {last_checked_at: {_is_null: true}}]}
  ) {
    playerId
  }
}
    `;
const defaultWrapper = (action, _operationName) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        CreatePlayerFromETH(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreatePlayerFromEthDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'CreatePlayerFromETH');
        },
        UpsertAccount(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpsertAccountDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'UpsertAccount');
        },
        UpsertProfileCache(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpsertProfileCacheDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'UpsertProfileCache');
        },
        UpdatePlayer(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdatePlayerDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'UpdatePlayer');
        },
        InsertPlayers(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.InsertPlayersDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'InsertPlayers');
        },
        CreateQuest(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateQuestDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'CreateQuest');
        },
        CreateQuestCompletion(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateQuestCompletionDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'CreateQuestCompletion');
        },
        UpdateQuestStatus(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateQuestStatusDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'UpdateQuestStatus');
        },
        UpdateQuestCompletionStatus(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateQuestCompletionStatusDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'UpdateQuestCompletionStatus');
        },
        RejectOtherQuestCompletions(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.RejectOtherQuestCompletionsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'RejectOtherQuestCompletions');
        },
        CreateGuild(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateGuildDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'CreateGuild');
        },
        UpdateGuildDiscordMetadata(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateGuildDiscordMetadataDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'UpdateGuildDiscordMetadata');
        },
        GetPlayer(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetPlayerDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetPlayer');
        },
        GetPlayerFromETH(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetPlayerFromEthDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetPlayerFromETH');
        },
        GetQuestById(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetQuestByIdDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetQuestById');
        },
        GetQuestCompletions(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetQuestCompletionsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetQuestCompletions');
        },
        GetQuestCompletionById(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetQuestCompletionByIdDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetQuestCompletionById');
        },
        GetLastQuestCompletionForPlayer(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetLastQuestCompletionForPlayerDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetLastQuestCompletionForPlayer');
        },
        GetGuild(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetGuildDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetGuild');
        },
        GetDiscordGuild(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetDiscordGuildDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetDiscordGuild');
        },
        GetCacheEntries(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetCacheEntriesDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'GetCacheEntries');
        }
    };
}
exports.getSdk = getSdk;
//# sourceMappingURL=hasura-sdk.js.map