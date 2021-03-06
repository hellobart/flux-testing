/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ENSRegistry } from "./ENSRegistry";

export class ENSRegistryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ENSRegistry> {
    return super.deploy(overrides) as Promise<ENSRegistry>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ENSRegistry {
    return super.attach(address) as ENSRegistry;
  }
  connect(signer: Signer): ENSRegistryFactory {
    return super.connect(signer) as ENSRegistryFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ENSRegistry {
    return new Contract(address, _abi, signerOrProvider) as ENSRegistry;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "node",
        type: "bytes32"
      }
    ],
    name: "resolver",
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
        name: "node",
        type: "bytes32"
      }
    ],
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
    constant: false,
    inputs: [
      {
        name: "node",
        type: "bytes32"
      },
      {
        name: "label",
        type: "bytes32"
      },
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "setSubnodeOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "node",
        type: "bytes32"
      },
      {
        name: "ttl",
        type: "uint64"
      }
    ],
    name: "setTTL",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "node",
        type: "bytes32"
      }
    ],
    name: "ttl",
    outputs: [
      {
        name: "",
        type: "uint64"
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
        name: "node",
        type: "bytes32"
      },
      {
        name: "resolver",
        type: "address"
      }
    ],
    name: "setResolver",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "node",
        type: "bytes32"
      },
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "setOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "node",
        type: "bytes32"
      },
      {
        indexed: true,
        name: "label",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "owner",
        type: "address"
      }
    ],
    name: "NewOwner",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "owner",
        type: "address"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "resolver",
        type: "address"
      }
    ],
    name: "NewResolver",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "ttl",
        type: "uint64"
      }
    ],
    name: "NewTTL",
    type: "event"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060008080526020527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb58054600160a060020a0319163317905561068f806100596000396000f3006080604052600436106100825763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630178b8bf811461008757806302571be3146100c857806306ab5923146100e057806314ab90381461011657806316a25cbd1461013b5780631896f70a146101705780635b0fc9c3146101a1575b600080fd5b34801561009357600080fd5b5061009f6004356101d2565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100d457600080fd5b5061009f6004356101fd565b3480156100ec57600080fd5b5061011460043560243573ffffffffffffffffffffffffffffffffffffffff60443516610225565b005b34801561012257600080fd5b5061011460043567ffffffffffffffff602435166103af565b34801561014757600080fd5b50610153600435610485565b6040805167ffffffffffffffff9092168252519081900360200190f35b34801561017c57600080fd5b5061011460043573ffffffffffffffffffffffffffffffffffffffff602435166104bc565b3480156101ad57600080fd5b5061011460043573ffffffffffffffffffffffffffffffffffffffff60243516610591565b60009081526020819052604090206001015473ffffffffffffffffffffffffffffffffffffffff1690565b60009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600083815260208190526040812054849073ffffffffffffffffffffffffffffffffffffffff16331461025757600080fd5b604080516020808201889052818301879052825180830384018152606090920192839052815191929182918401908083835b602083106102c657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610289565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990921691161790526040805192909401829003822073ffffffffffffffffffffffffffffffffffffffff8a16835293519397508995508a94507fce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e829391829003019150a350600090815260208190526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790555050565b600082815260208190526040902054829073ffffffffffffffffffffffffffffffffffffffff1633146103e157600080fd5b6040805167ffffffffffffffff84168152905184917f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa68919081900360200190a250600091825260208290526040909120600101805467ffffffffffffffff90921674010000000000000000000000000000000000000000027fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff909216919091179055565b60009081526020819052604090206001015474010000000000000000000000000000000000000000900467ffffffffffffffff1690565b600082815260208190526040902054829073ffffffffffffffffffffffffffffffffffffffff1633146104ee57600080fd5b6040805173ffffffffffffffffffffffffffffffffffffffff84168152905184917f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a0919081900360200190a25060009182526020829052604090912060010180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055565b600082815260208190526040902054829073ffffffffffffffffffffffffffffffffffffffff1633146105c357600080fd5b6040805173ffffffffffffffffffffffffffffffffffffffff84168152905184917fd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d266919081900360200190a25060009182526020829052604090912080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169190911790555600a165627a7a723058203bb60ced8749b975359c2860511e352c40d432bb4e01c5c5ded22832ca86de560029";
