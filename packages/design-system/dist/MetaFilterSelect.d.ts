import { SelectProps } from '@chakra-ui/react';
import React from 'react';
import { SelectSearch } from './SelectSearch';
export declare const MetaSelect: React.FC<SelectProps>;
declare type FilterTagProps = {
    label: string;
    onRemove: () => void;
};
export declare const FilterTag: React.FC<FilterTagProps>;
export declare const MetaFilterSelectSearch: React.FC<React.ComponentProps<typeof SelectSearch> & {
    showSearch?: boolean;
    isTimezone?: boolean;
}>;
export {};
//# sourceMappingURL=MetaFilterSelect.d.ts.map