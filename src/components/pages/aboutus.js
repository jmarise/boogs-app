// AboutUs.js
import React from "react";
import '../../App.css';
import '../aboutus.css';
import founder from '/Users/rahulsaikilambi/WebstormProjects/booginltd/src/images/IMG_5700.jpg';
import founder2 from '/Users/rahulsaikilambi/WebstormProjects/booginltd/src/images/newking2.jpg';
function AboutUs() {
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <h1>Boog Team</h1>
            <div className="image-container">
                <img src={founder} alt="Canny" className="canny-image"/>
                <p>Canny</p>
            </div>
            <div className="image-container">
                <img src={founder2} alt="King Boog" className="king-boog-image"/>
                <p>King Boog</p>
            </div>
            <a href="https://www.solo.to/capitalboogs">Visit our Solo.to page</a>
        </div>
    );
}
export default AboutUs;

