import { useState } from 'react'

//css
import './App.css'

import { Route, Routes, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';


//pages
import Details from './pages/Details/Details'
import About from './pages/About/About'
import ContactForm from './pages/ContactForm/ContactForm'
import ReviewPage from './components/Review/ReviewPage';

import NavBar from './components/NavBar/NavBar'
import GoogleReview from './components/GoogleReview/GoogleReview';
// import Footer from './components/Footer/Footer'

function App() {
  const location = useLocation()

  const isRootPath = location.pathname === '/'
  return (
    <>
      <NavBar />
      {/* <a href="tel:+3473927031" className="text-center" style={{}}><strong>For Immediate Assistance Call 3473927031</strong></a> */}
      <Routes>
        <Route path='/details' element={<Details />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/reviews' element={<ReviewPage />} />
      </Routes>
      {isRootPath && (
        <main className="container" style={{ backgroundColor: 'white', padding: '2rem' }}>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {/* <h1 className="display-4 text-center">OSHA2020 Consultants</h1>
               */}
              <h1 className="display-4 text-center">Fire Safety Guard Consultants</h1>
              <img src="./fire-safety.png" alt="At Home Fire Safety" className="fire-safety img-fluid" style={{ float: 'right', maxWidth: '65%', height: 'auto' }} />
              <p className="lead">
                OSHA2020 Consultants is your trusted partner for fire safety solutions. Serving the tri-state area, we specialize in a wide range of services to ensure the safety and compliance of your premises.
              </p>
              <p className='lead'><strong>All of our Fire Guards are FDNY certified.</strong> Our fire guards can provide assistance for Impairments (F-01), Shelters (F-02), Temporary Assembly (F-04), Fire Safety Managers (S-56) and Temporary Heat (S-92). We have worked for corporate buildings, venues construction sites and many more. Whatever you need, we can provide you with the highest level of service.</p>
              <p className='lead'>We offer round-the-clock availability, <strong>24/7/365</strong>, to address any Fire Life Safety emergencies at your facility, ensuring compliance with local regulations and the continuous operation of your building.</p>
              <br />
              {/* <img src="./Different-Fire-Alarms.webp" alt="At Home Fire Safety" className="fire-safety img-fluid" style={{ float: 'left', maxWidth: '50%', height: 'auto' }} /> */}
          <GoogleReview />
          <br />
              <div className="d-flex justify-content-center align-items-center">
                <Link to="/contact" className="button-82-pushable text-center mt-4 d-inline-block" role="button">
                  <span className="button-82-shadow"></span>
                  <span className="button-82-edge"></span>
                  <span className="button-82-front text">Contact Us Today!</span>
                </Link>
                </div>
              <br />
              <div className='text-center text-decoration-none'>
                <a href="mailto:OSHA2020Consultants@gmail.com" style={{ textDecoration: 'underline', textDecorationColor: '#3185fc', color: '#b51933' }}>
                  <h3 style={{ fontSize: '1.2rem' }}>Email Us Directly at OSHA2020Consultants@gmail.com</h3>
                </a>
              </div>
            </div>
          </div>
          <br />
        </main>
      )}
      <footer className="text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-8 d-flex justify-content-center mx-auto">
              <p className="m-0">© 2024 OSHA2020 Consultants. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>




      {/* <Footer /> */}
    </>
  )
}

export default App
