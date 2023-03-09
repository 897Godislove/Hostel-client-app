import React from "react";
import { Link } from "react-router-dom";
import "./Help-center.css";
import images from "./calcenternewer.jpg";
import Footer from "../footer/footer";
import Header from "../header/header";

const HelpCenter = () => {
  return (
    <div className="help-center__container">
      <Header />
      <img src={images} alt="new" />

      <div className="help-center__content">
        <div className="help-center__header">
          <h1>Welcome to the Roojo.com Help Center!</h1>
          <h3>Find answers fast by choosing the help you need</h3>
        </div>
        <div className="content__top">
          <article className="content__top-details">
            <h2>I’m a renter</h2>
            <p>
              Learn about searching for rentals, applying, and paying rent
              online.
            </p>
            <Link>Renter help center </Link>
          </article>

          <article className="content__top-details">
            <h2>I manage Rentals </h2>
            <p>Get help adding, editing, and managing your properties.</p>
            <Link>Rental Manager help center </Link>
          </article>
          <br />
        </div>

        <div className="content__center">
          <h2 className="center__header">Frequently asked questions</h2>
          <div className="center__subheader">
            <div className="center__subheader__left">
              <h3 className="center__subheader__heading">
                Top FAQs for Renters
              </h3>
              <ul className="center__list">
                <li>
                  {" "}
                  <Link>Does Apartments.com screen listings?</Link>
                </li>
                <li>
                  {" "}
                  <Link>How do I apply to rentals?</Link>
                </li>
                <li>
                  {" "}
                  <Link>Will you help me find a new place to live?</Link>
                </li>
                <li>
                  {" "}
                  <Link>How do I avoid a scam?</Link>
                </li>
                <li>
                  {" "}
                  <Link>A property manager is not responding…</Link>
                </li>
              </ul>
            </div>
            <div className="center__subheader__right">
              <h3 className="center__subheader__heading">
                Top FAQs for Renters
              </h3>
              <ul className="center__list">
                <li>
                  <Link>Does Apartments.com screen listings?</Link>
                </li>
                <li>
                  {" "}
                  <Link>How do I apply to rentals?</Link>
                </li>
                <li>
                  <Link>Will you help me find a new place to live?</Link>
                </li>
                <li>
                  {" "}
                  <Link>How do I avoid a scam?</Link>
                </li>
                <li>
                  <Link>A property manager is not responding…</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content__bottom">
          <p className="content__bottom__content">
            A full suite of resources to get the help you need about
            Apartments.com, The #1 Site for Renters. Ask, search, and find
            instant answers. 24/7. Online. Anytime.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;
