import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Footer } from "./Footer.jsx";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Views/home.jsx";
import { Questions } from './Views/questions.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Questions />} path="/preguntas" />

        </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
