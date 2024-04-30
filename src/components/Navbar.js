import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import './Navbar.css';
import logoImage from "../images/boogin ltd logo-02.jpg"; // Import your logo image

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <img src={logoImage} alt="Logo" className="logo-image"/>
                </div>
                <div className="menu-container">
                    {/* Add your menu items here */}
                    <Link to="/aboutus" className="menu-item">About</Link>
                    <Link to="/contact" className="menu-item">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;