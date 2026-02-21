import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './ModalityPage.css';

const GyrotonicMethodPage = () => {
  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Hero */}
      <section className="modality-hero">
        <div className="modality-hero-gradient" />
        <div className="container">
          <div className="modality-hero-content">
            <h1 className="modality-hero-title">Gyrotonic® Method</h1>
            <p className="modality-hero-subtitle">
              A movement system that emphasizes fluid, three-dimensional movement patterns, supporting
              spinal articulation, joint space, and overall mobility.
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
            GYROTONIC® is a movement system that emphasizes fluid, three-dimensional movement patterns.
            Unlike linear exercise approaches, GYROTONIC® works with the body&apos;s natural spiraling
            and circular movements, supporting spinal articulation, joint space, and overall mobility.
          </p>
          <p className="modality-body-text">
            The equipment-based sessions allow for precise, supportive movement that adapts to each
            person&apos;s unique needs and limitations and are suitable for all ages.
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

export default GyrotonicMethodPage;

