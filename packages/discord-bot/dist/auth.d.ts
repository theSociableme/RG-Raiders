import { DiscordAccessTokenResponse } from './types';
export declare const tokenRequestData: {
    client_id: string;
    client_secret: string;
    grant_type: string;
    redirect_uri: string;
    scope: string;
};
export declare const exchangeCodeForAccessToken: (code: string) => Promise<DiscordAccessTokenResponse>;
//# sourceMappingURL=auth.d.ts.map