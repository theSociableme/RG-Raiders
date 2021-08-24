import { ErrorRequestHandler, NextFunction, Request, RequestHandler, Response } from 'express';
declare type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;
declare type AsyncErrorRequestHandler = (error: Error, req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const asyncHandlerWrapper: (middleware: AsyncRequestHandler | AsyncErrorRequestHandler) => RequestHandler | ErrorRequestHandler;
export declare const errorMiddleware: ErrorRequestHandler;
export {};
//# sourceMappingURL=apiHelpers.d.ts.map