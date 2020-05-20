/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { MedianTestHelper } from "./MedianTestHelper";

export class MedianTestHelperFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<MedianTestHelper> {
    return super.deploy(overrides) as Promise<MedianTestHelper>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
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
    constant: true,
    inputs: [
      {
        name: "_list",
        type: "int256[]"
      }
    ],
    name: "publicGet",
    outputs: [
      {
        name: "",
        type: "int256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610699806100206000396000f3fe6080604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663115efb208114610045575b600080fd5b34801561005157600080fd5b506100f56004803603602081101561006857600080fd5b81019060208101813564010000000081111561008357600080fd5b82018360208201111561009557600080fd5b803590602001918460208302840111640100000000831117156100b757600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610107945050505050565b60408051918252519081900360200190f35b60006101128261011a565b90505b919050565b80516000908161013182600263ffffffff6101d016565b90506002820615156101b257600061015161014b86610258565b836102d4565b9050600061016f8661016a85600163ffffffff6104bb16565b6102d4565b905060006002808407818407010590506101a68161019a60028505600287059063ffffffff61053616565b9063ffffffff61053616565b95505050505050610115565b6101c78461016a83600163ffffffff6104bb16565b92505050610115565b600080821161024057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b6000828481151561024d57fe5b049150505b92915050565b6060808251604051908082528060200260200182016040528015610286578160200160208202803883390190505b50905060005b83518110156102cd5783818151811015156102a357fe5b9060200190602002015182828151811015156102bb57fe5b6020908102909101015260010161028c565b5092915050565b8151604080518281526020808402820101909152600091849184919060609082801561030a578160200160208202803883390190505b509050606082604051908082528060200260200182016040528015610339578160200160208202803883390190505b5090506000806000805b8861035588600263ffffffff6101d016565b8151811061035f57fe5b9060200190602002015191506000935060009250600090505b868110156104385781898281518110151561038f57fe5b9060200190602002015112156103da5788818151811015156103ad57fe5b9060200190602002015186858151811015156103c557fe5b60209081029091010152600190930192610430565b8189828151811015156103e957fe5b90602001906020020151131561043057888181518110151561040757fe5b90602001906020020151858481518110151561041f57fe5b602090810290910101526001909201915b600101610378565b8388116104565783965061044c89876105f3565b90995095506104b6565b610466878463ffffffff6105f616565b8811156104a65761048d610480888563ffffffff6105f616565b899063ffffffff6105f616565b975082965061049c89866105f3565b90995094506104b6565b5097506102529650505050505050565b610343565b60008282018381101561052f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600082820181831280159061054b5750838112155b80610560575060008312801561056057508381125b151561052f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f60448201527f7700000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b91565b60008282111561066757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fea165627a7a7230582050f60ce9f6a1a77ae0236743e9c395431f07a80e29a73208d66db5a66a08e46d0029";
