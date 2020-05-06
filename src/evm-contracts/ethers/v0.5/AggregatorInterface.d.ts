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

interface AggregatorInterfaceInterface extends Interface {
  functions: {
    latestAnswer: TypedFunctionDescription<{ encode([]: []): string }>;

    latestRound: TypedFunctionDescription<{ encode([]: []): string }>;

    latestTimestamp: TypedFunctionDescription<{ encode([]: []): string }>;

    getAnswer: TypedFunctionDescription<{
      encode([roundId]: [BigNumberish]): string;
    }>;

    getTimestamp: TypedFunctionDescription<{
      encode([roundId]: [BigNumberish]): string;
    }>;
  };

  events: {
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

export class AggregatorInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): AggregatorInterface;
  attach(addressOrName: string): AggregatorInterface;
  deployed(): Promise<AggregatorInterface>;

  on(event: EventFilter | string, listener: Listener): AggregatorInterface;
  once(event: EventFilter | string, listener: Listener): AggregatorInterface;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): AggregatorInterface;
  removeAllListeners(eventName: EventFilter | string): AggregatorInterface;
  removeListener(eventName: any, listener: Listener): AggregatorInterface;

  interface: AggregatorInterfaceInterface;

  functions: {
    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    latestTimestamp(): Promise<BigNumber>;

    getAnswer(roundId: BigNumberish): Promise<BigNumber>;

    getTimestamp(roundId: BigNumberish): Promise<BigNumber>;
  };

  latestAnswer(): Promise<BigNumber>;

  latestRound(): Promise<BigNumber>;

  latestTimestamp(): Promise<BigNumber>;

  getAnswer(roundId: BigNumberish): Promise<BigNumber>;

  getTimestamp(roundId: BigNumberish): Promise<BigNumber>;

  filters: {
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
    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    latestTimestamp(): Promise<BigNumber>;

    getAnswer(roundId: BigNumberish): Promise<BigNumber>;

    getTimestamp(roundId: BigNumberish): Promise<BigNumber>;
  };
}
