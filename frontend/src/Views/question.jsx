import React,{useEffect, useState} from "react";
import useAppContext from "../store/appContext";
import { useParams } from "react-router-dom";


export const Question = () =>{
    const {store, actions} = useAppContext();
    const params = useParams()
    const [button1, setButton1] = useState("btn-outline-primary");
    const [button2, setButton2] = useState("btn-outline-primary");
    const [button3, setButton3] = useState("btn-outline-primary");
    const [visible, setVisible] = useState("d-none");


    function changeButton1() {
        ((store.oneQuestion.option1 ==="true") ? setButton1("btn-success") : setButton1("btn-danger"));
        setVisible("");
    }

    function changeButton2() {
        ((store.oneQuestion.option2 ==="true") ? setButton2("btn-success") : setButton2("btn-danger") )
        setVisible("");

    }

    function changeButton3 () {
        ((store.oneQuestion.option3 ==="true") ? setButton3("btn-success") : setButton3("btn-danger") )
        setVisible("");

    }
    
    useEffect(() => {
        actions.getQuestion(params.id);
    }, []);

    return(
        <div className="row col-10 d-flex mx-auto my-3">
            <div className="row" style={{backgroundColor:"#76d1ebaa"}}>
                <img src={store.oneQuestion.logo === "JavaScript"?"https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png":"https://img.icons8.com/color/512/python.png"} alt="" className="col-1 mb-auto mt-0.5 img-fluid"/>

                <div className="col-lg-11">
                    <div className="my-2  mx-0.5 p-1"><h2>{store.oneQuestion.heading}</h2></div>
                    <div  className="my-2  mx-0.5 p-1" style={{backgroundColor:"white"}}><pre><code>{store.oneQuestion.question}</code></pre></div>
                </div>
            </div>
            <div className="row d-flex justify-content-end" style={{backgroundColor:"#76d1ebaa"}}>
                <div className="d-grid col-lg-11 gap-2 my-2">
                    <button type="button" className={"btn d-flex justify-content-start "+button1} onClick={changeButton1}><b><i className="fa-solid fa-1"></i>  {store.oneQuestion.answer1}</b></button>
                    <button type="button" className={"btn d-flex justify-content-start "+button2} onClick={changeButton2}><b><i className="fa-solid fa-2"></i>  {store.oneQuestion.answer2}</b></button>
                    <button type="button" className={"btn d-flex justify-content-start "+button3} onClick={changeButton3}><b><i className="fa-solid fa-3"></i>  {store.oneQuestion.answer3}</b></button>
                </div>
            </div>
            <div className={"row my-2 col-12 border border-primary "+visible}>
                <h3>¿Por qué?</h3>
                <p>{store.oneQuestion.reason}</p>
            </div>
        </div>
    );
};