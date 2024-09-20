import React from "react";

export const Login = () =>{
    
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
            <button type="submit" className="btn btn-primary">Login</button>
        </div>
    </form>  
    );
};