'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const VRFRequestIDBase = contract({
 "contractName": "VRFRequestIDBase",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220c1984526828e2772323c7ad8892760e149e9496dfca1234dfb63324c6f643afe64736f6c63430006020033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x3F DUP1 PUSH1 0x1D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xC1 SWAP9 GASLIMIT 0x26 DUP3 DUP15 0x27 PUSH19 0x323C7AD8892760E149E9496DFCA1234DFB6332 0x4C PUSH16 0x643AFE64736F6C634300060200330000 ",
   "sourceMap": "24:1854:9:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;24:1854:9;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x6080604052600080fdfea2646970667358221220c1984526828e2772323c7ad8892760e149e9496dfca1234dfb63324c6f643afe64736f6c63430006020033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xC1 SWAP9 GASLIMIT 0x26 DUP3 DUP15 0x27 PUSH19 0x323C7AD8892760E149E9496DFCA1234DFB6332 0x4C PUSH16 0x643AFE64736F6C634300060200330000 ",
   "sourceMap": "24:1854:9:-:0;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/VRFRequestIDBase.sol\":\"VRFRequestIDBase\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/VRFRequestIDBase.sol\":{\"keccak256\":\"0x0c431760785b5f5b9847fb51ba7e62a3439810e7d8dcbde8247e804f25e6fd21\",\"urls\":[\"bzz-raw://f4c4a572b4681fc118b3db8604f62fb747e9c7dbc19d34aa39f92243b043aeaa\",\"dweb:/ipfs/QmegohMUPgG3NMsn3jAyEE5JUpFsDL7JdJ3LG9bRfY28SF\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('VRFRequestIDBase.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.VRFRequestIDBase = VRFRequestIDBase
