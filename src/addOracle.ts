import { FluxAggregatorFactory } from './evm-contracts/ethers/v0.6/FluxAggregatorFactory'
import { createProvider } from './provider'

export async function addOracle(signerAddress, fluxAddress, oracles) {
  const provider = createProvider()
  const signer = provider.getSigner(signerAddress)
try {
  const contract = FluxAggregatorFactory.connect(fluxAddress, signer)
  const tx = await contract.addOracles(oracles, oracles, 1, 1, 0)
  await tx.wait(1)
} catch(er){
  console.log(er)
}
  console.log('Oracles added: ', JSON.stringify(oracles))
}

