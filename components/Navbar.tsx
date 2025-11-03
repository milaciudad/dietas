
import React, { useState } from 'react';

type ActiveView = 'home' | 'quiz' | 'calculator' | 'microbiota';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
  onNavigateHome: (view: ActiveView) => void;
  activeView: ActiveView;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onNavigateHome, activeView }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, view: ActiveView) => {
    e.preventDefault();
    onNavigateHome(view);
    setIsOpen(false); // Cierra el menú móvil al hacer clic
  };

  const navLinks = [
    { name: 'Inicio', id: 'home' as ActiveView, href: '#' },
    { name: 'Descubre tu Dieta', id: 'quiz' as ActiveView, href: '#quiz' },
    { name: 'Microbiota', id: 'microbiota' as ActiveView, href: '#microbiota' },
    { name: 'Herramientas', id: 'calculator' as ActiveView, href: '#calculator' },
  ];

  const NavLink: React.FC<{ link: typeof navLinks[0] }> = ({ link }) => (
    <a
      href={link.href}
      onClick={(e) => handleNavClick(e, link.id)}
      className={`relative group text-gray-600 dark:text-gray-300 px-3 py-2 text-base font-medium transition-colors ${activeView === link.id ? 'text-corporate-blue dark:text-corporate-cyan' : 'hover:text-corporate-blue dark:hover:text-corporate-cyan'}`}
    >
      <span>{link.name}</span>
      <span
        className={`absolute bottom-0 left-0 block h-0.5 bg-corporate-cyan transition-all duration-300 ${activeView === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}
      ></span>
    </a>
  );
  
  const MobileNavLink: React.FC<{ link: typeof navLinks[0] }> = ({ link }) => (
     <a
        href={link.href}
        onClick={(e) => handleNavClick(e, link.id)}
        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${activeView === link.id ? 'bg-corporate-blue/10 text-corporate-blue dark:bg-corporate-cyan/10 dark:text-corporate-cyan' : 'text-gray-600 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-corporate-cyan'}`}
    >
        {link.name}
    </a>
  );

  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg shadow-slate-200/40 dark:shadow-black/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="text-corporate-blue dark:text-white font-bold text-2xl tracking-wide">
              Mila Ciudad
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.name} link={link} />
              ))}
              <a
                href="https://www.milaciudad.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-corporate-blue dark:text-corporate-cyan border border-corporate-blue dark:border-corporate-cyan px-4 py-2 rounded-md text-base font-medium transition-all hover:bg-corporate-blue/10 dark:hover:bg-corporate-cyan/10"
              >
                Salir
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
             <button
                onClick={toggleTheme}
                className="p-2 mr-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? (
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-corporate-blue hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corporate-blue"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transform transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <MobileNavLink key={link.name} link={link} />
            ))}
            <a
              href="https://www.milaciudad.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-corporate-cyan block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Salir
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
