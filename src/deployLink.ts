import { LinkTokenFactory } from './evm-contracts/ethers/v0.4/LinkTokenFactory'
import { createProvider } from './provider'

export async function deployLink(signerAddress) {
  const provider = createProvider()
  const signer = provider.getSigner(signerAddress)
  const contractFactory = new LinkTokenFactory(signer)
  const contract = await contractFactory.deploy()
  await contract.deployed()
  console.log(`Deployed Link at: ${contract.address}`)
  return contract.address
}
