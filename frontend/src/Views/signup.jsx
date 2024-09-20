import React from "react";

export const Signup = () =>{
    
    return(
    <form className="row g-3">
        <div className="col-md-12">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail"/>
        </div>
        <div className="col-md-12">
            <label for="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword"/>
        </div>
        <div className="col-12">
            <label for="inputUsername" className="form-label">Username</label>
            <input type="text" className="form-control" id="inputUsername"/>
        </div>
        <div className="col-12">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="activeCheck"/>
                <label classNameName="form-check-label" for="activeCheck">
                    I'm active
                </label>
            </div>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign up</button>
        </div>
    </form>    
    );
};