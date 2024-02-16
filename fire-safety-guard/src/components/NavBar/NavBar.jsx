import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src="./logo.png" alt="Logo" className="navbar-logo" style={{ width: '70px', height: 'auto', textDecoration:'none', textDecorationLine:'none', color:'#222725'  }} />
      </a>
      <a href="tel:+3473927031" className="mr-auto text-center"><strong>For Immediate Assistance <br /> Call 3473927031</strong></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              Who We Are
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/details" className="nav-link">
              What We Do
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  


  );
};

export default NavBar;
