import {React} from 'react';
import { Link } from "react-router-dom";
import './joblist.css';

import Buttons1 from '../Likebuttons/bothbuttons';

function Jobdescrip3(){
    return(
        <div className='description'>

            <h4>This is the Description of Job #3</h4>
            <p>This is the job #3. This is the job #3.</p>
            <p>This is the job #3. This is the job #3.</p>
            <p>This is the job #3. This is the job #3.</p>
            <p>This is the job #3. This is the job #3.</p>
            <br></br>
            <span className='categorybutton'>Ruby</span><span className='categorybutton'>Rails</span>

            <br></br>
            <br></br>
            <br></br>

            <Buttons1 />

            <br></br>

            <h1 className='mainlink'><Link to="/">Back to Main Page</Link></h1>

        </div>
    )
};

export default Jobdescrip3;