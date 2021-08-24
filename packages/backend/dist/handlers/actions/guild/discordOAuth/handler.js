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
exports.handleOAuthCallback = void 0;
/* eslint-disable no-console */
const discord_bot_1 = require("@metafam/discord-bot");
const utils_1 = require("@metafam/utils");
const uuid_1 = require("uuid");
const hasura_sdk_1 = require("../../../../lib/autogen/hasura-sdk");
const hasuraClient_1 = require("../../../../lib/hasuraClient");
const handleOAuthCallback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { input } = req.body;
    try {
        // when confirmed, `code` parameter is sent.
        const response = yield discord_bot_1.exchangeCodeForAccessToken(input.code);
        if (response.statusCode !== 200 || response.oauthResponse == null) {
            console.error(`${response.statusCode}: ${response.error}`);
            throw new Error();
        }
        const { guild: discordGuild } = response.oauthResponse;
        if (discordGuild == null) {
            console.error('Guild not available on oauth response. Exiting..');
            throw new Error();
        }
        // look up guild by guild Id
        const getGuildResponse = yield hasuraClient_1.client.GetDiscordGuild({
            discordId: discordGuild.id,
        });
        if (getGuildResponse.guild.length > 0) {
            const existingGuild = getGuildResponse.guild[0];
            // if a guild with the same server ID already exists, see if a discord refresh token is set.
            if (((_a = existingGuild.discord_metadata) === null || _a === void 0 ? void 0 : _a.refreshToken) != null) {
                // if so, it's already set up: redirect to the appropriate page on the frontend
                // might want to save the new refresh token if it's different...?
                // (unfortunately this page doesn't yet exist..)
                const successResponse = {
                    success: true,
                    guildname: existingGuild.guildname,
                    exists: true,
                };
                res.json(successResponse);
            }
            else {
                // otherwise, update the existing guild with the provided info from discord
                yield hasuraClient_1.client.UpdateGuildDiscordMetadata({
                    guildId: existingGuild.id,
                    discordMetadata: parseDiscordMetadata(response.oauthResponse),
                });
                const successResponse = {
                    success: true,
                    guildname: existingGuild.id,
                };
                res.json(successResponse);
            }
        }
        else {
            // Guild doesn't already exist: persist guild info fetched in this request
            const discordMetadata = parseDiscordMetadata(response.oauthResponse);
            // include roles from response. fetch any additional data that might be useful
            discordMetadata.allRoleIds = discordGuild.roles.map((role) => role.id);
            let createGuildResponse = { success: false };
            try {
                createGuildResponse = yield createNewGuild(discordGuild, discordMetadata);
            }
            catch (creationError) {
                // if there was a guildname clash, try again with a uuid
                if (creationError === null || creationError === void 0 ? void 0 : creationError.message.includes('Uniqueness violation')) {
                    discordGuild.name = uuid_1.v4();
                    createGuildResponse = yield createNewGuild(discordGuild, discordMetadata);
                    res.json(createGuildResponse);
                }
            }
            res.json(createGuildResponse);
        }
    }
    catch (error) {
        console.error(error);
        const errorResponse = {
            success: false,
            error: (error === null || error === void 0 ? void 0 : error.message) || error || 'An unexpected error occurred',
        };
        res.json(errorResponse);
    }
});
exports.handleOAuthCallback = handleOAuthCallback;
const parseDiscordMetadata = (oauthResponse) => {
    var _a, _b;
    const discordMetadata = {
        refreshToken: oauthResponse.refresh_token,
    };
    if (((_a = oauthResponse.guild) === null || _a === void 0 ? void 0 : _a.icon) != null) {
        discordMetadata.logoHash = (_b = oauthResponse.guild) === null || _b === void 0 ? void 0 : _b.icon; // see https://discord.com/developers/docs/reference#image-formatting
    }
    return discordMetadata;
};
const createNewGuild = (discordGuild, discordMetadata) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    let newGuildPayload = {
        type: hasura_sdk_1.GuildType_Enum.Project,
        name: discordGuild.name,
        guildname: discordGuild.name.toLowerCase().replace(/[^a-z0-9]/g, ''),
        discord_id: discordGuild.id,
        status: hasura_sdk_1.GuildStatus_Enum.Pending,
        discord_metadata: discordMetadata,
    };
    if (discordMetadata.logoHash != null) {
        newGuildPayload = Object.assign(Object.assign({}, newGuildPayload), { logo: utils_1.DiscordUtil.guildIconUrl(discordGuild.id, discordMetadata.logoHash) });
    }
    const createGuildResponse = yield hasuraClient_1.client.CreateGuild({
        objects: newGuildPayload,
    });
    if (createGuildResponse.insert_guild != null &&
        createGuildResponse.insert_guild.returning.length > 0) {
        const newGuild = (_b = createGuildResponse.insert_guild) === null || _b === void 0 ? void 0 : _b.returning[0];
        const successResponse = {
            success: true,
            guildname: newGuild.guildname,
        };
        return successResponse;
    }
    throw new Error();
});
//# sourceMappingURL=handler.js.map