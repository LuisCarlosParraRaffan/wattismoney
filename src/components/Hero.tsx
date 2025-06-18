'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 1000); // Reproducir después de 1 segundo

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          src="/images/Videoinicial.mp4"
          className="w-full h-full object-cover opacity-30"
          muted
          loop
        />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Invierte en el Futuro de la Energía
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Únete a la revolución energética y genera retornos del 14% E.A. mientras construyes un futuro más sostenible para las prinicipales industrias de latinoamerica.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            <a href="#contact">Invierte ahora</a>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-black/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero; 