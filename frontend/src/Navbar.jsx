import React, {Component} from "react";
import { Link, useNavigate } from "react-router-dom";
import useAppContext from "./store/AppContext";


export const Navbar = () => {
    const {store, actions} = useAppContext();
    const navigate = useNavigate()


    let token = localStorage.token;

    function logout() {
        actions.logout();
        navigate("/");
        window.location.reload();
    }


    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                {/* <a className="navbar-brand" href="#">Hidden brand</a> */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link active" to="/">Preguntas</Link>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                < div className="d-flex" role="search">
                    {token ? ( 
                        <div>
                            <Link to="/profile" className="btn btn-primary m-1">Mi perfil</Link>
                            <button className="btn btn-primary m-1" onClick={logout}>Logout</button>
                        </div>                   

                    ):(  
                        <div>                        
                            <Link className="btn btn-primary m-1" to="/signup" >Signup</Link>
                            <Link className="btn btn-primary m-1" to="/login" >Login</Link>
                        </div>                  

                    )}

                </div>
            </div>
        </div>
    </nav>
    );
};