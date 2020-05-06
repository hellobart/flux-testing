/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { Arrayish } from "ethers/utils";

import { BasicConsumer } from "./BasicConsumer";

export class BasicConsumerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _link: string,
    _oracle: string,
    _specId: Arrayish
  ): Promise<BasicConsumer> {
    return super.deploy(_link, _oracle, _specId) as Promise<BasicConsumer>;
  }
  getDeployTransaction(
    _link: string,
    _oracle: string,
    _specId: Arrayish
  ): UnsignedTransaction {
    return super.getDeployTransaction(_link, _oracle, _specId);
  }
  attach(address: string): BasicConsumer {
    return super.attach(address) as BasicConsumer;
  }
  connect(signer: Signer): BasicConsumerFactory {
    return super.connect(signer) as BasicConsumerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasicConsumer {
    return new Contract(address, _abi, signerOrProvider) as BasicConsumer;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "_price",
        type: "bytes32"
      }
    ],
    name: "fulfill",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_currency",
        type: "string"
      }
    ],
    name: "requestEthereumPrice",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "withdrawLink",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "currentPrice",
    outputs: [
      {
        name: "",
        type: "bytes32"
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
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "_payment",
        type: "uint256"
      },
      {
        name: "_callbackFunctionId",
        type: "bytes4"
      },
      {
        name: "_expiration",
        type: "uint256"
      }
    ],
    name: "cancelRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
      },
      {
        name: "_specId",
        type: "bytes32"
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
        name: "requestId",
        type: "bytes32"
      },
      {
        indexed: true,
        name: "price",
        type: "bytes32"
      }
    ],
    name: "RequestFulfilled",
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
  "0x6080604052600160045534801561001557600080fd5b506040516060806117138339810180604052810190808051906020019092919080519060200190929190805190602001909291905050506100648361008f640100000000026401000000009004565b61007c826100d3640100000000026401000000009004565b8060068160001916905550505050610117565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6115ed806101266000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063042f2b65146100725780636c0cae68146100b15780638dc654a21461011a5780639d1b464a14610131578063ec65d0f814610164575b600080fd5b34801561007e57600080fd5b506100af600480360381019080803560001916906020019092919080356000191690602001909291905050506101d2565b005b3480156100bd57600080fd5b50610118600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061038c565b005b34801561012657600080fd5b5061012f61054e565b005b34801561013d57600080fd5b50610146610784565b60405180826000191660001916815260200191505060405180910390f35b34801561017057600080fd5b506101d060048036038101908080356000191690602001909291908035906020019092919080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291908035906020019092919050505061078a565b005b8160056000826000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156102d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001807f536f75726365206d75737420626520746865206f7261636c65206f662074686581526020017f207265717565737400000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b60056000826000191660001916815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905580600019167f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a2816000191683600019167f0c2366233f634048c0f0458060d1228fab36d00f7c0ecf6bdf2d9c458503631160405160405180910390a38160078160001916905550505050565b61039461151f565b60606103c66006543063042f2b657c01000000000000000000000000000000000000000000000000000000000261079c565b91506104946040805190810160405280600381526020017f6765740000000000000000000000000000000000000000000000000000000000815250608060405190810160405280604781526020017f68747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f81526020017f6d2f646174612f70726963653f6673796d3d455448267473796d733d5553442c81526020017f4555522c4a505900000000000000000000000000000000000000000000000000815250846107cd9092919063ffffffff16565b60016040519080825280602002602001820160405280156104c957816020015b60608152602001906001900390816104b45790505b509050828160008151811015156104dc57fe5b906020019060200201819052506105336040805190810160405280600481526020017f706174680000000000000000000000000000000000000000000000000000000081525082846108009092919063ffffffff16565b61054882670de0b6b3a7640000600102610882565b50505050565b60006105586108b9565b90508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561061257600080fd5b505af1158015610626573d6000803e3d6000fd5b505050506040513d602081101561063c57600080fd5b81019080805190602001909291905050506040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156106d257600080fd5b505af11580156106e6573d6000803e3d6000fd5b505050506040513d60208110156106fc57600080fd5b81019080805190602001909291905050501515610781576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f556e61626c6520746f207472616e73666572000000000000000000000000000081525060200191505060405180910390fd5b50565b60075481565b610796848484846108e3565b50505050565b6107a461151f565b6107ac61151f565b6107c385858584610a7e909392919063ffffffff16565b9150509392505050565b6107e4828460800151610b3890919063ffffffff16565b6107fb818460800151610b3890919063ffffffff16565b505050565b6000610819838560800151610b3890919063ffffffff16565b6108268460800151610b5d565b600090505b815181101561086f57610862828281518110151561084557fe5b906020019060200201518560800151610b3890919063ffffffff16565b808060010191505061082b565b61087c8460800151610b6b565b50505050565b60006108b1600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168484610b79565b905092915050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060056000866000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060056000866000191660001916815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905584600019167fe1fe3afa0f7f761ff0a8b89086790efd5140d2907ebd5b7ff6bfcb5e075fd4c560405160405180910390a28073ffffffffffffffffffffffffffffffffffffffff16636ee4d553868686866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808560001916600019168152602001848152602001837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001828152602001945050505050600060405180830381600087803b158015610a5f57600080fd5b505af1158015610a73573d6000803e3d6000fd5b505050505050505050565b610a8661151f565b610a968560800151610100610f05565b50838560000190600019169081600019168152505082856020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508185604001907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050849050949350505050565b610b458260038351610f5f565b610b5881836110bd90919063ffffffff16565b505050565b610b688160046110df565b50565b610b768160076110df565b50565b600030600454604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b602083101515610c155780518252602082019150602081019050602083039250610bf0565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902090506004548360600181815250508360056000836000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600019167fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af960405160405180910390a2600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea08584610d2487611104565b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610dc7578082015181840152602081019050610dac565b50505050905090810190601f168015610df45780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b158015610e1557600080fd5b505af1158015610e29573d6000803e3d6000fd5b505050506040513d6020811015610e3f57600080fd5b81019080805190602001909291905050501515610eea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001807f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726181526020017f636c65000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b60016004600082825401925050819055508090509392505050565b610f0d61158d565b6000602083811515610f1b57fe5b06141515610f3857602082811515610f2f57fe5b06602003820191505b81836020018181525050604051808452600081528281016020016040525082905092915050565b601781111515610f9157610f8b8160058460ff169060020a0260ff16178461132f90919063ffffffff16565b506110b8565b60ff81111515610fd857610fbb601860058460ff169060020a02178461132f90919063ffffffff16565b50610fd28160018561134f9092919063ffffffff16565b506110b7565b61ffff8111151561102057611003601960058460ff169060020a02178461132f90919063ffffffff16565b5061101a8160028561134f9092919063ffffffff16565b506110b6565b63ffffffff8111151561106a5761104d601a60058460ff169060020a02178461132f90919063ffffffff16565b506110648160048561134f9092919063ffffffff16565b506110b5565b67ffffffffffffffff811115156110b45761109b601b60058460ff169060020a02178461132f90919063ffffffff16565b506110b28160088561134f9092919063ffffffff16565b505b5b5b5b5b505050565b6110c561158d565b6110d783846000015151848551611371565b905092915050565b6110ff601f60058360ff169060020a02178361132f90919063ffffffff16565b505050565b6060600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634042994690507c01000000000000000000000000000000000000000000000000000000000260008084600001518560200151866040015187606001516001896080015160000151604051602401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200188815260200187600019166000191681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611292578082015181840152602081019050611277565b50505050905090810190601f1680156112bf5780820380516001836020036101000a031916815260200191505b509950505050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050919050565b61133761158d565b611347838460000151518461142e565b905092915050565b61135761158d565b61136884856000015151858561147e565b90509392505050565b61137961158d565b60008060008551851115151561138e57600080fd5b876020015185880111156113b9576113b88860026113b28b602001518b8a016114df565b026114fb565b5b8751805188602083010194508089880111156113d55788870182525b60208801935050505b60208510151561140357815183526020830192506020820191506020850394506113de565b6001856020036101000a03905080198251168184511681811785525050879350505050949350505050565b61143661158d565b836020015183101515611455576114548460028660200151026114fb565b5b8351805160208583010184815381861415611471576001820183525b5050508390509392505050565b61148661158d565b6000856020015185840111156114a6576114a5866002878601026114fb565b5b6001836101000a03905085518386820101858319825116178152815185880111156114d15784870182525b505085915050949350505050565b6000818311156114f1578290506114f5565b8190505b92915050565b60608260000151905061150e8383610f05565b5061151983826110bd565b50505050565b60c06040519081016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001600081526020016115876115a7565b81525090565b604080519081016040528060608152602001600081525090565b6040805190810160405280606081526020016000815250905600a165627a7a7230582016a508fae53b4f8653c8bab39ee72fe43ff3fcc367334305da847d079bd71d2a0029";