import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { VRFRequestIDBaseTestHelper } from "./VRFRequestIDBaseTestHelper";
export declare class VRFRequestIDBaseTestHelperFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(): Promise<VRFRequestIDBaseTestHelper>;
    getDeployTransaction(): UnsignedTransaction;
    attach(address: string): VRFRequestIDBaseTestHelper;
    connect(signer: Signer): VRFRequestIDBaseTestHelperFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): VRFRequestIDBaseTestHelper;
}
//# sourceMappingURL=VRFRequestIDBaseTestHelperFactory.d.ts.map