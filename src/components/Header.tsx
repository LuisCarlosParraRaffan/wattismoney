import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Cerrar menú móvil después de hacer clic
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[rgb(249,255,165)] flex justify-between items-center px-6 py-2 z-50 shadow-sm">
      {/* Logo a la izquierda */}
      <div className="flex items-center">
        <Image
          src="/images/WiM_Logo.svg"
          alt="WattIsMoney Logo"
          width={60}
          height={60}
          className="h-auto w-auto"
        />
      </div>

      {/* Navegación a la derecha */}
      <nav className="hidden md:flex space-x-8">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          Inicio
        </button>
        <button
          onClick={() => scrollToSection('why-invest')}
          className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          Por Qué Invertir
        </button>
        <button
          onClick={() => scrollToSection('how-it-works')}
          className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          Cómo Funciona
        </button>
        <button
          onClick={() => scrollToSection('testimonials')}
          className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          Testimonios
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium"
        >
          Contacto
        </button>
      </nav>

      {/* Menú móvil */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgb(249,255,165)] shadow-lg md:hidden">
          <nav className="flex flex-col space-y-4 p-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-left py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('why-invest')}
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-left py-2"
            >
              Por Qué Invertir
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-left py-2"
            >
              Cómo Funciona
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-left py-2"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium text-left py-2"
            >
              Contacto
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 