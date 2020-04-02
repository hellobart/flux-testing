import { FluxAggregatorFactory } from './evm-contracts/ethers/v0.6/FluxAggregatorFactory'
import { createProvider } from './provider'

export async function addOracle(signerAddress, fluxAddress, oracles) {
  const provider = createProvider()
  const signer = provider.getSigner(signerAddress)
try {

  const contract = FluxAggregatorFactory.connect(fluxAddress, signer)
  const tx = await contract.addOracle(oracles[0], oracles[0], 1, 1, 0)
  await tx.wait(1)
  const tx2 = await contract.addOracle(oracles[1], oracles[1], 2, 2, 0)
  await tx2.wait(1)
  await contract.addOracle(oracles[2], oracles[2], 2, 3, 0)
} catch(er){
  console.log(er)
}
  console.log('Oracles added: ', JSON.stringify(oracles))
}

