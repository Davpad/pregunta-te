import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Footer } from "./Footer.jsx";
import { Route, Routes } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      {/* <Routes>
        <Route element={<Home />} path="/" />

      </Routes> */}
    <Footer />
  </StrictMode>,
)
