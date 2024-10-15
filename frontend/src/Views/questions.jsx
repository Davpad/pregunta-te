import React,{useEffect} from "react";
import useAppContext from "../store/AppContext";

export const Questions = () =>{
    const {store, actions} = useAppContext();

    useEffect(() => {
        actions.getQuestions();
        console.log(store.questions);
        
    }, []);

    return(
        <div className="row col-10 d-flex mx-auto">
            <div className="row" style={{backgroundColor:"#76d1ebaa"}}>
                <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" className="col-1"/>
                <div className="my-2 col-lg-11 mx-0.5" style={{backgroundColor:"white"}}>Esta es la categoria</div>
                <div className="my-2 col-lg-11 mx-0.5" style={{backgroundColor:"white"}}>Esta es la pregunta</div>

            </div>
            <div className="row d-flex justify-content-end" style={{backgroundColor:"#76d1ebaa"}}>
                <div class="d-grid col-lg-11 gap-2 my-2">
                    <button type="button" className="btn btn-outline-primary" style={{backgroundColor:"white"}}><b>Opcion 1</b></button>
                    <button type="button" className="btn btn-outline-primary" style={{backgroundColor:"white"}}><b>Opcion 2</b></button>
                    <button type="button" className="btn btn-outline-primary" style={{backgroundColor:"white"}}><b>Opcion 3</b></button>
                </div>
            </div>
        </div>
    );
};