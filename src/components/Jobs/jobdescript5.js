import {React} from 'react';
import { Link } from "react-router-dom";
import './joblist.css';

import Buttons1 from '../Likebuttons/bothbuttons';

function Jobdescrip5(){
    return(
        <div className='description'>

            <h4>This is the Description of Job #5</h4>
            <p>This is the job #5. This is the job #5.</p>
            <p>This is the job #5. This is the job #5.</p>
            <p>This is the job #5. This is the job #5.</p>
            <p>This is the job #5. This is the job #5.</p>
        
            <br></br>
            <span className='categorybutton'>Web Scraping</span><span className='categorybutton'>Python</span>

            <br></br>
            <br></br>
            <br></br>

            <Buttons1 />

            <br></br>
            
            <h1 className='mainlink'><Link to="/">Back to Main Page</Link></h1>

        </div>
    )
};

export default Jobdescrip5;