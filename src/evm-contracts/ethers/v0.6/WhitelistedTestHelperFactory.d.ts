import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";
import { TransactionOverrides } from ".";
import { WhitelistedTestHelper } from "./WhitelistedTestHelper";
export declare class WhitelistedTestHelperFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_value: BigNumberish, overrides?: TransactionOverrides): Promise<WhitelistedTestHelper>;
    getDeployTransaction(_value: BigNumberish, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): WhitelistedTestHelper;
    connect(signer: Signer): WhitelistedTestHelperFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): WhitelistedTestHelper;
}
//# sourceMappingURL=WhitelistedTestHelperFactory.d.ts.map