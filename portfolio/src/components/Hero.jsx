import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/images/profile.jpeg";
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

const Hero = () => {
  const textToType = "Hello, I'm Priyanshu Patel"; // Text to type
  const typingSpeed = 100; // Typing speed in milliseconds
  const resetDelay = 2000; // Delay before restarting typing (in ms)

  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < textToType.length) {
      // Add next character
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + textToType[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      // Reset text after a delay
      timeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, resetDelay);
    }

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, [currentIndex, textToType]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:px-36 pb-0 mb-0 sm:pb-0 sm:mb-0"
      id="home"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          <span className="text-primary">{displayedText}</span>
          <span className="text-primary blinking-cursor">|</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-light mt-4 font-semibold">
          Full Stack Developer
        </h2>

        <p className="mt-6 text-light text-base sm:text-lg md:text-xl max-w-md md:max-w-lg mx-auto md:mx-0 font-serif tracking-wide leading-relaxed">
          I craft scalable, production-grade web applications and architect
          robust backends that power seamless digital experiences.
        </p>

        <div className="mt-10 flex flex-col items-center md:items-start space-y-4">
          {/* Social Icons */}
          <div className="flex space-x-6 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/priyanshu003"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-primary text-3xl hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://github.com/devopriyanshu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-primary text-3xl hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="mailto:priyanshupatel1902@gmail.com" aria-label="Email">
              <FaEnvelope className="text-primary text-3xl hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="tel:+917909862919" aria-label="Phone">
              <FaPhone className="text-primary text-3xl hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          {/* Resume Download */}
          <a
            href="/priyanshu.pdf"
            download
            className="inline-flex items-center gap-2 bg-primary text-dark px-4 py-2 rounded-md shadow-md hover:bg-light transition-all duration-300 font-medium"
          >
            <FaDownload className="text-dark" />
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center relative mt-8 md:mt-0"
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
          <div className="absolute top-0 left-0 w-full h-full border-[12px] sm:border-[16px] border-primary rounded-full opacity-90 blur-lg animate-pulse"></div>
          <img
            src={profileImg}
            alt="Anjali Paderiya"
            className="w-full h-full rounded-full shadow-lg border-[12px] sm:border-[16px] border-primary object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
