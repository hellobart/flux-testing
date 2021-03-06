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

interface MaliciousRequesterInterface extends Interface {
  functions: {
    maliciousRequestCancel: TypedFunctionDescription<{
      encode([_id, _callbackFunc]: [Arrayish, Arrayish]): string;
    }>;

    maliciousWithdraw: TypedFunctionDescription<{ encode([]: []): string }>;

    doesNothing: TypedFunctionDescription<{
      encode([,]: [Arrayish, Arrayish]): string;
    }>;

    maliciousTargetConsumer: TypedFunctionDescription<{
      encode([_target]: [string]): string;
    }>;

    request: TypedFunctionDescription<{
      encode([_id, _target, _callbackFunc]: [
        Arrayish,
        string,
        Arrayish
      ]): string;
    }>;

    maliciousPrice: TypedFunctionDescription<{
      encode([_id]: [Arrayish]): string;
    }>;
  };

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

export class MaliciousRequester extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MaliciousRequester;
  attach(addressOrName: string): MaliciousRequester;
  deployed(): Promise<MaliciousRequester>;

  on(event: EventFilter | string, listener: Listener): MaliciousRequester;
  once(event: EventFilter | string, listener: Listener): MaliciousRequester;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): MaliciousRequester;
  removeAllListeners(eventName: EventFilter | string): MaliciousRequester;
  removeListener(eventName: any, listener: Listener): MaliciousRequester;

  interface: MaliciousRequesterInterface;

  functions: {
    maliciousRequestCancel(
      _id: Arrayish,
      _callbackFunc: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    maliciousWithdraw(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    doesNothing(arg0: Arrayish, arg1: Arrayish): Promise<void>;

    maliciousTargetConsumer(
      _target: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    request(
      _id: Arrayish,
      _target: string,
      _callbackFunc: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    maliciousPrice(
      _id: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  maliciousRequestCancel(
    _id: Arrayish,
    _callbackFunc: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  maliciousWithdraw(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  doesNothing(arg0: Arrayish, arg1: Arrayish): Promise<void>;

  maliciousTargetConsumer(
    _target: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  request(
    _id: Arrayish,
    _target: string,
    _callbackFunc: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  maliciousPrice(
    _id: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    ChainlinkRequested(id: Arrayish | null): EventFilter;

    ChainlinkFulfilled(id: Arrayish | null): EventFilter;

    ChainlinkCancelled(id: Arrayish | null): EventFilter;
  };

  estimate: {
    maliciousRequestCancel(
      _id: Arrayish,
      _callbackFunc: Arrayish
    ): Promise<BigNumber>;

    maliciousWithdraw(): Promise<BigNumber>;

    doesNothing(arg0: Arrayish, arg1: Arrayish): Promise<BigNumber>;

    maliciousTargetConsumer(_target: string): Promise<BigNumber>;

    request(
      _id: Arrayish,
      _target: string,
      _callbackFunc: Arrayish
    ): Promise<BigNumber>;

    maliciousPrice(_id: Arrayish): Promise<BigNumber>;
  };
}
