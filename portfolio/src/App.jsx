import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="text-light font-sans min-h-screen relative overflow-hidden bg-gradient-to-br from-dark via-secondary to-dark">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Dynamic Light Gradient */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-primary to-secondary opacity-30 blur-3xl"
          animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "20%", left: "10%" }}
        ></motion.div>

        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-secondary to-primary opacity-20 blur-2xl"
          animate={{ x: [0, -80, 80, 0], y: [0, 80, -80, 0] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "15%", right: "20%" }}
        ></motion.div>

        {/* Rotating Rings */}
        <motion.div
          className="absolute w-[200px] h-[200px] border-4 border-primary rounded-full opacity-40"
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: "30%", left: "30%" }}
        ></motion.div>
        <motion.div
          className="absolute w-[150px] h-[150px] border-2 border-primary rounded-full opacity-30"
          animate={{ rotate: [360, 0] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ bottom: "20%", right: "25%" }}
        ></motion.div>
      </div>

      {/* Page Content */}
      <Header />
      <main>
        <Hero />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Projects />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Experience />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
