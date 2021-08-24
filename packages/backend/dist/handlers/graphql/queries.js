"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCacheEntries = exports.GetDiscordGuild = exports.GetGuild = exports.GuildFragment = exports.GetLastQuestCompletionForPlayer = exports.GetQuestCompletionById = exports.GetQuestCompletions = exports.GetQuestById = exports.GetPlayerFromEth = exports.GetPlayer = void 0;
const dist_1 = require("graphql-request/dist");
exports.GetPlayer = dist_1.gql `
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
exports.GetPlayerFromEth = dist_1.gql `
  query GetPlayerFromETH($ethereum_address: String) {
    player(where: { ethereum_address: { _eq: $ethereum_address } }) {
      id
    }
  }
`;
exports.GetQuestById = dist_1.gql `
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
exports.GetQuestCompletions = dist_1.gql `
  query GetQuestCompletions($quest_id: uuid!, $player_id: uuid!) {
    quest_completion(
      where: {
        quest_id: { _eq: $quest_id }
        completed_by_player_id: { _eq: $player_id }
      }
    ) {
      id
      quest_id
      completed_by_player_id
    }
  }
`;
exports.GetQuestCompletionById = dist_1.gql `
  query GetQuestCompletionById($quest_completion_id: uuid!) {
    quest_completion_by_pk(id: $quest_completion_id) {
      id
      quest_id
      completed_by_player_id
      status
    }
  }
`;
exports.GetLastQuestCompletionForPlayer = dist_1.gql `
  query GetLastQuestCompletionForPlayer($quest_id: uuid!, $player_id: uuid!) {
    quest_completion(
      limit: 1
      order_by: { submitted_at: desc }
      where: {
        quest_id: { _eq: $quest_id }
        completed_by_player_id: { _eq: $player_id }
      }
    ) {
      id
      quest_id
      completed_by_player_id
      submitted_at
    }
  }
`;
exports.GuildFragment = dist_1.gql `
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
exports.GetGuild = dist_1.gql `
  query GetGuild($guildname: String!) {
    guild(where: { guildname: { _eq: $guildname } }) {
      ...GuildFragment
    }
  }
  ${exports.GuildFragment}
`;
exports.GetDiscordGuild = dist_1.gql `
  query GetDiscordGuild($discordId: String!) {
    guild(where: { discord_id: { _eq: $discordId } }) {
      ...GuildFragment
    }
  }
  ${exports.GuildFragment}
`;
exports.GetCacheEntries = dist_1.gql `
  query GetCacheEntries($updatedBefore: timestamptz!) {
    profile_cache(
      where: {
        _or: [
          { last_checked_at: { _lt: $updatedBefore } }
          { last_checked_at: { _is_null: true } }
        ]
      }
    ) {
      playerId
    }
  }
`;
//# sourceMappingURL=queries.js.map