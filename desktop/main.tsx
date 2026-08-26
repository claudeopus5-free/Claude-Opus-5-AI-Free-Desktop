// rev-f2a18c-20260826 main.tsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '../theme/global.css'

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)