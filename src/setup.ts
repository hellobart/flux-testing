import {deployLink} from './deployLink'
import {deployFlux} from './deployFlux'
import {addOracle} from './addOracle'

let fs = require('fs')
let util = require('util')

const writeFile = util.promisify(fs.writeFile)
const rootDir = process.cwd()
let addresses = require(rootDir + '/addresses.json')

async function setup() {
  console.log('----- Flux Aggregator Setup -----')
  const linkAddress = await deployLink(addresses.wallet[1])
  const fluxAddress = await deployFlux(addresses.wallet[1], linkAddress)
  await addOracle(addresses.wallet[1], fluxAddress, addresses.wallet)

  addresses.link = linkAddress
  addresses.flux = fluxAddress
  addresses.oracles = addresses.wallet

  await writeFile('./addresses.json', JSON.stringify(addresses, null, 4));
  console.log('----- Finished -----')
}

setup()