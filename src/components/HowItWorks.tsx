'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Crea tu perfil de inversionista',
    description: 'Regístrate en pocos pasos, define tu perfil y preferencias de inversión. Desde USD 100, accede a oportunidades antes reservadas para grandes fondos.',
    image: '/images/1-emocion.png',
  },
  {
    number: '02',
    title: 'Explora contratos y selecciona el que más se ajuste a tu perfil',
    description: 'Accede a un portafolio diversificado de contratos energéticos. Puedes ver los detalles de cada contrato, fraccionarlos y elegir exactamente dónde y cuánto quieres invertir.',
    image: '/images/2-analisis.png',
  },
  {
    number: '03',
    title: 'Configura tu retorno',
    description: 'Define cómo quieres recibir tu capital e intereses. Repagos mensuales, trimestrales o al vencimiento. Claridad total desde el primer momento.',
    image: '/images/3-configuracion.png',
  },
  {
    number: '04',
    title: 'Haz seguimiento y conoce tu impacto',
    description: 'Visualiza tus ganancias en tiempo real. Recibe reportes de desempeño y descubre el impacto ambiental generado por tu inversión.',
    image: '/images/4-seguimiento.png',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 -z-10">
        <video
          src="/images/5-fondoHowItWorks.mp4"
          className="w-full h-full object-cover opacity-30 blur-sm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(98, 0, 234,0.2)' }} />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          ¿ Cómo Funciona ?
        </motion.h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.3,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Imagen */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Contenido */}
              <div className="w-full lg:w-1/2">
                <div className="bg-black text-primary p-8 rounded-xl h-full">
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">{step.number}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black mb-6 leading-tight">{step.title}</h3>
                  <p className="text-primary/80 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 