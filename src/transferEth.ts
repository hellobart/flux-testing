import { createProvider } from './provider'
import { ethers } from 'ethers'

const rootDir = process.cwd()
let addresses = require(rootDir + '/addresses.json')

export async function transferEth() {
  const provider = createProvider()
  const signer = provider.getSigner(addresses.wallet[1])

  let tx = {
    to: addresses.wallet[0],
    value: ethers.utils.parseEther('5.0')
  };

  let tx2 = {
    to: addresses.wallet[2],
    value: ethers.utils.parseEther('5.0')
  };

  await signer.sendTransaction(tx);
  await signer.sendTransaction(tx2);
  console.log(`Sent 5 Eth to each wallet`)
  return
}
