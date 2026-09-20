import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <img
          src="/dp.png"
          alt="Sumit Kumar"
          className="about-avatar"
        />
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>About Me</h2>
        <h3 style={{ fontSize: '1.5rem', color: '#f97316', marginBottom: '15px' }}>Sumit Kumar</h3>

        <p className="about-bio">
          Full-stack developer passionate about building scalable web applications.
          SUMNEXUS is a modern e-commerce platform built with the MERN stack,
          featuring real-time cart management, secure payments, and a premium UI experience.
        </p>

        <div className="about-tech">
          <h4 style={{ color: '#f97316', marginBottom: '15px' }}>Tech Stack</h4>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Express</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">Redux</span>
            <span className="tech-tag">Razorpay</span>
            <span className="tech-tag">Cloudinary</span>
          </div>
        </div>

        <div className="about-links">
          <a href="https://github.com/SumitInTech" target="_blank" rel="noreferrer" className="social-link github">GitHub</a>
          <a href="https://linkedin.com/in/sumit-kumar-86a635349" target="_blank" rel="noreferrer" className="social-link linkedin">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default About;
