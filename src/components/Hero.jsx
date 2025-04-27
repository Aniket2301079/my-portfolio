// src/components/Hero.jsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6">
      
      {/* Left Side - Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Aniket</h1>

        <TypeAnimation
          sequence={[
            'Developer 💻', 2000,
            'Designer 🎨', 2000,
            'Coder ⚡', 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-3xl font-semibold text-blue-500 dark:text-blue-500"
        />

        <p className="mt-6 max-w-md text-gray-600 dark:text-gray-400">
          I love building amazing websites, apps, and solving complex problems through code.
        </p>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-12 text-3xl text-blue-500 dark:text-blue-400 hidden md:block"
        >
          <FaChevronDown />
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <motion.div 
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/profile.png"  // <<== apna image yaha dena
          alt="Profile"
          className="w-72 h-72 object-cover rounded-full shadow-lg dark:shadow-gray-700"
          style={{ boxShadow: "0px 0px 150px rgba(3, 136, 255, 1)" }}
        />
      </motion.div>

    </section>
  );
};

export default Hero;
