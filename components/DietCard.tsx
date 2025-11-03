import React from 'react';
import type { Diet } from '../types';

interface DietCardProps {
  diet: Diet;
  onSelectDiet: (id: number) => void;
}

const DietCard: React.FC<DietCardProps> = ({ diet, onSelectDiet }) => {
  // Solo se muestra el detalle para las Dietas implementadas
  const isClickable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(diet.id);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-black/20 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
      <div className="w-full h-48">
        <img
          className="w-full h-full object-cover"
          src={diet.imageUrl}
          alt={diet.title}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-corporate-blue dark:text-corporate-cyan mb-2">{diet.title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Lectura de {diet.readingTime} min</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{diet.description}</p>
        
        <div className="mt-4 flex-grow flex flex-wrap gap-2 items-end">
            {diet.tags.map(tag => (
                <span key={tag} className="bg-corporate-blue/10 dark:bg-corporate-cyan/10 text-corporate-blue dark:text-corporate-cyan text-xs font-semibold px-2.5 py-1 rounded-full">
                    {tag}
                </span>
            ))}
        </div>

        <button 
          onClick={() => isClickable && onSelectDiet(diet.id)}
          disabled={!isClickable}
          className={`mt-4 self-start font-semibold py-2 px-5 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-75 ${
            isClickable 
              ? 'bg-corporate-blue text-white hover:bg-corporate-cyan focus:ring-corporate-blue' 
              : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
          }`}
          aria-label={isClickable ? `Saber más sobre ${diet.title}` : `${diet.title} (Próximamente)`}
        >
          {isClickable ? 'Saber más' : 'Próximamente'}
        </button>
      </div>
    </div>
  );
};

export default DietCard;