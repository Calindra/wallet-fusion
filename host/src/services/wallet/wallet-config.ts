import { Transport } from 'viem'
import { http, createConfig, Config } from 'wagmi'
import { base, mainnet } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

type Chains = readonly [typeof mainnet, typeof base]
type Transports = Record<Chains[number]['id'], Transport>

export const config: Config<Chains, Transports> = createConfig({
  chains: [mainnet, base],
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})