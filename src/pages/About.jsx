// src/pages/About.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import profilePic from '../assets/profile.jpg';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJs, FaLaptopCode, FaUserGraduate, FaCoffee } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');
    const [isHoveredSkill, setIsHoveredSkill] = useState(null);
    const [showMore, setShowMore] = useState(false);

    const skills = [
        { 
            icon: FaHtml5, 
            name: "HTML5", 
            color: "text-red-500", 
            level: 90,
            description: "Semantic HTML, Accessibility, SEO best practices",
            link: "https://html.spec.whatwg.org"
        },
        { 
            icon: FaCss3Alt, 
            name: "CSS3", 
            color: "text-blue-500", 
            level: 85,
            description: "Responsive design, Animations, Flexbox/Grid",
            link: "https://www.w3.org/Style/CSS/"
        },
        { 
            icon: FaJs, 
            name: "JavaScript", 
            color: "text-yellow-400", 
            level: 88,
            description: "ES6+, Async/Await, DOM manipulation",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        { 
            icon: FaReact, 
            name: "React", 
            color: "text-blue-400", 
            level: 92,
            description: "Hooks, Context, Redux, Next.js",
            link: "https://reactjs.org/docs/getting-started.html"
        },
        { 
            icon: SiMongodb, 
            name: "MongoDB", 
            color: "text-green-600", 
            level: 75,
            description: "CRUD operations, Aggregation, Atlas",
            link: "https://www.mongodb.com/docs/"
        },
        { 
            icon: FaGitAlt, 
            name: "Git", 
            color: "text-orange-600", 
            level: 85,
            description: "Version control, Branching, Collaboration",
            link: "https://git-scm.com/doc"
        },
    ];

    const experiences = [
        {
            icon: FaLaptopCode,
            title: "Senior Full Stack Developer",
            company: "Xion Computing plc.",
            period: "2023 - Present",
            description: "Leading development of enterprise applications"
        },
        {
            icon: FaUserGraduate,
            title: "Software Engineering Degree",
            company: "Tech University",
            period: "2021 - 2025",
            description: "Bachelor's in Software Engineering"
        },
        {
            icon: FaCoffee,
            title: "Freelance Developer",
            company: "Self-employed",
            period: "2023 - 2024",
            description: "Worked on various client projects"
        }
    ];

    useEffect(() => {
        const skillBars = document.querySelectorAll('.skill-bar-fill');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fill');
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));

        // Add scroll animation for elements
        const fadeElements = document.querySelectorAll('.fade-in-element');
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(element => fadeObserver.observe(element));

        return () => {
            observer.disconnect();
            fadeObserver.disconnect();
        };
    }, []);

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
            <div className="container mx-auto px-4">
                {/* Profile Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 fade-in-element">
                    <div className="lg:w-1/3 relative group cursor-pointer">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <img 
                            src={profilePic} 
                            alt="Oftanenus Kasa" 
                            className="relative rounded-full w-64 h-64 object-cover border-4 border-white transform transition duration-500 group-hover:scale-105 group-hover:rotate-3" 
                        />
                    </div>
                    
                    <div className="lg:w-2/3 space-y-6">
                        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400 transition-all duration-500">
                            About Me
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed animate-fadeIn">
                            {showMore ? (
                                <>
                                    Hello! I&apos;m Oftanenus Kasa, a passionate Full Stack Developer with a keen eye for creating 
                                    elegant, efficient, and user-centric digital solutions. With several years of experience 
                                    in web development, I&apos;ve cultivated a deep understanding of both frontend and backend technologies.
                                    My approach combines technical expertise with creative problem-solving, ensuring that each 
                                    project not only meets but exceeds expectations.
                                </>
                            ) : (
                                "Hello! I'm Oftanenus Kasa, a passionate Full Stack Developer..."
                            )}
                        </p>
                        <button 
                            onClick={() => setShowMore(!showMore)}
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                            {showMore ? 'Show Less' : 'Read More'}
                        </button>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-12 fade-in-element">
                    <div className="flex space-x-4 bg-gray-800 p-2 rounded-lg">
                        {['skills', 'experience'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-lg transition duration-300 ${
                                    activeTab === tab 
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                                    : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                {activeTab === 'skills' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-element">
                        {skills.map((skill, index) => (
                            <div 
                                key={index}
                                onMouseEnter={() => setIsHoveredSkill(index)}
                                onMouseLeave={() => setIsHoveredSkill(null)}
                                className="relative"
                            >
                                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                                    <div className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                                        <div className="flex items-center gap-4 mb-4">
                                            <skill.icon className={`text-3xl ${skill.color}`} />
                                            <span className="text-lg font-semibold">{skill.name}</span>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div 
                                                className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                                                style={{ 
                                                    width: '0%',
                                                    '--target-width': `${skill.level}%`
                                                }}
                                            ></div>
                                        </div>
                                        {isHoveredSkill === index && (
                                            <div className="absolute inset-0 bg-gray-900 bg-opacity-90 rounded-lg p-6 flex items-center justify-center text-center transform transition-all duration-300">
                                                <p className="text-sm text-gray-200">{skill.description}</p>
                                            </div>
                                        )}
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                )}

                {/* Experience Section */}
                {activeTab === 'experience' && (
                    <div className="space-y-8 fade-in-element">
                        {experiences.map((exp, index) => (
                            <div 
                                key={index}
                                className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition duration-300 transform hover:-translate-x-2"
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <exp.icon className="text-2xl text-blue-400" />
                                    <div>
                                        <h3 className="text-xl font-bold">{exp.title}</h3>
                                        <p className="text-gray-400">{exp.company}</p>
                                    </div>
                                    <span className="ml-auto text-sm text-gray-400">{exp.period}</span>
                                </div>
                                <p className="text-gray-300 ml-10">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Call to Action */}
                <div className="text-center mt-16 fade-in-element">
                    <a 
                        href="#portfolio" 
                        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full 
                                 text-white font-bold text-lg transform transition duration-300 hover:scale-105 
                                 hover:shadow-lg active:scale-95"
                    >
                        Explore My Work
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;