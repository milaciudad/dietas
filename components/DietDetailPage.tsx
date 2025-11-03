import React from 'react';
import type { Diet } from '../types';

// --- ICONOS ---
const LeafIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const FishIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>;
const SodiumIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>;
const MineralIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 15.5a4.5 4.5 0 01-4.5 4.5c-2.366 0-4.5-1.93-4.5-4.5s2.134-4.5 4.5-4.5a4.5 4.5 0 014.5 4.5zM15 12a1 1 0 11-2 0 1 1 0 012 0zM3 15.5a4.5 4.5 0 014.5 4.5c-2.366 0-4.5-1.93-4.5-4.5s2.134-4.5 4.5-4.5a4.5 4.5 0 014.5 4.5z" /></svg>;
const BoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 3a3 3 0 0 1 3 3a3 3 0 0 1 -2.12 2.88a3 3 0 0 1 -2.88 2.12a3 3 0 0 1 -3 -3a3 3 0 0 1 2.12 -2.88a3 3 0 0 1 2.88 -2.12" /><path d="M9 21a3 3 0 0 1 -3 -3a3 3 0 0 1 2.12 -2.88a3 3 0 0 1 2.88 -2.12a3 3 0 0 1 3 3a3 3 0 0 1 -2.12 2.88a3 3 0 0 1 -2.88 2.12" /><path d="M12.5 8.5l-5 5" /></svg>;
const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const BloodSugarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5-2.5-3C4 8 3 11 3 14a8 8 0 0014.657 4.657z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a6 6 0 00-6-6" /></svg>;
const ProteinFatIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 18s3.134-3.134 3.134-6.268C14.134 8.6,12 5,12 5s-2.134 3.6-2.134 6.732C9.866 14.866 11 18 11 18z" /><path d="M4.879 4.879a12.015 12.015 0 0114.242 0M19.121 19.121a12.015 12.015 0 01-14.242 0" /></svg>;
const SmartCarbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0 1.172 1.953 1.172 5.119 0 7.072z" /><path d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>;
const MoleculeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882A2 2 0 0112 5a2 2 0 011 1.732v.001a2 2 0 01-2 2v.001a2 2 0 01-1-1.732V5.882z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a2 2 0 00-1 1.732v.001a2 2 0 002 2v.001a2 2 0 001-1.732V19.73zM18 12a2 2 0 00-1.732-1H16.27a2 2 0 00-2 2h.001a2 2 0 002 2h.001a2 2 0 001.732-1H18zM6 12a2 2 0 011.732-1H7.73a2 2 0 012 2h-.001a2 2 0 01-2 2h-.001a2 2 0 01-1.732-1H6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12l-2-2m2 2l2 2m-2-2l2-2m-2 2l-2 2" /></svg>;
const SeedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.62.62a1.5 1.5 0 00-2.12 0L3.5 15.62a1.5 1.5 0 000 2.12l4.24 4.24a1.5 1.5 0 002.12 0l15.12-15.12a1.5 1.5 0 000-2.12zM8.5 18.5l-4-4" /></svg>;
const DoctorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const WaterDropIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16a5 5 0 01-.88-9.914A6 6 0 0118 8a5 5 0 014 5.828" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 13v6m0 0l-2-2m2 2l2-2" /></svg>;
const FiberIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7c0-1.1.9-2 2-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" /></svg>;
const GradualIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const MuscleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 17a5 5 0 01-.916-9.914 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 17m-8-5a3 3 0 015.832 0" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 17v.01" /></svg>;
const MetabolismIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const QualityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.491l-1.07-1.928a2 2 0 00-3.464 0l-1.07 1.928M18 10a2 2 0 11-4 0 2 2 0 014 0zM12 18a2 2 0 11-4 0 2 2 0 014 0zM6 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const GentleCycleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /><path d="M12 12.5a.5.5 0 01-1 0 .5.5 0 011 0z" transform="scale(0.8) translate(3 3)" /><path d="M12 12.5a.5.5 0 01-1 0 .5.5 0 011 0z" transform="scale(0.6) translate(8 8)" /></svg>;
const NutritionWindowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /><path d="M4 6v12m16-12v12" /><path d="M12 12l-2-2m2 2l2 2m-2-2l2-2m-2 2l-2 2" /></svg>;
const BodyListeningIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /><path d="M12 14v-2m0 0V8" /><path d="M15 15a3 3 0 01-6 0" /></svg>;
const BrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>;
const FlameIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5-2.5-3C4 8 3 11 3 14a8 8 0 0014.657 4.657z" /></svg>;
const CellIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 21h4v-9h5V8h-5V3h-4v5H6v4h4v9z" /></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const PlusCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const UserCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const BalanceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>;


// --- COMPONENTE DE CITA DESTACADA ---
const Blockquote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <blockquote className="my-8 p-4 border-l-4 border-corporate-blue bg-slate-100 dark:bg-gray-800 rounded-r-lg shadow-inner">
    <p className="text-lg italic font-medium leading-relaxed text-gray-800 dark:text-gray-200">
      “{children}”
    </p>
  </blockquote>
);

// --- CONTENIDO ESPECIALIZADO POR DIETA ---

