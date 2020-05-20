/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ChainlinkClient } from "./ChainlinkClient";

export class ChainlinkClientFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ChainlinkClient> {
    return super.deploy(overrides) as Promise<ChainlinkClient>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ChainlinkClient {
    return super.attach(address) as ChainlinkClient;
  }
  connect(signer: Signer): ChainlinkClientFactory {
    return super.connect(signer) as ChainlinkClientFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkClient {
    return new Contract(address, _abi, signerOrProvider) as ChainlinkClient;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkRequested",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkFulfilled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkCancelled",
    type: "event"
  }
];

const _bytecode =
  "0x60806040526001600455348015601457600080fd5b5060358060226000396000f3fe6080604052600080fdfea165627a7a723058203688fadbc7f7bc9be6eb70516a1a787720ab6defc0abac01aacfac5dedf78c5c0029";
