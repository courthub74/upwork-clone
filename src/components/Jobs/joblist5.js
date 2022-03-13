import React from 'react';
import { Link } from "react-router-dom";
// import Badge from 'react-bootstrap/Badge'
import './joblist.css';


function Joblist5(){
    return(
        <div className='joblist'>
            {/* for jobs in jobslist */}
            {/* print jobs */}
            <Link className='joblink' to="/jobfive"><h3>Job Description #5</h3></Link>
            <p>This is the Job #5 Brief <br></br><span className='categorybutton'>Web Scraping</span><span className='categorybutton'>Python</span></p>
        </div>
    )
}

export default Joblist5;