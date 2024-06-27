// ServiceCards.js
import React from 'react';
import './index.css';
import heartbeatIcon from './section-img.png';

const ServiceCards = () => {
  return (
    <div className="service-container">
      <h1>We Provide You The Best Treatment In Resonable Price</h1>
      <img src={heartbeatIcon} alt="Heartbeat Icon" className="heartbeat-icon" />
      <p className="description">Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet, pretium</p>
      <div className="cards">
        <div className="card">
          <div className="icon">✂️</div>
          <h2>Lung Cancer Screening</h2>
          <p className="price">$199 / Per Visit</p>
          <ul>
            <li>Lorem Ipsum Dolor Sit</li>
            <li>Cubitur Sollicitudin Fentum</li>
            <li>Nullam Interdum Enim</li>
            <li>Donec Ultricies Metus</li>
            <li>Pellentesque Eget Nibh</li>
          </ul>
          <button>Book Now</button>
        </div>
        <div className="card">
          <div className="icon">🦷</div>
          <h2>Lung Function Tests</h2>
          <p className="price">$299 / Per Visit</p>
          <ul>
            <li>Lorem Ipsum Dolor Sit</li>
            <li>Cubitur Sollicitudin Fentum</li>
            <li>Nullam Interdum Enim</li>
            <li>Donec Ultricies Metus</li>
            <li>Pellentesque Eget Nibh</li>
          </ul>
          <button>Book Now</button>
        </div>
        <div className="card">
          <div className="icon">❤️</div>
          <h2>Advanced Diagnostics</h2>
          <p className="price">$399 / Per Visit</p>
          <ul>
            <li>Lorem Ipsum Dolor Sit</li>
            <li>Cubitur Sollicitudin Fentum</li>
            <li>Nullam Interdum Enim</li>
            <li>Donec Ultricies Metus</li>
            <li>Pellentesque Eget Nibh</li>
          </ul>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
