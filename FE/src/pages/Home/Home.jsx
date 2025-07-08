import React from 'react'
import { useState } from 'react'
import './Home.css'

function Home() {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('http://localhost:3000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <>
      {/* Header */}
      <header>
        <nav className="left-nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="logo">
          <img src="logo.png" alt="Amna Digital Ventures Logo" />
          <span className="logo-text"></span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Helping Small Businesses Dominate the Digital World</h1>
          <p>Customized Digital Marketing | SEO | Paid Ads | Social Growth</p>
          <a href="#contact" className="btn">
            Get a <span className="highlight">Free</span> Consultation
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome">
        <div className="welcome-container">
          <div className="welcome-logo">
            <img src="logo.png" alt="Amna Digital Ventures Logo" />
          </div>
          <div className="welcome-content">
            <h2 className="welcome-heading">
              <span className="welcome-text">Welcome to</span>
              <br />
              <span className="highlight-company">Amna Digital Ventures</span>
            </h2>
            <h3 className="welcome-subheading">
              Your Partner in Success. We specialize in helping small brands achieve sustainable growth through targeted marketing strategies, social media expertise, and data-driven campaigns.
            </h3>
            <a href="#contact" className="btn">
              Schedule a <span className="highlight">Free</span> Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="choose-us">
        <h2>Why Choose Us?</h2>
        <div className="choose-features">
          <div className="choose-box">
            <div className="choose-icon">🎯</div>
            <h3>Custom Strategies</h3>
            <p>Tailored marketing plans for every business, ensuring your unique needs are met with precision and care.</p>
          </div>
          <div className="choose-box">
            <div className="choose-icon">📊</div>
            <h3>Data-Driven Approach</h3>
            <p>We optimize based on real-time performance metrics, ensuring maximum ROI for your marketing investment.</p>
          </div>
          <div className="choose-box">
            <div className="choose-icon">🤝</div>
            <h3>Client-Centric</h3>
            <p>Your success is our priority. We maintain transparent communication and dedicated support throughout.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Explore Our Services</h2>
        <div className="features">
          <div className="feature-box">
            <h3>Social Media</h3>
            <p>Increase engagement & brand visibility</p>
          </div>
          <div className="feature-box">
            <h3>SEO & Content</h3>
            <p>Rank higher & attract organic traffic</p>
          </div>
          <div className="feature-box">
            <h3>Paid Advertising</h3>
            <p>Maximize ROI with high-converting campaigns</p>
          </div>
          <div className="feature-box">
            <h3>Web Development</h3>
            <p>Stunning, responsive websites</p>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="case-study">
        <h2>How a Skincare Brand Used Digital Marketing to Grow Sales</h2>
        <div className="case-study-video">
          <iframe
            src="https://www.youtube.com/embed/VMgF5WfdsYw"
            title="Case Study Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section" id="about">
        <div className="about-card">
          <h2 className="about-heading">About ADV: Empowering Small Brands Through Digital Marketing</h2>
          <div className="about-columns">
            <div className="about-column">
              <h3>Who We Are</h3>
              <p>A team of digital experts passionate about delivering real results.</p>
            </div>
            <div className="about-column">
              <h3>Our Mission</h3>
              <p>Helping small brands thrive online with data-driven marketing strategies.</p>
            </div>
            <div className="about-column">
              <h3>Our Vision</h3>
              <p>To be the most trusted digital marketing agency for startups & small businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2 className="contact-heading">Contact Us: Let's Discuss Your Digital Ventures</h2>
        <div className="contact-card">
          <div className="contact-item">
            <i className="fab fa-whatsapp"></i>
            <h3>WhatsApp</h3>
            <p>
              <a href="https://wa.me/923408670049" target="_blank" rel="noopener noreferrer">
                +92 340 8670049
              </a>
            </p>
          </div>
          <div className="contact-separator">|</div>
          <div className="contact-item">
            <i className="fab fa-facebook-f"></i>
            <h3>Facebook</h3>
            <p>
              <a href="https://facebook.com/amnadigitalventures" target="_blank" rel="noopener noreferrer">
                Amna Digital Ventures
              </a>
            </p>
          </div>
          <div className="contact-separator">|</div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>
              <a href="mailto:amnadigitalventures@gmail.com">amnadigitalventures@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="sparkle-area">
          <section className="consultation-form">
            <div className="form-container">
              <div className="form-header">
                <h2>
                  Get Your <span className="highlight-free">Free</span> Consultation!
                </h2>
              </div>
              <p className="form-subtitle">
                Fill out the form below, and we'll get back to you with a tailored strategy for your business.
              </p>
              <form id="consultationForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" id="name" name="name" placeholder=" " required />
                  <label htmlFor="name">Full Name</label>
                </div>
                <div className="form-group">
                  <input type="email" id="email" name="email" placeholder=" " required />
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className="form-group">
                  <input type="tel" id="phone" name="phone" placeholder=" " required />
                  <label htmlFor="phone">Phone Number</label>
                </div>
                <div className="form-group">
                  <input type="text" id="service" name="service" placeholder=" " required />
                  <label htmlFor="service">What services are you interested in?</label>
                  <small>e.g. Social Media Marketing, SEO, Web Development</small>
                </div>
                <div className="form-group">
                  <textarea id="message" name="message" rows="4" placeholder=" " required></textarea>
                  <label htmlFor="message">Tell us about your business goals</label>
                </div>
                <div className="form-group">
                  <input type="text" id="business_name" name="business_name" placeholder=" " required />
                  <label htmlFor="business_name">Business Name</label>
                </div>
                <div className="form-group">
                  <input type="text" id="business_type" name="business_type" placeholder=" " required />
                  <label htmlFor="business_type">Type of Business</label>
                  <small>e.g. E-commerce, Restaurant, Real Estate</small>
                </div>
                <div className="form-group">
                  <input type="text" id="website" name="website" placeholder=" " />
                  <label htmlFor="website">Website / Social Media Links</label>
                  <small>e.g. www.yourwebsite.com, Instagram: @yourbusiness</small>
                </div>
                <div className="form-group">
                  <input type="text" id="location" name="location" placeholder=" " required />
                  <label htmlFor="location">Where are you located?</label>
                  <small>e.g. City, Country</small>
                </div>
                <button type="submit" className="submit-btn">
                  Get Your <span className="highlight-free">Free</span> Consultation
                </button>
                {formStatus === 'success' && (
                  <div style={{ color: 'lime', marginTop: 10 }}>Email sent successfully!</div>
                )}
                {formStatus === 'error' && (
                  <div style={{ color: 'red', marginTop: 10 }}>Error sending email. Please try again.</div>
                )}
              </form>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Copyright © 2025 Amna Digital Ventures - All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default Home