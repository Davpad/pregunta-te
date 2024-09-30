import React from "react";

export const NewQuestion = () => {

    return (
        <form class="row g-3">
            <div class="col-md-12">
                <label for="question" class="form-label">Question</label>
                <input type="text" class="form-control" id="question" placeholder="Question"/>
            </div>
            <div class="col-md-12">
                <label for="category" class="form-label">Category</label>
                <input type="text" class="form-control" id="category" placeholder="Category"/>
            </div>
            <div class="col-md-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="option1" value="true"/>
                    <input class="form-check-input" type="hidden" id="option1" value="false"/>
                </div>
            </div>
            <div class="col-10">
                <label for="answer1" class="form-label">Answer1</label>
                <input type="text" class="form-control" id="answer1" placeholder="Answer1"/>
            </div>
            <div class="col-md-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="option2" checked={option2==="True"}/>
                </div>
            </div>
            <div class="col-10">
                <label for="answer2" class="form-label">Answer2</label>
                <input type="text" class="form-control" id="answer2" placeholder="Answer2" />
            </div>
            <div class="col-md-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="option3" checked={option3==="True"}/>
                </div>
            </div>
            <div class="col-10">
                <label for="answer3" class="form-label">Answer3</label>
                <input type="text" class="form-control" id="answer3" placeholder="Answer3" />
            </div>
            <div class="col-12">
                <label for="reason" class="form-label">Reason</label>
                <input type="text" class="form-control" id="reason" placeholder="Reason" />
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Crear pregunta</button>
            </div>
        </form>
    );
};