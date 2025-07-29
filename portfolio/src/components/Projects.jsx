import React, { useState } from "react";
import { motion } from "framer-motion";
import ecommerceImg from "../assets/images/e-commerce.jpg";
import musicPlayerImg from "../assets/images/music-player.webp";
import chatbotImg from "../assets/images/chatbot.jpg";
import ProjectModal from "./ProjectModal";

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
      image: chatbotImg,
      modalKey: "wellnessApp",
    },
    {
      title: "AI Powered Browser Assistant",
      description:
        "Python-based AI agent that automates browser tasks using natural language commands using Playwright and OpenAI GPT.",
      image: ecommerceImg,
      modalKey: "aiBrowserAssistant",
    },
    {
      title: "Real-Time Weather App",
      description:
        "Weather application with location-based updates, 5-day forecasts, and efficient state management via React Query.",
      image: musicPlayerImg,
      modalKey: "weatherApp",
    },
    {
      title: "Multithreaded Proxy Server",
      description:
        "High-performance proxy server built with C++ supporting multithreading and concurrent client handling. Implements request forwarding, caching, and logging for HTTP traffic analysis.",
      image: chatbotImg,
      modalKey: "proxyServer",
    },
  ];

  const modalData = {
    hiregenzo: {
      frontendUrl: "https://github.com/anjali-1607/HireGenZ_frontend",
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
          frontendUrl={modalData[modalProject]?.frontendUrl}
          backendUrl={modalData[modalProject]?.backendUrl}
        />
      )}
    </motion.section>
  );
};

export default Projects;
