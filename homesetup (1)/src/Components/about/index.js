import React from 'react'
import './index.css'
import Navbar from '../navbar'
import Footer from '../footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import team1 from './team1.jpg'
import team2 from './khushi.jpg'
import team3 from './parth.jpg'
import team4 from './vikash.jpg'

const About = () => {
    return (
        <>
        <div className="about-page">
            {/* Hero Section */}
        <Navbar/>
            <section className="hero-section">
                <div className="container">
                    <h1 className='heading-'>Welcome to Lung Cancer Detection</h1>
                    <p className="hero-text">
                    Our Mission
                    <br/>
                    The Lung Cancer Detection Project is committed to leveraging cutting-edge Deep learning technologies to revolutionize early detection of lung cancer. Our mission is to develop AI-driven solutions that improve diagnostic accuracy, enable early intervention, and ultimately save lives.
                    <br/>
                    <br/>
                    Cutting-edge Deep Learning Technology
                    <br/>
At the heart of our project lies advanced deep learning models trained on extensive datasets of medical images, including CT scans and X-rays. These models employ convolutional neural networks (CNNs) and other deep learning architectures to analyze intricate patterns and anomalies indicative of lung cancer with high accuracy.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <h2 style={{color: '#007bff'}}>Our Features</h2>
                    <div className="features">
                        <div className="feature">
                            <h3 style={{color: '#007bff'}} >Early Detection</h3>
                            <p style={{fontSize: '15px'}}>Detecting cancer in its initial stages significantly increases the chances of successful treatment and reduces the need for extensive interventions. We are dedicated to advancing technologies and methodologies that enable early detection of various types of cancer. Through our innovative approach and commitment to research, we strive to empower healthcare providers and patients alike with the tools and knowledge necessary to identify cancer early, when treatment is most effective. Join us in our mission to make early cancer detection a reality for all.</p>
                        </div>
                        <div className="feature">
                            <h3 style={{color: '#007bff'}}>Precision Diagnosis</h3>
                            <p style={{fontSize: '15px'}}>we prioritize precision diagnosis in lung cancer detection to ensure the highest standards of patient care. By integrating state-of-the-art imaging technologies, such as CT scans and PET-CT scans, with molecular diagnostics and biomarker analysis, our team of experienced oncologists and radiologists can accurately identify and characterize lung cancers at their earliest stages. This approach not only improves diagnostic accuracy but also enables personalized treatment strategies tailored to each patient's unique condition</p>
                        </div>
                        <div className="feature">
                            <h3 style={{color: '#007bff'}}>Expert Team</h3>
                            <p style={{fontSize: '15px'}}>Our expert team specializes in leading-edge techniques for lung cancer detection. Comprising skilled oncologists, radiologists, and support staff, we are dedicated to utilizing advanced imaging technologies and precise diagnostic methodologies. Our collaborative approach ensures thorough evaluations and accurate assessments, empowering us to deliver personalized treatment plans and compassionate care to each patient. With a commitment to excellence and innovation, we strive to achieve optimal outcomes in lung cancer detection and management, setting a new standard in healthcare excellence.



</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <h2 style={{color: '#007bff'}}>Meet Our Team</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img src={team1} alt="Team Member 1" />
                            <h3>Nancy Dutta</h3>
                            {/* <p>Oncologist</p> */}
                        </div>
                        <div className="team-member">
                            <img src={team3} alt="Team Member 2" />
                            <h3>Parth Kr. Singh</h3>
                            {/* <p>Radiologist</p> */}
                        </div>
                        <div className="team-member">
                            <img src={team2} alt="Team Member 2" />
                            <h3>Khushi Singh</h3>
                            {/* <p>Radiologist</p> */}
                        </div>
                        <div className="team-member">
                            <img src={team4} alt="Team Member 3" />
                            <h3>Vikash Kr. Yadav</h3>
                            {/* <p>Pathologist</p> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h2  style={{color: '#007bff'}}>What People Say</h2>
                    <div className="testimonials">
                        <div className="testimonial">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan
                                dapibus risus, quis ultricies felis sagittis ut."</p>
                            <p className="author">- John Doe</p>
                        </div>
                        <div className="testimonial">
                            <p>"Sed viverra ipsum sit amet arcu mattis, eget tincidunt urna sodales."</p>
                            <p className="author">- Jane Smith</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
        </>
    );
};


export default About
