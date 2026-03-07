import React from 'react';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import BookingSection from '../components/BookingSection';
import TypingAnimation from '../components/TypingAnimation';
import { FaGlobe, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import './Home.css';

const communitySocialLinks = [
  { href: 'https://www.spiritualdealer.com/pamelashore', Icon: FaGlobe, label: 'Website (Pamela Shore)' },
  { href: 'https://www.instagram.com/spiritualdealer222', Icon: FaInstagram, label: 'Instagram' },
  { href: 'https://www.facebook.com/SpiritualDealer', Icon: FaFacebook, label: 'Facebook (Spiritual Dealer)' },
  { href: 'https://www.facebook.com/pamela.shore', Icon: FaFacebook, label: 'Facebook (Pamela Shore)' },
  { href: 'https://www.tiktok.com/@spiritualdealer222', Icon: SiTiktok, label: 'TikTok' },
  { href: 'https://www.linkedin.com/in/pamelashore', Icon: FaLinkedin, label: 'LinkedIn' },
];

const Home = () => {
  const [expandedModalities, setExpandedModalities] = React.useState({});
  const toggleModality = (id) => {
    setExpandedModalities((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* ========== SECTION 1 — BOOK ========== */}
      <section className="home-book-section" id="book">
        <div className="home-book-gradient" />
        <div className="container">
          <div className="home-book-content">
            <div className="home-book-cover-wrapper">
              <img src="/The%20book.png" alt="Spiritual Dealer book cover" className="home-book-cover" />
            </div>
            <div className="home-book-text">
              <h2 className="home-section-title">Book</h2>
              <h3 className="home-book-title">Spiritual Dealer</h3>
              <p className="home-book-intro-large">A Memoir of Healing, Exploration, and Embodied Transformation</p>
              <p>
                Spiritual Dealer is a memoir about searching for answers when traditional paths to healing were not enough.
                Through personal experience and conversations with practitioners across many disciplines, Pamela Shore explores how trauma, inherited patterns, and life experiences shape the body — and how those patterns can be recognized, understood, and transformed.
              </p>
              <a
                href="https://a.co/d/08ugNFAj"
                target="_blank"
                rel="noopener noreferrer"
                className="home-hero-btn primary home-book-order-btn"
              >
                Order the Book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2 — PAMELA SHORE ========== */}
      {/* About Pamela */}
      <section className="home-pamela-bio" id="pamela">
        <div className="container">
          <div className="home-pamela-content">
            <div className="home-pamela-image-wrapper">
              <img
                src="/stire.jpeg"
                alt="Pamela Shore with book, Founder of Spiritual Dealer"
                className="home-pamela-image"
              />
            </div>
            <div className="home-pamela-text">
              <h2 className="home-section-title">Pamela Shore</h2>
              <p className="home-pamela-subtitle">
                Author • Neuro-Somatic Movement Practitioner • Founder
              </p>
              <div className="home-pamela-bio-blocks">
                <p>
                  I am the author of Spiritual Dealer and the founder of this community.
                </p>
                <p>
                  My professional foundation began in movement and embodied healing, where I am classically certified in Pilates through the Romana lineage and certified in the GYROTONIC® Method. I have also owned and operated my own studio for more than two decades.
                </p>
                <p>
                  My path expanded beyond movement after navigating personal trauma and searching for deeper healing. This led me to explore integrative disciplines including InnerDialogue™ and BeingHuman Constellation Work™ with Solihin Thom, along with CranialSacral Therapy through the Upledger approach.
                </p>
                <p>
                  Through these studies I developed a deeper understanding of how emotional history, lived experience, and inherited family dynamics influence the nervous system and the expression of DNA and RNA through epigenetic processes.
                </p>
                <p>
                  Today I offer private sessions, workshops, and speaking engagements that integrate movement, neuro-somatic work, and constellation-based methods to help clients uncover patterns the body may be holding and support the process of releasing and reorganizing those patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="home-credentials">
        <div className="container">
          <h2 className="home-section-title">Credentials & Training</h2>
          <div className="home-credentials-grid">
            <div className="home-credential-item">
              <h3 className="home-credential-title">Neuro-Somatic Movement Practitioner</h3>
              <p className="home-credential-desc">
                Certified in nervous-system-based movement and somatic practices
              </p>
            </div>
            <div className="home-credential-item">
              <h3 className="home-credential-title">InnerDialogue™ Practitioner</h3>
              <p className="home-credential-desc">
                Trained in non-directive processes that reveal and integrate internal patterns
              </p>
            </div>
            <div className="home-credential-item">
              <h3 className="home-credential-title">GYROTONIC® & Pilates Instructor</h3>
              <p className="home-credential-desc">
                Certified in movement modalities that support spinal articulation and efficient movement
              </p>
            </div>
            <div className="home-credential-item">
              <h3 className="home-credential-title">BeingHuman Constellation Facilitator</h3>
              <p className="home-credential-desc">
                Trained in constellation work that addresses spiritual, energetic, and existential dimensions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work with me — Workshops, Speaking, Practitioner */}
      <section className="home-how-to-work" id="how-to-work">
        <div className="container">
          <h2 className="home-h2">Work with me</h2>
          <div className="home-how-to-work-buttons">
            <button type="button" className="home-work-btn" onClick={() => scrollTo('booking')}>Workshops</button>
            <button type="button" className="home-work-btn" onClick={() => scrollTo('booking')}>Speaking</button>
            <button type="button" className="home-work-btn" onClick={() => scrollTo('booking')}>Practitioner sessions</button>
            <button type="button" className="home-work-btn" onClick={() => scrollTo('booking')}>Work with me</button>
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section className="home-modalities" id="modalities">
        <div className="home-modalities-gradient" />
        <div className="container">
          <h2 className="home-section-title">Modalities</h2>
          
          {/* GYROTONIC® / GYROKINESIS® */}
          <div className="home-modality-detail">
            <h3 className="home-modality-name">GYROTONIC® / GYROKINESIS®</h3>
            <p className="home-modality-description">
              Fluid movement systems that mobilize the spine, improve coordination, and integrate breath with movement.
            </p>
            <p className="home-modality-description">
              These methods develop strength, flexibility, and nervous system balance through rhythmic, three-dimensional movement patterns.
            </p>
            <button
              type="button"
              className="home-hero-btn secondary home-modality-learn-btn"
              onClick={() => toggleModality('gyrotonic')}
              aria-expanded={!!expandedModalities.gyrotonic}
            >
              {expandedModalities.gyrotonic ? 'Show less' : 'Learn More'}
            </button>

            <div className={`home-modality-expanded ${expandedModalities.gyrotonic ? 'home-modality-expanded--open' : ''}`} id="gyrotonic-detail">
              <p className="home-modality-description">
                The GYROTONIC® and GYROKINESIS® movement systems mobilize the spine, strengthen the body, and coordinate breath with movement.
              </p>
              <p className="home-modality-description">
                Through circular and spiraling patterns, the body releases tension, improves range of motion, and supports healthy joint function while building strength and flexibility simultaneously.
              </p>
              <p className="home-modality-description">
                GYROTONIC® sessions use specialized equipment that guides movement through full spinal articulation while strengthening and lengthening the body.
              </p>
              <p className="home-modality-description">
                GYROKINESIS® classes are performed on a stool or mat using body weight and breath to create rhythmic sequences that stimulate circulation, mobilize joints, and support nervous system regulation.
              </p>
              <p className="home-modality-description"><strong>These methods support:</strong></p>
              <ul className="home-book-list">
                <li>Spinal mobility</li>
                <li>Joint health</li>
                <li>Breath integration</li>
                <li>Nervous system balance</li>
                <li>Coordination and strength</li>
                <li>Posture and body awareness</li>
              </ul>
              <p className="home-modality-description">
                Working with spiraling and circular movement patterns allows the body to release long-held tension and develop more efficient movement.
              </p>
              <p className="home-modality-format">Format: In Person</p>
              <a
                href="#booking"
                className="home-hero-btn primary"
                onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Book Session
              </a>
            </div>
          </div>

          {/* Pilates */}
          <div className="home-modality-detail">
            <h3 className="home-modality-name">Pilates</h3>
            <p className="home-modality-description">
              A movement method that strengthens the body, improves posture, and develops coordination between breath, alignment, and muscular support.
            </p>
            <button
              type="button"
              className="home-hero-btn secondary home-modality-learn-btn"
              onClick={() => toggleModality('pilates')}
              aria-expanded={!!expandedModalities.pilates}
            >
              {expandedModalities.pilates ? 'Show less' : 'Learn More'}
            </button>

            <div className={`home-modality-expanded ${expandedModalities.pilates ? 'home-modality-expanded--open' : ''}`} id="pilates-detail">
              <p className="home-modality-description">
                Pilates is a system of movement designed to develop strength, flexibility, and body awareness.
              </p>
              <p className="home-modality-description">
                The method emphasizes alignment, control, and coordination between breath and movement to restore balance within the musculoskeletal system.
              </p>
              <p className="home-modality-description">
                Exercises performed on specialized equipment or a mat strengthen the deep stabilizing muscles that support the spine and pelvis.
              </p>
              <p className="home-modality-description">
                Rather than isolating muscles, Pilates trains the body as an integrated system, improving coordination, posture, and movement efficiency.
              </p>
              <p className="home-modality-description"><strong>Pilates supports:</strong></p>
              <ul className="home-book-list">
                <li>Core strength</li>
                <li>Spinal alignment</li>
                <li>Postural balance</li>
                <li>Joint stability</li>
                <li>Mobility and control</li>
                <li>Injury prevention and rehabilitation</li>
              </ul>
              <p className="home-modality-description">
                Over time, Pilates helps individuals move with greater strength, awareness, and ease.
              </p>
              <p className="home-modality-format">Format: In Person</p>
              <a
                href="#booking"
                className="home-hero-btn primary"
                onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Book Session
              </a>
            </div>
          </div>

          {/* Integrated Neuro-Somatic Movement Session */}
          <div className="home-modality-detail">
            <h3 className="home-modality-name">Integrated Neuro-Somatic Movement Session</h3>
            <p className="home-modality-description">
              A session that integrates movement with neuro-somatic techniques to help reveal and release patterns the body may be holding physically, emotionally, and neurologically.
            </p>
            <p className="home-modality-description">
              By combining Pilates or GYROTONIC® movement with somatic awareness and kinesiology, these sessions support greater alignment, nervous system regulation, and embodied transformation.
            </p>
            <button
              type="button"
              className="home-hero-btn secondary home-modality-learn-btn"
              onClick={() => toggleModality('integrated')}
              aria-expanded={!!expandedModalities.integrated}
            >
              {expandedModalities.integrated ? 'Show less' : 'Learn More'}
            </button>

            <div className={`home-modality-expanded ${expandedModalities.integrated ? 'home-modality-expanded--open' : ''}`} id="integrated-session-detail">
              <p className="home-modality-description">
                Integrated Neuro-Somatic Movement Sessions combine movement practices with neuro-somatic processes to address not only how the body moves, but what the body may be holding.
              </p>
              <p className="home-modality-description">
                Through movement, kinesiology, and somatic awareness, patterns influencing posture, tension, and recurring physical challenges can begin to emerge.
              </p>
              <p className="home-modality-description">
                Often the body carries emotional experiences, survival responses, and inherited patterns that influence movement and nervous system regulation without conscious awareness.
              </p>
              <p className="home-modality-description">
                When these patterns are recognized, the work moves into integration through guided movement and somatic techniques, allowing the body to reorganize physically rather than simply understanding the pattern intellectually.
              </p>
              <p className="home-modality-description"><strong>Sessions may include:</strong></p>
              <ul className="home-book-list">
                <li>GYROTONIC® or Pilates movement</li>
                <li>Somatic movement practices</li>
                <li>Kinesiology</li>
                <li>Cranial work</li>
                <li>Breath integration</li>
                <li>Nervous system regulation techniques</li>
              </ul>
              <p className="home-modality-description">
                This integrated approach helps release long-held tension, improve coordination, and support the body&apos;s natural capacity for balance and resilience.
              </p>
              <p className="home-modality-format">Format: In Person</p>
              <a
                href="#booking"
                className="home-hero-btn primary"
                onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Book Session
              </a>
            </div>
          </div>

          {/* InnerDialogue™ */}
          <div className="home-modality-detail">
            <h3 className="home-modality-name">InnerDialogue™</h3>
            <p className="home-modality-description">
              InnerDialogue is a non-directive process that works beneath conscious thought to reveal and integrate internal patterns influencing perception, behavior, and life direction. Unlike traditional therapy, InnerDialogue doesn&apos;t require you to relive past experiences or engage in analysis. Instead, it supports recognition and resolution at a deeper level, allowing understanding to emerge naturally.
            </p>
            <p className="home-modality-description">
              This modality has been transformative in my own healing journey and continues to be a cornerstone of my practice. It offers a way to access and shift patterns that may have felt inaccessible through other approaches.
            </p>
            <p className="home-modality-description">
              InnerDialogue is a neuro-somatic process informed by kinesiology and specific hand modes that support communication with the subconscious. The work moves toward an integration phase, allowing patterns that have been recognized to be met, organized, and included.
            </p>
          </div>

          {/* BeingHuman Constellation Work™ */}
          <div className="home-modality-detail">
            <h3 className="home-modality-name">BeingHuman Constellation Work™</h3>
            <p className="home-modality-description">
              An experiential process that reveals hidden patterns influencing life, relationships, health, and decision-making.
            </p>
            <button
              type="button"
              className="home-hero-btn secondary home-modality-learn-btn"
              onClick={() => toggleModality('beinghuman')}
              aria-expanded={!!expandedModalities.beinghuman}
            >
              {expandedModalities.beinghuman ? 'Show less' : 'Learn More'}
            </button>

            <div className={`home-modality-expanded ${expandedModalities.beinghuman ? 'home-modality-expanded--open' : ''}`} id="beinghuman-detail">
              <p className="home-modality-description">
                BeingHuman Constellation Work, developed by Dr. Solihin Thom and Alicia Thom, is an experiential process that reveals hidden systemic patterns influencing a person&apos;s life.
              </p>
              <p className="home-modality-description">
                A constellation refers to the placement and relationship of elements within a system — whether within an individual, family, organization, or collective field.
              </p>
              <p className="home-modality-description">
                When parts of a system are misaligned or missing, repeating challenges or internal conflict can arise.
              </p>
              <p className="home-modality-description">
                These dynamics often exist beneath conscious awareness but strongly influence behavior, emotional responses, relationships, and life direction.
              </p>
              <p className="home-modality-description">
                Through this process, these patterns can be recognized and reorganized, allowing individuals to access greater clarity, alignment, and personal resources.
              </p>
              <p className="home-modality-description">
                BeingHuman Constellation Work explores the inner architecture of the human being across emotional, behavioral, relational, and spiritual dimensions.
              </p>
              <p className="home-modality-format">Format: Live or Zoom</p>
              <a
                href="#booking"
                className="home-hero-btn primary"
                onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Book Session
              </a>
            </div>
          </div>

          {/* BeingHuman Constellation Card Reading */}
          <div className="home-modality-detail">
            <h3 className="home-modality-name">BeingHuman Constellation Card Reading</h3>
            <p className="home-modality-description">
              A structured reflective system that reveals deeper patterns shaping your life through five realms of human experience.
            </p>
            <button
              type="button"
              className="home-hero-btn secondary home-modality-learn-btn"
              onClick={() => toggleModality('cardReading')}
              aria-expanded={!!expandedModalities.cardReading}
            >
              {expandedModalities.cardReading ? 'Show less' : 'Learn More'}
            </button>

            <div className={`home-modality-expanded ${expandedModalities.cardReading ? 'home-modality-expanded--open' : ''}`} id="card-reading-detail">
              <p className="home-modality-description">
                BeingHuman Constellation Card Readings use a structured system developed by Dr. Solihin Thom to reveal patterns influencing your current life experience and the direction that may support meaningful change.
              </p>
              <p className="home-modality-description">
                Unlike tarot or oracle cards used for prediction, these cards are a reflective tool designed to illuminate a person&apos;s present state across multiple dimensions of being.
              </p>

              <h4 className="home-book-subsection-title">The Five Realms of Being</h4>
              <p className="home-modality-description">
                A standard reading uses five cards representing fundamental realms of experience:
              </p>
              <ul className="home-book-list home-modality-realm-list">
                <li><strong>Material</strong> — Physical reality, the body, DNA, and tangible life conditions.</li>
                <li><strong>Vegetal</strong> — Feelings, nourishment, growth, and emotional life.</li>
                <li><strong>Instinctual</strong> — Behavior, habits, and survival responses.</li>
                <li><strong>Human</strong> — Mindfulness, beliefs, and meaning-making.</li>
                <li><strong>Portal</strong> — The threshold through which interpretation is surrendered to the greater Implicate Reality — God, Source, or the Sacred as one understands it.</li>
              </ul>
              <p className="home-modality-description">
                Cards are placed vertically, revealing the relationship between these realms.
              </p>

              <h4 className="home-book-subsection-title">The Reading Process</h4>
              <p className="home-modality-description">
                A reading begins with a clear question or intention.<br />
                Cards are drawn for each realm, revealing the pattern influencing the person or situation.<br />
                Often the full picture becomes clear only once all five cards are revealed together.
              </p>
              <p className="home-modality-description">
                <strong>Additional cards may include:</strong>
              </p>
              <ul className="home-book-list">
                <li><strong>Clue Card</strong> – offering nuance or summary insight</li>
                <li><strong>Help Card</strong> – revealing the step that supports integration or change</li>
              </ul>
              <p className="home-modality-description">
                BeingHuman Constellation Card Readings are not predictive.<br />
                They are designed to support awareness, self-discovery, and meaningful transformation.
              </p>
              <p className="home-modality-format">Format: Live or Zoom</p>
              <a
                href="#booking"
                className="home-hero-btn primary"
                onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Book Session
              </a>
            </div>
          </div>

          {/* Cranial Fluid Dynamics */}
          <div className="home-modality-detail">
            <h3 className="home-modality-name">Cranial Fluid Dynamics</h3>
            <p className="home-modality-description">
              Cranial Fluid Dynamics uses the cranial fluid as a listening medium for how the nervous system is organized. The work attends to subtle changes in the fluid system as patterns of holding and organization become apparent.
            </p>
            <p className="home-modality-description">
              Through this listening, the system is given space to reorganize without force. The work respects the body&apos;s own timing and capacity for change.
            </p>
          </div>

          {/* Kinesiology */}
          <div className="home-modality-detail home-modality-detail-image-on-top">
            <div className="home-modality-image-wrapper">
              <img src="/kiniseiology.jpeg" alt="Kinesiology session" className="home-modality-image" />
            </div>
            <h3 className="home-modality-name">Kinesiology</h3>
            <p className="home-modality-description">
              Kinesiology is integrated within InnerDialogue work as a tool for accessing information from the body&apos;s intelligence. Through muscle testing and specific protocols, kinesiology supports communication with the subconscious and helps identify patterns, blocks, and pathways for integration.
            </p>
            <p className="home-modality-description">
              This approach allows the body itself to guide the process, revealing what is ready to be addressed and what needs to be honored in its own timing.
            </p>
          </div>
        </div>
      </section>

      {/* Booking — images + form */}
      <section className="home-booking" id="booking">
        <div className="container">
          <p className="home-booking-intro">
            Ready to begin? Book a private session, integrated neuro-somatic movement session, or reach out for workshops and speaking.
          </p>
          <div className="home-booking-images">
            <img src="/pilates.png" alt="Pilates" className="home-booking-thumb" />
            <img src="/3.png" alt="GYROTONIC®" className="home-booking-thumb" />
            <img src="/integrated%20Somatic.jpeg" alt="Integrated somatic" className="home-booking-thumb" />
          </div>
          <div className="home-booking-form-wrap">
            <BookingSection />
          </div>
        </div>
      </section>

      {/* ========== SECTION 3 — COMMUNITY ========== */}
      <section className="home-book-community" id="community">
        <div className="home-book-gradient" />
        <div className="container">
          <div className="home-book-community-content">
            <h2 className="home-section-title">Community</h2>
            <div className="home-community-visual">
              <img src="/Community.png" alt="Spiritual Dealer Community" className="home-community-image" />
            </div>
            <p className="home-community-subtitle">The Spiritual Dealer Community</p>
            <div className="home-book-community-text">
              <p>
                Spiritual Dealer began as my personal search for answers when traditional paths to healing were not enough.
                Along that journey I discovered many powerful healing disciplines — yet they often exist across separate traditions and communities with little connection or guidance for those seeking help.
              </p>
              <p>
                The Spiritual Dealer Community is emerging as a platform where seekers and practitioners can come together to explore healing disciplines, share knowledge, and better understand the deeper patterns shaping health, behavior, and life experience.
              </p>
            </div>
            <div className="home-community-join" id="join-community">
              <h3 className="home-book-subsection-title">Practitioners</h3>
              <p>Curated practitioner network — coming soon.</p>
            </div>
            <div className="home-community-join">
              <h3 className="home-book-subsection-title">Future modalities (Phase 2)</h3>
              <p>Additional modalities and resources — coming soon.</p>
            </div>
            <div className="home-community-contact">
              <h3 className="home-book-subsection-title">Join &amp; Contact</h3>
              <p>Stay connected for updates. For questions or to join the community, reach out via the booking form or connect below.</p>
              <a
                href="#booking"
                className="home-hero-btn secondary"
                onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Contact
              </a>
              <div className="home-community-links">
                {communitySocialLinks.map(({ href, Icon, label }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="home-community-link" aria-label={label}>
                    <Icon className="home-community-link-icon" aria-hidden />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Reassurance */}
      <section className="home-reassurance">
        <div className="home-reassurance-gradient" />
        <div className="container">
          <div className="home-reassurance-content">
            <TypingAnimation
              texts={[
                'You are not broken.',
                'You are not alone.',
                'Your healing is possible.'
              ]}
              speed={80}
              delay={800}
              className="typing-animation-container"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
