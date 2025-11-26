import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ShopProvider } from './context/ShopContext'
import { ToastProvider } from './context/ToastContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
      <ShopProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ShopProvider>
    </ToastProvider>
  </React.StrictMode>,
)
