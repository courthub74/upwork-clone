import {React} from 'react';
import { Link } from "react-router-dom";
import './joblist.css';

function Jobdescrip3(){
    return(
        <div className='description'>

            <h4>This is the Description of Job #3</h4>
            <p>This is the job #3. This is the job #3.</p>
            <p>This is the job #3. This is the job #3.</p>
            <p>This is the job #3. This is the job #3.</p>
            <p>This is the job #3. This is the job #3.</p>
            

            <h5 className='mainlink'><Link to="/">Back to Main Page</Link></h5>

        </div>
    )
};

export default Jobdescrip3;