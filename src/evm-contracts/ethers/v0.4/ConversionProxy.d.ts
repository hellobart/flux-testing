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

interface ConversionProxyInterface extends Interface {
  functions: {
    to: TypedFunctionDescription<{ encode([]: []): string }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    latestAnswer: TypedFunctionDescription<{ encode([]: []): string }>;

    latestRound: TypedFunctionDescription<{ encode([]: []): string }>;

    renounceOwnership: TypedFunctionDescription<{ encode([]: []): string }>;

    latestTimestamp: TypedFunctionDescription<{ encode([]: []): string }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    getAnswer: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    getTimestamp: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    from: TypedFunctionDescription<{ encode([]: []): string }>;

    setAddresses: TypedFunctionDescription<{
      encode([_decimals, _from, _to]: [BigNumberish, string, string]): string;
    }>;

    transferOwnership: TypedFunctionDescription<{
      encode([_newOwner]: [string]): string;
    }>;
  };

  events: {
    AddressesUpdated: TypedEventDescription<{
      encodeTopics([from, to, decimals]: [null, null, null]): string[];
    }>;

    OwnershipRenounced: TypedEventDescription<{
      encodeTopics([previousOwner]: [string | null]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([previousOwner, newOwner]: [
        string | null,
        string | null
      ]): string[];
    }>;

    AnswerUpdated: TypedEventDescription<{
      encodeTopics([current, roundId, timestamp]: [
        BigNumberish | null,
        BigNumberish | null,
        null
      ]): string[];
    }>;

    NewRound: TypedEventDescription<{
      encodeTopics([roundId, startedBy]: [
        BigNumberish | null,
        string | null
      ]): string[];
    }>;
  };
}

export class ConversionProxy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ConversionProxy;
  attach(addressOrName: string): ConversionProxy;
  deployed(): Promise<ConversionProxy>;

  on(event: EventFilter | string, listener: Listener): ConversionProxy;
  once(event: EventFilter | string, listener: Listener): ConversionProxy;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ConversionProxy;
  removeAllListeners(eventName: EventFilter | string): ConversionProxy;
  removeListener(eventName: any, listener: Listener): ConversionProxy;

  interface: ConversionProxyInterface;

  functions: {
    to(): Promise<string>;

    decimals(): Promise<number>;

    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    renounceOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    latestTimestamp(): Promise<BigNumber>;

    owner(): Promise<string>;

    getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

    getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

    from(): Promise<string>;

    setAddresses(
      _decimals: BigNumberish,
      _from: string,
      _to: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      _newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  to(): Promise<string>;

  decimals(): Promise<number>;

  latestAnswer(): Promise<BigNumber>;

  latestRound(): Promise<BigNumber>;

  renounceOwnership(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  latestTimestamp(): Promise<BigNumber>;

  owner(): Promise<string>;

  getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

  getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

  from(): Promise<string>;

  setAddresses(
    _decimals: BigNumberish,
    _from: string,
    _to: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    _newOwner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    AddressesUpdated(from: null, to: null, decimals: null): EventFilter;

    OwnershipRenounced(previousOwner: string | null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    AnswerUpdated(
      current: BigNumberish | null,
      roundId: BigNumberish | null,
      timestamp: null
    ): EventFilter;

    NewRound(
      roundId: BigNumberish | null,
      startedBy: string | null
    ): EventFilter;
  };

  estimate: {
    to(): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    renounceOwnership(): Promise<BigNumber>;

    latestTimestamp(): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

    getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

    from(): Promise<BigNumber>;

    setAddresses(
      _decimals: BigNumberish,
      _from: string,
      _to: string
    ): Promise<BigNumber>;

    transferOwnership(_newOwner: string): Promise<BigNumber>;
  };
}
