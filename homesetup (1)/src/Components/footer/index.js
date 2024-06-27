// Footer.js
import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-google-plus-g"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-vimeo-v"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <div className="quick-links-rows">
            <ul>
              <li><i className="fas fa-chevron-right"></i><a href="#">Home</a></li>
              <li><i className="fas fa-chevron-right"></i><a href="#">About Us</a></li>
              <li><i className="fas fa-chevron-right"></i><a href="#">Services</a></li>
              <li><i className="fas fa-chevron-right"></i><a href="#">Consulting</a></li>
              <li><i className="fas fa-chevron-right"></i><a href="#">FAQ</a></li>
            </ul>
            <ul>
              <li><i className="fas fa-chevron-right"></i><a href="#">Our Cases</a></li>
              <li><i className="fas fa-chevron-right"></i><a href="#">Other Links</a></li>
              <li><i className="fas fa-chevron-right"></i><a href="#">Finance</a></li>
              <li><i className="fas fa-chevron-right"></i><a href="#">Testimonials</a></li>
              <li><i className="fas fa-chevron-right"></i><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-section open-hours">
          <h3>Open Hours</h3>
          <div className="open-hours-rows">
            <ul>
              <li>Monday - Friday: <span>8.00 - 20.00</span></li>
              <li>Saturday: <span>9.00 - 18.30</span></li>
              <li>Monday - Thursday: <span>9.00 - 15.00</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
          <form>
            <input type="email" placeholder="Email Address" />
            <button type="submit"><i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </footer>
    <div className="footer-bottom">
    <p>© Copyright 2024 | All Rights Reserved by <a href="https://wpthemesgrid.com">LungsCancerDetection.com</a></p>
  </div>
  </>
  );
};

export default Footer;
