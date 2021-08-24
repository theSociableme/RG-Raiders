import { Snowflake } from 'discord.js';
export interface DiscordAccessTokenResponse {
    statusCode: number;
    error?: string;
    oauthResponse?: OAuth2CodeExchangeResponse;
}
export interface OAuth2CodeExchangeResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    guild: PartialGuild;
}
export interface PartialGuild {
    id: Snowflake;
    name: string;
    icon: string | null | undefined;
    owner_id: Snowflake;
    features: string[];
    roles: PartialRole[];
}
export interface PartialRole {
    id: Snowflake;
    name: string;
}
export interface GuildDiscordMetadata {
    inviteUrl?: string;
    rankRoleIds?: {
        [roleName: string]: Snowflake;
    };
    refreshToken?: string;
    allRoleIds?: Snowflake[];
    logoHash?: string;
}
//# sourceMappingURL=types.d.ts.map