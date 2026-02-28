import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const updateViewport = () => {
      setIsMobileViewport(window.innerWidth <= 768);
    };
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAnchorClick = (e, anchorId, pagePath) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);

    if (location.pathname !== pagePath) {
      navigate(pagePath);
      setTimeout(() => {
        scrollToSection(anchorId);
      }, 100);
    } else {
      scrollToSection(anchorId);
    }
  };

  const scrollToSection = (anchorId) => {
    const element = document.getElementById(anchorId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (id) => {
    setOpenDropdown((current) => (current === id ? null : id));
  };

  const handleDropdownMouseEnter = (id) => {
    if (!isMobileViewport) {
      setOpenDropdown(id);
    }
  };

  const handleDropdownMouseLeave = (id) => {
    if (!isMobileViewport) {
      setOpenDropdown((current) => (current === id ? null : current));
    }
  };

  return (
    <header className="header-nav">
      <div className="container header-inner">
        <div className="header-logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/Rlogo.png" alt="Spiritual Dealer Logo" className="logo-image" />
          </Link>
        </div>
        <nav
          ref={navRef}
          className={`header-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
        >
          {/* 1. Book — single link, no dropdown */}
          <a
            href="/#book"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={(e) => handleAnchorClick(e, 'book', '/')}
          >
            Book
          </a>

          {/* 2. Pamela Shore — single link, no dropdown */}
          <a
            href="/#pamela"
            className="nav-link"
            onClick={(e) => handleAnchorClick(e, 'pamela', '/')}
          >
            Pamela Shore
          </a>

          {/* 3. Community — dropdown only under Community */}
          <div
            className={`nav-dropdown ${openDropdown === 'community' ? 'open' : ''}`}
            onMouseEnter={() => handleDropdownMouseEnter('community')}
            onMouseLeave={() => handleDropdownMouseLeave('community')}
          >
            <button
              type="button"
              className={`nav-dropdown-trigger ${
                location.pathname === '/connect' ? 'active' : ''
              }`}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'community'}
              onClick={() => {
                if (isMobileViewport) toggleDropdown('community');
              }}
            >
              Community
              <span className="nav-dropdown-caret" aria-hidden="true" />
            </button>
            <div className="nav-dropdown-menu">
              <a
                href="/#community"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'community', '/')}
              >
                Join the Community
              </a>
            </div>
          </div>
        </nav>
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default HeaderNav;
