import { Transport } from 'viem'
import { http, createConfig, Config } from 'wagmi'
import { base, mainnet } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = 'c3d4cf178de5409be9b84c3df9e45ffb'

type Chains = readonly [typeof mainnet, typeof base]
type Transports = Record<Chains[number]['id'], Transport>

export const config: Config<Chains, Transports> = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})