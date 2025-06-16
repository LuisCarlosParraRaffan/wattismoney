'use client';

import { motion } from 'framer-motion';
import { UserPlusIcon, DocumentTextIcon, CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    icon: UserPlusIcon,
    number: '01',
    title: 'Déja tus datos',
    description: 'Nosotros te contactaremos para que puedas invertir en un contrato de energía renovable.',
  },
  {
    icon: DocumentTextIcon,
    number: '02',
    title: 'Agendaremos una cita',
    description: 'Te llamaremos para explicarte el proceso y los detalles de la inversión.',
  },
  {
    icon: CurrencyDollarIcon,
    number: '03',
    title: 'Invierte',
    description: 'Realiza tu inversión de manera segura a través de nuestra plataforma.',
  },
  {
    icon: ChartBarIcon,
    number: '04',
    title: 'Gana',
    description: 'Recibe retornos mensuales y monitorea el crecimiento de tu inversión.',
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Cómo Funciona
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-black text-primary p-8 rounded-xl h-full">
                <div className="flex items-center mb-6">
                  <step.icon className="w-8 h-8 mr-4" />
                  <span className="text-2xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-primary/80">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-black" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 