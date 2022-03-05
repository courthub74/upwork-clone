import React from 'react';
import { Link } from "react-router-dom";
import './footer.css';

function Footer(){
    return(

        // Navbar Container
        <div className='foot-container'>


                {/* Main Page */}
                <li>
                    <Link to="/about">About Us</Link>
                </li>

                {/* My Jobs Page */}
                <li>
                    <Link to="/community">Community</Link>
                </li>

                {/* Reports Page */}
                <li>
                    <Link to="/feedback">Feedback</Link>
                </li>

                {/* Messages Page */}
                <li>
                    <Link to="/help">Help</Link>
                </li>

                <br></br>
                <p>© 2015 - 2022 Upwork® clone CourDevelops.</p>
      
            
        </div>
    )
};

export default Footer;