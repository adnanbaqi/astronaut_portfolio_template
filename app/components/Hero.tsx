"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-9xl font-bold text-white mb-4"
        >
          John Doe
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-blue-400 mb-8"
        >
          Full Stack Developer
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#contact"
            className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}