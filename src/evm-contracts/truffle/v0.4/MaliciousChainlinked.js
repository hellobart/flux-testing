'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const MaliciousChainlinked = contract({
 "contractName": "MaliciousChainlinked",
 "abi": [
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "id",
     "type": "bytes32"
    }
   ],
   "name": "ChainlinkRequested",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "id",
     "type": "bytes32"
    }
   ],
   "name": "ChainlinkFulfilled",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "id",
     "type": "bytes32"
    }
   ],
   "name": "ChainlinkCancelled",
   "type": "event"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x608060405260016004556001600655348015601957600080fd5b5060358060276000396000f3006080604052600080fd00a165627a7a723058209978966a3b90dc8d6ee17fe2accc8df41ec971ea001dce9b12af9e9046824e7f0029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x1 PUSH1 0x4 SSTORE PUSH1 0x1 PUSH1 0x6 SSTORE CALLVALUE DUP1 ISZERO PUSH1 0x19 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x35 DUP1 PUSH1 0x27 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 SWAP10 PUSH25 0x966A3B90DC8D6EE17FE2ACCC8DF41EC971EA001DCE9B12AF9E SWAP1 0x46 DUP3 0x4e PUSH32 0x29000000000000000000000000000000000000000000000000000000000000 ",
   "sourceMap": "123:3710:28:-;;;1233:1:3;1206:28;;406:1:28;370:37;;123:3710;8:9:-1;5:2;;;30:1;27;20:12;5:2;123:3710:28;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x6080604052600080fd00a165627a7a723058209978966a3b90dc8d6ee17fe2accc8df41ec971ea001dce9b12af9e9046824e7f0029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 SWAP10 PUSH25 0x966A3B90DC8D6EE17FE2ACCC8DF41EC971EA001DCE9B12AF9E SWAP1 0x46 DUP3 0x4e PUSH32 0x29000000000000000000000000000000000000000000000000000000000000 ",
   "sourceMap": "123:3710:28:-;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkFulfilled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkCancelled\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/tests/MaliciousChainlinked.sol\":\"MaliciousChainlinked\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/Chainlink.sol\":{\"keccak256\":\"0x18ea7c46a06f8db2b592beea268476f7a6d65d4b038c7e4f7ac1ff569320a6f2\",\"urls\":[\"bzzr://17b93243739807c0157884a9a58cb590d9d547d2fa6963366b1d74ab58fda7c3\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/ChainlinkClient.sol\":{\"keccak256\":\"0xa7046a924941ac7a836997e9784dada7c0d9af216c42c88c3175985062352f8a\",\"urls\":[\"bzzr://de43d2920231895680ea16a52162b1cf50727c419ba185f69217850d85381a3e\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/Chainlinked.sol\":{\"keccak256\":\"0x7ea2587ce4ad6fb965aac139bf7872baafed08c48cb6d2e3cb1c4139b535c73a\",\"urls\":[\"bzzr://bf058b58fa620e0c3d5d9286728a5233ab43dbd7838dd786e7aec9899e848f37\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/interfaces/ChainlinkRequestInterface.sol\":{\"keccak256\":\"0x7d3983584065248fba8f0ce75fd86feac43ade43784466f87ea502254ddec992\",\"urls\":[\"bzzr://30de07df8cb9fb4ec53aff0f115f88d65936ffd6e90d2aeb031a05d6bf4de6c1\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/interfaces/ENSInterface.sol\":{\"keccak256\":\"0xd0b1a6134b5d6c0213bc4db5df8693ec41e13de3d97d43cc8d19639e516f9767\",\"urls\":[\"bzzr://93d66e26b4b5cf6cfa8c6a5d04cb56ff27d49a2aee8f54858ac3db7658355b1f\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/interfaces/LinkTokenInterface.sol\":{\"keccak256\":\"0x37f31fbd4f4f28ba236cbd9a61ae9b6f7806ea7fe0a684a855e4835f808f8b92\",\"urls\":[\"bzzr://5518135de15ba1afd8bdac829875935dea5520b152d1f602cdc34551d3c0b806\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/interfaces/PointerInterface.sol\":{\"keccak256\":\"0x8019f30a207af4ee80a8b2774e42aba721641254ed0a97826a54f33d7caef218\",\"urls\":[\"bzzr://8ddbb9ae67ec27aed40d6013d6ea176c05f7cd61d4f6fa95492a03fa086d90af\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/tests/MaliciousChainlink.sol\":{\"keccak256\":\"0xcbc945e636c1679b8b48fb659a7f18d055425ef70f4cb98ca7659fa972574922\",\"urls\":[\"bzzr://0869e4931a71f00ec6072534a100db13213aeb48967519914876ab9fb693c563\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/tests/MaliciousChainlinked.sol\":{\"keccak256\":\"0xf4bda7df14f3837f406aa86557cae76b86c854883bcf3b3f2d9d81d0fc37b4b5\",\"urls\":[\"bzzr://5c22da1621ee4c7ea34cda67a97c2b68238bb3720eb15ac31a96522276182a19\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/vendor/Buffer.sol\":{\"keccak256\":\"0x900b4c8ab35b4876d89835a8b050c96107ace250a70f64c5bba6a78a60f03883\",\"urls\":[\"bzzr://408340da4e8fa35e608196ee508f11f9d44f6f70a10f0db0083ab20b5a894d59\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/vendor/CBOR.sol\":{\"keccak256\":\"0x525c4abf9b99b71009abcb716742e9bf8d6f159aee816d130a4c9f34c32b80d8\",\"urls\":[\"bzzr://79f1dfcd9236d1e06e919e8e647a46c33efcef6ec84c99f701a6e05e5fc1bf9a\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/vendor/ENSResolver.sol\":{\"keccak256\":\"0x08965df63f00cb8d164d6fc36a0c388740725906b0bfb79b17391d5dfeabf683\",\"urls\":[\"bzzr://0700cb12e032ed8ed8327e446dfd805ae9fa28785a2909a73def511fe374b8cd\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.4/vendor/SafeMath.sol\":{\"keccak256\":\"0x65f5d6e031847d23e8c1481931224c814cccda28bb2364e6fb0f109f4357b6b4\",\"urls\":[\"bzzr://2c5808ad411781bc368fbe6c5e8b36b08b23bf604e1e9fb6337f6f5069fdba4a\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('MaliciousChainlinked.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.MaliciousChainlinked = MaliciousChainlinked
