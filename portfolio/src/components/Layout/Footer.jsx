import React from 'react';

export default function Footer() {
  const styles = {
    siteFooter: {
      background: '#F9FAFB', // Light gray background
      padding: window.innerWidth <= 991 ? '24px 20px' : '24px 80px', // Responsive padding
      borderTop: '1px solid #E5E7EB', // Subtle border
    },
    footerContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      textAlign: 'center',
    },
    footerText: {
      fontSize: '14px',
      color: '#4B5563', // Cool gray for text
      lineHeight: '1.5',
    },
    link: {
      color: '#2563EB', // Tailwind Blue-600
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#1E40AF', // Tailwind Blue-800 on hover
    },
  };

  return (
    <footer style={styles.siteFooter}>
      <div style={styles.footerContainer}>
        <p style={styles.footerText}>
          © 2024  Designed and coded by Priyanshu Patel
        </p>
      </div>
    </footer>
  );
}

