/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { Whitelisted } from "./Whitelisted";

export class WhitelistedFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<Whitelisted> {
    return super.deploy(overrides) as Promise<Whitelisted>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): Whitelisted {
    return super.attach(address) as Whitelisted;
  }
  connect(signer: Signer): WhitelistedFactory {
    return super.connect(signer) as WhitelistedFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Whitelisted {
    return new Contract(address, _abi, signerOrProvider) as Whitelisted;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "AddedToWhitelist",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "OwnershipTransferRequested",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "RemovedFromWhitelist",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "WhitelistDisabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "WhitelistEnabled",
    type: "event"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "addToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "disableWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "enableWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "removeFromWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "whitelistEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "whitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556001805460ff60a01b1916600160a01b17905561083f806100456000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063cdfb2b4e11610076578063d936547e1161005b578063d936547e14610142578063e43252d714610175578063f2fde38b146101a8576100a3565b8063cdfb2b4e14610132578063d6b0f4841461013a576100a3565b806351fb012d146100a857806379ba5097146100c45780638ab1d681146100ce5780638da5cb5b14610101575b600080fd5b6100b06101db565b604080519115158252519081900360200190f35b6100cc6101fc565b005b6100cc600480360360208110156100e457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166102fe565b610109610407565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100cc610423565b6100cc610513565b6100b06004803603602081101561015857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166105ec565b6100cc6004803603602081101561018b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610601565b6100cc600480360360208110156101be57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661070d565b60015474010000000000000000000000000000000000000000900460ff1681565b60015473ffffffffffffffffffffffffffffffffffffffff16331461028257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e657200000000000000000000604482015290519081900360640190fd5b60008054337fffffffffffffffffffffffff00000000000000000000000000000000000000008083168217845560018054909116905560405173ffffffffffffffffffffffffffffffffffffffff90921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b60005473ffffffffffffffffffffffffffffffffffffffff16331461038457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055815192835290517fcdd2e9b91a56913d370075169cefa1602ba36be5301664f752192bb1709df7579281900390910190a150565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104a957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040517fe5e5846f783279948f6ec5faad38318cde86fe5be7ea845ede56d62f16c3743490600090a1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461059957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040517f212c6e1d3045c9581ef0adf2504dbb1d137f52f38162ccf77a16c69d14eba5c390600090a1565b60026020526000908152604090205460ff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461068757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055815192835290517fa850ae9193f515cbae8d35e8925bd2be26627fc91bce650b8652ed254e9cab039281900390910190a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461079357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a35056fea2646970667358221220f7b8ec964d269112e2817e89eac9dcf42dbeb821f55031d476aa049ec1fff4a164736f6c63430006020033";
