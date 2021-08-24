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
import { Button } from '@chakra-ui/react';
import React from 'react';
export const MetaButton = React.forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement(Button, Object.assign({ colorScheme: "purple", textTransform: "uppercase", px: 12, letterSpacing: "0.1em", size: "lg", fontSize: "sm", bg: "purple.400", ref: ref }, props), children));
});
//# sourceMappingURL=MetaButton.js.map