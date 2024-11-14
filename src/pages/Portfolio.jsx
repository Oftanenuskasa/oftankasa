// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const [selectedTag, setSelectedTag] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [, setActiveProject] = useState(null);

    const projectList = [
        {
            name: "Inventory Management System",
            description: "Full-stack inventory management solution built with React.js and MongoDB. Features include stock tracking, order management, and real-time updates.",
            longDescription: "A comprehensive inventory management system that helps businesses track their stock levels, manage orders, and generate reports. Built with React.js frontend and MongoDB backend.",
            thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200' fill='none'><rect width='300' height='200' fill='%23333'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='24'>Inventory System</text></svg>",
            images: [],
            demoLink: "https://inventory-demo.example.com",
            githubLink: "https://github.com/Oftanenuskasa/my-task-xion",
            tags: ["React.js", "MongoDB", "Node.js", "Express"],
            highlights: [
                "Real-time stock tracking",
                "Order management system",
                "Automated low stock alerts",
                "Report generation"
            ],
            completionDate: "2024-01",
            role: "Full Stack Developer",
        },
        {
            name: "Music Player App",
            description: "A JavaFX-based music player application with features like playlist management, audio visualization, and media controls.",
            longDescription: "A desktop music player application built using JavaFX. Includes features for managing playlists, visualizing audio, and controlling media playback.",
            thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200' fill='none'><rect width='300' height='200' fill='%23444'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='24'>Music Player</text></svg>",
            images: [],
            demoLink: "https://music-player.example.com",
            githubLink: "https://github.com/Oftanenuskasa/media-playerapp",
            tags: ["Java", "JavaFX", "CSS", "SQL"],
            highlights: [
                "Custom audio visualizer",
                "Playlist management",
                "Media controls",
                "File format support"
            ],
            completionDate: "2023-12",
            role: "Java Developer",
        },
        {
            name: "Resident Management System",
            description: "A web application for managing resident information, amenities, and maintenance requests using PHP and Laravel.",
            longDescription: "A comprehensive Resident Management System developed with PHP and Laravel. This application allows property managers to efficiently manage resident data, track amenities, handle maintenance requests, and generate reports.",
            thumbnail: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200' fill='none'><rect width='300' height='200' fill='%23666'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='24'>Resident Management</text></svg>",
            images: [],
            demoLink: "https://resident-management.example.com",
            githubLink: "https://github.com/Oftanenuskasa/oftaan-resident-mgs",
            tags: ["PHP", "Laravel", "MySQL", "HTML", "CSS"],
            highlights: [
                "User authentication and role management",
                "Maintenance request tracking",
                "Amenities management",
                "Dynamic reporting features"
            ],
            completionDate: "2024-01",
            role: "Backend Developer",
        }
    ];

    const allTags = ['all', ...new Set(projectList.flatMap(project => project.tags))];

    const filteredProjects = projectList.filter(project => {
        const matchesTag = selectedTag === 'all' || project.tags.includes(selectedTag);
        const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesTag && matchesSearch;
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const projectVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 id="portfolio-header" className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        My Projects
                    </h2>
                    <p id="portfolio-description" className="text-gray-300 text-xl max-w-3xl mx-auto">
                        Exploring technology through practical applications
                    </p>
                </div>

                {/* Search and Filter */}
                <div id="portfolio-search-filter" className="mb-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Search Bar */}
                        <div className="relative w-full md:w-96">
                            <input
                                type="text"
                                id="portfolio-search"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 pl-12 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>

                        {/* Tags Filter */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {allTags.map((tag) => (
                                <button
                                    key={tag}
                                    id={`portfolio-tag-${tag}`}
                                    onClick={() => setSelectedTag(tag)}
                                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                        selectedTag === tag
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div 
                    id="portfolio-projects-grid"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            id={`portfolio-project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                            variants={projectVariants}
                            className="group relative"
                            onClick={() => setActiveProject(project)}
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative bg-gray-800 rounded-lg p-6 h-full flex flex-col">
                                <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                                    <img
                                        src={project.thumbnail}
                                        alt={project.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex justify-between items-center mt-auto">
                                    <a
                                        href={project.githubLink}
                                        id={`portfolio-github-link-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition duration-300"
                                    >
                                        <FaGithub /> Code
                                    </a>
                                    <a
                                        href={project.demoLink}
                                        id={`portfolio-demo-link-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition duration-300"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <a
                        href="https://github.com/yourusername"
                        id="portfolio-view-more-on-github"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                                 rounded-full font-bold transform transition duration-300 hover:scale-105 
                                 hover:shadow-lg active:scale-95"
                    >
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;