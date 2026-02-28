import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import BookingSection from '../components/BookingSection';
import './Home.css';

// Phase 1: Content only. Replace with the Amazon link Pamela provided when she sends it.
const AMAZON_BOOK_URL = 'https://www.amazon.com/dp/PLACEHOLDER';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollTo || (location.hash ? location.hash.slice(1) : null);
    if (scrollToId && typeof window !== 'undefined') {
      const el = document.getElementById(scrollToId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.state?.scrollTo, location.hash]);

  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Hero Section */}
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

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 1. THE BOOK – Spiritual Dealer */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="home-book-section" id="book">
        <div className="home-book-gradient" />
        <div className="container">
          <div className="home-book-content">
            <div className="home-book-cover-wrapper">
              <img
                src="/The%20book.png"
                alt="Spiritual Dealer book cover by Pamela Shore"
                className="home-book-cover"
              />
            </div>
            <div className="home-book-text">
              <h2 className="home-section-title">The Book – Spiritual Dealer</h2>

              {/* Book intro */}
              <p className="home-book-intro-large">
                Many of us move through life with a quiet sense that something is &quot;off.&quot;
              </p>
              <p>
                It may appear as physical pain no doctor can fully explain, emotional weight that never seems to lift, or a
                feeling of disconnection even when surrounded by others. You try everything you&apos;re told should work —
                medication, therapy, self-help — yet something still feels unresolved.
              </p>
              <p>
                I know this place intimately. I&apos;ve lived it.
              </p>
              <p className="home-book-empowerment">
                When everything I tried seemed to fail, I turned toward alternative and metaphysical healing methods — not
                because I was searching for something magical, but because I was searching for truth. What I discovered opened
                a path I didn&apos;t believe was possible.
              </p>
              <p>
                In <em>Spiritual Dealer</em>, I share my personal journey through these healing modalities — what worked, what
                didn&apos;t, and what ultimately led to real transformation.
              </p>
              <p>
                This book is an honest exploration of surrender, self-inquiry, and the courage it takes to listen to the body,
                the nervous system, and the wisdom beneath conscious awareness.
              </p>

              <h3 className="home-book-subsection-title">What the Book Explores</h3>
              <p>
                The journey moves through uncertainty, resistance, grief, and eventually clarity. Along the way, I encountered
                gifted healers, intuitive practitioners, and alternative approaches that helped me reconnect with myself in ways
                traditional systems could not. There are no quick fixes here — only truth, presence, and the understanding that
                healing unfolds when we stop trying to force it and begin to listen. Step by step, this journey revealed something
                essential: We are not broken — we are remembering.
              </p>

              <h3 className="home-book-subsection-title">An Invitation</h3>
              <p>
                Through this journey, I had the privilege of working with exceptional intuitive healers — individuals who helped
                me access my own healing and discover my unique gifts. That experience became the foundation for Spiritual Dealer.
                Spiritual Dealer was created as a community to support others on their healing journeys — bringing together many
                of the gifted practitioners who offered guidance, insight, and healing along my own path. This book is the doorway.
                The community is the continuation.
              </p>

              <p className="home-book-empowerment">
                <a href={AMAZON_BOOK_URL} target="_blank" rel="noopener noreferrer" className="home-book-amazon-link">
                  Get the book on Amazon
                </a>
              </p>
              <p className="home-book-audiobook-note">
                Audiobook coming later (not available yet).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 2. PAMELA SHORE */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="home-pamela-bio" id="pamela">
        <div className="container">
          <div className="home-pamela-content">
            <div className="home-pamela-image-wrapper">
              <img
                src="/stire.jpeg"
                alt="Pamela Shore, Founder of Spiritual Dealer"
                className="home-pamela-image"
              />
            </div>
            <div className="home-pamela-text">
              <h2 className="home-section-title">Pamela Shore</h2>
              <div className="home-pamela-bio-blocks">
                <p>
                  After years of searching for answers through countless healing modalities, I created the space I wish I had found during my own healing journey — one that honors the body&apos;s intelligence, the nervous system, and the deeper patterns shaping our lives.
                </p>
                <p>
                  My work is rooted in embodied, nervous-system-based processes that support regulation, clarity, and lasting change. Healing is not linear, and awareness alone is not enough — the body must be included for true integration to occur.
                </p>
                <p>
                  This work led me to create Spiritual Dealer, a space where these modalities can be explored together.
                </p>
                <p>
                  I am certified in neuro-somatic movement and somatic practices, trained in InnerDialogue™ (non-directive processes that reveal and integrate internal patterns), and certified in GYROTONIC® and Pilates. I am also a BeingHuman Constellation facilitator, trained in constellation work that addresses spiritual, energetic, and existential dimensions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalities — Phase 1 only: Pilates, Gyrotonic, Integrated Somatic Work, InnerDialogue, BeingHuman Constellation, Constellation Card Reading */}
      <section className="home-modalities" id="modalities">
        <div className="home-modalities-gradient" />
        <div className="container">
          <h2 className="home-section-title">Modalities</h2>

          <div className="home-modality-detail">
            <h3 className="home-modality-name">Pilates</h3>
            <p className="home-modality-description">
              Pilates sessions emphasize alignment, breath, and precision to build strength while supporting balance and functional movement. Classical Pilates follows a structured order of exercises that organizes strength, alignment, and coordination through a conscious connection between mind, breath, and movement.
            </p>
          </div>

          <div className="home-modality-detail home-modality-detail-image-on-top">
            <div className="home-modality-image-wrapper">
              <img src="/3.png" alt="Gyrotonic session" className="home-modality-image" />
            </div>
            <h3 className="home-modality-name">Gyrotonic</h3>
            <p className="home-modality-description">
              GYROTONIC® is a movement system that emphasizes fluid, three-dimensional movement patterns. Unlike linear exercise approaches, GYROTONIC® works with the body&apos;s natural spiraling and circular movements, supporting spinal articulation, joint space, and overall mobility. The equipment-based sessions allow for precise, supportive movement that adapts to each person&apos;s unique needs and limitations and are suitable for all ages.
            </p>
          </div>

          <div className="home-modality-detail home-modality-detail-image-on-top">
            <div className="home-modality-image-wrapper">
              <img src="/somatic%20movment%20therapy.jpeg" alt="Integrated Somatic Work session" className="home-modality-image" />
            </div>
            <h3 className="home-modality-name">Integrated Somatic Work</h3>
            <p className="home-modality-description">
              This in-person session integrates neuro-somatic awareness, InnerDialogue-informed work, and movement through Gyrotonic® or Pilates. Internal patterns are first recognized, then physically integrated through precise, supportive movement. This approach allows change to be experienced and stabilized in real time.
            </p>
          </div>

          <div className="home-modality-detail home-modality-detail-image-on-top">
            <div className="home-modality-image-wrapper">
              <img src="/Inner.png" alt="InnerDialogue session" className="home-modality-image" />
            </div>
            <h3 className="home-modality-name">InnerDialogue</h3>
            <p className="home-modality-description">
              InnerDialogue is a non-directive process that works beneath conscious thought to reveal and integrate internal patterns influencing perception, behavior, and life direction. It is a neuro-somatic process informed by kinesiology and specific hand modes that support communication with the subconscious. The work moves toward an integration phase, allowing patterns that have been recognized to be met, organized, and included.
            </p>
          </div>

          <div className="home-modality-detail">
            <h3 className="home-modality-name">BeingHuman Constellation</h3>
            <p className="home-modality-description">
              BeingHuman constellation work is an experiential process that reveals hidden system dynamics. The work orients you to the patterns you are living inside of rather than offering prediction. This work explores deeper orders of connection beyond traditional Family Constellations, addressing spiritual, energetic, and existential dimensions.
            </p>
          </div>

          <div className="home-modality-detail">
            <h3 className="home-modality-name">Constellation Card Reading</h3>
            <p className="home-modality-description">
              BeingHuman card readings use the BeingHuman cards as a way of entering the constellation field. The cards offer symbolic imagery that reflects how different aspects of your experience are organized in the present moment. This work orients you to patterns that are active now. It is not predictive or interpretive and does not offer advice.
            </p>
          </div>
        </div>
      </section>

      {/* How To Work With Me — only 4 items */}
      <section className="home-how-to-work" id="how-to-work">
        <div className="container">
          <h2 className="home-section-title">How To Work With Me</h2>
          <ul className="home-how-to-work-list">
            <li>Book a private session</li>
            <li>Integrated neuro-somatic movement session</li>
            <li>Workshop / speaking engagement</li>
            <li>Contact / reach out</li>
          </ul>
        </div>
      </section>

      {/* Booking — after describing services; includes session + calendar links and pictures */}
      <section className="home-booking" id="booking">
        <div className="container">
          <p className="home-booking-intro">
            Ready to begin? Choose a private session, integrated neuro-somatic movement session, or reach out for workshops and speaking engagements.
          </p>
          <div className="home-booking-images">
            <img src="/1.png" alt="Pilates session" className="home-booking-thumb" />
            <img src="/3.png" alt="Gyrotonic session" className="home-booking-thumb" />
            <img src="/somatic%20movment%20therapy.jpeg" alt="Integrated somatic session" className="home-booking-thumb" />
          </div>
          <div className="home-booking-actions">
            <a href="#booking" className="home-hero-btn primary" onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}>Book a Session</a>
          </div>
          <div className="home-booking-form-wrap">
            <BookingSection />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 3. THE COMMUNITY – Spiritual Dealer */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="home-community" id="community">
        <div className="home-book-gradient" />
        <div className="container">
          <h2 className="home-section-title">The Community – Spiritual Dealer</h2>
          <div className="home-community-content">
            <div className="home-community-visual">
              <img src="/Community.png" alt="Spiritual Dealer Community" className="home-community-image" />
            </div>
            <div className="home-community-text">
              <p>
                Spiritual Dealer is more than individual sessions — it&apos;s a community of practitioners, seekers, and those committed to healing and transformation.
              </p>
              <p>
                Connect with others on similar paths, attend events and meetups, and discover practitioners who resonate with your journey. Born from lived healing experience, Spiritual Dealer brings together trusted practitioners and diverse modalities — offering pathways beyond conventional approaches and honoring that no two healing journeys are the same.
              </p>
              <p className="home-community-phase2">
                Coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
