import React from "react";

export const NewQuestion = () => {

    return (
        <form className="row g-3">
            <div className="col-md-12">
                <label for="question" className="form-label">Question</label>
                <input type="text" className="form-control" id="question" placeholder="Question"/>
            </div>
            <div className="col-md-12">
                <label for="category" className="form-label">Category</label>
                <input type="text" className="form-control" id="category" placeholder="Category"/>
            </div>
            <div className="col-2">
                <div className="form-check mx-auto my-auto">
                    <input className="form-check-input" type="checkbox" id="option1" value="true"/>
                    <input className="form-check-input" type="hidden" id="option1" value="false"/>
                </div>
            </div>
            <div className="col-10">
                <label for="answer1" className="form-label">Answer1</label>
                <input type="text" className="form-control" id="answer1" placeholder="Answer1"/>
            </div>
            <div className="col-2">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="option2" value="true"/>
                    <input className="form-check-input" type="hidden" id="option2" value="false"/>
                </div>
            </div>
            <div className="col-10">
                <label for="answer2" className="form-label">Answer2</label>
                <input type="text" className="form-control" id="answer2" placeholder="Answer2" />
            </div>
            <div className="col-2">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="option3" value="true"/>
                    <input className="form-check-input" type="hidden" id="option3" value="false"/>
                </div>
            </div>
            <div className="col-10">
                <label for="answer3" className="form-label">Answer3</label>
                <input type="text" className="form-control" id="answer3" placeholder="Answer3" />
            </div>
            <div className="col-12">
                <label for="reason" className="form-label">Reason</label>
                <input type="text" className="form-control" id="reason" placeholder="Reason" />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Crear pregunta</button>
            </div>
        </form>
    );
};