// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: '95%' },
  { name: 'CSS', level: '90%' },
  { name: 'JavaScript', level: '85%' },
  { name: 'React.js', level: '80%' },
  { name: 'Tailwind CSS', level: '85%' },
 
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white" style={{ boxShadow: "0px 0px 12px rgba(3, 136, 255, 1)" }}>
      
      <h2 className="text-4xl font-bold mb-10">My Skills</h2>

      <div className="w-full max-w-3xl space-y-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full"
          >
            <div className="flex justify-between mb-2">
              <span className="text-lg font-medium">{skill.name}</span>
              <span className="text-sm font-semibold text-blue-500">{skill.level}</span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden" style={{ boxShadow: "0px 0px 12px rgba(3, 136, 255, 1)" }}>
              <div
                className="h-4 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 rounded-full transition-all duration-700 hover:scale-x-105 origin-left"
                style={{ width: skill.level }}
                
              ></div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Skills;
