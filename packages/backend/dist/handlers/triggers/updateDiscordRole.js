"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDiscordRole = void 0;
/* eslint-disable no-console */
const discord_bot_1 = require("@metafam/discord-bot");
const config_1 = require("../../config");
const hasuraClient_1 = require("../../lib/hasuraClient");
const updateDiscordRole = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    if (config_1.CONFIG.nodeEnv !== 'production')
        return;
    const { old: oldPlayer, new: newPlayer } = payload.event.data;
    console.log(`updateDiscordRole action triggered for player (username=${newPlayer === null || newPlayer === void 0 ? void 0 : newPlayer.username})`);
    try {
        if (newPlayer == null)
            return;
        const getPlayerResponse = yield hasuraClient_1.client.GetPlayer({
            playerId: newPlayer.id,
        });
        const playerDiscordId = (_a = getPlayerResponse.player_by_pk) === null || _a === void 0 ? void 0 : _a.discord_id;
        if (playerDiscordId == null)
            return;
        const newRank = newPlayer === null || newPlayer === void 0 ? void 0 : newPlayer.rank;
        if (newRank == null)
            return;
        // look up guild by guildname = 'metagame' (for now),
        const getGuildResponse = yield hasuraClient_1.client.GetGuild({ guildname: 'metafam' });
        const guildDiscordId = (_b = getGuildResponse.guild[0]) === null || _b === void 0 ? void 0 : _b.discord_id;
        if (guildDiscordId == null)
            return;
        // instantiate discord client. We'll need serverId, playerId, and roleIds
        const discordClient = yield discord_bot_1.createDiscordClient();
        const guild = yield discordClient.guilds.fetch(guildDiscordId, true, true);
        if (guild == null) {
            console.warn(`No discord server found matching ${guildDiscordId}!`);
            return;
        }
        const rankDiscordRoleIds = (_d = (_c = getGuildResponse.guild[0]) === null || _c === void 0 ? void 0 : _c.discord_metadata) === null || _d === void 0 ? void 0 : _d.rankRoleIds;
        const discordPlayer = yield guild.members.fetch(playerDiscordId);
        if (discordPlayer == null) {
            console.warn(`No discord player with ID ${playerDiscordId} found in server ${guild.name}!`);
            return;
        }
        // We know the old value; try to remove that role
        let removedRole = null;
        if ((oldPlayer === null || oldPlayer === void 0 ? void 0 : oldPlayer.rank) != null) {
            const rankId = rankDiscordRoleIds[oldPlayer.rank];
            try {
                // this actually throws a typeerror if the player doesn't actually have the role
                const success = yield discordPlayer.roles.remove(rankId);
                if (success) {
                    removedRole = oldPlayer.rank;
                }
            }
            catch (e) {
                console.error(e);
            }
        }
        // if not successful, attempt to remove all rank roles
        if (removedRole == null) {
            // eslint-disable-next-line no-restricted-syntax
            for (const rank in rankDiscordRoleIds) {
                if (Object.prototype.hasOwnProperty.call(rankDiscordRoleIds, rank)) {
                    // eslint-disable-next-line no-await-in-loop
                    const success = yield discordPlayer.roles.remove([
                        rankDiscordRoleIds[rank],
                    ]);
                    if (success) {
                        removedRole = rank;
                        break;
                    }
                }
            }
        }
        if (removedRole) {
            console.log(`${newPlayer === null || newPlayer === void 0 ? void 0 : newPlayer.username}: removed role ${removedRole}`);
        }
        // Add the new rank.
        const discordRoleForRank = rankDiscordRoleIds[newRank];
        if (discordRoleForRank == null) {
            console.warn(`Discord role associated with ${newRank} was not found!`);
        }
        else {
            yield discordPlayer.roles.add([discordRoleForRank]);
            console.log(`${newPlayer === null || newPlayer === void 0 ? void 0 : newPlayer.username}: added role ${newRank}`);
        }
    }
    catch (e) {
        console.error(e);
    }
});
exports.updateDiscordRole = updateDiscordRole;
//# sourceMappingURL=updateDiscordRole.js.map