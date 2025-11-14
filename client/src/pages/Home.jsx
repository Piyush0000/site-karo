import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const textElement = document.querySelector('.typing-text');
    if (textElement) {
      const text = textElement.textContent;
      textElement.textContent = '';
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          textElement.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      typeWriter();
    }

    // Counter animation for stats
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const targetValue = parseInt(target.getAttribute('data-target'));
          const duration = 2000;
          const increment = targetValue / (duration / 16);
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current < targetValue) {
              target.textContent = Math.ceil(current).toLocaleString();
              requestAnimationFrame(updateCounter);
            } else {
              target.textContent = targetValue.toLocaleString() + (targetValue === 98 ? '%' : '+');
            }
          };

          updateCounter();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    counters.forEach(counter => observer.observe(counter));

    return () => {
      counters.forEach(counter => observer.unobserve(counter));
    };
  }, []);

  return (
    <div className="home">
      {/* Category Navigation */}
      <section className="category-nav">
        <div className="container">
          <div className="categories-scroll">
            <span className="category-item trending">🔥 Trending</span>
            <span className="category-item">Graphics & Design</span>
            <span className="category-item">Programming & Tech</span>
            <span className="category-item">Digital Marketing</span>
            <span className="category-item">Video & Animation</span>
            <span className="category-item">Writing & Translation</span>
            <span className="category-item">Music & Audio</span>
            <span className="category-item">Business</span>
            <span className="category-item">Finance</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title typing-text">A premium business solution that delivers trusted talent</h1>
            <p className="hero-subtitle">
              Connect with top freelancers and agencies to bring your projects to life
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">Browse Freelancers</Link>
              <Link to="/projects" className="btn btn-secondary">See Past Projects</Link>
              <Link to="/contact" className="btn btn-secondary">Sourcing Experts</Link>
            </div>
            <div className="search-box">
              <input type="text" placeholder="Search for skills or services" />
              <button className="search-btn">🔍</button>
            </div>
            <div className="trusted-brands">
              <span className="brands-label">*Trusted By Leading Brands</span>
              <div className="brands-scroll">
                <span className="brand">HITACHI</span>
                <span className="brand">similarweb</span>
                <span className="brand">SKECHERS</span>
                <span className="brand">MyHeritage</span>
                <span className="brand">NETFLIX</span>
                <span className="brand">L'ORÉAL</span>
                <span className="brand">Unilever</span>
                <span className="brand">MyHeritage</span>
                <span className="brand">NETFLIX</span>
                <span className="brand">L'ORÉAL</span>
                <span className="brand">Unilever</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Popular Professional Services</h2>
          <div className="services-grid">
            <div className="service-card card">
              <div className="service-icon">💻</div>
              <h3>Website Development</h3>
              <p>Build your professional site with trusted web developers.</p>
              <div className="service-badge">Trending</div>
            </div>
            <div className="service-card card">
              <div className="service-icon">🎨</div>
              <h3>Logo Design</h3>
              <p>Create your brand identity with talented designers.</p>
              <div className="service-badge">Popular</div>
            </div>
            <div className="service-card card">
              <div className="service-icon">📱</div>
              <h3>Mobile Apps</h3>
              <p>iOS & Android app development by expert developers.</p>
              <div className="service-badge">Hot</div>
            </div>
            <div className="service-card card">
              <div className="service-icon">🎬</div>
              <h3>Video Editing</h3>
              <p>Professional video editing for marketing & content.</p>
              <div className="service-badge">New</div>
            </div>
            <div className="service-card card">
              <div className="service-icon">📈</div>
              <h3>SEO Services</h3>
              <p>Boost your rankings with expert SEO strategies.</p>
              <div className="service-badge">Essential</div>
            </div>
            <div className="service-card card">
              <div className="service-icon">✍️</div>
              <h3>Content Writing</h3>
              <p>Engaging content that converts readers to customers.</p>
              <div className="service-badge">Top Rated</div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number" data-target="50000">0</div>
              <div className="stat-label">Active Freelancers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="10000">0</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="98">0</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="24">0</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Why Choose Us?</h2>
              <p>
                With years of experience in web development and design, we deliver high-quality 
                solutions tailored to your business needs. Our team of experts ensures that your 
                digital presence stands out from the competition.
              </p>
              <p>
                We focus on creating user-friendly, scalable, and efficient applications that 
                drive results for your business.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
            <div className="about-image">
              <div className="placeholder-image">Team Image</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;