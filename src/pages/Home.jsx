import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import BookingSection from '../components/BookingSection';
import './Home.css';

// Replace with your actual Amazon book link when available
const AMAZON_BOOK_URL = 'https://www.amazon.com/dp/placeholder';

const MODALITIES_LIST = [
  'Pilates',
  'Gyrotonic',
  'Integrated Somatic Work',
  'Inner Dialogue',
  'Constellation',
  'Constellation Card Reading',
];

const Home = () => {
  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-gradient" />
        <div className="container">
          <div className="home-hero-content">
            <h1 className="home-hero-title">Welcome to Spiritual Dealer</h1>
            <p className="home-hero-description">
              Healing, transformation, and community through alternative and metaphysical practices.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Section 1: The Book ═══ */}
      <section className="home-book-section home-section-one" id="book">
        <div className="home-book-gradient" />
        <div className="container">
          <h2 className="home-section-title">The Book</h2>
          <div className="home-book-content home-book-section-one-inner">
            <div className="home-book-cover-wrapper">
              <img
                src={`${process.env.PUBLIC_URL || ''}/The%20book.png`}
                alt="Spiritual Dealer — The Book by Pamela Shore"
                className="home-book-cover"
              />
            </div>
            <div className="home-book-text">
              <p className="home-book-intro-large">
                <em>Spiritual Dealer</em> is an honest exploration of healing through alternative and metaphysical practices — a personal journey of surrender, self-inquiry, and the courage to listen to the body and the wisdom beneath conscious awareness.
              </p>
              <p>
                In this book, I share my journey through these healing modalities — what worked, what didn&apos;t, and what ultimately led to real transformation. It is an offering for those ready to listen, not only to a story, but to their own inner awareness.
              </p>
              <p className="home-book-audio-note">The audio version is coming later.</p>
              <a
                href={AMAZON_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="home-cta-btn home-cta-primary"
              >
                Order on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Section 2: Pamela Shore ═══ */}
      <section className="home-pamela-bio home-section-two" id="pamela">
        <div className="container">
          <h2 className="home-section-title">Pamela Shore</h2>
          <div className="home-pamela-content">
            <div className="home-pamela-image-wrapper">
              <img
                src={`${process.env.PUBLIC_URL || ''}/stire.jpeg`}
                alt="Pamela Shore — Author and Founder of Spiritual Dealer"
                className="home-pamela-image"
              />
            </div>
            <div className="home-pamela-text">
              <p>
                I am the <strong>author</strong> of <em>Spiritual Dealer</em> and the founder of this community. I am <strong>available for workshops &amp; speaking</strong>, and I work as a <strong>practitioner</strong> in the modalities listed below — supporting regulation, clarity, and lasting change through embodied, nervous-system-based processes.
              </p>
              <p>
                After years of searching through countless healing modalities, I created the space I wish I had found during my own healing journey — one that honors the body&apos;s intelligence, the nervous system, and the deeper patterns shaping our lives.
              </p>
            </div>
          </div>

          {/* How to Work With Me */}
          <div className="home-how-to-work">
            <h3 className="home-subsection-title">How to Work With Me</h3>
            <p className="home-how-to-work-intro">Book a session, request a workshop or speaking engagement, or get in touch for more information.</p>
            <div className="home-cta-row">
              <Link to="/connect#booking" className="home-cta-btn home-cta-primary">
                Book a Session
              </Link>
              <Link to="/connect#contact" className="home-cta-btn home-cta-secondary">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Modalities List */}
          <div className="home-modalities-list-block">
            <h3 className="home-subsection-title">Modalities</h3>
            <ul className="home-modalities-list">
              {MODALITIES_LIST.map((name) => (
                <li key={name} className="home-modality-list-item">{name}</li>
              ))}
            </ul>
          </div>

          {/* Booking Section */}
          <div className="home-booking-block" id="booking">
            <h3 className="home-subsection-title">Booking</h3>
            <p className="home-booking-intro">
              Request a session using the form below, or visit the Connect page for full details and calendar availability.
            </p>
            <div className="home-booking-cta-wrap">
              <Link to="/connect#booking" className="home-cta-btn home-cta-primary">
                Book a Session on Connect
              </Link>
            </div>
            <BookingSection />
          </div>
        </div>
      </section>

      {/* ═══ Section 3: The Community – Spiritual Dealer ═══ */}
      <section className="home-book-community home-section-three" id="community">
        <div className="home-book-gradient" />
        <div className="container">
          <h2 className="home-section-title">The Community – Spiritual Dealer</h2>
          <div className="home-community-image-wrap">
            <img
              src={`${process.env.PUBLIC_URL || ''}/Community.png`}
              alt="Spiritual Dealer Community"
              className="home-community-hero-image"
            />
          </div>
          <div className="home-book-community-content">
            <div className="home-book-community-text">
              <p>
                Spiritual Dealer is more than individual sessions — it&apos;s a community of practitioners, seekers, and those committed to healing and transformation. What we offer is <strong>coming soon</strong>.
              </p>
              <p>
                <strong>Practitioners</strong> — A directory of trusted practitioners will be available so you can connect with those who resonate with your journey.
              </p>
              <p>
                <strong>Modalities offered</strong> — Phase 2 will expand the range of modalities available through the community. Structure is in place; full details will follow as we launch.
              </p>
              <p className="home-community-coming-soon-badge">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
