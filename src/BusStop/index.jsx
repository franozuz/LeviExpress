import React, { useState } from 'react';
import './style.css';

const BusStop = (props) => {
  return (
    <div className="bus-stop">
      <div className="bus-stop__bullet"></div>
      <div className="bus-stop__place">
        <div className="bus-stop__city">{props.name}</div>
        <div className="bus-stop__station">{props.station}</div>
      </div>
      <div className="bus-stop__departure">{props.time}</div>
    </div>
  );
};

export default BusStop;
