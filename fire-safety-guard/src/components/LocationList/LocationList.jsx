import React from "react";

const LocationList = (props) => {
  return (
    <div>
      <h2 className="text-center">{props.title}</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mx-auto">
          {props.location.map((item) => (
            <div className="col" key={item._id}>
              <div className="card mb-3 mx-auto" style={{ width: '18rem',  borderColor: '#3185fc', borderWidth: '2px', borderStyle: 'solid' }}>
                <img
                  src={item.imageUrl}
                  className="card-img-top img-fluid"
                  style={{ height: '200px' }}
                  alt=""
                />
                <div className="card-body" style={{ backgroundColor:'#f4f9e9'}}>
                  <p className="card-text text-center"> <strong>{item.location}</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4"></div>
    </div>
  );
};

export default LocationList;
