"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGuildDiscordMetadata = exports.CreateGuild = exports.RejectOtherQuestCompletions = exports.UpdateQuestCompletionStatus = exports.UpdateQuestStatus = exports.CreateQuestCompletion = exports.CreateQuest = exports.InsertPlayers = exports.UpdatePlayer = exports.UpsertProfileCache = exports.UpsertAccount = exports.CreatePlayerFromETH = void 0;
const dist_1 = require("graphql-request/dist");
exports.CreatePlayerFromETH = dist_1.gql `
  mutation CreatePlayerFromETH($ethereum_address: String!, $username: String!) {
    insert_player(
      objects: { username: $username, ethereum_address: $ethereum_address }
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
exports.UpsertAccount = dist_1.gql `
  mutation UpsertAccount(
    $objects: [player_account_insert_input!]!
    $on_conflict: player_account_on_conflict = {
      constraint: Account_identifier_type_key
      update_columns: []
    }
  ) {
    insert_player_account(objects: $objects, on_conflict: $on_conflict) {
      affected_rows
    }
  }
`;
exports.UpsertProfileCache = dist_1.gql `
  mutation UpsertProfileCache(
    $objects: [profile_cache_insert_input!]!
    $onConflict: profile_cache_on_conflict = {
      constraint: profile_cache_player_id_key
      update_columns: [
        name
        description
        emoji
        imageURL
        backgroundImageURL
        gender
        location
        country
        website
      ]
    }
  ) {
    insert_profile_cache(on_conflict: $onConflict, objects: $objects) {
      affected_rows
    }
  }
`;
exports.UpdatePlayer = dist_1.gql `
  mutation UpdatePlayer(
    $ethAddress: String
    $rank: PlayerRank_enum
    $totalXp: numeric
    $seasonXp: numeric
    $discordId: String
  ) {
    update_player(
      where: { ethereum_address: { _eq: $ethAddress } }
      _set: {
        ethereum_address: $ethAddress
        rank: $rank
        total_xp: $totalXp
        season_xp: $seasonXp
        discord_id: $discordId
      }
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
exports.InsertPlayers = dist_1.gql `
  mutation InsertPlayers($objects: [player_insert_input!]!) {
    insert_player(objects: $objects) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
exports.CreateQuest = dist_1.gql `
  mutation CreateQuest($objects: [quest_insert_input!]!) {
    insert_quest(objects: $objects) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
exports.CreateQuestCompletion = dist_1.gql `
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
exports.UpdateQuestStatus = dist_1.gql `
  mutation UpdateQuestStatus($quest_id: uuid!, $status: QuestStatus_enum!) {
    update_quest_by_pk(
      pk_columns: { id: $quest_id }
      _set: { status: $status }
    ) {
      id
    }
  }
`;
exports.UpdateQuestCompletionStatus = dist_1.gql `
  mutation UpdateQuestCompletionStatus(
    $quest_completion_id: uuid!
    $status: QuestCompletionStatus_enum!
  ) {
    update_quest_completion_by_pk(
      pk_columns: { id: $quest_completion_id }
      _set: { status: $status }
    ) {
      id
    }
  }
`;
exports.RejectOtherQuestCompletions = dist_1.gql `
  mutation RejectOtherQuestCompletions(
    $accepted_quest_completion_id: uuid!
    $quest_id: uuid!
  ) {
    update_quest_completion(
      where: {
        _and: [
          { id: { _neq: $accepted_quest_completion_id } }
          { quest_id: { _eq: $quest_id } }
        ]
      }
      _set: { status: REJECTED }
    ) {
      affected_rows
    }
  }
`;
exports.CreateGuild = dist_1.gql `
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
exports.UpdateGuildDiscordMetadata = dist_1.gql `
  mutation UpdateGuildDiscordMetadata(
    $guildId: uuid!
    $discordMetadata: jsonb
  ) {
    update_guild_by_pk(
      pk_columns: { id: $guildId }
      _set: { discord_metadata: $discordMetadata }
    ) {
      id
    }
  }
`;
//# sourceMappingURL=mutations.js.map