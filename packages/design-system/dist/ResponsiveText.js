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
import { Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
export const ResponsiveText = (_a) => {
    var { content } = _a, props = __rest(_a, ["content"]);
    const value = useBreakpointValue(content);
    return React.createElement(Text, Object.assign({}, props), value);
};
//# sourceMappingURL=ResponsiveText.js.map