import React from "react";
import './footer.css'
/*
function Footer(){
    return(
        <>
        <footer className=' rounded-t-sm bg-boog-black shadow-2xl border-t-4 border-boog-black-v2  text-white sticky w-full h-auto'>
        <section className="social-media w-12">
                <div className="social-media-wrap">
                     <div className="footer-logo">
                         <Link className="social-logo">
                             BOOGIN LTD <i className="fab-fa-typo3"/>
                         </Link>
                     </div>
                    <small className={"Website-rights"}>CAPITAL BOOGS &copy; 2021</small>
                    <div className='social-icons'>
                    <Link className="social-icon-link facebook w-12" to={'/'} target={"_blank"} aria-label={'Facebook'}>
                            <i className="fab fa-facebook-f"/>

                        </Link>
                        <Link className="social-icon-link instagram" to={'/'} target={"_blank"} aria-label={'Instagram'}>
                            <i className="fab fa-instagram"/>

                        </Link>
                        <Link className="social-icon-link twitter" to={'/'} target={"_blank"} aria-label={'Twitter'}>
                            <i className="fab fa-twitter"/>

                        </Link>
                        <Link className="social-icon-link linkedin" onClick to={'/'} target={"_blank"} aria-label={'LinkedIn'}>
                            <i className="fab fa-linkedin"/>

                        </Link>

                    </div>
                </div>
            </section>
            <section className="footer-subscription">
                <p className='footer-subscription-heading'>
                  Join the Newsletter!!
                </p>
        
                <div className="input-areas">
                    <form>
                        <input type="email" name={"email"} placeholder={"Your Email"} className="footer-input"/>
                        <Button className='bg-boog-blue'>Subscribe</Button>
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
            
        </footer>
        </>
    )
}
export default Footer
*/
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
				<h1 style={{
					color: "green",
				}}>
					About Us
				</h1>

		</Row>
	</Container>
	</Box>
);
};
export default Footer;
