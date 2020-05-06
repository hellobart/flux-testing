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

interface WhitelistedAggregatorInterface extends Interface {
  functions: {
    VERSION: TypedFunctionDescription<{ encode([]: []): string }>;

    acceptOwnership: TypedFunctionDescription<{ encode([]: []): string }>;

    addOracle: TypedFunctionDescription<{
      encode([_oracle, _admin, _minAnswers, _maxAnswers, _restartDelay]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    addToWhitelist: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    allocatedFunds: TypedFunctionDescription<{ encode([]: []): string }>;

    availableFunds: TypedFunctionDescription<{ encode([]: []): string }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    description: TypedFunctionDescription<{ encode([]: []): string }>;

    getAdmin: TypedFunctionDescription<{ encode([_oracle]: [string]): string }>;

    getAnswer: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    getOracles: TypedFunctionDescription<{ encode([]: []): string }>;

    getOriginatingRoundOfAnswer: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    getRoundStartedAt: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    getTimedOutStatus: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    getTimestamp: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    latestAnswer: TypedFunctionDescription<{ encode([]: []): string }>;

    latestRound: TypedFunctionDescription<{ encode([]: []): string }>;

    latestSubmission: TypedFunctionDescription<{
      encode([_oracle]: [string]): string;
    }>;

    latestTimestamp: TypedFunctionDescription<{ encode([]: []): string }>;

    maxAnswerCount: TypedFunctionDescription<{ encode([]: []): string }>;

    minAnswerCount: TypedFunctionDescription<{ encode([]: []): string }>;

    onTokenTransfer: TypedFunctionDescription<{
      encode([, ,]: [string, BigNumberish, Arrayish]): string;
    }>;

    oracleCount: TypedFunctionDescription<{ encode([]: []): string }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    paymentAmount: TypedFunctionDescription<{ encode([]: []): string }>;

    removeFromWhitelist: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    removeOracle: TypedFunctionDescription<{
      encode([_oracle, _minAnswers, _maxAnswers, _restartDelay]: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    reportingRound: TypedFunctionDescription<{ encode([]: []): string }>;

    reportingRoundStartedAt: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    restartDelay: TypedFunctionDescription<{ encode([]: []): string }>;

    roundState: TypedFunctionDescription<{
      encode([_oracle]: [string]): string;
    }>;

    setAuthorization: TypedFunctionDescription<{
      encode([_requester, _allowed]: [string, boolean]): string;
    }>;

    startNewRound: TypedFunctionDescription<{ encode([]: []): string }>;

    timeout: TypedFunctionDescription<{ encode([]: []): string }>;

    transferOwnership: TypedFunctionDescription<{
      encode([_to]: [string]): string;
    }>;

    updateAdmin: TypedFunctionDescription<{
      encode([_oracle, _newAdmin]: [string, string]): string;
    }>;

    updateAnswer: TypedFunctionDescription<{
      encode([_round, _answer]: [BigNumberish, BigNumberish]): string;
    }>;

    updateAvailableFunds: TypedFunctionDescription<{ encode([]: []): string }>;

    updateFutureRounds: TypedFunctionDescription<{
      encode([
        _newPaymentAmount,
        _minAnswers,
        _maxAnswers,
        _restartDelay,
        _timeout
      ]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    whitelisted: TypedFunctionDescription<{ encode([]: [string]): string }>;

    withdraw: TypedFunctionDescription<{
      encode([_oracle, _recipient, _amount]: [
        string,
        string,
        BigNumberish
      ]): string;
    }>;

    withdrawFunds: TypedFunctionDescription<{
      encode([_recipient, _amount]: [string, BigNumberish]): string;
    }>;

    withdrawable: TypedFunctionDescription<{
      encode([_oracle]: [string]): string;
    }>;
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

    AvailableFundsUpdated: TypedEventDescription<{
      encodeTopics([amount]: [BigNumberish | null]): string[];
    }>;

    NewRound: TypedEventDescription<{
      encodeTopics([roundId, startedBy, startedAt]: [
        BigNumberish | null,
        string | null,
        null
      ]): string[];
    }>;

    OracleAdded: TypedEventDescription<{
      encodeTopics([oracle]: [string | null]): string[];
    }>;

    OracleAdminUpdated: TypedEventDescription<{
      encodeTopics([oracle, newAdmin]: [
        string | null,
        string | null
      ]): string[];
    }>;

    OracleRemoved: TypedEventDescription<{
      encodeTopics([oracle]: [string | null]): string[];
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

    RequesterAuthorizationSet: TypedEventDescription<{
      encodeTopics([requester, allowed]: [string | null, null]): string[];
    }>;

    RoundDetailsUpdated: TypedEventDescription<{
      encodeTopics([
        paymentAmount,
        minAnswerCount,
        maxAnswerCount,
        restartDelay,
        timeout
      ]: [
        BigNumberish | null,
        BigNumberish | null,
        BigNumberish | null,
        null,
        null
      ]): string[];
    }>;

    SubmissionReceived: TypedEventDescription<{
      encodeTopics([answer, round, oracle]: [
        BigNumberish | null,
        BigNumberish | null,
        string | null
      ]): string[];
    }>;
  };
}

export class WhitelistedAggregator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): WhitelistedAggregator;
  attach(addressOrName: string): WhitelistedAggregator;
  deployed(): Promise<WhitelistedAggregator>;

  on(event: EventFilter | string, listener: Listener): WhitelistedAggregator;
  once(event: EventFilter | string, listener: Listener): WhitelistedAggregator;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): WhitelistedAggregator;
  removeAllListeners(eventName: EventFilter | string): WhitelistedAggregator;
  removeListener(eventName: any, listener: Listener): WhitelistedAggregator;

  interface: WhitelistedAggregatorInterface;

  functions: {
    VERSION(): Promise<BigNumber>;

    acceptOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addOracle(
      _oracle: string,
      _admin: string,
      _minAnswers: BigNumberish,
      _maxAnswers: BigNumberish,
      _restartDelay: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addToWhitelist(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    allocatedFunds(): Promise<BigNumber>;

    availableFunds(): Promise<BigNumber>;

    decimals(): Promise<number>;

    description(): Promise<string>;

    getAdmin(_oracle: string): Promise<string>;

    getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

    getOracles(): Promise<string[]>;

    getOriginatingRoundOfAnswer(_roundId: BigNumberish): Promise<BigNumber>;

    getRoundStartedAt(_roundId: BigNumberish): Promise<BigNumber>;

    getTimedOutStatus(_roundId: BigNumberish): Promise<boolean>;

    getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    latestSubmission(
      _oracle: string
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    latestTimestamp(): Promise<BigNumber>;

    maxAnswerCount(): Promise<number>;

    minAnswerCount(): Promise<number>;

    onTokenTransfer(
      arg0: string,
      arg1: BigNumberish,
      arg2: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    oracleCount(): Promise<number>;

    owner(): Promise<string>;

    paymentAmount(): Promise<BigNumber>;

    removeFromWhitelist(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    removeOracle(
      _oracle: string,
      _minAnswers: BigNumberish,
      _maxAnswers: BigNumberish,
      _restartDelay: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    reportingRound(): Promise<BigNumber>;

    reportingRoundStartedAt(): Promise<BigNumber>;

    restartDelay(): Promise<number>;

    roundState(
      _oracle: string
    ): Promise<{
      _reportableRoundId: number;
      _eligibleToSubmit: boolean;
      _latestRoundAnswer: BigNumber;
      _timesOutAt: BigNumber;
      _availableFunds: BigNumber;
      _paymentAmount: BigNumber;
      0: number;
      1: boolean;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
    }>;

    setAuthorization(
      _requester: string,
      _allowed: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    startNewRound(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    timeout(): Promise<number>;

    transferOwnership(
      _to: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateAdmin(
      _oracle: string,
      _newAdmin: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateAnswer(
      _round: BigNumberish,
      _answer: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateAvailableFunds(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateFutureRounds(
      _newPaymentAmount: BigNumberish,
      _minAnswers: BigNumberish,
      _maxAnswers: BigNumberish,
      _restartDelay: BigNumberish,
      _timeout: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    whitelisted(arg0: string): Promise<boolean>;

    withdraw(
      _oracle: string,
      _recipient: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdrawFunds(
      _recipient: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdrawable(_oracle: string): Promise<BigNumber>;
  };

  VERSION(): Promise<BigNumber>;

  acceptOwnership(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  addOracle(
    _oracle: string,
    _admin: string,
    _minAnswers: BigNumberish,
    _maxAnswers: BigNumberish,
    _restartDelay: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  addToWhitelist(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  allocatedFunds(): Promise<BigNumber>;

  availableFunds(): Promise<BigNumber>;

  decimals(): Promise<number>;

  description(): Promise<string>;

  getAdmin(_oracle: string): Promise<string>;

  getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

  getOracles(): Promise<string[]>;

  getOriginatingRoundOfAnswer(_roundId: BigNumberish): Promise<BigNumber>;

  getRoundStartedAt(_roundId: BigNumberish): Promise<BigNumber>;

  getTimedOutStatus(_roundId: BigNumberish): Promise<boolean>;

  getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

  latestAnswer(): Promise<BigNumber>;

  latestRound(): Promise<BigNumber>;

  latestSubmission(
    _oracle: string
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  latestTimestamp(): Promise<BigNumber>;

  maxAnswerCount(): Promise<number>;

  minAnswerCount(): Promise<number>;

  onTokenTransfer(
    arg0: string,
    arg1: BigNumberish,
    arg2: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  oracleCount(): Promise<number>;

  owner(): Promise<string>;

  paymentAmount(): Promise<BigNumber>;

  removeFromWhitelist(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  removeOracle(
    _oracle: string,
    _minAnswers: BigNumberish,
    _maxAnswers: BigNumberish,
    _restartDelay: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  reportingRound(): Promise<BigNumber>;

  reportingRoundStartedAt(): Promise<BigNumber>;

  restartDelay(): Promise<number>;

  roundState(
    _oracle: string
  ): Promise<{
    _reportableRoundId: number;
    _eligibleToSubmit: boolean;
    _latestRoundAnswer: BigNumber;
    _timesOutAt: BigNumber;
    _availableFunds: BigNumber;
    _paymentAmount: BigNumber;
    0: number;
    1: boolean;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
  }>;

  setAuthorization(
    _requester: string,
    _allowed: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  startNewRound(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  timeout(): Promise<number>;

  transferOwnership(
    _to: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateAdmin(
    _oracle: string,
    _newAdmin: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateAnswer(
    _round: BigNumberish,
    _answer: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateAvailableFunds(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateFutureRounds(
    _newPaymentAmount: BigNumberish,
    _minAnswers: BigNumberish,
    _maxAnswers: BigNumberish,
    _restartDelay: BigNumberish,
    _timeout: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  whitelisted(arg0: string): Promise<boolean>;

  withdraw(
    _oracle: string,
    _recipient: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  withdrawFunds(
    _recipient: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  withdrawable(_oracle: string): Promise<BigNumber>;

  filters: {
    AddedToWhitelist(user: null): EventFilter;

    AnswerUpdated(
      current: BigNumberish | null,
      roundId: BigNumberish | null,
      timestamp: null
    ): EventFilter;

    AvailableFundsUpdated(amount: BigNumberish | null): EventFilter;

    NewRound(
      roundId: BigNumberish | null,
      startedBy: string | null,
      startedAt: null
    ): EventFilter;

    OracleAdded(oracle: string | null): EventFilter;

    OracleAdminUpdated(
      oracle: string | null,
      newAdmin: string | null
    ): EventFilter;

    OracleRemoved(oracle: string | null): EventFilter;

    OwnershipTransferRequested(
      from: string | null,
      to: string | null
    ): EventFilter;

    OwnershipTransfered(from: string | null, to: string | null): EventFilter;

    RemovedFromWhitelist(user: null): EventFilter;

    RequesterAuthorizationSet(
      requester: string | null,
      allowed: null
    ): EventFilter;

    RoundDetailsUpdated(
      paymentAmount: BigNumberish | null,
      minAnswerCount: BigNumberish | null,
      maxAnswerCount: BigNumberish | null,
      restartDelay: null,
      timeout: null
    ): EventFilter;

    SubmissionReceived(
      answer: BigNumberish | null,
      round: BigNumberish | null,
      oracle: string | null
    ): EventFilter;
  };

  estimate: {
    VERSION(): Promise<BigNumber>;

    acceptOwnership(): Promise<BigNumber>;

    addOracle(
      _oracle: string,
      _admin: string,
      _minAnswers: BigNumberish,
      _maxAnswers: BigNumberish,
      _restartDelay: BigNumberish
    ): Promise<BigNumber>;

    addToWhitelist(_user: string): Promise<BigNumber>;

    allocatedFunds(): Promise<BigNumber>;

    availableFunds(): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    description(): Promise<BigNumber>;

    getAdmin(_oracle: string): Promise<BigNumber>;

    getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

    getOracles(): Promise<BigNumber>;

    getOriginatingRoundOfAnswer(_roundId: BigNumberish): Promise<BigNumber>;

    getRoundStartedAt(_roundId: BigNumberish): Promise<BigNumber>;

    getTimedOutStatus(_roundId: BigNumberish): Promise<BigNumber>;

    getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    latestSubmission(_oracle: string): Promise<BigNumber>;

    latestTimestamp(): Promise<BigNumber>;

    maxAnswerCount(): Promise<BigNumber>;

    minAnswerCount(): Promise<BigNumber>;

    onTokenTransfer(
      arg0: string,
      arg1: BigNumberish,
      arg2: Arrayish
    ): Promise<BigNumber>;

    oracleCount(): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    paymentAmount(): Promise<BigNumber>;

    removeFromWhitelist(_user: string): Promise<BigNumber>;

    removeOracle(
      _oracle: string,
      _minAnswers: BigNumberish,
      _maxAnswers: BigNumberish,
      _restartDelay: BigNumberish
    ): Promise<BigNumber>;

    reportingRound(): Promise<BigNumber>;

    reportingRoundStartedAt(): Promise<BigNumber>;

    restartDelay(): Promise<BigNumber>;

    roundState(_oracle: string): Promise<BigNumber>;

    setAuthorization(_requester: string, _allowed: boolean): Promise<BigNumber>;

    startNewRound(): Promise<BigNumber>;

    timeout(): Promise<BigNumber>;

    transferOwnership(_to: string): Promise<BigNumber>;

    updateAdmin(_oracle: string, _newAdmin: string): Promise<BigNumber>;

    updateAnswer(
      _round: BigNumberish,
      _answer: BigNumberish
    ): Promise<BigNumber>;

    updateAvailableFunds(): Promise<BigNumber>;

    updateFutureRounds(
      _newPaymentAmount: BigNumberish,
      _minAnswers: BigNumberish,
      _maxAnswers: BigNumberish,
      _restartDelay: BigNumberish,
      _timeout: BigNumberish
    ): Promise<BigNumber>;

    whitelisted(arg0: string): Promise<BigNumber>;

    withdraw(
      _oracle: string,
      _recipient: string,
      _amount: BigNumberish
    ): Promise<BigNumber>;

    withdrawFunds(
      _recipient: string,
      _amount: BigNumberish
    ): Promise<BigNumber>;

    withdrawable(_oracle: string): Promise<BigNumber>;
  };
}
