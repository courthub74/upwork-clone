import React from 'react';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>

            {/* Main Page */}
            <li>
                <Link to="/">Find Work</Link>
            </li>

            {/* My Jobs Page */}
            <li>
                <Link to="/jobs">My Jobs</Link>
            </li>

            {/* Reports Page */}
            <li>
                <Link to="/reports">Reports</Link>
            </li>

            {/* Messages Page */}
            <li>
                <Link to="/messages">Messages</Link>
            </li>

        </div>
    )
};

export default Navbar;