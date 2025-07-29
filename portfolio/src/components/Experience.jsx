import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

// Import company logos
import CufrontLogo from "../assets/logos/cufront.png";
import EasyCRMLogo from "../assets/logos/easycrm.jpg";
import HelpyMotoLogo from "../assets/logos/helpymoto.jpg";
import VegentoLogo from "../assets/logos/vegento.jpeg"; // ← Your vegento logo file

const experiences = [
  {
    title: "React Native Intern",
    company: "Cufront Healthcare, India",
    duration: "Dec 2024 – Feb 2025",
    logo: CufrontLogo,
    responsibilities: [
      "Developed a cross-platform mobile app enabling doctor discovery, appointment booking, and profile management.",
      "Designed reusable UI components for appointment slots and availability using React Native.",
      "Collaborated with backend and design teams, ensuring clean Git workflows and unit-tested code.",
    ],
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="text-light pb-20 lg:pt-16 px-6 sm:px-12 md:px-20 lg:px-36"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
          Work Experience
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative group bg-gradient-to-r from-secondary to-dark rounded-lg p-6 shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            {/* Background Element */}
            <div className="absolute inset-0 bg-primary/10 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>

            {/* Logo */}
            <div className="z-10 relative flex justify-center mb-6">
              <img
                src={exp.logo}
                alt={`${exp.company} Logo`}
                className="w-20 h-20 object-contain rounded-full shadow-md transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Title & Company */}
            <div className="z-10 relative text-center mb-4">
              <div className="flex justify-center items-center mb-2">
                <FaBriefcase className="text-primary text-2xl mr-2" />
                <h3 className="text-xl font-semibold text-primary">
                  {exp.title}
                </h3>
              </div>
              <p className="text-md font-medium text-light">{exp.company}</p>
              <p className="text-sm text-light italic">{exp.duration}</p>
            </div>

            {/* Responsibilities */}
            <ul className="z-10 relative list-disc list-inside space-y-2 text-sm text-light leading-relaxed">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
