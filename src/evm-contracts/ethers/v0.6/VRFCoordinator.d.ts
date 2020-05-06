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

interface VRFCoordinatorInterface extends Interface {
  functions: {
    callbacks: TypedFunctionDescription<{ encode([]: [Arrayish]): string }>;

    fulfillRandomnessRequest: TypedFunctionDescription<{
      encode([_proof]: [Arrayish]): string;
    }>;

    hashOfKey: TypedFunctionDescription<{
      encode([_publicKey]: [BigNumberish[]]): string;
    }>;

    onTokenTransfer: TypedFunctionDescription<{
      encode([_sender, _fee, _data]: [string, BigNumberish, Arrayish]): string;
    }>;

    registerProvingKey: TypedFunctionDescription<{
      encode([_fee, _publicProvingKey, _jobID]: [
        BigNumberish,
        BigNumberish[],
        Arrayish
      ]): string;
    }>;

    serviceAgreements: TypedFunctionDescription<{
      encode([]: [Arrayish]): string;
    }>;

    withdraw: TypedFunctionDescription<{
      encode([_recipient, _amount]: [string, BigNumberish]): string;
    }>;

    withdrawableTokens: TypedFunctionDescription<{
      encode([]: [string]): string;
    }>;
  };

  events: {
    NewServiceAgreement: TypedEventDescription<{
      encodeTopics([keyHash, fee]: [null, null]): string[];
    }>;

    RandomnessRequest: TypedEventDescription<{
      encodeTopics([keyHash, seed, jobID, sender, fee]: [
        null,
        null,
        Arrayish | null,
        null,
        null
      ]): string[];
    }>;
  };
}

export class VRFCoordinator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): VRFCoordinator;
  attach(addressOrName: string): VRFCoordinator;
  deployed(): Promise<VRFCoordinator>;

  on(event: EventFilter | string, listener: Listener): VRFCoordinator;
  once(event: EventFilter | string, listener: Listener): VRFCoordinator;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): VRFCoordinator;
  removeAllListeners(eventName: EventFilter | string): VRFCoordinator;
  removeListener(eventName: any, listener: Listener): VRFCoordinator;

  interface: VRFCoordinatorInterface;

  functions: {
    callbacks(
      arg0: Arrayish
    ): Promise<{
      callbackContract: string;
      randomnessFee: BigNumber;
      seed: BigNumber;
      0: string;
      1: BigNumber;
      2: BigNumber;
    }>;

    fulfillRandomnessRequest(
      _proof: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    hashOfKey(_publicKey: BigNumberish[]): Promise<string>;

    onTokenTransfer(
      _sender: string,
      _fee: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    registerProvingKey(
      _fee: BigNumberish,
      _publicProvingKey: BigNumberish[],
      _jobID: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    serviceAgreements(
      arg0: Arrayish
    ): Promise<{
      vRFOracle: string;
      jobID: string;
      fee: BigNumber;
      0: string;
      1: string;
      2: BigNumber;
    }>;

    withdraw(
      _recipient: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdrawableTokens(arg0: string): Promise<BigNumber>;
  };

  callbacks(
    arg0: Arrayish
  ): Promise<{
    callbackContract: string;
    randomnessFee: BigNumber;
    seed: BigNumber;
    0: string;
    1: BigNumber;
    2: BigNumber;
  }>;

  fulfillRandomnessRequest(
    _proof: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  hashOfKey(_publicKey: BigNumberish[]): Promise<string>;

  onTokenTransfer(
    _sender: string,
    _fee: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  registerProvingKey(
    _fee: BigNumberish,
    _publicProvingKey: BigNumberish[],
    _jobID: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  serviceAgreements(
    arg0: Arrayish
  ): Promise<{
    vRFOracle: string;
    jobID: string;
    fee: BigNumber;
    0: string;
    1: string;
    2: BigNumber;
  }>;

  withdraw(
    _recipient: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  withdrawableTokens(arg0: string): Promise<BigNumber>;

  filters: {
    NewServiceAgreement(keyHash: null, fee: null): EventFilter;

    RandomnessRequest(
      keyHash: null,
      seed: null,
      jobID: Arrayish | null,
      sender: null,
      fee: null
    ): EventFilter;
  };

  estimate: {
    callbacks(arg0: Arrayish): Promise<BigNumber>;

    fulfillRandomnessRequest(_proof: Arrayish): Promise<BigNumber>;

    hashOfKey(_publicKey: BigNumberish[]): Promise<BigNumber>;

    onTokenTransfer(
      _sender: string,
      _fee: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    registerProvingKey(
      _fee: BigNumberish,
      _publicProvingKey: BigNumberish[],
      _jobID: Arrayish
    ): Promise<BigNumber>;

    serviceAgreements(arg0: Arrayish): Promise<BigNumber>;

    withdraw(_recipient: string, _amount: BigNumberish): Promise<BigNumber>;

    withdrawableTokens(arg0: string): Promise<BigNumber>;
  };
}