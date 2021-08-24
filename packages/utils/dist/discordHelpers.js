"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guildIconUrl = void 0;
// see https://discord.com/developers/docs/reference#image-formatting
const guildIconUrl = (guildId, iconHash, type = "png" /* PNG */) => `https://cdn.discordapp.com/icons/${guildId}/${iconHash}.${type}`;
exports.guildIconUrl = guildIconUrl;
//# sourceMappingURL=discordHelpers.js.map