import { Box, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Flex, Spinner, Text, Tag, theme as theme$1, extendTheme, Select as Select$1, useBreakpointValue, IconButton, Input, Heading, VStack, chakra } from '@chakra-ui/react';
export { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Avatar, Badge, Box, Button, ButtonGroup, CSSReset, Center, ChakraProvider, Container, Divider, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Fade, Flex, Grid, GridItem, HStack, Heading, Icon, IconButton, Image, Input, InputGroup, InputLeftElement, InputRightAddon, InputRightElement, Link, LinkBox, LinkOverlay, List, ListIcon, ListItem, Modal, ModalCloseButton, ModalContent, ModalOverlay, Select, SimpleGrid, Skeleton, Spacer, Spinner, Stack, Switch, Text, Textarea, Tooltip, VStack, Wrap, WrapItem, useBreakpointValue, useDisclosure, useTheme, useToast } from '@chakra-ui/react';
import NextImage from 'next/image';
import React__default, { useRef, createElement, useState, useCallback } from 'react';
import { createIcon, CloseIcon, CheckIcon } from '@chakra-ui/icons';
export { ArrowBackIcon, ArrowForwardIcon, CheckIcon, CloseIcon, EmailIcon, SettingsIcon } from '@chakra-ui/icons';
import Select, { components } from 'react-select';
import cityTimezones from 'city-timezones';
import TimezoneSelect from 'react-timezone-select';
import { i18nTimezones } from 'react-timezone-select/dist/index.js';
import spacetime from 'spacetime';
import informal from 'spacetime-informal';
export { default as styled } from '@emotion/styled';
export { motion } from 'framer-motion';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var BoxedNextImage = function BoxedNextImage(props) {
  var src = props.src,
      alt = props.alt;
  return React__default.createElement(Box, Object.assign({}, _extends({}, props, {
    src: undefined,
    alt: undefined
  }), {
    style: {
      objectFit: 'contain',
      position: 'relative'
    }
  }), React__default.createElement(NextImage, Object.assign({}, {
    src: src,
    alt: alt
  }, {
    layout: "fill",
    objectFit: "contain"
  })));
};

var MetaButton = /*#__PURE__*/React__default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(Button, Object.assign({
    colorScheme: "purple",
    textTransform: "uppercase",
    px: 12,
    letterSpacing: "0.1em",
    size: "lg",
    fontSize: "sm",
    bg: "purple.400",
    ref: ref
  }, props), children);
});

var ConfirmModal = function ConfirmModal(_ref) {
  var isOpen = _ref.isOpen,
      onNope = _ref.onNope,
      onYep = _ref.onYep,
      header = _ref.header,
      body = _ref.body,
      loading = _ref.loading,
      loadingText = _ref.loadingText;
  var cancelRef = useRef(null);
  return React__default.createElement(AlertDialog, {
    isOpen: isOpen,
    leastDestructiveRef: cancelRef,
    onClose: onNope
  }, React__default.createElement(AlertDialogOverlay, null, React__default.createElement(AlertDialogContent, null, React__default.createElement(AlertDialogHeader, {
    fontSize: "lg",
    fontWeight: "bold"
  }, header || ' Are you sure ?'), body && React__default.createElement(AlertDialogBody, null, body), React__default.createElement(AlertDialogFooter, null, React__default.createElement(MetaButton, {
    ref: cancelRef,
    onClick: onNope,
    isDisabled: loading
  }, "Nope"), React__default.createElement(MetaButton, {
    colorScheme: "red",
    onClick: onYep,
    isLoading: loading,
    loadingText: loadingText,
    ml: 3
  }, "Yep")))));
};

