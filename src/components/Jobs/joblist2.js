import React from 'react';
import { Link } from "react-router-dom";
import './joblist.css';


function Joblist2(){
    return(
        <div>
            {/* for jobs in jobslist */}
            {/* print jobs */}
            <Link to="/jobtwo"><h3>Job Description #2</h3></Link>
            <p>Job #2 Brief</p>
        </div>
    )
}

export default Joblist2;