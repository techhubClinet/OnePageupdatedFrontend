import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './ModalityPage.css';

const SpiritualDealerModalityPage = () => {
  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Hero */}
      <section className="modality-hero">
        <div className="modality-hero-gradient" />
        <div className="container">
          <div className="modality-hero-content">
            <h1 className="modality-hero-title">Spiritual Dealer</h1>
            <p className="modality-hero-subtitle">
              A curated healing space created to support transformation on physical, emotional, and
              spiritual levels, with a focus on nervous system regulation and embodied awareness.
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
            Spiritual Dealer is a curated healing community created to support transformation on
            physical, emotional, and spiritual levels.
          </p>
          <p className="modality-body-text">
            Born from lived healing experience, Spiritual Dealer brings together trusted practitioners
            and diverse modalities—offering pathways beyond conventional approaches and honoring that
            no two healing journeys are the same.
          </p>
          <p className="modality-body-text">
            My work is rooted in embodied, nervous-system-based processes that support regulation,
            clarity, and lasting change. Healing is not linear, and awareness alone is not enough—the
            body must be included for true integration to occur.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="modality-section">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">How It Works</h2>
          <p className="modality-body-text">
            Spiritual Dealer is a community space that brings together movement-based, somatic, and
            intuitive healing modalities to support the whole person—body, mind, and spirit.
          </p>
          <p className="modality-body-text">
            The work centers nervous system regulation and embodied awareness so that insight and
            experience are integrated through the body.
          </p>
        </div>
      </section>

      {/* Format */}
      <section className="modality-section alt">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">Format</h2>
          <p className="modality-body-text">
            Sessions and offerings within Spiritual Dealer are scheduled by appointment and may
            include in-person work, live sessions, and select Zoom-based sessions, depending on the
            modality.
          </p>
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

export default SpiritualDealerModalityPage;

