import React from 'react';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import TypingAnimation from '../components/TypingAnimation';
import './Home.css';

const Home = () => {
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
              Explore multiple paths to healing and discover what resonates with your unique journey.
            </p>
          </div>
        </div>
      </section>

      {/* What is Spiritual Dealer Section */}
      <section className="home-what-is" id="about">
        <div className="container">
          <div className="home-what-is-content">
            <h2 className="home-section-title">What is Spiritual Dealer?</h2>
            <div className="home-what-is-text">
              <p>
                Spiritual Dealer is a curated healing community created to support transformation on physical, emotional, and spiritual levels.
              </p>
              <p>
                Born from lived healing experience, Spiritual Dealer brings together trusted practitioners and diverse modalities—offering pathways beyond conventional approaches and honoring that no two healing journeys are the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* It Takes a Village Section */}
      <section className="home-village">
        <div className="home-village-gradient" />
        <div className="container">
          <div className="home-village-content">
            <h2 className="home-section-title">It Takes a Village</h2>
            <div className="home-village-text">
              <p>
                Healing is not one-size-fits-all.
              </p>
              <p>
                Some paths move through the body.
                Others move through the nervous system, energy, memory, or intuition.
              </p>
              <p>
                Spiritual Dealer exists to hold space for many approaches—so you can find what truly supports your healing, growth, and self-discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pamela Shore Bio Section */}
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
              <h2 className="home-section-title">About Pamela Shore</h2>
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

      {/* The Book Section */}
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
              <h2 className="home-section-title">The Book</h2>
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
            </div>
          </div>
        </div>
      </section>

      {/* Audiobook Section */}
      <section className="home-book-section" id="audiobook">
        <div className="home-book-gradient" />
        <div className="container">
          <div className="home-book-content">
            <div className="home-book-text">
              <h2 className="home-section-title">Audiobook</h2>
              <p className="home-book-intro-large">
                A spoken journey through healing, embodiment, and lived experience.
              </p>
              <p>
                The Spiritual Dealer audiobook offers a deeply personal and embodied listening experience.
                Narrated to preserve the tone and intention of the original work, it allows the story and
                teachings to be received in a more intimate and reflective way.
              </p>
              <p>
                This is not a performance — it is a transmission of lived experience.
              </p>
              <p>
                Through personal stories and exploration across multiple healing disciplines, the audiobook
                guides listeners through themes of trauma, inherited patterns, nervous system regulation,
                and the body&apos;s innate intelligence.
              </p>
              <h3 className="home-book-subsection-title">What You&apos;ll Hear</h3>
              <ul className="home-book-list">
                <li>The role of early life experiences and lineage</li>
                <li>How patterns become embedded in the nervous system</li>
                <li>The limits of one-size-fits-all healing approaches</li>
                <li>Conversations and insights from diverse healing modalities</li>
                <li>The process of embodied integration</li>
              </ul>
              <p className="home-book-empowerment">
                Spiritual Dealer invites discernment, curiosity, and self-trust. It is an offering for
                those ready to listen — not only to a voice, but to their own inner awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Press / Media Section */}
      <section className="home-book-section" id="press-media">
        <div className="home-book-gradient" />
        <div className="container">
          <div className="home-book-content">
            <div className="home-book-text">
              <h2 className="home-section-title">Press &amp; Media</h2>
              <p className="home-book-intro-large">
                Interviews, features, and conversations exploring embodied healing.
              </p>
              <p>
                Pamela Shore&apos;s work bridges neuro-somatic awareness, movement, and metaphysical healing.
                Through interviews, written features, and collaborative discussions, she speaks about the
                integration of body-based processes, inherited patterns, and conscious awareness.
              </p>
              <p>
                Her approach emphasizes grounded, nervous-system-based transformation rather than ideology
                or prediction.
              </p>
              <h3 className="home-book-subsection-title">Topics of Conversation</h3>
              <ul className="home-book-list">
                <li>Neuro-somatic movement and embodiment</li>
                <li>The foundations of InnerDialogue™</li>
                <li>BeingHuman Constellation Work™</li>
                <li>Trauma and inherited family patterns</li>
                <li>Epigenetics and embodied awareness</li>
                <li>The philosophy behind Spiritual Dealer</li>
              </ul>
              <p>
                <em>Spiritual Dealer</em> has been discussed in conversations surrounding alternative
                healing, lineage, nervous system integration, and the evolution of personal transformation
                work. The book offers insight into diverse healing systems without elevating one above another,
                emphasizing discernment and lived experience.
              </p>
              <p>
                For press requests, interviews, speaking engagements, or collaboration inquiries,
                please use the contact form on the Connect page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="home-journey">
        <div className="container">
          <h2 className="home-section-title">The Journey</h2>
          <p className="home-journey-intro">
            Healing is not a straight line.
          </p>
          <div className="home-journey-text">
            <p>
              The journey moves through uncertainty, resistance, grief, and eventually clarity. Along the way, I encountered
              gifted healers, intuitive practitioners, and alternative approaches that helped me reconnect with myself in ways
              traditional systems could not.
            </p>
            <p>
              There are no quick fixes here — only truth, presence, and the understanding that healing unfolds when we stop
              trying to force it and begin to listen.
            </p>
            <p>
              Step by step, this journey revealed something essential: We are not broken — we are remembering.
            </p>
          </div>
        </div>
      </section>

      {/* From Book to Community */}
      <section className="home-book-community">
        <div className="home-book-gradient" />
        <div className="container">
          <div className="home-book-community-content">
            <h2 className="home-section-title">From Book to Community</h2>
            <div className="home-book-community-text">
              <p>
                Through this journey, I had the privilege of working with exceptional intuitive healers — individuals who helped
                me access my own healing and discover my unique gifts.
              </p>
              <p>
                That experience became the foundation for Spiritual Dealer.
              </p>
              <p>
                Spiritual Dealer was created as a community to support others on their healing journeys — bringing together many
                of the gifted practitioners who offered guidance, insight, and healing along my own path.
              </p>
              <p className="home-book-community-cta">
                This book is the doorway. The community is the continuation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section className="home-modalities" id="modalities">
        <div className="home-modalities-gradient" />
        <div className="container">
          <h2 className="home-section-title">Modalities</h2>
          
          {/* Gyrotonic® */}
          <div className="home-modality-detail">
            <h3 className="home-modality-name">GYROTONIC®</h3>
            <p className="home-modality-description">
              GYROTONIC® is a movement system that emphasizes fluid, three-dimensional movement patterns. Unlike linear exercise approaches, GYROTONIC® works with the body&apos;s natural spiraling and circular movements, supporting spinal articulation, joint space, and overall mobility.
            </p>
            <p className="home-modality-description">
              This practice has been essential in my understanding of how movement can support nervous system regulation and how physical patterns are connected to emotional and energetic patterns. The equipment-based sessions allow for precise, supportive movement that adapts to each person&apos;s unique needs and limitations and are suitable for all ages.
            </p>
          </div>

          {/* Classical Pilates */}
          <div className="home-modality-detail">
            <h3 className="home-modality-name">Classical Pilates</h3>
            <p className="home-modality-description">
              Pilates sessions emphasize alignment, breath, and precision to build strength while supporting balance and functional movement.
            </p>
            <p className="home-modality-description">
              Classical Pilates follows a structured order of exercises that organizes strength, alignment, and coordination through a conscious connection between mind, breath, and movement.
            </p>
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

          {/* BeingHuman Constellation Work */}
          <div className="home-modality-detail">
            <h3 className="home-modality-name">BeingHuman Constellation Work™</h3>
            <p className="home-modality-description">
              BeingHuman constellation work is an experiential process that reveals hidden system dynamics. The work orients you to the patterns you are living inside of rather than offering prediction.
            </p>
            <p className="home-modality-description">
              This work explores deeper orders of connection beyond traditional Family Constellations, addressing spiritual, energetic, and existential dimensions.
            </p>
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
