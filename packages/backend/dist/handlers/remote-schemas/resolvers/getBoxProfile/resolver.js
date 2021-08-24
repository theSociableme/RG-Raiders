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
exports.getBoxProfile = void 0;
const _3box_1 = __importDefault(require("3box"));
const config_1 = require("../../../../config");
const imageHelpers_1 = require("../../../../lib/imageHelpers");
const getBoxProfile = (_, { address }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!address)
        return null;
    const boxProfile = yield _3box_1.default.getProfile(address);
    if (Object.keys(boxProfile).length === 0) {
        return null;
    }
    return {
        ethereumAddress: address,
        name: boxProfile.name,
        description: boxProfile.description,
        location: boxProfile.location,
        job: boxProfile.job,
        emoji: boxProfile.emoji,
        imageURL: getImage(boxProfile === null || boxProfile === void 0 ? void 0 : boxProfile.image, {
            ar: '1:1',
            height: 200,
        }),
        coverImageURL: getImage(boxProfile === null || boxProfile === void 0 ? void 0 : boxProfile.coverPhoto, {
            height: 300,
        }),
        website: boxProfile.website,
        collectiblesFavorites: getCollectiblesFavourites(boxProfile.collectiblesFavorites),
    };
});
exports.getBoxProfile = getBoxProfile;
function getImage(image, opts) {
    var _a, _b;
    const imageHash = (_b = (_a = image === null || image === void 0 ? void 0 : image[0]) === null || _a === void 0 ? void 0 : _a.contentUrl) === null || _b === void 0 ? void 0 : _b['/'];
    if (imageHash) {
        return imageHelpers_1.optimizeImage(`${config_1.CONFIG.ipfsEndpoint}/ipfs/${imageHash}`, opts);
    }
    return '';
}
function getCollectiblesFavourites(collectiblesFavorites) {
    if (!collectiblesFavorites)
        return [];
    return collectiblesFavorites
        .map(({ address, token_id }) => ({
        address: typeof address === 'string'
            ? address
            : address.mainnet || null,
        tokenId: token_id,
    }))
        .filter((c) => !!c.address);
}
//# sourceMappingURL=resolver.js.map