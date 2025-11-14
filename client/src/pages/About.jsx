import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about our company and mission</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-main">
            <h2>Our Story</h2>
            <p>
              Founded in 2015, Site Karo has been at the forefront of digital innovation, 
              helping businesses establish and grow their online presence. What started as 
              a small team of passionate developers has evolved into a full-service digital 
              agency with expertise in web development, mobile applications, and UI/UX design.
            </p>
            <p>
              Our mission is to empower businesses with cutting-edge digital solutions that 
              drive growth, enhance customer engagement, and deliver measurable results. We 
              believe in the power of technology to transform businesses and are committed 
              to staying ahead of industry trends to provide our clients with the best 
              possible solutions.
            </p>

            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card card">
                <h3>Innovation</h3>
                <p>We constantly explore new technologies and methodologies to deliver innovative solutions.</p>
              </div>
              <div className="value-card card">
                <h3>Quality</h3>
                <p>We are committed to delivering high-quality products that exceed client expectations.</p>
              </div>
              <div className="value-card card">
                <h3>Integrity</h3>
                <p>We conduct business with honesty, transparency, and ethical practices.</p>
              </div>
              <div className="value-card card">
                <h3>Collaboration</h3>
                <p>We believe in working closely with our clients as partners in their success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member card">
              <div className="member-image placeholder-image">Rajeev Kumar</div>
              <h3>Rajeev Kumar</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member card">
              <div className="member-image placeholder-image">Priya Sharma</div>
              <h3>Priya Sharma</h3>
              <p>Lead Developer</p>
            </div>
            <div className="team-member card">
              <div className="member-image placeholder-image">Amit Patel</div>
              <h3>Amit Patel</h3>
              <p>UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;