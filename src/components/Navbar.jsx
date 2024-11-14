// src/components/Navbar.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'portfolio', label: 'Portfolio' }, // Changed 'work' to 'portfolio'
        { id: 'contact', label: 'Contact' }
    ];
    
    // Handle smooth scrolling to sections
    const scrollToSection = (sectionId) => {
        setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80; // Adjust this value based on your navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // Handle scroll events and section detection
    useEffect(() => {
        const handleScroll = () => {
            // Add background color when scrolled
            setIsScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.id);
            
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-gradient-to-r from-blue-500/95 to-purple-600/95 backdrop-blur-sm shadow-lg' 
                : 'bg-gradient-to-r from-blue-500 to-purple-600'
        }`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo and Name */}
                    <motion.div 
                        className="flex items-center cursor-pointer" 
                        onClick={() => scrollToSection('home')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img 
                            src={logo} 
                            alt="Logo" 
                            className="h-12 w-12 rounded-full border-2 border-white shadow-lg mr-2" 
                        />
                       <h1 className="text-white text-xl font-bold group relative inline-block transition-transform duration-300 ease-in-out transform hover:scale-105">
    Oftanenus Kasa
    <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-white transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
</h1>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <motion.button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`
                                    relative px-4 py-2 text-white rounded-lg
                                    transition-colors duration-300
                                    hover:text-yellow-300
                                    ${activeSection === link.id ? 'text-yellow-300' : ''}
                                `}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.label}
                                {activeSection === link.id && (
                                    <motion.span 
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 rounded-full"
                                        layoutId="activeSection"
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button 
                        className="md:hidden text-white p-2"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-gradient-to-b from-blue-600 to-purple-700 rounded-b-2xl shadow-xl"
                        >
                            <div className="py-4 space-y-2">
                                {navLinks.map((link) => (
                                    <motion.button
                                        key={link.id}
                                        onClick={() => scrollToSection(link.id)}
                                        className={`
                                            w-full px-4 py-3 text-left text-white
                                            transition-colors duration-300
                                            hover:bg-white/10
                                            ${activeSection === link.id ? 'bg-white/20' : ''}
                                        `}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {link.label}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;