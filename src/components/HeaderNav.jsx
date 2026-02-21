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
          {/* 1. Book / Author — Book Launch & Pamela Shore */}
          <div
            className={`nav-dropdown ${openDropdown === 'book-author' ? 'open' : ''}`}
            onMouseEnter={() => handleDropdownMouseEnter('book-author')}
            onMouseLeave={() => handleDropdownMouseLeave('book-author')}
          >
            <button
              type="button"
              className={`nav-dropdown-trigger ${location.pathname === '/' ? 'active' : ''}`}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'book-author'}
              onClick={() => {
                if (isMobileViewport) toggleDropdown('book-author');
              }}
            >
              Book / Author
              <span className="nav-dropdown-caret" aria-hidden="true" />
            </button>
            <div className="nav-dropdown-menu">
              <a
                href="/#book"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'book', '/')}
              >
                The Book &amp; Book Launch
              </a>
              <a
                href="/#audiobook"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'audiobook', '/')}
              >
                Audiobook
              </a>
              <a
                href="/#pamela"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'pamela', '/')}
              >
                About Pamela Shore
              </a>
              <a
                href="/#press-media"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'press-media', '/')}
              >
                Press / Media
              </a>
            </div>
          </div>

          {/* 2. About Pamela — Modalities & How to Book */}
          <div
            className={`nav-dropdown ${openDropdown === 'about-pamela' ? 'open' : ''}`}
            onMouseEnter={() => handleDropdownMouseEnter('about-pamela')}
            onMouseLeave={() => handleDropdownMouseLeave('about-pamela')}
          >
            <button
              type="button"
              className={`nav-dropdown-trigger ${
                location.pathname === '/services' ? 'active' : ''
              }`}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'about-pamela'}
              onClick={() => {
                if (isMobileViewport) toggleDropdown('about-pamela');
              }}
            >
              About Pamela
              <span className="nav-dropdown-caret" aria-hidden="true" />
            </button>
            <div className="nav-dropdown-menu">
              <div className="nav-dropdown-section-label">Modalities</div>
              <a
                href="/services#integrated-neuro-somatic"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'integrated-neuro-somatic', '/services')}
              >
                Integrated Neuro-Somatic Session
              </a>
              <a
                href="/services#gyrotonic-method"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'gyrotonic-method', '/services')}
              >
                Gyrotonic® Method
              </a>
              <a
                href="/services#classical-pilates"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'classical-pilates', '/services')}
              >
                Classical Pilates
              </a>
              <a
                href="/services#innerdialogue"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'innerdialogue', '/services')}
              >
                InnerDialogue™
              </a>
              <a
                href="/services#beinghuman-constellation"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'beinghuman-constellation', '/services')}
              >
                BeingHuman Constellation Work
              </a>
              <a
                href="/services#beinghuman-cards"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'beinghuman-cards', '/services')}
              >
                BeingHuman Card Readings
              </a>
              <a
                href="/services#craniosacral"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'craniosacral', '/services')}
              >
                Craniosacral Therapy (Upledger®)
              </a>
              <a
                href="/services#cranial-fluid-dynamics"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'cranial-fluid-dynamics', '/services')}
              >
                Cranial Fluid Dynamics
              </a>
              <div className="nav-dropdown-divider" />
              <a
                href="/services#rates-policies"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'rates-policies', '/services')}
              >
                Rates &amp; Policies
              </a>
              <a
                href="/connect#booking"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'booking', '/connect')}
              >
                How to Book
              </a>
            </div>
          </div>

          {/* 3. Community — Practitioners, Events, Meetups */}
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
                href="/connect#community"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'community', '/connect')}
              >
                Join the Community
              </a>
              <a
                href="/connect#practitioners"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'practitioners', '/connect')}
              >
                Practitioners
              </a>
              <a
                href="/connect#events"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'events', '/connect')}
              >
                Events / Meetups
              </a>
              <a
                href="/connect#contact"
                className="nav-dropdown-link"
                onClick={(e) => handleAnchorClick(e, 'contact', '/connect')}
              >
                Contact
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
