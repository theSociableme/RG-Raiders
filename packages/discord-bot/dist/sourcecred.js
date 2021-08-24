"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSourceCredLedger = exports.manager = void 0;
const sourcecred_1 = require("sourcecred");
const config_1 = require("./config");
const storage = new sourcecred_1.sourcecred.ledger.storage.GithubStorage({
    apiToken: config_1.CONFIG.githubApiToken,
    repo: 'MetaFam/XP',
    branch: config_1.CONFIG.sourceCredLedgerBranch,
});
exports.manager = new sourcecred_1.sourcecred.ledger.manager.LedgerManager({
    storage,
});
let loading = false;
let ledgerLoadedPromise;
const loadSourceCredLedger = () => {
    if (ledgerLoadedPromise == null) {
        if (!loading) {
            loading = true;
            console.log('reloading ledger...');
            ledgerLoadedPromise = exports.manager.reloadLedger();
            ledgerLoadedPromise.then(() => {
                loading = false;
            });
        }
    }
    return ledgerLoadedPromise;
};
exports.loadSourceCredLedger = loadSourceCredLedger;
//# sourceMappingURL=sourcecred.js.map