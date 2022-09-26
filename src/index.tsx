import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Expenses from './components/Expenses/Expenses'
import Invoices from './components/Invoices/Invoices'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='expenses' element={<Expenses />} />
        <Route path='invoices' element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
