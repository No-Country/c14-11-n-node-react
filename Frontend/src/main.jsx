import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import { StoreProvider } from './Store.jsx'

import { TrailersMovies } from './pages/TrailersMovies.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <StoreProvider>
        <TrailersMovies />
        <App />
      </StoreProvider>
    </React.StrictMode>
  </BrowserRouter>
)
