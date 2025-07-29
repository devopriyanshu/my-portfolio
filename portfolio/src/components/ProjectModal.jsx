// src/components/ProjectModal.js
import React from "react";
import { motion } from "framer-motion";

const ProjectModal = ({ isOpen, onClose, codeUrl, liveUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <motion.div
        className="bg-secondary rounded-lg p-6 w-full max-w-md shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold text-light mb-4 text-center">
          View Project Code
        </h3>
        <div className="flex flex-col gap-4">
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-black py-2 px-4 rounded hover:opacity-90 text-center"
          >
            Github
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-black py-2 px-4 rounded hover:opacity-90 text-center"
          >
            Live
          </a>
          <button
            onClick={onClose}
            className="mt-2 text-gray-400 hover:text-white text-sm underline text-center"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
