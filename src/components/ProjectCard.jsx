
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio',
    img: 'Portfolio.png', 
    github: 'https://github.com/Ueslly-Code/my-portfolio.git',
    demo: 'https://my-portfolio-8q41.vercel.app/',
  },
  {
    title: 'Calculator-App',
    img: 'calculator.png',
    github: 'https://github.com/Ueslly-Code/Calculator-App.git',
    demo: 'https://portfolioaniket010.netlify.app/',
  },
  {
    title: 'Weather App',
    img: 'todo.png',
    github: 'https://github.com/Ueslly-Code/Weather_app.git',
    demo: 'https://whiteboard-app.netlify.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className=" min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-white" style={{ boxShadow: "0px 0px 12px rgba(3, 136, 255, 1)" }}>
      
      <h2 className="text-4xl font-bold mb-10">My Projects</h2>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <div className="overflow-hidden" style={{ boxShadow: "0px 0px 12px rgba(3, 136, 255, 1)" }}>
              <img 
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 px-3 py-2 rounded-md text-sm transition-all duration-300"
                >
                  <FaGithub /> Code
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-green-500 hover:text-white dark:hover:bg-green-500 px-3 py-2 rounded-md text-sm transition-all duration-300"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
