'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          // Intentar reproducir el video
          await videoRef.current.play();
          setIsVideoLoaded(true);
        } catch (error) {
          console.log('Video autoplay failed, will retry on user interaction');
          // Si falla, intentar reproducir en la primera interacción del usuario
          const handleUserInteraction = async () => {
            try {
              await videoRef.current?.play();
              setIsVideoLoaded(true);
              document.removeEventListener('touchstart', handleUserInteraction);
              document.removeEventListener('click', handleUserInteraction);
            } catch (err) {
              console.log('Video still cannot play');
            }
          };
          
          document.addEventListener('touchstart', handleUserInteraction);
          document.addEventListener('click', handleUserInteraction);
        }
      }
    };

    // Intentar reproducir inmediatamente y después de un delay
    playVideo();
    const timer = setTimeout(playVideo, 1000);
    
    // También intentar reproducir cuando el video esté listo
    const handleCanPlay = () => {
      playVideo();
    };
    
    if (videoRef.current) {
      videoRef.current.addEventListener('canplay', handleCanPlay);
    }

    return () => {
      clearTimeout(timer);
      if (videoRef.current) {
        videoRef.current.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Video de fondo */}
        <video
          ref={videoRef}
          src="/images/Videoinicial.mp4"
          className="w-full h-full object-cover opacity-30"
          muted
          loop
          playsInline
          preload="metadata"
          autoPlay
        />
        
        {/* Imagen de respaldo para dispositivos que no soportan video */}
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-200 via-yellow-100 to-green-100 opacity-30"
          style={{
            backgroundImage: `url('/images/Videoinicial.mp4')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
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
          Invierte en contratos de energía con rentabilidades desde 14% E.A.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Únete a la revolución energética y genera retornos mientras construyes un futuro más sostenible para las prinicipales industrias de latinoamerica.
          </p>
          <p className="text-[12px] md:text-xl mb-12 max-w-3xl mx-auto">
           Todos los contratos tendrán fuente de pago para garantizar la rentabilidad de tu inversión
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