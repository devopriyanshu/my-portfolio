import React, { useState } from "react";
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
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiCplusplus,
    SiMysql,
    SiCanva,
    SiSemanticuireact,
    SiPostman,
    SiLighthouse,
    SiNextdotjs,
} from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";

const Skills = () => {
    const programmingSkills = [
        { name: "HTML", icon: <FaHtml5 className="text-red-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        {
            name: "JavaScript",
            icon: <FaJsSquare className="text-yellow-500" />,
        },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-blue-400" /> },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="text-teal-400" />,
        },
        { name: "Python", icon: <FaPython className="text-green-500" /> },

        { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
        {
            name: "Responsive Design",
            icon: <FaReact className="text-blue-400" />,
        },
        {
            name: "Problem Solving",
            icon: <MdOutlineDesignServices className="text-gray-100" />,
        },
    ];

    const toolSkills = [
        { name: "GitHub", icon: <FaGithub className="text-gray-100" /> },
        {
            name: "UI/UX",
            icon: <MdOutlineDesignServices className="text-pink-400" />,
        },
        { name: "Canva", icon: <SiCanva className="text-purple-500" /> },
        { name: "Figma", icon: <FaFigma className="text-red-500" /> },
        {
            name: "ChatGPT",
            icon: (
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                    alt="ChatGPT"
                    className="w-6 h-6"
                />
            ),
        },
        {
            name: "Semantic UI",
            icon: <SiSemanticuireact className="text-teal-600" />,
        },
        {
            name: "Bootstrap",
            icon: <FaBootstrap className="text-purple-500" />,
        },
        { name: "AWS", icon: <FaAws className="text-orange-400" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        {
            name: "Lighthouse",
            icon: <SiLighthouse className="text-green-600" />,
        },
    ];

    return (
        <section
            id="skills"
            className="py-16 px-6 sm:px-12 md:px-20 lg:px-36 relative overflow-hidden">
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
                        className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl mb-4">{skill.icon}</div>
                        <p className="text-lg font-semibold text-light">
                            {skill.name}
                        </p>
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
                        className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl mb-4">{skill.icon}</div>
                        <p className="text-lg font-semibold text-light">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
