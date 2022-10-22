import React from "react";
import '../../App.css'
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";

function Home (){
    return(
        <>
       <div className="h-full bg-boog-black "> 
            <HeroSection />
            <Cards />
        </div>
          </>  
    )
}
export default Home