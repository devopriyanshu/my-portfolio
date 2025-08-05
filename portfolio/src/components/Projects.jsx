import React, { useState } from "react";
import { motion } from "framer-motion";
import ecommerceImg from "../assets/images/e-commerce.jpg";
import musicPlayerImg from "../assets/images/music-player.webp";
import chatbotImg from "../assets/images/chatbot.jpg";
import ProjectModal from "./ProjectModal";
import wellnestImg from "../assets/images/wellnest.png";
import pricetrackerImg from "../assets/images/pricetrackerImg.png";
import cozyImg from "../assets/images/cozy.png";
import proxyImg from "../assets/images/proxy.png";
import timetrackerImg from "../assets/images/time-tracker.png";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const handleProjectClick = (projectKey) => {
    setModalProject(projectKey);
    setIsModalOpen(true);
  };

  const projects = [
    {
      title: "Full Stack Wellness App",
      description:
        "Production-grade wellness platform enabling expert consultations, health center discovery, and user health logging.",
      image: wellnestImg,
      modalKey: "wellnessApp",
      tech: ["React.js", "JavaScript", "PostgreSQL", "Node.js", "OAuth"],
    },
    {
      title: "Time Tracker App",
      description:
        "A full-stack time tracking web application . It allows users to track their time with manual entries or live timers, and providing admins with detailed time log summaries and project/user management.",
      image: timetrackerImg,
      modalKey: "timeTrackerApp",
      tech: [
        "Next.js",
        "NextAuth.js",
        "Prisma ORM",
        "PostgreSQL",
        "Tailwind CSS",
      ],
    },

    {
      title: "Real-Time Weather App",
      description:
        "Weather application with location-based updates, 5-day forecasts, and efficient state management via React Query.",
      image: cozyImg,
      modalKey: "weatherApp",
      tech: ["React.js", "React Query", "Tailwind", "Weather API"],
    },

    {
      title: "Amazon Price Tracker",
      description:
        "Price tracking app that monitors Amazon product links and sends email alerts on price drops. Built with Next.js, TypeScript, Bright Data for scraping, and NodeMailer for notifications.",
      image: pricetrackerImg,
      modalKey: "priceTrackerApp",
      tech: ["Next.js", "TypeScript", "NodeMailer", "Bright Data"],
    },
    {
      title: "AI Powered Browser Assistant",
      description:
        "Python-based AI agent that automates browser tasks using natural language commands using Playwright and OpenAI GPT.",
      image: chatbotImg,
      link: "https://github.com/devopriyanshu/HackOnSunday/tree/main/sunday1_ai_browser_agent",
      tech: ["Python", "Playwright", "OpenAI API"],
    },
    {
      title: "Multithreaded Proxy Server",
      description:
        "High-performance proxy server built with C++ supporting multithreading and concurrent client handling. Implements request forwarding, caching, and logging for HTTP traffic analysis.",
      image: proxyImg,
      modalKey: "proxyServer",
      tech: ["C++", "Multithreading", "Socket Programming"],
    },
  ];

  const modalData = {
    timeTrackerApp: {
      codeUrl: "https://github.com/devopriyanshu/time-tracker",
      liveUrl: "https://time-tracker-rho-sandy.vercel.app/",
    },
    priceTrackerApp: {
      codeUrl: "https://github.com/devopriyanshu/pricetracker",
      liveUrl: "https://pricetracker-ochre.vercel.app/",
    },
    wellnessApp: {
      codeUrl: "https://github.com/devopriyanshu/WellNest",
    },
    weatherApp: {
      codeUrl: "https://github.com/devopriyanshu/cozy",
      liveUrl: "https://cozywthr.netlify.app/",
    },
    hiregenzo: {
      codeUrl: "https://github.com/anjali-1607/HireGenZ_frontend",
      backendUrl: "https://github.com/anjali-1607/HireGenZ_backend",
    },
    shoes: {
      frontendUrl: "https://github.com/anjali-1607/shoes_website",
      backendUrl: "https://github.com/anjali-1607/shoes_website_backend",
    },
  };

  return (
    <motion.section
      id="projects"
      className="mb-20 px-6 sm:px-12 md:px-20 lg:px-36"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
        Projects
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-secondary rounded-lg shadow-lg cursor-pointer"
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 8px 16px rgba(56, 249, 215, 0.5)",
            }}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-light mb-2">
              {project.title}
            </h3>
            <p className="text-lg text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech?.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-[#2b2b2b] text-gray-200 border border-gray-600"
                >
                  {tool}
                </span>
              ))}
            </div>

            {project.modalKey ? (
              <button
                onClick={() => handleProjectClick(project.modalKey)}
                className="text-primary hover:underline"
              >
                View Project
              </button>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {modalProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          codeUrl={modalData[modalProject]?.codeUrl}
          liveUrl={modalData[modalProject]?.liveUrl}
        />
      )}
    </motion.section>
  );
};

export default Projects;
