'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const GetterSetter = contract({
 "contractName": "GetterSetter",
 "abi": [
  {
   "constant": true,
   "inputs": [],
   "name": "requestId",
   "outputs": [
    {
     "name": "",
     "type": "bytes32"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "constant": true,
   "inputs": [],
   "name": "getBytes",
   "outputs": [
    {
     "name": "",
     "type": "bytes"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "constant": true,
   "inputs": [],
   "name": "getBytes32",
   "outputs": [
    {
     "name": "",
     "type": "bytes32"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_requestId",
     "type": "bytes32"
    },
    {
     "name": "_value",
     "type": "uint256"
    }
   ],
   "name": "requestedUint256",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_requestId",
     "type": "bytes32"
    },
    {
     "name": "_value",
     "type": "bytes"
    }
   ],
   "name": "requestedBytes",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": true,
   "inputs": [],
   "name": "getUint256",
   "outputs": [
    {
     "name": "",
     "type": "uint256"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_value",
     "type": "bytes32"
    }
   ],
   "name": "setBytes32",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_value",
     "type": "uint256"
    }
   ],
   "name": "setUint256",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_value",
     "type": "bytes"
    }
   ],
   "name": "setBytes",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_requestId",
     "type": "bytes32"
    },
    {
     "name": "_value",
     "type": "bytes32"
    }
   ],
   "name": "requestedBytes32",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "from",
     "type": "address"
    },
    {
     "indexed": true,
     "name": "value",
     "type": "bytes32"
    }
   ],
   "name": "SetBytes32",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "from",
     "type": "address"
    },
    {
     "indexed": true,
     "name": "value",
     "type": "uint256"
    }
   ],
   "name": "SetUint256",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "from",
     "type": "address"
    },
    {
     "indexed": false,
     "name": "value",
     "type": "bytes"
    }
   ],
   "name": "SetBytes",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": false,
     "name": "b32",
     "type": "bytes32"
    },
    {
     "indexed": false,
     "name": "u256",
     "type": "uint256"
    },
    {
     "indexed": false,
     "name": "b322",
     "type": "bytes32"
    }
   ],
   "name": "Output",
   "type": "event"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b50610779806100206000396000f3fe6080604052600436106100a3576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680626d6cae146100a85780630bcd3b33146100d35780631f903037146101635780633345b4d01461018e57806346ddd1ff146101d357806368895979146102a5578063c2b12a73146102d0578063d2282dc51461030b578063da359dc814610346578063ed53e5111461040e575b600080fd5b3480156100b457600080fd5b506100bd610453565b6040518082815260200191505060405180910390f35b3480156100df57600080fd5b506100e8610459565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012857808201518184015260208101905061010d565b50505050905090810190601f1680156101555780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016f57600080fd5b506101786104f7565b6040518082815260200191505060405180910390f35b34801561019a57600080fd5b506101d1600480360360408110156101b157600080fd5b8101908080359060200190929190803590602001909291905050506104fd565b005b3480156101df57600080fd5b506102a3600480360360408110156101f657600080fd5b81019080803590602001909291908035906020019064010000000081111561021d57600080fd5b82018360208201111561022f57600080fd5b8035906020019184600183028401116401000000008311171561025157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610511565b005b3480156102b157600080fd5b506102ba610525565b6040518082815260200191505060405180910390f35b3480156102dc57600080fd5b50610309600480360360208110156102f357600080fd5b810190808035906020019092919050505061052b565b005b34801561031757600080fd5b506103446004803603602081101561032e57600080fd5b8101908080359060200190929190505050610579565b005b34801561035257600080fd5b5061040c6004803603602081101561036957600080fd5b810190808035906020019064010000000081111561038657600080fd5b82018360208201111561039857600080fd5b803590602001918460018302840111640100000000831117156103ba57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506105c7565b005b34801561041a57600080fd5b506104516004803603604081101561043157600080fd5b810190808035906020019092919080359060200190929190505050610694565b005b60025481565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104ef5780601f106104c4576101008083540402835291602001916104ef565b820191906000526020600020905b8154815290600101906020018083116104d257829003601f168201915b505050505081565b60005481565b8160028190555061050d81610579565b5050565b81600281905550610521816105c7565b5050565b60015481565b80600081905550803373ffffffffffffffffffffffffffffffffffffffff167fdc73ee99832252105ed74a404690c2f10ad1b294cbbeb0ff5cded48ef2aa437d60405160405180910390a350565b80600181905550803373ffffffffffffffffffffffffffffffffffffffff167fd943f063acdb1c6f206cf6a3f6d1ba39687bcc07feb7f44019bdbd4773c9c28d60405160405180910390a350565b80600390805190602001906105dd9291906106a8565b503373ffffffffffffffffffffffffffffffffffffffff167ff22a519d38e59bc517532f666f8da532fdd5356e68d617191e82a8fdcc8abdcf826040518080602001828103825283818151815260200191508051906020019080838360005b8381101561065757808201518184015260208101905061063c565b50505050905090810190601f1680156106845780820380516001836020036101000a031916815260200191505b509250505060405180910390a250565b816002819055506106a48161052b565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106e957805160ff1916838001178555610717565b82800160010185558215610717579182015b828111156107165782518255916020019190600101906106fb565b5b5090506107249190610728565b5090565b61074a91905b8082111561074657600081600090555060010161072e565b5090565b9056fea165627a7a72305820666440f1931bcceb0cd13c789ada6c7c2ee807f93528fb2f55b54e43bf6de6f60029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x779 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0xA3 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH3 0x6D6CAE EQ PUSH2 0xA8 JUMPI DUP1 PUSH4 0xBCD3B33 EQ PUSH2 0xD3 JUMPI DUP1 PUSH4 0x1F903037 EQ PUSH2 0x163 JUMPI DUP1 PUSH4 0x3345B4D0 EQ PUSH2 0x18E JUMPI DUP1 PUSH4 0x46DDD1FF EQ PUSH2 0x1D3 JUMPI DUP1 PUSH4 0x68895979 EQ PUSH2 0x2A5 JUMPI DUP1 PUSH4 0xC2B12A73 EQ PUSH2 0x2D0 JUMPI DUP1 PUSH4 0xD2282DC5 EQ PUSH2 0x30B JUMPI DUP1 PUSH4 0xDA359DC8 EQ PUSH2 0x346 JUMPI DUP1 PUSH4 0xED53E511 EQ PUSH2 0x40E JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBD PUSH2 0x453 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xE8 PUSH2 0x459 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x128 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x10D JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x155 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x16F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x178 PUSH2 0x4F7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x19A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1D1 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x1B1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x4FD JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1DF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2A3 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x1F6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH5 0x100000000 DUP2 GT ISZERO PUSH2 0x21D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 ADD DUP4 PUSH1 0x20 DUP3 ADD GT ISZERO PUSH2 0x22F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP2 DUP5 PUSH1 0x1 DUP4 MUL DUP5 ADD GT PUSH5 0x100000000 DUP4 GT OR ISZERO PUSH2 0x251 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH1 0x0 DUP2 DUP5 ADD MSTORE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND SWAP1 POP DUP1 DUP4 ADD SWAP3 POP POP POP POP POP POP POP SWAP2 SWAP3 SWAP2 SWAP3 SWAP1 POP POP POP PUSH2 0x511 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2B1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2BA PUSH2 0x525 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2DC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x309 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x2F3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x52B JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x317 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x344 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x32E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x579 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x352 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x40C PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x369 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH5 0x100000000 DUP2 GT ISZERO PUSH2 0x386 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 ADD DUP4 PUSH1 0x20 DUP3 ADD GT ISZERO PUSH2 0x398 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP2 DUP5 PUSH1 0x1 DUP4 MUL DUP5 ADD GT PUSH5 0x100000000 DUP4 GT OR ISZERO PUSH2 0x3BA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH1 0x0 DUP2 DUP5 ADD MSTORE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND SWAP1 POP DUP1 DUP4 ADD SWAP3 POP POP POP POP POP POP POP SWAP2 SWAP3 SWAP2 SWAP3 SWAP1 POP POP POP PUSH2 0x5C7 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x41A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x451 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x431 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x694 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x4EF JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x4C4 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x4EF JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x4D2 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST DUP2 PUSH1 0x2 DUP2 SWAP1 SSTORE POP PUSH2 0x50D DUP2 PUSH2 0x579 JUMP JUMPDEST POP POP JUMP JUMPDEST DUP2 PUSH1 0x2 DUP2 SWAP1 SSTORE POP PUSH2 0x521 DUP2 PUSH2 0x5C7 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST DUP1 PUSH1 0x0 DUP2 SWAP1 SSTORE POP DUP1 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDC73EE99832252105ED74A404690C2F10AD1B294CBBEB0FF5CDED48EF2AA437D PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP JUMP JUMPDEST DUP1 PUSH1 0x1 DUP2 SWAP1 SSTORE POP DUP1 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xD943F063ACDB1C6F206CF6A3F6D1BA39687BCC07FEB7F44019BDBD4773C9C28D PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP JUMP JUMPDEST DUP1 PUSH1 0x3 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH2 0x5DD SWAP3 SWAP2 SWAP1 PUSH2 0x6A8 JUMP JUMPDEST POP CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xF22A519D38E59BC517532F666F8DA532FDD5356E68D617191E82A8FDCC8ABDCF DUP3 PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x657 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x63C JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x684 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 POP JUMP JUMPDEST DUP2 PUSH1 0x2 DUP2 SWAP1 SSTORE POP PUSH2 0x6A4 DUP2 PUSH2 0x52B JUMP JUMPDEST POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x6E9 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x717 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x717 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x716 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x6FB JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH2 0x724 SWAP2 SWAP1 PUSH2 0x728 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x74A SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x746 JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH2 0x72E JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST SWAP1 JUMP INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 PUSH7 0x6440F1931BCCEB 0xc 0xd1 EXTCODECOPY PUSH25 0x9ADA6C7C2EE807F93528FB2F55B54E43BF6DE6F60029000000 ",
   "sourceMap": "103:1122:23:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;103:1122:23;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x6080604052600436106100a3576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680626d6cae146100a85780630bcd3b33146100d35780631f903037146101635780633345b4d01461018e57806346ddd1ff146101d357806368895979146102a5578063c2b12a73146102d0578063d2282dc51461030b578063da359dc814610346578063ed53e5111461040e575b600080fd5b3480156100b457600080fd5b506100bd610453565b6040518082815260200191505060405180910390f35b3480156100df57600080fd5b506100e8610459565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012857808201518184015260208101905061010d565b50505050905090810190601f1680156101555780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016f57600080fd5b506101786104f7565b6040518082815260200191505060405180910390f35b34801561019a57600080fd5b506101d1600480360360408110156101b157600080fd5b8101908080359060200190929190803590602001909291905050506104fd565b005b3480156101df57600080fd5b506102a3600480360360408110156101f657600080fd5b81019080803590602001909291908035906020019064010000000081111561021d57600080fd5b82018360208201111561022f57600080fd5b8035906020019184600183028401116401000000008311171561025157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610511565b005b3480156102b157600080fd5b506102ba610525565b6040518082815260200191505060405180910390f35b3480156102dc57600080fd5b50610309600480360360208110156102f357600080fd5b810190808035906020019092919050505061052b565b005b34801561031757600080fd5b506103446004803603602081101561032e57600080fd5b8101908080359060200190929190505050610579565b005b34801561035257600080fd5b5061040c6004803603602081101561036957600080fd5b810190808035906020019064010000000081111561038657600080fd5b82018360208201111561039857600080fd5b803590602001918460018302840111640100000000831117156103ba57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506105c7565b005b34801561041a57600080fd5b506104516004803603604081101561043157600080fd5b810190808035906020019092919080359060200190929190505050610694565b005b60025481565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104ef5780601f106104c4576101008083540402835291602001916104ef565b820191906000526020600020905b8154815290600101906020018083116104d257829003601f168201915b505050505081565b60005481565b8160028190555061050d81610579565b5050565b81600281905550610521816105c7565b5050565b60015481565b80600081905550803373ffffffffffffffffffffffffffffffffffffffff167fdc73ee99832252105ed74a404690c2f10ad1b294cbbeb0ff5cded48ef2aa437d60405160405180910390a350565b80600181905550803373ffffffffffffffffffffffffffffffffffffffff167fd943f063acdb1c6f206cf6a3f6d1ba39687bcc07feb7f44019bdbd4773c9c28d60405160405180910390a350565b80600390805190602001906105dd9291906106a8565b503373ffffffffffffffffffffffffffffffffffffffff167ff22a519d38e59bc517532f666f8da532fdd5356e68d617191e82a8fdcc8abdcf826040518080602001828103825283818151815260200191508051906020019080838360005b8381101561065757808201518184015260208101905061063c565b50505050905090810190601f1680156106845780820380516001836020036101000a031916815260200191505b509250505060405180910390a250565b816002819055506106a48161052b565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106e957805160ff1916838001178555610717565b82800160010185558215610717579182015b828111156107165782518255916020019190600101906106fb565b5b5090506107249190610728565b5090565b61074a91905b8082111561074657600081600090555060010161072e565b5090565b9056fea165627a7a72305820666440f1931bcceb0cd13c789ada6c7c2ee807f93528fb2f55b54e43bf6de6f60029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0xA3 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH3 0x6D6CAE EQ PUSH2 0xA8 JUMPI DUP1 PUSH4 0xBCD3B33 EQ PUSH2 0xD3 JUMPI DUP1 PUSH4 0x1F903037 EQ PUSH2 0x163 JUMPI DUP1 PUSH4 0x3345B4D0 EQ PUSH2 0x18E JUMPI DUP1 PUSH4 0x46DDD1FF EQ PUSH2 0x1D3 JUMPI DUP1 PUSH4 0x68895979 EQ PUSH2 0x2A5 JUMPI DUP1 PUSH4 0xC2B12A73 EQ PUSH2 0x2D0 JUMPI DUP1 PUSH4 0xD2282DC5 EQ PUSH2 0x30B JUMPI DUP1 PUSH4 0xDA359DC8 EQ PUSH2 0x346 JUMPI DUP1 PUSH4 0xED53E511 EQ PUSH2 0x40E JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBD PUSH2 0x453 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xE8 PUSH2 0x459 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x128 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x10D JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x155 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x16F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x178 PUSH2 0x4F7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x19A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1D1 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x1B1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x4FD JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1DF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2A3 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x1F6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH5 0x100000000 DUP2 GT ISZERO PUSH2 0x21D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 ADD DUP4 PUSH1 0x20 DUP3 ADD GT ISZERO PUSH2 0x22F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP2 DUP5 PUSH1 0x1 DUP4 MUL DUP5 ADD GT PUSH5 0x100000000 DUP4 GT OR ISZERO PUSH2 0x251 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH1 0x0 DUP2 DUP5 ADD MSTORE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND SWAP1 POP DUP1 DUP4 ADD SWAP3 POP POP POP POP POP POP POP SWAP2 SWAP3 SWAP2 SWAP3 SWAP1 POP POP POP PUSH2 0x511 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2B1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2BA PUSH2 0x525 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2DC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x309 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x2F3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x52B JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x317 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x344 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x32E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x579 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x352 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x40C PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x369 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH5 0x100000000 DUP2 GT ISZERO PUSH2 0x386 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 ADD DUP4 PUSH1 0x20 DUP3 ADD GT ISZERO PUSH2 0x398 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP2 DUP5 PUSH1 0x1 DUP4 MUL DUP5 ADD GT PUSH5 0x100000000 DUP4 GT OR ISZERO PUSH2 0x3BA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH1 0x0 DUP2 DUP5 ADD MSTORE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND SWAP1 POP DUP1 DUP4 ADD SWAP3 POP POP POP POP POP POP POP SWAP2 SWAP3 SWAP2 SWAP3 SWAP1 POP POP POP PUSH2 0x5C7 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x41A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x451 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x431 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x694 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x4EF JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x4C4 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x4EF JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x4D2 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST DUP2 PUSH1 0x2 DUP2 SWAP1 SSTORE POP PUSH2 0x50D DUP2 PUSH2 0x579 JUMP JUMPDEST POP POP JUMP JUMPDEST DUP2 PUSH1 0x2 DUP2 SWAP1 SSTORE POP PUSH2 0x521 DUP2 PUSH2 0x5C7 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST DUP1 PUSH1 0x0 DUP2 SWAP1 SSTORE POP DUP1 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDC73EE99832252105ED74A404690C2F10AD1B294CBBEB0FF5CDED48EF2AA437D PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP JUMP JUMPDEST DUP1 PUSH1 0x1 DUP2 SWAP1 SSTORE POP DUP1 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xD943F063ACDB1C6F206CF6A3F6D1BA39687BCC07FEB7F44019BDBD4773C9C28D PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP JUMP JUMPDEST DUP1 PUSH1 0x3 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH2 0x5DD SWAP3 SWAP2 SWAP1 PUSH2 0x6A8 JUMP JUMPDEST POP CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xF22A519D38E59BC517532F666F8DA532FDD5356E68D617191E82A8FDCC8ABDCF DUP3 PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x657 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x63C JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x684 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 POP JUMP JUMPDEST DUP2 PUSH1 0x2 DUP2 SWAP1 SSTORE POP PUSH2 0x6A4 DUP2 PUSH2 0x52B JUMP JUMPDEST POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x6E9 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x717 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x717 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x716 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x6FB JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH2 0x724 SWAP2 SWAP1 PUSH2 0x728 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x74A SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x746 JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH2 0x72E JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST SWAP1 JUMP INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 PUSH7 0x6440F1931BCCEB 0xc 0xd1 EXTCODECOPY PUSH25 0x9ADA6C7C2EE807F93528FB2F55B54E43BF6DE6F60029000000 ",
   "sourceMap": "103:1122:23:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;187:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;187:24:23;;;;;;;;;;;;;;;;;;;;;;;215:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;215:21:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;215:21:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;129:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;129:25:23;;;;;;;;;;;;;;;;;;;;;;;1097:126;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1097:126:23;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1097:126:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;848:127;;8:9:-1;5:2;;;30:1;27;20:12;5:2;848:127:23;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;848:127:23;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;848:127:23;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;848:127:23;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;848:127:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;848:127:23;;;;;;;;;;;;;;;;;;158:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;158:25:23;;;;;;;;;;;;;;;;;;;;;;;483:114;;8:9:-1;5:2;;;30:1;27;20:12;5:2;483:114:23;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;483:114:23;;;;;;;;;;;;;;;;;;;;979;;8:9:-1;5:2;;;30:1;27;20:12;5:2;979:114:23;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;979:114:23;;;;;;;;;;;;;;;;;;;;731:113;;8:9:-1;5:2;;;30:1;27;20:12;5:2;731:113:23;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;731:113:23;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;731:113:23;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;731:113:23;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;731:113:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;731:113:23;;;;;;;;;;;;;;;;;;601:126;;8:9:-1;5:2;;;30:1;27;20:12;5:2;601:126:23;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;601:126:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;187:24;;;;:::o;215:21::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;129:25::-;;;;:::o;1097:126::-;1184:10;1172:9;:22;;;;1200:18;1211:6;1200:10;:18::i;:::-;1097:126;;:::o;848:127::-;938:10;926:9;:22;;;;954:16;963:6;954:8;:16::i;:::-;848:127;;:::o;158:25::-;;;;:::o;483:114::-;545:6;532:10;:19;;;;585:6;573:10;562:30;;;;;;;;;;;;483:114;:::o;979:::-;1041:6;1028:10;:19;;;;1081:6;1069:10;1058:30;;;;;;;;;;;;979:114;:::o;731:113::-;794:6;783:8;:17;;;;;;;;;;;;:::i;:::-;;820:10;811:28;;;832:6;811:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;811:28:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;731:113;:::o;601:126::-;688:10;676:9;:22;;;;704:18;715:6;704:10;:18::i;:::-;601:126;;:::o;103:1122::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o"
  },
  "methodIdentifiers": {
   "getBytes()": "0bcd3b33",
   "getBytes32()": "1f903037",
   "getUint256()": "68895979",
   "requestId()": "006d6cae",
   "requestedBytes(bytes32,bytes)": "46ddd1ff",
   "requestedBytes32(bytes32,bytes32)": "ed53e511",
   "requestedUint256(bytes32,uint256)": "3345b4d0",
   "setBytes(bytes)": "da359dc8",
   "setBytes32(bytes32)": "c2b12a73",
   "setUint256(uint256)": "d2282dc5"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"requestId\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBytes\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBytes32\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_requestId\",\"type\":\"bytes32\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"requestedUint256\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_requestId\",\"type\":\"bytes32\"},{\"name\":\"_value\",\"type\":\"bytes\"}],\"name\":\"requestedBytes\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getUint256\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_value\",\"type\":\"bytes32\"}],\"name\":\"setBytes32\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"setUint256\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_value\",\"type\":\"bytes\"}],\"name\":\"setBytes\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_requestId\",\"type\":\"bytes32\"},{\"name\":\"_value\",\"type\":\"bytes32\"}],\"name\":\"requestedBytes32\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"value\",\"type\":\"bytes32\"}],\"name\":\"SetBytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"SetUint256\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"bytes\"}],\"name\":\"SetBytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"b32\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"u256\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"b322\",\"type\":\"bytes32\"}],\"name\":\"Output\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/tests/GetterSetter.sol\":\"GetterSetter\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.5/tests/GetterSetter.sol\":{\"keccak256\":\"0xb25cd13750633ad7cc7686f4025b02883643977bb5826179322221aaaf8cc396\",\"urls\":[\"bzzr://c80908b763a7ff48279680183a599097706669b63cbb2770e55ec1798659c4e6\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('GetterSetter.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.GetterSetter = GetterSetter