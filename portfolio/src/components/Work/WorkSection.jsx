import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../constants/constant';



export default function WorkSection() {
  const styles = {
    workSection: {
      background: '#e4f0fa', // Light gradient
      padding: '80px 20px',
      textAlign: 'center',
    },
    workContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionHeader: {
      marginBottom: '40px',
      animation: 'fadeIn 1s ease-in-out',
    },
    sectionTag: {
      display: 'inline-block',
      background: '#3b82f6',
      color: '#ffffff',
      padding: '6px 16px',
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: 700,
      
      letterSpacing: '1px',
    },
    sectionTitle: {
      fontSize: '23px',
      fontWeight: 'bold',
      color: '#1F2937',
      marginTop: '16px',
      position: 'relative',
    },
    sectionTitleUnderline: {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '50%',
      width: '60px',
      height: '4px',
      background: '#2563EB',
      transform: 'translateX(-50%)',
    },
    projectGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      marginTop: '40px',
    },
    '@keyframes fadeIn': {
      from: {
        opacity: 0,
        transform: 'translateY(20px)',
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  };

  return (
    <section style={styles.workSection}>
      <div style={styles.workContainer}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTag}>Projects</span>
          <h2 style={styles.sectionTitle}>
            Some of my recent works
            
          </h2>
        </div>
        <div style={styles.projectGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}
