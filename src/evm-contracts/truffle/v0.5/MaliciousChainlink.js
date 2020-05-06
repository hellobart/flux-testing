'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const MaliciousChainlink = contract({
 "contractName": "MaliciousChainlink",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a723058203a23619ffc5edad67dad9a5c87c094b292f04d2a6a108e62a99f123ba1e3e4bf0029",
   "opcodes": "PUSH1 0x4C PUSH1 0x2C PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x0 DUP2 EQ PUSH1 0x1C JUMPI PUSH1 0x1E JUMP JUMPDEST INVALID JUMPDEST POP ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 GASPRICE 0x23 PUSH2 0x9FFC 0x5e 0xda 0xd6 PUSH30 0xAD9A5C87C094B292F04D2A6A108E62A99F123BA1E3E4BF00290000000000 ",
   "sourceMap": "54:1742:24:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a723058203a23619ffc5edad67dad9a5c87c094b292f04d2a6a108e62a99f123ba1e3e4bf0029",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 GASPRICE 0x23 PUSH2 0x9FFC 0x5e 0xda 0xd6 PUSH30 0xAD9A5C87C094B292F04D2A6A108E62A99F123BA1E3E4BF00290000000000 ",
   "sourceMap": "54:1742:24:-;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/tests/MaliciousChainlink.sol\":\"MaliciousChainlink\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/tests/MaliciousChainlink.sol\":{\"keccak256\":\"0xe1e37d0b1be72cbd69e1191a9256436d1084b4fab054737fec71aae3e9e0d2e4\",\"urls\":[\"bzzr://dba1727a792d0de14fa068b1d408d50b2be35f915a5336614a48be5444c502aa\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/vendor/Buffer.sol\":{\"keccak256\":\"0x0a3bc9b2ae59b3a51f85050a85f77611b44d12d0185dc5744db997e15ccc3ef4\",\"urls\":[\"bzzr://f499c6f1912d0fa8a62ce1ef81cf57c25fa9b15f5a1e2aeaf92dc9d2d1916277\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/vendor/CBOR.sol\":{\"keccak256\":\"0xf4860143694476020a63afb3c3b411aca6c0e89d7b5950545becfe0ce3afa0bc\",\"urls\":[\"bzzr://93dc9867b4a6a870247b89298eedbe565ce958f4012b2617b0ab146fc1634741\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('MaliciousChainlink.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.MaliciousChainlink = MaliciousChainlink
