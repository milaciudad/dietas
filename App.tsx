
import React, { useState, useEffect } from 'react';
import DietCard from './components/DietCard';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import HealthCalculator from './components/HealthCalculator';
import DietQuiz from './components/DietQuiz';
import DietDetailPage from './components/DietDetailPage';
import AboutModal from './components/AboutModal';
import ScrollToTopButton from './components/ScrollToTopButton';
import MicrobiotaPage from './components/MicrobiotaPage';
import type { Diet } from './types';


const dietsData: Diet[] = [
  {
    id: 1,
    title: 'Dieta Mediterránea',
    description: 'Rica en verduras, frutas, legumbres, pescado y aceite de oliva. Ayuda a controlar el peso y a mejorar la salud cardiovascular.',
    imageUrl: 'https://images.squidge.org/images/2025/10/24/DIETA-MEDITERRANEA.md.png',
    readingTime: 3,
    tags: ['Salud Cardiovascular', 'Pérdida de Peso', 'Antiinflamatoria'],
  },
  {
    id: 2,
    title: 'Dieta DASH',
    description: 'Diseñada para combatir la hipertensión. Se enfoca en alimentos bajos en sodio y ricos en potasio, calcio y magnesio.',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2070&auto=format&fit=crop',
    readingTime: 3,
    tags: ['Presión Arterial', 'Salud Cardíaca', 'Bajo en Sodio'],
  },
  {
    id: 3,
    title: 'Alimentación Rica en Calcio',
    description: 'Esencial para la salud ósea durante la menopausia, ayudando a prevenir la osteoporosis y fortalecer los huesos.',
    imageUrl: 'https://images.squidge.org/images/2025/11/01/Gemini_Generated_Image_yov4tyov4tyov4ty.webp',
    readingTime: 3,
    tags: ['Salud Ósea', 'Osteoporosis', 'Vitamina D'],
  },
  {
    id: 4,
    title: 'Dieta Baja en Carbohidratos',
    description: 'Ayuda a controlar el peso y el azúcar en sangre, mejorando la sensibilidad a la insulina, común en esta etapa.',
    imageUrl: 'https://images.squidge.org/images/2025/10/24/baja-en-carbohidratos.md.png',
    readingTime: 4,
    tags: ['Pérdida de Peso', 'Control Glucémico', 'Energía'],
  },
  {
    id: 5,
    title: 'Dieta Rica en Fitoestrógenos',
    description: 'Alimentos como la soja y el lino que pueden ayudar a aliviar síntomas como los sofocos de forma natural.',
    imageUrl: 'https://images.squidge.org/images/2025/11/01/Gemini_Generated_Image_2o10af2o10af2o10.png',
    readingTime: 3,
    tags: ['Equilibrio Hormonal', 'Sofocos', 'Soja y Lino'],
  },
  {
    id: 6,
    title: 'Hidratación y Fibra',
    description: 'Clave para la salud digestiva, el control del peso y la reducción de la hinchazón abdominal.',
    imageUrl: 'https://images.squidge.org/images/2025/11/01/Gemini_Generated_Image_2w5wqd2w5wqd2w5w.md.png',
    readingTime: 2,
    tags: ['Salud Digestiva', 'Hinchazón', 'Regularidad'],
  },
  {
    id: 7,
    title: 'Dieta Rica en Proteínas',
    description: 'Fundamental para combatir la pérdida de masa muscular (sarcopenia) y mantener el metabolismo activo.',
    imageUrl: 'https://images.squidge.org/images/2025/10/24/alta-en-proteinas.png',
    readingTime: 3,
    tags: ['Masa Muscular', 'Metabolismo', 'Saciedad'],
  },
  {
    id: 8,
    title: 'Ayuno Intermitente',
    description: 'Un patrón de alimentación que puede mejorar la sensibilidad a la insulina y la salud metabólica general.',
    imageUrl: 'https://images.squidge.org/images/2025/10/23/Gemini_Generated_Image_6noepu6noepu6noe.png',
    readingTime: 4,
    tags: ['Salud Metabólica', 'Autofagia', 'Flexibilidad'],
  },
  {
    id: 9,
    title: 'Dieta Antiinflamatoria',
    description: 'Reduce el dolor articular y el malestar general al enfocarse en alimentos que combaten la inflamación crónica.',
    imageUrl: 'https://images.squidge.org/images/2025/10/24/dash.png',
    readingTime: 3,
    tags: ['Dolor Articular', 'Bienestar', 'Antioxidantes'],
  },
  {
    id: 10,
    title: 'Dieta para la Mente (MIND)',
    description: 'Una combinación de las dietas Mediterránea y DASH para potenciar la salud cerebral y cognitiva.',
    imageUrl: 'https://images.squidge.org/images/2025/11/01/Gemini_Generated_Image_bzdogdbzdogdbzdo.png',
    readingTime: 4,
    tags: ['Salud Cognitiva', 'Memoria', 'Neuroprotección'],
  },
  {
    id: 11,
    title: 'Dieta Baja en FODMAPs',
    description: 'Enfoque para mujeres con sensibilidad digestiva, colon irritable o hinchazón persistente.',
    imageUrl: 'https://images.squidge.org/images/2025/11/01/Gemini_Generated_Image_cgvatgcgvatgcgva.md.png',
    readingTime: 5,
    tags: ['Colon Irritable', 'Salud Digestiva', 'Hinchazón'],
  },
  {
    id: 12,
    title: 'Dieta Alcalina',
    description: 'Busca equilibrar el pH del cuerpo a través de alimentos que promueven un entorno menos ácido.',
    imageUrl: 'https://images.squidge.org/images/2025/11/01/Gemini_Generated_Image_xfddh3xfddh3xfdd.webp',
    readingTime: 3,
    tags: ['Equilibrio pH', 'Bienestar', 'Alcalinidad'],
  }
];

