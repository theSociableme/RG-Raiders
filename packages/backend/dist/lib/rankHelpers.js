"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRank = exports.RANKED_CAP = exports.PLAYERS_PER_RANK = exports.RANKS = void 0;
const utils_1 = require("@metafam/utils");
const hasura_sdk_1 = require("./autogen/hasura-sdk");
exports.RANKS = [
    hasura_sdk_1.PlayerRank_Enum.Diamond,
    hasura_sdk_1.PlayerRank_Enum.Platinum,
    hasura_sdk_1.PlayerRank_Enum.Gold,
    hasura_sdk_1.PlayerRank_Enum.Silver,
    hasura_sdk_1.PlayerRank_Enum.Bronze,
];
exports.PLAYERS_PER_RANK = [7, 7, 7, 14, 21];
exports.RANKED_CAP = utils_1.computeRankCap(exports.PLAYERS_PER_RANK);
// Computes the rank for the given index. This would be the index corresponding
// to all players ordered by total_xp DESC.
function computeRank(totalRankIndex) {
    return utils_1.computeRank(totalRankIndex, exports.PLAYERS_PER_RANK, exports.RANKS);
}
exports.computeRank = computeRank;
//# sourceMappingURL=rankHelpers.js.map