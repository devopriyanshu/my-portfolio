import React from 'react';

const navLinks = [
  { text: 'About', section: 'hero' },
  { text: 'Blog', section: 'blog' },
  { text: 'Skills', section: 'skills' },
  { text: 'Work', section: 'work' },
  { text: 'Experience', section: 'experience' },
  { text: 'Contact', section: 'contact' },
  
];

export default function Navigation({ onScrollTo }) {
  const styles = {
    mainNav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
    },
    navLink: {
      color: 'var(--gray-600)',
      fontSize: '20px',
      fontWeight: '500',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  };

  return (
    <nav style={styles.mainNav}>
      <div style={styles.navLinks}>
        {navLinks.map((link, index) => (
          <span
            key={index}
            onClick={() => onScrollTo(link.section)}
            style={styles.navLink}
          >
            {link.text}
          </span>
        ))}
      </div>
    </nav>
  );
}
