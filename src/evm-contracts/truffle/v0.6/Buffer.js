'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const Buffer = contract({
 "contractName": "Buffer",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220cafde7b1c543d0f5ff2835fa71ac8b7d2fa91b7c7a9d9ffc9d22b46db491609b64736f6c63430006020033",
   "opcodes": "PUSH1 0x56 PUSH1 0x23 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x16 JUMPI INVALID JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xCA REVERT 0xE7 0xB1 0xC5 NUMBER 0xD0 CREATE2 SELFDESTRUCT 0x28 CALLDATALOAD STATICCALL PUSH18 0xAC8B7D2FA91B7C7A9D9FFC9D22B46DB49160 SWAP12 PUSH5 0x736F6C6343 STOP MOD MUL STOP CALLER ",
   "sourceMap": "402:9256:34:-:0;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220cafde7b1c543d0f5ff2835fa71ac8b7d2fa91b7c7a9d9ffc9d22b46db491609b64736f6c63430006020033",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xCA REVERT 0xE7 0xB1 0xC5 NUMBER 0xD0 CREATE2 SELFDESTRUCT 0x28 CALLDATALOAD STATICCALL PUSH18 0xAC8B7D2FA91B7C7A9D9FFC9D22B46DB49160 SWAP12 PUSH5 0x736F6C6343 STOP MOD MUL STOP CALLER ",
   "sourceMap": "402:9256:34:-:0;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"A library for working with mutable byte buffers in Solidity. * Byte buffers are mutable and expandable, and provide a variety of primitives for writing to them. At any time you can fetch a bytes object containing the current contents of the buffer. The bytes object should not be stored between operations, as it may change due to resizing of the buffer.\",\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/vendor/Buffer.sol\":\"Buffer\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/vendor/Buffer.sol\":{\"keccak256\":\"0x44f15070c50a25a323775c989660d2c2af86530e994973584ddaadb51ab2fe6d\",\"urls\":[\"bzz-raw://6ff6ef1f796e1c1aa0479d6a186cc8d43bdf22b0dad391d4a897bea3a924e38e\",\"dweb:/ipfs/QmY8Zt8X4cqFSEX8GD6YQbThJe1Z3PDuNNKZzDWpCS69Go\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('Buffer.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.Buffer = Buffer
