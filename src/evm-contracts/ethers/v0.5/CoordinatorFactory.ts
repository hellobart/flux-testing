/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { Coordinator } from "./Coordinator";

export class CoordinatorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _link: string,
    overrides?: TransactionOverrides
  ): Promise<Coordinator> {
    return super.deploy(_link, overrides) as Promise<Coordinator>;
  }
  getDeployTransaction(
    _link: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_link, overrides);
  }
  attach(address: string): Coordinator {
    return super.attach(address) as Coordinator;
  }
  connect(signer: Signer): CoordinatorFactory {
    return super.connect(signer) as CoordinatorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Coordinator {
    return new Contract(address, _abi, signerOrProvider) as Coordinator;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "withdrawableTokens",
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
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "_data",
        type: "bytes32"
      }
    ],
    name: "fulfillOracleRequest",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_sender",
        type: "address"
      },
      {
        name: "_amount",
        type: "uint256"
      },
      {
        name: "_sAId",
        type: "bytes32"
      },
      {
        name: "_callbackAddress",
        type: "address"
      },
      {
        name: "_callbackFunctionId",
        type: "bytes4"
      },
      {
        name: "_nonce",
        type: "uint256"
      },
      {
        name: "_dataVersion",
        type: "uint256"
      },
      {
        name: "_data",
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
    constant: true,
    inputs: [],
    name: "EXPIRY_TIME",
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
    constant: true,
    inputs: [
      {
        name: "_agreementData",
        type: "bytes"
      }
    ],
    name: "getId",
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "",
        type: "bytes32"
      },
      {
        name: "",
        type: "uint256"
      },
      {
        name: "",
        type: "bytes4"
      },
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "cancelOracleRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_account",
        type: "address"
      }
    ],
    name: "balanceOf",
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
    constant: true,
    inputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "serviceAgreements",
    outputs: [
      {
        name: "payment",
        type: "uint256"
      },
      {
        name: "expiration",
        type: "uint256"
      },
      {
        name: "endAt",
        type: "uint256"
      },
      {
        name: "requestDigest",
        type: "bytes32"
      },
      {
        name: "aggregator",
        type: "address"
      },
      {
        name: "aggInitiateJobSelector",
        type: "bytes4"
      },
      {
        name: "aggFulfillSelector",
        type: "bytes4"
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
        name: "_sender",
        type: "address"
      },
      {
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "depositFunds",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_sender",
        type: "address"
      },
      {
        name: "_amount",
        type: "uint256"
      },
      {
        name: "_data",
        type: "bytes"
      }
    ],
    name: "onTokenTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_serviceAgreementData",
        type: "bytes"
      },
      {
        name: "_oracleSignaturesData",
        type: "bytes"
      }
    ],
    name: "initiateServiceAgreement",
    outputs: [
      {
        name: "serviceAgreementID",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_recipient",
        type: "address"
      },
      {
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
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
        name: "sAId",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "requester",
        type: "address"
      },
      {
        indexed: false,
        name: "requestId",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "payment",
        type: "uint256"
      },
      {
        indexed: false,
        name: "callbackAddr",
        type: "address"
      },
      {
        indexed: false,
        name: "callbackFunctionId",
        type: "bytes4"
      },
      {
        indexed: false,
        name: "cancelExpiration",
        type: "uint256"
      },
      {
        indexed: false,
        name: "dataVersion",
        type: "uint256"
      },
      {
        indexed: false,
        name: "data",
        type: "bytes"
      }
    ],
    name: "OracleRequest",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "said",
        type: "bytes32"
      },
      {
        indexed: true,
        name: "requestDigest",
        type: "bytes32"
      }
    ],
    name: "NewServiceAgreement",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "internalId",
        type: "bytes32"
      }
    ],
    name: "CancelOracleRequest",
    type: "event"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051602080612e9e8339810180604052602081101561003057600080fd5b505160008054600160a060020a03909216600160a060020a0319909216919091179055612e3c806100626000396000f3fe6080604052600436106100b85763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416626f6ad081146100bd5780631f8f238c1461010f57806340429946146101535780634b602282146102385780635a7873a21461024d5780636ee4d5531461030057806370a082311461035e57806375d350701461039e578063921b004b1461043b578063a4c0ed3614610481578063b972d7f814610556578063f3fef3a314610690575b600080fd5b3480156100c957600080fd5b506100fd600480360360208110156100e057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166106d6565b60408051918252519081900360200190f35b34801561011b57600080fd5b5061013f6004803603604081101561013257600080fd5b50803590602001356106e8565b604080519115158252519081900360200190f35b34801561015f57600080fd5b50610236600480360361010081101561017757600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235811692602081013592604082013592606083013516917fffffffff000000000000000000000000000000000000000000000000000000006080820135169160a08201359160c081013591810190610100810160e08201356401000000008111156101f757600080fd5b82018360208201111561020957600080fd5b8035906020019184600183028401116401000000008311171561022b57600080fd5b5090925090506111ca565b005b34801561024457600080fd5b506100fd6116e0565b34801561025957600080fd5b506100fd6004803603602081101561027057600080fd5b81019060208101813564010000000081111561028b57600080fd5b82018360208201111561029d57600080fd5b803590602001918460018302840111640100000000831117156102bf57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506116e6945050505050565b34801561030c57600080fd5b506102366004803603608081101561032357600080fd5b508035906020810135907fffffffff00000000000000000000000000000000000000000000000000000000604082013516906060013561170b565b34801561036a57600080fd5b506100fd6004803603602081101561038157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611711565b3480156103aa57600080fd5b506103c8600480360360208110156103c157600080fd5b5035611739565b60408051978852602088019690965286860194909452606086019290925273ffffffffffffffffffffffffffffffffffffffff1660808501527fffffffff0000000000000000000000000000000000000000000000000000000090811660a08501521660c0830152519081900360e00190f35b34801561044757600080fd5b506102366004803603604081101561045e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356117d6565b34801561048d57600080fd5b50610236600480360360608110156104a457600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516916020810135918101906060810160408201356401000000008111156104e157600080fd5b8201836020820111156104f357600080fd5b8035906020019184600183028401116401000000008311171561051557600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506118bf945050505050565b34801561056257600080fd5b506100fd6004803603604081101561057957600080fd5b81019060208101813564010000000081111561059457600080fd5b8201836020820111156105a657600080fd5b803590602001918460018302840111640100000000831117156105c857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561061b57600080fd5b82018360208201111561062d57600080fd5b8035906020019184600183028401116401000000008311171561064f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611ba4945050505050565b34801561069c57600080fd5b50610236600480360360408110156106b357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356123a0565b60046020526000908152604090205481565b600082815260016020526040812060020154839073ffffffffffffffffffffffffffffffffffffffff16151561077f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4d757374206861766520612076616c6964207265717565737449640000000000604482015290519081900360640190fd5b60008181526001602090815260408083205483526002825280832033845290915290205460ff16151561083957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4f7261636c65206e6f74207265636f676e697a6564206f6e207365727669636560448201527f2061677265656d656e7400000000000000000000000000000000000000000000606482015290519081900360840190fd5b610841612c8e565b50600084815260016020818152604092839020835160c081018552815481529281015491830191909152600281015473ffffffffffffffffffffffffffffffffffffffff8116938301939093527401000000000000000000000000000000000000000083047c0100000000000000000000000000000000000000000000000000000000027fffffffff00000000000000000000000000000000000000000000000000000000166060830152780100000000000000000000000000000000000000000000000090920467ffffffffffffffff16608082015260039091015460ff1660a082015261092e612cc3565b81516000908152600360208181526040928390208351610100810185528154815260018201548184015260028201548186015292810180548551818502810185019096528086529394919360608601938301828280156109c457602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610999575b50505050508152602001600482015481526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160149054906101000a90047c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020016005820160189054906101000a90047c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815250509050600060608260a0015173ffffffffffffffffffffffffffffffffffffffff168360e00151898660000151338b604051602401808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310610c3857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610bfb565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610c9a576040519150601f19603f3d011682016040523d82523d6000602084013e610c9f565b606091505b5091509150811515610d1257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f61676772656761746f722e66756c66696c6c206661696c656400000000000000604482015290519081900360640190fd5b8051600010610d8257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f70726f6261626c792077726f6e6720616464726573732f73656c6563746f7200604482015290519081900360640190fd5b600080606080848060200190516080811015610d9d57600080fd5b8151602083015160408401805192949193820192640100000000811115610dc357600080fd5b82016020810184811115610dd657600080fd5b8151640100000000811182820187101715610df057600080fd5b50509291906020018051640100000000811115610e0c57600080fd5b82016020810184811115610e1f57600080fd5b8151856020820283011164010000000082111715610e3c57600080fd5b505092919050505093509350935093508382901515610ef3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610eb8578181015183820152602001610ea0565b50505050905090810190601f168015610ee55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082156111b657606087015151815114610f6e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f77726f6e67207061796d656e74416d6f756e74732e6c656e6774680000000000604482015290519081900360640190fd5b60005b876060015151811015611040578181815181101515610f8c57fe5b90602001906020020151600460008a6060015184815181101515610fac57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401600460008a606001518481518110151561100857fe5b602090810290910181015173ffffffffffffffffffffffffffffffffffffffff16825281019190915260400160002055600101610f71565b506000886040015173ffffffffffffffffffffffffffffffffffffffff1689606001518e85806020019051602081101561107957600080fd5b505160408051602481019390935260448084019290925280518084039092018252606490920182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090941693909317835290518151919290918291908083835b6020831061113b57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016110fe565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461119d576040519150601f19603f3d011682016040523d82523d6000602084013e6111a2565b606091505b50909b506111c39950505050505050505050565b6001995050505050505050505b5092915050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461125057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4d75737420757365204c494e4b20746f6b656e00000000000000000000000000604482015290519081900360640190fd5b600087815260036020526040902054889088908210156112d157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f42656c6f7720616772656564207061796d656e74000000000000000000000000604482015290519081900360640190fd5b600054889073ffffffffffffffffffffffffffffffffffffffff8083169116141561135d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f43616e6e6f742063616c6c6261636b20746f204c494e4b000000000000000000604482015290519081900360640190fd5b6040805173ffffffffffffffffffffffffffffffffffffffff8e166c010000000000000000000000000260208083019190915260348083018b9052835180840390910181526054909201835281519181019190912060008181526001909252919020600201547801000000000000000000000000000000000000000000000000900467ffffffffffffffff161561145557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4d75737420757365206120756e69717565204944000000000000000000000000604482015290519081900360640190fd5b60008181526001602081905260409091208c81559081018d905560020180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8c16177fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000007c01000000000000000000000000000000000000000000000000000000008c04021790556115164261012c61252a565b6000828152600160205260409020600201805467ffffffffffffffff9290921678010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff9092169190911790558a7fd8d7ecc4800d25fa53ce0372f13a416d98907a7ef3d8d3bdd79cf4fe75529c658e838f8e8e6115ac4261012c63ffffffff61252a16565b8e8e8e604051808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018881526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001867bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001858152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039c50909a5050505050505050505050a250505050505050505050505050565b61012c81565b60006116f0612cc3565b6116f98361259e565b905061170481612751565b9392505050565b50505050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526004602052604090205490565b600360205260009081526040902080546001820154600283015460048401546005909401549293919290919073ffffffffffffffffffffffffffffffffffffffff8116907c0100000000000000000000000000000000000000000000000000000000740100000000000000000000000000000000000000008204810291780100000000000000000000000000000000000000000000000090040287565b60005473ffffffffffffffffffffffffffffffffffffffff16331461185c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4d75737420757365204c494e4b20746f6b656e00000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8216600090815260046020526040902054611892908263ffffffff61252a16565b73ffffffffffffffffffffffffffffffffffffffff90921660009081526004602052604090209190915550565b60005473ffffffffffffffffffffffffffffffffffffffff16331461194557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4d75737420757365204c494e4b20746f6b656e00000000000000000000000000604482015290519081900360640190fd5b61194d612d06565b60046084823780517fffffffff00000000000000000000000000000000000000000000000000000000167f404299460000000000000000000000000000000000000000000000000000000014806119e6575080517fffffffff00000000000000000000000000000000000000000000000000000000167f921b004b00000000000000000000000000000000000000000000000000000000145b1515611a5357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4d757374207573652077686974656c69737465642066756e6374696f6e730000604482015290519081900360640190fd5b83602483015282604483015260003073ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b60208310611ac657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611a89565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114611b26576040519150601f19603f3d011682016040523d82523d6000602084013e611b2b565b606091505b50509050801515611b9d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f556e61626c6520746f2063726561746520726571756573740000000000000000604482015290519081900360640190fd5b5050505050565b6000611bae612cc3565b611bb78461259e565b9050611bc1612d25565b611bca8461284d565b805151606084015151919250148015611be95750602081015151815151145b8015611bfe5750806040015151816020015151145b1515611c9157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4d757374207061737320696e206173206d616e79207369676e6174757265732060448201527f6173206f7261636c657300000000000000000000000000000000000000000000606482015290519081900360840190fd5b60408201514210611d2957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f5365727669636541677265656d656e74206d75737420656e6420696e2074686560448201527f2066757475726500000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60008381526003602052604090206002015415611dcd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f7365727669636541677265656d656e7420616c726561647920696e697469617460448201527f6564000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b611dd682612751565b9250611de783836060015183612969565b6000838152600360208181526040928390208551815581860151600182015592850151600284015560608501518051869493611e2893908501920190612d47565b50608082810151600483015560a08301516005909201805460c085015160e0909501517fffffffffffffffffffffffff000000000000000000000000000000000000000090911673ffffffffffffffffffffffffffffffffffffffff909416939093177fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000007c01000000000000000000000000000000000000000000000000000000009586900402177fffffffff00000000ffffffffffffffffffffffffffffffffffffffffffffffff16780100000000000000000000000000000000000000000000000094909304939093029190911790915582015160405184907f77919e14b37beb51528107e030bd85fe76b9f9316ee1464f7ab2c41abb549fe990600090a3600060608360a0015173ffffffffffffffffffffffffffffffffffffffff168460c0015186896040516024018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611fcc578181015183820152602001611fb4565b50505050905090810190601f168015611ff95780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009098169790971787525181519196909550859450925090508083835b602083106120c657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101612089565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612128576040519150601f19603f3d011682016040523d82523d6000602084013e61212d565b606091505b50915091508115156121c657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f41676772656761746f72206661696c656420746f20696e69746961746520536560448201527f72766963652041677265656d656e740000000000000000000000000000000000606482015290519081900360840190fd5b805160001061223657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f70726f6261626c792077726f6e6720616464726573732f73656c6563746f7200604482015290519081900360640190fd5b6000606082806020019051604081101561224f57600080fd5b81516020830180519193928301929164010000000081111561227057600080fd5b8201602081018481111561228357600080fd5b815164010000000081118282018710171561229d57600080fd5b505092919050505091509150811580156122b657508051155b156123295781151561232957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f696e6974696174696f6e206661696c65643b20656d707479206d657373616765604482015290519081900360640190fd5b80821515612393576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252838181518152602001915080519060200190808383600083811015610eb8578181015183820152602001610ea0565b5050505050505092915050565b33600090815260046020526040902054819081111561244657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f416d6f756e74207265717565737465642069732067726561746572207468616e60448201527f20776974686472617761626c652062616c616e63650000000000000000000000606482015290519081900360840190fd5b33600090815260046020526040902054612466908363ffffffff612b3316565b33600090815260046020818152604080842094909455825484517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8981169482019490945260248101889052945192169363a9059cbb93604480830194928390030190829087803b1580156124f157600080fd5b505af1158015612505573d6000803e3d6000fd5b505050506040513d602081101561251b57600080fd5b5051151561252557fe5b505050565b60008282018381101561170457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6125a6612cc3565b6125ae612cc3565b828060200190516101008110156125c457600080fd5b81516020830151604084015160608501805193959294919391830192916401000000008111156125f357600080fd5b8201602081018481111561260657600080fd5b815185602082028301116401000000008211171561262357600080fd5b50509291906020018051906020019092919080519060200190929190805190602001909291908051906020019092919050505082925088600001896020018a6040018b6060018c6080018d60a0018e60c0018f60e001887bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815250887bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152508873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525088815250889052888152508881525088815250505050505050505080915050919050565b6000816000015182602001518360400151846060015185608001518660a001518760c001518860e0015160405160200180898152602001888152602001878152602001868051906020019060200280838360005b838110156127bd5781810151838201526020016127a5565b5050505091909101958652505073ffffffffffffffffffffffffffffffffffffffff929092166c01000000000000000000000000026020808501919091527fffffffff0000000000000000000000000000000000000000000000000000000091821660348501529116603883015260408051808403601c018152603c909301905281519101209695505050505050565b612855612d25565b61285d612d25565b82806020019051606081101561287257600080fd5b81019080805164010000000081111561288a57600080fd5b8201602081018481111561289d57600080fd5b81518560208202830111640100000000821117156128ba57600080fd5b505092919060200180516401000000008111156128d657600080fd5b820160208101848111156128e957600080fd5b815185602082028301116401000000008211171561290657600080fd5b5050929190602001805164010000000081111561292257600080fd5b8201602081018481111561293557600080fd5b815185602082028301116401000000008211171561295257600080fd5b505060408701525050506020830152815292915050565b60005b825181101561170b5760006129d48584600001518481518110151561298d57fe5b906020019060200201518560200151858151811015156129a957fe5b906020019060200201518660400151868151811015156129c557fe5b90602001906020020151612baa565b90508073ffffffffffffffffffffffffffffffffffffffff1684838151811015156129fb57fe5b6020908102909101015173ffffffffffffffffffffffffffffffffffffffff1614612aad57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f496e76616c6964206f7261636c65207369676e6174757265207370656369666960448201527f656420696e205341000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6000858152600260205260408120855160019290879086908110612acd57fe5b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff16825281019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790555060010161296c565b600082821115612ba457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000808560405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c0182815260200191505060405160208183030381529060405280519060200120905060018186868660405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612c5b573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00151979650505050505050565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b60408051610100810182526000808252602082018190529181018290526060808201526080810182905260a0810182905260c0810182905260e081019190915290565b6020604051908101604052806001906020820280388339509192915050565b6060604051908101604052806060815260200160608152602001606081525090565b828054828255906000526020600020908101928215612dc1579160200282015b82811115612dc157825182547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178255602090920191600190910190612d67565b50612dcd929150612dd1565b5090565b612e0d91905b80821115612dcd5780547fffffffffffffffffffffffff0000000000000000000000000000000000000000168155600101612dd7565b9056fea165627a7a723058209e52f6fce4aeca8e326173d7e46b695495a28531c12f1a226ad6fa056de095e90029";
