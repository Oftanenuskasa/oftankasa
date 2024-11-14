// src/pages/Footer.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { 
    FaFacebook, FaLinkedin, FaGithub, FaHeart, FaChevronUp,
    FaHome, FaUser, FaTools, FaBriefcase, FaEnvelope, 
    FaDownload, FaTelegramPlane,FaRocket
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';


const Footer = () => {
    const [, setHoveredLink] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipContent, setTooltipContent] = useState('');
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { 
            icon: <FaFacebook />, 
            url: "https://web.facebook.com/Oftanenuskasa/", 
            name: "Facebook",
            color: "hover:bg-blue-600"
        },
        { 
            icon: <FaTelegramPlane />,  // Added Telegram icon
            url: "https://t.me/oftanenuskasaa",  // Telegram URL
            name: "Telegram",
            color: "hover:bg-blue-400"
        },
        { 
            icon: <FaLinkedin />, 
            url: "https://www.linkedin.com/in/oftanenus-kasa-4692aa257/", 
            name: "LinkedIn",
            color: "hover:bg-blue-700"
        },
        { 
            icon: <FaGithub />, 
            url: "https://github.com/Oftanenuskasa", 
            name: "GitHub",
            color: "hover:bg-gray-800"
        }
    ];
    
    const navLinks = [
        { 
            href: "#home", 
            label: "Home", 
            icon: <FaHome />,
            description: "Back to the main page",
            color: "from-pink-500 to-red-500"
        },
        { 
            href: "#about", 
            label: "About", 
            icon: <FaUser />,
            description: "Learn more about me",
            color: "from-purple-500 to-indigo-500"
        },
        { 
            href: "#skills", 
            label: "Skills", 
            icon: <FaTools />,
            description: "Check out my technical abilities",
            color: "from-blue-500 to-cyan-500"
        },
        { 
            href: "#portfolio", 
            label: "Portfolio", 
            icon: <FaBriefcase />,
            description: "View my latest works",
            color: "from-green-500 to-teal-500"
        },
        { 
            href: "#contact", 
            label: "Contact", 
            icon: <FaEnvelope />,
            description: "Get in touch with me",
            color: "from-yellow-500 to-orange-500"
        }
    ];
    

    return (
        <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
            {/* Animated Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1">
                <div className="animate-gradient w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"></div>
            </div>

            <div className="container mx-auto px-4 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center md:text-left"
                    >
                        <motion.h2 
                            className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-yellow-300 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                        >
                            Oftanenus Kasa
                        </motion.h2>
                        <p className="mt-2 text-gray-300">Full Stack Developer & UI/UX Designer</p>
                        <motion.button
    onClick={() => window.open('https://drive.google.com/file/d/1SWXAR-mqSx1YvvLrp9y9NfgH-TyNbW2J/view?usp=drive_link', '_blank')} // Replace with your CV URL
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center gap-2 mx-auto md:mx-0"
>
    <FaDownload /> Download CV
</motion.button>
                    </motion.div>

                    {/* Quick Links Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-semibold text-center md:text-left mb-6 flex items-center gap-2">
                            <FaRocket className="text-yellow-400" />
                            Quick Navigation
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={index}
                                    onMouseEnter={() => {
                                        setHoveredLink(index);
                                        setShowTooltip(true);
                                        setTooltipContent(link.description);
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredLink(null);
                                        setShowTooltip(false);
                                    }}
                                    onMouseMove={handleMouseMove}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a
                                        href={link.href}
                                        className={`
                                            flex items-center gap-2 p-3 rounded-lg
                                            bg-gradient-to-r ${link.color}
                                            transform transition-all duration-300
                                            hover:shadow-lg hover:shadow-white/10
                                        `}
                                    >
                                        <span className="text-lg">{link.icon}</span>
                                        <span>{link.label}</span>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social Links Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-center md:text-left"
                    >
                        <h3 className="text-xl font-semibold mb-6">Let&apos;s Connect</h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        w-12 h-12 rounded-lg flex items-center justify-center
                                        backdrop-blur-lg bg-white/10 ${social.color}
                                        transition-all duration-300
                                    `}
                                    whileHover={{ 
                                        scale: 1.1,
                                        rotate: 360,
                                        transition: { duration: 0.3 }
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Newsletter Subscription */}
                        <motion.div 
                            className="mt-8 p-4 bg-white/5 rounded-lg backdrop-blur-lg"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h4 className="text-lg mb-2">Stay Updated</h4>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 rounded-lg bg-black/30 border border-white/20 focus:outline-none focus:border-purple-500"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Copyright Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 pt-8 border-t border-white/10 text-center"
                >
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Oftanenus Kasa. All Rights Reserved.
                        Made with <FaHeart className="inline-block text-red-500 animate-pulse" /> and React.js
                    </p>
                </motion.div>
            </div>

            {/* Floating Back to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <FaChevronUp className="text-white text-xl" />
            </motion.button>

            {/* Tooltip */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="fixed pointer-events-none bg-black/80 text-white px-4 py-2 rounded-lg text-sm"
                        style={{
                            left: tooltipPosition.x + 10,
                            top: tooltipPosition.y + 10,
                            zIndex: 1000
                        }}
                    >
                        {tooltipContent}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Decorative Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-1">
                <div className="animate-gradient w-full h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
            </div>
        </footer>
    );
};

export default Footer;

