import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import favicon from './favicon.png';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setAuth } from '../../store/authSlice';
import LoadingSpinner from '../loader';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  function validateEmail(email) {
    if (!email || email.trim() === "") {
      return { message: "Email is required." };
    }
    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { message: "Invalid email format."};
    }
    return null;
  }

  function validatePassword(password) {
    if (!password || password.trim() === "") {
      return { message: "Password is required."};
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z])([^\s]){6,20}$/;
    if (!passwordRegex.test(password)) {
      return {
        message:
          "Password must be between 6 and 20 characters, and contain at least one uppercase letter, lowercase letter, number, and special character."
      };
    }
    return null;
  }


  const validateForm = () => {
    let isValid = true;

    // Clear previous error messages
    clearErrors();

    let result = null;

    // validating email
    result = validateEmail(email);
    if (result !== null) {
      isValid = false;
      setEmailError(result.message);
    }

    // validating the password
    result = validatePassword(password);
    if (result !== null) {
      isValid = false;
      setPasswordError(result.message);
    }

    return isValid;
  };
 

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const res = await axios.post('http://localhost:8000/api/auth/login', formData);
  
      if (res.status === 200) {
        const { data } = res;
        console.log("data", data);
        dispatch(setAuth({ user: data.user }));
        localStorage.setItem('token', res.data.token);
        setLoading(true);
        // Simulate loading delay for demonstration purposes
        setTimeout(() => {
          navigate('/');
        }, 2000);  // Redirect to homepage after successful login
        
      }
    } catch (err) {
      if (err.response && err.response.data) {
        console.error(err.response.data);
        setErrorMessage(err.response.data.message || "Invalid email or password");
      } else {
        console.error(err.message);
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  
  };

  return (
    <div className="signin-container">
      <img src={favicon} alt="Profile Avatar" className="avatar" />
      <h2 className="sign-in-heading">Login</h2>
      {loading ? (<LoadingSpinner/>): 
      (<form onSubmit={onSubmit} noValidate>
       <div style={{ fontSize: "12px", color: "red" }}>
            {errorMessage}
          </div>
        <div className="input-group">
          <div className="social-icons">
            <FaEnvelope /> {/* Email icon */}
          </div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div id="emailError" className="error_sign_up">
              {emailError}
            </div>
        <div className="input-group">
          <div className="social-icons">
            <FaLock /> {/* Password icon */}
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <div id="passwordError" className="error_sign_up">
              {passwordError}
            </div>
        <div className="checkbox-group">
          <input type="checkbox" id="save-password" />
          <label htmlFor="save-password">Remember me</label>
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>)}
      <div className="extra-links">
        <Link to="/register" className="account-text">
          Don't have an account? <span className="inner-extra-links">Register Now!</span>
        </Link>
        <a href="#" className="password-text">Forgot Password</a>
      </div>
    </div>
  );
};

export default SignInForm;
