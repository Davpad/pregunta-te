import React, {useEffect, useState}from "react";
import useAppContext from "../store/AppContext";
import { useNavigate } from "react-router-dom";


export const InfoQuestion = ({id, logo, category, question}) => {
    const {store, actions} = useAppContext();
    const navigate = useNavigate()
    const token = localStorage.getItem("token");



    return (
        <div className="card mb-3 w_100" key={id} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={logo} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-header">{category}</div>
                    <div className="card-body">
                        <p className="card-text">{question}</p>
                        <div className="d-flex">
                            <button className="btn btn-danger">Delete</button>
                            <button className="btn btn-succes">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};