import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { Player } from '../../lib/autogen/hasura-sdk';
import { TriggerPayload } from './types';
export declare const triggerHandler: (req: Request<ParamsDictionary, never, TriggerPayload<Player>>, res: Response) => Promise<void>;
//# sourceMappingURL=handler.d.ts.map