type ActiveView = 'home' | 'quiz' | 'calculator' | 'microbiota';

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  const [selectedDietId, setSelectedDietId] = useState<number | null>(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [activeView, setActiveView] = useState<ActiveView>('home');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleSelectDiet = (id: number) => {
    setSelectedDietId(id);
    window.scrollTo(0, 0);
  };

  const handleGoBack = () => {
    setSelectedDietId(null);
    setActiveView('home');
  };

  const handleNavigateHome = (view: ActiveView = 'home') => {
    setSelectedDietId(null);
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const selectedDiet = dietsData.find(d => d.id === selectedDietId);
  
  const Footer = () => (
    <footer className="bg-slate-100 dark:bg-gray-800 text-center py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Mila Ciudad. Todos los derechos reservados.</p>
        <button onClick={() => setIsAboutModalOpen(true)} className="mt-2 text-corporate-blue dark:text-corporate-cyan hover:underline">
          Sobre Mí
        </button>
      </div>
    </footer>
  );
  
  const renderMainContent = () => {
    switch (activeView) {
      case 'quiz':
        return (
          <section id="quiz" className="py-16 bg-slate-100 dark:bg-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <DietQuiz />
            </div>
          </section>
        );
      case 'calculator':
        return (
          <section id="calculator" className="py-16 bg-slate-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-lg">
              <HealthCalculator />
            </div>
          </section>
        );
      case 'microbiota':
        return (
          <section id="microbiota" className="py-16 bg-white dark:bg-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <MicrobiotaPage />
            </div>
          </section>
        );
      case 'home':
      default:
        return (
          <>
            <section className="py-12 md:py-16 bg-white dark:bg-gray-800/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-center text-corporate-blue dark:text-corporate-cyan mb-8 tracking-tight">
                        DIETAS IDEALES EN MENOPAUSIA
                    </h1>
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-xs sm:max-w-sm mb-6">
                            <img 
                                src="https://images.squidge.org/images/2025/10/17/mila-ciudad--Photoroom.png" 
                                alt="Mila Ciudad, coach en menopausia"
                                className="object-contain w-full h-auto max-h-[60vh]"
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-corporate-blue dark:text-corporate-cyan">Mila Ciudad</p>
                            <p className="text-md text-gray-600 dark:text-gray-400 mt-1">Enfermera especialista en FyC.</p>
                            <p className="text-md text-gray-600 dark:text-gray-400">Coach en Menopausia</p>
                        </div>
                    </div>
                </div>
            </section>
            <Carousel diets={dietsData.filter(d => [1, 2, 4, 7, 9].includes(d.id))} />
            <section id="diets" className="py-16 bg-slate-50 dark:bg-gray-900">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Explora las Dietas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {dietsData.map(diet => (
                    <DietCard key={diet.id} diet={diet} onSelectDiet={handleSelectDiet} />
                  ))}
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  if (selectedDiet) {
    return (
      <div className="bg-slate-50 dark:bg-gray-900 min-h-screen">
        <Navbar theme={theme} toggleTheme={toggleTheme} onNavigateHome={handleNavigateHome} activeView={activeView} />
        <DietDetailPage diet={selectedDiet} onGoBack={handleGoBack} />
        <Footer />
        <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
        <ScrollToTopButton />
      </div>
    );
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} onNavigateHome={handleNavigateHome} activeView={activeView} />
      <main>
        {renderMainContent()}
      </main>
      <Footer />
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
      <ScrollToTopButton />
    </>
  );
};

export default App;
