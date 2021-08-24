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
exports.getBrightIdStatus = void 0;
const config_1 = require("../../../../config");
const CONTEXT = 'MetaGame';
const ENDPOINT = `${config_1.CONFIG.brightIdAppURL}/node/v5/verifications/${CONTEXT}`;
const getBrightIdStatus = (_, { contextId }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!contextId)
        return null;
    try {
        const response = yield fetch(`${ENDPOINT}/${contextId}`);
        if (!response.ok)
            return null;
        const responseData = yield response.json();
        return responseData.data;
    }
    catch (err) {
        return null;
    }
});
exports.getBrightIdStatus = getBrightIdStatus;
//# sourceMappingURL=resolver.js.map