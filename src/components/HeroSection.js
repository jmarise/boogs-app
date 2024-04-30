import React from "react";
import './HeroSection.css';
import '../App.css';
import Cards from "./Cards";

function HeroSection() {
    return(
        <>
        <div className={'bg-boog-black flex justify-center items-center'}>
            <div className='youtube-video'>
                {/* YouTube video embed */}
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/pvJj4Z5k89w?autoplay=1&mute=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
<Cards/>
        </div>
        </div>
            </>
    );
}

export default HeroSection;
