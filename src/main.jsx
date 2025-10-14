import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Kuhoo from './pages/Kuhoo'
import Eduacademy from './pages/Eduacademy'
import WQInvoiceApp from './pages/WQInvoiceApp'
import Trilingual from './pages/Trilingual'
import MathQuiz from './pages/MathQuiz'
import MufoApp from './pages/MufoApp'
import ERPSystem from './pages/ERPSystem'
import NewsTrack from './pages/NewsTrack'
import ICICIBank from './pages/ICICIBank'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kuhoo" element={<Kuhoo />} />
        <Route path="/eduacademy" element={<Eduacademy />} />
        <Route path="/wq-invoice-app" element={<WQInvoiceApp />} />
        <Route path="/trilingual" element={<Trilingual />} />
        <Route path="/math-quiz" element={<MathQuiz />} />
        <Route path="/mufo-app" element={<MufoApp />} />
        <Route path="/erp-system" element={<ERPSystem />} />
        <Route path="/newstrack" element={<NewsTrack />} />
        <Route path="/icici-bank" element={<ICICIBank />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
