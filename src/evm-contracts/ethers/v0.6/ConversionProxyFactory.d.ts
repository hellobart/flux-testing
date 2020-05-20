import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { ConversionProxy } from "./ConversionProxy";
export declare class ConversionProxyFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_from: string, _to: string, overrides?: TransactionOverrides): Promise<ConversionProxy>;
    getDeployTransaction(_from: string, _to: string, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): ConversionProxy;
    connect(signer: Signer): ConversionProxyFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): ConversionProxy;
}
//# sourceMappingURL=ConversionProxyFactory.d.ts.map