"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';


interface ScrollRevealTextProps {
  children: React.ReactNode;
}

const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({ children }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 50, filter: "blur(5px)" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealText;