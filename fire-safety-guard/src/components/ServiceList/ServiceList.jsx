import React from "react";
import './ServiceList.css';

const ServiceList = (props) => {
  return (
    <div>
  <h2 className="text-center">{props.title}</h2>
  <div className="container">
    <div className="card-deck">
      {props.service.map((item) => (
        <div className="card mb-4 card-design" key={item._id} style={{ borderColor: '#3185fc', borderWidth: '2px', borderStyle: 'solid' }}>
          <div className="card-header" style={{ backgroundColor:'#f4f9e9'}}><strong>{item.code}</strong></div>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default ServiceList;
