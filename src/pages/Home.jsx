// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa';
import profilePic from '../assets/profile.jpg';
import Typed from 'typed.js';
import { FaChevronDown } from 'react-icons/fa';


const Home = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const controls = useAnimation();

    useEffect(() => {
        const typed = new Typed('#typed-text', {
            strings: [
                'Frontend Developer',
                'React Specialist',
                'UI/UX Enthusiast',
                'Problem Solver'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true
        });

        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Trigger initial animation sequence
        controls.start({
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, delay: 0.2 }
        });

        return () => {
            typed.destroy();
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [controls]);

    const calculateParallax = (depth = 1) => ({
        x: (mousePosition.x - window.innerWidth / 2) * 0.01 * depth,
        y: (mousePosition.y - window.innerHeight / 2) * 0.01 * depth,
    });

    const socialLinks = [
        { icon: FaFacebook, url: 'https://web.facebook.com/Oftanenuskasa/', label: 'Facebook' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/oftanenus-kasa-4692aa257/', label: 'LinkedIn' },
        { icon: FaTelegram, url: 'https://t.me/oftanenuskasaa', label: 'Telegram' },
        { icon: FaGithub, url: 'https://github.com/Oftanenuskasa', label: 'GitHub' },
    ];
    
    return (
        <section id="home" className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
            {/* Enhanced animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="particle absolute bg-white rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                            x: [0, Math.random() * 100 - 50, 0],
                            y: [0, Math.random() * 100 - 50, 0],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4}px`,
                            height: `${Math.random() * 4}px`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                >
                    <motion.div 
                        className="relative inline-block group cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.img 
                            src={profilePic} 
                            alt="Oftanenus Kasa" 
                            className="rounded-full h-40 w-40 mx-auto mb-8 border-4 border-yellow-300 shadow-2xl"
                            style={calculateParallax(0.5)}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                        />
                        <motion.div 
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.3 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    <motion.h1 
                        className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Oftanenus Kasa
                    </motion.h1>

                    <motion.div 
                        className="text-2xl font-light mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        I am a <span id="typed-text" className="text-yellow-300"></span>
                    </motion.div>

                    <motion.p 
                        className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        Crafting exceptional digital experiences through clean code and innovative solutions. 
                        Passionate about creating responsive and user-friendly web applications that make a difference.
                    </motion.p>

                    {/* Social Links */}
                    <motion.div 
                        className="flex justify-center space-x-6 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-300 hover:text-yellow-400 text-2xl"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <social.icon />
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div 
                        className="space-x-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        <motion.a
                            href="#portfolio"
                            className="bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full inline-block"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 20px rgba(252, 211, 77, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="bg-transparent border-2 border-yellow-300 text-yellow-300 font-bold py-3 px-8 rounded-full inline-block"
                            whileHover={{ 
                                scale: 1.05,
                                backgroundColor: "rgba(252, 211, 77, 1)",
                                color: "#1F2937"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div 
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        animate={{ 
                            y: [0, 10, 0],
                        }}
                        transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <FaChevronDown className="text-yellow-300 text-3xl animate-bounce" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;