'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const VRFRequestIDBaseTestHelper = contract({
 "contractName": "VRFRequestIDBaseTestHelper",
 "abi": [
  {
   "inputs": [
    {
     "internalType": "bytes32",
     "name": "_keyHash",
     "type": "bytes32"
    },
    {
     "internalType": "uint256",
     "name": "_vRFInputSeed",
     "type": "uint256"
    }
   ],
   "name": "makeRequestId_",
   "outputs": [
    {
     "internalType": "bytes32",
     "name": "",
     "type": "bytes32"
    }
   ],
   "stateMutability": "pure",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "bytes32",
     "name": "_keyHash",
     "type": "bytes32"
    },
    {
     "internalType": "uint256",
     "name": "_userSeed",
     "type": "uint256"
    },
    {
     "internalType": "address",
     "name": "_requester",
     "type": "address"
    },
    {
     "internalType": "uint256",
     "name": "_nonce",
     "type": "uint256"
    }
   ],
   "name": "makeVRFInputSeed_",
   "outputs": [
    {
     "internalType": "uint256",
     "name": "",
     "type": "uint256"
    }
   ],
   "stateMutability": "pure",
   "type": "function"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b50610212806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806337ab429a1461003b578063bda087ae146100b1575b600080fd5b61009b6004803603608081101561005157600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506100fd565b6040518082815260200191505060405180910390f35b6100e7600480360360408110156100c757600080fd5b810190808035906020019092919080359060200190929190505050610115565b6040518082815260200191505060405180910390f35b600061010b85858585610129565b9050949350505050565b600061012183836101a3565b905092915050565b600084848484604051602001808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019450505050506040516020818303038152906040528051906020012060001c9050949350505050565b6000828260405160200180838152602001828152602001925050506040516020818303038152906040528051906020012090509291505056fea26469706673582212200ec4da1e6b0844db21a5b123d21d091e822c7ae265a826dc50ad67505665646c64736f6c63430006020033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x212 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x36 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x37AB429A EQ PUSH2 0x3B JUMPI DUP1 PUSH4 0xBDA087AE EQ PUSH2 0xB1 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x9B PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x80 DUP2 LT ISZERO PUSH2 0x51 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0xFD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xE7 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0xC7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x115 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 PUSH2 0x10B DUP6 DUP6 DUP6 DUP6 PUSH2 0x129 JUMP JUMPDEST SWAP1 POP SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x121 DUP4 DUP4 PUSH2 0x1A3 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP5 DUP5 DUP5 DUP5 PUSH1 0x40 MLOAD PUSH1 0x20 ADD DUP1 DUP6 DUP2 MSTORE PUSH1 0x20 ADD DUP5 DUP2 MSTORE PUSH1 0x20 ADD DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP5 POP POP POP POP POP PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE DUP1 MLOAD SWAP1 PUSH1 0x20 ADD KECCAK256 PUSH1 0x0 SHR SWAP1 POP SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 PUSH1 0x40 MLOAD PUSH1 0x20 ADD DUP1 DUP4 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE DUP1 MLOAD SWAP1 PUSH1 0x20 ADD KECCAK256 SWAP1 POP SWAP3 SWAP2 POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xE 0xC4 0xDA 0x1E PUSH12 0x844DB21A5B123D21D091E82 0x2C PUSH27 0xE265A826DC50AD67505665646C64736F6C63430006020033000000 ",
   "sourceMap": "59:464:32:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;59:464:32;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c806337ab429a1461003b578063bda087ae146100b1575b600080fd5b61009b6004803603608081101561005157600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506100fd565b6040518082815260200191505060405180910390f35b6100e7600480360360408110156100c757600080fd5b810190808035906020019092919080359060200190929190505050610115565b6040518082815260200191505060405180910390f35b600061010b85858585610129565b9050949350505050565b600061012183836101a3565b905092915050565b600084848484604051602001808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019450505050506040516020818303038152906040528051906020012060001c9050949350505050565b6000828260405160200180838152602001828152602001925050506040516020818303038152906040528051906020012090509291505056fea26469706673582212200ec4da1e6b0844db21a5b123d21d091e822c7ae265a826dc50ad67505665646c64736f6c63430006020033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x36 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x37AB429A EQ PUSH2 0x3B JUMPI DUP1 PUSH4 0xBDA087AE EQ PUSH2 0xB1 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x9B PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x80 DUP2 LT ISZERO PUSH2 0x51 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0xFD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xE7 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0xC7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x115 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 PUSH2 0x10B DUP6 DUP6 DUP6 DUP6 PUSH2 0x129 JUMP JUMPDEST SWAP1 POP SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x121 DUP4 DUP4 PUSH2 0x1A3 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP5 DUP5 DUP5 DUP5 PUSH1 0x40 MLOAD PUSH1 0x20 ADD DUP1 DUP6 DUP2 MSTORE PUSH1 0x20 ADD DUP5 DUP2 MSTORE PUSH1 0x20 ADD DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP5 POP POP POP POP POP PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE DUP1 MLOAD SWAP1 PUSH1 0x20 ADD KECCAK256 PUSH1 0x0 SHR SWAP1 POP SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 PUSH1 0x40 MLOAD PUSH1 0x20 ADD DUP1 DUP4 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE DUP1 MLOAD SWAP1 PUSH1 0x20 ADD KECCAK256 SWAP1 POP SWAP3 SWAP2 POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xE 0xC4 0xDA 0x1E PUSH12 0x844DB21A5B123D21D091E82 0x2C PUSH27 0xE265A826DC50AD67505665646C64736F6C63430006020033000000 ",
   "sourceMap": "59:464:32:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;59:464:32;;;;;;;;;;;;;;;;;;;;;;;;120:241;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;120:241:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;365:156;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;365:156:32;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;120:241;273:7;297:57;314:8;324:9;335:10;347:6;297:16;:57::i;:::-;290:64;;120:241;;;;;;:::o;365:156::-;456:7;478:38;492:8;502:13;478;:38::i;:::-;471:45;;365:156;;;;:::o;1094:231:9:-;1224:7;1278:8;1288:9;1299:10;1311:6;1267:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1267:51:9;;;1257:62;;;;;;1249:71;;1241:79;;1094:231;;;;;;:::o;1705:171::-;1797:7;1846:8;1856:13;1829:41;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1829:41:9;;;1819:52;;;;;;1812:59;;1705:171;;;;:::o"
  },
  "methodIdentifiers": {
   "makeRequestId_(bytes32,uint256)": "bda087ae",
   "makeVRFInputSeed_(bytes32,uint256,address,uint256)": "37ab429a"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_keyHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_vRFInputSeed\",\"type\":\"uint256\"}],\"name\":\"makeRequestId_\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_keyHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_userSeed\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_requester\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_nonce\",\"type\":\"uint256\"}],\"name\":\"makeVRFInputSeed_\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/tests/VRFRequestIDBaseTestHelper.sol\":\"VRFRequestIDBaseTestHelper\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/VRFRequestIDBase.sol\":{\"keccak256\":\"0x0c431760785b5f5b9847fb51ba7e62a3439810e7d8dcbde8247e804f25e6fd21\",\"urls\":[\"bzz-raw://f4c4a572b4681fc118b3db8604f62fb747e9c7dbc19d34aa39f92243b043aeaa\",\"dweb:/ipfs/QmegohMUPgG3NMsn3jAyEE5JUpFsDL7JdJ3LG9bRfY28SF\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/tests/VRFRequestIDBaseTestHelper.sol\":{\"keccak256\":\"0x3a50edd2404fbc9263c609545ecc0e950063d027f937ec5cb78c9e6023acaf89\",\"urls\":[\"bzz-raw://822e12cc0c199792b0c3816e8feba8b835c7e9c309b54e352c519438b491bf89\",\"dweb:/ipfs/QmenN5dLvtTfEfDFZ51y3ZS3uuKRzv2nFaC88shCZFygUd\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('VRFRequestIDBaseTestHelper.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.VRFRequestIDBaseTestHelper = VRFRequestIDBaseTestHelper