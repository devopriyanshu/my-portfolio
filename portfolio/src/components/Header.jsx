import React, { useState } from "react";

const Header = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (section) => {
        setActiveSection(section);
        const targetElement = document.getElementById(section);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false); // Close mobile menu after navigation
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="bg-dark py-4 px-6 sm:px-12 md:px-20 shadow-md lg:bg-dark lg:py-4">
                <div className="flex justify-between lg:justify-center items-center">
                    {/* Hamburger Menu for Mobile */}
                    <div className="lg:hidden">
                        <button
                            className="text-light focus:outline-none"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d={
                                        isMobileMenuOpen
                                            ? "M6 18L18 6M6 6l12 12" // X icon
                                            : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                                    }
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex space-x-8">
                        {[
                            { id: "home", label: "Home" },
                            { id: "about", label: "About" },
                            { id: "skills", label: "Skills" },
                            { id: "experience", label: "Experience" },
                            { id: "projects", label: "Projects" },
                            { id: "footer", label: "Contact me" },
                        ].map(({ id, label }) => (
                            <button
                                key={id}
                                onClick={() => handleNavClick(id)}
                                className={`text-light transition duration-300 relative ${
                                    activeSection === id
                                        ? "active-link"
                                        : "hover:text-primary"
                                }`}>
                                {label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-dark/90 absolute top-16 left-0 w-full py-4 px-6 mb-16">
                    <nav className="flex flex-col space-y-4">
                        {[
                            { id: "home", label: "Home" },
                            { id: "about", label: "About" },
                            { id: "skills", label: "Skills" },
                            { id: "experience", label: "Experience" },
                            { id: "projects", label: "Projects" },
                            { id: "footer", label: "Contact me" },
                        ].map(({ id, label }) => (
                            <button
                                key={id}
                                onClick={() => handleNavClick(id)}
                                className={`text-light transition duration-300 relative ${
                                    activeSection === id
                                        ? "active-link"
                                        : "hover:text-primary"
                                }`}>
                                {label}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
