import React from "react";
import "./footer.css";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
const footer = () => {
  return (
    <footer className="footer__container">
      <div className="content__container">
        <div className="footer__contact__section">
          <div className="footer__logo">ROOJO LOGO</div>
          <div className="footer__socials">
            <p className="footer__heading">Follow Us</p>

            <div className="social__icon__background">
              <BsTwitter className="socials__icon" />
            </div>
            <div className="social__icon__background">
              <BsWhatsapp className="socials__icon" />
            </div>
            <div className="social__icon__background">
              <MdOutlineEmail className="socials__icon" />
            </div>
          </div>
        </div>
        <div className="footer__advertiser">
          <h3 className="footer-heading">Advertisers</h3>
          <ul className="about__list">
            <li className="about__list__item">Add Listing Terms of Service</li>
            <li className="about__list__item">Equal Housing</li>
          </ul>
        </div>

        <div className="footer__data__analytics">
          <h3 className="footer-heading">Data & Analytics</h3>
          <ul className="about__list">
            <li className="about__list__item">CoStar Market Analytics</li>
            <li className="about__list__item">CoStar Suite</li>
          </ul>
        </div>

        <div className="footer__about__us">
          <h3 className="footer-heading">About Us </h3>
          <ul className="about__list">
            <li className="about__list__item"> Company </li>
            <li className="about__list__item"> Contact Us </li>
            <li className="about__list__item"> Corporate Responsibility </li>
            <li className="about__list__item"> Press Room </li>
          </ul>
        </div>
        <p className="footer__copyright">
          © 2021 CoStar Group. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default footer;
