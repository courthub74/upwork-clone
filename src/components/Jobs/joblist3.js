import React from 'react';
import { Link } from "react-router-dom";
import './joblist.css';


function Joblist3(){
    return(
        <div className='joblist'>
            {/* for jobs in jobslist */}
            {/* print jobs */}
            <Link className='joblink' to="/jobthree"><h3>Job Description #3</h3></Link>
            <p>This is the Job #3 Brief <br></br><span className='categorybutton'>Ruby</span><span className='categorybutton'>Rails</span></p>
        </div>
    )
}

export default Joblist3;