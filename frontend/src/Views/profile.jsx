import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import useAppContext from "../store/AppContext";
import { InfoQuestion } from "../components/infoQuestion";


export const Profile = () =>{
    const {store, actions} = useAppContext();
    const [userQuestions,setUserQuestions] = useState([]);


    useEffect(() => {
        const token = localStorage.getItem("token");

        actions.getUserQuestions(token);
        console.log(store.userQuestions);
        
        // setQuestions(store.questions)
        
    }, []);

    return(
        <div>
            <h2>Mis preguntas</h2>
            <div className="justify-content-center container">
                {store.userQuestions.map((userQuestion)=>{
                    return(
                        <div className="text col-8 col-md-6 col-lg-12 my-4 d-flex justify-content-center custom-col">
                            <InfoQuestion 
                                key={userQuestion?.id}
                                logo={userQuestion?.logo}
                                category={userQuestion?.category}
                                question={userQuestion?.question}
                                userQuestion={userQuestion}
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