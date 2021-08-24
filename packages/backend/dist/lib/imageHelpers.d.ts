export declare type OptimizeImageParams = {
    ar?: string;
    fit?: 'clamp' | 'clip' | 'crop' | 'facearea' | 'fill' | 'fillmax' | 'max' | 'min' | 'scale';
    height?: number;
    width?: number;
};
export declare const optimizeImage: (url: string, opts?: OptimizeImageParams | undefined) => string;
//# sourceMappingURL=imageHelpers.d.ts.map