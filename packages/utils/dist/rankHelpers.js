"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRank = exports.computeRankCap = void 0;
// A summation of usersPerRank
// This is the first index for which users will NOT be ranked
const computeRankCap = (usersPerRank) => usersPerRank.reduce((sum, rankCount) => sum + rankCount, 0);
exports.computeRankCap = computeRankCap;
// Computes the rank for the given index. This would be the index corresponding
// to all users ordered by total_xp DESC.
function computeRank(rankIndex, usersPerRank, ranks) {
    const rankCap = exports.computeRankCap(usersPerRank);
    if (rankIndex >= rankCap)
        return null;
    let indexSum = 0;
    for (let i = 0; i < usersPerRank.length; i++) {
        indexSum += usersPerRank[i];
        if (rankIndex < indexSum && i < ranks.length) {
            return ranks[i];
        }
    }
    return null;
}
exports.computeRank = computeRank;
//# sourceMappingURL=rankHelpers.js.map