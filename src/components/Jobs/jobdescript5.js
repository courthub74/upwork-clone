import {React} from 'react';
import { Link } from "react-router-dom";
import './joblist.css';

function Jobdescrip5(){
    return(
        <div className='description'>

            <h4>This is the Description of Job #5</h4>
            <p>This is the job #5. This is the job #5.</p>
            <p>This is the job #5. This is the job #5.</p>
            <p>This is the job #5. This is the job #5.</p>
            <p>This is the job #5. This is the job #5.</p>
        
            <br></br>
            <button>Web Scraping</button><button>Python</button>

            <hr></hr>

            <h5 className='mainlink'><Link to="/">Back to Main Page</Link></h5>

        </div>
    )
};

export default Jobdescrip5;