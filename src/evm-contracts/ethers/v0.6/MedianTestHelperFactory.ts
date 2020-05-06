/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { MedianTestHelper } from "./MedianTestHelper";

export class MedianTestHelperFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<MedianTestHelper> {
    return super.deploy() as Promise<MedianTestHelper>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): MedianTestHelper {
    return super.attach(address) as MedianTestHelper;
  }
  connect(signer: Signer): MedianTestHelperFactory {
    return super.connect(signer) as MedianTestHelperFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MedianTestHelper {
    return new Contract(address, _abi, signerOrProvider) as MedianTestHelper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int256[]",
        name: "list",
        type: "int256[]"
      }
    ],
    name: "publicGet",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "int256[]",
        name: "list",
        type: "int256[]"
      },
      {
        internalType: "uint256",
        name: "k1",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "k2",
        type: "uint256"
      }
    ],
    name: "publicQuickselectTwo",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      },
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610cde806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630fb75cff1461003b578063115efb2014610122575b600080fd5b6101056004803603606081101561005157600080fd5b810190808035906020019064010000000081111561006e57600080fd5b82018360208201111561008057600080fd5b803590602001918460208302840111640100000000831117156100a257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291905050506101ee565b604051808381526020018281526020019250505060405180910390f35b6101d86004803603602081101561013857600080fd5b810190808035906020019064010000000081111561015557600080fd5b82018360208201111561016757600080fd5b8035906020019184602083028401116401000000008311171561018957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050919291929050505061020f565b6040518082815260200191505060405180910390f35b60008061020385600060018851038787610221565b91509150935093915050565b600061021a8261030e565b9050919050565b60008082841061023057600080fd5b8386111580156102405750848411155b61024957600080fd5b8286111580156102595750848311155b61026257600080fd5b5b600115610303576007868603101561028b576102828787878787610328565b91509150610304565b600061029888888861089c565b90508084116102a9578095506102fd565b848110156102bc576001810196506102fc565b8085111580156102cb57508381105b6102d157fe5b6102dd88888388610993565b92506102ee88600183018887610993565b915082829250925050610304565b5b50610263565b5b9550959350505050565b600061032161031c83610a2d565b610ab5565b9050919050565b60008060008660018701039050600088600089018151811061034657fe5b60200260200101519050600082600110610380577f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610398565b8960018a018151811061038f57fe5b60200260200101515b90506000836002106103ca577f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6103e2565b8a60028b01815181106103d957fe5b60200260200101515b9050600084600310610414577f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61042c565b8b60038c018151811061042357fe5b60200260200101515b905060008560041061045e577f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610476565b8c60048d018151811061046d57fe5b60200260200101515b90506000866005106104a8577f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6104c0565b8d60058e01815181106104b757fe5b60200260200101515b90506000876006106104f2577f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61050a565b8e60068f018151811061050157fe5b60200260200101515b90508587131561051f57858780975081985050505b8385131561053257838580955081965050505b8183131561054557818380935081945050505b8487131561055857848780965081985050505b8386131561056b57838680955081975050505b8083131561057e57808380925081945050505b8486131561059157848680965081975050505b808213156105a457808280925081935050505b828713156105b757828780945081985050505b818613156105ca57818680935081975050505b808513156105dd57808580925081965050505b828613156105f057828680945081975050505b8084131561060357808480925081955050505b8285131561061657828580945081965050505b8184131561062957818480935081955050505b8284131561063c57828480945081955050505b60008e8d039050600081141561065457879a5061072e565b600181141561066557869a5061072d565b600281141561067657859a5061072c565b600381141561068757849a5061072b565b600481141561069857839a5061072a565b60058114156106a957829a50610729565b60068114156106ba57819a50610728565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f6b31206f7574206f6620626f756e64730000000000000000000000000000000081525060200191505060405180910390fd5b5b5b5b5b5b5b60008f8d0390508c8e1415610752578b8c9b509b5050505050505050505050610892565b6000811415610770578b899b509b5050505050505050505050610892565b600181141561078e578b889b509b5050505050505050505050610892565b60028114156107ac578b879b509b5050505050505050505050610892565b60038114156107ca578b869b509b5050505050505050505050610892565b60048114156107e8578b859b509b5050505050505050505050610892565b6005811415610806578b849b509b5050505050505050505050610892565b6006811415610824578b839b509b5050505050505050505050610892565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f6b32206f7574206f6620626f756e64730000000000000000000000000000000081525060200191505060405180910390fd5b9550959350505050565b600080846002848601816108ac57fe5b04815181106108b757fe5b602002602001015190506001840393506001830192505b60011561098a575b600184019350808585815181106108e957fe5b6020026020010151126108d6575b6001830392508085848151811061090a57fe5b6020026020010151136108f7578284101561097c5784838151811061092b57fe5b602002602001015185858151811061093f57fe5b602002602001015186868151811061095357fe5b6020026020010187868151811061096657fe5b6020026020010182815250828152505050610985565b8291505061098c565b6108ce565b505b9392505050565b6000818411156109a257600080fd5b828211156109af57600080fd5b5b82841015610a0e57600784840310156109e35760006109d28686868687610328565b809250819350505081915050610a25565b60006109f086868661089c565b9050808311610a0157809350610a08565b6001810194505b506109b0565b848481518110610a1a57fe5b602002602001015190505b949350505050565b6060808251604051908082528060200260200182016040528015610a605781602001602082028038833980820191505090505b50905060008090505b8351811015610aab57838181518110610a7e57fe5b6020026020010151828281518110610a9257fe5b6020026020010181815250508080600101915050610a69565b5080915050919050565b60008151600010610b2e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f6c697374206d757374206e6f7420626520656d7074790000000000000000000081525060200191505060405180910390fd5b600082519050600060028281610b4057fe5b049050600060028381610b4f57fe5b061415610b8a57600080610b6d866000600187036001870387610221565b8092508193505050610b7f8282610ba4565b945050505050610b9f565b610b9a8460006001850384610993565b925050505b919050565b6000806002808481610bb257fe5b0760028681610bbd57fe5b070181610bc657fe5b059050610bf0610bea60028681610bd957fe5b0560028681610be457fe5b05610bf9565b82610bf9565b91505092915050565b600080828401905060008312158015610c125750838112155b80610c285750600083128015610c2757508381125b5b610c7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610c886021913960400191505060405180910390fd5b809150509291505056fe5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f77a2646970667358221220bf317c844de1f2982518f02bae9435ed0b0cdb696cd45e7e41dafa7ceda70b6864736f6c63430006020033";