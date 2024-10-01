import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";
import {Questions} from "./Views/questions.jsx"
import {Signup} from "./Views/signup.jsx"
import {Login} from "./Views/login.jsx"
import {Profile} from "./Views/profile.jsx"
import {Footer} from "./Footer.jsx"
import {Navbar} from "./Navbar.jsx"
import injectContext from "./store/appContext";
const Layout = () => {
  const basename = import.meta.env.VITE_BASENAME || "";
  return (
    <div>
      <AppProvider>
        <Navbar/>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Questions />} path="/preguntas" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<Profile />} path="/profile" />
          </Routes>
        <Footer />
        </AppProvider>
    </div>
  );
};
export default injectContext(Layout);