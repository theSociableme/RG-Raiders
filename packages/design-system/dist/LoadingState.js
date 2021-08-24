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
import { Flex, Spinner } from '@chakra-ui/react';
import React from 'react';
export const LoadingState = (_a) => {
    var { color = 'purple.500' } = _a, props = __rest(_a, ["color"]);
    return (React.createElement(Flex, Object.assign({ w: "100%", h: "100%", justify: "center", align: "center" }, props),
        React.createElement(Spinner, { color: color, size: "xl" })));
};
//# sourceMappingURL=LoadingState.js.map