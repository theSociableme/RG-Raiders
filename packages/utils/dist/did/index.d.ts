import { providers } from 'ethers';
declare type Claim = {
    iat: Date;
    exp: Date;
    iss: string;
    aud: string;
    tid: string;
};
export declare function createToken(provider: providers.Web3Provider): Promise<string>;
export declare function verifyToken(token: string, provider: providers.JsonRpcProvider): Promise<Claim | null>;
export {};
//# sourceMappingURL=index.d.ts.map