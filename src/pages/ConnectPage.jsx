import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import BookingSection from '../components/BookingSection';
import './ConnectPage.css';

const ConnectPage = () => {
  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Hero Section */}
      <section className="connect-hero">
        <div className="connect-hero-gradient" />
        <div className="container">
          <div className="connect-hero-content">
            <h1 className="connect-hero-title">Connect</h1>
            <p className="connect-hero-subtitle">
              Book a session, join the community, or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="connect-booking" id="booking">
        <div className="container">
          <BookingSection />
        </div>
      </section>

      {/* Rates & Policies Section */}
      <section className="connect-rates" id="rates">
        <div className="connect-rates-gradient" />
        <div className="container">
          <div className="connect-rates-content">
            <h2 className="connect-section-title">Rates &amp; Policies</h2>
            
            <div className="connect-rates-section">
              <h3 className="connect-rates-heading">Session Rates</h3>
              <p className="connect-rates-text">
                Please contact directly for current session rates.
              </p>
            </div>

            <div className="connect-rates-section">
              <h3 className="connect-rates-heading">Payment</h3>
              <p className="connect-rates-text">
                Payment is due at the time of booking unless otherwise arranged.
              </p>
            </div>

            <div className="connect-rates-section">
              <h3 className="connect-rates-heading">Cancellation Policy</h3>
              <p className="connect-rates-text">
                A minimum of 24 hours&apos; notice is required for cancellations or rescheduling.
                Sessions canceled with less than 24 hours&apos; notice may be charged in full.
              </p>
            </div>

            <div className="connect-rates-section">
              <h3 className="connect-rates-heading">Format</h3>
              <ul className="connect-rates-list">
                <li>In-person sessions available</li>
                <li>Select sessions available via Zoom (where applicable)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="connect-community" id="community">
        <div className="container">
          <div className="connect-community-content">
            <h2 className="connect-section-title">Join the Community</h2>
            <div className="connect-community-text">
              <p>
                Spiritual Dealer is more than individual sessions — it&apos;s a community of practitioners,
                seekers, and those committed to healing and transformation.
              </p>
              <p>
                Connect with others on similar paths, attend events and meetups, and discover practitioners
                who resonate with your journey.
              </p>
            </div>
            <div className="connect-community-coming-soon">
              <p className="connect-coming-soon-text">Community features coming soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioners Section */}
      <section className="connect-practitioners" id="practitioners">
        <div className="connect-contact-gradient" />
        <div className="container">
          <div className="connect-practitioners-content">
            <h2 className="connect-section-title">Practitioners</h2>
            <div className="connect-practitioners-text">
              <p>
                Spiritual Dealer brings together trusted practitioners and diverse modalities, offering
                pathways beyond conventional approaches. Each practitioner has been carefully selected
                based on their expertise, integrity, and commitment to supporting healing journeys.
              </p>
              <p>
                Discover practitioners who specialize in various healing modalities, from movement and
                bodywork to intuitive and energy-based practices.
              </p>
            </div>
            <div className="connect-practitioners-coming-soon">
              <p className="connect-coming-soon-text">Practitioner directory coming soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events / Meetups Section */}
      <section className="connect-events" id="events">
        <div className="container">
          <div className="connect-events-content">
            <h2 className="connect-section-title">Events / Meetups</h2>
            <div className="connect-events-text">
              <p>
                Join us for community gatherings, workshops, and events designed to support connection,
                learning, and shared exploration of healing modalities.
              </p>
              <p>
                These gatherings provide opportunities to meet practitioners, connect with others on
                similar paths, and deepen your understanding of embodied healing practices.
              </p>
            </div>
            <div className="connect-events-coming-soon">
              <p className="connect-coming-soon-text">Upcoming events and meetups coming soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="connect-contact" id="contact">
        <div className="connect-contact-gradient" />
        <div className="container">
          <div className="connect-contact-content">
            <h2 className="connect-section-title">Get in Touch</h2>
            <div className="connect-contact-text">
              <p>
                Have questions about sessions, modalities, or how to get started?
                Use the booking form above or reach out directly.
              </p>
              <p>
                For press requests, interviews, speaking engagements, or collaboration inquiries,
                please use the booking form and specify your request in the message field.
              </p>
            </div>
            <div className="connect-contact-cta">
              <Link to="/services" className="connect-cta-button">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConnectPage;
