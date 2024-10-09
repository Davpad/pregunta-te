import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";
import {Questions} from "./Views/questions.jsx"
import {Signup} from "./Views/signup.jsx"
import {Login} from "./Views/login.jsx"
import {Profile} from "./Views/profile.jsx"
import {Footer} from "./Footer.jsx"
import {Navbar} from "./Navbar.jsx"
import {AppProvider} from "./store/AppContext.jsx";
import { Home } from "./Views/home.jsx";
import { NewQuestion } from "./Views/newquestion.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
      <AppProvider>
        <Navbar/>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Questions />} path="/preguntas" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<NewQuestion />} path="/newquestion" />

          </Routes>
        <Footer/>
      </AppProvider>
      </BrowserRouter>
    </React.StrictMode>,

)
// export default injectContext(Layout);