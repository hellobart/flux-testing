'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const ServiceAgreementDecoder = contract({
 "contractName": "ServiceAgreementDecoder",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x6080604052348015600f57600080fd5b50603580601d6000396000f3fe6080604052600080fdfea165627a7a723058205fef4629da83154fd5846a04869ffbbad49159a6a3c669cccf5a81efd59e20be0029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x35 DUP1 PUSH1 0x1D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 0x5f 0xef 0x46 0x29 0xda DUP4 ISZERO 0x4f 0xd5 DUP5 PUSH11 0x4869FFBBAD49159A6A3C6 PUSH10 0xCCCF5A81EFD59E20BE00 0x29 ",
   "sourceMap": "24:1585:12:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;24:1585:12;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x6080604052600080fdfea165627a7a723058205fef4629da83154fd5846a04869ffbbad49159a6a3c669cccf5a81efd59e20be0029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 0x5f 0xef 0x46 0x29 0xda DUP4 ISZERO 0x4f 0xd5 DUP5 PUSH11 0x4869FFBBAD49159A6A3C6 PUSH10 0xCCCF5A81EFD59E20BE00 0x29 ",
   "sourceMap": "24:1585:12:-;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/dev/ServiceAgreementDecoder.sol\":\"ServiceAgreementDecoder\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/dev/ServiceAgreementDecoder.sol\":{\"keccak256\":\"0x809ce1b1bec5b16d0bf0c637fc91b46ecf0707a38f6fc28a342e3336f902006a\",\"urls\":[\"bzzr://62417d69405cc3dc4d2fcfa7322cb491be6b8a73bfa44e779e1ca8d90e4a05fe\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('ServiceAgreementDecoder.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.ServiceAgreementDecoder = ServiceAgreementDecoder
