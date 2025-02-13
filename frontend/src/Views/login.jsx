import React, {useEffect, useState} from "react";
import useAppContext from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () =>{
    const {store, actions} = useAppContext();

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault();
        await actions.login(email, password, navigate)
    }

    return(
    <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-12">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail" onChange={(event) => { setEmail(event.target.value) }}/>
        </div>
        <div className="col-md-12">
            <label for="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword" onChange={(event) => { setPassword(event.target.value) }}/>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Login</button>
        </div>
    </form>  
    );
};