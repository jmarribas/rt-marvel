import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { OffsetProvider } from './components/OffsetContext/OffsetContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <OffsetProvider>
        <App />
      </OffsetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
