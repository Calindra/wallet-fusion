import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx';


const rootElement = document.getElementById("root");
if (rootElement != null) {
  const root = createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  console.error("Element with id 'root' not found.");
}