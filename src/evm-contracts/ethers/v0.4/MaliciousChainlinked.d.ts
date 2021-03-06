/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface MaliciousChainlinkedInterface extends Interface {
  functions: {};

  events: {
    ChainlinkRequested: TypedEventDescription<{
      encodeTopics([id]: [Arrayish | null]): string[];
    }>;

    ChainlinkFulfilled: TypedEventDescription<{
      encodeTopics([id]: [Arrayish | null]): string[];
    }>;

    ChainlinkCancelled: TypedEventDescription<{
      encodeTopics([id]: [Arrayish | null]): string[];
    }>;
  };
}

export class MaliciousChainlinked extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MaliciousChainlinked;
  attach(addressOrName: string): MaliciousChainlinked;
  deployed(): Promise<MaliciousChainlinked>;

  on(event: EventFilter | string, listener: Listener): MaliciousChainlinked;
  once(event: EventFilter | string, listener: Listener): MaliciousChainlinked;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): MaliciousChainlinked;
  removeAllListeners(eventName: EventFilter | string): MaliciousChainlinked;
  removeListener(eventName: any, listener: Listener): MaliciousChainlinked;

  interface: MaliciousChainlinkedInterface;

  functions: {};

  filters: {
    ChainlinkRequested(id: Arrayish | null): EventFilter;

    ChainlinkFulfilled(id: Arrayish | null): EventFilter;

    ChainlinkCancelled(id: Arrayish | null): EventFilter;
  };

  estimate: {};
}
