import React from 'react';
import { Link } from "react-router-dom";
// import Badge from 'react-bootstrap/Badge'
import './joblist.css';


function Joblist6(){
    return(
        <div className='joblist'>
            {/* for jobs in jobslist */}
            {/* print jobs */}
            <Link className='joblink' to="/jobsix"><h3>Job Description #6</h3></Link>
            <p>This is the Job #6 Brief <br></br><span className='categorybutton'>JavaScript</span><span className='categorybutton'>API</span></p>
        </div>
    )
}

export default Joblist6;