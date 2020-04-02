import { FluxAggregatorFactory } from './evm-contracts/ethers/v0.6/FluxAggregatorFactory'
import { createProvider } from './provider'
const rootDir = process.cwd()
let addresses = require(rootDir + '/addresses.json')

async function main() {
  await name()
}

main()

export async function name() {
  const provider = createProvider()
  const contract = FluxAggregatorFactory.connect(addresses.flux, provider)
  const oracles = await contract.getOracles()
  console.log(oracles)
}
