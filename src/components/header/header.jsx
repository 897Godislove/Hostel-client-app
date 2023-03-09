import React from "react";
import "./header.css";

const header = () => {
  return (
      <header className="header__container">
          
      <div className="header__left">
        <p>ROOJO </p>
        <h3>HELP CENTER</h3>
      </div>
      <div className="header__right">
        <div className="header__right__details">
          <span>Renter Help</span>
          <span>Rental Manager Help </span>
          <span> Apartments.com</span>
        </div>
      </div>
    </header>
  );
};

export default header;
