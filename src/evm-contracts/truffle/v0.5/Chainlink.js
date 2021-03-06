'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const Chainlink = contract({
 "contractName": "Chainlink",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820ffebfcd1a81c2cf66c07d1c1ca602341e17303185570467c2d056aa53386e1000029",
   "opcodes": "PUSH1 0x4C PUSH1 0x2C PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x0 DUP2 EQ PUSH1 0x1C JUMPI PUSH1 0x1E JUMP JUMPDEST INVALID JUMPDEST POP ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 SELFDESTRUCT 0xeb 0xfc 0xd1 0xa8 SHR 0x2c 0xf6 PUSH13 0x7D1C1CA602341E17303185570 0x46 PUSH29 0x2D056AA53386E100002900000000000000000000000000000000000000 ",
   "sourceMap": "229:3512:0:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820ffebfcd1a81c2cf66c07d1c1ca602341e17303185570467c2d056aa53386e1000029",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 SELFDESTRUCT 0xeb 0xfc 0xd1 0xa8 SHR 0x2c 0xf6 PUSH13 0x7D1C1CA602341E17303185570 0x46 PUSH29 0x2D056AA53386E100002900000000000000000000000000000000000000 ",
   "sourceMap": "229:3512:0:-;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Uses imported CBOR library for encoding to buffer\",\"methods\":{},\"title\":\"Library for common Chainlink functions\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/Chainlink.sol\":\"Chainlink\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/Chainlink.sol\":{\"keccak256\":\"0xebcc879f64de6845363e288b650f69f5c1005da7d4ddb63f85e991dd8b988978\",\"urls\":[\"bzzr://edc83c866847f1123f18c8c7da21e0e99c59c7dace77022998ac24da5057a03e\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/vendor/Buffer.sol\":{\"keccak256\":\"0x0a3bc9b2ae59b3a51f85050a85f77611b44d12d0185dc5744db997e15ccc3ef4\",\"urls\":[\"bzzr://f499c6f1912d0fa8a62ce1ef81cf57c25fa9b15f5a1e2aeaf92dc9d2d1916277\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/vendor/CBOR.sol\":{\"keccak256\":\"0xf4860143694476020a63afb3c3b411aca6c0e89d7b5950545becfe0ce3afa0bc\",\"urls\":[\"bzzr://93dc9867b4a6a870247b89298eedbe565ce958f4012b2617b0ab146fc1634741\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('Chainlink.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.Chainlink = Chainlink
