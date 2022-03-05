import {React} from 'react';
import { Link } from "react-router-dom";
import './joblist.css';

function Jobdescrip2(){
    return(
        <div className='description'>

            <h4>This is the Description of Job #2</h4>
            <p>This is the job #2. This is the job #2.</p>
            <p>This is the job #2. This is the job #2.</p>
            <p>This is the job #2. This is the job #2.</p>
            <p>This is the job #2. This is the job #2.</p>
            

            <h5 className='mainlink'><Link to="/">Back to Main Page</Link></h5>

        </div>
    )
};

export default Jobdescrip2;