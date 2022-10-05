import React from "react";
import {Button} from "./Button";
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return(
        <div className={'hero-container'}>
            <h1>BOOGIN LTD</h1>
            <p>GET READY TO BOOG</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
    buttonSize='btn--large'>Recording Sessions</Button>
                <Button className='btns' buttonStyle='btn--outline'
    buttonSize='btn--large'>Capital Boogs Music</Button>
                <Button className='btns' buttonStyle='btn--outline'
    buttonSize='btn--large'>Mastering Sessions</Button>
            </div>

        </div>

    )

}
export default HeroSection