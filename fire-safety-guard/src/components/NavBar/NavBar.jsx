import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false); // State to track dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility on button click
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        {/* Left side of the navbar */}
        <div className="d-flex align-items-center">
          <a className="navbar-brand me-3" href="/">
            <div className="d-flex align-items-center" style={{ backgroundColor: '#b51933', padding: '5px', borderRadius: '5px', border: '4px solid #888686', marginBottom: '5px' }}>
              <img src='./logo.png' alt="Logo" style={{ width: '70px', height: 'auto' }} /><h1 className="display-4 text-center ms-2 mb-0" style={{ fontSize: '1.55rem', color: 'white' }}>OSHA2020 <br /> Consultants</h1>
            </div>
          </a>
        </div>
        {/* Right side of the navbar */}
        <div className="d-flex align-items-center">
          {/* Links dropdown menu */}
          <div className={`dropdown justify-content-end ${isOpen ? 'show' : ''}`}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded={isOpen} onClick={toggleDropdown}>
              Menu
            </button>
            <ul className={`dropdown-menu dropdown-menu-end ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton" style={{ minWidth: '200px' }}>
              <li className="nav-item text-center">
                <Link to="/about" className="nav-link text-decoration-none" style={{ color: '#880d1e', padding: '10px', fontSize: '1.3rem' }}>
                  Who We Are
                </Link>
              </li>
              <li className="nav-item text-center">
                <Link to="/details" className="nav-link text-decoration-none" style={{ color: '#880d1e', padding: '20px', fontSize: '1.3rem' }}>
                  What We Do
                </Link>
              </li>
              {/* <li className="nav-item text-center">
                <Link to="/reviews" className="nav-link text-decoration-none" style={{ color: '#880d1e', padding: '20px', fontSize: '1.3rem' }}>
                  Reviews
                </Link>
              </li> */}
              <li className="nav-item text-center">
                <Link to="/contact" className="nav-link text-decoration-none" style={{ color: '#880d1e', padding: '10px', fontSize: '1.3rem' }}>
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
