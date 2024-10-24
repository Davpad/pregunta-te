import React, {useEffect, useState}from "react";
import useAppContext from "../store/AppContext";
import { Link, useNavigate } from "react-router-dom";


export const InfoQuestionHome = ({id, logo, category, question, quest}) => {
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
                            
                            <Link to={"/question/"+quest.id} className="btn btn-primary mx-2">Ir a pregunta</Link>

                            <button className="btn btn-success mx-2" onClick={()=>{
                                actions.setOneQuestion(quest)
                                navigate("/editquestion")
                                console.log(store.oneQuestion);
                            
                            }}>Añadir pregunta a array</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};