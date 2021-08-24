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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_1 = __importDefault(require("@ceramicnetwork/http-client"));
const idx_1 = require("@ceramicstudio/idx");
const _3box_1 = __importDefault(require("3box"));
const config_1 = require("../../../config");
const hasura_sdk_1 = require("../../../lib/autogen/hasura-sdk");
const hasuraClient_1 = require("../../../lib/hasuraClient");
const imageHelpers_1 = require("../../../lib/imageHelpers");
function getImage(image, opts) {
    var _a;
    const [, imageHash] = (_a = image === null || image === void 0 ? void 0 : image.match(/^ipfs:\/\/(.+)$/)) !== null && _a !== void 0 ? _a : [];
    if (imageHash) {
        return imageHelpers_1.optimizeImage(`${config_1.CONFIG.ipfsEndpoint}/ipfs/${imageHash}`, opts);
    }
    return image;
}
const ceramic = new http_client_1.default(config_1.CONFIG.ceramicDaemonURL);
const idx = new idx_1.IDX({ ceramic });
// eslint-disable-next-line import/no-default-export
exports.default = (playerId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const updatedProfiles = [];
    const { player_by_pk: player } = yield hasuraClient_1.client.GetPlayer({ playerId });
    const ethAddress = player === null || player === void 0 ? void 0 : player.ethereum_address;
    if (!ethAddress) {
        throw new Error('unknown-player');
    }
    let idxProfile;
    try {
        idxProfile = yield idx.get('basicProfile', `${ethAddress.toLowerCase()}@eip155:1`);
    }
    catch (err) {
        if (!err.message.includes('No DID')) {
            throw err;
        }
    }
    if (!idxProfile) {
        idxProfile = yield idx_1.getLegacy3BoxProfileAsBasicProfile(ethAddress);
    }
    if (!idxProfile) {
        console.info(`No Profile For: ${ethAddress}`);
        idxProfile = {}; // create an empty placeholder row
    }
    const { name, description, emoji, gender, url, homeLocation: location, residenceCountry: country, image, background, } = idxProfile;
    const values = {
        playerId,
        name,
        description,
        emoji,
        imageURL: getImage((_a = image === null || image === void 0 ? void 0 : image.original) === null || _a === void 0 ? void 0 : _a.src, {
            ar: '1:1',
            height: 200,
        }),
        backgroundImageURL: getImage((_b = background === null || background === void 0 ? void 0 : background.original) === null || _b === void 0 ? void 0 : _b.src, {
            height: 300,
        }),
        gender,
        location,
        country,
        website: url,
    };
    yield hasuraClient_1.client.UpsertProfileCache({ objects: [values] });
    // There isn't yet an interface for linking accounts on self.id
    const boxProfile = yield _3box_1.default.getProfile(ethAddress);
    const verifiedAccounts = yield _3box_1.default.getVerifiedAccounts(boxProfile);
    if (verifiedAccounts.github) {
        const { insert_player_account: insert } = yield hasuraClient_1.client.UpsertAccount({
            objects: [
                {
                    player_id: playerId,
                    type: hasura_sdk_1.AccountType_Enum.Github,
                    identifier: verifiedAccounts.github.username,
                },
            ],
        });
        if (insert === null || insert === void 0 ? void 0 : insert.affected_rows) {
            updatedProfiles.push('github');
        }
        else if ((insert === null || insert === void 0 ? void 0 : insert.affected_rows) === undefined) {
            // eslint-disable-next-line no-console
            console.warn(`Unable to insert Github user ${verifiedAccounts.github.username} for playerId ${playerId}`);
        }
    }
    if (verifiedAccounts.twitter) {
        const { insert_player_account: insert } = yield hasuraClient_1.client.UpsertAccount({
            objects: [
                {
                    player_id: playerId,
                    type: hasura_sdk_1.AccountType_Enum.Twitter,
                    identifier: verifiedAccounts.twitter.username,
                },
            ],
        });
        if (insert === null || insert === void 0 ? void 0 : insert.affected_rows) {
            updatedProfiles.push('twitter');
        }
        else if ((insert === null || insert === void 0 ? void 0 : insert.affected_rows) === undefined) {
            // eslint-disable-next-line no-console
            console.warn(`Unable to insert Twitter user ${verifiedAccounts.twitter.username} for playerId ${playerId}`);
        }
    }
    return {
        success: true,
        updatedProfiles,
    };
});
//# sourceMappingURL=updateSingle.js.map