import React from 'react';
import './index.css';
import img from './logo.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../store/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useSelector((state) => state.authSlice);

    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(setAuth({ user: null }));
        navigate("/");
    };

    const isPreviewPage = location.pathname === '/fupload';

    const handlePreviewClick = () => {
        if (!user) {
            // If user is not logged in, show alert and redirect to login page
            alert("Please log in first.");
            navigate('/login');
        } else {
            // If user is logged in, navigate to preview page
            navigate("/fupload");
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-top">
                <div className="navbar-left">
                    <a href="tel:+880123456789" className="navbar-phone">
                        <i className="fas fa-phone"></i> +919 8017 69877
                    </a>
                    <a href="mailto:support@yourmail.com" className="navbar-email">
                        <i className="fas fa-envelope"></i> support@yourmail.com
                    </a>
                </div>
            </div>
            <div className="navbar-bottom">
                <div className="navbar-logo">
                    <img src={img} alt="Mediplus Logo" />
                </div>
                <ul className="navbar-menu">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><a href="#">Services</a></li>
                    <li className="nav-item">
                        <span onClick={handlePreviewClick} style={{color:'#333'}}>Preview</span>
                    </li>
                    <li className="nav-item"><a href="#">Analysis</a></li>
                    <li className="nav-item"><Link to="/contact">Contact</Link></li>
                </ul>
                {user && !isPreviewPage ? (
                    <div className="user-avatar">
                        <button className="navbar-appointment" onClick={handleLogout}>
                            <span>Logout</span>
                        </button>
                    </div>
                ) : (
                    !isPreviewPage && (
                       null
                    )
                )}
                {!user && !isPreviewPage && (
                    <Link to="/login" className="navbar-appointment">
                        <span>Login</span>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
