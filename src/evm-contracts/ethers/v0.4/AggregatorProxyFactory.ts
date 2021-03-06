/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { AggregatorProxy } from "./AggregatorProxy";

export class AggregatorProxyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _aggregator: string,
    overrides?: TransactionOverrides
  ): Promise<AggregatorProxy> {
    return super.deploy(_aggregator, overrides) as Promise<AggregatorProxy>;
  }
  getDeployTransaction(
    _aggregator: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_aggregator, overrides);
  }
  attach(address: string): AggregatorProxy {
    return super.attach(address) as AggregatorProxy;
  }
  connect(signer: Signer): AggregatorProxyFactory {
    return super.connect(signer) as AggregatorProxyFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AggregatorProxy {
    return new Contract(address, _abi, signerOrProvider) as AggregatorProxy;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "aggregator",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        name: "",
        type: "int256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "latestRound",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "latestTimestamp",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "destroy",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_roundId",
        type: "uint256"
      }
    ],
    name: "getAnswer",
    outputs: [
      {
        name: "",
        type: "int256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_roundId",
        type: "uint256"
      }
    ],
    name: "getTimestamp",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_aggregator",
        type: "address"
      }
    ],
    name: "setAggregator",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "_aggregator",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address"
      }
    ],
    name: "OwnershipRenounced",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        name: "newOwner",
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
        indexed: true,
        name: "current",
        type: "int256"
      },
      {
        indexed: true,
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "AnswerUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: true,
        name: "startedBy",
        type: "address"
      }
    ],
    name: "NewRound",
    type: "event"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516020806107ae833981016040525160008054600160a060020a031916331790556100468164010000000061004c810204565b50610085565b600054600160a060020a0316331461006357600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b61071a806100946000396000f3006080604052600436106100ae5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663245a7bfc81146100b357806350d25bcd146100f1578063668a0f0214610118578063715018a61461012d5780638205bf6a1461014457806383197ef0146101595780638da5cb5b1461016e578063b5ab58dc14610183578063b633620c1461019b578063f2fde38b146101b3578063f9120af6146101e1575b600080fd5b3480156100bf57600080fd5b506100c861020f565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100fd57600080fd5b5061010661022b565b60408051918252519081900360200190f35b34801561012457600080fd5b506101066102c8565b34801561013957600080fd5b50610142610334565b005b34801561015057600080fd5b506101066103c5565b34801561016557600080fd5b50610142610431565b34801561017a57600080fd5b506100c8610470565b34801561018f57600080fd5b5061010660043561048c565b3480156101a757600080fd5b50610106600435610531565b3480156101bf57600080fd5b5061014273ffffffffffffffffffffffffffffffffffffffff600435166105a4565b3480156101ed57600080fd5b5061014273ffffffffffffffffffffffffffffffffffffffff600435166105d4565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b600154604080517f50d25bcd000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916350d25bcd91600480830192602092919082900301818787803b15801561029757600080fd5b505af11580156102ab573d6000803e3d6000fd5b505050506040513d60208110156102c157600080fd5b5051905090565b600154604080517f668a0f02000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163668a0f0291600480830192602092919082900301818787803b15801561029757600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff16331461035857600080fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116917ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482091a2600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b600154604080517f8205bf6a000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691638205bf6a91600480830192602092919082900301818787803b15801561029757600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff16331461045557600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff16ff5b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600154604080517fb5ab58dc00000000000000000000000000000000000000000000000000000000815260048101849052905160009273ffffffffffffffffffffffffffffffffffffffff169163b5ab58dc91602480830192602092919082900301818787803b1580156104ff57600080fd5b505af1158015610513573d6000803e3d6000fd5b505050506040513d602081101561052957600080fd5b505192915050565b600154604080517fb633620c00000000000000000000000000000000000000000000000000000000815260048101849052905160009273ffffffffffffffffffffffffffffffffffffffff169163b633620c91602480830192602092919082900301818787803b1580156104ff57600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff1633146105c857600080fd5b6105d18161063f565b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105f857600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff8116151561066157600080fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790555600a165627a7a72305820e6fcb8310f88b3b147dea738f16a33b21b564e36cb49d643361d6b68c456b3630029";
