import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";
import {Question} from "./Views/question.jsx"
import {Signup} from "./Views/signup.jsx"
import {Login} from "./Views/login.jsx"
import {Profile} from "./Views/profile.jsx"
import {Footer} from "./Footer.jsx"
import {Navbar} from "./Navbar.jsx"
import {AppProvider} from "./store/AppContext.jsx";
import { Home } from "./Views/home.jsx";
import { NewQuestion } from "./Views/newquestion.jsx";
import {EditQuestion} from "./Views/editquestion.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
      <AppProvider>
        <Navbar/>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Question />} path="/question/:id" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<NewQuestion />} path="/newquestion" />
            <Route element={<EditQuestion />} path="/editquestion" />

          </Routes>
        <Footer/>
      </AppProvider>
      </BrowserRouter>
    </React.StrictMode>,

)
// export default injectContext(Layout);