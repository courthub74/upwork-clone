import {React} from 'react';
import '../App.css';

function Post(){
    return(
        <div class='form-container'>
            <h4>Post Your Job</h4>
            <form class="register-form">
                {/* Title */}
                <input placeholder='Job Title:'></input>
                {/* Job Description */}
                <input placeholder='Job Description:'></input>
                {/* Job Deets */}
                <input placeholder='Job Deets:'></input>
                {/* Expertise */}
                <input placeholder='Expertise:'></input>
                {/* Job Visibility */}
                <input placeholder='Job Visibility:'></input>
                {/* Talent Preferences */}
                <input placeholder='Talent Preferences:'></input>
            </form>

        </div>
    )
};

export default Post;