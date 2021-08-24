import { Player } from '../../lib/autogen/hasura-sdk';
import { TriggerPayload } from './types';
export interface UpdateRole {
    playerId: string;
    previousRole: string | undefined;
    newRole: string;
}
export declare const updateDiscordRole: (payload: TriggerPayload<Player>) => Promise<void>;
//# sourceMappingURL=updateDiscordRole.d.ts.map