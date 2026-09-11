import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CardsContextProvider from './Context/CardsContextProvider.jsx'
import CartContextProvider from './Context/CartContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CardsContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </CardsContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
