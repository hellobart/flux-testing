/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { MaliciousConsumer } from "./MaliciousConsumer";

export class MaliciousConsumerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_link: string, _oracle: string): Promise<MaliciousConsumer> {
    return super.deploy(_link, _oracle) as Promise<MaliciousConsumer>;
  }
  getDeployTransaction(_link: string, _oracle: string): UnsignedTransaction {
    return super.getDeployTransaction(_link, _oracle);
  }
  attach(address: string): MaliciousConsumer {
    return super.attach(address) as MaliciousConsumer;
  }
  connect(signer: Signer): MaliciousConsumerFactory {
    return super.connect(signer) as MaliciousConsumerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MaliciousConsumer {
    return new Contract(address, _abi, signerOrProvider) as MaliciousConsumer;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "doesNothing",
    outputs: [],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "stealEthCall",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "remove",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "stealEthSend",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "cancelRequestOnFulfill",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "stealEthTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "bytes32"
      },
      {
        name: "_callbackFunc",
        type: "bytes"
      }
    ],
    name: "requestData",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "assertFail",
    outputs: [],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        name: "_link",
        type: "address"
      },
      {
        name: "_oracle",
        type: "address"
      }
    ],
    payable: true,
    stateMutability: "payable",
    type: "constructor"
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback"
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
  "0x608060405260016004556040516040806114818339810180604052604081101561002857600080fd5b81019080805190602001909291908051906020019092919050505061005b8261007a640100000000026401000000009004565b610073816100be640100000000026401000000009004565b5050610102565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b611370806101116000396000f3fe60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631eb0f61014610090578063a09d636a146100d5578063a7f437791461011a578063acdf0ba214610131578063b40584e814610176578063c728f720146101bb578063c737ecab14610200578063e7eb2b17146102d2575b005b34801561009c57600080fd5b506100d3600480360360408110156100b357600080fd5b810190808035906020019092919080359060200190929190505050610317565b005b3480156100e157600080fd5b50610118600480360360408110156100f857600080fd5b81019080803590602001909291908035906020019092919050505061031b565b005b34801561012657600080fd5b5061012f610560565b005b34801561013d57600080fd5b506101746004803603604081101561015457600080fd5b81019080803590602001909291908035906020019092919050505061057a565b005b34801561018257600080fd5b506101b96004803603604081101561019957600080fd5b81019080803590602001909291908035906020019092919050505061078f565b005b3480156101c757600080fd5b506101fe600480360360408110156101de57600080fd5b8101908080359060200190929190803590602001909291905050506107cf565b005b34801561020c57600080fd5b506102d06004803603604081101561022357600080fd5b81019080803590602001909291908035906020019064010000000081111561024a57600080fd5b82018360208201111561025c57600080fd5b8035906020019184600183028401116401000000008311171561027e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061097c565b005b3480156102de57600080fd5b50610315600480360360408110156102f557600080fd5b8101908080359060200190929190803590602001909291905050506109ce565b005b5050565b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610418576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001807f536f75726365206d75737420626520746865206f7261636c65206f662074686581526020017f207265717565737400000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a260003073ffffffffffffffffffffffffffffffffffffffff16606460405180600001905060006040518083038185875af1925050503d80600081146104dc576040519150601f19603f3d011682016040523d82523d6000602084013e6104e1565b606091505b5050905080151561055a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f43616c6c206661696c656400000000000000000000000000000000000000000081525060200191505060405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff16ff5b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610677576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001807f536f75726365206d75737420626520746865206f7261636c65206f662074686581526020017f207265717565737400000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a260003073ffffffffffffffffffffffffffffffffffffffff166108fc60649081150290604051600060405180830381858888f193505050509050801515610789576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f53656e64206661696c656400000000000000000000000000000000000000000081525060200191505060405180910390fd5b50505050565b6107cb82670de0b6b3a764000060010263b40584e87c0100000000000000000000000000000000000000000000000000000000026006546109df565b5050565b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001807f536f75726365206d75737420626520746865206f7261636c65206f662074686581526020017f207265717565737400000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a23073ffffffffffffffffffffffffffffffffffffffff166108fc60649081150290604051600060405180830381858888f19350505050158015610976573d6000803e3d6000fd5b50505050565b6109846112a2565b61099683308480519060200120610b5e565b90506109ad61012c42610b8f90919063ffffffff16565b6006819055506109c881670de0b6b3a7640000600102610c19565b50505050565b600260011415156109db57fe5b5050565b60006005600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506005600086815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055847fe1fe3afa0f7f761ff0a8b89086790efd5140d2907ebd5b7ff6bfcb5e075fd4c560405160405180910390a28073ffffffffffffffffffffffffffffffffffffffff16636ee4d553868686866040518563ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180858152602001848152602001837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001828152602001945050505050600060405180830381600087803b158015610b3f57600080fd5b505af1158015610b53573d6000803e3d6000fd5b505050505050505050565b610b666112a2565b610b6e6112a2565b610b8585858584610c50909392919063ffffffff16565b9150509392505050565b6000808284019050838110151515610c0f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000610c48600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168484610d00565b905092915050565b610c586112a2565b610c688560800151610100611025565b508385600001818152505082856020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508185604001907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050849050949350505050565b600030600454604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140182815260200192505050604051602081830303815290604052805190602001209050600454836060018181525050836005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550807fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af960405160405180910390a2600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea08584610e448761107f565b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610ee7578082015181840152602081019050610ecc565b50505050905090810190601f168015610f145780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b158015610f3557600080fd5b505af1158015610f49573d6000803e3d6000fd5b505050506040513d6020811015610f5f57600080fd5b8101908080519060200190929190505050151561100a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001807f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726181526020017f636c65000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b60016004600082825401925050819055508090509392505050565b61102d611310565b600060208381151561103b57fe5b061415156110585760208281151561104f57fe5b06602003820191505b81836020018181525050604051808452600081528281016020016040525082905092915050565b6060600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634042994690507c01000000000000000000000000000000000000000000000000000000000260008084600001518560200151866040015187606001516001896080015160000151604051602401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018781526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156112055780820151818401526020810190506111ea565b50505050905090810190601f1680156112325780820380516001836020036101000a031916815260200191505b509950505050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050919050565b60c06040519081016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020016000815260200161130a61132a565b81525090565b604080519081016040528060608152602001600081525090565b60408051908101604052806060815260200160008152509056fea165627a7a72305820251c0d31bbb6f0b691d836c956208387fad49ce07e5dcb552055e3a05443a6ad0029";
