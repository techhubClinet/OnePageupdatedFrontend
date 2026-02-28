import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = `/#${targetId}`;
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/Rlogo.png" alt="Spiritual Dealer Logo" className="footer-logo-image" />
          <p className="footer-brand-text">Spiritual Dealer</p>
        </div>
        <div className="footer-divider" />
        <nav className="footer-nav">
          <a
            href={location.pathname !== '/' ? '/#top' : '#top'}
            onClick={(e) => location.pathname === '/' && handleScroll(e, 'top')}
            className="footer-nav-link"
          >
            Home
          </a>
          <a
            href={location.pathname !== '/' ? '/#book' : '#book'}
            onClick={(e) => handleScroll(e, 'book')}
            className="footer-nav-link"
          >
            Book
          </a>
          <a
            href={location.pathname !== '/' ? '/#pamela' : '#pamela'}
            onClick={(e) => handleScroll(e, 'pamela')}
            className="footer-nav-link"
          >
            Pamela Shore
          </a>
          <a
            href={location.pathname !== '/' ? '/#community' : '#community'}
            onClick={(e) => handleScroll(e, 'community')}
            className="footer-nav-link"
          >
            Community
          </a>
          <Link to="/admin" className="footer-nav-link">
            Admin
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
