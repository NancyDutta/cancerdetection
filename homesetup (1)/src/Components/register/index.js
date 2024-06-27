import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import favicon from './favicon.png';
import { FaUser, FaEnvelope, FaMobileAlt, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../loader';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading , isLoading]=useState(false);

  const [errorMessage, setErrorMessage] = useState("");



  const navigate = useNavigate();

  const { firstName, lastName, email, mobile, password, confirmPassword } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


  const clearErrors = () => {
    setFirstnameError("");
    setLastnameError("");
    setEmailError("");
    setMobileError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  function validateFirstName(firstName) {
    if (!firstName || firstName.trim() === "") {
      return { message: "First name is required." };
    }
    if (!/^[a-zA-Z]+$/.test(firstName)) {
      return { message: "First name can only contain letters." };
    }
    if (firstName.length < 2 || firstName.length > 30) {
      return { message: "First name must be between 2 and 30 characters." };
    }
    return null; // No errors
  }
  
  function validateLastName(lastName) {
    if (!lastName || lastName.trim() === "") {
      return { message: "Last name is required." };
    }
    if (!/^[a-zA-Z]+$/.test(lastName)) {
      return { message: "Last name can only contain letters."};
    }
    if (lastName.length < 2 || lastName.length > 30) {
      return { message: "Last name must be between 2 and 30 characters." };
    }
    return null;
  }
  

  function validateEmail(email) {
    if (!email || email.trim() === "") {
      return { message: "Email is required."};
    }
    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { message: "Invalid email format." };
    }
    return null;
  }

  function validateMobile(mobile) {
    if (!mobile || mobile.trim() === "") {
      return { message: "Mobile number is required." };
    }
    
    const mobileRegex = /^\d{10}$/; // Allows 10 digits
    if (!mobileRegex.test(mobile)) {
      return { message: "Invalid mobile number format." };
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
  function validateConfirmPassword(confirmPassword, password) {
    if (!confirmPassword || confirmPassword.trim() === "") {
      return { message: "Confirm password is required." };
    }
    if (confirmPassword !== password) {
      return { message: "Passwords do not match."};
    }
    return null;
  }
  
  const validateForm = () => {
    let isValid = true;

    // Clear previous error messages
    clearErrors();

    let result = null;

    // validating the first name
    result = validateFirstName(firstName);
    if (result !== null) {
      isValid = false;
      setFirstnameError(result.message);
    }

    // validating the last name
    result = validateLastName(lastName);
    if (result !== null) {
      isValid = false;
      setLastnameError(result.message);
    }


    // validating email
    result = validateEmail(email);
    if (result !== null) {
      isValid = false;
      setEmailError(result.message);
    }

    // validating the  mobile number
    result = validateMobile(mobile);
    if (result !== null) {
      isValid = false;
      setMobileError(result.message);
    }

    // validating the password
    result = validatePassword(password);
    if (result !== null) {
      isValid = false;
      setPasswordError(result.message);
    }

    // validating the confirm password
    result = validateConfirmPassword(password, confirmPassword);
    if (result !== null) {
      isValid = false;
      setConfirmPasswordError(result.message);
    }

    return isValid;
  };

  const onSubmit = async e => {
    e.preventDefault();

    
    if (!validateForm()) {
      return;
    }


    try {
      console.log(formData);
      const res = await axios.post('http://localhost:8000/api/auth/register',
        formData);

      if (res.status === 200) {
        isLoading(true);
        setTimeout(() => {
          alert('Registered successfully!');
          navigate('/login');
        }, 2000);  // Redirect to login page after successful registration
      }
    } catch (err) {
      console.error(err.response.data);
      alert('Error in registration');
    }
  };

  return (
    <div className="signin-container">
      <img src={favicon} alt="Profile Avatar" className="avatar" />
      <h2 className="sign-in-heading">Register Now!</h2>
      {loading ? <LoadingSpinner/> : (

      <form onSubmit={onSubmit} noValidate>
        <div className="input-group">
          <div className="social-icons">
            <FaUser />
          </div>
          <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={onChange} required />
        </div>
          <div id="firstnameError" className="error_sign_up">
        {firstnameError}
      </div>
        <div className="input-group">
          <div className="social-icons">
            <FaUser />
          </div>
          <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={onChange} required />
        </div>
        <div id="lastnameError" className="error_sign_up">
        {lastnameError}
      </div>
        <div className="input-group">
          <div className="social-icons">
            <FaEnvelope />
          </div>
          <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} required />
        </div>
        <div id="emailError" className="error_sign_up">
        {emailError}
      </div>
        <div className="input-group">
          <div className="social-icons">
            <FaMobileAlt />
          </div>
          <input type="tel" name="mobile" placeholder="Mobile Number" value={mobile} onChange={onChange} required />
        </div>
        <div id="mobileError" className="error_sign_up">
        {mobileError}
      </div>
       
        <div className="input-group">
          <div className="social-icons">
            <FaLock />
          </div>
          <input type="password" name="password" placeholder="Create Password" value={password} onChange={onChange} required />
        </div>
        <div id="passwordError" className="error_sign_up">
        {passwordError}
      </div>
        <div className="input-group">
          <div className="social-icons">
            <FaLock />
          </div>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={onChange} required />
        </div>
        <div id="confirmPasswordError" className="error_sign_up">
        {confirmPasswordError}
      </div>
        <button type="submit" className="login-btns">Sign Up</button>
      </form>)}
      <div className="extra-links">
        <Link to="/login" className="account-text">
          Already have an account? <span className="inner-extra-links">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
