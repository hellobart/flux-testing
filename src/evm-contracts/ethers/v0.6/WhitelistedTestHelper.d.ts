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

interface WhitelistedTestHelperInterface extends Interface {
  functions: {
    acceptOwnership: TypedFunctionDescription<{ encode([]: []): string }>;

    addToWhitelist: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    disableWhitelist: TypedFunctionDescription<{ encode([]: []): string }>;

    enableWhitelist: TypedFunctionDescription<{ encode([]: []): string }>;

    getValue: TypedFunctionDescription<{ encode([]: []): string }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    removeFromWhitelist: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    transferOwnership: TypedFunctionDescription<{
      encode([_to]: [string]): string;
    }>;

    whitelistEnabled: TypedFunctionDescription<{ encode([]: []): string }>;

    whitelisted: TypedFunctionDescription<{ encode([]: [string]): string }>;
  };

  events: {
    AddedToWhitelist: TypedEventDescription<{
      encodeTopics([user]: [null]): string[];
    }>;

    OwnershipTransferRequested: TypedEventDescription<{
      encodeTopics([from, to]: [string | null, string | null]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([from, to]: [string | null, string | null]): string[];
    }>;

    RemovedFromWhitelist: TypedEventDescription<{
      encodeTopics([user]: [null]): string[];
    }>;

    WhitelistDisabled: TypedEventDescription<{
      encodeTopics([]: []): string[];
    }>;

    WhitelistEnabled: TypedEventDescription<{ encodeTopics([]: []): string[] }>;
  };
}

export class WhitelistedTestHelper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): WhitelistedTestHelper;
  attach(addressOrName: string): WhitelistedTestHelper;
  deployed(): Promise<WhitelistedTestHelper>;

  on(event: EventFilter | string, listener: Listener): WhitelistedTestHelper;
  once(event: EventFilter | string, listener: Listener): WhitelistedTestHelper;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): WhitelistedTestHelper;
  removeAllListeners(eventName: EventFilter | string): WhitelistedTestHelper;
  removeListener(eventName: any, listener: Listener): WhitelistedTestHelper;

  interface: WhitelistedTestHelperInterface;

  functions: {
    acceptOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addToWhitelist(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    disableWhitelist(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    enableWhitelist(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getValue(): Promise<BigNumber>;

    owner(): Promise<string>;

    removeFromWhitelist(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      _to: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    whitelistEnabled(): Promise<boolean>;

    whitelisted(arg0: string): Promise<boolean>;
  };

  acceptOwnership(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  addToWhitelist(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  disableWhitelist(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  enableWhitelist(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getValue(): Promise<BigNumber>;

  owner(): Promise<string>;

  removeFromWhitelist(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    _to: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  whitelistEnabled(): Promise<boolean>;

  whitelisted(arg0: string): Promise<boolean>;

  filters: {
    AddedToWhitelist(user: null): EventFilter;

    OwnershipTransferRequested(
      from: string | null,
      to: string | null
    ): EventFilter;

    OwnershipTransferred(from: string | null, to: string | null): EventFilter;

    RemovedFromWhitelist(user: null): EventFilter;

    WhitelistDisabled(): EventFilter;

    WhitelistEnabled(): EventFilter;
  };

  estimate: {
    acceptOwnership(): Promise<BigNumber>;

    addToWhitelist(_user: string): Promise<BigNumber>;

    disableWhitelist(): Promise<BigNumber>;

    enableWhitelist(): Promise<BigNumber>;

    getValue(): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    removeFromWhitelist(_user: string): Promise<BigNumber>;

    transferOwnership(_to: string): Promise<BigNumber>;

    whitelistEnabled(): Promise<BigNumber>;

    whitelisted(arg0: string): Promise<BigNumber>;
  };
}
