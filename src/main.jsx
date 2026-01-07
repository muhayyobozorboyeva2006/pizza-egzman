import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CHageLanguage from './context/CHangeLanguage.jsx'
import ChangeCart from './context/ChangeCart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CHageLanguage>
      <ChangeCart>
        <App />
      </ChangeCart>
    </CHageLanguage>
  </StrictMode>,
)
