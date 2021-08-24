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
/* istanbul ignore file */
import cityTimezones from 'city-timezones';
import React, { useCallback, useState } from 'react';
import TimezoneSelect from 'react-timezone-select';
import { i18nTimezones } from 'react-timezone-select/dist/index.js';
import spacetime from 'spacetime';
import informal from 'spacetime-informal';
import { theme } from './theme';
export const TimezoneOptions = Object.entries(i18nTimezones)
    .map((zone) => {
    const now = spacetime.now().goto(zone[0]);
    const tz = now.timezone();
    const tzStrings = informal.display(zone[0]);
    let abbrev = zone[0];
    let altName = zone[0];
    if (tzStrings && tzStrings.standard) {
        abbrev =
            now.isDST() && tzStrings.daylight
                ? tzStrings.daylight.abbrev
                : tzStrings.standard.abbrev;
        altName =
            now.isDST() && tzStrings.daylight
                ? tzStrings.daylight.name
                : tzStrings.standard.name;
    }
    const min = tz.current.offset * 60;
    const hr = `${(min / 60) ^ 0}:${min % 60 === 0 ? '00' : Math.abs(min % 60)}`;
    const prefix = `(GMT${hr.includes('-') ? hr : `+${hr}`}) ${zone[1]}`;
    const label = `${prefix} ${abbrev.length < 5 ? `(${abbrev})` : ''}`;
    return {
        value: zone[0],
        title: zone[1],
        label,
        offset: tz.current.offset,
        abbrev,
        altName,
    };
})
    .sort((a, b) => (a.offset < b.offset ? -1 : 1));
const selectStyles = {
    menu: (styles) => (Object.assign(Object.assign({}, styles), { background: theme.colors.dark })),
    input: (styles) => (Object.assign(Object.assign({}, styles), { color: theme.colors.white })),
    option: (styles) => (Object.assign(Object.assign({}, styles), { background: theme.colors.dark, ':hover': {
            backgroundColor: theme.colors.purpleTag,
            color: theme.colors.white,
        } })),
    control: (styles) => (Object.assign(Object.assign({}, styles), { background: theme.colors.dark, border: theme.colors.dark })),
    singleValue: (styles) => (Object.assign(Object.assign({}, styles), { color: theme.colors.white })),
    dropdownIndicator: (styles) => (Object.assign(Object.assign({}, styles), { color: theme.colors.white, cursor: 'pointer', ':hover': {
            color: theme.colors.blueLight,
        } })),
};
export const filterTimezones = (searchText, filteredTimezones) => ({ value, title, label, abbrev, altName }) => value.toLowerCase().includes(searchText) ||
    title.toLowerCase().includes(searchText) ||
    label.toLowerCase().includes(searchText) ||
    abbrev.toLowerCase().includes(searchText) ||
    altName.toLowerCase().includes(searchText) ||
    filteredTimezones.includes(value);
export const getTimezonesFor = (searchText) => cityTimezones
    .findFromCityStateProvince(searchText)
    .map(({ timezone }) => timezone);
export const SelectTimeZone = (_a) => {
    var props = __rest(_a, []);
    const [options, setOptions] = useState(TimezoneOptions);
    const onInputChange = useCallback((value) => {
        if (!value) {
            setOptions(TimezoneOptions);
        }
        else {
            const searchText = value.toLowerCase().trim();
            const filteredTimezones = getTimezonesFor(searchText);
            setOptions(TimezoneOptions.filter(filterTimezones(searchText, filteredTimezones)));
        }
    }, []);
    return (React.createElement(TimezoneSelect, Object.assign({ styles: selectStyles, filterOption: null, onInputChange: onInputChange, timezones: options.reduce((t, { value, title }) => (Object.assign(Object.assign({}, t), { [value]: title })), {}) }, props)));
};
//# sourceMappingURL=SelectTimeZone.js.map