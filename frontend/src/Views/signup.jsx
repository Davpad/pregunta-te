import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () =>{

    const { actions } = useContext(Context);
    
    const [username, setUsername] = useState("");
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const navigate = useNavigate()

    function handleSubmit() {
        actions.signup(email, password, username);
        navigate("/profile");
    }

    return(
    <form className="row g-3" onsubmit={handleSubmit}>
        <div className="col-md-12">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail" onChange={(event) => { setEmail(event.target.value) }}/>
        </div>
        <div className="col-md-12">
            <label for="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword" onChange={(event) => { setPassword(event.target.value) }}/>
        </div>
        <div className="col-12">
            <label for="inputUsername" className="form-label">Username</label>
            <input type="text" className="form-control" id="inputUsername" onChange={(event) => { setUsername(event.target.value) }}/>
        </div>
        {/* <div className="col-12">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="activeCheck"/>
                <label classNameName="form-check-label" for="activeCheck">
                    I'm active
                </label>
            </div>
        </div> */}
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign up</button>
        </div>
    </form>    
    );
};