import React from "react";
import SocialLinks from "../common/SocialLinks";
import { locationIcon, profileImage } from "../../constants/constant";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Text Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Priyanshu</span> 👋
          </h1>
          <p className="hero-description">
          I am a pre-final year Computer Science student passionate about web and app development. Currently, I am focused on upskilling in modern technologies and frameworks to build innovative and efficient solutions. My enthusiasm for learning drives me to explore new tools and trends in the tech world, aiming to contribute meaningfully to impactful projects and stay ahead in this ever-evolving field.
          </p>
          <div className="hero-info">
            <div className="info-item">
              <img
                src={locationIcon}
                alt="Location icon"
                className="info-icon"
              />
              <span>Bhopal, India</span>
            </div>
            <div className="info-item">
              <div className="status-dot"></div>
              <span>Open to new opportunities</span>
            </div>
          </div>
          <div className="cta-section">
            <a
              href="/resume.pdf"
              className="cta-button"
              download="PriyanshuResume.pdf" // This renames the downloaded file
            >
              Download Resume
            </a>
            <SocialLinks />
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img
            src={profileImage}
            alt="Hero Section"
            className="image-fade-in"
          />
        </div>
      </div>

      <style jsx>{`
        /* Colors & Fonts */
        :root {
          --primary-color: #1e3a8a; /* Indigo */
          --secondary-color: #3b82f6; /* Blue */
          --background-color: #f8fafc; /* Light Gray */
          --text-primary: #1f2937; /* Dark Gray */
          --text-secondary: #4b5563; /* Gray */
          --accent-color: #10b981; /* Green */
          --highlight-color: #ffba08; /* Yellow */
        }

        /* Section Background */
        .hero-section {
          background: #e4f0fa;
          padding: 80px 20px;
        }

        /* Container Layout */
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
        }

        /* Text Content Styling */
        .hero-content {
          max-width: 600px;
          text-align: left;
          animation: fadeIn 1s ease-in-out;
        }

        .hero-title {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.2;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        .highlight {
          color: var(--highlight-color);
        }

        .hero-description {
          color: var(--text-secondary);
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .hero-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-secondary);
          font-size: 18px;
        }

        .info-icon {
          width: 28px;
          height: 28px;
        }

        .status-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--accent-color);
        }

        /* Call-to-Action Button */
        .cta-button {
          display: inline-block;
          background: #3b82f6;
          color: #ffffff;
          font-size: 18px;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.3s ease, transform 0.2s ease;
          margin-bottom: 10px;
        }

        .cta-button:hover {
          background: var(--primary-color);
          transform: translateY(-3px);
        }

        /* Social Links */
        .cta-section {
          margin-top: 24px;
        }

        /* Hero Image Section */
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-fade-in {
          width: 100%;
          max-width: 300px; /* Adjusted from 500px to 300px for smaller size */
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          animation: fadeInUp 1.5s ease-in-out;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-title {
            font-size: 40px;
          }

          .hero-description {
            font-size: 16px;
          }

          .hero-image img {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
