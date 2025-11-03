import React, { useEffect } from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            aria-label="Cerrar modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <img 
              className="w-32 h-32 rounded-full object-cover shadow-lg flex-shrink-0 mb-6 sm:mb-0 sm:mr-8 border-4 border-corporate-blue/50" 
              src="https://images.squidge.org/images/2025/10/17/mila-ciudad--Photoroom.png" 
              alt="Retrato de Mila Ciudad"
            />
            <div>
              <h2 className="text-3xl font-bold text-corporate-blue dark:text-corporate-cyan">Sobre Mí</h2>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-1">Mila Ciudad</p>
              <p className="text-md text-gray-500 dark:text-gray-400">Enfermera especialista en Familia y Comunitaria</p>
              <p className="text-md text-gray-500 dark:text-gray-400">Coach en Menopausia</p>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-gray-600 dark:text-gray-300 text-justify">
            <p>
              ¡Hola! Soy Mila, y mi pasión es acompañar a las mujeres en una de las etapas más transformadoras de su vida: la menopausia. Como enfermera con años de experiencia en el ámbito de la salud familiar y comunitaria, he visto de primera mano cómo la nutrición adecuada puede marcar una diferencia radical en el bienestar físico y emocional.
            </p>
            <p>
              Mi enfoque no se basa en dietas restrictivas ni en soluciones mágicas, sino en un conocimiento profundo de los cambios que experimenta el cuerpo femenino. Creo en el poder de la alimentación como medicina: una herramienta para gestionar los síntomas, proteger nuestra salud a largo plazo y, sobre todo, sentirnos llenas de energía y vitalidad.
            </p>
            <p>
              Esta web es el resultado de mi dedicación por ofrecer información clara, rigurosa y, sobre todo, práctica. Mi objetivo es empoderarte con el conocimiento necesario para que tomes las mejores decisiones para tu salud, disfrutes de la comida y vivas esta nueva etapa con plenitud y confianza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;