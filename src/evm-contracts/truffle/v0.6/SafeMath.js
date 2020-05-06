'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const SafeMath = contract({
 "contractName": "SafeMath",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220012e51d0804c693bd361a46a8d0ba45181d020dcacd8479ddcc6127c9ff7804b64736f6c63430006020033",
   "opcodes": "PUSH1 0x56 PUSH1 0x23 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x16 JUMPI INVALID JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 ADD 0x2E MLOAD 0xD0 DUP1 0x4C PUSH10 0x3BD361A46A8D0BA45181 0xD0 KECCAK256 0xDC 0xAC 0xD8 SELFBALANCE SWAP14 0xDC 0xC6 SLT PUSH29 0x9FF7804B64736F6C634300060200330000000000000000000000000000 ",
   "sourceMap": "589:2774:20:-:0;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220012e51d0804c693bd361a46a8d0ba45181d020dcacd8479ddcc6127c9ff7804b64736f6c63430006020033",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 ADD 0x2E MLOAD 0xD0 DUP1 0x4C PUSH10 0x3BD361A46A8D0BA45181 0xD0 KECCAK256 0xDC 0xAC 0xD8 SELFBALANCE SWAP14 0xDC 0xC6 SLT PUSH29 0x9FF7804B64736F6C634300060200330000000000000000000000000000 ",
   "sourceMap": "589:2774:20:-:0;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Wrappers over Solidity's arithmetic operations with added overflow checks. * Arithmetic operations in Solidity wrap on overflow. This can easily result in bugs, because programmers usually assume that an overflow raises an error, which is the standard behavior in high level programming languages. `SafeMath` restores this intuition by reverting the transaction when an operation overflows. * Using this library instead of the unchecked operations eliminates an entire class of bugs, so it's recommended to use it always.\",\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/dev/vendor/SafeMath.sol\":\"SafeMath\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/dev/vendor/SafeMath.sol\":{\"keccak256\":\"0x95dbe2dd5ab8682b99bc3d7d297b621d4237442da160f78d3323ee5c4a06ded3\",\"urls\":[\"bzz-raw://d753308ff4eb43fba6f9ede371a33f707c5818350770dcb078a7d78ac8251361\",\"dweb:/ipfs/Qme64eYKWoTQiP3WhqGHoMqrENNZ9L8SdBLQ2hx5SmzUda\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('SafeMath.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.SafeMath = SafeMath
