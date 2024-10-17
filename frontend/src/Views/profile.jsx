import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import useAppContext from "../store/AppContext";
import { InfoQuestion } from "../components/infoQuestion";


export const Profile = () =>{
    const {store, actions} = useAppContext();
    const [questions,setQuestions] = useState([]);
    console.log(questions);


    useEffect(() => {
        const token = localStorage.getItem("token");

        actions.getUserQuestions(token);
        
        // setQuestions(store.questions)
        // console.log(store.questions);
        
    }, []);

    return(
        <div>
            <div className="justify-content-center container">
                {questions.map((question)=>{
                    return(
                        <div className="text col-8 col-md-6 col-lg-3 mb-4 d-flex justify-content-center custom-col">
                            <InfoQuestion 
                                key={question.id}
                                logo={question.logo}
                                category={question.category}
                                question={question.question}
                            />
                        </div>

                    );
                })}

            </div>

            <div className="d-flex justify-content-end">
                <Link className="btn btn-primary m-2" to="/newquestion">Add new question</Link>
            </div>
        </div>
    );
};