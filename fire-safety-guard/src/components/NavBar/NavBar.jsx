import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        {/* Left side of the navbar */}
        <div className="d-flex align-items-center">
          <a className="navbar-brand me-3" href="/">
            <img src='./logo.png' alt="Logo" style={{ width: '70px', height: 'auto' }} />
          </a>
          {/* Center content */}
          <a href="tel:+3473927031" className="navbar-text text-center mb-0 phone-number me-auto" style={{ color: 'white', fontSize:'1.8rem' }}>
            <strong>In Case of an Emergency <br />Call 3473927031</strong>
          </a>
        </div>
        {/* Right side of the navbar */}
        <div className="d-flex align-items-center">
          {/* Links dropdown menu */}
          <div className="dropdown justify-content-end">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              OSHA2020Consultants
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
              <li className="nav-item">
                <Link to="/about" className="nav-link text-decoration-none" style={{ color: 'red' }}>
                  Who We Are
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/details" className="nav-link text-decoration-none" style={{ color: 'red' }}>
                  What We Do
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-decoration-none" style={{ color: 'red' }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
