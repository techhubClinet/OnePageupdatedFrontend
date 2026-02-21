import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './ModalityPage.css';

const InnerDialoguePage = () => {
  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Hero */}
      <section className="modality-hero">
        <div className="modality-hero-gradient" />
        <div className="container">
          <div className="modality-hero-content">
            <h1 className="modality-hero-title">InnerDialogue™</h1>
            <p className="modality-hero-subtitle">
              A non-directive, neuro-somatic process that works beneath conscious thought to reveal
              and integrate internal patterns influencing perception, behavior, and life direction.
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
            InnerDialogue is a non-directive process that works beneath conscious thought to reveal
            and integrate internal patterns influencing perception, behavior, and life direction.
            Unlike traditional therapy, InnerDialogue doesn&apos;t require you to relive past
            experiences or engage in analysis.
          </p>
          <p className="modality-body-text">
            Instead, it supports recognition and resolution at a deeper level, allowing understanding
            to emerge naturally.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="modality-section">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">How It Works</h2>
          <p className="modality-body-text">
            InnerDialogue is a neuro-somatic process informed by kinesiology and specific hand modes
            that support communication with the subconscious. The work moves toward an integration
            phase, allowing patterns that have been recognized to be met, organized, and included.
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

export default InnerDialoguePage;

