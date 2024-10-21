import React,{useEffect} from "react";
import useAppContext from "../store/AppContext";
import { useParams } from "react-router-dom";


export const Question = () =>{
    const {store, actions} = useAppContext();
    const params = useParams()

    useEffect(() => {
        actions.getQuestion(params.id);
        console.log(store.question);
        console.log(params.id);
        
        
    }, []);

    return(
        <div className="row col-10 d-flex mx-auto">
            <div className="row" style={{backgroundColor:"#76d1ebaa"}}>
                <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" className="col-1"/>

                <div className="col-lg-11">
                    <div className="my-2  mx-0.5" style={{backgroundColor:"white"}}>Esta es la categoria</div>
                    <div className="my-2  mx-0.5" style={{backgroundColor:"white"}}>Esta es la pregunta</div>
                </div>
            </div>
            <div className="row d-flex justify-content-end" style={{backgroundColor:"#76d1ebaa"}}>
                <div className="d-grid col-lg-11 gap-2 my-2">
                    <button type="button" className="btn btn-outline-primary" style={{backgroundColor:"white"}}><b>Opcion 1</b></button>
                    <button type="button" className="btn btn-outline-primary" style={{backgroundColor:"white"}}><b>Opcion 2</b></button>
                    <button type="button" className="btn btn-outline-primary" style={{backgroundColor:"white"}}><b>Opcion 3</b></button>
                </div>
            </div>
        </div>
    );
};