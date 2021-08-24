"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyWithUnexpectedError = exports.getDiscordId = void 0;
const getDiscordId = (targetParameter) => {
    // Parse the targetParameter
    // desktop/web user if starts with <@! and ends with >
    // mobile user if starts with <@ and ends with >
    if (targetParameter.startsWith('<@!') && targetParameter.endsWith('>')) {
        return targetParameter.slice(3, targetParameter.length - 1);
    }
    if (targetParameter.startsWith('<@') && targetParameter.endsWith('>')) {
        return targetParameter.slice(2, targetParameter.length - 1);
    }
    throw new Error('Unexpected argument for targetParameter');
};
exports.getDiscordId = getDiscordId;
const replyWithUnexpectedError = (message) => {
    var _a, _b;
    let reply = 'The octo is sad 😢, as there was an unexpected error.';
    const feedbackChannel = (_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.channels) === null || _b === void 0 ? void 0 : _b.cache.get('794214722639101992');
    if (feedbackChannel) {
        reply += ` Let us know what happened in ${feedbackChannel.toString()}`;
    }
    return message.reply(reply);
};
exports.replyWithUnexpectedError = replyWithUnexpectedError;
//# sourceMappingURL=utils.js.map