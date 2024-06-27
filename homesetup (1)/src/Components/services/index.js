import React from 'react';
import './index.css';
import heartbeatIcon from './section-img.png'; // Update with the correct path

const HealthServices = () => {
  return (
    <div className="health-services">
      <h2>We Are Always Ready To Help You & Your Family</h2>
      <img src={heartbeatIcon} alt="Heartbeat Icon" className="heartbeat-icon" />
      <p className="intro-text">
      Start detection and take the first step towards better lung health.
      </p>
      <div className="services">
        <div className="service">
          <div className="icon emergency-help"></div>
          <h3>Comprehensive Screening</h3>
          <p>Our advanced screening technology ensures early and accurate detection of lung cancer.</p>
        </div>
        <div className="service">
          <div className="icon enriched-pharmacy"></div>
          <h3>Symptom Checker</h3>
          <p>An interactive tool to help users identify symptoms that may indicate lung cancer.</p>
        </div>
        <div className="service">
          <div className="icon medical-treatment"></div>
          <h3>Diagnostic Services</h3>
          <p>Information about different diagnostic tests (e.g., CT scans, biopsies, sputum cytology).</p>
        </div>
      </div>
    </div>
  );
};

export default HealthServices;
