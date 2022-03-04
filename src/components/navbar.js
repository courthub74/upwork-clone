import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar(){
    return(

        // Navbar Container
        <div className='nav-container'>

            <h1 className="nav-logo">UpWork
                {/* Maybe a graphic logo here or not */}
            </h1>


                {/* Search Bar */}
                <input placeholder='search' typeof='text' className='search-bar'></input>


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