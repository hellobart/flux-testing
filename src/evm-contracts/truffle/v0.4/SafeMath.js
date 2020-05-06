'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const SafeMath = contract({
 "contractName": "SafeMath",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820928661c7d1cceffc6cbf6a6bedc82af98f075f1a0af994e6832d067b73c943570029",
   "opcodes": "PUSH1 0x4C PUSH1 0x2C PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x0 DUP2 EQ PUSH1 0x1C JUMPI PUSH1 0x1E JUMP JUMPDEST INVALID JUMPDEST POP ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN STOP PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 SWAP3 DUP7 PUSH2 0xC7D1 0xcc 0xef 0xfc PUSH13 0xBF6A6BEDC82AF98F075F1A0AF9 SWAP5 0xe6 DUP4 0x2d MOD PUSH28 0x73C94357002900000000000000000000000000000000000000000000 ",
   "sourceMap": "117:1251:40:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820928661c7d1cceffc6cbf6a6bedc82af98f075f1a0af994e6832d067b73c943570029",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 SWAP3 DUP7 PUSH2 0xC7D1 0xcc 0xef 0xfc PUSH13 0xBF6A6BEDC82AF98F075F1A0AF9 SWAP5 0xe6 DUP4 0x2d MOD PUSH28 0x73C94357002900000000000000000000000000000000000000000000 ",
   "sourceMap": "117:1251:40:-;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{},\"title\":\"SafeMath\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/vendor/SafeMath.sol\":\"SafeMath\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/vendor/SafeMath.sol\":{\"keccak256\":\"0x65f5d6e031847d23e8c1481931224c814cccda28bb2364e6fb0f109f4357b6b4\",\"urls\":[\"bzzr://2c5808ad411781bc368fbe6c5e8b36b08b23bf604e1e9fb6337f6f5069fdba4a\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('SafeMath.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.SafeMath = SafeMath
