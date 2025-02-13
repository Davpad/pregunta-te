import React, {useEffect, useState} from "react";
import useAppContext from "../store/appContext";
import { InfoQuestionHome } from "../components/infoQuestionHome";

export const Home = () =>{
    const {store, actions} = useAppContext();
    const [questions,setQuestions] = useState([]);
    // console.log(questions);


    useEffect(() => {

        actions.getQuestions();
        
        // setQuestions(store.questions)
        // console.log(store.questions);
        
    }, []);

    return(
        
        <div className="justify-content-center container">
            {store.questions.map((quest)=>{
                return(
                    <div className="text col-8 col-md-6 col-lg-12 my-4 d-flex justify-content-center custom-col" key={quest.id}>
                        <InfoQuestionHome 
                            key={quest?.id}
                            logo={quest?.logo}
                            category={quest?.category}
                            question={quest?.question}
                            quest={quest}
                        />
                    </div>

                );
            })}

        </div>

    
    );
};