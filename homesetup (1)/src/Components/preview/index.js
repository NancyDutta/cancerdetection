import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDollarSign, faHeartCircleBolt, faMale, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../navbar';
import Footer from '../footer';
import detection from './detection.jpg';
import upload from './image/uploads.jpg';

const Fileupload = () => {
  const [filename, setFilename] = useState("No file Uploaded");
  const [val, setVal] = useState("Upload image to predict");
  const [data, setData] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = () => {
    setLoading(true);
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching initial data:', error);
        setLoading(false);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/upload", formData);
      console.log(response.data.message);
      setVal(response.data.message);
      setLoading(false);
      // alert("File uploaded successfully");
    } catch (error) {
      console.error('Error uploading file:', error);
      setLoading(false);
      alert("Failed to upload file. Please try again.");
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setFilename(file.name);
    }
  };

  const handleImageClick = () => {
    document.getElementById('file-input').click();
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <div className='fileupload-container'>
        <div className="file-section">
          <div className="file-content">
            <h1>Welcome to Our Lung Cancer Detection Solution</h1>
            <p><i>Revolutionize your healthcare with our advanced CT scan analysis for early lung cancer detection.</i></p>
            <div className="file-buttons">
              <button className="button-primary " onClick={() => scrollToSection('file-upload-container')}>
                <span>Get Started</span>
              </button>
              <button className="button-secondary" onClick={() => scrollToSection('file-work')}>
                <span>Learn More</span>
              </button>
            </div>
          </div>
          <div className="file-image">
            <img src={detection} alt="Doctor" />
          </div>
        </div>
        <div className='file-work' id='file-work'>
          <div className='heading'>
            <h1>How Lung Cancer Detection Works</h1>
          </div>
          <div className='arrow-direction'>
            <div className='box'>
              <div className="arrow-box">
                <span className="ribbon">1</span>
              </div>
              <h3>CT Scan</h3>
              <p className='box-text'>Our system analysis high-solution CT scans to detect early-stage lung cancer.</p>
            </div>
            <div className='box'>
              <div className="arrow-box">
                <span className="ribbon">2</span>
              </div>
              <h3>CNN Model</h3>
              <p className='box-text'>Our proprietary CNN model uses deep learning to identify suspicious nodules and lesions.</p>
            </div>
            <div className='box'>
              <div className="arrow-box">
                <span className="ribbon">3</span>
              </div>
              <h3>Rapid Results</h3>
              <p className='box-text'>Patients receive their personalized reports within 24 hours, allowing for prompt follow-up care.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='heading' id='file-upload-container'>
        <h1>Upload Image For Detection</h1>
      </div>
      <div className='file-upload-container' >
        <form onSubmit={handleSubmit}>
          <div className='file-upload-box'>
            <div className='img-div' onClick={handleImageClick}>
              {imagePreview ? (
                <img src={imagePreview} className='file-upload-img' alt='Preview' />
              ) : (
                <img src={upload} className='file-upload-img' alt='Upload' />
              )}
            </div>
            <div className='input-container-file'>
              <input id='file-input' className='input-file' type='file' name='file' onChange={handleFileUpload} accept='image/*' />
              <button className='file-btn' type='submit'>PREDICT</button>
            </div>
          </div>
        </form>
      </div>

      <div className='heading result-box'>
        <span className='result'>Result : </span>
        <span style={{ fontWeight: 'bolder', color: '#007bff', marginTop: '5px' }}>
          {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : val}
        </span>
      </div>

      <div className="service-container">
        <div className='heading'><h1>The Benefits Of Early Lung Cancer Detection</h1></div>
        <div className="card-file-section">
          <div className="card-file">
            <div className="icons"><FontAwesomeIcon icon={faHeartCircleBolt} style={{ color: '#007bff', height: '50px' }} /></div>
            <h3 className='h3-heading'>Increased Survival Rates</h3>
            <span className='file-sentence sentenc'>Early detection can improve 5-year survival by up to 20%.</span>
          </div>
          <div className="card-file">
            <div className="icons"><FontAwesomeIcon icon={faDollarSign} style={{ color: '#007bff', height: '50px' }} /></div>
            <h3 className='h3-heading'>Lower Treatment Costs</h3>
            <span className='file-sentence'>Catching cancer early leads to less invasive and more affordable treatments.</span>
          </div>
          <div className="card-file">
            <div className="icons"><FontAwesomeIcon icon={faClock} style={{ color: '#007bff', height: '50px' }} /></div>
            <h3 className='h3-heading'>Faster Treatment</h3>
            <span className='file-sentence sentence'>Prompt diagnosis allows for immediate access to life-saving therapies.</span>
          </div>
          <div className="card-file">
            <div className="icons"><FontAwesomeIcon icon={faMale} style={{ color: '#007bff', height: '50px' }} /></div>
            <h3 className='h3-heading'>Peace of Mind</h3>
            <span className='file-sentence sentence'>Regular screening provides reassurance and helps put your mind at ease.</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Fileupload;
