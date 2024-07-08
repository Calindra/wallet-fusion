import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './services/wallet/wallet-config.ts'

const queryClient = new QueryClient()

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