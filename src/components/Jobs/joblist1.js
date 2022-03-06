import React from 'react';
import { Link } from "react-router-dom";
// import Badge from 'react-bootstrap/Badge'
import './joblist.css';


function Joblist1(){
    return(
        <div className='joblist'>
            {/* for jobs in jobslist */}
            {/* print jobs */}
            <Link to="/jobone"><h3>Job Description #1</h3></Link>
            <p>This is the Job #1 Brief <br></br><button>JavaScript</button><button>NodeJS</button></p>
        </div>
    )
}

export default Joblist1;