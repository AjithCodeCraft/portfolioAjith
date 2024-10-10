"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TextRotator = () => {
  const items = [
    'Freelancer',
    'Gamer',
    'Creator',
    'Student',
    'Designer'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="py-4 rounded-md px-7 flex flex-col justify-center items-center overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl text-gray-700">
        I am a Software Developer & 
        <span className="inline-flex ml-2 flex-col">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }} // Start off-screen
            animate={{ opacity: 1, y: 0 }} // Slide in
            exit={{ opacity: 0, y: -20 }} // Slide out
            transition={{ duration: 0.5 }} // Duration of the animation
            className="text-[#2f7df4] text-lg sm:text-3xl leading-tight"
          >
            {items[currentIndex]}
          </motion.div>
        </span>
      </div>
    </div>
  );
};

export default TextRotator;
