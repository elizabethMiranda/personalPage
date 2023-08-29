import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles.css'
import { CoffeeMovil } from './CoffeeMovil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CoffeeMovil />
    </BrowserRouter>
  </React.StrictMode>,
)
