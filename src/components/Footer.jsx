import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import './Footer.css';

const socialLinks = [
  { href: 'https://www.spiritualdealer.com/pamelashore', Icon: FaGlobe, label: 'Website' },
  { href: 'https://www.instagram.com/spiritualdealer222', Icon: FaInstagram, label: 'Instagram' },
  { href: 'https://www.facebook.com/SpiritualDealer', Icon: FaFacebook, label: 'Facebook' },
  { href: 'https://www.facebook.com/pamela.shore', Icon: FaFacebook, label: 'Pamela Shore' },
  { href: 'https://www.tiktok.com/@spiritualdealer222', Icon: SiTiktok, label: 'TikTok' },
  { href: 'https://www.linkedin.com/in/pamelashore', Icon: FaLinkedin, label: 'LinkedIn' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/Rlogo.png" alt="Spiritual Dealer Logo" className="footer-logo-image" />
          <p className="footer-brand-text">Spiritual Dealer</p>
        </div>
        <div className="footer-divider" />
        <div className="footer-connect">
          {socialLinks.map(({ href, Icon, label }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="footer-connect-link" aria-label={label}>
              <Icon className="footer-connect-icon" aria-hidden />
              <span>{label}</span>
            </a>
          ))}
        </div>
        <nav className="footer-nav">
          <a href="/#book" className="footer-nav-link">Book</a>
          <a href="/#community" className="footer-nav-link">Community</a>
          <a href="/#pamela" className="footer-nav-link">Pamela Shore</a>
          <Link to="/admin" className="footer-nav-link">Admin</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

