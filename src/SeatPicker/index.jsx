import React from 'react';
import Seat from '../Seat';
import './style.css';

const SeatPicker = () => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        <div className="seat-row">
          <Seat number="11" isOccupied="false" isSelected="false" />
          <Seat number="12" isOccupied="true" isSelected="false" />
          <Seat number="13" isOccupied="false" isSelected="true" />
        </div>
      </div>
      <button className="btn" type="button">
        Rezervovat
      </button>
    </div>
  );
};

export default SeatPicker;
