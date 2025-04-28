// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-white py-12" style={{ boxShadow: "0px 0px 12px rgba(3, 136, 255, 1)" }}>
      
      {/* Left Side - Image */}
      <motion.div 
        className="flex-1 flex justify-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/profile.jpg" // about image here (you can use same or different)
          alt="About Me"
          className="w-80 h-80 object-cover rounded-xl shadow-md dark:shadow-gray-700"
          style={{ boxShadow: "12px 12px 12px 12px rgba(3, 136, 255, 1)" }}
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div 
        className="flex-1"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left">About Me</h2>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
          I'm Aniket, a passionate web developer and designer. 
          I specialize in creating interactive websites, solving complex problems, 
          and bringing ideas to life through clean, efficient code. 
          Let's build something amazing together!
        </p>

        <div className="flex justify-center md:justify-start">
          <a
            href="/Aniket-Resume.pdf"  // put your resume pdf in /public folder
            download
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            style={{ boxShadow: "0px 0px 12px rgba(3, 136, 255, 1)" }}
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </motion.div>

    </section>
  );
};

export default About;
