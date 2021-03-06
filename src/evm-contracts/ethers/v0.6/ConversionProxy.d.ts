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
    acceptOwnership: TypedFunctionDescription<{ encode([]: []): string }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    from: TypedFunctionDescription<{ encode([]: []): string }>;

    getAnswer: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    getRoundData: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    getTimestamp: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    latestAnswer: TypedFunctionDescription<{ encode([]: []): string }>;

    latestRound: TypedFunctionDescription<{ encode([]: []): string }>;

    latestRoundData: TypedFunctionDescription<{ encode([]: []): string }>;

    latestTimestamp: TypedFunctionDescription<{ encode([]: []): string }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    setAddresses: TypedFunctionDescription<{
      encode([_from, _to]: [string, string]): string;
    }>;

    to: TypedFunctionDescription<{ encode([]: []): string }>;

    transferOwnership: TypedFunctionDescription<{
      encode([_to]: [string]): string;
    }>;
  };

  events: {
    AddressesUpdated: TypedEventDescription<{
      encodeTopics([from, to]: [null, null]): string[];
    }>;

    AnswerUpdated: TypedEventDescription<{
      encodeTopics([current, roundId, timestamp]: [
        BigNumberish | null,
        BigNumberish | null,
        null
      ]): string[];
    }>;

    NewRound: TypedEventDescription<{
      encodeTopics([roundId, startedBy, startedAt]: [
        BigNumberish | null,
        string | null,
        null
      ]): string[];
    }>;

    OwnershipTransferRequested: TypedEventDescription<{
      encodeTopics([from, to]: [string | null, string | null]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([from, to]: [string | null, string | null]): string[];
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
    acceptOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    decimals(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    from(): Promise<string>;

    getAnswer(
      _roundId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getRoundData(
      _roundId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getTimestamp(
      _roundId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    latestAnswer(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    latestRound(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    latestRoundData(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    latestTimestamp(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    owner(): Promise<string>;

    setAddresses(
      _from: string,
      _to: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    to(): Promise<string>;

    transferOwnership(
      _to: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  decimals(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  from(): Promise<string>;

  getAnswer(
    _roundId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getRoundData(
    _roundId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getTimestamp(
    _roundId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  latestAnswer(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  latestRound(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  latestRoundData(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  latestTimestamp(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  owner(): Promise<string>;

  setAddresses(
    _from: string,
    _to: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  to(): Promise<string>;

  transferOwnership(
    _to: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    AddressesUpdated(from: null, to: null): EventFilter;

    AnswerUpdated(
      current: BigNumberish | null,
      roundId: BigNumberish | null,
      timestamp: null
    ): EventFilter;

    NewRound(
      roundId: BigNumberish | null,
      startedBy: string | null,
      startedAt: null
    ): EventFilter;

    OwnershipTransferRequested(
      from: string | null,
      to: string | null
    ): EventFilter;

    OwnershipTransferred(from: string | null, to: string | null): EventFilter;
  };

  estimate: {
    acceptOwnership(): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    from(): Promise<BigNumber>;

    getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

    getRoundData(_roundId: BigNumberish): Promise<BigNumber>;

    getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    latestRoundData(): Promise<BigNumber>;

    latestTimestamp(): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    setAddresses(_from: string, _to: string): Promise<BigNumber>;

    to(): Promise<BigNumber>;

    transferOwnership(_to: string): Promise<BigNumber>;
  };
}
