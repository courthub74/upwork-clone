import React from 'react';
import { Link } from "react-router-dom";
import './joblist.css';


function Joblist1(){
    return(
        <div>
            {/* for jobs in jobslist */}
            {/* print jobs */}
            <Link to="/jobone"><h3>Job Description #1</h3></Link>
            <p>Job #1 Brief</p>
        </div>
    )
}

export default Joblist1;