var BrightIdIcon = /*#__PURE__*/createIcon({
  displayName: 'BrightIdIcon',
  path: /*#__PURE__*/createElement("g", null, /*#__PURE__*/createElement("g", null, /*#__PURE__*/createElement("path", {
    d: "M87.74 118.23C87.74 135.7 101.9 149.86 119.37 149.86C136.84 149.86 151.01 135.7 151.01 118.23C151.01 100.75 136.84 86.59 119.37 86.59C119.33 86.59 119.3 86.59 119.26 86.59C119.26 86.59 119.26 86.59 119.26 86.59L87.74 86.59C87.74 105.57 87.74 116.12 87.74 118.23Z",
    fill: "currentColor"
  })), /*#__PURE__*/createElement("g", null, /*#__PURE__*/createElement("path", {
    d: "M111.61 18.36L87.74 18.36L87.74 54.96L119.26 54.96C119.26 54.96 119.26 54.96 119.26 54.96C119.3 54.96 119.33 54.96 119.37 54.96C154.31 54.96 182.64 83.28 182.64 118.23C182.64 153.17 154.31 181.49 119.37 181.49C84.43 181.49 56.1 153.17 56.1 118.23C56.1 116.12 56.1 105.57 56.1 86.59L20.42 86.59L20.42 115.54C20.56 115.54 20.64 115.54 20.66 115.54C20.7 169.26 64.26 212.8 117.99 212.8C171.75 212.8 215.33 169.22 215.33 115.46C215.33 63.85 175.15 21.64 124.36 18.36C122.66 18.36 118.41 18.36 111.61 18.36Z",
    fill: "currentColor"
  })), /*#__PURE__*/createElement("g", null, /*#__PURE__*/createElement("path", {
    d: "M56 18.36C56 18.36 56 18.36 56 18.36C56 40.48 56 52.77 56 55.23C56 55.22 56 55.22 56 55.23C34.79 55.22 23 55.22 20.65 55.23C20.65 55.22 20.65 55.22 20.65 55.23C20.65 33.1 20.65 20.81 20.65 18.36C20.65 18.36 20.65 18.36 20.65 18.36C41.86 18.36 53.65 18.36 56 18.36Z",
    fill: "currentColor"
  }))),
  viewBox: '19.422999999999988 17.356 198.902 198.44000000000003'
});

var DropDownIcon = /*#__PURE__*/createIcon({
  displayName: 'DropDownIcon',
  path: /*#__PURE__*/createElement("path", {
    d: "M10 0H2C1.17595 0 0.705573 0.940764 1.2 1.6L5.2 6.93333C5.6 7.46667 6.4 7.46667 6.8 6.93333L10.8 1.6C11.2944 0.940764 10.824 0 10 0Z",
    fill: "currentColor"
  }),
  viewBox: '0 0 12 8'
});

var Icon3box = /*#__PURE__*/createIcon({
  displayName: '3BoxIcon',
  path: /*#__PURE__*/createElement("path", {
    d: "M3.252 0H19.2c1.796 0 3.252 1.431 3.252 3.197v15.606c0 1.766-1.456 3.197-3.252 3.197H3.252C1.456 22 0 20.569 0 18.803V3.197C0 1.431 1.456 0 3.252 0zm8.085 3.64c-.661 0-1.28.09-1.855.27a4.628 4.628 0 00-1.53.803c-.444.355-.815.8-1.11 1.331-.297.532-.497 1.15-.6 1.855l1.343.233c.124.02.241.03.352.03.234 0 .423-.055.568-.167.145-.112.259-.296.341-.554.159-.494.438-.9.837-1.214.4-.315.903-.473 1.51-.473.668 0 1.195.178 1.58.534.387.356.58.882.58 1.58 0 .325-.049.623-.145.894a1.533 1.533 0 01-.512.697c-.244.193-.573.343-.987.452-.413.108-.934.166-1.56.173v1.788c.758 0 1.362.058 1.813.173.452.115.798.274 1.04.478.24.203.399.449.474.736.076.288.114.608.114.96a2.268 2.268 0 01-.646 1.576 2.471 2.471 0 01-.811.544c-.324.139-.703.208-1.137.208a2.68 2.68 0 01-.997-.168 2.542 2.542 0 01-.729-.437 2.859 2.859 0 01-.532-.614 9.051 9.051 0 01-.409-.702.767.767 0 00-.325-.325 1.014 1.014 0 00-.48-.112c-.2 0-.397.041-.59.122l-1.126.458c.206.63.454 1.185.744 1.666.29.481.64.888 1.054 1.22.413.332.9.582 1.457.752.558.17 1.213.254 1.964.254.69 0 1.342-.098 1.959-.295a4.89 4.89 0 001.627-.869 4.18 4.18 0 001.117-1.417c.275-.563.413-1.21.413-1.941 0-.86-.22-1.576-.661-2.145-.441-.569-1.11-.992-2.005-1.27.372-.122.704-.274.997-.457.293-.183.54-.407.744-.671.203-.264.358-.574.465-.93.107-.356.16-.767.16-1.235 0-.535-.105-1.033-.315-1.494a3.521 3.521 0 00-.904-1.204 4.277 4.277 0 00-1.421-.803c-.555-.193-1.177-.29-1.866-.29z",
    fill: "currentColor"
  }),
  viewBox: '0 0 23 22'
});

