import React, { useEffect } from "react";
// import logo from './logo.svg';
import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Components/Home';
// import Contact from './Components/contact';
import Login from './Components/login';
import Register from './Components/register';
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "./store/authSlice";
import axios from 'axios';
import Fileupload from "./Components/preview";
import About from "./Components/about";
import ContactForm from "./Components/contactUs";

// import Pricing from './Components/pricing-section';
function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.authSlice);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:8000/api/auth/user', {
        headers: {
          'token': token
        }
      })
      .then(response => {
        console.log("User data fetched: ", response.data);
        dispatch(setAuth({ user: response.data.user }));
      })
      .catch(error => {
        console.log("Error fetching user data: ", error.message);
      });
    }
  }, [dispatch]);


  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/fupload" element={<Fileupload/>}/>
          <Route path="/contact" element={<ContactForm/>}/>
          <Route path="/about" element={<About/>}/>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
