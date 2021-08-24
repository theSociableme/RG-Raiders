import { CommandMessage } from '@typeit/discord';
declare type SetEthAddressArgs = {
    ethAddress: string;
    force: string;
};
export declare abstract class SetEthAddress {
    setAddress(message: CommandMessage<SetEthAddressArgs>): Promise<void>;
}
export {};
//# sourceMappingURL=setEthAddress.d.ts.map