/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { VRFConsumerBase } from "./VRFConsumerBase";

export class VRFConsumerBaseFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFConsumerBase {
    return new Contract(address, _abi, signerOrProvider) as VRFConsumerBase;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vrfCoordinator",
        type: "address"
      },
      {
        internalType: "address",
        name: "_link",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "randomness",
        type: "uint256"
      }
    ],
    name: "fulfillRandomness",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_seed",
        type: "uint256"
      }
    ],
    name: "requestRandomness",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
