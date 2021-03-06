import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { textStyles } from './texts';
export const theme = extendTheme({
    styles: {
        global: {
            '#__next': {
                background: 'dark',
                color: 'white',
                minHeight: '100vh',
                option: {
                    background: 'dark',
                    color: 'white',
                },
            },
        },
    },
    sizes: {
        container: {
            xl: '85rem',
        },
    },
    colors,
    textStyles,
    fonts: {
        body: '"IBM Plex Sans", sans-serif',
        mono: '"IBM Plex Mono", monospace',
        heading: '"Press Start 2P", sans-serif',
    },
});
//# sourceMappingURL=index.js.map