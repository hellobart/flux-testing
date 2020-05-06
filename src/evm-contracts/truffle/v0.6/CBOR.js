'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const CBOR = contract({
 "contractName": "CBOR",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206948e5907ef15491fdb7d12f7e2984a2f77acc1d4984b3502d804c2934cceff264736f6c63430006020033",
   "opcodes": "PUSH1 0x56 PUSH1 0x23 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x16 JUMPI INVALID JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH10 0x48E5907EF15491FDB7D1 0x2F PUSH31 0x2984A2F77ACC1D4984B3502D804C2934CCEFF264736F6C6343000602003300 ",
   "sourceMap": "49:2261:35:-:0;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206948e5907ef15491fdb7d12f7e2984a2f77acc1d4984b3502d804c2934cceff264736f6c63430006020033",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH10 0x48E5907EF15491FDB7D1 0x2F PUSH31 0x2984A2F77ACC1D4984B3502D804C2934CCEFF264736F6C6343000602003300 ",
   "sourceMap": "49:2261:35:-:0;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/vendor/CBOR.sol\":\"CBOR\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/vendor/Buffer.sol\":{\"keccak256\":\"0x44f15070c50a25a323775c989660d2c2af86530e994973584ddaadb51ab2fe6d\",\"urls\":[\"bzz-raw://6ff6ef1f796e1c1aa0479d6a186cc8d43bdf22b0dad391d4a897bea3a924e38e\",\"dweb:/ipfs/QmY8Zt8X4cqFSEX8GD6YQbThJe1Z3PDuNNKZzDWpCS69Go\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/vendor/CBOR.sol\":{\"keccak256\":\"0x3df73392669935a05ce78b3fbf53be98d8e099b9c7bb3853aff75c58fb58361b\",\"urls\":[\"bzz-raw://0d1796d56aa7a80157c36102d3f54821ee6f2b58628a276ef463a0f026906158\",\"dweb:/ipfs/Qmbs612T5C2QNuqW4pTBGQgoANiMQReygyccUsLKjCSJv6\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('CBOR.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.CBOR = CBOR
