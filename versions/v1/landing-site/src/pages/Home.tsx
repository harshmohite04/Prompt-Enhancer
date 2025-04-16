// src/pages/Home.tsx
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Our Landing Page</h1>
        <p className="text-lg md:text-xl mb-8">
          This is a beautiful, responsive site powered by React, Vite, Tailwind CSS, and TypeScript.
        </p>
        <a
          href="/about"
          className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded transition"
        >
          Learn More
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
