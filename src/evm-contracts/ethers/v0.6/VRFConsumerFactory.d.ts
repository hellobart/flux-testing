import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { VRFConsumer } from "./VRFConsumer";
export declare class VRFConsumerFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_vrfCoordinator: string, _link: string): Promise<VRFConsumer>;
    getDeployTransaction(_vrfCoordinator: string, _link: string): UnsignedTransaction;
    attach(address: string): VRFConsumer;
    connect(signer: Signer): VRFConsumerFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): VRFConsumer;
}
//# sourceMappingURL=VRFConsumerFactory.d.ts.map