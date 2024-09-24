import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import injectContext from "./store/appContext.jsx";
// import { flux } from "./store/flux";
// import './index.css'
import { Footer } from "./Footer.jsx";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Views/home.jsx";
import { Questions } from './Views/questions.jsx';
import { Navbar } from './Navbar.jsx';
import { Signup } from "./Views/signup.jsx";
import { Login } from "./Views/login.jsx";
import { Profile } from "./Views/profile.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Navbar/>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Questions />} path="/preguntas" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Login />} path="/login" />
          <Route element={<Profile />} path="/profile" />

        </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);

export default injectContext;
