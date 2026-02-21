import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './RatesPoliciesPage.css';

const RatesPoliciesPage = () => {
  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Title / Hero */}
      <section className="rates-hero">
        <div className="rates-hero-gradient" />
        <div className="container">
          <div className="rates-hero-content">
            <h1 className="rates-title">Rates &amp; Policies</h1>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="rates-section">
        <div className="container rates-section-inner">
          <h2 className="rates-section-heading">Session Rates</h2>
          <p className="rates-body-text">
            Please contact directly for current session rates.
          </p>
        </div>
      </section>

      <section className="rates-section">
        <div className="container rates-section-inner">
          <h2 className="rates-section-heading">Payment</h2>
          <p className="rates-body-text">
            Payment is due at the time of booking unless otherwise arranged.
          </p>
        </div>
      </section>

      <section className="rates-section">
        <div className="container rates-section-inner">
          <h2 className="rates-section-heading">Cancellation Policy</h2>
          <p className="rates-body-text">
            A minimum of 24 hours’ notice is required for cancellations or rescheduling.
            Sessions canceled with less than 24 hours’ notice may be charged in full.
          </p>
        </div>
      </section>

      <section className="rates-section">
        <div className="container rates-section-inner">
          <h2 className="rates-section-heading">Format</h2>
          <ul className="rates-bullet-list">
            <li>In-person sessions available</li>
            <li>Select sessions available via Zoom (where applicable)</li>
          </ul>
        </div>
      </section>

      <section className="rates-section rates-booking-section">
        <div className="container rates-section-inner">
          <h2 className="rates-section-heading">Booking</h2>
          <p className="rates-body-text">
            Sessions are scheduled by appointment.
          </p>
          <div className="rates-booking-cta">
            <Link to="/booking" className="rates-primary-cta">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RatesPoliciesPage;

