import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './ModalityPage.css';

const PressMediaPage = () => {
  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Hero */}
      <section className="modality-hero">
        <div className="modality-hero-gradient" />
        <div className="container">
          <div className="modality-hero-content">
            <h1 className="modality-hero-title">Press &amp; Media</h1>
            <p className="modality-hero-subtitle">
              Interviews, features, and conversations exploring embodied healing.
            </p>
          </div>
        </div>
      </section>

      {/* Media Overview */}
      <section className="modality-section">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">Media Overview</h2>
          <p className="modality-body-text">
            Pamela Shore&apos;s work bridges neuro-somatic awareness, movement, and metaphysical healing.
            Through interviews, written features, and collaborative discussions, she speaks about the
            integration of body-based processes, inherited patterns, and conscious awareness.
          </p>
          <p className="modality-body-text">
            Her approach emphasizes grounded, nervous-system-based transformation rather than ideology
            or prediction.
          </p>
        </div>
      </section>

      {/* Topics of Conversation */}
      <section className="modality-section">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">Topics of Conversation</h2>
          <ul className="modality-bullet-list">
            <li>Neuro-somatic movement and embodiment</li>
            <li>The foundations of InnerDialogue™</li>
            <li>BeingHuman Constellation Work™</li>
            <li>Trauma and inherited family patterns</li>
            <li>Epigenetics and embodied awareness</li>
            <li>The philosophy behind Spiritual Dealer</li>
          </ul>
        </div>
      </section>

      {/* Book Features */}
      <section className="modality-section">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">Book Features</h2>
          <p className="modality-body-text">
            <em>Spiritual Dealer</em> has been discussed in conversations surrounding alternative
            healing, lineage, nervous system integration, and the evolution of personal transformation
            work.
          </p>
          <p className="modality-body-text">
            The book offers insight into diverse healing systems without elevating one above another,
            emphasizing discernment and lived experience.
          </p>
        </div>
      </section>

      {/* Media Inquiries */}
      <section className="modality-section alt">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">Media Inquiries</h2>
          <p className="modality-body-text">
            For press requests, interviews, speaking engagements, or collaboration inquiries, please
            use the contact form or email directly.
          </p>
          <div className="modality-bottom-cta">
            <Link to="/#contact" className="modality-primary-cta">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressMediaPage;

