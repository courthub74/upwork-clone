import {React} from 'react';
import { Link } from "react-router-dom";
import './joblist.css';

import Buttons1 from '../Likebuttons/bothbuttons';

function Jobdescrip4(){
    return(
        <div className='description joblink'>

            <h4>Deets for Job #4</h4>
            <p>This is the Description of Job #4
                It will be a Full-Stack job
                in need of proficiency in 
                React and Django <br></br>
                You will need to be dedicated for 
                30 hours per week and report to 
                a senior dev on deliverables.<br></br>
                Our company is creating an app that creates
                an interaction in Bubble that takes an individual <br></br>
                from a general search page to a dynamically generated 
                landing page once a button is clicked.<br></br>
                Take a look at the Deliverables below. 
                If accepted you will have to answer a few questions before you start.
            </p>
            <br></br>
            <h4>Deliverables for Job#4</h4>
            <i>Deliverables shall be reported weekly</i>
            <p>Deliverable #1</p>
            <p>Deliverable #2</p>
            <p>Deliverable #3</p>
            <p>Deliverable #4</p>
            <p>Deliverable #5</p>
        
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