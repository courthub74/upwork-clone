import {React} from 'react';
import { Link } from "react-router-dom";
import './joblist.css';

import Buttons1 from '../Likebuttons/bothbuttons';

function Jobdescrip5(){
    return(
        <div className='description joblink'>

            <h4>Deets for Job #5</h4>
            <p>This is the Description of Job #5
                It will be a Full-Stack job
                in need of proficiency in 
                Web Scraping and Python <br></br>
                <h4>Thing You Will Need To Do</h4>
                You will need to be dedicated for 
                30 hours per week and report to 
                a senior dev on deliverables.<br></br>

                <h4>What Company Is Creating</h4>
                Our company is creating an app that creates
                an interaction in Bubble that takes an individual <br></br>
                from a general search page to a dynamically generated 
                landing page once a button is clicked.<br></br>
            </p>
        
            <h4>Deliverables for Job#5</h4>
            <i>Deliverables shall be reported weekly</i>
            <p>Deliverable #1</p>
            <p>Deliverable #2</p>
            <p>Deliverable #3</p>
            <p>Deliverable #4</p>
            <p>Deliverable #5</p>
        
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