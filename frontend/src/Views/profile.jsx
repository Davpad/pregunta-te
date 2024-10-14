import React from "react";
import { Link } from "react-router-dom";

export const Profile = () =>{
    
    return(
        <div className="d-flex justify-content-end">
            <Link className="btn btn-primary m-2" to="/newquestion">Add new question</Link>
        </div>
    );
};