import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartProvider from './context/CartProvider.jsx'
import DataProvider from './context/DataContext.jsx'
import LocationProvider from './context/LocationContext.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <LocationProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
          <CartProvider>
            <App />
          </CartProvider>
        </ClerkProvider>
      </LocationProvider>
    </DataProvider>
  </StrictMode>,
)
