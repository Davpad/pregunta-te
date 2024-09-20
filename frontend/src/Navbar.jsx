import React, {Component} from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid col-12">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                {/* <a className="navbar-brand" href="#">Hidden brand</a> */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/preguntas">Preguntas</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                < div className="d-flex">
                    <Link className="btn btn-primary" to="/signup" >Signup</Link>
                    <Link className="btn btn-primary" to="/login" >Login</Link>
                </div>
            </div>
        </div>
    </nav>
);