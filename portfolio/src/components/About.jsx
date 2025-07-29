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
            intro About Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            <span className="block md:hidden">
              Motivated CS student with a passion for intuitive web development.
              Skilled in React.js, Tailwind CSS, and responsive design.
              Experienced in healthcare and e-commerce platforms, ensuring
              seamless user experiences.
            </span>
            <span className="hidden md:block">
              I’m Priyanshu Patel, an aspiring software developer currently
              pursuing B.Tech in Computer Science at VIT Bhopal. I’m passionate
              about building scalable web and mobile applications that blend
              clean design with solid engineering. My interests lie at the
              intersection of full-stack development, system design, and
              intelligent automation. I enjoy turning ideas into
              products—whether it’s developing wellness platforms, building
              AI-powered agents, or optimizing backend APIs. I’ve gained
              hands-on experience through internships and personal projects,
              using technologies like React, Node.js, Express, PostgreSQL, and
              Python. I’m also deeply curious about browser automation, API
              design, and problem-solving through code. When I’m not coding, I
              enjoy participating in hackathons, writing clean reusable
              components, or exploring open-source tools. Let’s connect and
              build something impactful!
            </span>
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
