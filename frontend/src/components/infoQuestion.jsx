import React, {useEffect, useState}from "react";
import useAppContext from "../store/appContext.jsx";
import { Link, useNavigate } from "react-router-dom";


export const InfoQuestion = ({id, logo, category, question, userQuestion}) => {
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
                            
                            <Link to={"/question/"+userQuestion.id} className="btn btn-primary mx-2"><i className="fa-solid fa-arrow-right-to-bracket"></i></Link>
                            <button className="btn btn-danger mx-2" onClick={()=>{
                                actions.deleteQuestion(userQuestion.id, token)
                                window.location.reload();
                                console.log(store.oneQuestion);}}><i className="fa-solid fa-trash"></i></button>
                            <button className="btn btn-success mx-2" onClick={()=>{
                                actions.setOneQuestion(userQuestion)
                                navigate("/editquestion")
                                console.log(store.oneQuestion);
                            
                            }}><i className="fa-solid fa-pen"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};