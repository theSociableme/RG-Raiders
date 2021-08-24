import { Sdk } from './autogen/hasura-sdk';
interface GetClientParams {
    role?: string;
    userId?: string;
    backendOnly?: boolean;
}
export declare const getClient: (params?: GetClientParams) => Sdk;
export declare const client: {
    CreatePlayerFromETH(variables: import("./autogen/hasura-sdk").Exact<{
        ethereum_address: string;
        username: string;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").CreatePlayerFromEthMutation>;
    UpsertAccount(variables: import("./autogen/hasura-sdk").Exact<{
        objects: import("./autogen/hasura-sdk").Player_Account_Insert_Input | readonly import("./autogen/hasura-sdk").Player_Account_Insert_Input[];
        on_conflict?: import("./autogen/hasura-sdk").Maybe<import("./autogen/hasura-sdk").Player_Account_On_Conflict> | undefined;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").UpsertAccountMutation>;
    UpsertProfileCache(variables: import("./autogen/hasura-sdk").Exact<{
        objects: import("./autogen/hasura-sdk").Profile_Cache_Insert_Input | readonly import("./autogen/hasura-sdk").Profile_Cache_Insert_Input[];
        onConflict?: import("./autogen/hasura-sdk").Maybe<import("./autogen/hasura-sdk").Profile_Cache_On_Conflict> | undefined;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").UpsertProfileCacheMutation>;
    UpdatePlayer(variables?: import("./autogen/hasura-sdk").Exact<{
        ethAddress?: import("./autogen/hasura-sdk").Maybe<string> | undefined;
        rank?: import("./autogen/hasura-sdk").Maybe<import("./autogen/hasura-sdk").PlayerRank_Enum> | undefined;
        totalXp?: any;
        seasonXp?: any;
        discordId?: import("./autogen/hasura-sdk").Maybe<string> | undefined;
    }> | undefined, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").UpdatePlayerMutation>;
    InsertPlayers(variables: import("./autogen/hasura-sdk").Exact<{
        objects: import("./autogen/hasura-sdk").Player_Insert_Input | readonly import("./autogen/hasura-sdk").Player_Insert_Input[];
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").InsertPlayersMutation>;
    CreateQuest(variables: import("./autogen/hasura-sdk").Exact<{
        objects: import("./autogen/hasura-sdk").Quest_Insert_Input | readonly import("./autogen/hasura-sdk").Quest_Insert_Input[];
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").CreateQuestMutation>;
    CreateQuestCompletion(variables: import("./autogen/hasura-sdk").Exact<{
        objects: import("./autogen/hasura-sdk").Quest_Completion_Insert_Input | readonly import("./autogen/hasura-sdk").Quest_Completion_Insert_Input[];
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").CreateQuestCompletionMutation>;
    UpdateQuestStatus(variables: import("./autogen/hasura-sdk").Exact<{
        quest_id: any;
        status: import("./autogen/hasura-sdk").QuestStatus_Enum;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").UpdateQuestStatusMutation>;
    UpdateQuestCompletionStatus(variables: import("./autogen/hasura-sdk").Exact<{
        quest_completion_id: any;
        status: import("./autogen/hasura-sdk").QuestCompletionStatus_Enum;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").UpdateQuestCompletionStatusMutation>;
    RejectOtherQuestCompletions(variables: import("./autogen/hasura-sdk").Exact<{
        accepted_quest_completion_id: any;
        quest_id: any;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").RejectOtherQuestCompletionsMutation>;
    CreateGuild(variables: import("./autogen/hasura-sdk").Exact<{
        objects: import("./autogen/hasura-sdk").Guild_Insert_Input | readonly import("./autogen/hasura-sdk").Guild_Insert_Input[];
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").CreateGuildMutation>;
    UpdateGuildDiscordMetadata(variables: import("./autogen/hasura-sdk").Exact<{
        guildId: any;
        discordMetadata?: any;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").UpdateGuildDiscordMetadataMutation>;
    GetPlayer(variables: import("./autogen/hasura-sdk").Exact<{
        playerId: any;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").GetPlayerQuery>;
    GetPlayerFromETH(variables?: import("./autogen/hasura-sdk").Exact<{
        ethereum_address?: import("./autogen/hasura-sdk").Maybe<string> | undefined;
    }> | undefined, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").GetPlayerFromEthQuery>;
    GetQuestById(variables: import("./autogen/hasura-sdk").Exact<{
        quest_id: any;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").GetQuestByIdQuery>;
    GetQuestCompletions(variables: import("./autogen/hasura-sdk").Exact<{
        quest_id: any;
        player_id: any;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").GetQuestCompletionsQuery>;
    GetQuestCompletionById(variables: import("./autogen/hasura-sdk").Exact<{
        quest_completion_id: any;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").GetQuestCompletionByIdQuery>;
    GetLastQuestCompletionForPlayer(variables: import("./autogen/hasura-sdk").Exact<{
        quest_id: any;
        player_id: any;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").GetLastQuestCompletionForPlayerQuery>;
    GetGuild(variables: import("./autogen/hasura-sdk").Exact<{
        guildname: string;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").GetGuildQuery>;
    GetDiscordGuild(variables: import("./autogen/hasura-sdk").Exact<{
        discordId: string;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").GetDiscordGuildQuery>;
    GetCacheEntries(variables: import("./autogen/hasura-sdk").Exact<{
        updatedBefore: any;
    }>, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./autogen/hasura-sdk").GetCacheEntriesQuery>;
};
export {};
//# sourceMappingURL=hasuraClient.d.ts.map