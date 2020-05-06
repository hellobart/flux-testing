'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const SafeMath128 = contract({
 "contractName": "SafeMath128",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122063722048e9a63846c65d4835b16d9e51cb0fd0de17a4041cb66e01fcbd242a0164736f6c63430006020033",
   "opcodes": "PUSH1 0x56 PUSH1 0x23 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x16 JUMPI INVALID JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH4 0x722048E9 0xA6 CODESIZE CHAINID 0xC6 0x5D 0x48 CALLDATALOAD 0xB1 PUSH14 0x9E51CB0FD0DE17A4041CB66E01FC 0xBD 0x24 0x2A ADD PUSH5 0x736F6C6343 STOP MOD MUL STOP CALLER ",
   "sourceMap": "700:2777:13:-:0;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122063722048e9a63846c65d4835b16d9e51cb0fd0de17a4041cb66e01fcbd242a0164736f6c63430006020033",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH4 0x722048E9 0xA6 CODESIZE CHAINID 0xC6 0x5D 0x48 CALLDATALOAD 0xB1 PUSH14 0x9E51CB0FD0DE17A4041CB66E01FC 0xBD 0x24 0x2A ADD PUSH5 0x736F6C6343 STOP MOD MUL STOP CALLER ",
   "sourceMap": "700:2777:13:-:0;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Wrappers over Solidity's arithmetic operations with added overflow checks. * Arithmetic operations in Solidity wrap on overflow. This can easily result in bugs, because programmers usually assume that an overflow raises an error, which is the standard behavior in high level programming languages. `SafeMath` restores this intuition by reverting the transaction when an operation overflows. * Using this library instead of the unchecked operations eliminates an entire class of bugs, so it's recommended to use it always. * This library is a version of Open Zeppelin's SafeMath, modified to support unsigned 128 bit integers.\",\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/dev/SafeMath128.sol\":\"SafeMath128\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/dev/SafeMath128.sol\":{\"keccak256\":\"0xf9f8d939c849cdb5e6d07ec317d01083b6e2554310633831ffe8a219a43be9e3\",\"urls\":[\"bzz-raw://ccf0f38e67d5df926bc9c9d9b916add6e1520a421e9215772b6d4eacfa53e21f\",\"dweb:/ipfs/QmVc1JVzseDtC38m9RH1voG4D1HvxKZ2RaYTquNjvEJJJ7\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('SafeMath128.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.SafeMath128 = SafeMath128
