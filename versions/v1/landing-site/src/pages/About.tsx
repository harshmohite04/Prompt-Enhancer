// src/pages/About.tsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg mb-4">
          We’re building modern web experiences using cutting-edge tools like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-lg">
          Our goal is to provide blazing-fast, accessible, and beautifully designed websites with great developer experience.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
