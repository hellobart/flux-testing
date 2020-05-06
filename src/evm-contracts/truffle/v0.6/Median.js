'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const Median = contract({
 "contractName": "Median",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220111b61e4779be7efa89dc6446770505982e24e71df22b8424439da5ebbbee09264736f6c63430006020033",
   "opcodes": "PUSH1 0x56 PUSH1 0x23 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x16 JUMPI INVALID JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 GT SHL PUSH2 0xE477 SWAP12 0xE7 0xEF 0xA8 SWAP14 0xC6 DIFFICULTY PUSH8 0x70505982E24E71DF 0x22 0xB8 TIMESTAMP DIFFICULTY CODECOPY 0xDA 0x5E 0xBB 0xBE 0xE0 SWAP3 PUSH5 0x736F6C6343 STOP MOD MUL STOP CALLER ",
   "sourceMap": "93:7514:3:-:0;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220111b61e4779be7efa89dc6446770505982e24e71df22b8424439da5ebbbee09264736f6c63430006020033",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 GT SHL PUSH2 0xE477 SWAP12 0xE7 0xEF 0xA8 SWAP14 0xC6 DIFFICULTY PUSH8 0x70505982E24E71DF 0x22 0xB8 TIMESTAMP DIFFICULTY CODECOPY 0xDA 0x5E 0xBB 0xBE 0xE0 SWAP3 PUSH5 0x736F6C6343 STOP MOD MUL STOP CALLER ",
   "sourceMap": "93:7514:3:-:0;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/Median.sol\":\"Median\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/Median.sol\":{\"keccak256\":\"0xa6056d4963eee4e7da825f5dd40d5069733957d26db6a7f7f94ea3bf53afb3a9\",\"urls\":[\"bzz-raw://211a7d452fb6e24348c6916731046f7ce2b408135710e8cfe11a0fe498006b51\",\"dweb:/ipfs/Qma9513wyo3tsifdt3zYcVRqXYnMAdytAgSiZfvDVDeTKL\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/dev/SignedSafeMath.sol\":{\"keccak256\":\"0xf689587079a0f497bb589d48aa5bae4937f646ac7bc39a5a8b4347313138a394\",\"urls\":[\"bzz-raw://1092ac2421c5d44d6643fc52dc74c3d7577bd0ad6e176f7c43250004a8b0d606\",\"dweb:/ipfs/Qma8gpmqa5bKfM2Am9kqty3Xrg5XKjFd39SJgnKG2FMVzL\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/vendor/SafeMath.sol\":{\"keccak256\":\"0x95dbe2dd5ab8682b99bc3d7d297b621d4237442da160f78d3323ee5c4a06ded3\",\"urls\":[\"bzz-raw://d753308ff4eb43fba6f9ede371a33f707c5818350770dcb078a7d78ac8251361\",\"dweb:/ipfs/Qme64eYKWoTQiP3WhqGHoMqrENNZ9L8SdBLQ2hx5SmzUda\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('Median.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.Median = Median
