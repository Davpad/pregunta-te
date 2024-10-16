import React from "react";

export const InfoQuestion = () => {

    return (
        <div className="card mb-3 w_100" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex">
                            <button className="btn btn-danger">Delete</button>
                            <button className="btn btn-succes">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};