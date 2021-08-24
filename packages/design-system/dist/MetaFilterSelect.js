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
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { Button, Flex, IconButton, Input, Select, Text, useBreakpointValue, } from '@chakra-ui/react';
import React, { useCallback, useRef, useState } from 'react';
import { DropDownIcon } from './icons/DropDownIcon';
import { MetaTag } from './MetaTag';
import { SelectComponents, SelectSearch } from './SelectSearch';
import { filterTimezones, getTimezonesFor, } from './SelectTimeZone';
export const MetaSelect = (props) => (React.createElement(Select, Object.assign({ textTransform: "uppercase", maxW: "48", bg: "dark", iconColor: "purple.400", iconSize: "xs", icon: React.createElement(DropDownIcon, { boxSize: 2 }), borderColor: "borderPurple", borderWidth: "2px", borderRadius: "4px" }, props)));
export const FilterTag = ({ label, onRemove }) => {
    const tagSize = useBreakpointValue({ base: 'md', md: 'lg' });
    return (React.createElement(MetaTag, { backgroundColor: "black", size: tagSize, fontSize: { base: 'sm', md: 'md' }, borderRadius: "1rem", py: "1", px: "4", fontWeight: "normal" },
        label,
        React.createElement(IconButton, { ml: "3", minW: "4", variant: "unstyled", size: "xs", color: "silver", icon: React.createElement(CloseIcon, null), _hover: { color: 'white' }, "aria-label": `Remove filter ${label}`, onClick: onRemove })));
};
const SelectedTag = (props) => (React.createElement(Flex, Object.assign({ color: "black", bg: "#E839B7", borderRadius: "2px", justify: "center", align: "center", px: "1", ml: "2", fontSize: "sm", fontWeight: "bold" }, props)));
const SelectOption = (props) => {
    const { isSelected, data: { value: optionValue }, selectProps: { onChange, value: selectValue }, } = props;
    const clearValue = useCallback(() => {
        if (onChange) {
            const newSelectValue = selectValue
                ? selectValue.filter(({ value }) => !(value === optionValue))
                : [];
            onChange(newSelectValue, {
                action: 'remove-value',
                removedValue: { optionValue },
            });
        }
    }, [optionValue, selectValue, onChange]);
    return (React.createElement(Flex, { fontWeight: "normal", w: "100%", justify: "space-between", cursor: "pointer", align: "center", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "borderPurple", _hover: { backgroundColor: 'whiteAlpha.100' }, onClick: isSelected ? clearValue : undefined, css: { div: { cursor: 'pointer' } } },
        React.createElement(SelectComponents.Option, Object.assign({}, props)),
        isSelected && React.createElement(CheckIcon, { color: "white", mx: "2" })));
};
const ValueDisplay = ({ menuIsOpen, tagLabel, title }) => (React.createElement(React.Fragment, null,
    React.createElement(Text, { ml: "2", textTransform: "uppercase" }, title),
    tagLabel ? React.createElement(SelectedTag, null, tagLabel) : null,
    React.createElement(DropDownIcon, { boxSize: 3, color: "purple.400", mx: "2", transition: "transform 0.1s", transform: menuIsOpen ? 'rotate(180deg) translateY(10%)' : 'none' })));
