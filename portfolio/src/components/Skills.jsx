import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGithub,
  FaAws,
  FaBootstrap,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiCanva,
  SiSemanticuireact,
  SiPostman,
  SiLighthouse,
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiDocker,
  SiVite,
  SiFastapi,
  SiOpenai,
  SiLeetcode,
  SiMongodb,
} from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";

const Skills = () => {
  const programmingSkills = [
    { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "Python", icon: <FaPython className="text-green-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },

    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },

    { name: "HTML", icon: <FaHtml5 className="text-red-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },
  ];

  const toolSkills = [
    { name: "GitHub", icon: <FaGithub className="text-gray-100" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    {
      name: "n8n",
      icon: (
        <img src="/src/assets/images/n8n.svg" alt="n8n" className="w-8 h-8" />
      ),
    },
    { name: "Linux", icon: <FaLinux className="text-yellow-300" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
    { name: "AWS", icon: <FaAws className="text-orange-400" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "ChatGPT", icon: <SiOpenai className="text-white" /> },
  ];

  return (
    <section
      id="skills"
      className="py-16 px-6 sm:px-12 md:px-20 lg:px-36 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-[#38f9d6] rounded-full opacity-75 blur-3xl animate-glow top-1/4 left-1/4"></div>
        <div className="absolute w-80 h-80 bg-[#38f9d6] rounded-full opacity-75 blur-3xl animate-glow bottom-1/4 right-1/4"></div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
        My Skills
      </h2>

      {/* Programming Languages Section */}
      <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6 mt-12 text-center">
        Programming Languages & Frameworks
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {programmingSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <p className="text-lg font-semibold text-light">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Tools Section */}
      <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6 mt-16 text-center">
        Tools & Technologies
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {toolSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <p className="text-lg font-semibold text-light">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
