import React from 'react';
import { Link } from 'react-router-dom';
import { serviceData } from '../../data/data';
import { locationData } from '../../data/data';

const Home = ({ serviceData, locationData }) => {
  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-8">
          <h1 className="display-4">Welcome to OSHA2020 Consultants</h1>
          <p className="lead">
            OSHA2020 Consultants is your trusted partner for fire safety solutions. Serving the tri-state area, we specialize in a wide range of services to ensure the safety and compliance of your premises. 
          </p>
          <p className='lead'>All of our Fire Guards are FDNY certified. Our fire guards can provide assistance for Impairments (F-01), Shelters (F-02), Temporary Assembly (F-04), Fire Safety Managers (S-56) and Temporary Heat (S-92). We have worked for corporate buildings, venues construction sites and many more. Whatever you need, we can provide you with the highest level of service.</p>
        <div className="col-lg-4">
          <img src="/fire-safety.png" alt="Fire Safety" className="img-fluid mt-5" style={{width: '20px'}}/>
          <p className="text-center">Contact us for a consultation:</p>
          <p className="text-center"><strong>Phone:</strong> +1 (347) 392-7031</p>
          <p className="text-center"><strong>Email:</strong> info@osha2020.com</p>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Home;
