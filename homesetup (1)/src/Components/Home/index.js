import React from 'react';
import './index.css';
import img from './stethoscope.jpg';
import Navbar from '../navbar';
import Services from '../services';
import Pricing from '../pricing-section';
import Footer from '../footer';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../store/authSlice";

const HomePage = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authSlice);
   console.log("user",user); 

    const fileUpload=()=>{
        if (!user) {
            alert("You need to login first.");
            navigate("/login");
        } else {
            navigate("/fupload");
        }
          }
    return (
        <>
            <Navbar />
            <div className="homepage">
                <div className="hero-section">
                    <div className="hero-content">
                        <h1>We Provide <span className="highlight">Diagnostic</span> Services That You Can <span className="highlight">Trust!</span></h1>
                        <p><i>Early Detection, Lifesaving Protection: Empowering You with Advanced Lung Cancer Screening</i></p>
                        <div className="hero-buttons">
                            <button className="button-primary" onClick={fileUpload}>
                                <span>Start Detection</span>
                            </button>
                            <button className="button-secondary">
                                <span>Learn More</span>
                            </button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={img} alt="Doctor" />
                    </div>
                </div>
                <div className="cards-section">
                    <div className="card" id="card-1">
                        {/* <h3>Lorem Amet</h3> */}
                        <h2>Upload Your Scans</h2>
                        <p>Easily upload your lung scans through our secure platform. Our advanced AI technology analyzes your images for early detection of lung cancer.</p>
                        <a href="#">
                            Upload Now <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className="card" id="card-1">
                        {/* <h3>Fusce Porttitor</h3> */}
                        <h2>Fast & Accurate Results</h2>
                        <p>Receive fast and accurate diagnostic results directly to your account. Our system ensures you get reliable insights to take the next steps in your health journey.</p>
                        <a href="#">
                            Get Results <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className="card" id="card-1">
                        {/* <h3>Donec luctus</h3> */}
                        <h2>24/7 Online Access</h2>
                        <p>Access our services anytime, anywhere. Our platform is available 24/7, providing you with the convenience to upload scans and receive results at your own pace.</p>
                        <a href="#">
                            Learn More <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <Services />
            <Pricing />
            <Footer />
        </>
    );
};

export default HomePage;
