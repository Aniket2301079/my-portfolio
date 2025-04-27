// src/components/Navbar.jsx
import React, { useState } from 'react';
 import ThemeToggle from './ThemeToggle'; // dark mode button
import { Link } from 'react-scroll'; // smooth scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-blue-500 dark:text-blue-500">Aniket</div>

        <div className="hidden md:flex gap-8">
          <Link to="home" smooth duration={500} className="nav-link text-xl hover:text-blue-600 font-bold ">Home</Link>
          <Link to="about" smooth duration={500} className="nav-link text-xl hover:text-blue-600 font-bold ">About</Link>
          <Link to="projects" smooth duration={500} className="nav-link text-xl hover:text-blue-600 font-bold ">Projects</Link>
          <Link to="contact" smooth duration={500} className="nav-link text-xl hover:text-blue-600 font-bold ">Contact</Link>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={handleToggle} className="text-gray-800 dark:text-white focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-gray-900 py-4 gap-6">
          <Link onClick={handleToggle} to="home" smooth duration={500} className="nav-link">Home</Link>
          <Link onClick={handleToggle} to="about" smooth duration={500} className="nav-link">About</Link>
          <Link onClick={handleToggle} to="projects" smooth duration={500} className="nav-link">Projects</Link>
          <Link onClick={handleToggle} to="contact" smooth duration={500} className="nav-link">Contact</Link>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
