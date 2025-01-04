import React from 'react';

export default function TechStack({ skills }) {
  return (
    <div className="tech-stack">
      {skills.other.map((tech, index) => (
        <div key={index} className="tech-item">
          <img src={tech.icon} alt={tech.name} className="tech-icon" />
          <span className="tech-name">{tech.name}</span>
        </div>
      ))}

      <style jsx>{`
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
        }

        .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          background: #f9fafb;
          border-radius: 12px;
          padding: 20px;
          width: 140px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .tech-item:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .tech-icon {
          width: 64px;
          height: 64px;
          object-fit: contain;
        }

        .tech-name {
          color: #374151;
          font-size: 16px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
