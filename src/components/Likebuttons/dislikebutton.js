import React, { useState } from "react";
import './likebuttons.css';

function Dislike1() {

    const [isToggleOn, setToggle] = useState(true);

    function handleClick(){
        setToggle(!isToggleOn);
    }


    return(

        <div>
        
            <button className="biggrey" onClick={handleClick}>
            {isToggleOn ? 'Decline This Job' : 'Job Declined'}
            </button>


        </div>
        
    )
}

export default Dislike1;