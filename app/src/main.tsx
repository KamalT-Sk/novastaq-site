import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Services from './pages/Services.tsx'
import Procurement from './pages/Procurement.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Referral from './pages/Referral.tsx'
import Careers from './pages/Careers.tsx'
import ServiceDetail from './pages/ServiceDetail.tsx'
import Bootcamp from './pages/Bootcamp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/work" element={<Navigate to="/services#work" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/refer" element={<Referral />} />
          <Route path="/careers" element={<Careers />} />
        </Route>
        <Route path="/bootcamp" element={<Bootcamp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
