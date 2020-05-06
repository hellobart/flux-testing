import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { VRFCoordinator } from "./VRFCoordinator";
export declare class VRFCoordinatorFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_link: string): Promise<VRFCoordinator>;
    getDeployTransaction(_link: string): UnsignedTransaction;
    attach(address: string): VRFCoordinator;
    connect(signer: Signer): VRFCoordinatorFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): VRFCoordinator;
}
//# sourceMappingURL=VRFCoordinatorFactory.d.ts.map