var LoadingState = function LoadingState(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'purple.500' : _ref$color,
      props = _objectWithoutPropertiesLoose(_ref, ["color"]);

  return React__default.createElement(Flex, Object.assign({
    w: "100%",
    h: "100%",
    justify: "center",
    align: "center"
  }, props), React__default.createElement(Spinner, {
    color: color,
    size: "xl"
  }));
};

var MetaBox = function MetaBox(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return React__default.createElement(Box, null, React__default.createElement(Box, {
    bg: "purpleBoxLight",
    borderTopRadius: "lg",
    p: 4
  }, React__default.createElement(Text, {
    fontFamily: "mono",
    fontSize: "sm",
    fontWeight: "bold",
    color: "blueLight",
    as: "div"
  }, title)), React__default.createElement(Box, {
    bg: "purpleBoxDark",
    borderBottomRadius: "lg",
    p: 6
  }, children));
};

var MetaTag = /*#__PURE__*/React__default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(Tag, Object.assign({
    fontFamily: "body",
    fontSize: "sm",
    fontWeight: "bold",
    backgroundColor: "purpleTag",
    color: "white",
    ref: ref
  }, props), children);
});

var colors = /*#__PURE__*/_extends({}, theme$1.colors, {
  diamond: '#40e8ec',
  platinum: '#81b6e3',
  gold: '#d0a757',
  silver: '#b0b0b0',
  bronze: '#a97142',
  offwhite: '#F6F8F9',
  blue20: 'rgba(79, 105, 205, 0.2)',
  purple80: 'rgba(70, 20, 100, 0.8)',
  dark: '#1B0D2A',
  purpleBoxDark: '#261943',
  purpleBoxLight: '#392373',
  purpleTag: '#40347C',
  purpleTag30: 'rgba(64, 52, 124, 0.3)',
  purpleTag70: 'rgba(64, 52, 124, 0.7)',
  blueLight: '#A5B9F6',
  cyanText: '#79F8FB',
  discord: '#7289da',
  discordDark: '#5d6eb3',
  borderPurple: '#5946BC',
  cyan: {
    50: '#dbffff',
    100: '#b1fcfe',
    200: '#83f9fb',
    300: '#57f6fa',
    400: '#34f2f7',
    500: '#26d9de',
    600: '#15a9ad',
    700: '#04797c',
    800: '#00494b',
    900: '#001a1b'
  },
  purple: {
    50: '#eee7ff',
    100: '#c8bafc',
    200: '#a48df3',
    300: '#7f60ed',
    400: '#5a32e6',
    500: '#4119cd',
    600: '#3112a0',
    700: '#230d74',
    800: '#150747',
    900: '#07021d'
  },
  brightIdOrange: {
    50: '#ffffff',
    100: '#ffffff',
    200: '#ffebdf',
    300: '#ffc7b1',
    400: '#fda382',
    500: '#fb8a61',
    600: '#f85a20',
    700: '#ae3204',
    800: '#4d1300',
    900: '#1f0400'
  }
});

var textStyles = {
  caption: {
    fontFamily: 'mono',
    fontSize: 'sm',
    color: 'blueLight',
    textTransform: 'uppercase'
  }
};

var theme = /*#__PURE__*/extendTheme({
  styles: {
    global: {
      '#__next': {
        background: 'dark',
        color: 'white',
        minHeight: '100vh',
        option: {
          background: 'dark',
          color: 'white'
        }
      }
    }
  },
  sizes: {
    container: {
      xl: '85rem'
    }
  },
  colors: colors,
  textStyles: textStyles,
  fonts: {
    body: '"IBM Plex Sans", sans-serif',
    mono: '"IBM Plex Mono", monospace',
    heading: '"Press Start 2P", sans-serif'
  }
});

