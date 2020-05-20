import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { Whitelisted } from "./Whitelisted";
export declare class WhitelistedFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: TransactionOverrides): Promise<Whitelisted>;
    getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): Whitelisted;
    connect(signer: Signer): WhitelistedFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): Whitelisted;
}
//# sourceMappingURL=WhitelistedFactory.d.ts.map