import { FluxAggregatorFactory } from './evm-contracts/ethers/v0.6/FluxAggregatorFactory'
import { createProvider } from './provider'

const rootDir = process.cwd()
let addresses = require(rootDir + '/addresses.json')

updateAnswer(process.argv.slice(2))

async function updateAnswer(args: any) {
  const [oracleNum, round, answer] = args;


  if(oracleNum === 'all') {
    return await Promise.all(addresses.oracles.map((_, i) => updateAnswer([i, round, answer])))
  }

  const provider = createProvider()
  const signer = provider.getSigner(addresses.oracles[parseInt(oracleNum)])

  const contract = FluxAggregatorFactory.connect(addresses.flux, signer)
  const tx = await contract.submit(parseInt(round), parseInt(answer))
  console.log('Updated Answer:', answer)
  return tx;
}


