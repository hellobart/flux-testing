/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { Arrayish } from "ethers/utils";

import { ServiceAgreementConsumer } from "./ServiceAgreementConsumer";

export class ServiceAgreementConsumerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _link: string,
    _coordinator: string,
    _sAId: Arrayish
  ): Promise<ServiceAgreementConsumer> {
    return super.deploy(_link, _coordinator, _sAId) as Promise<
      ServiceAgreementConsumer
    >;
  }
  getDeployTransaction(
    _link: string,
    _coordinator: string,
    _sAId: Arrayish
  ): UnsignedTransaction {
    return super.getDeployTransaction(_link, _coordinator, _sAId);
  }
  attach(address: string): ServiceAgreementConsumer {
    return super.attach(address) as ServiceAgreementConsumer;
  }
  connect(signer: Signer): ServiceAgreementConsumerFactory {
    return super.connect(signer) as ServiceAgreementConsumerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ServiceAgreementConsumer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ServiceAgreementConsumer;
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
    inputs: [
      {
        name: "_link",
        type: "address"
      },
      {
        name: "_coordinator",
        type: "address"
      },
      {
        name: "_sAId",
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
  "0x6080604052600160045534801561001557600080fd5b506040516060806110f08339810180604052606081101561003557600080fd5b8101908080519060200190929190805190602001909291908051906020019092919050505061007283610099640100000000026401000000009004565b61008a826100dd640100000000026401000000009004565b80600681905550505050610121565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610fc0806101306000396000f3fe608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063042f2b651461005c5780636c0cae68146100a15780639d1b464a14610169575b600080fd5b34801561006857600080fd5b5061009f6004803603604081101561007f57600080fd5b810190808035906020019092919080359060200190929190505050610194565b005b3480156100ad57600080fd5b50610167600480360360208110156100c457600080fd5b81019080803590602001906401000000008111156100e157600080fd5b8201836020820111156100f357600080fd5b8035906020019184600183028401116401000000008311171561011557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610300565b005b34801561017557600080fd5b5061017e61046a565b6040518082815260200191505060405180910390f35b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610291576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001807f536f75726365206d75737420626520746865206f7261636c65206f662074686581526020017f207265717565737400000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a281600781905550505050565b610308610ef2565b6103386006543063042f2b657c010000000000000000000000000000000000000000000000000000000002610470565b90506104066040805190810160405280600381526020017f6765740000000000000000000000000000000000000000000000000000000000815250608060405190810160405280604781526020017f68747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f81526020017f6d2f646174612f70726963653f6673796d3d455448267473796d733d5553442c81526020017f4555522c4a505900000000000000000000000000000000000000000000000000815250836104a19092919063ffffffff16565b6104506040805190810160405280600481526020017f706174680000000000000000000000000000000000000000000000000000000081525083836104a19092919063ffffffff16565b61046581670de0b6b3a76400006001026104d4565b505050565b60075481565b610478610ef2565b610480610ef2565b6104978585858461050b909392919063ffffffff16565b9150509392505050565b6104b88284608001516105bb90919063ffffffff16565b6104cf8184608001516105bb90919063ffffffff16565b505050565b6000610503600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684846105e0565b905092915050565b610513610ef2565b6105238560800151610100610905565b508385600001818152505082856020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508185604001907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050849050949350505050565b6105c8826003835161095f565b6105db8183610abd90919063ffffffff16565b505050565b600030600454604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140182815260200192505050604051602081830303815290604052805190602001209050600454836060018181525050836005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550807fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af960405160405180910390a2600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea0858461072487610adf565b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156107c75780820151818401526020810190506107ac565b50505050905090810190601f1680156107f45780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561081557600080fd5b505af1158015610829573d6000803e3d6000fd5b505050506040513d602081101561083f57600080fd5b810190808051906020019092919050505015156108ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001807f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726181526020017f636c65000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b60016004600082825401925050819055508090509392505050565b61090d610f60565b600060208381151561091b57fe5b061415156109385760208281151561092f57fe5b06602003820191505b81836020018181525050604051808452600081528281016020016040525082905092915050565b6017811115156109915761098b8160058460ff169060020a0260ff161784610d0290919063ffffffff16565b50610ab8565b60ff811115156109d8576109bb601860058460ff169060020a021784610d0290919063ffffffff16565b506109d281600185610d229092919063ffffffff16565b50610ab7565b61ffff81111515610a2057610a03601960058460ff169060020a021784610d0290919063ffffffff16565b50610a1a81600285610d229092919063ffffffff16565b50610ab6565b63ffffffff81111515610a6a57610a4d601a60058460ff169060020a021784610d0290919063ffffffff16565b50610a6481600485610d229092919063ffffffff16565b50610ab5565b67ffffffffffffffff81111515610ab457610a9b601b60058460ff169060020a021784610d0290919063ffffffff16565b50610ab281600885610d229092919063ffffffff16565b505b5b5b5b5b505050565b610ac5610f60565b610ad783846000015151848551610d44565b905092915050565b6060600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634042994690507c01000000000000000000000000000000000000000000000000000000000260008084600001518560200151866040015187606001516001896080015160000151604051602401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018781526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c65578082015181840152602081019050610c4a565b50505050905090810190601f168015610c925780820380516001836020036101000a031916815260200191505b509950505050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050919050565b610d0a610f60565b610d1a8384600001515184610e01565b905092915050565b610d2a610f60565b610d3b848560000151518585610e51565b90509392505050565b610d4c610f60565b82518211151515610d5c57600080fd5b84602001518285011115610d8757610d86856002610d808860200151888701610eb2565b02610ece565b5b600080865180518760208301019350808887011115610da65787860182525b60208701925050505b602084101515610dd45780518252602082019150602081019050602084039350610daf565b60006001856020036101000a03905080198251168184511681811785525050879350505050949350505050565b610e09610f60565b836020015183101515610e2857610e27846002866020015102610ece565b5b8351805160208583010184815381861415610e44576001820183525b5050508390509392505050565b610e59610f60565b84602001518483011115610e7757610e7685600286850102610ece565b5b60006001836101000a0390508551838682010185831982511617815281518588011115610ea45784870182525b505085915050949350505050565b600081831115610ec457829050610ec8565b8190505b92915050565b606082600001519050610ee18383610905565b50610eec8382610abd565b50505050565b60c06040519081016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200160008152602001610f5a610f7a565b81525090565b604080519081016040528060608152602001600081525090565b60408051908101604052806060815260200160008152509056fea165627a7a72305820942e051d0d3abf8a0ab53ca3f0820b60f9f6f2fa428df8a8573bc5b9ac3bc60a0029";
