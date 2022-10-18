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
        <><nav className=" sticky h-24 bg-boog-black-v2 text-white top-0 shadow-md rounded-b">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                <i class="fa-regular fa-computer-speaker"></i>
                </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/home" className='text-2xl'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="https://solo.to/capitalboogs" className='nav-links'>
                            About Us
                        </Link>
                    </li>
                </ul>
                {button && <Button className='bg-slate-500' buttonStyle='btn--outline'>Contact Us</Button>}



            </div>
        </nav> </>
    )


}

export default Navbar;