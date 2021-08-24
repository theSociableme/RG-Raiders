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
import { Flex, VStack } from '@chakra-ui/react';
import React from 'react';
export const MetaTileHeader = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement(VStack, Object.assign({ w: "100%", spacing: "6", align: "stretch", mb: 6, position: "relative" }, props), children));
};
export const MetaTileBody = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement(VStack, Object.assign({ w: "100%", spacing: "6", align: "stretch" }, props), children));
};
export const MetaTile = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement(Flex, Object.assign({ direction: "column", bg: "whiteAlpha.200", style: { backdropFilter: 'blur(7px)' }, rounded: "lg", p: 6, maxW: "25rem" // (2 / 3.5) = ~0.571 aspect ratio desired
        , w: "100%", align: "stretch", position: "relative", overflow: "hidden", justify: "space-between" }, props), children));
};
//# sourceMappingURL=MetaTile.js.map