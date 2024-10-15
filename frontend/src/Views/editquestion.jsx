import React, {useEffect, useState}from "react";
import useAppContext from "../store/AppContext";
import { useNavigate } from "react-router-dom";

export const EditQuestion = () =>{
    const {store, actions} = useAppContext();

    const [question,setQuestion] = useState(store.question.question);
    const [category,setCategory] = useState(store.question.category);
    const [option1,setOption1] = useState(store.question.option1);
    const [answer1,setAnswer1] = useState(store.question.answer1);
    const [option2,setOption2] = useState(store.question.option2);
    const [answer2,setAnswer2] = useState(store.question.answer2);
    const [option3,setOption3] = useState(store.question.option3);
    const [answer3,setAnswer3] = useState(store.question.answer3);
    const [reason,setReason] = useState(store.question.reason);
    const [logo,setLogo] = useState(store.question.logo);
    const [id,setId] = useState(store.question.id);

    const navigate = useNavigate()


    async function handleSubmit(e) {
        const token = localStorage.getItem("token");
        setOption1((option1 === "true")? true : false);
        setOption2((option2 === "true")? true : false);
        setOption3((option3 === "true")? true : false);
        console.log(option1);
        console.log(option2);
        console.log(option3);

        e.preventDefault();
        await actions.editQuestion(question, category, option1, answer1, option2, answer2, option3, answer3, reason, logo, navigate, token, id)
    }

    return (
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-12">
                <label for="question" className="form-label">Question</label>
                <input type="text" className="form-control" id="question" placeholder="Question" onChange={(event) => { setQuestion(event.target.value) }}/>
            </div>
            <div className="col-md-8">
                <label for="category" className="form-label">Category</label>
                <input type="text" className="form-control" id="category" placeholder="Category" onChange={(event) => { setCategory(event.target.value) }}/>
            </div>
            <div className="col-md-4">
                <label for="logo" className="form-label">Logo</label>
                <input type="text" className="form-control" id="logo" placeholder="Logo" onChange={(event) => { setLogo(event.target.value) }}/>
            </div>
            <div className="col-2">
                <div className="form-check mx-auto my-auto">
                    <input className="form-check-input" type="checkbox" id="option1" value="true" checked={option1 === "true"} onChange={(event) => { setOption1(event.target.value) }}/>
                </div>
            </div>
            <div className="col-10">
                <label for="answer1" className="form-label">Answer1</label>
                <input type="text" className="form-control" id="answer1" placeholder="Answer1" onChange={(event) => { setAnswer1(event.target.value) }}/>
            </div>
            <div className="col-2">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="option2" value="true" checked={option2 === "true"} onChange={(event) => { setOption2(event.target.value) }}/>
                </div>
            </div>
            <div className="col-10">
                <label for="answer2" className="form-label">Answer2</label>
                <input type="text" className="form-control" id="answer2" placeholder="Answer2" onChange={(event) => { setAnswer2(event.target.value) }}/>
            </div>
            <div className="col-2">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="option3" value='true' checked={option3 === "true"} onChange={(event) => { setOption3(event.target.value) }}/>
                </div>
            </div>
            <div className="col-10">
                <label for="answer3" className="form-label">Answer3</label>
                <input type="text" className="form-control" id="answer3" placeholder="Answer3" onChange={(event) => { setAnswer3(event.target.value) }}/>
            </div>
            <div className="col-12">
                <label for="reason" className="form-label">Reason</label>
                <input type="text" className="form-control" id="reason" placeholder="Reason" onChange={(event) => { setReason(event.target.value) }}/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Crear pregunta</button>
            </div>
        </form>
    );
};