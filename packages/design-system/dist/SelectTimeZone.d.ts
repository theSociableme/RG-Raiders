import React from 'react';
import { TimezoneSelectProps } from 'react-timezone-select';
export declare type TimezoneType = {
    value: string;
    title: string;
    label: string;
    offset: number;
    abbrev: string;
    altName: string;
};
export declare const TimezoneOptions: TimezoneType[];
export declare const filterTimezones: (searchText: string, filteredTimezones: string[]) => ({ value, title, label, abbrev, altName }: TimezoneType) => boolean;
export declare const getTimezonesFor: (searchText: string) => string[];
export declare const SelectTimeZone: React.FC<TimezoneSelectProps>;
//# sourceMappingURL=SelectTimeZone.d.ts.map