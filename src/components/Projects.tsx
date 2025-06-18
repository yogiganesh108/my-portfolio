import React from 'react';
import { Github, ExternalLink, Code, Database, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ATM Management System',
      description: 'A comprehensive ATM Management System built with Java Swing, featuring secure user authentication, balance checking, cash withdrawals, deposits, and transaction history. Implemented robust security measures and a user-friendly interface.',
      technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
      github: 'https://github.com/yogiganesh108',
      demo: null,
      icon: Database,
      featured: true
    },
    {
      title: 'React Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode support, and optimized performance. Showcases projects, skills, and professional experience.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/yogiganesh108',
      demo: '#',
      icon: Code,
      featured: true
    },
    {
      title: 'LeetCode Problem Solver',
      description: 'Successfully solved over 101 problems on LeetCode, demonstrating strong problem-solving skills and algorithmic thinking. Focused on data structures, algorithms, and optimization techniques.',
      technologies: ['Java', 'Python', 'Data Structures', 'Algorithms'],
      github: 'https://github.com/yogiganesh108',
      demo: null,
      icon: Code,
      featured: false
    },
    {
      title: 'Frontend Learning Projects',
      description: 'Collection of various frontend projects created during my learning journey at Swapna Bharathi Learning Solutions. Includes responsive websites, JavaScript applications, and React components.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
      github: 'https://github.com/yogiganesh108',
      demo: null,
      icon: Smartphone,
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my work, creativity, and technical skills
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl ${
                  project.featured 
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg mr-4 ${
                          project.featured ? 'bg-blue-100' : 'bg-gray-200'
                        }`}>
                          <project.icon className={`${
                            project.featured ? 'text-blue-600' : 'text-gray-600'
                          }`} size={24} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {project.title}
                            {project.featured && (
                              <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Featured
                              </span>
                            )}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:ml-8">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                      >
                        <Github size={20} className="mr-2" />
                        View Code
                      </a>
                      
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 font-medium"
                        >
                          <ExternalLink size={20} className="mr-2" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {project.featured && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -translate-y-16 translate-x-16"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/yogiganesh108"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={24} className="mr-3" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;