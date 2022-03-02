import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar(){
    return(

        // Navbar Container
        <div className='nav-container'>


                {/* Main Page */}
                <span>
                    <Link to="/">Find Work</Link>
                </span>

                {/* My Jobs Page */}
                <>
                    <Link to="/jobs">My Jobs</Link>
                </>

                {/* Reports Page */}
                <>
                    <Link to="/reports">Reports</Link>
                </>

                {/* Messages Page */}
                <>
                    <Link to="/messages">Messages</Link>
                </>
            
        </div>
    )
};

export default Navbar;