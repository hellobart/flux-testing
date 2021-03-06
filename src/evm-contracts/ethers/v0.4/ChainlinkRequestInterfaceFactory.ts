/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { ChainlinkRequestInterface } from "./ChainlinkRequestInterface";

export class ChainlinkRequestInterfaceFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkRequestInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainlinkRequestInterface;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "payment",
        type: "uint256"
      },
      {
        name: "id",
        type: "bytes32"
      },
      {
        name: "callbackAddress",
        type: "address"
      },
      {
        name: "callbackFunctionId",
        type: "bytes4"
      },
      {
        name: "nonce",
        type: "uint256"
      },
      {
        name: "version",
        type: "uint256"
      },
      {
        name: "data",
        type: "bytes"
      }
    ],
    name: "oracleRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "requestId",
        type: "bytes32"
      },
      {
        name: "payment",
        type: "uint256"
      },
      {
        name: "callbackFunctionId",
        type: "bytes4"
      },
      {
        name: "expiration",
        type: "uint256"
      }
    ],
    name: "cancelOracleRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];
