import {React} from 'react';
import { Link } from "react-router-dom";
import './joblist.css';


import Buttons1 from '../Likebuttons/bothbuttons';

function Jobdescrip1(){
    return(

        <div className='description joblink'>
            <h4>Deets for Job #1</h4>
            <p>This is the Description of Job #1
                It will be a Full-Stack job
                in need of proficiency in 
                JavaScript and NodeJS <br></br>
                You will need to be dedicated for 
                30 hours per week and report to 
                a senior dev on deliverables.<br></br>
                Our company is creating an app that creates
                an interaction in Bubble that takes an individual <br></br>
                from a general search page to a dynamically generated 
                landing page once a button is clicked.
            </p>
            <br></br>
            <h4>Deliverables for Job#1</h4>
            <i>Deliverables shall be reported weekly</i>
            <p>Deliverable #1</p>
            <p>Deliverable #2</p>
            <p>Deliverable #3</p>
            <p>Deliverable #4</p>
            <p>Deliverable #5</p>
            
            <br></br>
            <span className='categorybutton'>JavaScript</span><span className='categorybutton'>NodeJS</span>

            <br></br>
            <br></br>
            <br></br>

            <Buttons1 />

            <br></br>
        
            <h1 className='mainlink'><Link to="/">Back to Main Page</Link></h1>
        </div>
        
    )
};

export default Jobdescrip1;