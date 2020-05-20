import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { WhitelistedConversionProxy } from "./WhitelistedConversionProxy";
export declare class WhitelistedConversionProxyFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_from: string, _to: string, overrides?: TransactionOverrides): Promise<WhitelistedConversionProxy>;
    getDeployTransaction(_from: string, _to: string, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): WhitelistedConversionProxy;
    connect(signer: Signer): WhitelistedConversionProxyFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): WhitelistedConversionProxy;
}
//# sourceMappingURL=WhitelistedConversionProxyFactory.d.ts.map