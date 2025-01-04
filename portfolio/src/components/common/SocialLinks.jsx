import React from 'react';
import { socialLinks } from '../../constants/constant';



export default function SocialLinks() {
  const styles = {
    socialLinks: {
      display: 'flex',
      gap: '4px',
    },
    socialBtn: {
      border: 'none',
      background: 'none',
      padding: '6px',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    socialIcon: {
      width: '24px',
      height: '24px',
    },
  };

  return (
    <div style={styles.socialLinks}>
      {socialLinks.map((link, index) => (
        <button key={index} style={styles.socialBtn}>
          <img src={link.icon} alt={link.alt} style={styles.socialIcon} />
        </button>
      ))}
    </div>
  );
}