const MediterraneanContent: React.FC = () => (
  <>
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">¿Qué es la Dieta Mediterránea?</h2>
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
        Inspirada en los patrones de alimentación de países como Grecia, Italia y España, la Dieta Mediterránea se centra en alimentos integrales y naturales, grasas saludables y una vida activa. Es una de las pautas dietéticas más estudiadas y respaldadas por la ciencia por sus beneficios para la salud cardiovascular, el control del peso y la longevidad.
      </p>
      <Blockquote>
        La Dieta Mediterránea no es una dieta restrictiva, sino un estilo de vida.
      </Blockquote>
    </section>
    
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Principios Clave</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <LeafIcon />
          <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Base Vegetal</h3>
          <p className="text-base text-gray-700 dark:text-gray-300">Frutas, verduras, legumbres, nueces y cereales integrales son el corazón de cada comida.</p>
        </div>
        <div className="flex flex-col items-center">
          <HeartIcon />
          <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Grasas Saludables</h3>
          <p className="text-base text-gray-700 dark:text-gray-300">El aceite de oliva virgen extra es la principal fuente de grasa, reemplazando a la mantequilla y otras grasas saturadas.</p>
        </div>
        <div className="flex flex-col items-center">
          <FishIcon />
          <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Proteína Inteligente</h3>
          <p className="text-base text-gray-700 dark:text-gray-300">Se prioriza el pescado y las aves sobre la carne roja, que se consume con moderación.</p>
        </div>
      </div>
    </section>

    <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Potenciar</h3>
              <ul className="space-y-2">
                  <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Verduras de todo tipo (tomate, brócoli, espinacas)</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Frutas frescas como postre principal</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Nueces, semillas y legumbres (lentejas, garbanzos)</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Cereales integrales (avena, arroz integral, quinoa)</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Pescado y marisco (al menos dos veces por semana)</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Aceite de Oliva Virgen Extra</span></li>
              </ul>
          </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Limitar</h3>
                <ul className="space-y-2">
                  <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Bebidas azucaradas y dulces procesados</span></li>
                  <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Carnes rojas y procesadas (embutidos)</span></li>
                  <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Grasas saturadas (mantequilla, bollería industrial)</span></li>
                  <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Cereales refinados (pan blanco, pasta blanca)</span></li>
                  <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Alimentos ultraprocesados</span></li>
              </ul>
          </div>
        </div>
    </section>

    <section className="bg-slate-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Ejemplo de Menú Diario</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
              <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Desayuno</h4>
              <p className="text-base text-gray-700 dark:text-gray-300">Yogur griego con nueces, semillas de chía y frutos rojos.</p>
          </div>
          <div>
              <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Almuerzo</h4>
              <p className="text-base text-gray-700 dark:text-gray-300">Gran ensalada de lentejas con verduras frescas, queso feta y un aderezo de aceite de oliva y limón.</p>
          </div>
            <div>
              <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Cena</h4>
              <p className="text-base text-gray-700 dark:text-gray-300">Salmón al horno con espárragos y una porción de quinoa.</p>
          </div>
        </div>
    </section>
    
    <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Beneficios Clave</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
            <div className="flex flex-col items-center text-center">
                <BrainIcon />
                <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Salud Cognitiva</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Los antioxidantes y grasas saludables protegen el cerebro, ayudando a mantener la claridad mental y la memoria.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <BoneIcon />
                <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Huesos más Fuertes</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">El aporte de calcio y vitamina K de las verduras de hoja verde contribuye a la salud ósea.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <MetabolismIcon />
                <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Control de Peso Sostenible</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Al ser rica en fibra y grasas saludables, promueve la saciedad y ayuda a mantener un peso saludable sin restricciones severas.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <HeartIcon />
                <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Mejora del Estado de Ánimo</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Los nutrientes y el omega-3 del pescado están vinculados a una menor incidencia de síntomas depresivos.</p>
            </div>
        </div>
    </section>
  </>
);

const DashContent: React.FC = () => (
  <>
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">¿Qué es la Dieta DASH?</h2>
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
        DASH son las siglas de "Dietary Approaches to Stop Hypertension" (Enfoques Dietéticos para Detener la Hipertensión). Es un plan de alimentación flexible y equilibrado que ayuda a crear un estilo de vida saludable para el corazón. Ha sido clasificada consistentemente como una de las mejores dietas por expertos en salud por su efectividad en reducir la presión arterial alta y el colesterol LDL ("malo"), factores de riesgo clave para enfermedades cardíacas.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Principios Clave</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <SodiumIcon />
          <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Reducir el Sodio</h3>
          <p className="text-base text-gray-700 dark:text-gray-300">Limitar la sal y los alimentos procesados es el pilar fundamental para bajar la presión arterial.</p>
        </div>
        <div className="flex flex-col items-center">
          <MineralIcon />
          <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Potenciar Minerales</h3>
          <p className="text-base text-gray-700 dark:text-gray-300">Enfocarse en alimentos ricos en potasio, magnesio y calcio, que son vitales para la regulación de la presión.</p>
        </div>
        <div className="flex flex-col items-center">
          <LeafIcon />
          <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Alimentos Integrales</h3>
          <p className="text-base text-gray-700 dark:text-gray-300">Basar la dieta en frutas, verduras, granos enteros y proteínas magras, minimizando las grasas saturadas.</p>
        </div>
      </div>
    </section>
    
    <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Potenciar</h3>
              <ul className="space-y-2">
                  <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Frutas (plátanos, naranjas, bayas)</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Verduras (espinacas, brócoli, zanahorias)</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Granos integrales (avena, arroz integral, pan integral)</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Lácteos bajos en grasa (leche, yogur)</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Proteínas magras (pollo, pescado, legumbres)</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Nueces, semillas y aceites vegetales</span></li>
              </ul>
          </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Limitar</h3>
                <ul className="space-y-2">
                  <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Alimentos altos en sodio (comida rápida, sopas enlatadas)</span></li>
                  <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Dulces y bebidas azucaradas</span></li>
                  <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Carnes rojas y grasas</span></li>
                  <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Grasas saturadas y trans (fritos, bollería)</span></li>
                  <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Alcohol en exceso</span></li>
              </ul>
          </div>
        </div>
    </section>

    <section className="bg-slate-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Ejemplo de Menú Diario</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
              <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Desayuno</h4>
              <p className="text-base text-gray-700 dark:text-gray-300">Avena integral con plátano en rodajas, un puñado de almendras y un chorrito de leche desnatada.</p>
          </div>
          <div>
              <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Almuerzo</h4>
              <p className="text-base text-gray-700 dark:text-gray-300">Pechuga de pollo a la plancha sobre una ensalada grande de hojas verdes, pepino, tomate y pimiento.</p>
          </div>
            <div>
              <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Cena</h4>
              <p className="text-base text-gray-700 dark:text-gray-300">Bacalao al horno con patata cocida y brócoli al vapor. De postre, una naranja.</p>
          </div>
        </div>
    </section>

    <section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Consejos para el Éxito</h2>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li><strong>Lee las etiquetas:</strong> Revisa el contenido de sodio en los alimentos envasados.</li>
            <li><strong>Cocina en casa:</strong> Te da control total sobre los ingredientes, especialmente la sal.</li>
            <li><strong>Usa especias:</strong> Potencia el sabor de tus comidas con hierbas y especias en lugar de sal.</li>
            <li><strong>Aumenta gradualmente la fibra:</strong> Para evitar molestias digestivas, introduce alimentos ricos en fibra poco a poco.</li>
        </ul>
    </section>
  </>
);

