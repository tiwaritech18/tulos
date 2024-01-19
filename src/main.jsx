import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ShopContextProvider } from './Context/ShopContext.jsx'
import { FilterContextProvider } from './Context/FilterContext.jsx'
import { LoadingProvider } from './Context/LoadingContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadingProvider>
      <FilterContextProvider>
        <ShopContextProvider>
          <App />
        </ShopContextProvider>
      </FilterContextProvider>
    </LoadingProvider>
  </React.StrictMode>,
)
