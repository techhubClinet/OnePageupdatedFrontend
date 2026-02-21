import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './ModalityPage.css';

const AudiobookPage = () => {
  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Hero */}
      <section className="modality-hero">
        <div className="modality-hero-gradient" />
        <div className="container">
          <div className="modality-hero-content">
            <h1 className="modality-hero-title">Spiritual Dealer — Audiobook</h1>
            <p className="modality-hero-subtitle">
              A spoken journey through healing, embodiment, and lived experience.
            </p>
            <div className="modality-hero-actions">
              <Link to="/booking" className="modality-primary-cta">
                Listen Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the Audiobook */}
      <section className="modality-section">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">About the Audiobook</h2>
          <p className="modality-body-text">
            The Spiritual Dealer audiobook offers a deeply personal and embodied listening experience.
            Narrated to preserve the tone and intention of the original work, it allows the story and
            teachings to be received in a more intimate and reflective way.
          </p>
          <p className="modality-body-text">
            This is not a performance — it is a transmission of lived experience.
          </p>
          <p className="modality-body-text">
            Through personal stories and exploration across multiple healing disciplines, the audiobook
            guides listeners through themes of trauma, inherited patterns, nervous system regulation,
            and the body&apos;s innate intelligence.
          </p>
        </div>
      </section>

      {/* What You'll Hear */}
      <section className="modality-section">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">What You&apos;ll Hear</h2>
          <ul className="modality-bullet-list">
            <li>The role of early life experiences and lineage</li>
            <li>How patterns become embedded in the nervous system</li>
            <li>The limits of one-size-fits-all healing approaches</li>
            <li>Conversations and insights from diverse healing modalities</li>
            <li>The process of embodied integration</li>
          </ul>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="modality-section">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">Who This Is For</h2>
          <ul className="modality-bullet-list">
            <li>Those who prefer learning through listening</li>
            <li>Individuals navigating personal transformation</li>
            <li>Practitioners curious about embodied healing frameworks</li>
            <li>Anyone exploring alternative or metaphysical healing paths</li>
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="modality-section alt">
        <div className="container modality-section-inner">
          <h2 className="modality-section-title">Begin Listening</h2>
          <p className="modality-body-text">
            Spiritual Dealer invites discernment, curiosity, and self-trust. It is an offering for
            those ready to listen — not only to a voice, but to their own inner awareness.
          </p>
          <div className="modality-bottom-cta">
            <Link to="/booking" className="modality-primary-cta">
              Listen Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AudiobookPage;