const CalciumRichContent: React.FC = () => (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">¿Por qué es Crucial una Dieta Rica en Calcio?</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Durante la menopausia, la disminución de los niveles de estrógeno acelera la pérdida de masa ósea, aumentando significativamente el riesgo de osteoporosis. Una dieta rica en calcio es la principal línea de defensa para mantener los huesos fuertes y reducir el riesgo de fracturas. El calcio es el bloque de construcción de nuestros huesos, y asegurar una ingesta adecuada es más importante que nunca en esta etapa.
        </p>
      </section>
  
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Principios Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <BoneIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Fortalecer los Huesos</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">El calcio es el mineral esencial para mantener la densidad y la estructura de los huesos.</p>
          </div>
          <div className="flex flex-col items-center">
            <SunIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Vitamina D: La Aliada</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Sin suficiente Vitamina D, el cuerpo no puede absorber el calcio de manera eficiente. La exposición al sol y ciertos alimentos son clave.</p>
          </div>
          <div className="flex flex-col items-center">
            <MineralIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Fuentes Variadas</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Además de los lácteos, existen muchas fuentes vegetales y pescados ricos en calcio para una dieta completa.</p>
          </div>
        </div>
      </section>
  
      <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Potenciar</h3>
                <ul className="space-y-2">
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Lácteos bajos en grasa (yogur, leche, queso)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Verduras de hoja verde (brócoli, col rizada)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Pescados con espinas comestibles (sardinas)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Alimentos fortificados (bebidas vegetales, cereales)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Legumbres y frutos secos (almendras, garbanzos)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Tofu preparado con sales de calcio</span></li>
                </ul>
            </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Factores a Considerar</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Exceso de sodio: Aumenta la eliminación de calcio.</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Cafeína y alcohol: Pueden interferir en su absorción.</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Fitatos y oxalatos: Presentes en espinacas o legumbres, pueden reducir la absorción (remojar o cocinar ayuda).</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">No combinar con suplementos de hierro.</span></li>
                </ul>
            </div>
          </div>
      </section>
  
      <section className="bg-slate-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Ejemplo de Menú Diario</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Desayuno</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Tazón de avena con leche fortificada, almendras y semillas de chía.</p>
            </div>
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Almuerzo</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Ensalada de col rizada con garbanzos, pimiento y sardinas en aceite de oliva.</p>
            </div>
              <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Cena</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Tofu salteado con brócoli y sésamo, acompañado de arroz integral.</p>
            </div>
          </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Consejos para el Éxito</h2>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li><strong>Sol y Suplementos:</strong> Asegura una exposición solar moderada para la Vitamina D o considera un suplemento, especialmente en invierno.</li>
            <li><strong>Ejercicio de Impacto:</strong> Combina tu dieta con actividades como caminar, correr o levantar pesas para estimular la formación ósea.</li>
            <li><strong>Reparte la Ingesta:</strong> El cuerpo absorbe mejor el calcio en dosis de 500 mg o menos a la vez. Distribuye los alimentos ricos en calcio a lo largo del día.</li>
        </ul>
      </section>
    </>
);

const LowCarbContent: React.FC = () => (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Dieta Baja en Carbohidratos y Menopausia</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Durante la menopausia, el cuerpo tiende a volverse más resistente a la insulina, lo que dificulta el control del azúcar en sangre y favorece la acumulación de grasa, especialmente en la zona abdominal. Una dieta baja en carbohidratos es una estrategia efectiva para mejorar la sensibilidad a la insulina, estabilizar los niveles de energía y facilitar la pérdida de peso al utilizar las grasas como fuente principal de combustible.
        </p>
      </section>
  
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Principios Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <BloodSugarIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Control de Azúcar e Insulina</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Al reducir los carbohidratos, se minimizan los picos de glucosa e insulina, ayudando a combatir la resistencia a la insulina.</p>
          </div>
          <div className="flex flex-col items-center">
            <ProteinFatIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Priorizar Proteínas y Grasas</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Aumentan la saciedad, ayudan a preservar la masa muscular (clave en esta etapa) y son esenciales para la producción hormonal.</p>
          </div>
          <div className="flex flex-col items-center">
            <SmartCarbIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Carbohidratos Inteligentes</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">El enfoque no es "cero carbohidratos", sino elegir fuentes ricas en fibra como verduras de hoja verde, que tienen un bajo impacto glucémico.</p>
          </div>
        </div>
      </section>
  
      <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Potenciar</h3>
                <ul className="space-y-2">
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Proteínas magras (pollo, pavo, pescado, huevos)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Grasas saludables (aguacate, aceite de oliva, nueces, semillas)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Verduras sin almidón (brócoli, espinacas, pimientos, calabacín)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Lácteos enteros (queso, yogur griego sin azúcar)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Frutos rojos en moderación (fresas, arándanos)</span></li>
                </ul>
            </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Limitar</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Azúcares y dulces (refrescos, bollería, miel)</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Cereales y granos (pan, pasta, arroz, avena)</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Legumbres (lentejas, garbanzos) - en cantidades controladas</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Verduras con almidón (patatas, maíz)</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">La mayoría de las frutas (excepto frutos rojos)</span></li>
                  </ul>
            </div>
          </div>
      </section>
  
      <section className="bg-slate-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Ejemplo de Menú Diario</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Desayuno</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Huevos revueltos con espinacas y medio aguacate.</p>
            </div>
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Almuerzo</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Ensalada de pollo a la parrilla con hojas verdes, pepino, pimientos y aderezo de aceite de oliva.</p>
            </div>
              <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Cena</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Salmón al horno con espárragos asados y mantequilla de hierbas.</p>
            </div>
          </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Consejos para el Éxito</h2>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li><strong>Hidrátate bien:</strong> Beber suficiente agua es crucial para evitar la deshidratación, común al inicio de esta dieta.</li>
            <li><strong>Vigila los electrolitos:</strong> Asegura un buen aporte de sodio, potasio y magnesio para evitar la llamada "gripe keto" (dolor de cabeza, fatiga).</li>
            <li><strong>Combina con ejercicio de fuerza:</strong> Levantar pesas ayuda a mantener la masa muscular, que es vital para un metabolismo saludable.</li>
            <li><strong>Escucha a tu cuerpo:</strong> Este enfoque puede requerir un período de adaptación. Ajusta la cantidad de carbohidratos según cómo te sientas.</li>
        </ul>
      </section>
    </>
);

