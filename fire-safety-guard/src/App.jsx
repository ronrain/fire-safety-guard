import { useState } from 'react'

//css
import './App.css'

import { Route, Routes, useLocation } from 'react-router-dom'

//pages
import Details from './pages/Details/Details'
import About from './pages/About/About'
import ContactForm from './pages/ContactForm/ContactForm'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

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
      </Routes>
      {isRootPath && (
        <main className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-4 text-center">OSHA2020Consultants</h1>
              <img src="./fire-safety.png" alt="At Home Fire Safety" className="fire-safety img-fluid" style={{ float: 'right', maxWidth: '65%', height: 'auto' }} />
              <p className="lead">
                OSHA2020Consultants is your trusted partner for fire safety solutions. Serving the tri-state area, we specialize in a wide range of services to ensure the safety and compliance of your premises.
              </p>
              <p className='lead'><strong>All of our Fire Guards are FDNY certified.</strong> Our fire guards can provide assistance for Impairments (F-01), Shelters (F-02), Temporary Assembly (F-04), Fire Safety Managers (S-56) and Temporary Heat (S-92). We have worked for corporate buildings, venues construction sites and many more. Whatever you need, we can provide you with the highest level of service.</p>
              <p className='lead'>We offer round-the-clock availability, <strong>24/7/365</strong>, to address any Fire Life Safety emergencies at your facility, ensuring compliance with local regulations and the continuous operation of your building.</p>
            </div>
          </div>
        </main>
      )}
    <footer class="text-center text-lg-start">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-8 d-flex justify-content-center mx-auto">
        <p class="m-0">© 2024 OSHA2020Consultants. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>




      {/* <Footer /> */}
    </>
  )
}

export default App
