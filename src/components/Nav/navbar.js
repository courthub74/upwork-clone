import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar(){
    return(

        // Navbar Container
        <div className='nav-container'>

            <h2 className="nav-logo">UpWork Clone
                {/* Maybe a graphic logo here or not */}
            </h2>


                {/* Search Bar */}
                <input placeholder='search' typeof='text' className='search-bar'></input>


                {/* Main Page */}
                <li>
                    <Link to="/">Find Work</Link>
                </li>

                {/* My Jobs Page */}
                <li>
                    <Link to="/jobs">Jobs</Link>
                </li>

                {/* Reports Page */}
                <li>
                    <Link to="/reports">Reports</Link>
                </li>

                {/* Messages Page */}
                <li>
                    <Link to="/messages">Messages</Link>
                </li>

                {/* Test Link */}
                <li>
                    <Link to="/postjob">Post a Job</Link>
                </li>

                {/* Dropdown Test */}
                {/* <li>
                    <Dropdown>
                        <Dropdown.Toggle>
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/postjob">Find A Job</Dropdown.Item>
                            <Dropdown.Item href="/postjob">Post A Job</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li> */}
            
        </div>
    )
};

export default Navbar;