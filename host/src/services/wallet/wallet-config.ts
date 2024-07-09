import { Transport } from 'viem'
import { http, createConfig, Config } from 'wagmi'
import { base, mainnet, sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

type Chains = readonly [typeof mainnet, typeof base, typeof sepolia]
type Transports = Record<Chains[number]['id'], Transport>

export const config: Config = createConfig({
  chains: [mainnet, base, sepolia],
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [sepolia.id]: http()
  },
})