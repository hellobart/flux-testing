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

interface WhitelistedAggregatorProxyInterface extends Interface {
  functions: {
    acceptOwnership: TypedFunctionDescription<{ encode([]: []): string }>;

    addToWhitelist: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    aggregator: TypedFunctionDescription<{ encode([]: []): string }>;

    getAnswer: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    getTimestamp: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    latestAnswer: TypedFunctionDescription<{ encode([]: []): string }>;

    latestRound: TypedFunctionDescription<{ encode([]: []): string }>;

    latestTimestamp: TypedFunctionDescription<{ encode([]: []): string }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    removeFromWhitelist: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    setAggregator: TypedFunctionDescription<{
      encode([_aggregator]: [string]): string;
    }>;

    transferOwnership: TypedFunctionDescription<{
      encode([_to]: [string]): string;
    }>;

    whitelisted: TypedFunctionDescription<{ encode([]: [string]): string }>;
  };

  events: {
    AddedToWhitelist: TypedEventDescription<{
      encodeTopics([user]: [null]): string[];
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

    OwnershipTransfered: TypedEventDescription<{
      encodeTopics([from, to]: [string | null, string | null]): string[];
    }>;

    RemovedFromWhitelist: TypedEventDescription<{
      encodeTopics([user]: [null]): string[];
    }>;
  };
}

export class WhitelistedAggregatorProxy extends Contract {
  connect(
    signerOrProvider: Signer | Provider | string
  ): WhitelistedAggregatorProxy;
  attach(addressOrName: string): WhitelistedAggregatorProxy;
  deployed(): Promise<WhitelistedAggregatorProxy>;

  on(
    event: EventFilter | string,
    listener: Listener
  ): WhitelistedAggregatorProxy;
  once(
    event: EventFilter | string,
    listener: Listener
  ): WhitelistedAggregatorProxy;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): WhitelistedAggregatorProxy;
  removeAllListeners(
    eventName: EventFilter | string
  ): WhitelistedAggregatorProxy;
  removeListener(
    eventName: any,
    listener: Listener
  ): WhitelistedAggregatorProxy;

  interface: WhitelistedAggregatorProxyInterface;

  functions: {
    acceptOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addToWhitelist(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    aggregator(): Promise<string>;

    getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

    getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    latestTimestamp(): Promise<BigNumber>;

    owner(): Promise<string>;

    removeFromWhitelist(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setAggregator(
      _aggregator: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      _to: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    whitelisted(arg0: string): Promise<boolean>;
  };

  acceptOwnership(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  addToWhitelist(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  aggregator(): Promise<string>;

  getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

  getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

  latestAnswer(): Promise<BigNumber>;

  latestRound(): Promise<BigNumber>;

  latestTimestamp(): Promise<BigNumber>;

  owner(): Promise<string>;

  removeFromWhitelist(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setAggregator(
    _aggregator: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    _to: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  whitelisted(arg0: string): Promise<boolean>;

  filters: {
    AddedToWhitelist(user: null): EventFilter;

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

    OwnershipTransfered(from: string | null, to: string | null): EventFilter;

    RemovedFromWhitelist(user: null): EventFilter;
  };

  estimate: {
    acceptOwnership(): Promise<BigNumber>;

    addToWhitelist(_user: string): Promise<BigNumber>;

    aggregator(): Promise<BigNumber>;

    getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

    getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    latestTimestamp(): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    removeFromWhitelist(_user: string): Promise<BigNumber>;

    setAggregator(_aggregator: string): Promise<BigNumber>;

    transferOwnership(_to: string): Promise<BigNumber>;

    whitelisted(arg0: string): Promise<BigNumber>;
  };
}