const PhytoestrogenContent: React.FC = () => (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Fitoestrógenos: Aliados Naturales en la Menopausia</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Los fitoestrógenos son compuestos de origen vegetal con una estructura química similar al estrógeno humano. Esta similitud les permite unirse a los receptores de estrógeno del cuerpo, ejerciendo un efecto estrogénico débil. Durante la menopausia, cuando los niveles de estrógeno natural disminuyen, un aporte adecuado de fitoestrógenos a través de la dieta puede ayudar a mitigar algunos de los síntomas más comunes, como los sofocos y la sequedad vaginal.
        </p>
      </section>
      
      <section className="mb-12 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-2">Importante: ¿Es para Todas?</h3>
          <p className="text-amber-800 dark:text-amber-200 leading-relaxed text-justify">
            Aunque son beneficiosos para muchas mujeres, los fitoestrógenos no son recomendables para todas. <strong>Mujeres con antecedentes personales o familiares de cánceres sensibles a las hormonas (como el cáncer de mama), problemas de tiroides u otras condiciones médicas específicas deben consultar a su médico u oncólogo antes de aumentar significativamente su consumo.</strong> La seguridad es lo primero.
          </p>
      </section>
  
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Principios Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <MoleculeIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Alivio Natural de Síntomas</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Aprovechar el poder de las plantas para equilibrar suavemente las fluctuaciones hormonales y reducir la intensidad de los sofocos.</p>
          </div>
          <div className="flex flex-col items-center">
            <SeedIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Fuentes Integrales</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Priorizar alimentos enteros como la soja, el lino y las legumbres en lugar de suplementos procesados o aislados.</p>
          </div>
          <div className="flex flex-col items-center">
            <DoctorIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Consulta Médica Primero</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Siempre es fundamental hablar con un profesional de la salud para asegurar que este enfoque dietético es seguro y adecuado para ti.</p>
          </div>
        </div>
      </section>
  
      <section className="mb-12">
          <div className="grid grid-cols-1">
            <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Potenciar</h3>
                <ul className="space-y-2">
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Soja y derivados:</strong> Tofu, tempeh, edamame y leche de soja sin azúcar.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Semillas de lino:</strong> Molidas para una mejor absorción. Son una de las fuentes más potentes de lignanos.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Legumbres:</strong> Garbanzos, lentejas y judías.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Semillas de sésamo:</strong> Ideales para añadir a ensaladas o yogures.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Cereales integrales:</strong> Avena, cebada y centeno.</span></li>
                </ul>
            </div>
          </div>
      </section>
  
      <section className="bg-slate-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Ejemplo de Menú Diario</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Desayuno</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Batido de leche de soja con una cucharada de semillas de lino molidas y frutos rojos.</p>
            </div>
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Almuerzo</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Ensalada de quinoa con garbanzos, verduras frescas y tofu a la plancha. Aderezada con tahini (pasta de sésamo).</p>
            </div>
              <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Cena</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Salteado de tempeh con brócoli y pimientos. Un puñado de edamame como aperitivo.</p>
            </div>
          </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Consejos para el Éxito</h2>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li><strong>Empieza poco a poco:</strong> Introduce estos alimentos gradualmente en tu dieta para que tu sistema digestivo se adapte.</li>
            <li><strong>Elige calidad:</strong> Opta por soja orgánica y productos mínimamente procesados siempre que sea posible.</li>
            <li><strong>Lino siempre molido:</strong> El cuerpo no puede digerir las semillas de lino enteras, por lo que molerlas es esencial para obtener sus beneficios.</li>
            <li><strong>Sé constante:</strong> Los efectos de los fitoestrógenos no son inmediatos. La consistencia en la dieta es clave para notar los beneficios a lo largo de las semanas.</li>
        </ul>
      </section>
    </>
);

const HydrationAndFiberContent: React.FC = () => (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Hidratación y Fibra: Los Pilares del Bienestar</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            A menudo subestimadas, una hidratación adecuada y una ingesta suficiente de fibra son fundamentales durante la menopausia. Los cambios hormonales pueden ralentizar el tránsito intestinal, causando estreñimiento e hinchazón. Beber suficiente agua y consumir fibra ayuda a mantener el sistema digestivo en movimiento, mejora la sensación de saciedad ayudando al control de peso, y contribuye a una piel más saludable y a mayores niveles de energía.
        </p>
      </section>
  
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Principios Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <WaterDropIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Hidratación Constante</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">No esperes a tener sed. Bebe agua, infusiones o caldos a lo largo del día para mantener tu cuerpo funcionando de manera óptima.</p>
          </div>
          <div className="flex flex-col items-center">
            <FiberIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Fibra: Tu Doble Aliado</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Combina fibra soluble (avena, manzanas) para regular azúcar y colesterol, e insoluble (granos enteros, verduras) para la regularidad intestinal.</p>
          </div>
          <div className="flex flex-col items-center">
            <GradualIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Aumento Gradual y Consciente</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Incrementa tu consumo de fibra poco a poco y asegúrate de aumentar también la ingesta de agua para evitar gases e hinchazón.</p>
          </div>
        </div>
      </section>
  
      <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Potenciar</h3>
                <ul className="space-y-2">
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Agua, infusiones sin azúcar y caldos caseros.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Frutas ricas en agua (sandía, pepino, fresas).</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Cereales integrales (avena, quinoa, arroz integral).</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Legumbres (lentejas, garbanzos, judías negras).</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Semillas (chía, lino molido) y frutos secos.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Todas las verduras, especialmente las de hoja verde.</span></li>
                </ul>
            </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Factores a Considerar</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Bebidas diuréticas (café, alcohol) pueden deshidratar.</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Refrescos y zumos comerciales aportan azúcar y no hidratan igual.</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Harinas refinadas (pan blanco, pasta) son bajas en fibra.</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Un aumento brusco de fibra sin suficiente agua puede causar el efecto contrario: más hinchazón y malestar.</span></li>
                  </ul>
            </div>
          </div>
      </section>
  
      <section className="bg-slate-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Ejemplo de Menú Diario</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Desayuno</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Gachas de avena con semillas de chía, manzana en trozos y un vaso grande de agua.</p>
            </div>
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Almuerzo</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Sopa de lentejas y verduras. De postre, una naranja. Infusión de menta.</p>
            </div>
              <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Cena</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Quinoa con verduras salteadas (brócoli, pimiento, zanahoria) y un filete de pavo a la plancha.</p>
            </div>
          </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Consejos para el Éxito</h2>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li><strong>Lleva una botella de agua contigo:</strong> Es el recordatorio visual más efectivo.</li>
            <li><strong>"Come" tu agua:</strong> Incluye en cada comida alimentos con alto contenido de agua como pepinos, apio o sandía.</li>
            <li><strong>Empieza el día hidratando:</strong> Un vaso de agua al despertar pone en marcha tu metabolismo y sistema digestivo.</li>
            <li><strong>Elige la fruta entera:</strong> Aporta agua, fibra y nutrientes, a diferencia de los zumos que son principalmente azúcar.</li>
        </ul>
      </section>
    </>
);

