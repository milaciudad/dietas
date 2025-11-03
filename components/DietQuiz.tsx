import React, { useState } from 'react';

interface Option {
  text: string;
  scores: { [key: string]: number };
}

interface Question {
  question: string;
  options: Option[];
}

const questions: Question[] = [
  {
    question: "¿Cuál es tu principal objetivo de salud en este momento?",
    options: [
      { text: "Perder peso y reducir grasa abdominal.", scores: { '4': 3, '8': 3, '7': 2, '1': 1 } },
      { text: "Controlar los sofocos y el equilibrio hormonal.", scores: { '5': 3, '9': 2 } },
      { text: "Mejorar mi energía y reducir la fatiga.", scores: { '7': 3, '6': 2, '1': 1 } },
      { text: "Proteger mis huesos y articulaciones.", scores: { '3': 3, '9': 3, '7': 1 } },
      { text: "Mejorar mi salud cardiovascular y presión arterial.", scores: { '2': 3, '1': 3, '9': 2 } },
    ],
  },
  {
    question: "¿Cuál es tu mayor desafío con la comida actualmente?",
    options: [
      { text: "Los antojos de dulces y carbohidratos.", scores: { '4': 3, '7': 2 } },
      { text: "Sentirme hinchada o con digestiones pesadas.", scores: { '6': 3, '9': 2 } },
      { text: "Falta de saciedad, sentir hambre a menudo.", scores: { '7': 3, '6': 2, '4': 1 } },
      { text: "El dolor articular y las molestias físicas.", scores: { '9': 3 } },
    ],
  },
  {
    question: "¿Qué estilo de alimentación se adapta mejor a ti?",
    options: [
      { text: "Me encanta la variedad, los sabores frescos y probar de todo.", scores: { '1': 3, '9': 1 } },
      { text: "Prefiero comidas sencillas, saciantes y rápidas de preparar.", scores: { '4': 2, '7': 2 } },
      { text: "Busco un plan estructurado y claro que me guíe.", scores: { '2': 2, '8': 2 } },
      { text: "Me siento mejor comiendo principalmente alimentos de origen vegetal.", scores: { '5': 2, '1': 1, '6': 1 } },
    ],
  },
];

const dietRecommendations: { [key: number]: { name: string, reason: string } } = {
  1: { name: "Dieta Mediterránea", reason: "Tu amor por la variedad y los alimentos frescos encaja perfectamente con este estilo de vida, que además es excelente para la salud del corazón." },
  2: { name: "Dieta DASH", reason: "Buscas un plan estructurado para mejorar tu salud cardiovascular. La dieta DASH te ofrece una guía clara y efectiva." },
  3: { name: "Alimentación Rica en Calcio", reason: "Tu objetivo de proteger tus huesos es fundamental. Este enfoque te dará las herramientas para fortalecerlos eficazmente." },
  4: { name: "Dieta Baja en Carbohidratos", reason: "Para combatir los antojos y controlar el peso, este enfoque te ayudará a sentirte saciada y con más energía." },
  5: { name: "Dieta Rica en Fitoestrógenos", reason: "Para aliviar los sofocos y equilibrar las hormonas de forma natural, esta es la estrategia más directa y enfocada para ti." },
  6: { name: "Hidratación y Fibra", reason: "Para mejorar tus digestiones y reducir la hinchazón, centrarte en la fibra y el agua será un cambio transformador." },
  7: { name: "Dieta Rica en Proteínas", reason: "Para combatir la fatiga y la sensación de hambre, priorizar la proteína en cada comida mantendrá tu energía y saciedad." },
  8: { name: "Ayuno Intermitente", reason: "Buscas estructura y una herramienta potente para la gestión del peso y la salud metabólica. El ayuno puede ser tu gran aliado." },
  9: { name: "Dieta Antiinflamatoria", reason: "Para reducir el dolor articular y mejorar tu bienestar general, combatir la inflamación desde el plato es la clave." },
};

const DietQuiz: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: number]: { [key: string]: number } }>({});
  const [result, setResult] = useState<number | null>(null);

  const handleAnswer = (questionIndex: number, scores: { [key: string]: number }) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: scores }));
  };

  const calculateResult = () => {
    const totalScores: { [key: string]: number } = {};
    for (let i = 1; i <= 9; i++) {
        totalScores[String(i)] = 0;
    }

    Object.values(answers).forEach(scoreObj => {
        // FIX: The right-hand side of a 'for...in' statement must be of type 'any', an object type or a type parameter.
        // Replaced for...in with Object.entries for better type safety. This also handles the case where scoreObj is inferred as `unknown`.
        for (const [dietId, score] of Object.entries(scoreObj as Record<string, number>)) {
            totalScores[dietId] = (totalScores[dietId] || 0) + score;
        }
    });

    if (Object.keys(answers).length === 0) return;

    const topDiet = Object.entries(totalScores).sort((a, b) => b[1] - a[1])[0][0];
    setResult(parseInt(topDiet, 10));
  };

  const resetQuiz = () => {
    setAnswers({});
    setResult(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg dark:shadow-black/20 text-center">
      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">¿No sabes por dónde empezar?</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Responde a estas preguntas y descubre la dieta ideal para ti.</p>
      
      {!result ? (
        <>
          <div className="space-y-6">
            {questions.map((q, qIndex) => (
              <div key={qIndex}>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-left">{q.question}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt, oIndex) => (
                    <button
                      key={oIndex}
                      onClick={() => handleAnswer(qIndex, opt.scores)}
                      className={`p-3 w-full text-gray-700 dark:text-gray-300 rounded-lg border-2 text-sm text-left transition-all duration-200 ${answers[qIndex] === opt.scores ? 'bg-corporate-blue text-white border-corporate-blue' : 'bg-transparent border-gray-300 dark:border-gray-600 hover:border-corporate-blue hover:bg-corporate-blue/5'}`}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={calculateResult} 
            disabled={Object.keys(answers).length !== questions.length}
            className="mt-8 bg-corporate-blue text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 hover:bg-corporate-cyan disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Descubrir mi Dieta
          </button>
        </>
      ) : (
        <div className="animate-fade-in">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Basado en tus respuestas, te recomendamos:</p>
          <h3 className="text-3xl font-extrabold text-corporate-blue dark:text-corporate-cyan my-3">{dietRecommendations[result].name}</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{dietRecommendations[result].reason}</p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="#diets" className="bg-corporate-blue text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 hover:bg-corporate-cyan">Explorar Dietas</a>
            <button onClick={resetQuiz} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-6 rounded-lg transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600">
              Hacer de nuevo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DietQuiz;