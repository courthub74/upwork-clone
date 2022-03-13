import React from 'react';
import { Link } from "react-router-dom";
// import Badge from 'react-bootstrap/Badge'
import './joblist.css';


function Joblist4(){
    return(
        <div className='joblist'>
            {/* for jobs in jobslist */}
            {/* print jobs */}
            <Link className='joblink' to="/jobfour"><h3>Job Description #4</h3></Link>
            <p>This is the Job #4 Brief <br></br><span className='categorybutton'>React</span><span className='categorybutton'>Django</span></p>
        </div>
    )
}

export default Joblist4;