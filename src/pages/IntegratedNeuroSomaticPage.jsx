import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './IntegratedNeuroSomaticPage.css';

const IntegratedNeuroSomaticPage = () => {
  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Hero */}
      <section className="integrated-hero">
        <div className="integrated-hero-gradient" />
        <div className="container">
          <div className="integrated-hero-content">
            <h1 className="integrated-hero-title">
              Integrated Neuro-Somatic &amp; Movement Sessions
            </h1>
            <p className="integrated-hero-subtitle">
              A personalized, in-person experience integrating neuro-somatic awareness,
              InnerDialogue-informed work, and movement through Gyrotonic® or Pilates.
            </p>
            <div className="integrated-hero-actions">
              <Link to="/booking" className="integrated-primary-cta">
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What this session is */}
      <section className="integrated-section">
        <div className="container integrated-section-inner">
          <h2 className="integrated-section-title">What This Session Is</h2>
          <p className="integrated-body-text">
            This in-person session integrates neuro-somatic awareness, InnerDialogue-informed work,
            and movement through Gyrotonic® or Pilates.
          </p>
          <p className="integrated-body-text">
            Internal patterns are first recognized, then physically integrated through precise,
            supportive movement. This approach allows change to be experienced and stabilized in
            real time.
          </p>
          <p className="integrated-body-text">
            Clients often report improved coordination, reduced pain or tension patterns, greater
            ease, and a deeper sense of alignment and presence.
          </p>
        </div>
      </section>

      {/* What it may include */}
      <section className="integrated-section">
        <div className="container integrated-section-inner">
          <h2 className="integrated-section-title">What It May Include</h2>
          <ul className="integrated-bullet-list">
            <li>Somatic movement</li>
            <li>Gyrotonic®</li>
            <li>Classical Pilates</li>
            <li>InnerDialogue™ processes</li>
            <li>Cranial-based integration techniques</li>
          </ul>
        </div>
      </section>

      {/* Who it supports */}
      <section className="integrated-section">
        <div className="container integrated-section-inner">
          <h2 className="integrated-section-title">Who It Supports</h2>
          <ul className="integrated-bullet-list">
            <li>Trauma</li>
            <li>Neurodivergence</li>
            <li>Grief</li>
            <li>Addiction</li>
            <li>Major life transitions</li>
          </ul>
        </div>
      </section>

      {/* Format */}
      <section className="integrated-section integrated-format-section">
        <div className="container integrated-section-inner">
          <h2 className="integrated-section-title">Format</h2>
          <p className="integrated-body-text">
            In-person only. Sessions are designed to allow recognition and physical integration to
            occur together.
          </p>
          <div className="integrated-format-cta">
            <Link to="/booking" className="integrated-primary-cta">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntegratedNeuroSomaticPage;

