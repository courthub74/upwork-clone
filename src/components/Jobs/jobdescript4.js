import {React} from 'react';
import { Link } from "react-router-dom";
import './joblist.css';

import Buttons1 from '../Likebuttons/bothbuttons';

function Jobdescrip4(){
    return(
        <div className='description'>

            <h4>This is the Description of Job #4</h4>
            <p>This is the job #4. This is the job #4.</p>
            <p>This is the job #4. This is the job #4.</p>
            <p>This is the job #4. This is the job #4.</p>
            <p>This is the job #4. This is the job #4.</p>
        
            <br></br>
            <span className='categorybutton'>React</span><span className='categorybutton'>Django</span>

            <br></br>
            <br></br>
            <br></br>

            <Buttons1 />

            <br></br>
            
            <h1 className='mainlink'><Link to="/">Back to Main Page</Link></h1>

        </div>
    )
};

export default Jobdescrip4;