'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const VRF = contract({
 "contractName": "VRF",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212208159d81e359eb98307c7d7794acbdee91af7d799892dc73fdc08889d5d327bcc64736f6c63430006020033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x3F DUP1 PUSH1 0x1D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DUP2 MSIZE 0xD8 0x1E CALLDATALOAD SWAP15 0xB9 DUP4 SMOD 0xC7 0xD7 PUSH26 0x4ACBDEE91AF7D799892DC73FDC08889D5D327BCC64736F6C6343 STOP MOD MUL STOP CALLER ",
   "sourceMap": "7136:19412:6:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7136:19412:6;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x6080604052600080fdfea26469706673582212208159d81e359eb98307c7d7794acbdee91af7d799892dc73fdc08889d5d327bcc64736f6c63430006020033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DUP2 MSIZE 0xD8 0x1E CALLDATALOAD SWAP15 0xB9 DUP4 SMOD 0xC7 0xD7 PUSH26 0x4ACBDEE91AF7D799892DC73FDC08889D5D327BCC64736F6C6343 STOP MOD MUL STOP CALLER ",
   "sourceMap": "7136:19412:6:-:0;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Bibliographic references:Goldberg, et al., \\\"Verifiable Random Functions (VRFs)\\\", Internet Draftdraft-irtf-cfrg-vrf-05, IETF, Aug 11 2019,https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-vrf-05Papadopoulos, et al., \\\"Making NSEC5 Practical for DNSSEC\\\", CryptologyePrint Archive, Report 2017/099, https://eprint.iacr.org/2017/099.pdf ****************************************************************************USAGEThe main entry point is randomValueFromVRFProof. See its docstring. ****************************************************************************PURPOSEReggie the Random Oracle (not his real job) wants to provide randomnessto Vera the verifier in such a way that Vera can be sure he's notmaking his output up to suit himself. Reggie provides Vera a public keyto which he knows the secret key. Each time Vera provides a seed toReggie, he gives back a value which is computed completelydeterministically from the seed and the secret key.Reggie provides a proof by which Vera can verify that the output wascorrectly computed once Reggie tells it to her, but without that proof,the output is computationally indistinguishable to her from a uniformrandom sample from the output space.The purpose of this contract is to perform that verification. ****************************************************************************DESIGN NOTESThe VRF algorithm verified here satisfies the full unqiqueness, fullcollision resistance, and full pseudorandomness security properties.See \\\"SECURITY PROPERTIES\\\" below, andhttps://datatracker.ietf.org/doc/html/draft-irtf-cfrg-vrf-05#section-3An elliptic curve point is generally represented in the solidity codeas a uint256[2], corresponding to its affine coordinates inGF(FIELD_SIZE).For the sake of efficiency, this implementation deviates from the specin some minor ways:- Keccak hash rather than the SHA256 hash recommended inhttps://datatracker.ietf.org/doc/html/draft-irtf-cfrg-vrf-05#section-5.5Keccak costs much less gas on the EVM, and provides similar security.- Secp256k1 curve instead of the P-256 or ED25519 curves recommended inhttps://datatracker.ietf.org/doc/html/draft-irtf-cfrg-vrf-05#section-5.5For curve-point multiplication, it's much cheaper to abuse ECRECOVER- hashToCurve recursively hashes until it finds a curve x-ordinate. Onthe EVM, this is slightly more efficient than the recommendation inhttps://datatracker.ietf.org/doc/html/draft-irtf-cfrg-vrf-05#section-5.4.1.1step 5, to concatenate with a nonce then hash, and rehash with thenonce updated until a valid x-ordinate is found.- hashToCurve does not include a cipher version string or the byte 0x1in the hash message, as recommended in step 5.B of the draftstandard. They are unnecessary here because no variation in thecipher suite is allowed.- Similarly, the hash input in scalarFromCurvePoints does not include acommitment to the cipher suite, either, which differs from step 2 ofhttps://datatracker.ietf.org/doc/html/draft-irtf-cfrg-vrf-05#section-5.4.3. Also, the hash input is the concatenation of the uncompressedpoints, not the compressed points as recommended in step 3.- In the calculation of the challenge value \\\"c\\\", the \\\"u\\\" value (i.e.the value computed by Reggie as the nonce times the secp256k1generator point, see steps 5 and 7 ofhttps://datatracker.ietf.org/doc/html/draft-irtf-cfrg-vrf-05#section-5.3) is replaced by its ethereum address, i.e. the lower 160 bits of thekeccak hash of the original u. This is because we only verify thecalculation of u up to its address, by abusing ECRECOVER. ****************************************************************************SECURITY PROPERTIESHere are the security properties for this VRF:Full uniqueness: For any seed and valid VRF public key, there isexactly one VRF output which can be proved to come from that seed, inthe sense that the proof will pass verifyVRFProof.Full collision resistance: It's cryptographically infeasible to findtwo seeds with same VRF output from a fixed, valid VRF keyFull pseudorandomness: Absent the proofs that the VRF outputs arederived from a given seed, the outputs are computationallyindistinguishable from randomness.https://eprint.iacr.org/2017/099.pdf, Appendix B contains the proofsfor these properties.For secp256k1, the key validation described in sectionhttps://datatracker.ietf.org/doc/html/draft-irtf-cfrg-vrf-05#section-5.6is unnecessary, because secp256k1 has cofactor 1, and therepresentation of the public key used here (affine x- and y-ordinatesof the secp256k1 point on the standard y^2=x^3+7 curve) cannot refer tothe point at infinity. ****************************************************************************OTHER SECURITY CONSIDERATIONSThe seed input to the VRF could in principle force an arbitrary amountof work in hashToCurve, by requiring extra rounds of hashing andchecking whether that's yielded the x ordinate of a secp256k1 point.However, under the Random Oracle Model the probability of choosing apoint which forces n extra rounds in hashToCurve is 2\\u207b\\u207f. The base costfor calling hashToCurve is about 25,000 gas, and each round of checkingfor a valid x ordinate costs about 15,555 gas, so to find a seed forwhich hashToCurve would cost more than 2,017,000 gas, one would have totry, in expectation, about 2\\u00b9\\u00b2\\u2078 seeds, which is infeasible for anyforseeable computational resources. (25,000 + 128 * 15,555 < 2,017,000.)Since the gas block limit for the Ethereum main net is 10,000,000 gas,this means it is infeasible for an adversary to prevent correctoperation of this contract by choosing an adverse seed.(See TestMeasureHashToCurveGasCost for verification of the gas cost forhashToCurve.)It may be possible to make a secure constant-time hashToCurve function.See notes in hashToCurve docstring.\",\"methods\":{}},\"userdoc\":{\"methods\":{},\"notice\":\"****************************************************************************Verification of verifiable-random-function (VRF) proofs, followinghttps://datatracker.ietf.org/doc/html/draft-irtf-cfrg-vrf-05#section-5.3See https://eprint.iacr.org/2017/099.pdf for security proofs.\"}},\"settings\":{\"compilationTarget\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/VRF.sol\":\"VRF\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/bartosz/localhost/chainlink/evm-contracts/src/v0.6/VRF.sol\":{\"keccak256\":\"0xfb21a49da78ea7ea7c371027608a74e1817006c23e9ccbe865230ed00b8a0dd4\",\"urls\":[\"bzz-raw://623742dffd5c55cc0d3e0a185c6e2e9fbda83272d63bbe89a11145a8ff09113d\",\"dweb:/ipfs/QmbiSvzL5ijbx1iVq4qVRJMr4ZNxDvDgmNjMToHgG2WaXt\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('VRF.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.VRF = VRF