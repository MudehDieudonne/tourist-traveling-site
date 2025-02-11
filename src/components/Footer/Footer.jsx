import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are a tourism company dedicated to providing the best travel experiences.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/destinations">Destinations</a></li>
                        <li><a href="/tours">Tours</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: info@tourism.com</p>
                    <p>Phone: +239 223 873 112</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com"><img src="../images/socials/icons8-facebook-24.png" alt="Facebook" /></a>
                        <a href="https://twitter.com"><img src="../images/socials/icons8-twitter-24.png" alt="Twitter" /></a>
                        <a href="https://linkedin.com"><img src="../images/socials/icons8-linkedin-24.png" alt="LinkedIn" /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Tourism Site. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer