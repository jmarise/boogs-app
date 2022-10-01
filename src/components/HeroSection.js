import React from "react";
import {Button} from "./Button";
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return(
        <div className={'hero-container'}>
            <h1>AK EVENTS</h1>
            <p>PLAN YOUR NEXT PARTY</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
    buttonSize='btn--large'>Plan Here!</Button>
                <Button className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'>Learn More</Button>
            </div>

        </div>

    )

}
export default HeroSection