import React from "react";
import '../../App.css'
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";

function Home (){
    return(
        <div div className="h-screen ">
        
            <HeroSection />
            <Cards />
            <Footer />
        </div>
    )
}
export default Home