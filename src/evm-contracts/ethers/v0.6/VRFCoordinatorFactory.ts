/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { VRFCoordinator } from "./VRFCoordinator";

export class VRFCoordinatorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_link: string): Promise<VRFCoordinator> {
    return super.deploy(_link) as Promise<VRFCoordinator>;
  }
  getDeployTransaction(_link: string): UnsignedTransaction {
    return super.getDeployTransaction(_link);
  }
  attach(address: string): VRFCoordinator {
    return super.attach(address) as VRFCoordinator;
  }
  connect(signer: Signer): VRFCoordinatorFactory {
    return super.connect(signer) as VRFCoordinatorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFCoordinator {
    return new Contract(address, _abi, signerOrProvider) as VRFCoordinator;
  }
}

const _abi = [
  {
    inputs: [
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256"
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
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "seed",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "jobID",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "RandomnessRequest",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "callbacks",
    outputs: [
      {
        internalType: "address",
        name: "callbackContract",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "randomnessFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "seed",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes"
      }
    ],
    name: "fulfillRandomnessRequest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_publicKey",
        type: "uint256[2]"
      }
    ],
    name: "hashOfKey",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "onTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256"
      },
      {
        internalType: "uint256[2]",
        name: "_publicProvingKey",
        type: "uint256[2]"
      },
      {
        internalType: "bytes32",
        name: "_jobID",
        type: "bytes32"
      }
    ],
    name: "registerProvingKey",
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
    name: "serviceAgreements",
    outputs: [
      {
        internalType: "address",
        name: "vRFOracle",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "jobID",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "withdrawableTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051612a75380380612a758339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506129e1806100946000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c806375d350701161005b57806375d3507014610275578063a4c0ed36146102f1578063caf70c4a146103d6578063f3fef3a31461044f57610087565b80626f6ad01461008c57806321f36509146100e45780635e1c1059146101605780636815851e14610233575b600080fd5b6100ce600480360360208110156100a257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061049d565b6040518082815260200191505060405180910390f35b610110600480360360208110156100fa57600080fd5b81019080803590602001909291905050506104b5565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390f35b6102196004803603602081101561017657600080fd5b810190808035906020019064010000000081111561019357600080fd5b8201836020820111156101a557600080fd5b803590602001918460018302840111640100000000831117156101c757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506104ff565b604051808215151515815260200191505060405180910390f35b6102736004803603608081101561024957600080fd5b810190808035906020019092919080604001909192919290803590602001909291905050506108ec565b005b6102a16004803603602081101561028b57600080fd5b8101908080359060200190929190505050610ade565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390f35b6103d46004803603606081101561030757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561034e57600080fd5b82018360208201111561036057600080fd5b8035906020019184600183028401116401000000008311171561038257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610b28565b005b610439600480360360408110156103ec57600080fd5b8101908080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f8201169050808301925050505050509192919290505050610c34565b6040518082815260200191505060405180910390f35b61049b6004803603604081101561046557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c8c565b005b60036020528060005260406000206000915090505481565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b60006105096128a9565b600060208401915060e08401519050600061052383610c34565b905060006105318284610ec5565b905061053b6128cb565b600160008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff16141561066c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f6e6f20636f72726573706f6e64696e672072657175657374000000000000000081525060200191505060405180910390fd5b600061067788610efe565b905060006002600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061070a8360200151600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110ce90919063ffffffff16565b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006060631f1f897f60e01b86856040516024018083815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506000856000015173ffffffffffffffffffffffffffffffffffffffff16826040518082805190602001908083835b6020831061082257805182526020820191506020810190506020830392506107ff565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610884576040519150601f19603f3d011682016040523d82523d6000602084013e610889565b606091505b5050905060016000888152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600090555050809a5050505050505050505050919050565b600061092e836002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050610c34565b905060006002600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a0d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f706c656173652072656769737465722061206e6577206b65790000000000000081525060200191505060405180910390fd5b336002600084815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260026000848152602001908152602001600020600101819055508460026000848152602001908152602001600020600201819055507fae189157e0628c1e62315e9179156e1ea10e90e9c15060002f7021e907dc2cfe8286604051808381526020018281526020019250505060405180910390a15050505050565b60026020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f4d75737420757365204c494e4b20746f6b656e0000000000000000000000000081525060200191505060405180910390fd5b600080828060200190516040811015610c0257600080fd5b81019080805190602001909291908051906020019092919050505091509150610c2d82828688611156565b5050505050565b6000816040516020018082600260200280838360005b83811015610c65578082015181840152602081019050610c4a565b50505050905001915050604051602081830303815290604052805190602001209050919050565b8080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610d42576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f63616e2774207769746864726177206d6f7265207468616e2062616c616e636581525060200191505060405180910390fd5b610d9482600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114a390919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610e7f57600080fd5b505af1158015610e93573d6000803e3d6000fd5b505050506040513d6020811015610ea957600080fd5b8101908080519060200190929190505050610ec057fe5b505050565b60008282604051602001808381526020018281526020019250505060405160208183030381529060405280519060200120905092915050565b60006101a0825114610f78576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f77726f6e672070726f6f66206c656e677468000000000000000000000000000081525060200191505060405180910390fd5b610f806128a9565b610f886128a9565b610f90612902565b6000610f9a6128a9565b610fa26128a9565b6000888060200190516101a0811015610fba57600080fd5b810190809190826040019190826040019190826060018051906020019092919091908260400191908260400180519060200190929190505050869650859550849450839350829250819150809750819850829950839a50849b50859c50869d505050505050505061106587878760006003811061103357fe5b60200201518860016003811061104557fe5b60200201518960026003811061105757fe5b60200201518989898961152c565b6003866040516020018083815260200182600260200280838360005b8381101561109c578082015181840152602081019050611081565b50505050905001925050506040516020818303038152906040528051906020012060001c975050505050505050919050565b60008082840190508381101561114c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b818460026000828152602001908152602001600020600201548210156111e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f42656c6f7720616772656564207061796d656e7400000000000000000000000081525060200191505060405180910390fd5b60006004600088815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600061124788888785611857565b905060006112558983610ec5565b9050600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146112c357fe5b856001600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550866001600083815260200190815260200160002060010181905550816001600083815260200190815260200160002060020181905550600260008a8152602001908152602001600020600101547fd241d78a52145a5d1d1ff002e32ec15cdc395631bcee66246650c2429dfaccaa8a84898b604051808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060405180910390a26114446001600460008c815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110ce90919063ffffffff16565b600460008b815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050505050505050565b60008282111561151b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b611535896118d1565b6115a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f7075626c6963206b6579206973206e6f74206f6e20637572766500000000000081525060200191505060405180910390fd5b6115b0886118d1565b611622576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f67616d6d61206973206e6f74206f6e206375727665000000000000000000000081525060200191505060405180910390fd5b61162b836118d1565b61169d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f6347616d6d615769746e657373206973206e6f74206f6e20637572766500000081525060200191505060405180910390fd5b6116a6826118d1565b611718576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f73486173685769746e657373206973206e6f74206f6e2063757276650000000081525060200191505060405180910390fd5b611724878a8887611942565b611796576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f6164647228632a706b2b732a6729e289a05f755769746e65737300000000000081525060200191505060405180910390fd5b61179e6128a9565b6117a88a87611b7a565b90506117b26128a9565b6117c1898b878b868989611c39565b905060006117d2838d8d8a86611ddd565b9050808a14611849576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f696e76616c69642070726f6f660000000000000000000000000000000000000081525060200191505060405180910390fd5b505050505050505050505050565b600084848484604051602001808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019450505050506040516020818303038152906040528051906020012060001c9050949350505050565b60007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806118fb57fe5b8260016002811061190857fe5b60200201518360016002811061191a57fe5b60200201510961193a8360006002811061193057fe5b6020020151611f0c565b149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156119e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f626164207769746e65737300000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000806002866001600281106119f857fe5b602002015181611a0457fe5b0614611a1157601c611a14565b601b5b905060007ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414180611a4057fe5b8587600060028110611a4e57fe5b6020020151097ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd03641410360001b905060007ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414180611aa557fe5b87600060028110611ab257fe5b6020020151890960001b90506000600183858a600060028110611ad157fe5b602002015160001b8560405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611b31573d6000803e3d6000fd5b5050506020604051035190508573ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614945050505050949350505050565b611b826128a9565b611be3600184846040516020018084815260200183600260200280838360005b83811015611bbd578082015181840152602081019050611ba2565b505050509050018281526020019350505050604051602081830303815290604052611f9a565b90505b611bef816118d1565b611c3357611c2c81600060028110611c0357fe5b602002015160405160200180828152602001915050604051602081830303815290604052611f9a565b9050611be6565b92915050565b611c416128a9565b60007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f84600060028110611c7157fe5b602002015188600060028110611c8357fe5b60200201510381611c9057fe5b061415611d05576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f706f696e747320696e2073756d206d7573742062652064697374696e6374000081525060200191505060405180910390fd5b611d1087898861206d565b611d65576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806129696021913960400191505060405180910390fd5b611d7084868561206d565b611dc5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061298a6022913960400191505060405180910390fd5b611dd08684846121f8565b9050979650505050505050565b6000600286868685876040516020018087815260200186600260200280838360005b83811015611e1a578082015181840152602081019050611dff565b5050505090500185600260200280838360005b83811015611e48578082015181840152602081019050611e2d565b5050505090500184600260200280838360005b83811015611e76578082015181840152602081019050611e5b565b5050505090500183600260200280838360005b83811015611ea4578082015181840152602081019050611e89565b505050509050018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140196505050505050506040516020818303038152906040528051906020012060001c905095945050505050565b6000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80611f3757fe5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80611f5f57fe5b848509840990507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f80611f8e57fe5b60078208915050919050565b611fa26128a9565b611fab82612376565b81600060028110611fb857fe5b602002018181525050611fe3611fde82600060028110611fd457fe5b6020020151611f0c565b6123e3565b81600160028110611ff057fe5b602002018181525050600160028260016002811061200a57fe5b60200201518161201657fe5b061415612068578060016002811061202a57fe5b60200201517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f038160016002811061205e57fe5b6020020181815250505b919050565b60008083141561207c57600080fd5b60008460006002811061208b57fe5b602002015190506000806002876001600281106120a457fe5b6020020151816120b057fe5b06146120bd57601c6120c0565b601b5b905060007ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141806120ec57fe5b83870960001b9050600060016000801b848660001b8560405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612159573d6000803e3d6000fd5b5050506020604051035190506000866040516020018082600260200280838360005b8381101561219657808201518184015260208101905061217b565b505050509050019150506040516020818303038152906040528051906020012060001c90508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614955050505050509392505050565b6122006128a9565b60008060006122558760006002811061221557fe5b60200201518860016002811061222757fe5b60200201518860006002811061223957fe5b60200201518960016002811061224b57fe5b602002015161241d565b80935081945082955050505060017ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061228b57fe5b86830914612301576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f696e765a206d75737420626520696e7665727365206f66207a0000000000000081525060200191505060405180910390fd5b60405180604001604052807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061233457fe5b87860981526020017ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061236457fe5b87850981525093505050509392505050565b6000818051906020012060001c90505b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f81106123de5780604051602001808281526020019150506040516020818303038152906040528051906020012060001c9050612386565b919050565b600061241682600260017ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f01901c6125f1565b9050919050565b60008060008060006001809150915060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061245657fe5b897ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f038808905060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806124a757fe5b8b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f038a08905060006124dc83838585612753565b80925081995050506124f088828e886127bd565b809250819950505061250488828c876127bd565b8092508199505050600061251a8d878b856127bd565b809250819950505061252e88828686612753565b809250819950505061254288828e896127bd565b80925081995050508082146125dd577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061257957fe5b818a0998507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806125a657fe5b82890997507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806125d357fe5b81830996506125e1565b8196505b5050505050509450945094915050565b6000806125fc612924565b60208160006006811061260b57fe5b60200201818152505060208160016006811061262357fe5b60200201818152505060208160026006811061263b57fe5b602002018181525050848160036006811061265257fe5b602002018181525050838160046006811061266957fe5b6020020181815250507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f816005600681106126a057fe5b6020020181815250506126b1612946565b60208160c0846005600019fa92506000831415612736576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f6269674d6f64457870206661696c75726521000000000000000000000000000081525060200191505060405180910390fd5b8060006001811061274357fe5b6020020151935050505092915050565b6000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061277e57fe5b8487097ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806127a957fe5b848709809250819350505094509492505050565b60008060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f806127ea57fe5b878509905060007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061281957fe5b87877ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f030990507ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061286857fe5b8183087ffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f8061289357fe5b8689098094508195505050505094509492505050565b6040518060400160405280600290602082028038833980820191505090505090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b6040518060600160405280600390602082028038833980820191505090505090565b6040518060c00160405280600690602082028038833980820191505090505090565b604051806020016040528060019060208202803883398082019150509050509056fe4669727374206d756c7469706c69636174696f6e20636865636b206661696c65645365636f6e64206d756c7469706c69636174696f6e20636865636b206661696c6564a26469706673582212208886725fe4fbe2fbec941b685b2cd49023ac2999404115f8dde543d2da6ca0cb64736f6c63430006020033";
