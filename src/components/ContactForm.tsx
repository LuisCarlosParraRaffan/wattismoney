'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createClient } from '@supabase/supabase-js';

const schema = yup.object({
  fullName: yup.string().required('El nombre es requerido'),
  email: yup.string().email('Email inválido').required('El email es requerido'),
  phone: yup.string().required('El teléfono es requerido'),
  investmentProfile: yup.string().required('El perfil de inversión es requerido'),
}).required();

type FormData = yup.InferType<typeof schema>;

const investmentProfiles = [
  'Conservador (5-8% anual)',
  'Moderado (8-12% anual)',
  'Agresivo (12-15% anual)',
];

// Configura el cliente de Supabase
const supabaseUrl = 'https://vmaxmezenjoybprccnlw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtYXhtZXplbmpveWJwcmNjbmx3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDA0NDk4NiwiZXhwIjoyMDY1NjIwOTg2fQ.nDhp_ukeQ8I9TTfhZUP2Le2wJQLVhEpNe_XmXwnZg3g';
const supabase = createClient(supabaseUrl, supabaseAnonKey);


const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const { error } = await supabase
        .from('WattIsMoney')
        .insert([
          {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            investmentProfile: data.investmentProfile,
          },
        ]);

      if (error) {
        throw error;
      }

      alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
    } catch (error) {
      console.error(error);
      alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            ¿Listo para invertir?
          </h2>
          <p className="text-center mb-12">
            Completa el formulario y uno de nuestros asesores te contactará para guiarte en tu inversión.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block mb-2 font-medium">
                Nombre completo
              </label>
              <input
                {...register('fullName')}
                type="text"
                id="fullName"
                className="input-field"
                placeholder="Juan Pérez"
              />
              {errors.fullName && (
                <p className="mt-1 text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Correo electrónico
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="input-field"
                placeholder="juan@ejemplo.com"
              />
              {errors.email && (
                <p className="mt-1 text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">
                Teléfono
              </label>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className="input-field"
                placeholder="+57 300 123 4567"
              />
              {errors.phone && (
                <p className="mt-1 text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="investmentProfile" className="block mb-2 font-medium">
                Perfil de inversión
              </label>
              <select
                {...register('investmentProfile')}
                id="investmentProfile"
                className="input-field"
              >
                <option value="">Selecciona tu perfil</option>
                {investmentProfiles.map((profile) => (
                  <option key={profile} value={profile}>
                    {profile}
                  </option>
                ))}
              </select>
              {errors.investmentProfile && (
                <p className="mt-1 text-red-600">{errors.investmentProfile.message}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full"
            >
              {isSubmitting ? 'Enviando...' : 'Quiero más información'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm; 