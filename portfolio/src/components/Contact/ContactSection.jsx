import React from 'react';
import SocialLinks from '../common/SocialLinks';
import { callIcon, mailIcon } from '../../constants/constant';

export default function ContactSection() {
  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">
            Have a project in mind? Let’s work together! Whether you want to discuss
            opportunities, collaborations, or just say hello, feel free to connect.
          </h2>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-item">
            <img
              src={mailIcon}
              alt="Email"
              className="contact-icon"
            />
            <a href="mailto:priyanshupatel1902@gmail.com" className="contact-text">
              priyanshupatel1902@gmail.com
            </a>
            <button
              className="copy-btn"
              onClick={() => handleCopyToClipboard('priyanshupatel1902@gmail.com')}
            >
              Copy
            </button>
          </div>

          <div className="contact-item">
            <img
              src={callIcon}
              alt="Phone"
              className="contact-icon"
            />
            <a href="tel:+917909862919" className="contact-text">
              +91 7909862919
            </a>
            <button
              className="copy-btn"
              onClick={() => handleCopyToClipboard('+917909862919')}
            >
              Copy
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-section">
          <p className="social-text">You can also connect with me on these platforms:</p>
          <div className="social-links">
            <SocialLinks />
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: #e4f0fa; /* Light gray */
          padding: 80px 20px;
        }

        .contact-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .section-header {
          margin-bottom: 40px;
        }

        .section-tag {
          background: #3b82f6; /* Blue accent */
          color: #ffffff;
          padding: 6px 16px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: bold;
        }

        .section-title {
          color: #1f2937; /* Dark gray */
          font-size: 24px;
          margin: 16px auto 0;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 40px 0;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
        }

        .contact-icon {
          width: 32px;
          height: 32px;
        }

        .contact-text {
          color: #1f2937;
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
        }

        .copy-btn {
          background: #e5e7eb; /* Light gray */
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .copy-btn:hover {
          background: #d1d5db; /* Hover gray */
        }

        .social-section {
          margin: 40px 0;
          text-align: center;
        }

        .social-text {
          color: #6b7280; /* Medium gray */
          font-size: 16px;
          margin-bottom: 16px;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 16px; /* Space between social media icons */
        }

        @media (max-width: 768px) {
          .contact-text {
            font-size: 16px;
          }

          .section-title {
            font-size: 20px;
          }

          .social-links {
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
