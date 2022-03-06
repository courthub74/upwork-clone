import React from 'react';
import { Link } from "react-router-dom";
// import Badge from 'react-bootstrap/Badge'
import './joblist.css';


function Joblist5(){
    return(
        <div className='joblist'>
            {/* for jobs in jobslist */}
            {/* print jobs */}
            <Link to="/jobfive"><h3>Job Description #5</h3></Link>
            <p>This is the Job #5 Brief <br></br><button>Web Scraping</button><button>Python</button></p>
        </div>
    )
}

export default Joblist5;