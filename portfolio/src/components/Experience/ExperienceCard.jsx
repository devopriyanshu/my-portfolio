import React from 'react';

export default function ExperienceCard({ role, company, logo, period, responsibilities }) {
  return (
    <div className="experience-card">
      <div className="content">
        {/* Company Logo */}
        <div className="company-logo">
          <img src={logo} alt={`${company} logo`} />
        </div>

        {/* Details Section */}
        <div className="details">
          <h3 className="role">{role}</h3>
          <p className="company">{company}</p>
          <p className="period">{period}</p>
        </div>

        {/* Responsibilities Section */}
        <ul className="responsibilities">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="timeline-dot" />
      <style jsx>{`
        .experience-card {
          background: linear-gradient(135deg, #f8fafc, #ffffff); /* Subtle gradient */
          border: 1px solid #e5e7eb; /* Light border */
          border-radius: 16px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
          padding: 32px;
          width: 100%;
          max-width: 400px; /* Adjust for better responsiveness */
          position: relative;
          margin: 0 auto;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .experience-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .company-logo img {
          width: 80px; /* Larger logo for better emphasis */
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .details {
          text-align: center;
        }

        .role {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937; /* Dark Gray */
        }

        .company {
          font-size: 16px;
          color: #4b5563; /* Medium Gray */
          margin: 4px 0;
        }

        .period {
          font-size: 14px;
          color: #6b7280; /* Light Gray */
          font-style: italic;
        }

        .responsibilities {
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
          text-align: left;
          font-size: 15px;
          color: #374151; /* Medium Gray */
          line-height: 1.6;
        }

        .responsibilities li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 12px;
        }

        .responsibilities li::before {
          content: '▹'; /* Custom bullet point */
          position: absolute;
          left: 0;
          font-size: 14px;
          color: #2563eb; /* Blue accent */
        }

        .timeline-dot {
          position: absolute;
          bottom: -12px;
          left: 50%;
          width: 16px;
          height: 16px;
          background: #2563eb; /* Blue accent */
          border: 3px solid #ffffff; /* Border to match card background */
          border-radius: 50%;
          transform: translateX(-50%);
        }

        @media (max-width: 768px) {
          .experience-card {
            padding: 24px;
          }

          .company-logo img {
            width: 64px;
            height: 64px;
          }

          .role {
            font-size: 18px;
          }

          .responsibilities li {
            padding-left: 20px;
          }
        }
      `}</style>
    </div>
  );
}
