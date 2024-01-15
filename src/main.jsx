import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {ShopContextProvider} from './Context/ShopContext.jsx'
import { FilterContextProvider } from './Context/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterContextProvider>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
    </FilterContextProvider>
  </React.StrictMode>,
)
