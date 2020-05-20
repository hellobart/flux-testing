import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";
import { TransactionOverrides } from ".";
import { MockAggregator } from "./MockAggregator";
export declare class MockAggregatorFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_decimals: BigNumberish, _initialAnswer: BigNumberish, overrides?: TransactionOverrides): Promise<MockAggregator>;
    getDeployTransaction(_decimals: BigNumberish, _initialAnswer: BigNumberish, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): MockAggregator;
    connect(signer: Signer): MockAggregatorFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockAggregator;
}
//# sourceMappingURL=MockAggregatorFactory.d.ts.map