const HighProteinContent: React.FC = () => (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">La Importancia Crucial de las Proteínas en la Menopausia</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Con la llegada de la menopausia, el cuerpo experimenta una disminución hormonal que acelera la sarcopenia, es decir, la pérdida de masa muscular. Este fenómeno no solo reduce la fuerza, sino que también ralentiza el metabolismo, facilitando el aumento de peso.
        </p>
        <Blockquote>
            Una dieta rica en proteínas es la estrategia más eficaz para contrarrestar la pérdida de masa muscular, mantener el metabolismo activo y aumentar la saciedad.
        </Blockquote>
      </section>
      
      <section className="mb-12 bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-400 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-rose-800 dark:text-rose-300 mb-2">Importante: Consulta Médica y Moderación</h3>
          <p className="text-rose-800 dark:text-rose-200 leading-relaxed text-justify">
            <strong>Mujeres con enfermedades renales preexistentes deben consultar a su médico antes de aumentar significativamente su ingesta de proteínas</strong>, ya que un exceso puede suponer una carga para los riñones. Además, es aconsejable moderar el consumo de carnes procesadas (embutidos, salchichas) y carnes rojas por su alto contenido en grasas saturadas y sodio.
          </p>
      </section>
  
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Principios Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <MuscleIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Protección Muscular</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Aportar los aminoácidos necesarios para preservar y fortalecer la masa muscular, combatiendo la sarcopenia.</p>
          </div>
          <div className="flex flex-col items-center">
            <MetabolismIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Metabolismo y Saciedad</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Mantener el metabolismo activo y prolongar la sensación de plenitud para un mejor control del peso.</p>
          </div>
          <div className="flex flex-col items-center">
            <QualityIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Proteínas de Calidad</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Elegir fuentes de proteína variadas y de alto valor biológico, tanto de origen animal como vegetal.</p>
          </div>
        </div>
      </section>
  
      <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Potenciar</h3>
                <ul className="space-y-2">
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Aves de corral sin piel (pollo, pavo)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Pescado (especialmente azul como el salmón)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Huevos</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Lácteos ricos en proteína (yogur griego, cottage)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Legumbres (lentejas, garbanzos, edamame)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Tofu y tempeh</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Frutos secos y semillas</span></li>
                </ul>
            </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Moderar</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Carnes rojas (limitar a 1-2 veces por semana)</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Carnes procesadas (embutidos, salchichas, bacon)</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Lácteos enteros ricos en grasa</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Fuentes de proteína fritas o rebozadas</span></li>
                  </ul>
            </div>
          </div>
      </section>
  
      <section className="bg-slate-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Ejemplo de Menú Diario</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Desayuno</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Yogur griego natural con un puñado de almendras y frutos rojos.</p>
            </div>
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Almuerzo</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Ensalada completa con pechuga de pollo a la plancha, quinoa, hojas verdes y aguacate.</p>
            </div>
              <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Cena</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Filete de salmón al horno con una guarnición de brócoli al vapor.</p>
            </div>
          </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Consejos para el Éxito</h2>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li><strong>Distribuye la proteína:</strong> En lugar de una gran cantidad en la cena, incluye una fuente de proteína en cada comida (desayuno, almuerzo y cena).</li>
            <li><strong>Combina con ejercicio de fuerza:</strong> La dieta es fundamental, pero el estímulo del ejercicio es lo que le dice al cuerpo que construya músculo.</li>
            <li><strong>No olvides los otros macronutrientes:</strong> Una dieta saludable necesita un equilibrio de proteínas, grasas saludables y carbohidratos complejos.</li>
            <li><strong>Hidrátate adecuadamente:</strong> Un mayor consumo de proteínas requiere una buena hidratación para ayudar a los riñones a procesarlas.</li>
        </ul>
      </section>
    </>
);

