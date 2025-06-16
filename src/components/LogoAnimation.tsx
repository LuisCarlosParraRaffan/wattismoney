'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const LogoAnimation = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onAnimationComplete();
    }, 2000); // Ocultar después de 2 segundos

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-screen"
    >
      <Image
        src="/images/WiM_Logo.svg"
        alt="WattIsMoney Logo"
        width={200}
        height={200}
        className="w-auto h-auto"
      />
    </motion.div>
  );
};

export default LogoAnimation; 