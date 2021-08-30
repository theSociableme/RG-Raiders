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
exports.loadCredGraph = exports.ledgerManager = void 0;
const utils_1 = require("@raidguild/utils");
const sourcecred_1 = require("sourcecred");
const config_1 = require("../config");
const storage = new sourcecred_1.sourcecred.ledger.storage.GithubStorage({
    apiToken: config_1.CONFIG.githubApiToken,
    repo: 'MetaFam/XP',
    branch: config_1.CONFIG.sourceCredLedgerBranch,
});
exports.ledgerManager = new sourcecred_1.sourcecred.ledger.manager.LedgerManager({
    storage,
});
function loadCredGraph() {
    return __awaiter(this, void 0, void 0, function* () {
        const instance = sourcecred_1.sourcecred.instance.readInstance.getNetworkReadInstance(utils_1.Constants.SC_OUTPUT_BASE);
        try {
            return instance.readCredGraph();
        }
        catch (e) {
            return null;
        }
    });
}
exports.loadCredGraph = loadCredGraph;
//# sourceMappingURL=sourcecredLedger.js.map