var SelectComponents = components;
var selectStyles = {
  menuPortal: function menuPortal(styles) {
    return _extends({}, styles, {
      borderRadius: theme.radii.md
    });
  },
  menu: function menu(styles) {
    return _extends({}, styles, {
      background: theme.colors.dark,
      minWidth: '15rem',
      border: "2px solid " + theme.colors.borderPurple
    });
  },
  menuList: function menuList(styles) {
    return _extends({}, styles, {
      padding: 0
    });
  },
  noOptionsMessage: function noOptionsMessage(styles) {
    return _extends({}, styles, {
      color: theme.colors.white
    });
  },
  input: function input(styles) {
    return _extends({}, styles, {
      color: theme.colors.white
    });
  },
  group: function group(styles) {
    return _extends({}, styles, {
      paddingTop: 0,
      paddingBottom: 0
    });
  },
  groupHeading: function groupHeading(styles) {
    return _extends({}, styles, {
      color: theme.colors.white,
      background: theme.colors.purple[400],
      paddingTop: theme.space['3'],
      paddingBottom: theme.space['3'],
      position: 'sticky',
      top: 0
    });
  },
  option: function option(styles) {
    return _extends({}, styles, {
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: theme.colors.whiteAlpha[100],
        color: theme.colors.white
      }
    });
  },
  control: function control(styles) {
    return _extends({}, styles, {
      minWidth: '6rem',
      background: theme.colors.dark,
      border: "2px solid " + theme.colors.borderPurple,
      ':hover': {
        borderColor: theme.colors.white
      }
    });
  },
  multiValue: function multiValue(styles) {
    return _extends({}, styles, {
      background: theme.colors.purpleTag,
      color: theme.colors.white
    });
  },
  multiValueLabel: function multiValueLabel(styles) {
    return _extends({}, styles, {
      background: theme.colors.purpleTag,
      color: theme.colors.white
    });
  },
  multiValueRemove: function multiValueRemove(styles) {
    return _extends({}, styles, {
      color: theme.colors.white,
      cursor: 'pointer',
      ':hover': {
        color: theme.colors.blueLight
      }
    });
  },
  clearIndicator: function clearIndicator(styles) {
    return _extends({}, styles, {
      color: theme.colors.white,
      cursor: 'pointer',
      ':hover': {
        color: theme.colors.blueLight
      }
    });
  },
  dropdownIndicator: function dropdownIndicator(styles) {
    return _extends({}, styles, {
      color: theme.colors.white,
      cursor: 'pointer',
      ':hover': {
        color: theme.colors.blueLight
      }
    });
  }
};
var SelectSearch = function SelectSearch(props) {
  return React__default.createElement(Select, Object.assign({
    styles: selectStyles
  }, props));
};

