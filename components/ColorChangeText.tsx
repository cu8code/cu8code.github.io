"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface ColorChangeTextProps {
  children: React.ReactNode;
  startColor: string;
  endColor: string;
}

const ColorChangeText: React.FC<ColorChangeTextProps> = ({ children, startColor, endColor }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ color: startColor }}
      animate={{ color: inView ? endColor : startColor }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default ColorChangeText;