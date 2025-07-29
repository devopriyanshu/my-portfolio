import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/images/profile2.png";

const About = () => {
  return (
    <motion.section
      id="about"
      className="px-6 sm:px-12 md:px-20 lg:px-36 sm:mt-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start text-light p-6 bg-secondary rounded-lg shadow-lg mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Image Section */}
        {/* <motion.div
                    className="flex justify-center md:justify-start mb-8 md:mb-0 md:mr-16"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}>
                    <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg shadow-lg">
                        <img
                            src={profileImg}
                            alt="Anjali Paderiya"
                            className="w-full h-full rounded-lg object-cover border-4 border-primary shadow-md"
                        />
                        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary rounded-lg opacity-50 blur-md animate-pulse"></div>
                    </div>
                </motion.div> */}

        {/* Text Section */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 mt-3">
            About Me
          </h2>
          <p className="text-sm sm:text-xl leading-relaxed mt-4 text-light">
            <span className="block md:hidden">
              Passionate full stack developer focused on building high-quality,
              responsive web platforms with clean UIs and reliable APIs.
              Experienced in building healthcare and e-commerce solutions that
              deliver performance and user trust.
            </span>
            <span className="hidden md:block">
              I’m Priyanshu Patel, a software developer pursuing B.Tech in
              Computer Science at VIT Bhopal. I specialize in building
              end-to-end web applications with modern frontend frameworks,
              robust backend architectures, and secure APIs. My experience
              includes developing production-ready platforms in healthcare and
              e-commerce, where performance, security, and user experience are
              key. I work extensively with technologies like React, Node.js,
              Express, PostgreSQL, and TypeScript to deliver maintainable and
              scalable solutions. I’m a strong believer in writing clean,
              modular code, contributing to team projects, and continuously
              learning to improve my craft. Let's collaborate and bring your
              ideas to life!
            </span>
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
