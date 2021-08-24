import { providers } from 'ethers';
export declare function signerHelper(provider: providers.Web3Provider, rawMessage: string): Promise<string>;
export declare function verifySignature(address: string, message: string, signature: string, provider: providers.BaseProvider): Promise<boolean>;
//# sourceMappingURL=ethereumHelper.d.ts.map