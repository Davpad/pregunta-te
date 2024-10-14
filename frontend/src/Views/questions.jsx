import React,{useEffect} from "react";
import useAppContext from "../store/AppContext";


export const Questions = () =>{
    const {store, actions} = useAppContext();

    useEffect(() => {
        actions.getQuestions();
        console.log(store.questions);
        
    }, []);

    return(
        <div>Soy la lista de preguntas</div>
    );
};