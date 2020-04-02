import { ethers } from 'ethers'

export function createProvider(): ethers.providers.JsonRpcProvider {
  const port = process.env.ETH_HTTP_PORT || `8545`
  const providerURL = process.env.ETH_HTTP_URL || `http://localhost:${port}`
  return new ethers.providers.JsonRpcProvider(providerURL)
}
