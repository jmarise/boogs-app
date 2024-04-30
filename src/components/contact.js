import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('default_service', 'template_tv08q9t', form.current, {
                publicKey: 'Ms-x_WQeUoXhanFdH',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <div className="bg-boog-blue p-4">
                <h1><strong>Mix and Master by Patsy</strong></h1>
                <h2><strong>Our Mastering Services</strong></h2>
                <p>We offer professional mastering services tailored to your needs. Our experienced engineers use
                    industry-standard tools and techniques to enhance the clarity, depth, and dynamics of your music
                    tracks. Our services include:</p>
                <ul>
                    <li><strong>Audio Enhancement:</strong> We optimize the overall sound quality of your tracks, making
                        them sound vibrant and full.
                    </li>
                    <li><strong>Equalization (EQ) Adjustment:</strong> We fine-tune the frequency balance to ensure that
                        each element of your mix is well-balanced and clear.
                    </li>
                    <li><strong>Dynamic Range Compression:</strong> We control the dynamic range of your music, ensuring
                        that softer sounds are audible without sacrificing the impact of louder elements.
                    </li>
                    <li><strong>Stereo Imaging:</strong> We enhance the stereo width and depth of your tracks, creating
                        a more immersive listening experience.
                    </li>
                    <li><strong>Seamless Track Transitions:</strong> We ensure that transitions between tracks are
                        smooth and consistent, providing a cohesive listening experience for your audience.
                    </li>
                </ul>
                <h2>Why Choose Us?</h2>
                <p>When you choose our mastering services, you can expect:</p>
                <ul>
                    <li><strong>Personalized Attention:</strong> We work closely with you to understand your vision and
                        preferences, delivering results that exceed your expectations.
                    </li>
                    <li><strong>Quick Turnaround:</strong> We understand the importance of deadlines. Our efficient
                        workflow ensures that your mastered tracks are delivered on time.
                    </li>
                    <li><strong>Affordable Pricing:</strong> We offer competitive pricing options to accommodate various
                        budgets without compromising on quality.
                    </li>
                    <li><strong>Customer Satisfaction Guarantee:</strong> Your satisfaction is our top priority. We
                        strive to provide excellent service and support throughout the mastering process.
                    </li>
                </ul>
            </div>
            <div className={'bg-boog-black flex justify-center '}>
                <form ref={form} onSubmit={sendEmail}>
                    <table>
                        <tbody>
                        <tr>
                            <th><label>Name</label></th>
                            <td>
                                <input type="text" name="user_name" className="input"/>
                            </td>
                        </tr>
                        <tr>
                            <th><label>Email</label></th>
                            <td>
                                <input type="email" name="user_email"/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Message</label>
                            </th>
                            <td>
                                <textarea name="message"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="Send Email" className="submit-btn"/>
                </form>
            </div>
        </>
    );
};