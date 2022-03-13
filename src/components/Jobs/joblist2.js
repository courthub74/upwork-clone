import React from 'react';
import { Link } from "react-router-dom";
import './joblist.css';


function Joblist2(){
    return(
        <div className='joblist'>
            {/* for jobs in jobslist */}
            {/* print jobs */}
            <Link className='joblink' to="/jobtwo"><h3>Job Description #2</h3></Link>
            <p>This is the Job #2 Brief <br></br><span className='categorybutton'>Python</span><span className='categorybutton'>Django</span></p>
        </div>
    )
}

export default Joblist2;