var TimezoneOptions = /*#__PURE__*/Object.entries(i18nTimezones).map(function (zone) {
  var now = spacetime.now()["goto"](zone[0]);
  var tz = now.timezone();
  var tzStrings = informal.display(zone[0]);
  var abbrev = zone[0];
  var altName = zone[0];

  if (tzStrings && tzStrings.standard) {
    abbrev = now.isDST() && tzStrings.daylight ? tzStrings.daylight.abbrev : tzStrings.standard.abbrev;
    altName = now.isDST() && tzStrings.daylight ? tzStrings.daylight.name : tzStrings.standard.name;
  }

  var min = tz.current.offset * 60;
  var hr = (min / 60 ^ 0) + ":" + (min % 60 === 0 ? '00' : Math.abs(min % 60));
  var prefix = "(GMT" + (hr.includes('-') ? hr : "+" + hr) + ") " + zone[1];
  var label = prefix + " " + (abbrev.length < 5 ? "(" + abbrev + ")" : '');
  return {
    value: zone[0],
    title: zone[1],
    label: label,
    offset: tz.current.offset,
    abbrev: abbrev,
    altName: altName
  };
}).sort(function (a, b) {
  return a.offset < b.offset ? -1 : 1;
});
var selectStyles$1 = {
  menu: function menu(styles) {
    return _extends({}, styles, {
      background: theme.colors.dark
    });
  },
  input: function input(styles) {
    return _extends({}, styles, {
      color: theme.colors.white
    });
  },
  option: function option(styles) {
    return _extends({}, styles, {
      background: theme.colors.dark,
      ':hover': {
        backgroundColor: theme.colors.purpleTag,
        color: theme.colors.white
      }
    });
  },
  control: function control(styles) {
    return _extends({}, styles, {
      background: theme.colors.dark,
      border: theme.colors.dark
    });
  },
  singleValue: function singleValue(styles) {
    return _extends({}, styles, {
      color: theme.colors.white
    });
  },
  dropdownIndicator: function dropdownIndicator(styles) {
    return _extends({}, styles, {
      color: theme.colors.white,
      cursor: 'pointer',
      ':hover': {
        color: theme.colors.blueLight
      }
    });
  }
};
var filterTimezones = function filterTimezones(searchText, filteredTimezones) {
  return function (_ref) {
    var value = _ref.value,
        title = _ref.title,
        label = _ref.label,
        abbrev = _ref.abbrev,
        altName = _ref.altName;
    return value.toLowerCase().includes(searchText) || title.toLowerCase().includes(searchText) || label.toLowerCase().includes(searchText) || abbrev.toLowerCase().includes(searchText) || altName.toLowerCase().includes(searchText) || filteredTimezones.includes(value);
  };
};
var getTimezonesFor = function getTimezonesFor(searchText) {
  return cityTimezones.findFromCityStateProvince(searchText).map(function (_ref2) {
    var timezone = _ref2.timezone;
    return timezone;
  });
};
var SelectTimeZone = function SelectTimeZone(_ref3) {
  var props = _extends({}, _ref3);

  var _useState = useState(TimezoneOptions),
      options = _useState[0],
      setOptions = _useState[1];

  var onInputChange = useCallback(function (value) {
    if (!value) {
      setOptions(TimezoneOptions);
    } else {
      var searchText = value.toLowerCase().trim();
      var filteredTimezones = getTimezonesFor(searchText);
      setOptions(TimezoneOptions.filter(filterTimezones(searchText, filteredTimezones)));
    }
  }, []);
  return React__default.createElement(TimezoneSelect, Object.assign({
    styles: selectStyles$1,
    filterOption: null,
    onInputChange: onInputChange,
    timezones: options.reduce(function (t, _ref4) {
      var _extends2;

      var value = _ref4.value,
          title = _ref4.title;
      return _extends({}, t, (_extends2 = {}, _extends2[value] = title, _extends2));
    }, {})
  }, props));
};

var MetaSelect = function MetaSelect(props) {
  return React__default.createElement(Select$1, Object.assign({
    textTransform: "uppercase",
    maxW: "48",
    bg: "dark",
    iconColor: "purple.400",
    iconSize: "xs",
    icon: React__default.createElement(DropDownIcon, {
      boxSize: 2
    }),
    borderColor: "borderPurple",
    borderWidth: "2px",
    borderRadius: "4px"
  }, props));
};
var FilterTag = function FilterTag(_ref) {
  var label = _ref.label,
      onRemove = _ref.onRemove;
  var tagSize = useBreakpointValue({
    base: 'md',
    md: 'lg'
  });
  return React__default.createElement(MetaTag, {
    backgroundColor: "black",
    size: tagSize,
    fontSize: {
      base: 'sm',
      md: 'md'
    },
    borderRadius: "1rem",
    py: "1",
    px: "4",
    fontWeight: "normal"
  }, label, React__default.createElement(IconButton, {
    ml: "3",
    minW: "4",
    variant: "unstyled",
    size: "xs",
    color: "silver",
    icon: React__default.createElement(CloseIcon, null),
    _hover: {
      color: 'white'
    },
    "aria-label": "Remove filter " + label,
    onClick: onRemove
  }));
};

var SelectedTag = function SelectedTag(props) {
  return React__default.createElement(Flex, Object.assign({
    color: "black",
    bg: "#E839B7",
    borderRadius: "2px",
    justify: "center",
    align: "center",
    px: "1",
    ml: "2",
    fontSize: "sm",
    fontWeight: "bold"
  }, props));
};

