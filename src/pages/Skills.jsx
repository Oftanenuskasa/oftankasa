// src/pages/Skills.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaSearch } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiFigma } from 'react-icons/si';

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);

    const categories = [
        { id: 'all', name: 'All Skills' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'design', name: 'Design' }
    ];

    const skills = [
        {
            name: "HTML5",
            icon: <FaHtml5 className="text-4xl" />,
            description: "Semantic HTML, SEO optimization, and accessibility standards.",
            color: "text-red-500",
            level: 90,
            years: 5,
            projects: 30,
            category: 'frontend',
            link: "https://html.spec.whatwg.org",
            features: ["Semantic Markup", "Accessibility", "Forms", "HTML5 APIs"]
        },
        {
            name: "CSS3",
            icon: <FaCss3Alt className="text-4xl" />,
            description: "Modern CSS with Flexbox, Grid, and animations.",
            color: "text-blue-500",
            level: 85,
            years: 5,
            projects: 30,
            category: 'frontend',
            link: "https://www.w3.org/Style/CSS/",
            features: ["Flexbox", "Grid", "Animations", "Responsive Design"]
        },
        {
            name: "JavaScript",
            icon: <SiJavascript className="text-4xl" />,
            description: "Modern JavaScript development with latest features and patterns.",
            color: "text-yellow-400",
            level: 90,
            years: 4,
            projects: 25,
            category: 'frontend',
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            features: ["ES6+", "Async/Await", "DOM", "Web APIs"]
        },
        {
            name: "React",
            icon: <FaReact className="text-4xl" />,
            description: "Building complex applications with modern React practices.",
            color: "text-cyan-400",
            level: 92,
            years: 3,
            projects: 20,
            category: 'frontend',
            link: "https://reactjs.org/docs/getting-started.html",
            features: ["Hooks", "Context", "Redux", "Next.js"]
        },
        {
            name: "MongoDB",
            icon: <SiMongodb className="text-4xl" />,
            description: "Database design and optimization for scalable applications.",
            color: "text-green-500",
            level: 85,
            years: 3,
            projects: 15,
            category: 'backend',
            link: "https://www.mongodb.com/docs/",
            features: ["Aggregation", "Indexing", "Atlas", "Schemas"]
        },
        {
            name: "Figma",
            icon: <SiFigma className="text-4xl" />,
            description: "UI/UX design and prototyping for modern web applications.",
            color: "text-purple-500",
            level: 80,
            years: 2,
            projects: 10,
            category: 'design',
            link: "https://www.figma.com/resources/learn-design/",
            features: ["Prototyping", "Components", "Auto-layout", "Variants"]
        },
    ];

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 600);
        return () => clearTimeout(timer);
    }, [selectedCategory, searchTerm]);

    const filteredSkills = skills.filter(skill => {
        const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
        const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            skill.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        Technical Expertise
                    </h2>
                    <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                        Leveraging cutting-edge technologies to build robust and scalable solutions
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-12 space-y-6">
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                                    selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                        : 'bg-gray-800 text-gray-400 hover:text-white'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Search skills..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-3 bg-gray-800 text-white rounded-full pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSkills.map((skill, index) => (
                        <a 
                            key={index}
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative group transform transition-all duration-300 ${
                                isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative bg-gray-800 p-6 rounded-lg hover:shadow-xl transition duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`${skill.color} transform group-hover:scale-110 transition-transform duration-300`}>
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                                </div>
                                
                                <p className="text-gray-300 mb-4">{skill.description}</p>
                                
                                {/* Skill Level Bar */}
                                <div className="mt-4">
                                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                                        <span>Proficiency</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                                            style={{ width: hoveredSkill === skill.name ? `${skill.level}%` : '0%' }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mt-4">
                                    <div className="flex flex-wrap gap-2">
                                        {skill.features.map((feature, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Experience Info */}
                                <div className="mt-4 flex justify-between text-sm text-gray-400">
                                    <span>{skill.years} Years Experience</span>
                                    <span>{skill.projects} Projects</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <a 
                        href="#contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                                 rounded-full font-bold transform transition duration-300 hover:scale-105 
                                 hover:shadow-lg active:scale-95"
                    >
                        Let&apos;s Work Together
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Skills;