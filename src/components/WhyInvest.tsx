'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cards = [
  {
    video: '/images/1. Rentabilidad.mp4',
    title: 'Rentabilidad garantizada',
    text: 'Retornos anuales del 14-18% con contratos de venta de energía con las empresas más grandes del país.'
  },
  {
    video: '/images/2. Legal.mp4',
    title: 'Seguridad legal',
    text: 'Contratos regulados y certificados con garantías estatales y seguros especializados.'
  },
  {
    video: '/images/3. Sostenibilidad.mp4',
    title: 'Impacto sostenible',
    text: 'Contribuye a la reducción de emisiones de CO2 y al desarrollo empresarial colombiano.'
  }
];

const WhyInvest = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="why-invest" className="section-padding text-primary relative overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 -z-10">
        <video
          src="/images/4-fondo-whytoinvest.mp4"
          className="w-full h-full object-cover opacity-30 blur-sm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(98, 0, 234,0.2)' }} />
      </div>
      <div className="container-custom flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-10 text-black"
        >
          ¿Por qué invertir con nosotros?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-center mb-8"
        >
        </motion.p>
        <div className="relative w-full max-w-md md:max-w-2xl min-h-[420px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <div
                className="relative w-full h-96 md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl border border-black/10"
                style={{
                  background: 'linear-gradient(135deg, rgb(255,241,118) 0%, rgb(83,109,254) 100%)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                }}
              >
                <video
                  src={cards[current].video}
                  className="absolute inset-0 w-full h-full object-cover object-center z-0"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  style={{ background: '#e9e9e9' }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
                >
                  <div className="bg-black/50 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center max-w-[90%]">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center drop-shadow-lg">
                      {cards[current].title}
                    </h3>
                    <p className="text-lg md:text-xl text-white/90 text-center leading-relaxed drop-shadow-md">
                      {cards[current].text}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest; 