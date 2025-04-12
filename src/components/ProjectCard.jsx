import React from 'react';
import portfolio from "../../public/portfolio.png"; // Imported properly
import weather from "../../public/1.mp4";     // Add this image to your public folder
import result from "../../public/2.mp4";       // Add this image to your public folder
import { motion } from "framer-motion";

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A sleek and responsive portfolio made using React, Tailwind CSS, and Framer Motion.',
    img: '../../public/portfolio.png',
    link: 'https://your-portfolio-link.com',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather app using OpenWeather API and modern React hooks.',
    img: '../../public/1.mp4',
    link: 'https://your-weather-app.com',
  },
  {
    title: 'Student Result System',
    description: 'Mini project using MySQL and PHP for managing student marks and grades.',
    img: '../../public/2.mp4',
    link: 'https://your-result-system.com',
  },
];

const ProjectCard = () => {
  return (
    <section className="py-20 bg-black text-white" id="projects">
      <h2 className="text-3xl font-bold text-center text-green-500 mb-14">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-black rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
          >
            <img
              src={project.img}
              alt={`Project - ${project.title}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-green-600">{project.title}</h3>
              <p className="text-sm mt-2 text-gray-700">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 font-semibold mt-4 inline-block hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
