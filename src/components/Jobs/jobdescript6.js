import {React} from 'react';
import { Link } from "react-router-dom";
import './joblist.css';

import Buttons1 from '../Likebuttons/bothbuttons';

function Jobdescrip6(){
    return(

        <div className='description'>
            <h4>This is the Description of Job #6</h4>
            <p>This is the job #6. This is the job #6.</p>
            <p>This is the job #6. This is the job #6.</p>
            <p>This is the job #6. This is the job #6.</p>
            <p>This is the job #6. This is the job #6.</p>
            
            <br></br>
            <span className='categorybutton'>JavaScript</span><span className='categorybutton'>API</span>
        
            <br></br>
            <br></br>
            <br></br>

            <Buttons1 />

            <br></br>
            
            <h1 className='mainlink'><Link to="/">Back to Main Page</Link></h1>
        </div>
        
    )
};

export default Jobdescrip6;