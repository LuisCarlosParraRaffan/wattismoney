'use client';

import { motion } from 'framer-motion';
import { ChartBarIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: ChartBarIcon,
    title: 'Rentabilidad Garantizada',
    description: 'Retornos anuales del 12-15% con contratos de venta de energía a largo plazo con las empresas más grandes del país.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Seguridad Legal',
    description: 'Contratos regulados y certificados con garantías estatales y seguros especializados.',
  },
  {
    icon: SparklesIcon,
    title: 'Impacto Sostenible',
    description: 'Contribuye a la reducción de emisiones de CO2 y al desarrollo empresarial colombiano.',
  },
];

const WhyInvest = () => {
  return (
    <section className="section-padding bg-black text-primary">
      <div className="container-custom overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
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
          Contratos de energía renovable
        </motion.p>

        <motion.div
          className="flex space-x-8"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-md p-8 rounded-xl min-w-[300px] shadow-lg"
            >
              <benefit.icon className="w-12 h-12 mb-6 text-black" />
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-black/80 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyInvest; 