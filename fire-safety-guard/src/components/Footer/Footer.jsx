import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <body class="d-flex flex-column" style={{margin:'0', padding:'0'}}>
    <footer className="bg-dark text-white py-4 mt-auto" style={{margin:'0', padding:'0', position:'relative'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h5>OSHA 2020 Consultants - Fire Safety</h5>
            <p>Email: info@example.com</p>
            <a href="tel:+3473927031" className="mr-auto"><strong>For Immediate Assistance Call 3473927031</strong></a>
          </div>
          <div className="col-lg-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/details">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <p className="text-center">© 2024 Ron Rain Studios. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </body>
  );
};

export default Footer;
