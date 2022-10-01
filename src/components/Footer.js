import React from "react";
import {Button} from "./Button";
import './footer.css'
import {Link} from "react-router-dom";

function Footer(){
    return(
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className='footer-subscription-heading'>
                  Join the Newsletter!!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at anytime.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name={"email"} placeholder={"Your Email"} className="footer-input"/>
                        <Button buttonStyle={'btn-outline'}>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to={'/contactus'}>Contact Us</Link>
                        <Link to={'/'}>Testimonials</Link>
                        <Link to={'/'}>Careers</Link>
                        <Link to={'/'}>Investors</Link>
                        <Link to={'/'}>Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                     <div className="footer-logo">
                         <Link className="social-logo">
                             Ak Events <i className="fab-fa-typo3"/>
                         </Link>
                     </div>
                    <small className={"Website-rights"}>AK Events &copy; 2021</small>
                    <div className='social-icons'>
                        <Link className="social-icon-link facebook" to={'/'} target={"_blank"} aria-label={'Facebook'}>
                            <i className="fab fa-facebook-f"/>

                        </Link>
                        <Link className="social-icon-link instagram" to={'/'} target={"_blank"} aria-label={'Instagram'}>
                            <i className="fab fa-instagram"/>

                        </Link>
                        <Link className="social-icon-link twitter" to={'/'} target={"_blank"} aria-label={'Twitter'}>
                            <i className="fab fa-twitter"/>

                        </Link>
                        <Link className="social-icon-link linkedin" to={'/'} target={"_blank"} aria-label={'LinkedIn'}>
                            <i className="fab fa-linkedin"/>

                        </Link>

                    </div>
                </div>
            </section>
        </div>
    )
}
export default Footer