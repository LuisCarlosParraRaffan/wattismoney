'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const testimonials = [
  {
    name: 'María González',
    role: 'Inversionista desde 2021',
    image: './images/testimonial-1.jpeg',
    quote: 'He visto un retorno del 14% anual en mis inversiones. La plataforma es transparente y el equipo siempre está disponible para resolver dudas.',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Empresario',
    image: './images/testimonial-2.jpeg',
    quote: 'La combinación perfecta entre rentabilidad y sostenibilidad. Mis inversiones están generando impacto positivo en el medio ambiente.',
  },
  {
    name: 'Ana Martínez',
    role: 'Ingeniera Ambiental',
    image: './images/testimonial-3.jpeg',
    quote: 'Como profesional del sector, puedo confirmar que los proyectos son de alta calidad y cumplen con todos los estándares internacionales.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-black text-primary">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Lo que dicen nuestros inversionistas
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-primary/10 p-8 rounded-xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary mb-6 overflow-hidden">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="text-xl mb-6">
                &quot;{testimonials[currentIndex].quote}&quot;
              </blockquote>
              <div>
                <p className="font-bold">{testimonials[currentIndex].name}</p>
                <p className="text-primary/80">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-primary text-black hover:bg-primary/80 transition-colors"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-primary text-black hover:bg-primary/80 transition-colors"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 