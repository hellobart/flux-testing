import {deployLink} from './deployLink'
import {deployFlux} from './deployFlux'
import {addOracle} from './addOracle'

let fs = require('fs')
let util = require('util')

const feedsConfig = {
  "contractAddress": "",
  "contractType": "aggregator",
  "contractVersion": 3,
  "name": "FLUX / USD",
  "valuePrefix": "$",
  "pair": ["FLUX", "USD"],
  "path": "flux-usd",
  "networkId": 1,
  "history": true,
  "decimalPlaces": 3,
  "multiply": "100000",
  "sponsored": ["FLUX User"],
  "heartbeat": 3600,
  "threshold": 2,
  "compare_offchain": "",
  "health_price": "",
  "listing": true
}

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
  console.log('----- Copy Feeds Config -----')
  feedsConfig.contractAddress = fluxAddress
  console.log(JSON.stringify(feedsConfig, null, 4))
  console.log('----- Finished -----')
}

setup()