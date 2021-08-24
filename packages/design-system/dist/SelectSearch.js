import React from 'react';
import Select, { components } from 'react-select';
import { theme } from './theme';
export const SelectComponents = components;
export const selectStyles = {
    menuPortal: (styles) => (Object.assign(Object.assign({}, styles), { borderRadius: theme.radii.md })),
    menu: (styles) => (Object.assign(Object.assign({}, styles), { background: theme.colors.dark, minWidth: '15rem', border: `2px solid ${theme.colors.borderPurple}` })),
    menuList: (styles) => (Object.assign(Object.assign({}, styles), { padding: 0 })),
    noOptionsMessage: (styles) => (Object.assign(Object.assign({}, styles), { color: theme.colors.white })),
    input: (styles) => (Object.assign(Object.assign({}, styles), { color: theme.colors.white })),
    group: (styles) => (Object.assign(Object.assign({}, styles), { paddingTop: 0, paddingBottom: 0 })),
    groupHeading: (styles) => (Object.assign(Object.assign({}, styles), { color: theme.colors.white, background: theme.colors.purple[400], paddingTop: theme.space['3'], paddingBottom: theme.space['3'], position: 'sticky', top: 0 })),
    option: (styles) => (Object.assign(Object.assign({}, styles), { backgroundColor: 'transparent', ':hover': {
            backgroundColor: theme.colors.whiteAlpha[100],
            color: theme.colors.white,
        } })),
    control: (styles) => (Object.assign(Object.assign({}, styles), { minWidth: '6rem', background: theme.colors.dark, border: `2px solid ${theme.colors.borderPurple}`, ':hover': {
            borderColor: theme.colors.white,
        } })),
    multiValue: (styles) => (Object.assign(Object.assign({}, styles), { background: theme.colors.purpleTag, color: theme.colors.white })),
    multiValueLabel: (styles) => (Object.assign(Object.assign({}, styles), { background: theme.colors.purpleTag, color: theme.colors.white })),
    multiValueRemove: (styles) => (Object.assign(Object.assign({}, styles), { color: theme.colors.white, cursor: 'pointer', ':hover': {
            color: theme.colors.blueLight,
        } })),
    clearIndicator: (styles) => (Object.assign(Object.assign({}, styles), { color: theme.colors.white, cursor: 'pointer', ':hover': {
            color: theme.colors.blueLight,
        } })),
    dropdownIndicator: (styles) => (Object.assign(Object.assign({}, styles), { color: theme.colors.white, cursor: 'pointer', ':hover': {
            color: theme.colors.blueLight,
        } })),
};
export const SelectSearch = (props) => (React.createElement(Select, Object.assign({ styles: selectStyles }, props)));
//# sourceMappingURL=SelectSearch.js.map