var SelectOption = function SelectOption(props) {
  var isSelected = props.isSelected,
      optionValue = props.data.value,
      _props$selectProps = props.selectProps,
      onChange = _props$selectProps.onChange,
      selectValue = _props$selectProps.value;
  var clearValue = useCallback(function () {
    if (onChange) {
      var newSelectValue = selectValue ? selectValue.filter(function (_ref2) {
        var value = _ref2.value;
        return !(value === optionValue);
      }) : [];
      onChange(newSelectValue, {
        action: 'remove-value',
        removedValue: {
          optionValue: optionValue
        }
      });
    }
  }, [optionValue, selectValue, onChange]);
  return React__default.createElement(Flex, {
    fontWeight: "normal",
    w: "100%",
    justify: "space-between",
    cursor: "pointer",
    align: "center",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "borderPurple",
    _hover: {
      backgroundColor: 'whiteAlpha.100'
    },
    onClick: isSelected ? clearValue : undefined,
    css: {
      div: {
        cursor: 'pointer'
      }
    }
  }, React__default.createElement(SelectComponents.Option, Object.assign({}, props)), isSelected && React__default.createElement(CheckIcon, {
    color: "white",
    mx: "2"
  }));
};

var ValueDisplay = function ValueDisplay(_ref3) {
  var menuIsOpen = _ref3.menuIsOpen,
      tagLabel = _ref3.tagLabel,
      title = _ref3.title;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(Text, {
    ml: "2",
    textTransform: "uppercase"
  }, title), tagLabel ? React__default.createElement(SelectedTag, null, tagLabel) : null, React__default.createElement(DropDownIcon, {
    boxSize: 3,
    color: "purple.400",
    mx: "2",
    transition: "transform 0.1s",
    transform: menuIsOpen ? 'rotate(180deg) translateY(10%)' : 'none'
  }));
};

var SelectValueContainer = function SelectValueContainer(props) {
  var _props$selectProps2 = props.selectProps,
      value = _props$selectProps2.value,
      title = _props$selectProps2.title,
      menuIsOpen = _props$selectProps2.menuIsOpen;
  var tagLabel = '';

  if (Array.isArray(value) && value.length > 0) {
    tagLabel = value.length.toString();
  }

  if (value && !Array.isArray(value)) {
    tagLabel = title.toLowerCase() === 'availability' ? ">" + value.value : value.value;
  }

  return React__default.createElement(Flex, {
    mr: "-1rem",
    py: "1",
    align: "center",
    cursor: "pointer"
  }, React__default.createElement(ValueDisplay, {
    title: title,
    menuIsOpen: menuIsOpen,
    tagLabel: tagLabel
  }), React__default.createElement(SelectComponents.ValueContainer, Object.assign({}, props)));
};

var SelectControl = function SelectControl(props) {
  var hasValue = props.hasValue,
      _props$selectProps3 = props.selectProps,
      menuIsOpen = _props$selectProps3.menuIsOpen,
      onMenuClose = _props$selectProps3.onMenuClose,
      onMenuOpen = _props$selectProps3.onMenuOpen,
      showSearch = _props$selectProps3.showSearch;
  var buttonRef = useRef(null);
  var onClick = useCallback(function () {
    if (menuIsOpen) {
      onMenuClose == null ? void 0 : onMenuClose();
    } else {
      onMenuOpen == null ? void 0 : onMenuOpen();

      if (!showSearch && buttonRef.current) {
        buttonRef.current.focus();
      }
    }
  }, [menuIsOpen, onMenuOpen, onMenuClose, showSearch]);
  return React__default.createElement(Button, {
    fontWeight: "normal",
    variant: "unstyled",
    boxShadow: menuIsOpen ? '0px 10px 20px rgba(0, 0, 0, 0.4)' : 'none',
    cursor: "pointer",
    ref: buttonRef,
    onClick: onClick,
    onTouchEnd: onClick,
    align: "center",
    borderTopRadius: "4px",
    borderBottomRadius: menuIsOpen ? '0' : '4px',
    borderColor: "borderPurple",
    borderStyle: "solid",
    borderWidth: hasValue && !menuIsOpen ? '4px' : '2px',
    borderBottom: menuIsOpen ? '0' : undefined,
    height: "auto",
    bg: "dark",
    _hover: {
      borderColor: menuIsOpen ? 'borderPurple' : 'whiteAlpha.800'
    },
    transform: menuIsOpen ? 'translateY(-1px)' : undefined,
    transition: "transform 0s"
  }, React__default.createElement(SelectComponents.Control, Object.assign({}, props)));
};

