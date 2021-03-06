'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const CBOR = contract({
 "contractName": "CBOR",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820f1b3f700dfe84741c1d2afc3a55df2c3a12e5d9724c5d1b772f5eaed72e0fa800029",
   "opcodes": "PUSH1 0x4C PUSH1 0x2C PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x0 DUP2 EQ PUSH1 0x1C JUMPI PUSH1 0x1E JUMP JUMPDEST INVALID JUMPDEST POP ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN STOP PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 CALL 0xb3 0xf7 STOP 0xdf 0xe8 0x47 COINBASE 0xc1 0xd2 0xaf 0xc3 0xa5 0x5d CALLCODE 0xc3 LOG1 0x2e 0x5d SWAP8 0x24 0xc5 0xd1 0xb7 PUSH19 0xF5EAED72E0FA80002900000000000000000000 ",
   "sourceMap": "50:2247:34:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820f1b3f700dfe84741c1d2afc3a55df2c3a12e5d9724c5d1b772f5eaed72e0fa800029",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 CALL 0xb3 0xf7 STOP 0xdf 0xe8 0x47 COINBASE 0xc1 0xd2 0xaf 0xc3 0xa5 0x5d CALLCODE 0xc3 LOG1 0x2e 0x5d SWAP8 0x24 0xc5 0xd1 0xb7 PUSH19 0xF5EAED72E0FA80002900000000000000000000 ",
   "sourceMap": "50:2247:34:-;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/vendor/CBOR.sol\":\"CBOR\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/vendor/Buffer.sol\":{\"keccak256\":\"0x900b4c8ab35b4876d89835a8b050c96107ace250a70f64c5bba6a78a60f03883\",\"urls\":[\"bzzr://408340da4e8fa35e608196ee508f11f9d44f6f70a10f0db0083ab20b5a894d59\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/vendor/CBOR.sol\":{\"keccak256\":\"0x525c4abf9b99b71009abcb716742e9bf8d6f159aee816d130a4c9f34c32b80d8\",\"urls\":[\"bzzr://79f1dfcd9236d1e06e919e8e647a46c33efcef6ec84c99f701a6e05e5fc1bf9a\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('CBOR.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.CBOR = CBOR
