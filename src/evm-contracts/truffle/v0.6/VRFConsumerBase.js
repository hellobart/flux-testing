'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const VRFConsumerBase = contract({
 "contractName": "VRFConsumerBase",
 "abi": [
  {
   "inputs": [
    {
     "internalType": "address",
     "name": "_vrfCoordinator",
     "type": "address"
    },
    {
     "internalType": "address",
     "name": "_link",
     "type": "address"
    }
   ],
   "stateMutability": "nonpayable",
   "type": "constructor"
  },
  {
   "inputs": [
    {
     "internalType": "bytes32",
     "name": "requestId",
     "type": "bytes32"
    },
    {
     "internalType": "uint256",
     "name": "randomness",
     "type": "uint256"
    }
   ],
   "name": "fulfillRandomness",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "bytes32",
     "name": "",
     "type": "bytes32"
    }
   ],
   "name": "nonces",
   "outputs": [
    {
     "internalType": "uint256",
     "name": "",
     "type": "uint256"
    }
   ],
   "stateMutability": "view",
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
     "name": "_fee",
     "type": "uint256"
    },
    {
     "internalType": "uint256",
     "name": "_seed",
     "type": "uint256"
    }
   ],
   "name": "requestRandomness",
   "outputs": [
    {
     "internalType": "bytes32",
     "name": "requestId",
     "type": "bytes32"
    }
   ],
   "stateMutability": "nonpayable",
   "type": "function"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x",
   "opcodes": "",
   "sourceMap": ""
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x",
   "opcodes": "",
   "sourceMap": ""
  },
  "methodIdentifiers": {
   "fulfillRandomness(bytes32,uint256)": "1f1f897f",
   "nonces(bytes32)": "9e317f12",
   "requestRandomness(bytes32,uint256,uint256)": "dc6cfe10"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_vrfCoordinator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_link\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"requestId\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"randomness\",\"type\":\"uint256\"}],\"name\":\"fulfillRandomness\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_keyHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_fee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_seed\",\"type\":\"uint256\"}],\"name\":\"requestRandomness\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"requestId\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"PURPOSEReggie the Random Oracle (not his real job) wants to provide randomnessto Vera the verifier in such a way that Vera can be sure he's notmaking his output up to suit himself. Reggie provides Vera a public keyto which he knows the secret key. Each time Vera provides a seed toReggie, he gives back a value which is computed completelydeterministically from the seed and the secret key.Reggie provides a proof by which Vera can verify that the output wascorrectly computed once Reggie tells it to her, but without that proof,the output is indistinguishable to her from a uniform random samplefrom the output space.The purpose of this contract is to make it easy for unrelated contractsto talk to Vera the verifier about the work Reggie is doing, to providesimple access to a verifiable source of randomness. *****************************************************************************USAGECalling contracts must inherit from VRFConsumerInterface, and caninitialize VRFConsumerInterface's attributes in their constructor asshown:contract VRFConsumer {constuctor(<other arguments>, address _vrfCoordinator, address _link)VRFConsumerBase(_vrfCoordinator, _link) public {<initialization with other arguments goes here>}}The oracle will have given you an ID for the VRF keypair they havecommitted to (let's call it keyHash), and have told you the minimum LINKprice for VRF service. Make sure your contract has sufficient LINK, andcall requestRandomness(keyHash, fee, seed), where seed is the input youwant to generate randomness from.Once the VRFCoordinator has received and validated the oracle's responseto your request, it will call your contract's fulfillRandomness method.The randomness argument to fulfillRandomness is the actual random valuegenerated from your seed.The requestId argument is generated from the keyHash and the seed bymakeRequestId(keyHash, seed). If your contract could have concurrentrequests open, you can use the requestId to track which seed isassociated with which randomness. See VRFRequestIDBase.sol for moredetails.Colliding `requestId`s are cryptographically impossible as long as seedsdiffer. (Which is critical to making unpredictable randomness! See thenext section.) * *****************************************************************************SECURITY CONSIDERATIONSTo increase trust in your contract, the source of your seeds should behard for anyone to influence or predict. Any party who can influencethem could in principle collude with the oracle (who can instantlycompute the VRF output for any given seed) to bias the outcomes fromyour contract in their favor. For instance, the block hash is a naturalchoice of seed for many applications, but miners in control of asubstantial fraction of hashing power and with access to VRF outputscould check the result of prospective block hashes as they are mined,and decide not to publish a block if they don't like the outcome it willlead to.On the other hand, using block hashes as the seed makes it particularlyeasy to estimate the economic cost to a miner for this kind of cheating(namely, the block reward and transaction fees they forgo by refrainingfrom publishing a block.)\",\"methods\":{\"fulfillRandomness(bytes32,uint256)\":{\"details\":\"The VRFCoordinator expects a calling contract to have a method withthis signature, and will call it once it has verified the proofassociated with the randomness.\",\"params\":{\"randomness\":\"the VRF output\",\"requestId\":\"The Id initially returned by requestRandomness\"}},\"requestRandomness(bytes32,uint256,uint256)\":{\"details\":\"The source of the seed data must be something which the oraclecannot anticipate. See \\\"SECURITY CONSIDERATIONS\\\" above.The fulfillRandomness method receives the output, once it's providedby the Oracle, and verified by the vrfCoordinator.The _keyHash must already be registered with the VRFCoordinator, andthe _fee must exceed the fee specified during registration of the_keyHash.The returned requestId can be used to distinguish responses to *concurrent requests. It is passed as the first argument tofulfillRandomness.\",\"params\":{\"_fee\":\"The amount of LINK to send with the request\",\"_keyHash\":\"ID of public key against which randomness is generated\",\"_seed\":\"Random seed from which output randomness is determined\"},\"returns\":{\"requestId\":\"which will be returned with the response to this request\"}}}},\"userdoc\":{\"methods\":{\"fulfillRandomness(bytes32,uint256)\":{\"notice\":\"fulfillRandomness handles the VRF response. Your contract mustimplement it.\"},\"requestRandomness(bytes32,uint256,uint256)\":{\"notice\":\"requestRandomness initiates a request for VRF output given _seed\"}},\"notice\":\"****************************************************************************Interface for contracts using VRF randomness *****************************************************************************\"}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/VRFConsumerBase.sol\":\"VRFConsumerBase\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/VRFConsumerBase.sol\":{\"keccak256\":\"0xe3780908c7cefe398d20ad2ff82c8648f91ae886cdb8f78813576340d0baf6a1\",\"urls\":[\"bzz-raw://00dbff4e17f11dbf59c403ef8992fbad0dbd0c70bc60fc760593702e7501b55a\",\"dweb:/ipfs/QmbtST2wX72mmwmvhA7FgKtAub89TBeVeb8F5eSyd6p2Ak\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/VRFRequestIDBase.sol\":{\"keccak256\":\"0x0c431760785b5f5b9847fb51ba7e62a3439810e7d8dcbde8247e804f25e6fd21\",\"urls\":[\"bzz-raw://f4c4a572b4681fc118b3db8604f62fb747e9c7dbc19d34aa39f92243b043aeaa\",\"dweb:/ipfs/QmegohMUPgG3NMsn3jAyEE5JUpFsDL7JdJ3LG9bRfY28SF\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/interfaces/LinkTokenInterface.sol\":{\"keccak256\":\"0xdbf46b45a4c9f38ba71a0391aed0e7b108854b619f292d907ae537228868bda6\",\"urls\":[\"bzz-raw://3ae40466809630c4731e2e3a697d6885727c577aaf260766c8a2f534ad3f6ee8\",\"dweb:/ipfs/QmTzpN5yP4Y5jvQ1ohfXFrce3sjzUiSChYJgZj9VvhVohG\"]},\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/vendor/SafeMath.sol\":{\"keccak256\":\"0x95dbe2dd5ab8682b99bc3d7d297b621d4237442da160f78d3323ee5c4a06ded3\",\"urls\":[\"bzz-raw://d753308ff4eb43fba6f9ede371a33f707c5818350770dcb078a7d78ac8251361\",\"dweb:/ipfs/Qme64eYKWoTQiP3WhqGHoMqrENNZ9L8SdBLQ2hx5SmzUda\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('VRFConsumerBase.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.VRFConsumerBase = VRFConsumerBase
