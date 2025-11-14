import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // In a real app, this would come from an API
    const fetchProjects = async () => {
      try {
        // Simulating API call
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        // Fallback data if API is not available
        const fallbackData = [
          {
            id: 1,
            title: 'E-commerce Platform',
            description: 'A full-featured online shopping platform with payment integration, inventory management, and analytics dashboard.',
            image: '/images/project1.jpg'
          },
          {
            id: 2,
            title: 'Task Management App',
            description: 'Productivity app for teams to manage projects and tasks efficiently with real-time collaboration features.',
            image: '/images/project2.jpg'
          },
          {
            id: 3,
            title: 'Fitness Tracker',
            description: 'Health and fitness application with workout plans, progress tracking, and nutrition guidance.',
            image: '/images/project3.jpg'
          },
          {
            id: 4,
            title: 'Restaurant Booking System',
            description: 'Online reservation system for restaurants with table management and customer notification features.',
            image: '/images/project4.jpg'
          },
          {
            id: 5,
            title: 'Real Estate Portal',
            description: 'Comprehensive real estate platform with property listings, virtual tours, and mortgage calculator.',
            image: '/images/project5.jpg'
          },
          {
            id: 6,
            title: 'Learning Management System',
            description: 'Educational platform for online courses with video lectures, quizzes, and progress tracking.',
            image: '/images/project6.jpg'
          }
        ];
        setProjects(fallbackData);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects">
      <section className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Showcasing our recent work and success stories</p>
        </div>
      </section>

      <section className="projects-content">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-item card">
                <div className="project-image placeholder-image">
                  {project.title}
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Have a Project in Mind?</h2>
            <p>Let's work together to bring your ideas to life.</p>
            <a href="/contact" className="btn btn-primary">Start a Project</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;