import React from 'react';

const GoogleReview = () => {
  const reviewUrl = `https://www.google.com/maps/place/OSHA2020+Consultants/@40.5518064,-74.1497495,14z/data=!4m16!1m9!3m8!1s0x4ecf38d8bf232d8f:0xce0fb74aaa248bf1!2sOSHA2020+Consultants!8m2!3d40.5518064!4d-74.1497495!9m1!1b1!16s%2Fg%2F11q95q2tzj!3m5!1s0x4ecf38d8bf232d8f:0xce0fb74aaa248bf1!8m2!3d40.5518064!4d-74.1497495!16s%2Fg%2F11q95q2tzj?entry=ttu`;
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Thank you for choosing OSHA2020 Consultants for all your Fire Safety needs!</h5>
              <p className="card-text text-center">We would appreciate it if you could leave us a review:</p>
              <a href={reviewUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Leave a Google Review</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  

}

export default GoogleReview
