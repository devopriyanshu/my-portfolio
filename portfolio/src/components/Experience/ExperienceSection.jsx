import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../../constants/constant';


  

export default function ExperienceSection() {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="header">
          <span className="tag">Experience</span>
          <h2 className="title">My Professional Journey</h2>
        </div>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .experience-section {
          background: #e4f0fa; /* Soft light gray */
          padding: 80px 20px;
          display: flex;
          justify-content: center;
        }

        .experience-container {
          width: 80%;
          max-width: 1400px;
          text-align: center;
        }

        .header {
          margin-bottom: 40px;
        }

        .tag {
          display: inline-block;
          background: #3b82f6; /* Blue accent */
          color: white;
          padding: 6px 16px;
          border-radius: 8px;
          font-size: 18px;
          font-weight: bold;
        }

        .title {
          margin-top: 16px;
          font-size: 26x;
          font-weight: bold;
          color: #1f2937; /* Dark gray */
        }

        .timeline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          margin-top: 40px;
          padding: 0 20px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 4px;
          background: #d1d5db; /* Light gray for timeline */
          z-index: 0;
          transform: translateY(-50%);
        }
      `}</style>
    </section>
  );
}
