import React from 'react';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './ModalityPage.css';

const CommunityComingSoonPage = () => {
  return (
    <div className="App" id="top">
      <HeaderNav />

      <section className="modality-hero">
        <div className="modality-hero-gradient" />
        <div className="container">
          <div className="modality-hero-content">
            <img
              src={`${process.env.PUBLIC_URL || ''}/Community.png`}
              alt="Community"
              className="community-hero-image"
            />
            <h1 className="modality-hero-title">Coming Soon</h1>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityComingSoonPage;

