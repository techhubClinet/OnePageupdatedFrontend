import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './ModalityPage.css';

const ClassicalPilatesPage = () => {
  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Hero */}
      <section className="modality-hero">
        <div className="modality-hero-gradient" />
        <div className="container">
          <div className="modality-hero-content">
            <h1 className="modality-hero-title">Classical Pilates</h1>
            <p className="modality-hero-subtitle">
              A structured movement system emphasizing alignment, breath, precision, and coordinated
              strength.
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
            Pilates sessions emphasize alignment, breath, and precision to build strength while
            supporting balance and functional movement.
          </p>
          <p className="modality-body-text">
            Classical Pilates follows a structured order of exercises that organizes strength,
            alignment, and coordination through a conscious connection between mind, breath, and
            movement.
          </p>
        </div>
      </section>

      {/* Format */}
      <section className="modality-section alt">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">Format</h2>
          <p className="modality-body-text">In person.</p>
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

export default ClassicalPilatesPage;

