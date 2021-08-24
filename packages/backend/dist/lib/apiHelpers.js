"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = exports.asyncHandlerWrapper = void 0;
const asyncHandlerWrapper = (middleware) => {
    if (middleware.length === 4) {
        return function wrappedHandler(error, req, res, next) {
            middleware(error, req, res, next).catch(next);
        };
    }
    return function wrappedHandler(req, res, next) {
        middleware(req, res, next).catch(next);
    };
};
exports.asyncHandlerWrapper = asyncHandlerWrapper;
const errorMiddleware = (error, _req, res) => {
    console.error('Middleware Error', error);
    res.status(500).send('Unexpected error');
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=apiHelpers.js.map