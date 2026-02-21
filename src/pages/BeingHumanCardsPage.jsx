import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './ModalityPage.css';

const BeingHumanCardsPage = () => {
  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Hero */}
      <section className="modality-hero">
        <div className="modality-hero-gradient" />
        <div className="container">
          <div className="modality-hero-content">
            <h1 className="modality-hero-title">BeingHuman Card Readings</h1>
            <p className="modality-hero-subtitle">
              A gentle, intuitive entry into the BeingHuman constellation field using symbolic imagery
              to reveal present-time patterns.
            </p>
            <div className="modality-hero-actions">
              <Link to="/booking" className="modality-primary-cta">
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="modality-section">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">What It Is</h2>
          <p className="modality-body-text">
            BeingHuman card readings use the BeingHuman cards as a way of entering the constellation
            field. The cards offer symbolic imagery that reflects how different aspects of your
            experience are organized in the present moment.
          </p>
          <p className="modality-body-text">
            This work orients you to patterns that are active now. It is not predictive or interpretive
            and does not offer advice.
          </p>
        </div>
      </section>

      {/* Format */}
      <section className="modality-section alt">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">Format</h2>
          <p className="modality-body-text">Live or Zoom.</p>
          <div className="modality-bottom-cta">
            <Link to="/booking" className="modality-primary-cta">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BeingHumanCardsPage;

