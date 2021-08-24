var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Heading } from '@chakra-ui/react';
import React from 'react';
export const MetaHeading = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement(Heading, Object.assign({ size: "lg", textAlign: "center", fontWeight: "normal" }, props), children));
};
//# sourceMappingURL=MetaHeading.js.map