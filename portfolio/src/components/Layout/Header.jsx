import React from 'react';
import Navigation from './Navigation';

export default function Header({ onScrollTo }) {
  const styles = {
    header: {
      background: '#fff',
      borderBottom: '1px solid rgba(255, 255, 255, 0)',
      padding: '16px 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  };

  return (
    <header style={styles.header}>
      <Navigation onScrollTo={onScrollTo} />
    </header>
  );
}
