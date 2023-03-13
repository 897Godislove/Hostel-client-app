import { styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Logo = styled(Link)({
  color: 'black'
})

const header = () => {
  return (
      <header className="header__container">

       <Logo to={'/homepage'}>   
      <div className="header__left">
        <p>ROOJO </p>
        <h3>HELP CENTER</h3>
      </div>
      </Logo>
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
