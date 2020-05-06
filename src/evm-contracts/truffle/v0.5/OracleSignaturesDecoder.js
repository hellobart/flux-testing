'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const OracleSignaturesDecoder = contract({
 "contractName": "OracleSignaturesDecoder",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x6080604052348015600f57600080fd5b50603580601d6000396000f3fe6080604052600080fdfea165627a7a723058203a18c5bb1433db0d24441493a3de905e08f1d1b1dcb6edcbd10383e935c59c4a0029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x35 DUP1 PUSH1 0x1D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 GASPRICE XOR 0xc5 0xbb EQ CALLER 0xdb 0xd 0x24 DIFFICULTY EQ SWAP4 LOG3 0xde SWAP1 0x5e ADDMOD CALL 0xd1 0xb1 0xdc 0xb6 0xed 0xcb 0xd1 SUB DUP4 0xe9 CALLDATALOAD 0xc5 SWAP13 0x4a STOP 0x29 ",
   "sourceMap": "24:489:10:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;24:489:10;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x6080604052600080fdfea165627a7a723058203a18c5bb1433db0d24441493a3de905e08f1d1b1dcb6edcbd10383e935c59c4a0029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 GASPRICE XOR 0xc5 0xbb EQ CALLER 0xdb 0xd 0x24 DIFFICULTY EQ SWAP4 LOG3 0xde SWAP1 0x5e ADDMOD CALL 0xd1 0xb1 0xdc 0xb6 0xed 0xcb 0xd1 SUB DUP4 0xe9 CALLDATALOAD 0xc5 SWAP13 0x4a STOP 0x29 ",
   "sourceMap": "24:489:10:-;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/dev/OracleSignaturesDecoder.sol\":\"OracleSignaturesDecoder\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/dev/OracleSignaturesDecoder.sol\":{\"keccak256\":\"0xbfadafdb8329e1022ad617e071ccfe330897bc044983998f1de8dae266affb63\",\"urls\":[\"bzzr://7260171bb3cc1ed67d2f5bf6a08ca3e9fe1fc97ffeb57c3a2255021f41d7609f\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('OracleSignaturesDecoder.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.OracleSignaturesDecoder = OracleSignaturesDecoder
