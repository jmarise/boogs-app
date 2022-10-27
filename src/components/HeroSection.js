import React from "react";
import {Button} from "./Button";
import './HeroSection.css';
import '../App.css';
import league_video from "../images/LEAGUE-6oPUq74L6l4.mp4";

function HeroSection() {
    return(

        
        <div className={'bg-boog-black flex justify-center items-center h-1/2'}>
            
            
            <div className=' '>

               <video className=' w-full aspect-video border-black border-2 rounded-sm shadow shadow-boog-blue' autoPlay muted loop >
                <source src={league_video} type="video/mp4"/>
                </video> 
            </div>

        </div>

    )

}
export default HeroSection