var SelectMenu = function SelectMenu(props) {
  var _props$selectProps4 = props.selectProps,
      onInputChange = _props$selectProps4.onInputChange,
      title = _props$selectProps4.title,
      value = _props$selectProps4.value,
      placement = _props$selectProps4.placement,
      showSearch = _props$selectProps4.showSearch,
      inputValue = _props$selectProps4.inputValue;

  var _useState = useState(inputValue || ''),
      input = _useState[0],
      setInput = _useState[1];

  var tagLabel = '';

  if (Array.isArray(value) && value.length > 0) {
    tagLabel = value.length.toString();
  }

  if (value && !Array.isArray(value)) {
    tagLabel = title.toLowerCase() === 'availability' ? ">" + value.value : value.value;
  }

  var placeRight = placement === 'right';
  return React__default.createElement(Flex, {
    position: "absolute",
    top: "calc(100% - 1px)",
    minWidth: "15rem",
    left: placeRight ? 'auto' : '0',
    right: placeRight ? '0' : 'auto',
    zIndex: "1",
    direction: "column"
  }, React__default.createElement(Flex, {
    w: "100%",
    direction: placeRight ? 'row-reverse' : 'row'
  }, React__default.createElement(Flex, {
    height: "3",
    p: "0",
    bg: "dark",
    borderLeftColor: "borderPurple",
    borderLeftStyle: "solid",
    borderLeftWidth: "2px",
    borderRightColor: "borderPurple",
    borderRightStyle: "solid",
    borderRightWidth: "2px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)"
  }, React__default.createElement(Flex, {
    visibility: "hidden"
  }, React__default.createElement(ValueDisplay, {
    title: title,
    tagLabel: tagLabel,
    menuIsOpen: true
  }))), React__default.createElement(Flex, {
    borderBottomColor: "borderPurple",
    borderBottomStyle: "solid",
    borderBottomWidth: "2px",
    flex: 1,
    pointerEvents: "none"
  })), React__default.createElement(Flex, {
    w: "100%",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
    bg: "dark",
    borderWidth: "2px",
    borderColor: "borderPurple",
    borderStyle: "solid",
    borderBottomWidth: showSearch ? '2px' : '1px',
    borderTop: "none",
    borderBottomRadius: "4px",
    direction: "column"
  }, showSearch && React__default.createElement(Flex, {
    w: "100%",
    borderBottomWidth: "1px",
    borderBottomColor: "borderPurple",
    borderBottomStyle: "solid"
  }, React__default.createElement(Input, {
    autoFocus: true,
    width: "calc(100% - 2rem)",
    placeholder: "Search...",
    _placeholder: {
      color: 'whiteAlpha.500'
    },
    borderRadius: "0",
    borderWidth: "2px",
    mx: "4",
    my: "2",
    borderColor: "borderPurple",
    onChange: function onChange(e) {
      var val = e.target.value;
      setInput(val);

      if (onInputChange) {
        onInputChange(val, {
          action: 'input-change'
        });
      }
    },
    value: input
  })), React__default.createElement(SelectComponents.Menu, Object.assign({}, props))));
};

var SelectContainer = function SelectContainer(props) {
  var onMenuClose = props.selectProps.onMenuClose; // const onOutsideFocus = useCallback(() => {
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

  return React__default.createElement(Flex, {
    position: "relative",
    onBlur: onMenuClose
  }, React__default.createElement(SelectComponents.SelectContainer, Object.assign({}, props, {
    innerProps: {
      onKeyDown: function onKeyDown() {
        return undefined;
      }
    }
  })));
};

