import React from 'react';
import './index.css';
import Navbar from '../navbar';
import Footer from '../footer';

const ContactForm = () => {
  return (
    <div className='total-container'>
    <Navbar/>
    <div className="contact-container">
      <div className="top-section">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509436!2d144.95373631584427!3d-37.81627974202105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f799fb%3A0xf4c8f9e4c0b48c0!2sEnvato!5e0!3m2!1sen!2sau!4v1642119445821!5m2!1sen!2sau"
            allowFullScreen=""
            loading="lazy"
            title="Location"
          ></iframe>
        </div>
        <div className="contact-form">
          <h2>Contact With Us</h2>
          <p>If you have any questions please feel free to contact with us.</p>
          <form>
            <div className="form-row">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-row">
              <input type="text" name="phone" placeholder="Phone" required />
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
            <div className="newsletter">
              <input type="checkbox" id="newsletter" name="newsletter" />
              <label htmlFor="newsletter">Do you want to subscribe our Newsletter?</label>
            </div>
          </form>
        </div>
      </div>
      <div className="info-cards">
        <div className="card">
          <i className="fa fa-phone"></i>
          <div>
            <p>+ (000) 1234 56789</p>
            <p>info@company.com</p>
          </div>
        </div>
        <div className="card">
          <i className="fa fa-map-marker"></i>
          <div>
            <p>2 Fire Brigade Road</p>
            <p>Chittagong, Lakshmipur</p>
          </div>
        </div>
        <div className="card">
          <i className="fa fa-clock-o"></i> {/* Add clock icon */}
          <div>
            <p>Mon - Sat: 8am - 5pm</p>
            <p>Sunday Closed</p>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactForm;