const SelectValueContainer = (props) => {
    const { selectProps: { value, title, menuIsOpen }, } = props;
    let tagLabel = '';
    if (Array.isArray(value) && value.length > 0) {
        tagLabel = value.length.toString();
    }
    if (value && !Array.isArray(value)) {
        tagLabel =
            title.toLowerCase() === 'availability' ? `>${value.value}` : value.value;
    }
    return (React.createElement(Flex, { mr: "-1rem", py: "1", align: "center", cursor: "pointer" },
        React.createElement(ValueDisplay, { title: title, menuIsOpen: menuIsOpen, tagLabel: tagLabel }),
        React.createElement(SelectComponents.ValueContainer, Object.assign({}, props))));
};
const SelectControl = (props) => {
    const { hasValue, selectProps: { menuIsOpen, onMenuClose, onMenuOpen, showSearch }, } = props;
    const buttonRef = useRef(null);
    const onClick = useCallback(() => {
        if (menuIsOpen) {
            onMenuClose === null || onMenuClose === void 0 ? void 0 : onMenuClose();
        }
        else {
            onMenuOpen === null || onMenuOpen === void 0 ? void 0 : onMenuOpen();
            if (!showSearch && buttonRef.current) {
                buttonRef.current.focus();
            }
        }
    }, [menuIsOpen, onMenuOpen, onMenuClose, showSearch]);
    return (React.createElement(Button, { fontWeight: "normal", variant: "unstyled", boxShadow: menuIsOpen ? '0px 10px 20px rgba(0, 0, 0, 0.4)' : 'none', cursor: "pointer", ref: buttonRef, onClick: onClick, onTouchEnd: onClick, align: "center", borderTopRadius: "4px", borderBottomRadius: menuIsOpen ? '0' : '4px', borderColor: "borderPurple", borderStyle: "solid", borderWidth: hasValue && !menuIsOpen ? '4px' : '2px', borderBottom: menuIsOpen ? '0' : undefined, height: "auto", bg: "dark", _hover: {
            borderColor: menuIsOpen ? 'borderPurple' : 'whiteAlpha.800',
        }, transform: menuIsOpen ? 'translateY(-1px)' : undefined, transition: "transform 0s" },
        React.createElement(SelectComponents.Control, Object.assign({}, props))));
};
const SelectMenu = (props) => {
    const { selectProps: { onInputChange, title, value, placement, showSearch, inputValue, }, } = props;
    const [input, setInput] = useState(inputValue || '');
    let tagLabel = '';
    if (Array.isArray(value) && value.length > 0) {
        tagLabel = value.length.toString();
    }
    if (value && !Array.isArray(value)) {
        tagLabel =
            title.toLowerCase() === 'availability' ? `>${value.value}` : value.value;
    }
    const placeRight = placement === 'right';
    return (React.createElement(Flex, { position: "absolute", top: "calc(100% - 1px)", minWidth: "15rem", left: placeRight ? 'auto' : '0', right: placeRight ? '0' : 'auto', zIndex: "1", direction: "column" },
        React.createElement(Flex, { w: "100%", direction: placeRight ? 'row-reverse' : 'row' },
            React.createElement(Flex, { height: "3", p: "0", bg: "dark", borderLeftColor: "borderPurple", borderLeftStyle: "solid", borderLeftWidth: "2px", borderRightColor: "borderPurple", borderRightStyle: "solid", borderRightWidth: "2px", overflow: "hidden", whiteSpace: "nowrap", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)" },
                React.createElement(Flex, { visibility: "hidden" },
                    React.createElement(ValueDisplay, { title: title, tagLabel: tagLabel, menuIsOpen: true }))),
            React.createElement(Flex, { borderBottomColor: "borderPurple", borderBottomStyle: "solid", borderBottomWidth: "2px", flex: 1, pointerEvents: "none" })),
        React.createElement(Flex, { w: "100%", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)", bg: "dark", borderWidth: "2px", borderColor: "borderPurple", borderStyle: "solid", borderBottomWidth: showSearch ? '2px' : '1px', borderTop: "none", borderBottomRadius: "4px", direction: "column" },
            showSearch && (React.createElement(Flex, { w: "100%", borderBottomWidth: "1px", borderBottomColor: "borderPurple", borderBottomStyle: "solid" },
                React.createElement(Input, { autoFocus: true, width: "calc(100% - 2rem)", placeholder: "Search...", _placeholder: { color: 'whiteAlpha.500' }, borderRadius: "0", borderWidth: "2px", mx: "4", my: "2", borderColor: "borderPurple", onChange: (e) => {
                        const val = e.target.value;
                        setInput(val);
                        if (onInputChange) {
                            onInputChange(val, { action: 'input-change' });
                        }
                    }, value: input }))),
            React.createElement(SelectComponents.Menu, Object.assign({}, props)))));
};
const SelectContainer = (props) => {
    const { selectProps: { onMenuClose }, } = props;
    // const onOutsideFocus = useCallback(() => {
    //   if (onMenuClose && menuIsOpen) {
    //     onMenuClose();
    //   }
    // }, [menuIsOpen, onMenuClose]);
    // useEffect(() => {
    //   const selectedRef = selectRef.current;
    //   selectedRef?.addEventListener('focusout', onOutsideFocus);
    //   return () => {
    //     selectedRef?.removeEventListener('focusout', onOutsideFocus);
    //   };
    // }, [selectRef, onOutsideFocus]);
    return (React.createElement(Flex, { position: "relative", onBlur: onMenuClose },
        React.createElement(SelectComponents.SelectContainer, Object.assign({}, props, { innerProps: { onKeyDown: () => undefined } }))));
};
export const MetaFilterSelectSearch = (_a) => {
    var { options: defaultOptions, showSearch = false, isTimezone = false } = _a, props = __rest(_a, ["options", "showSearch", "isTimezone"]);
    const [options, setOptions] = useState(defaultOptions);
    const onTimezoneInputChange = useCallback((value) => {
        var _a;
        if (!value) {
            setOptions(defaultOptions);
        }
        else {
            const searchText = value.toLowerCase().trim();
            const filteredTimezones = getTimezonesFor(searchText);
            setOptions((_a = defaultOptions) === null || _a === void 0 ? void 0 : _a.filter(filterTimezones(searchText, filteredTimezones)));
        }
    }, [defaultOptions]);
    return (React.createElement(SelectSearch, Object.assign({ isMulti: true, closeMenuOnSelect: false, placeholder: " ", components: {
            MultiValueContainer: () => null,
            SingleValue: () => null,
            IndicatorSeparator: () => null,
            DropdownIndicator: () => null,
            IndicatorsContainer: () => null,
            Input: () => null,
            ValueContainer: SelectValueContainer,
            Option: SelectOption,
            Menu: SelectMenu,
            Control: SelectControl,
            SelectContainer,
        }, isClearable: false, hideSelectedOptions: false, showSearch: showSearch, options: options, filterOption: isTimezone ? null : undefined, onInputChange: isTimezone ? onTimezoneInputChange : undefined }, props)));
};
//# sourceMappingURL=MetaFilterSelect.js.map