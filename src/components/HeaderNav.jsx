import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { label: 'Book', id: 'book' },
    { label: 'Community', id: 'community' },
    { label: 'Pamela Shore', id: 'pamela' },
  ];

  return (
    <header className="header-nav">
      <div className="container header-inner">
        <div className="header-logo">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/Rlogo.png" alt="Spiritual Dealer Logo" className="logo-image" />
          </Link>
        </div>
        <nav className={`header-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          {navLinks.map(({ label, id }) => (
            <a
              key={id}
              href={`/#${id}`}
              className="header-nav-link"
              onClick={(e) => scrollTo(e, id)}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
        </button>
      </div>
    </header>
  );
};

export default HeaderNav;
