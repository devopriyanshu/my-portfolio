// src/components/Footer.jsx
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import ContactForm from "./ContactForm"; // Import the ContactForm component

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-dark via-secondary to-dark text-light py-12 px-6 sm:px-12 md:px-20 lg:px-36"
      id="footer"
    >
      <div className="max-w-6xl mx-auto">
        {/* Social Media Section */}
        <div className="flex flex-col items-center mb-12 animate-fadeIn">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
            Follow Me
          </h2>
          <div className="flex space-x-8">
            <a
              href="https://www.linkedin.com/in/priyanshu003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-3xl hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:shadow-glow transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/devopriyanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-3xl hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="hover:shadow-glow transition-shadow duration-300" />
            </a>
            {/* <a
              href="https://www.instagram.com/anjali_rajpoot_1609/profilecard/?igsh=MWZmZmt5eXQ3bHVqMQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-3xl hover:text-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:shadow-glow transition-shadow duration-300" />
            </a> */}
            <a
              href="mailto:priyanshupatel1902@gmail.com"
              className="text-primary text-3xl hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="hover:shadow-glow transition-shadow duration-300" />
            </a>
            <a
              href="tel:+917909862919"
              className="text-primary text-3xl hover:text-primary transition-colors duration-300"
              aria-label="Phone"
            >
              <FaPhone className="hover:shadow-glow transition-shadow duration-300" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary mb-12" />

        {/* Contact and Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Contact Me
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center">
                <FaEnvelope className="text-primary text-xl mr-4" />
                <a
                  href="mailto:anjalirajpoot1603@gmail.com"
                  className="hover:text-secondary transition-colors duration-300 text-lg"
                >
                  priyanshupatel1902@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary text-xl mr-4" />
                <a
                  href="tel:+917879667031"
                  className="hover:text-secondary transition-colors duration-300 text-lg"
                >
                  +91 7909862919
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-primary text-xl mr-4" />
                <span className="text-lg">Bhopal, MP, India</span>
              </li>
            </ul>
          </div>

          {/* Additional Information and Contact Form */}
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              More Info
            </h3>
            <p className="text-lg mb-4">
              I'm available for freelance projects and collaborations. Feel free
              to send me a message using the form below to discuss how we can
              work together to achieve your goals.
            </p>
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-secondary pt-6 animate-fadeIn">
          <p className="text-center text-light text-sm">
            &copy; {new Date().getFullYear()} Priyanshu Patel. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
