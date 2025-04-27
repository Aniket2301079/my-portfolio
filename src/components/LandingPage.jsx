import React from "react";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingPage = ({ onExploreClick }) => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100 flex items-center justify-center px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-2xl px-6 py-10 rounded-xl shadow-lg bg-white bg-opacity-30 backdrop-blur-md"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-blue-500 drop-shadow-xl">
            Aniket
          </span>
        </motion.h1>

        {/* Typewriter effect */}
        <div className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
          <ReactTyped
            strings={["Web Developer", "Programmer", "Tech Enthusiast"]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>

        {/* Description */}
        <p className="text-md md:text-lg text-gray-700 text-3xl mb-8">
          I build fast, responsive, and visually stunning websites using modern
          web technologies. Let's create something amazing together!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
            whileHover={{ scale: 1.2, color: "#333" }}
          >
            <FaGithub size={30} />
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
          >
            <FaLinkedin size={30} />
          </motion.a>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition duration-300"
            whileHover={{ scale: 1.2, color: "#E1306C" }}
          >
            <FaInstagram size={30} />
          </motion.a>
        </div>

        {/* Explore Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 12px rgba(3, 136, 255, 1)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onExploreClick}
          className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        >
          Explore Portfolio
        </motion.button>
      </motion.div>
    </section>
  );
};

export default LandingPage;
