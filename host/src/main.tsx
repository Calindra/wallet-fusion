import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './services/wallet/wallet-config.ts'
import Account from './components/wallet/Account.tsx'
import WalletOptions from './components/wallet/WalletOptions.tsx'

const queryClient = new QueryClient()

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
}

const rootElement = document.getElementById("root");
if (rootElement != null) {
  const root = createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>
  )
} else {
  console.error("Element with id 'root' not found.");
}