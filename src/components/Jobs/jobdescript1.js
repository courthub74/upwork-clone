import {React} from 'react';
import { Link } from "react-router-dom";
import './joblist.css';

function Jobdescrip1(){
    return(

        <div className='description'>
            <h4>This is the Description of Job #1</h4>
            <p>This is the job #1. This is the job #1.</p>
            <p>This is the job #1. This is the job #1.</p>
            <p>This is the job #1. This is the job #1.</p>
            <p>This is the job #1. This is the job #1.</p>
            <br></br>
            <button>JavaScript</button><button>NodeJS</button>

            <br></br>

            <hr></hr>
            
            <button className='bigblu' type='submit'>I Like this Job</button><button className='bigred'>Never Mind</button>
        
            <hr></hr>
        
            <h5 className='mainlink'><Link to="/">Back to Main Page</Link></h5>
        </div>
        
    )
};

export default Jobdescrip1;