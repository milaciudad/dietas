import React, { useState, useEffect, useCallback } from 'react';
import type { Diet } from '../types';

interface CarouselProps {
  diets: Diet[];
}

const Carousel: React.FC<CarouselProps> = ({ diets }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? diets.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === diets.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, diets]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  
  useEffect(() => {
    const slider = setInterval(() => {
        goToNext();
    }, 5000); // Cambia de slide cada 5 segundos
    return () => clearInterval(slider);
  }, [goToNext]);

  if (!diets.length) {
    return null;
  }
  
  const currentDiet = diets[currentIndex];

  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden group">
        <div style={{ backgroundImage: `url(${currentDiet.imageUrl})` }} className="w-full h-full bg-center bg-cover transition-all duration-1000 ease-in-out"></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-70 flex items-center justify-center text-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-corporate-cyan animate-fade-in">
                {currentDiet.title}
            </h1>
        </div>
        
        {/* Left Arrow */}
        <button onClick={goToPrevious} className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        {/* Right Arrow */}
        <button onClick={goToNext} className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
            {diets.map((_, slideIndex) => (
                <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`h-2 w-2 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-corporate-blue' : 'bg-white/50'}`}
                    aria-label={`Ir a la diapositiva ${slideIndex + 1}`}
                ></button>
            ))}
        </div>
    </section>
  );
};

export default Carousel;