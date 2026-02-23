import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      id: 'gyrotonic',
      name: 'Gyrotonic® Sessions',
      description: (
        <>
          <p>
            Gyrotonic® is a three-dimensional movement system that supports spinal mobility, joint space, strength, and coordination through circular, fluid motion. Sessions emphasize breath-supported movement and natural range of motion, allowing the body to reorganize without compression or force.
          </p>
          <p>
            Clients often experience improved posture, greater freedom in the joints, reduced tension, and smoother, more efficient movement.
          </p>
        </>
      ),
      format: 'In person',
      image: '/3.png',
      imageAlt: 'Gyrotonic® studio session with instructor guiding movement',
    },
    {
      id: 'pilates',
      name: 'Pilates Sessions',
      description: (
        <>
          <p>
            Classical Pilates is a structured movement system focused on strength, alignment, and coordination. Exercises are performed in a specific order, with transitions considered part of the work, creating continuity and flow throughout the session.
          </p>
          <p>
            Pilates supports spinal alignment, balanced strength, and efficient movement patterns. Clients often notice improved posture, reduced compensatory tension, and greater confidence in daily movement.
          </p>
        </>
      ),
      format: 'In person',
      image: '/1.png',
      imageAlt: 'Pilates reformer session with instructor',
    },
    {
      id: 'integrated-neuro-somatic',
      name: 'Integrated Neuro-Somatic & Movement Sessions',
      description: (
        <>
          <p>
            This in-person session integrates neuro-somatic awareness, InnerDialogue-informed work, and movement through Gyrotonic® or Pilates. Internal patterns are first recognized, then physically integrated through precise, supportive movement.
          </p>
          <p>
            This approach allows change to be experienced and stabilized in real time. Clients often report improved coordination, reduced pain or tension patterns, greater ease, and a deeper sense of alignment and presence.
          </p>
        </>
      ),
      format: 'Live / In person only',
      image: '/somatic%20movment%20therapy.jpeg',
      imageAlt: 'Integrated neuro-somatic and movement session',
    },
    {
      id: 'innerdialogue',
      name: 'InnerDialogue™ Sessions',
      description: (
        <>
          <p>
            InnerDialogue™ is a non-directive, neuro-somatic process that works beneath conscious thought to reveal internal patterns influencing perception, behavior, and life experience. Sessions are guided using kinesiology and specific hand mudras, which act as a symbolic language allowing the body to communicate directly. Once the internal narrative or pattern is revealed, the session moves into a treatment and integration phase. Depending on what the system is asking for, this may include:
          </p>
          <ul>
            <li>Cranial therapy</li>
            <li>Acupressure</li>
            <li>Other gentle, body-based interventions</li>
          </ul>
          <p>
            This allows the nervous system to settle and the recognized pattern to integrate physically, not just cognitively. Clients often experience clarity, internal reorganization, and lasting shifts in how they feel and respond.
          </p>
        </>
      ),
      format: 'Live or Zoom',
      image: '/inner.png',
      imageAlt: 'InnerDialogue™ session',
    },
    {
      id: 'beinghuman',
      name: 'BeingHuman Constellation Sessions & Card Readings',
      description: (
        <>
          <p>
            BeingHuman Constellation work offers insight into how a person&apos;s experience is organized in the present moment. Using the BeingHuman cards, sessions reveal patterns across multiple levels—such as inherited influences, emotional states, instinctual responses, and how one relates to life and meaning. Card readings provide orientation and clarity around what is active now and what is asking to shift. This process is not predictive or interpretive; it allows patterns to be seen so understanding can emerge naturally. Sessions may stand alone or serve as an entry point into deeper work.
          </p>
        </>
      ),
      format: 'Live or Zoom',
      image: '/BeingHuman.png',
      imageAlt: 'BeingHuman Constellation session',
    },
  ];

  return (
    <div className="App" id="top">
      <HeaderNav />

      {/* Hero / Intro */}
      <section className="services-hero">
        <div className="services-hero-gradient" />
        <div className="container">
          <div className="services-hero-content">
            <p className="services-kicker">Work With Me</p>
            <h1 className="services-title">Book a Session</h1>
            <p className="services-intro">
              Clear, intentional offerings designed to support your healing journey.
              <br />
              Each session is guided with care and tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services — exact text and images */}
      <section className="services-groups" id="integrated-neuro-somatic">
        <div className="container">
          <h2 className="services-group-title">Services</h2>
          <div className="services-list">
            {services.map((service) => (
              <article key={service.id} id={service.id} className="service-card">
                <div className="service-card-layout">
                  {service.image && (
                    <div className="service-image-wrapper">
                      <div className="service-image-inner">
                        <img
                          src={service.image}
                          alt={service.imageAlt || service.name}
                          className="service-image"
                        />
                      </div>
                    </div>
                  )}
                  <div className="service-content">
                    <header className="service-card-header">
                      <h3 className="service-name">{service.name}</h3>
                      <span className="service-format">Format: {service.format}</span>
                    </header>
                    <div className="service-description-block">
                      {service.description}
                    </div>
                    <div className="service-cta-row">
                      <Link to="/connect#booking" className="service-cta-button">
                        Book a Session
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section className="services-modalities-section" id="modalities">
        <div className="container">
          <h2 className="services-section-title">Modalities</h2>
          
          {/* Gyrotonic® Method */}
          <div className="services-modality-item" id="gyrotonic-method">
            <h3 className="services-modality-name">Gyrotonic® Method</h3>
            <p className="services-modality-description">
              GYROTONIC® is a movement system that emphasizes fluid, three-dimensional movement patterns.
              Unlike linear exercise approaches, GYROTONIC® works with the body&apos;s natural spiraling
              and circular movements, supporting spinal articulation, joint space, and overall mobility.
              The equipment-based sessions allow for precise, supportive movement that adapts to each
              person&apos;s unique needs and limitations and are suitable for all ages.
            </p>
            <p className="services-modality-format"><strong>Format:</strong> In person.</p>
          </div>

          {/* Classical Pilates */}
          <div className="services-modality-item" id="classical-pilates">
            <h3 className="services-modality-name">Classical Pilates</h3>
            <p className="services-modality-description">
              Pilates sessions emphasize alignment, breath, and precision to build strength while
              supporting balance and functional movement. Classical Pilates follows a structured order
              of exercises that organizes strength, alignment, and coordination through a conscious
              connection between mind, breath, and movement.
            </p>
            <p className="services-modality-format"><strong>Format:</strong> In person.</p>
          </div>

          {/* InnerDialogue™ */}
          <div className="services-modality-item" id="innerdialogue">
            <h3 className="services-modality-name">InnerDialogue™</h3>
            <p className="services-modality-description">
              InnerDialogue is a non-directive process that works beneath conscious thought to reveal
              and integrate internal patterns influencing perception, behavior, and life direction.
              Unlike traditional therapy, InnerDialogue doesn&apos;t require you to relive past
              experiences or engage in analysis. Instead, it supports recognition and resolution at a
              deeper level, allowing understanding to emerge naturally. InnerDialogue is a neuro-somatic
              process informed by kinesiology and specific hand modes that support communication with
              the subconscious.
            </p>
            <p className="services-modality-format"><strong>Format:</strong> Live or Zoom.</p>
          </div>

          {/* BeingHuman Constellation Work */}
          <div className="services-modality-item" id="beinghuman-constellation">
            <h3 className="services-modality-name">BeingHuman Constellation Work</h3>
            <p className="services-modality-description">
              BeingHuman constellation work is an experiential process that reveals hidden system
              dynamics. The work orients you to the patterns you are living inside of rather than
              offering prediction. This work explores deeper orders of connection beyond traditional
              Family Constellations, addressing spiritual, energetic, and existential dimensions.
            </p>
            <p className="services-modality-format"><strong>Format:</strong> Zoom and onsite / live.</p>
          </div>

          {/* BeingHuman Card Readings */}
          <div className="services-modality-item" id="beinghuman-cards">
            <h3 className="services-modality-name">BeingHuman Card Readings</h3>
            <p className="services-modality-description">
              BeingHuman card readings use the BeingHuman cards as a way of entering the constellation
              field. The cards offer symbolic imagery that reflects how different aspects of your
              experience are organized in the present moment. This work orients you to patterns that
              are active now. It is not predictive or interpretive and does not offer advice.
            </p>
            <p className="services-modality-format"><strong>Format:</strong> Live or Zoom.</p>
          </div>

          {/* Craniosacral Therapy */}
          <div className="services-modality-item services-modality-item-image-on-top" id="craniosacral">
            <div className="services-modality-image-wrapper">
              <img src="/craniesacral.jpeg" alt="Craniosacral therapy session" className="services-modality-image" />
            </div>
            <h3 className="services-modality-name">Craniosacral Therapy (Upledger®)</h3>
            <p className="services-modality-description">
              Craniosacral Therapy (Upledger®) is referenced as part of the cranial therapy used in the
              integration phase of InnerDialogue-informed work. It is included where appropriate within
              neuro-somatic and movement sessions.
            </p>
            <p className="services-modality-format"><strong>Format:</strong> In-person only, incorporated as part of InnerDialogue and neuro-somatic integration work.</p>
          </div>

          {/* Cranial Fluid Dynamics */}
          <div className="services-modality-item" id="cranial-fluid-dynamics">
            <h3 className="services-modality-name">Cranial Fluid Dynamics</h3>
            <p className="services-modality-description">
              Cranial Fluid Dynamics uses the cranial fluid as a listening medium for how the nervous
              system is organized. The work attends to subtle changes in the fluid system as patterns
              of holding and organization become apparent. Through this listening, the system is given
              space to reorganize without force. The work respects the body&apos;s own timing and capacity
              for change.
            </p>
            <p className="services-modality-format"><strong>Format:</strong> In person.</p>
          </div>
        </div>
      </section>

      {/* Rates & Policies Section */}
      <section className="services-rates-section" id="rates-policies">
        <div className="container">
          <h2 className="services-section-title">Rates &amp; Policies</h2>
          <div className="services-rates-content">
            <div className="services-rates-item">
              <h3 className="services-rates-heading">Session Rates</h3>
              <p>Please contact directly for current session rates.</p>
            </div>
            <div className="services-rates-item">
              <h3 className="services-rates-heading">Payment</h3>
              <p>Payment is due at the time of booking unless otherwise arranged.</p>
            </div>
            <div className="services-rates-item">
              <h3 className="services-rates-heading">Cancellation Policy</h3>
              <p>
                A minimum of 24 hours&apos; notice is required for cancellations or rescheduling.
                Sessions canceled with less than 24 hours&apos; notice may be charged in full.
              </p>
            </div>
            <div className="services-rates-item">
              <h3 className="services-rates-heading">Format</h3>
              <ul className="services-rates-list">
                <li>In-person sessions available</li>
                <li>Select sessions available via Zoom (where applicable)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Not sure where to start */}
      <section className="services-not-sure">
        <div className="container">
          <div className="services-not-sure-inner">
            <h2 className="services-not-sure-title">Not sure where to start?</h2>
            <p>
              You don&apos;t need to know exactly what you need. If you feel unsure which session is right for you, begin
              where you feel called — clarity unfolds through the process.
            </p>
            <div className="services-not-sure-actions">
              <Link to="/connect#booking" className="service-cta-button primary">
                Book a Session
              </Link>
              <Link to="/" className="service-cta-button secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;


