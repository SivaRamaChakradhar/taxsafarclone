import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'   // ✅ CHANGE HERE
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>   {/* ✅ CHANGE HERE */}
      <App />
    </HashRouter>
  </StrictMode>,
)