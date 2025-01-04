import React, { useRef } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Layout/Header';
import Hero from './components/Hero/Hero';
import SkillsSection from './components/Skills/SkillsSection';
import WorkSection from './components/Work/WorkSection';
import ExperienceSection from './components/Experience/ExperienceSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Layout/Footer';
import BlogSection from './components/Blog/BlogSection';

export default function Portfolio() {
  // Create refs for each section
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const blogRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (section) => {
    if (section === 'hero') heroRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'skills') skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'work') workRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'experience') experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'contact') contactRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'blog') blogRef.current.scrollIntoView({ behavior: 'smooth' });
    
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <GlobalStyles />
      <Header onScrollTo={scrollToSection} />
      <main style={{ flex: 1 }}>
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={blogRef}>
          <BlogSection />
        </div>
        <div ref={skillsRef}>
          <SkillsSection />
        </div>
        <div ref={workRef}>
          <WorkSection />
        </div>
        <div ref={experienceRef}>
          <ExperienceSection />
        </div>
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
