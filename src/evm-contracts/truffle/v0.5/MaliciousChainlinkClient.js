'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const MaliciousChainlinkClient = contract({
 "contractName": "MaliciousChainlinkClient",
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
   "object": "0x608060405260016004556001600655348015601957600080fd5b5060358060276000396000f3fe6080604052600080fdfea165627a7a72305820609fe0ec0f24e3816d1688e9bc055756be5c400c8fb951ef5bba2312c169243e0029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x1 PUSH1 0x4 SSTORE PUSH1 0x1 PUSH1 0x6 SSTORE CALLVALUE DUP1 ISZERO PUSH1 0x19 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x35 DUP1 PUSH1 0x27 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 PUSH1 0x9F 0xe0 0xec 0xf 0x24 0xe3 DUP2 PUSH14 0x1688E9BC055756BE5C400C8FB951 0xef JUMPDEST 0xba 0x23 SLT 0xc1 PUSH10 0x243E0029000000000000 ",
   "sourceMap": "126:3799:25:-;;;1243:1:1;1212:32;;417:1:25;381:37;;126:3799;8:9:-1;5:2;;;30:1;27;20:12;5:2;126:3799:25;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x6080604052600080fdfea165627a7a72305820609fe0ec0f24e3816d1688e9bc055756be5c400c8fb951ef5bba2312c169243e0029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 PUSH1 0x9F 0xe0 0xec 0xf 0x24 0xe3 DUP2 PUSH14 0x1688E9BC055756BE5C400C8FB951 0xef JUMPDEST 0xba 0x23 SLT 0xc1 PUSH10 0x243E0029000000000000 ",
   "sourceMap": "126:3799:25:-;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkFulfilled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkCancelled\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/tests/MaliciousChainlinkClient.sol\":\"MaliciousChainlinkClient\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/Chainlink.sol\":{\"keccak256\":\"0xebcc879f64de6845363e288b650f69f5c1005da7d4ddb63f85e991dd8b988978\",\"urls\":[\"bzzr://edc83c866847f1123f18c8c7da21e0e99c59c7dace77022998ac24da5057a03e\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/ChainlinkClient.sol\":{\"keccak256\":\"0xc0c8c49ae17737caa957007286fec8029a3bc0c14e3550c9bc17caa7ec73bd2f\",\"urls\":[\"bzzr://2d16fab052156e663628e3c814866d7478a38e1d139f2a89b004de378f5f68a4\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/interfaces/ChainlinkRequestInterface.sol\":{\"keccak256\":\"0xce2ef63d4dba0dfd878b4d4a328c97815937822c39f626f2af173565e674750e\",\"urls\":[\"bzzr://e11a8596788401106ab89cca333dff27e1847fbbb2e624a81a05e1230d79ad80\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/interfaces/ENSInterface.sol\":{\"keccak256\":\"0x87607c12cc84c57afbcb38f00d96ae67c433474c1310a0c2798e2a728f41750d\",\"urls\":[\"bzzr://10a880076bf0b03ef9bd153e7f6ca18e65f15c9f7bf4b0883e93b8de67dd22c2\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/interfaces/LinkTokenInterface.sol\":{\"keccak256\":\"0x592d87884106ba82cedbe79922de9cfaf28b211a09f9be243ad767d3baa1cb90\",\"urls\":[\"bzzr://1f4a72f8b790700d839354d412df656d5a59877264c6e126a1deae6164de9e7d\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/interfaces/PointerInterface.sol\":{\"keccak256\":\"0xdc08ab9320d187dbaffa20dc31d331f8067fa534c9a654aab8f9ffa63df450da\",\"urls\":[\"bzzr://7e34f1d953ea72152d9daffea28117d5d31d85891f2cac5f1ded4a589cad4874\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/tests/MaliciousChainlink.sol\":{\"keccak256\":\"0xe1e37d0b1be72cbd69e1191a9256436d1084b4fab054737fec71aae3e9e0d2e4\",\"urls\":[\"bzzr://dba1727a792d0de14fa068b1d408d50b2be35f915a5336614a48be5444c502aa\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/tests/MaliciousChainlinkClient.sol\":{\"keccak256\":\"0xcdc8098c27444e966dd9e0839bdc6911c1aadaba578a05ecdbec3c097823631b\",\"urls\":[\"bzzr://869b4e865af0750177ccdd0fa358ea687b41384b218632d3bcea087c5a8fbe3d\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/vendor/Buffer.sol\":{\"keccak256\":\"0x0a3bc9b2ae59b3a51f85050a85f77611b44d12d0185dc5744db997e15ccc3ef4\",\"urls\":[\"bzzr://f499c6f1912d0fa8a62ce1ef81cf57c25fa9b15f5a1e2aeaf92dc9d2d1916277\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/vendor/CBOR.sol\":{\"keccak256\":\"0xf4860143694476020a63afb3c3b411aca6c0e89d7b5950545becfe0ce3afa0bc\",\"urls\":[\"bzzr://93dc9867b4a6a870247b89298eedbe565ce958f4012b2617b0ab146fc1634741\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/vendor/ENSResolver.sol\":{\"keccak256\":\"0x64fcf7d2fc5efc87eaf7eba4a8f69af4d28986b6e4fb3590f076eb41ce40296e\",\"urls\":[\"bzzr://09e1bdee1831b5e85d3c7b5d96b7c26ad54e96d654cfaf18f58449c4c45961fc\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/vendor/SafeMath.sol\":{\"keccak256\":\"0x3c9aed70447b5aafb455bf2b124405f87979c19e628553c194f741660197265b\",\"urls\":[\"bzzr://560515f0c0118bae3cb38a64c2b67a75a80e87647618ba02f1e614a113cdfeea\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('MaliciousChainlinkClient.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.MaliciousChainlinkClient = MaliciousChainlinkClient
