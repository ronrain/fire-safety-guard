import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './ContactForm.css'

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src="./fire-ext-sign.png" alt="Let Us Extinguish Your Fire Safety Concerns" className="navbar-logo" style={{ width: '100%', height: 'auto' }} />
    </div>
    <div className="col-md-6">
      <form ref={form} onSubmit={sendEmail} className="p-4">
        <h1>Contact Us</h1>
        <div className="form-floating mb-3">
          <input type="text" className="form-control d-block" id="floatingInputName" placeholder="Full Name" name="from_name" required />
          <label htmlFor="floatingInputName">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control d-block" id="floatingInputEmail" placeholder="name@example.com" name="from_email" required />
          <label htmlFor="floatingInputEmail">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input type="tel" className="form-control d-block" id="floatingInputPhone" placeholder="Phone Number" name="from_phone" required />
          <label htmlFor="floatingInputPhone">Phone Number</label>
        </div>
        <div className="form-floating mb-3">
          <select className="form-select d-block" id="floatingSelect" name="from_type" required >
            <option value="">Reason for Contact</option>
            <option value="SERVICE">Service</option>
            <option value="EMPLOYMENT">Employment</option>
          </select>
          <label htmlFor="floatingSelect">Contact Type</label>
        </div>
        <div className="form-floating mb-3">
          <textarea className="form-control d-block" id="floatingText" placeholder="Leave a Message" name="message" rows="7" required></textarea>
          <label htmlFor="floatingText">Message</label>
        </div>
        <button className="button-82-pushable" role="button">
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">Send</span>
        </button>
      </form>
    </div>
  </div>
</div>

  );
};

export default ContactForm