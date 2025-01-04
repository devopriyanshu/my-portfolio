import React from 'react';
import Navigation from './Navigation';

export default function Header({ onScrollTo }) {
  const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

  const styles = {
    header: {
      background: '#fff',
      borderBottom: '1px solid rgba(255, 255, 255, 0)',
      padding: isMobile ? '16px 20px' : '16px 80px', // Smaller padding for mobile
      display: 'flex',
      alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'space-between', // Center content on mobile
      flexDirection: isMobile ? 'column' : 'row', // Stack items on mobile
    },
  };

  return (
    <header style={styles.header}>
      <Navigation onScrollTo={onScrollTo} />
    </header>
  );
}
