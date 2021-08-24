import { Box, Text } from '@chakra-ui/react';
import React from 'react';
export const MetaBox = ({ children, title }) => (React.createElement(Box, null,
    React.createElement(Box, { bg: "purpleBoxLight", borderTopRadius: "lg", p: 4 },
        React.createElement(Text, { fontFamily: "mono", fontSize: "sm", fontWeight: "bold", color: "blueLight", as: "div" }, title)),
    React.createElement(Box, { bg: "purpleBoxDark", borderBottomRadius: "lg", p: 6 }, children)));
//# sourceMappingURL=MetaBox.js.map