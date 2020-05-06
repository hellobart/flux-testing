import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { VRFTestHelper } from "./VRFTestHelper";
export declare class VRFTestHelperFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(): Promise<VRFTestHelper>;
    getDeployTransaction(): UnsignedTransaction;
    attach(address: string): VRFTestHelper;
    connect(signer: Signer): VRFTestHelperFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): VRFTestHelper;
}
//# sourceMappingURL=VRFTestHelperFactory.d.ts.map