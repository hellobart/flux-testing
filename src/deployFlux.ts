import { ethers } from 'ethers'
import { FluxAggregatorFactory } from './evm-contracts/ethers/v0.6/FluxAggregatorFactory'
import { createProvider } from './provider'

export async function deployFlux(signerAddress, linkAddress) {
  const provider = createProvider()
  const signer = provider.getSigner(signerAddress)
  const contractFactory = new FluxAggregatorFactory(signer)
  const contract = await contractFactory.deploy(linkAddress,
    0, // payment
    3, // timeout
    6, // decimals
    ethers.utils.formatBytes32String('TEST/USD')
  )

  await contract.deployed()
  console.log(`Deployed FluxAggregator at: ${contract.address}`)
  return contract.address
}
