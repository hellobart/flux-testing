'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const SignedSafeMath = contract({
 "contractName": "SignedSafeMath",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b2610d7522efd1b5760b2e053465955a9adecb17196647eb5296fd8940e78b7164736f6c63430006020033",
   "opcodes": "PUSH1 0x56 PUSH1 0x23 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x16 JUMPI INVALID JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xB2 PUSH2 0xD75 0x22 0xEF 0xD1 0xB5 PUSH23 0xB2E053465955A9ADECB17196647EB5296FD8940E78B71 PUSH5 0x736F6C6343 STOP MOD MUL STOP CALLER ",
   "sourceMap": "25:974:16:-:0;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b2610d7522efd1b5760b2e053465955a9adecb17196647eb5296fd8940e78b7164736f6c63430006020033",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xB2 PUSH2 0xD75 0x22 0xEF 0xD1 0xB5 PUSH23 0xB2E053465955A9ADECB17196647EB5296FD8940E78B71 PUSH5 0x736F6C6343 STOP MOD MUL STOP CALLER ",
   "sourceMap": "25:974:16:-:0;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/dev/SignedSafeMath.sol\":\"SignedSafeMath\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/dev/SignedSafeMath.sol\":{\"keccak256\":\"0xf689587079a0f497bb589d48aa5bae4937f646ac7bc39a5a8b4347313138a394\",\"urls\":[\"bzz-raw://1092ac2421c5d44d6643fc52dc74c3d7577bd0ad6e176f7c43250004a8b0d606\",\"dweb:/ipfs/Qma8gpmqa5bKfM2Am9kqty3Xrg5XKjFd39SJgnKG2FMVzL\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('SignedSafeMath.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.SignedSafeMath = SignedSafeMath
