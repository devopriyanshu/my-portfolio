import React from 'react';
import TechStack from './TechStack';
import { skillsData } from '../../constants/constant';



export default function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">
            The skills, tools, and technologies I am proficient in:
          </h2>
        </div>
        <TechStack skills={skillsData} />
      </div>

      <style jsx>{`
        .skills-section {
          background: #e4f0fa; /* Modern gradient */
          padding: 80px 20px;
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          padding: 40px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-tag {
          display: inline-block;
          background: #3b82f6;
          color: #ffffff;
          padding: 6px 16px;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 600;
        }

        .section-title {
          color: #1f2937;
          font-size: 28px;
          font-weight: bold;
          margin-top: 16px;
        }
      `}</style>
    </section>
  );
}
