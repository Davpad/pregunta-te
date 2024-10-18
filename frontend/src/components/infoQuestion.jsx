import React, {useEffect, useState}from "react";
import useAppContext from "../store/AppContext";
import { useNavigate } from "react-router-dom";


export const InfoQuestion = ({id, logo, category, question}) => {
    const {store, actions} = useAppContext();
    const navigate = useNavigate()
    const token = localStorage.getItem("token");



    return (
        <div className="card mb-3 w-75" key={id} >
            <div className="row g-0">
                <div className="col-md-2">
                    <img src={logo} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-10">
                    <div className="card-header">{category}</div>
                    <div className="card-body">
                        <p className="card-text">{question}</p>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-danger mx-2">Delete</button>
                            <button className="btn btn-success mx-2">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};