const IntermittentFastingContent: React.FC = () => (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Ayuno Intermitente Adaptado a la Menopausia</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            El ayuno intermitente (AI) no es una dieta, sino un patrón de alimentación que alterna períodos de ayuno con períodos de ingesta. Para las mujeres en menopausia, puede ser una herramienta poderosa si se aborda de una manera suave y adaptada, ya que los ayunos agresivos pueden generar un estrés innecesario en un sistema hormonal que ya está en transición.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Beneficios Potenciales en la Menopausia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <BloodSugarIcon />
              <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Mejora Sensibilidad a la Insulina</h3>
              <p className="text-base text-gray-700 dark:text-gray-300">Ayuda a combatir la resistencia a la insulina, facilitando el control del azúcar en sangre.</p>
            </div>
            <div className="flex flex-col items-center">
              <FlameIcon />
              <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Reducción de la Inflamación</h3>
              <p className="text-base text-gray-700 dark:text-gray-300">Puede disminuir los marcadores de inflamación crónica, asociados a múltiples enfermedades.</p>
            </div>
            <div className="flex flex-col items-center">
              <CellIcon />
              <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Promueve la Autofagia</h3>
              <p className="text-base text-gray-700 dark:text-gray-300">Activa un proceso de "limpieza" celular que elimina componentes dañados y favorece la regeneración.</p>
            </div>
        </div>
      </section>
      
      <section className="mb-12 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-2">¿Cómo es Recomendable Hacerlo en la Menopausia?</h3>
          <p className="text-blue-800 dark:text-blue-200 leading-relaxed text-justify">
            El enfoque debe ser la gentileza y la flexibilidad. Se recomienda empezar con los métodos más suaves y observar cómo responde el cuerpo.
            <ul className="list-disc list-inside mt-2">
                <li><strong>Método 12/12:</strong> Consiste en ayunar durante 12 horas y comer en una ventana de 12 horas (por ejemplo, comer de 8 a.m. a 8 p.m.). Es el punto de partida ideal.</li>
                <li><strong>Método 14/10:</strong> Una vez cómoda con el 12/12, se puede extender el ayuno a 14 horas, con una ventana de alimentación de 10 horas (por ejemplo, de 10 a.m. a 8 p.m.).</li>
            </ul>
            Es importante evitar ayunos prolongados (más de 16 horas) o muy restrictivos en calorías, ya que pueden aumentar el cortisol (la hormona del estrés) y tener un efecto negativo.
          </p>
      </section>
  
      <section className="mb-12 bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-400 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-rose-800 dark:text-rose-300 mb-2">Importante: ¿Para Quién NO es Aconsejable?</h3>
          <p className="text-rose-800 dark:text-rose-200 leading-relaxed text-justify">
            El ayuno intermitente no es para todas. <strong>Es fundamental consultar con un médico antes de empezar, especialmente si te encuentras en alguna de estas situaciones:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Antecedentes de trastornos de la conducta alimentaria (TCA).</li>
                <li>Bajo peso (IMC por debajo de 18.5).</li>
                <li>Niveles altos de estrés crónico o fatiga adrenal.</li>
                <li>Diabetes tipo 1 o diabetes tipo 2 con medicación (riesgo de hipoglucemia).</li>
                <li>Problemas de sueño, ya que el ayuno puede afectarlo en algunas mujeres.</li>
            </ul>
          </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">¿Qué Comer Durante la Ventana de Alimentación?</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
            La calidad de la comida es fundamental. La ventana de alimentación no es una excusa para comer cualquier cosa. El objetivo es nutrir al cuerpo densamente.
        </p>
        <ul className="space-y-2">
            <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Para romper el ayuno:</strong> Opta por una comida fácil de digerir. Un caldo de huesos, un batido de proteínas con aguacate, o huevos revueltos son excelentes opciones. Evita comidas muy pesadas, azucaradas o altas en carbohidratos refinados.</span></li>
            <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Durante la ventana:</strong> Prioriza proteínas de alta calidad (pollo, pescado, tofu), grasas saludables (aceite de oliva, nueces, semillas) y mucha fibra a través de verduras de hoja verde y vegetales de colores.</span></li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Posibles Efectos Secundarios y Cómo Manejarlos</h2>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li><strong>Hambre e irritabilidad:</strong> Normal al principio. Asegúrate de estar bien hidratada. Las infusiones de hierbas pueden ayudar. Suele desaparecer a los pocos días.</li>
            <li><strong>Dolor de cabeza:</strong> A menudo es un signo de deshidratación o falta de electrolitos. Bebe agua y considera añadir una pizca de sal marina a uno de tus vasos de agua.</li>
            <li><strong>Fatiga:</strong> Tu cuerpo necesita tiempo para adaptarse a usar la grasa como combustible. Asegúrate de comer suficientes calorías y nutrientes en tu ventana de alimentación.</li>
        </ul>
      </section>
  
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Principios Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <GentleCycleIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Ciclos Suaves y Flexibles</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Priorizar ayunos cortos y adaptables. Si un día no te sientes bien, no ayunes. La consistencia es más importante que la rigidez.</p>
          </div>
          <div className="flex flex-col items-center">
            <NutritionWindowIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Nutrición Densa</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Lo que comes es tan importante como cuándo comes. Asegura una ingesta rica en nutrientes, proteínas y grasas saludables.</p>
          </div>
          <div className="flex flex-col items-center">
            <BodyListeningIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Escucha Activa del Cuerpo</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Presta atención a las señales de tu cuerpo. Mareos, fatiga extrema o irritabilidad son signos para romper el ayuno.</p>
          </div>
        </div>
      </section>
  
      <section className="bg-slate-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Ejemplo de Horario 14/10</h2>
          <div className="text-center">
            <p className="text-base text-gray-700 dark:text-gray-300"><strong>8:00 PM:</strong> Última comida del día (cena).</p>
            <p className="text-base text-gray-700 dark:text-gray-300"><strong>Durante la mañana:</strong> Hidratación con agua, infusiones o café solo sin azúcar.</p>
            <p className="text-base text-gray-700 dark:text-gray-300"><strong>10:00 AM:</strong> Primera comida del día (romper el ayuno).</p>
            <p className="text-gray-500 dark:text-gray-400 mt-2">(La ventana de alimentación sería de 10:00 AM a 8:00 PM).</p>
          </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Consejos para el Éxito</h2>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li><strong>Hidratación es clave:</strong> Bebe mucha agua, caldos e infusiones durante el período de ayuno para mantenerte hidratada y controlar el hambre.</li>
            <li><strong>Empieza gradualmente:</strong> Comienza con un ayuno de 12 horas y aumenta el tiempo poco a poco a lo largo de varias semanas.</li>
            <li><strong>Rompe el ayuno con inteligencia:</strong> Tu primera comida debe ser equilibrada y rica en nutrientes, no un atracón. Incluye proteínas, grasas saludables y fibra.</li>
            <li><strong>Planifica tus comidas:</strong> Saber qué vas a comer durante tu ventana de alimentación te ayudará a evitar malas decisiones y a asegurar que cubres tus necesidades nutricionales.</li>
        </ul>
      </section>
    </>
);

const AntiInflammatoryContent: React.FC = () => (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Dieta Antiinflamatoria: Calma tu Cuerpo desde Dentro</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            La inflamación crónica de bajo grado es un factor subyacente que puede exacerbar muchos síntomas de la menopausia, como el dolor articular, la fatiga, el aumento de peso y los cambios de humor. Una dieta antiinflamatoria se enfoca en consumir alimentos que combaten activamente la inflamación y limitar aquellos que la promueven. Es un enfoque poderoso para mejorar el bienestar general, reducir el dolor y proteger la salud a largo plazo.
        </p>
        <Blockquote>
            Llenar el plato de colores es la forma más sencilla de asegurar una gran variedad de antioxidantes para combatir la inflamación.
        </Blockquote>
      </section>
  
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Principios Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FlameIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Combatir la Inflamación</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Reducir activamente los procesos inflamatorios del cuerpo a través de la nutrición para aliviar el dolor y el malestar.</p>
          </div>
          <div className="flex flex-col items-center">
            <LeafIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Riqueza en Antioxidantes</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Llenar el plato de frutas, verduras y especias de colores vivos que neutralizan el daño celular causado por el estrés oxidativo.</p>
          </div>
          <div className="flex flex-col items-center">
            <HeartIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Grasas que Sanan</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Priorizar las grasas Omega-3 (pescado azul, lino) y monoinsaturadas (aceite de oliva, aguacate) por sus potentes efectos antiinflamatorios.</p>
          </div>
        </div>
      </section>
  
      <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Potenciar</h3>
                <ul className="space-y-2">
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Frutos rojos y bayas (fresas, arándanos, moras)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Pescado graso (salmón, sardinas, caballa)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Verduras de hoja verde (espinacas, col rizada)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Frutos secos (nueces, almendras) y semillas (chía, lino)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Aceite de Oliva Virgen Extra</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Especias como la cúrcuma y el jengibre</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Té verde y chocolate negro (+70% cacao)</span></li>
                </ul>
            </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Limitar o Evitar</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Azúcares añadidos y bebidas azucaradas</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Carbohidratos refinados (pan blanco, pasta, bollería)</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Carnes procesadas (salchichas, embutidos)</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Aceites vegetales refinados (girasol, maíz, soja)</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Grasas trans (presentes en fritos y ultraprocesados)</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Exceso de alcohol</span></li>
                  </ul>
            </div>
          </div>
      </section>
  
      <section className="bg-slate-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Ejemplo de Menú Diario</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Desayuno</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Avena cocida con arándanos, nueces y una pizca de canela.</p>
            </div>
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Almuerzo</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Gran ensalada de espinacas con salmón a la plancha, aguacate, tomate cherry y aderezo de aceite de oliva.</p>
            </div>
              <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Cena</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Curry de garbanzos y verduras con cúrcuma y jengibre, servido con quinoa.</p>
            </div>
          </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Consejos para el Éxito</h2>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li><strong>Cocina con especias:</strong> La cúrcuma (combinada con pimienta negra para mejorar su absorción), el jengibre y el ajo son tus grandes aliados.</li>
            <li><strong>Elige el aceite correcto:</strong> Usa aceite de oliva virgen extra para cocinar a baja temperatura y para aliñar.</li>
            <li><strong>Llena tu plato de color:</strong> Cuantos más colores de frutas y verduras incluyas, mayor será la variedad de antioxidantes que consumes.</li>
            <li><strong>Bebe té verde:</strong> Es una excelente fuente de polifenoles con potentes propiedades antiinflamatorias.</li>
        </ul>
      </section>
    </>
);

