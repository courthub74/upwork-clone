import {React} from 'react';
import { Link } from "react-router-dom";
import './joblist.css';

function Jobdescrip6(){
    return(

        <div className='description'>
            <h4>This is the Description of Job #6</h4>
            <p>This is the job #6. This is the job #6.</p>
            <p>This is the job #6. This is the job #6.</p>
            <p>This is the job #6. This is the job #6.</p>
            <p>This is the job #6. This is the job #6.</p>
            
            <br></br>
            <button>JavaScript</button><button>API</button>
        
            <hr></hr>
        
            <h5 className='mainlink'><Link to="/">Back to Main Page</Link></h5>
        </div>
        
    )
};

export default Jobdescrip6;