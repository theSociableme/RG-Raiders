import { Box } from '@chakra-ui/react';
import NextImage from 'next/image';
import React from 'react';
export const BoxedNextImage = (props) => {
    const { src, alt } = props;
    return (React.createElement(Box, Object.assign({}, Object.assign(Object.assign({}, props), { src: undefined, alt: undefined }), { style: {
            objectFit: 'contain',
            position: 'relative',
        } }),
        React.createElement(NextImage, Object.assign({}, { src, alt }, { layout: "fill", objectFit: "contain" }))));
};
//# sourceMappingURL=BoxedNextImage.js.map