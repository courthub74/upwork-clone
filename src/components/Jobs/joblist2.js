import React from 'react';
import { Link } from "react-router-dom";
import './joblist.css';


function Joblist2(){
    return(
        <div className='joblist'>
            {/* for jobs in jobslist */}
            {/* print jobs */}
            <Link to="/jobtwo"><h3>Job Description #2</h3></Link>
            <p>This is the Job #2 Brief <br></br><button>Python</button><button>Django</button></p>
        </div>
    )
}

export default Joblist2;