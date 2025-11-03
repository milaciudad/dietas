
import React from 'react';

// --- ICONOS ---
const BrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>;
const MetabolismIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const BoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-corporate-blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 3a3 3 0 0 1 3 3a3 3 0 0 1 -2.12 2.88a3 3 0 0 1 -2.88 2.12a3 3 0 0 1 -3 -3a3 3 0 0 1 2.12 -2.88a3 3 0 0 1 2.88 -2.12" /><path d="M9 21a3 3 0 0 1 -3 -3a3 3 0 0 1 2.12 -2.88a3 3 0 0 1 2.88 -2.12a3 3 0 0 1 3 3a3 3 0 0 1 -2.12 2.88a3 3 0 0 1 -2.88 2.12" /><path d="M12.5 8.5l-5 5" /></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>;

// --- COMPONENTE DE CITA DESTACADA ---
const Blockquote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <blockquote className="my-8 p-4 border-l-4 border-corporate-blue bg-slate-100 dark:bg-gray-800 rounded-r-lg shadow-inner">
    <p className="text-lg italic font-medium leading-relaxed text-gray-800 dark:text-gray-200">
      “{children}”
    </p>
  </blockquote>
);

const MicrobiotaPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-corporate-blue dark:text-corporate-cyan tracking-tight">
                El Universo Interior: La Microbiota en la Menopausia
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Descubre por qué cuidar de tus bacterias intestinales es una de las estrategias más poderosas para navegar la menopausia con salud y vitalidad.
            </p>
        </header>

        <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">¿Qué es la Microbiota y Por Qué es Tan Importante?</h2>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                La microbiota intestinal es el ecosistema de billones de microorganismos (bacterias, virus, hongos) que viven en nuestro tracto digestivo. Lejos de ser meros pasajeros, estos microbios desempeñan un papel fundamental en casi todos los aspectos de nuestra salud: digieren los alimentos, producen vitaminas, regulan nuestro sistema inmunitario e incluso influyen en nuestro estado de ánimo.
            </p>
            <p className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Durante la menopausia, la caída de los estrógenos altera el equilibrio de este delicado ecosistema. Esta alteración, conocida como disbiosis, se ha relacionado con un aumento de la inflamación, mayor tendencia al aumento de peso, cambios de humor y un mayor riesgo de problemas de salud a largo plazo.
            </p>
            <Blockquote>
                Cuidar tu microbiota es una de las inversiones más inteligentes que puedes hacer por tu salud a largo plazo, especialmente en esta nueva etapa.
            </Blockquote>
        </section>

        <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">Conexiones Clave en la Menopausia</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <BrainIcon />
                    <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Eje Intestino-Cerebro</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Una microbiota desequilibrada puede afectar la producción de neurotransmisores como la serotonina, intensificando la ansiedad, la depresión y la "niebla mental".</p>
                </div>
                <div className="flex flex-col items-center">
                    <MetabolismIcon />
                    <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Metabolismo y Peso</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Ciertas bacterias influyen en cómo almacenamos grasa y regulamos el azúcar en sangre. Un desequilibrio puede contribuir al aumento de peso abdominal.</p>
                </div>
                <div className="flex flex-col items-center">
                    <BoneIcon />
                    <h3 className="mt-2 font-semibold text-lg text-gray-800 dark:text-gray-200">Salud Ósea</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Una microbiota saludable es crucial para la absorción de minerales como el calcio y el magnesio, fundamentales para prevenir la osteoporosis.</p>
                </div>
            </div>
        </section>

        <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Potenciar: Prebióticos y Probióticos</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Los <strong>probióticos</strong> son las bacterias beneficiosas, y los <strong>prebióticos</strong> son el alimento que estas bacterias necesitan para prosperar.</p>
                    <ul className="space-y-2">
                        <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Alimentos fermentados (Probióticos):</strong> Yogur natural, kéfir, chucrut, kimchi, miso, tempeh.</span></li>
                        <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Fibra prebiótica:</strong> Ajo, cebolla, puerros, espárragos, plátano (especialmente verde), alcachofas.</span></li>
                        <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Polifenoles:</strong> Frutos rojos, té verde, chocolate negro, aceite de oliva.</span></li>
                        <li className="flex items-start"><CheckIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Granos integrales y legumbres:</strong> Avena, quinoa, lentejas, garbanzos.</span></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Alimentos a Limitar</h3>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Estos alimentos pueden alimentar a las bacterias menos deseables y promover la inflamación.</p>
                    <ul className="space-y-2">
                        <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Azúcares añadidos y harinas refinadas:</strong> El "combustible" preferido de las bacterias patógenas.</span></li>
                        <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Alimentos ultraprocesados:</strong> Llenos de aditivos, grasas de mala calidad y azúcares que dañan la barrera intestinal.</span></li>
                        <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Edulcorantes artificiales:</strong> Algunos pueden alterar negativamente el equilibrio de la microbiota.</span></li>
                        <li className="flex items-start"><XIcon /><span className="ml-2 text-base text-gray-700 dark:text-gray-300"><strong>Alcohol en exceso:</strong> Puede irritar el revestimiento intestinal y promover la disbiosis.</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="bg-slate-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4 text-center">Consejos para una Microbiota Feliz</h2>
            <ul className="list-disc list-inside space-y-2 text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                <li><strong>Come el arcoíris:</strong> La diversidad en tu plato se traduce en diversidad en tu intestino. Intenta comer una gran variedad de plantas cada semana.</li>
                <li><strong>Reduce el estrés:</strong> El estrés crónico tiene un impacto directo y negativo en la salud intestinal. Practica técnicas de relajación como la meditación o el yoga.</li>
                <li><strong>Muévete:</strong> El ejercicio regular ha demostrado mejorar la diversidad y la función de la microbiota.</li>
                <li><strong>Duerme lo suficiente:</strong> Un sueño de calidad es esencial para la regeneración intestinal y el equilibrio microbiano.</li>
                <li><strong>Evita el uso innecesario de antibióticos:</strong> Úsalos solo cuando sea estrictamente necesario, ya que pueden arrasar con las poblaciones de bacterias beneficiosas.</li>
            </ul>
        </section>
    </div>
  );
};

export default MicrobiotaPage;
