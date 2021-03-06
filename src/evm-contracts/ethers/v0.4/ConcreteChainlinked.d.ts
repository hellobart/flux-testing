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

interface ConcreteChainlinkedInterface extends Interface {
  functions: {
    publicLINK: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

    publicCancelRequest: TypedFunctionDescription<{
      encode([_requestId, _payment, _callbackFunctionId, _expiration]: [
        Arrayish,
        BigNumberish,
        Arrayish,
        BigNumberish
      ]): string;
    }>;

    publicAddExternalRequest: TypedFunctionDescription<{
      encode([_oracle, _requestId]: [string, Arrayish]): string;
    }>;

    fulfillRequest: TypedFunctionDescription<{
      encode([_requestId]: [Arrayish, Arrayish]): string;
    }>;

    publicRequest: TypedFunctionDescription<{
      encode([_id, _address, _fulfillmentSignature, _wei]: [
        Arrayish,
        string,
        Arrayish,
        BigNumberish
      ]): string;
    }>;

    publicChainlinkToken: TypedFunctionDescription<{ encode([]: []): string }>;

    publicRequestRunTo: TypedFunctionDescription<{
      encode([_oracle, _id, _address, _fulfillmentSignature, _wei]: [
        string,
        Arrayish,
        string,
        Arrayish,
        BigNumberish
      ]): string;
    }>;

    publicFulfillChainlinkRequest: TypedFunctionDescription<{
      encode([_requestId]: [Arrayish, Arrayish]): string;
    }>;

    publicNewRequest: TypedFunctionDescription<{
      encode([_id, _address, _fulfillmentSignature]: [
        Arrayish,
        string,
        Arrayish
      ]): string;
    }>;

    publicOracleAddress: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    Request: TypedEventDescription<{
      encodeTopics([id, callbackAddress, callbackfunctionSelector, data]: [
        null,
        null,
        null,
        null
      ]): string[];
    }>;

    LinkAmount: TypedEventDescription<{
      encodeTopics([amount]: [null]): string[];
    }>;

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

export class ConcreteChainlinked extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ConcreteChainlinked;
  attach(addressOrName: string): ConcreteChainlinked;
  deployed(): Promise<ConcreteChainlinked>;

  on(event: EventFilter | string, listener: Listener): ConcreteChainlinked;
  once(event: EventFilter | string, listener: Listener): ConcreteChainlinked;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ConcreteChainlinked;
  removeAllListeners(eventName: EventFilter | string): ConcreteChainlinked;
  removeListener(eventName: any, listener: Listener): ConcreteChainlinked;

  interface: ConcreteChainlinkedInterface;

  functions: {
    publicLINK(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    publicCancelRequest(
      _requestId: Arrayish,
      _payment: BigNumberish,
      _callbackFunctionId: Arrayish,
      _expiration: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    publicAddExternalRequest(
      _oracle: string,
      _requestId: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    fulfillRequest(
      _requestId: Arrayish,
      arg1: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    publicRequest(
      _id: Arrayish,
      _address: string,
      _fulfillmentSignature: Arrayish,
      _wei: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    publicChainlinkToken(): Promise<string>;

    publicRequestRunTo(
      _oracle: string,
      _id: Arrayish,
      _address: string,
      _fulfillmentSignature: Arrayish,
      _wei: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    publicFulfillChainlinkRequest(
      _requestId: Arrayish,
      arg1: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    publicNewRequest(
      _id: Arrayish,
      _address: string,
      _fulfillmentSignature: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    publicOracleAddress(): Promise<string>;
  };

  publicLINK(
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  publicCancelRequest(
    _requestId: Arrayish,
    _payment: BigNumberish,
    _callbackFunctionId: Arrayish,
    _expiration: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  publicAddExternalRequest(
    _oracle: string,
    _requestId: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  fulfillRequest(
    _requestId: Arrayish,
    arg1: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  publicRequest(
    _id: Arrayish,
    _address: string,
    _fulfillmentSignature: Arrayish,
    _wei: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  publicChainlinkToken(): Promise<string>;

  publicRequestRunTo(
    _oracle: string,
    _id: Arrayish,
    _address: string,
    _fulfillmentSignature: Arrayish,
    _wei: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  publicFulfillChainlinkRequest(
    _requestId: Arrayish,
    arg1: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  publicNewRequest(
    _id: Arrayish,
    _address: string,
    _fulfillmentSignature: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  publicOracleAddress(): Promise<string>;

  filters: {
    Request(
      id: null,
      callbackAddress: null,
      callbackfunctionSelector: null,
      data: null
    ): EventFilter;

    LinkAmount(amount: null): EventFilter;

    ChainlinkRequested(id: Arrayish | null): EventFilter;

    ChainlinkFulfilled(id: Arrayish | null): EventFilter;

    ChainlinkCancelled(id: Arrayish | null): EventFilter;
  };

  estimate: {
    publicLINK(_amount: BigNumberish): Promise<BigNumber>;

    publicCancelRequest(
      _requestId: Arrayish,
      _payment: BigNumberish,
      _callbackFunctionId: Arrayish,
      _expiration: BigNumberish
    ): Promise<BigNumber>;

    publicAddExternalRequest(
      _oracle: string,
      _requestId: Arrayish
    ): Promise<BigNumber>;

    fulfillRequest(_requestId: Arrayish, arg1: Arrayish): Promise<BigNumber>;

    publicRequest(
      _id: Arrayish,
      _address: string,
      _fulfillmentSignature: Arrayish,
      _wei: BigNumberish
    ): Promise<BigNumber>;

    publicChainlinkToken(): Promise<BigNumber>;

    publicRequestRunTo(
      _oracle: string,
      _id: Arrayish,
      _address: string,
      _fulfillmentSignature: Arrayish,
      _wei: BigNumberish
    ): Promise<BigNumber>;

    publicFulfillChainlinkRequest(
      _requestId: Arrayish,
      arg1: Arrayish
    ): Promise<BigNumber>;

    publicNewRequest(
      _id: Arrayish,
      _address: string,
      _fulfillmentSignature: Arrayish
    ): Promise<BigNumber>;

    publicOracleAddress(): Promise<BigNumber>;
  };
}
