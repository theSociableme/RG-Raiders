"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRejected = exports.isFulfilled = void 0;
function isFulfilled(item) {
    return item.status === 'fulfilled';
}
exports.isFulfilled = isFulfilled;
function isRejected(item) {
    return item.status === 'rejected';
}
exports.isRejected = isRejected;
//# sourceMappingURL=promiseHelpers.js.map