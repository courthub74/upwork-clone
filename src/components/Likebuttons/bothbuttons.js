import React from "react";
import './likebuttons.css';

import Like1 from "./likebutton";

import Dislike1 from "./dislikebutton";

function Buttons1() {
    return (
        <div className="bothbuttons">
            <Like1/>
            <Dislike1/>
        </div>
    )
}

export default Buttons1;
