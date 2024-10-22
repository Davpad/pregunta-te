import React,{useEffect} from "react";
import useAppContext from "../store/AppContext";
import { useParams } from "react-router-dom";


export const Question = () =>{
    const {store, actions} = useAppContext();
    const params = useParams()

    useEffect(() => {
        actions.getQuestion(params.id);
        console.log(store.oneQuestion);
        console.log(params.id);
        
        
    }, []);

    return(
        <div className="row col-10 d-flex mx-auto">
            <div className="row" style={{backgroundColor:"#76d1ebaa"}}>
                <img src={store.oneQuestion.logo} alt="" className="col-1"/>

                <div className="col-lg-11">
                    <div className="my-2  mx-0.5" style={{backgroundColor:"white"}}>{store.oneQuestion.category}</div>
                    <div className="my-2  mx-0.5" style={{backgroundColor:"white"}}>{store.oneQuestion.question}</div>
                </div>
            </div>
            <div className="row d-flex justify-content-end" style={{backgroundColor:"#76d1ebaa"}}>
                <div className="d-grid col-lg-11 gap-2 my-2">
                    <button type="button" className="btn btn-outline-primary" style={{backgroundColor:"white"}}><b>{store.oneQuestion.answer1}</b></button>
                    <button type="button" className="btn btn-outline-primary" style={{backgroundColor:"white"}}><b>{store.oneQuestion.answer2}</b></button>
                    <button type="button" className="btn btn-outline-primary" style={{backgroundColor:"white"}}><b>{store.oneQuestion.answer3}</b></button>
                </div>
            </div>
        </div>
    );
};