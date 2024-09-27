import React from "react";

export const NewQuestion = () => {

    return (
        <form class="row g-3">
            <div class="col-md-12">
                <label for="question" class="form-label">Pregunta</label>
                <input type="text" class="form-control" id="question" />
            </div>
            <div class="col-md-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="option1" />
                </div>
            </div>
            <div class="col-10">
                <label for="answer1" class="form-label">Answer1</label>
                <input type="text" class="form-control" id="answer1" placeholder="answer1"/>
            </div>
            <div class="col-md-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="option2" />
                </div>
            </div>
            <div class="col-10">
                <label for="answer2" class="form-label">Answer2</label>
                <input type="text" class="form-control" id="answer2" placeholder="answer2" />
            </div>
            <div class="col-md-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="option3" />
                </div>
            </div>
            <div class="col-10">
                <label for="answer3" class="form-label">Answer3</label>
                <input type="text" class="form-control" id="answer3" placeholder="answer3" />
            </div>
            <div class="col-12">
                <label for="reason" class="form-label">Reason</label>
                <input type="text" class="form-control" id="reason" placeholder="reason" />
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Crear pregunta</button>
            </div>
        </form>
    );
};