var MetaFilterSelectSearch = function MetaFilterSelectSearch(_ref4) {
  var defaultOptions = _ref4.options,
      _ref4$showSearch = _ref4.showSearch,
      showSearch = _ref4$showSearch === void 0 ? false : _ref4$showSearch,
      _ref4$isTimezone = _ref4.isTimezone,
      isTimezone = _ref4$isTimezone === void 0 ? false : _ref4$isTimezone,
      props = _objectWithoutPropertiesLoose(_ref4, ["options", "showSearch", "isTimezone"]);

  var _useState2 = useState(defaultOptions),
      options = _useState2[0],
      setOptions = _useState2[1];

  var onTimezoneInputChange = useCallback(function (value) {
    if (!value) {
      setOptions(defaultOptions);
    } else {
      var searchText = value.toLowerCase().trim();
      var filteredTimezones = getTimezonesFor(searchText);
      setOptions(defaultOptions == null ? void 0 : defaultOptions.filter(filterTimezones(searchText, filteredTimezones)));
    }
  }, [defaultOptions]);
  return React__default.createElement(SelectSearch, Object.assign({
    isMulti: true,
    closeMenuOnSelect: false,
    placeholder: " ",
    components: {
      MultiValueContainer: function MultiValueContainer() {
        return null;
      },
      SingleValue: function SingleValue() {
        return null;
      },
      IndicatorSeparator: function IndicatorSeparator() {
        return null;
      },
      DropdownIndicator: function DropdownIndicator() {
        return null;
      },
      IndicatorsContainer: function IndicatorsContainer() {
        return null;
      },
      Input: function Input() {
        return null;
      },
      ValueContainer: SelectValueContainer,
      Option: SelectOption,
      Menu: SelectMenu,
      Control: SelectControl,
      SelectContainer: SelectContainer
    },
    isClearable: false,
    hideSelectedOptions: false,
    showSearch: showSearch,
    options: options,
    filterOption: isTimezone ? null : undefined,
    onInputChange: isTimezone ? onTimezoneInputChange : undefined
  }, props));
};

var MetaHeading = function MetaHeading(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(Heading, Object.assign({
    size: "lg",
    textAlign: "center",
    fontWeight: "normal"
  }, props), children);
};

var MetaTileHeader = function MetaTileHeader(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(VStack, Object.assign({
    w: "100%",
    spacing: "6",
    align: "stretch",
    mb: 6,
    position: "relative"
  }, props), children);
};
var MetaTileBody = function MetaTileBody(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  return React__default.createElement(VStack, Object.assign({
    w: "100%",
    spacing: "6",
    align: "stretch"
  }, props), children);
};
var MetaTile = function MetaTile(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["children"]);

  return React__default.createElement(Flex, Object.assign({
    direction: "column",
    bg: "whiteAlpha.200",
    style: {
      backdropFilter: 'blur(7px)'
    },
    rounded: "lg",
    p: 6,
    maxW: "25rem" // (2 / 3.5) = ~0.571 aspect ratio desired
    ,
    w: "100%",
    align: "stretch",
    position: "relative",
    overflow: "hidden",
    justify: "space-between"
  }, props), children);
};

var ResponsiveText = function ResponsiveText(_ref) {
  var content = _ref.content,
      props = _objectWithoutPropertiesLoose(_ref, ["content"]);

  var value = useBreakpointValue(content);
  return React__default.createElement(Text, Object.assign({}, props), value);
};

var SVG = /*#__PURE__*/chakra('svg');

var H1 = function H1(_ref) {
  var children = _ref.children;
  return React__default.createElement(Text, {
    fontFamily: "body",
    fontSize: "2xl",
    fontWeight: "bold",
    mb: 4
  }, children);
};

var P = function P(_ref2) {
  var children = _ref2.children;
  return React__default.createElement(Text, null, children);
};

export { BoxedNextImage, BrightIdIcon, ConfirmModal, DropDownIcon, FilterTag, H1, Icon3box, LoadingState, MetaBox, MetaButton, MetaFilterSelectSearch, MetaHeading, MetaSelect, MetaTag, theme as MetaTheme, MetaTile, MetaTileBody, MetaTileHeader, P, ResponsiveText, SVG, SelectComponents, SelectSearch, SelectTimeZone, TimezoneOptions, filterTimezones, getTimezonesFor, selectStyles };
//# sourceMappingURL=ds.esm.js.map
