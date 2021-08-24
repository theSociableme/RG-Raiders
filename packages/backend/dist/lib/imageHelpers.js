"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizeImage = void 0;
const imgix_core_js_1 = __importDefault(require("imgix-core-js"));
const config_1 = require("../config");
const client = new imgix_core_js_1.default({
    domain: 'metafam.imgix.net',
    secureURLToken: config_1.CONFIG.imgixToken,
});
const optimizeImage = (url, opts) => {
    if (!config_1.CONFIG.imgixToken)
        return url;
    return client.buildURL(url, Object.assign({}, opts));
};
exports.optimizeImage = optimizeImage;
//# sourceMappingURL=imageHelpers.js.map