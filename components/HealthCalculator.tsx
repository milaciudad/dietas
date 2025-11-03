import React, { useState } from 'react';

const HealthCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState('imc');
  
  // State for IMC & Calories (shared)
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [imcResult, setImcResult] = useState<{ value: number; category: string } | null>(null);

  // State for Calories
  const [gender, setGender] = useState('female');
  const [activity, setActivity] = useState('1.2');
  const [caloriesResult, setCaloriesResult] = useState<number | null>(null);

  const calculateIMC = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const imc = w / (h * h);
      let category = '';
      if (imc < 18.5) category = 'Bajo peso';
      else if (imc < 24.9) category = 'Peso normal';
      else if (imc < 29.9) category = 'Sobrepeso';
      else category = 'Obesidad';
      setImcResult({ value: parseFloat(imc.toFixed(2)), category });
    }
  };

  const calculateCalories = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);

    if (h > 0 && w > 0 && a > 0) {
      // Harris-Benedict Equation
      let bmr = 0;
      if (gender === 'female') {
        bmr = 655.1 + (9.563 * w) + (1.850 * h) - (4.676 * a);
      } else { // male
        bmr = 66.47 + (13.75 * w) + (5.003 * h) - (6.755 * a);
      }
      const totalCalories = bmr * parseFloat(activity);
      setCaloriesResult(Math.round(totalCalories));
    }
  };

  const renderIMCForm = () => (
    <form onSubmit={calculateIMC} className="space-y-4 mt-4">
      <div>
        <label htmlFor="height-imc" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Altura (cm)</label>
        <input type="number" id="height-imc" value={height} onChange={(e) => setHeight(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-corporate-blue focus:border-corporate-blue" required />
      </div>
      <div>
        <label htmlFor="weight-imc" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Peso (kg)</label>
        <input type="number" id="weight-imc" value={weight} onChange={(e) => setWeight(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-corporate-blue focus:border-corporate-blue" required />
      </div>
      <button type="submit" className="w-full bg-corporate-blue text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300 hover:bg-corporate-cyan">Calcular IMC</button>
      {imcResult && (
        <div className="mt-4 p-4 bg-corporate-blue/10 dark:bg-corporate-cyan/10 rounded-lg text-center">
          <p className="font-bold text-lg text-corporate-blue dark:text-corporate-cyan">Tu IMC es: {imcResult.value}</p>
          <p className="text-gray-700 dark:text-gray-300">Categoría: {imcResult.category}</p>
        </div>
      )}
    </form>
  );

  const renderCaloriesForm = () => (
    <form onSubmit={calculateCalories} className="space-y-4 mt-4">
      <div>
        <label htmlFor="height-cal" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Altura (cm)</label>
        <input type="number" id="height-cal" value={height} onChange={(e) => setHeight(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-corporate-blue focus:border-corporate-blue" required />
      </div>
       <div>
        <label htmlFor="weight-cal" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Peso (kg)</label>
        <input type="number" id="weight-cal" value={weight} onChange={(e) => setWeight(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-corporate-blue focus:border-corporate-blue" required />
      </div>
      <div>
        <label htmlFor="age-cal" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Edad</label>
        <input type="number" id="age-cal" value={age} onChange={(e) => setAge(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-corporate-blue focus:border-corporate-blue" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Género</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-corporate-blue focus:border-corporate-blue">
          <option value="female">Mujer</option>
          <option value="male">Hombre</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nivel de Actividad</label>
        <select value={activity} onChange={(e) => setActivity(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-corporate-blue focus:border-corporate-blue">
          <option value="1.2">Sedentario (poco o nada de ejercicio)</option>
          <option value="1.375">Ligero (ejercicio 1-3 días/semana)</option>
          <option value="1.55">Moderado (ejercicio 3-5 días/semana)</option>
          <option value="1.725">Activo (ejercicio 6-7 días/semana)</option>
          <option value="1.9">Muy activo (ejercicio duro y trabajo físico)</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-corporate-blue text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300 hover:bg-corporate-cyan">Calcular Calorías</button>
      {caloriesResult && (
        <div className="mt-4 p-4 bg-corporate-blue/10 dark:bg-corporate-cyan/10 rounded-lg text-center">
          <p className="font-bold text-lg text-corporate-blue dark:text-corporate-cyan">Calorías diarias estimadas:</p>
          <p className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{caloriesResult} kcal</p>
        </div>
      )}
    </form>
  );

  return (
    <div className="bg-teal-50 dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl dark:shadow-black/30 border border-black/5 dark:border-white/5">
      <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-300 mb-4">Herramientas de Bienestar</h2>
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button onClick={() => setActiveTab('imc')} className={`flex-1 py-2 font-semibold transition-colors ${activeTab === 'imc' ? 'border-b-2 border-corporate-blue text-corporate-blue' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}>Calculadora IMC</button>
        <button onClick={() => setActiveTab('calories')} className={`flex-1 py-2 font-semibold transition-colors ${activeTab === 'calories' ? 'border-b-2 border-corporate-blue text-corporate-blue' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}>Calorías Diarias</button>
      </div>
      {activeTab === 'imc' ? renderIMCForm() : renderCaloriesForm()}
    </div>
  );
};

export default HealthCalculator;