'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const SafeMath64 = contract({
 "contractName": "SafeMath64",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220346bb883a93f8bd512d3302d47d030198c5d0be86ca97294a1bb5144ecb1291364736f6c63430006020033",
   "opcodes": "PUSH1 0x56 PUSH1 0x23 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x16 JUMPI INVALID JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 CALLVALUE PUSH12 0xB883A93F8BD512D3302D47D0 ADDRESS NOT DUP13 0x5D SIGNEXTEND 0xE8 PUSH13 0xA97294A1BB5144ECB129136473 PUSH16 0x6C634300060200330000000000000000 ",
   "sourceMap": "699:2757:15:-:0;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220346bb883a93f8bd512d3302d47d030198c5d0be86ca97294a1bb5144ecb1291364736f6c63430006020033",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 CALLVALUE PUSH12 0xB883A93F8BD512D3302D47D0 ADDRESS NOT DUP13 0x5D SIGNEXTEND 0xE8 PUSH13 0xA97294A1BB5144ECB129136473 PUSH16 0x6C634300060200330000000000000000 ",
   "sourceMap": "699:2757:15:-:0;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Wrappers over Solidity's arithmetic operations with added overflow checks. * Arithmetic operations in Solidity wrap on overflow. This can easily result in bugs, because programmers usually assume that an overflow raises an error, which is the standard behavior in high level programming languages. `SafeMath` restores this intuition by reverting the transaction when an operation overflows. * Using this library instead of the unchecked operations eliminates an entire class of bugs, so it's recommended to use it always. * This library is a version of Open Zeppelin's SafeMath, modified to support unsigned 64 bit integers.\",\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/dev/SafeMath64.sol\":\"SafeMath64\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/dev/SafeMath64.sol\":{\"keccak256\":\"0x3185ad7d0afd2bd436a2702b33706e3e0f37b93b9db310346fcc26da3b1b47b7\",\"urls\":[\"bzz-raw://e50b02c9472176ad55ba4431e31ed33d9f58965b799c9a1eba7da1937f9f5534\",\"dweb:/ipfs/QmfJdQ3iS2HbWJFeukcNwiXTZzte6oCLHqzErbNrp1C59Z\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('SafeMath64.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.SafeMath64 = SafeMath64
