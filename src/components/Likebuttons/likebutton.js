import React, { useState } from "react";
import './likebuttons.css';

function Like1() {

    const [isToggleOn, setToggle] = useState(true);

    function handleClick(){
        setToggle(!isToggleOn);
    }


    return(

        <div>
        
            <button className="biggreen" onClick={handleClick}>
            {isToggleOn ? 'Accept This Job' : 'Job Accepted'}
            </button>


        </div>
        
    )
}

export default Like1;