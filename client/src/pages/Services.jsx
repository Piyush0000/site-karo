import React, { useState, useEffect } from 'react';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // In a real app, this would come from an API
    const fetchServices = async () => {
      try {
        // Simulating API call
        const response = await fetch('/api/services');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        // Fallback data if API is not available
        const fallbackData = [
          {
            id: 1,
            title: 'Web Development',
            description: 'Professional website development services with modern technologies including React, Vue, and Angular.',
            icon: '💻'
          },
          {
            id: 2,
            title: 'App Development',
            description: 'Mobile app development for iOS and Android platforms with native and cross-platform solutions.',
            icon: '📱'
          },
          {
            id: 3,
            title: 'UI/UX Design',
            description: 'Creative and intuitive user interface and experience design that enhances user engagement.',
            icon: '🎨'
          },
          {
            id: 4,
            title: 'Digital Marketing',
            description: 'Boost your online presence with our comprehensive digital marketing strategies and SEO optimization.',
            icon: '📈'
          },
          {
            id: 5,
            title: 'E-commerce Solutions',
            description: 'Complete e-commerce platforms with secure payment gateways and inventory management systems.',
            icon: '🛒'
          },
          {
            id: 6,
            title: 'Cloud Services',
            description: 'Scalable cloud solutions for hosting, storage, and infrastructure management.',
            icon: '☁️'
          }
        ];
        setServices(fallbackData);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="services">
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive digital solutions for your business</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-item card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help your business grow with our digital solutions.</p>
            <a href="/contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;