import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  const scrollToSection = (targetId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${targetId}`;
      return;
    }
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSectionClick = (e, targetId) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={`${process.env.PUBLIC_URL || ''}/Rlogo.png`} alt="Spiritual Dealer Logo" className="footer-logo-image" />
          <p className="footer-brand-text">Spiritual Dealer</p>
        </div>
        <div className="footer-divider" />
        <nav className="footer-nav">
          <a
            href="/#book"
            className="footer-nav-link"
            onClick={(e) => handleSectionClick(e, 'book')}
          >
            The Book
          </a>
          <a
            href="/#pamela"
            className="footer-nav-link"
            onClick={(e) => handleSectionClick(e, 'pamela')}
          >
            Pamela Shore
          </a>
          <a
            href="/#community"
            className="footer-nav-link footer-coming-soon"
            title="The Community – Coming Soon"
            aria-label="The Community"
            onClick={(e) => handleSectionClick(e, 'community')}
          >
            The Community
          </a>
          <a
            href="/admin"
            className="footer-nav-link"
          >
            Admin
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;;
