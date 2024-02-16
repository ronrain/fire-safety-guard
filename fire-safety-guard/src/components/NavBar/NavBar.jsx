import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Left side of the navbar */}
        <div className="navbar-left navbar-nav me-auto mb-2 mb-lg-0">
          <a className="navbar-brand" href="/">
            <img src="./logo.png" alt="Logo" className="navbar-brand " style={{ width: '70px', height: 'auto', textDecoration: 'none', textDecorationLine: 'none', color: '#222725' }} />
          </a>
          <a href="tel:+3473927031" className="phone-number mr-3" style={{color: '#3185fc', fontSize:'1.8rem'}}>
            <strong>For Immediate Assistance <br /> Call 3473927031</strong>
          </a>
        </div>
        {/* Right side of the navbar */}
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <h1 class="nav-text" style={{color: '#3185fc'}}>OSHA 2020 Consultants</h1>
  </li>
  </ul>
        <div className="navbar-right nav justify-content-end">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{fontSize:'1.8rem', color:'#3185fc'}}>
            <li className="nav-item">
              <Link to="/about" className="nav-link ms-auto mb-2 mb-lg-0" style={{color: '#3185fc'}}>
                Who We Are
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/details" className="nav-link ms-auto mb-2 mb-lg-0" style={{color: '#3185fc'}}>
                What We Do
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link ms-auto mb-2 mb-lg-0" style={{color: '#3185fc'}}>
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
