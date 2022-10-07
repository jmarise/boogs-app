import React from "react";
import {Button} from "./Button";
import './HeroSection.css';
import '../App.css';
import league_video from "../images/LEAGUE-6oPUq74L6l4.mp4";

function HeroSection() {
    return(

        
        <div className={' h-screen'}>
            
            
            <div className=' w-full h-full  bg-black'>

               <video className='h-full w-full' autoPlay muted loop >
                <source src={league_video} type="video/mp4"/>
                </video> 
            </div>

        </div>

    )

}
export default HeroSection