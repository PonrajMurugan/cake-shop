import React from 'react';
import './about.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


const About = () => {
    return (
        <div>
         <section className="footer">
                <div className="container">
                <div className="footer-column">
                    <div className="footer-row1">
                    <h1>SMALL CAKES</h1>
                    <p>A108 Adam Street<br />Pin : 627 415</p>
                    <p>Phone : +91 8681857753<br />Email : ponraj@gmail.com</p>
                    <div className="footer-icon">
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-skype"></i>
                        <i className="bi bi-linkedin"></i>
                    </div>
                    </div>
                    <div className="footer-row2">
                    <h3>Useful Links</h3>
                    <p><i className="bi bi-chevron-right"></i> Home</p>
                    <p><i className="bi bi-chevron-right"></i> About us</p>
                    <p><i className="bi bi-chevron-right"></i> Services</p>
                    <p><i className="bi bi-chevron-right"></i> Terms of service</p>
                    <p><i className="bi bi-chevron-right"></i> Privacy policy</p>
                    </div>
                    <div className="footer-row3">
                    <h3>Our Service</h3>
                    <p><i className="bi bi-chevron-right"></i> Fresh Cakes</p>
                    <p><i className="bi bi-chevron-right"></i> Ice Cakes</p>
                    <p><i className="bi bi-chevron-right"></i> Fruit Cakes</p>
                    <p><i className="bi bi-chevron-right"></i> Cup Cakes</p>
                    <p><i className="bi bi-chevron-right"></i> Desert Cakes</p>
                    </div>
                    <div className="footer-row4">
                    <h3>Our Pages</h3>
                    <p>Subscribe To Get More Updates About Us</p>
                    <div className="gop-button1">
                        <input type="text" className="foott" placeholder="Your email" />
                        <button type="submit" className="foots">Subscribe</button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="footer-second">
                <div className="">
                <div className="second-content">
                    <p>© Copyright <span>Cakes</span>. All Rights Reserved</p>
                    <p>Designed by <a href="#">Small Cakes</a></p>
                </div>
                </div>
            </section>
            
        </div>
    );
};

export default About;