const MindDietContent: React.FC = () => (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Dieta MIND: Nutrición para un Cerebro Fuerte en la Menopausia</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            La Dieta MIND (Mediterranean-DASH Intervention for Neurodegenerative Delay) es una fusión de la Dieta Mediterránea y la Dieta DASH, diseñada específicamente para potenciar la salud cerebral y reducir el riesgo de deterioro cognitivo. Durante la menopausia, cuando la "niebla mental", los olvidos y los problemas de concentración son comunes debido a las fluctuaciones hormonales, la Dieta MIND se convierte en una aliada excepcional.
        </p>
        <Blockquote>
            Lo que es bueno para el corazón, es bueno para el cerebro. La Dieta MIND lleva este principio un paso más allá, enfocándose en los nutrientes clave para proteger nuestra mente.
        </Blockquote>
      </section>
  
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Principios Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <BrainIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Protección Cerebral</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Diseñada específicamente para reducir el estrés oxidativo y la inflamación en el cerebro.</p>
          </div>
          <div className="flex flex-col items-center">
            <LeafIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">10 Alimentos Clave</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Se centra en 10 grupos de alimentos con fuerte evidencia científica de apoyo a la función cerebral.</p>
          </div>
          <div className="flex flex-col items-center">
            <XIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Limitar 5 Grupos Dañinos</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Identifica y reduce activamente los alimentos que pueden ser perjudiciales para la salud cognitiva.</p>
          </div>
        </div>
      </section>
  
      <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Potenciar (Los 10 del Cerebro)</h3>
                <ul className="space-y-2">
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Verduras de hoja verde:</strong> ¡Al menos 6 raciones por semana!</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Otras verduras:</strong> Al menos una al día.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Frutos rojos (bayas):</strong> Al menos 2 raciones por semana.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Frutos secos:</strong> Unas 5 raciones por semana.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Aceite de Oliva Virgen Extra:</strong> Usar como aceite principal.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Cereales integrales:</strong> Mínimo 3 raciones al día.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Pescado:</strong> Al menos una vez por semana (priorizar pescado azul).</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Legumbres:</strong> Mínimo 4 raciones por semana.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Aves de corral:</strong> Unas 2 raciones por semana.</span></li>
                </ul>
            </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Limitar</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Carne roja:</strong> Menos de 4 raciones por semana.</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Mantequilla y margarina:</strong> Menos de una cucharada al día.</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Queso:</strong> Máximo una ración por semana.</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Bollería y dulces:</strong> Menos de 5 raciones por semana.</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Comida frita o rápida:</strong> Menos de una vez por semana.</span></li>
                  </ul>
            </div>
          </div>
      </section>
  
      <section className="bg-slate-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Ejemplo de Menú Diario</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Desayuno</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Avena integral con un puñado de arándanos y nueces.</p>
            </div>
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Almuerzo</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Gran ensalada de espinacas con pechuga de pollo a la plancha, garbanzos y aderezo de aceite de oliva.</p>
            </div>
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Merienda</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Un puñado de almendras y un té verde.</p>
            </div>
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Cena</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Salmón al horno con espárragos y una porción de quinoa.</p>
            </div>
          </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Beneficios Clave en la Menopausia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
                <BrainIcon />
                <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Combate la "Niebla Mental"</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Mejora la claridad mental y la concentración.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <CellIcon />
                <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Protege la Memoria</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Los nutrientes específicos ayudan a proteger las conexiones neuronales.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <HeartIcon />
                <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Mejora el Ánimo</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Los antioxidantes y Omega-3 impactan positivamente en el estado de ánimo.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <MetabolismIcon />
                <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Salud Integral</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Hereda los beneficios cardiovasculares y metabólicos de las dietas Mediterránea y DASH.</p>
            </div>
        </div>
      </section>
    </>
);

const LowFodmapContent: React.FC = () => (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Dieta Baja en FODMAPs: Alivio para la Sensibilidad Digestiva</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            La dieta baja in FODMAPs (acrónimo de Oligosacáridos, Disacáridos, Monosacáridos y Polioles Fermentables) es un enfoque terapéutico, no un estilo de vida a largo plazo. Está diseñada para mujeres que sufren de Síndrome de Intestino Irritable (SII), hinchazón, gases o malestar digestivo persistente. Su objetivo es identificar qué alimentos específicos desencadenan los síntomas para poder crear una dieta personalizada y menos restrictiva.
        </p>
      </section>
      
      <section className="mb-12 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-2">Importante: Requiere Supervisión Profesional</h3>
          <p className="text-amber-800 dark:text-amber-200 leading-relaxed text-justify">
            <strong>Esta dieta es una herramienta de diagnóstico compleja y debe realizarse bajo la guía de un médico o dietista-nutricionista especializado.</strong> Una implementación incorrecta puede llevar a restricciones innecesarias y deficiencias nutricionales.
          </p>
      </section>
  
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Las 3 Fases del Proceso</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <SearchIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">1. Eliminación</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Se eliminan todos los alimentos altos en FODMAPs durante 2-6 semanas para calmar el sistema digestivo.</p>
          </div>
          <div className="flex flex-col items-center">
            <PlusCircleIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">2. Reintroducción</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Se reintroducen sistemáticamente los grupos de FODMAPs, uno por uno, para identificar los desencadenantes personales.</p>
          </div>
          <div className="flex flex-col items-center">
            <UserCircleIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">3. Personalización</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Se diseña una dieta a largo plazo que incluye los alimentos bien tolerados y limita solo los que causan síntomas.</p>
          </div>
        </div>
      </section>
  
      <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Potenciar (Bajos en FODMAPs)</h3>
                <ul className="space-y-2">
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Frutas:</strong> Arándanos, fresas, naranjas, plátano (no muy maduro).</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Verduras:</strong> Zanahoria, pepino, pimiento, calabacín, espinacas.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Cereales:</strong> Avena, arroz, quinoa, pan sin gluten.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Proteínas:</strong> Pollo, pescado, carne, huevos, tofu firme.</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Lácteos:</strong> Leche sin lactosa, quesos curados.</span></li>
                </ul>
            </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Limitar (Altos en FODMAPs)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Frutas:</strong> Manzana, pera, mango, sandía.</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Verduras:</strong> Ajo, cebolla, coliflor, espárragos, champiñones.</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Cereales:</strong> Trigo, centeno, cebada.</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Legumbres:</strong> Lentejas, garbanzos, judías.</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Edulcorantes:</strong> Miel, siropes, sorbitol, xilitol.</span></li>
                  </ul>
            </div>
          </div>
      </section>
  
      <section className="bg-slate-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Ejemplo de Menú (Fase de Eliminación)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Desayuno</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Avena con leche sin lactosa, arándanos y semillas de chía.</p>
            </div>
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Almuerzo</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Pechuga de pollo a la plancha con quinoa y ensalada de pepino y tomate.</p>
            </div>
              <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Cena</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Salmón al horno con patata asada y judías verdes.</p>
            </div>
          </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Consejos para el Éxito</h2>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700 dark:text-gray-300">
            <li><strong>Lee las etiquetas:</strong> Muchos productos procesados contienen FODMAPs ocultos como ajo, cebolla o siropes.</li>
            <li><strong>Usa apps de apoyo:</strong> Aplicaciones como la de Monash University pueden ayudarte a identificar alimentos permitidos.</li>
            <li><strong>Sé paciente y metódico:</strong> La fase de reintroducción requiere paciencia. Sigue las pautas de tu profesional de la salud.</li>
            <li><strong>No es para siempre:</strong> Recuerda que el objetivo es ampliar tu dieta lo máximo posible, no restringirla para siempre.</li>
        </ul>
      </section>
    </>
);

