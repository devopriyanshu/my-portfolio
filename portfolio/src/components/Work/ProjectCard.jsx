import React from 'react';

export default function ProjectCard({ title, description, image, technologies, githubLink }) {
  const styles = {
    projectCard: {
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
    },
    projectImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    projectContent: {
      padding: '20px',
    },
    projectTitle: {
      fontSize: '22px',
      fontWeight: '700',
      color: '#1F2937', // Tailwind Gray-800
      marginBottom: '10px',
    },
    projectDescription: {
      fontSize: '16px',
      color: '#4B5563', // Tailwind Gray-600
      marginBottom: '15px',
      lineHeight: '1.6',
    },
    projectTech: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '15px',
    },
    techTag: {
      background: '#EFF6FF', // Tailwind Blue-50
      color: '#2563EB', // Tailwind Blue-600
      padding: '6px 12px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      transition: 'background 0.3s ease, color 0.3s ease',
      cursor: 'pointer',
    },
    techTagHover: {
      background: '#2563EB', // Tailwind Blue-600
      color: '#FFFFFF',
    },
    githubLink: {
      marginTop: 'auto',
      textAlign: 'right',
    },
    githubButton: {
      padding: '10px 18px',
      borderRadius: '8px',
      background: '#3b82f6',
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: '700',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    githubButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    },
  };

  return (
    <article
      style={styles.projectCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
      }}
    >
      <img src={image} alt={title} style={styles.projectImage} />
      <div style={styles.projectContent}>
        <h3 style={styles.projectTitle}>{title}</h3>
        <p style={styles.projectDescription}>{description}</p>
        <div style={styles.projectTech}>
          {technologies.map((tech, index) => (
            <span
              key={index}
              style={styles.techTag}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = styles.techTagHover.background;
                e.currentTarget.style.color = styles.techTagHover.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = styles.techTag.background;
                e.currentTarget.style.color = styles.techTag.color;
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <div style={styles.githubLink}>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.githubButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.githubButtonHover.transform;
              e.currentTarget.style.boxShadow = styles.githubButtonHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
