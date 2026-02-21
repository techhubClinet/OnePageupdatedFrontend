import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './ModalityPage.css';

const CranialFluidDynamicsPage = () => {
  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Hero */}
      <section className="modality-hero">
        <div className="modality-hero-gradient" />
        <div className="container">
          <div className="modality-hero-content">
            <h1 className="modality-hero-title">Cranial Fluid Dynamics</h1>
            <p className="modality-hero-subtitle">
              Work that listens through the cranial fluid as a medium for understanding nervous system
              organization and reorganization.
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
            Cranial Fluid Dynamics uses the cranial fluid as a listening medium for how the nervous
            system is organized. The work attends to subtle changes in the fluid system as patterns of
            holding and organization become apparent.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="modality-section">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">How It Works</h2>
          <p className="modality-body-text">
            Through this listening, the system is given space to reorganize without force. The work
            respects the body&apos;s own timing and capacity for change.
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

export default CranialFluidDynamicsPage;

