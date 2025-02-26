import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PlayHeader } from './components/play-elements.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PlayHeader /> */}
    <App />
  </StrictMode>,
)
