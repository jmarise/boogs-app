import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import '../App.css';
import {Button} from "./Button";
import './Navbar.css';

function Navbar() {

    const [button, setButton] = useState(true);
    const [click, setClick]= useState(false);
    const handleClick = () => setClick(!click);
    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else {
            setButton(true);
        }
    };

    useEffect(() => {showButton()}, [] );

    window.addEventListener('resize', showButton);

    return (
        <><nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <i className="fab fa-typo3"/>
                </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/home" className='nav-links'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/aboutus" className='nav-links'>
                            About Us
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}



            </div>
        </nav> </>
    )


}

export default Navbar;