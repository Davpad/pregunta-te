import React, {useEffect} from "react";
import useAppContext from "../store/AppContext";
// import { Link, useNavigate } from "react-router-dom";

export const Signup = () =>{

    const {store, actions} = useAppContext();

    useEffect(() => {
        console.log(store.ejemplo)
    }, [store.ejemplo])

    return(
    <form className="row g-3">
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
        <div>
            <p>{store.ejemplo}</p>
            <button onClick={() => actions.setEjemplo("chau!")}>Click!</button> 
        </div>
    </form>    
    );
};