import {React} from 'react';
import { Link } from "react-router-dom";
import './joblist.css';

function Jobdescrip4(){
    return(
        <div className='description'>

            <h4>This is the Description of Job #4</h4>
            <p>This is the job #4. This is the job #4.</p>
            <p>This is the job #4. This is the job #4.</p>
            <p>This is the job #4. This is the job #4.</p>
            <p>This is the job #4. This is the job #4.</p>
        
            <br></br>
            <button>React</button><button>Django</button>

            <hr></hr>

            <h5 className='mainlink'><Link to="/">Back to Main Page</Link></h5>

        </div>
    )
};

export default Jobdescrip4;