const AlkalineContent: React.FC = () => (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Dieta Alcalina: ¿Mito o Realidad?</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            La dieta alcalina se basa en la premisa de que ciertos alimentos pueden afectar el equilibrio ácido-base (pH) del cuerpo. Sus defensores sugieren que consumir alimentos "alcalinizantes" (principalmente frutas y verduras) y limitar los "acidificantes" (carnes, lácteos, cereales) puede mejorar la salud, aumentar la energía y prevenir enfermedades.
        </p>
      </section>
      
      <section className="mb-12 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-2">Una Perspectiva Científica</h3>
          <p className="text-blue-800 dark:text-blue-200 leading-relaxed text-justify">
            Es importante aclarar que <strong>el cuerpo humano regula el pH de la sangre de forma muy estricta a través de los riñones y la respiración, y la dieta tiene un impacto mínimo o nulo en él.</strong> Sin embargo, los beneficios que muchas personas experimentan con esta dieta probablemente provienen de su énfasis en alimentos vegetales, integrales y no procesados, y de la reducción de azúcares y grasas saturadas, lo cual es la base de cualquier patrón de alimentación saludable.
          </p>
      </section>
  
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Principios Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <LeafIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Base Vegetal</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">La dieta se centra en un alto consumo de frutas, verduras, frutos secos y legumbres.</p>
          </div>
          <div className="flex flex-col items-center">
            <BalanceIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Reducción de Ácidos</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Limita la ingesta de carne, lácteos, cereales refinados, cafeína y alcohol.</p>
          </div>
          <div className="flex flex-col items-center">
            <WaterDropIcon />
            <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Hidratación y Naturalidad</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Promueve el consumo de agua, especialmente con limón, y alimentos en su estado más natural posible.</p>
          </div>
        </div>
      </section>
  
      <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos Considerados Alcalinos</h3>
                <ul className="space-y-2">
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Verduras de hoja verde (espinacas, kale)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Frutas (incluidos los cítricos como el limón)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Tubérculos (boniato, remolacha)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Frutos secos y semillas (almendras, chía)</span></li>
                    <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Legumbres y productos de soja</span></li>
                </ul>
            </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos Considerados Ácidos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Carnes, aves y pescado</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Lácteos y huevos</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Cereales (trigo, arroz, avena)</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Alcohol y cafeína</span></li>
                    <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300">Alimentos procesados y azúcar</span></li>
                  </ul>
            </div>
          </div>
      </section>
  
      <section className="bg-slate-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Ejemplo de Menú Diario</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Desayuno</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Batido verde con espinacas, aguacate, plátano y leche de almendras.</p>
            </div>
            <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Almuerzo</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Ensalada grande con quinoa, garbanzos, pimiento, pepino y aderezo de limón y aceite de oliva.</p>
            </div>
              <div>
                <h4 className="font-bold text-corporate-blue dark:text-corporate-cyan mb-2">Cena</h4>
                <p className="text-base text-gray-700 dark:text-gray-300">Lentejas guisadas con muchas verduras (zanahoria, apio, calabacín).</p>
            </div>
          </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Conclusión</h2>
         <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Aunque la teoría del pH sea científicamente discutible, seguir los principios de la dieta alcalina —comer más plantas, menos productos procesados y limitar la carne roja— es una estrategia excelente para la salud general, especialmente durante la menopausia, ya que promueve una alimentación rica en fibra, vitaminas, minerales y antioxidantes.
        </p>
      </section>
    </>
);


interface DietDetailPageProps {
  diet: Diet;
  onGoBack: () => void;
}

const DietDetailPage: React.FC<DietDetailPageProps> = ({ diet, onGoBack }) => {
  const renderContent = () => {
    switch (diet.id) {
      case 1:
        return <MediterraneanContent />;
      case 2:
        return <DashContent />;
      case 3:
        return <CalciumRichContent />;
      case 4:
        return <LowCarbContent />;
      case 5:
        return <PhytoestrogenContent />;
      case 6:
        return <HydrationAndFiberContent />;
      case 7:
        return <HighProteinContent />;
      case 8:
        return <IntermittentFastingContent />;
      case 9:
        return <AntiInflammatoryContent />;
      case 10:
        return <MindDietContent />;
      case 11:
        return <LowFodmapContent />;
      case 12:
        return <AlkalineContent />;
      default:
        return <p className="text-center">Próximamente más información sobre esta dieta.</p>;
    }
  };

  return (
    <article className="animate-fade-in">
      <header className="relative h-64 md:h-80">
        <img src={diet.imageUrl} alt={diet.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">{diet.title}</h1>
          <p className="mt-4 text-white/80 text-lg font-medium">Lectura estimada: {diet.readingTime} min</p>
          <button
            onClick={onGoBack}
            className="mt-6 bg-white/20 text-white font-semibold py-2 px-5 rounded-lg border border-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:border-white"
          >
            &larr; Volver a las dietas
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-gray-700 flex justify-center">
            <button
                onClick={onGoBack}
                className="bg-corporate-blue text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-corporate-cyan hover:scale-105 focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:ring-opacity-75"
            >
                &larr; Volver a Todas las Dietas
            </button>
        </div>
        </div>
      </div>
    </article>
  );
};

export default DietDetailPage;