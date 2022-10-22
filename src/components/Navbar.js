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
        <><div className=" sticky w-full h-16 bg-boog-black-v2 text-white top-0 shadow-lg shadow-black rounded-b">
            <div className="flex  items-center w-full">
                <Link to="/" className="navbar-logo">
                <i class="fa-regular fa-computer-speaker"></i>
                </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='text-2xl'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="https://solo.to/capitalboogs" className='nav-links'>
                            About Us
                        </Link>
                    </li>
                </ul>
                {button && <Button  >Contact Us</Button>}



            </div>
            <div className=' fixed inset-y-0 right-0 h-16 w-60 border-l-2 border-boog-black text-boog-blue flex justify-evenly items-center'>
            
                        <Link className="social-icon-link instagram" to={'/'} target={"_blank"} aria-label={'Instagram'}>
                            <i className="fab fa-instagram fa-xl"/>

                        </Link>
                        <Link className="social-icon-link twitter" to={'/'} target={"_blank"} aria-label={'Twitter'}>
                            <i className="fab fa-twitter fa-xl"/>

                        </Link>
                        <Link className="social-icon-link spotify" to={'/'} target={"_blank"} aria-label={'Twitter'}>
                            <i className="fab fa-spotify fa-xl"/>

                        </Link>
                        <Link className="social-icon-link apple" to={'/'} target={"_blank"} aria-label={'Twitter'}>
                            <i className="fab fa-apple fa-xl"/>

                        </Link>
                        <Link className="social-icon-link sound-cloud" to={'/'} target={"_blank"} aria-label={'Twitter'}>
                            <i className="fab fa-soundcloud fa-xl"/>

                        </Link>
            </div>
        </div> </>
    )


}

export default Navbar;