// Add JS here<script>
        document.addEventListener('DOMContentLoaded', () => {

            // --- Lógica de Navegación Móvil ---
            const navToggle = document.getElementById('mobile-nav-toggle');
            const navList = document.getElementById('main-nav-list');

            if (navToggle && navList) {
                const srToggleText = navToggle.querySelector('.sr-only');

                navToggle.addEventListener('click', () => {
                    // Alternar la clase 'nav-open' en la lista
                    const isExpanded = navList.classList.toggle('nav-open');
                    // Actualizar el atributo aria-expanded en el botón
                    navToggle.setAttribute('aria-expanded', isExpanded);
                    // Actualizar el texto para lectores de pantalla
                    if (isExpanded) {
                        srToggleText.textContent = 'Cerrar menú';
                    } else {
                        srToggleText.textContent = 'Abrir menú';
                    }
                });

                // MEJORA: Cerrar el menú móvil si se hace clic en un enlace
                navList.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        if (navList.classList.contains('nav-open')) {
                            navList.classList.remove('nav-open');
                            navToggle.setAttribute('aria-expanded', 'false');
                            srToggleText.textContent = 'Abrir menú';
                        }
                    });
                });
            }

            
            // --- Lógica del Modal (Pop-up) ---
            const modal = document.getElementById('diet-modal');
            const closeBtn = document.getElementById('modal-close');
            const modalIframe = document.getElementById('modal-iframe');
            const dietLinks = document.querySelectorAll('.diet-card-link');
            
            // MEJORA: Variables para el Focus Trap
            let elementThatOpenedModal = null; // Guardar el elemento que abrió el modal
            const focusableElements = modal.querySelectorAll('button, iframe');
            const firstFocusableElement = focusableElements[0]; // El botón de cerrar
            const lastFocusableElement = focusableElements[focusableElements.length - 1]; // El iframe

            
            // --- MEJORA: Contenido de las infografías incrustado ---
            // Usamos plantillas de texto (backticks `) para guardar el HTML
            
            const placeholderContent = `
                <body style="display:flex; justify-content:center; align-items:center; height:100%; font-family: Poppins, sans-serif; color: #555; background-color:#f0f0f0; padding: 20px; box-sizing: border-box; text-align: center;">
                    <h2>Contenido detallado próximamente...</h2>
                </body>
            `;

            const dietContent = {
                // Contenido de la Dieta Mediterránea
                'mediterranea': `
                    <!DOCTYPE html>
                    <html lang="es">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Infografía: La Dieta Mediterránea</title>
                        <script src="https://cdn.tailwindcss.com">${'\x3c/script>'} 
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
                        <style>
                            :root {
                                --navy: #003B46; --aqua: #07575B; --olive-green: #66A5AD;
                                --sand-beige: #C4DFE6; --terracotta: #E47A2E;
                                --font-serif: 'Lora', serif; --font-sans: 'Lato', sans-serif;
                            }
                            body {
                                background-color: #f7fafc; font-family: var(--font-sans); color: var(--navy);
                                padding-top: 1px; padding-bottom: 1px;
                            }
                            #infographic-container {
                                max-width: 900px; margin: 1rem auto 2rem auto; background-color: white;
                                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                                border-radius: 12px; overflow: hidden;
                            }
                            @media (max-width: 600px) {
                                body { background-color: white; }
                                #infographic-container { margin: 0; box-shadow: none; border-radius: 0; }
                            }
                            h1, h2, h3 { font-family: var(--font-serif); color: var(--navy); font-weight: 700; }
                            h2 {
                                font-size: 1.8rem; line-height: 2.2rem; text-align: center; /* Adjusted size */
                                margin-bottom: 2rem; position: relative;
                            }
                            h2::after {
                                content: ''; display: block; width: 60px; height: 3px; /* Adjusted size */
                                background-color: var(--terracotta); margin: 0.8rem auto 0; border-radius: 2px;
                            }
                            .icon-svg { width: 48px; height: 48px; stroke-width: 1.5; transition: transform 0.3s ease; }
                            .header-bg {
                                background: linear-gradient(to top, var(--sand-beige), #ffffff);
                                position: relative; overflow: hidden; border-bottom: 4px solid var(--navy);
                            }
                            .sun {
                                width: 60px; height: 60px; background-color: var(--terracotta); border-radius: 50%; /* Adjusted size */
                                position: absolute; top: 15px; right: 15%;
                                box-shadow: 0 0 15px rgba(228, 122, 46, 0.7);
                            }
                            .sea {
                                position: absolute; bottom: 0; left: 0; width: 100%; height: 50%;
                                background: var(--aqua); clip-path: polygon(0 25%, 100% 0, 100% 100%, 0% 100%);
                            }
                            .olive-tree { position: absolute; bottom: 10%; left: 15%; width: 80px; height: 100px; /* Adjusted size */ }
                            .olive-tree .trunk {
                                width: 8px; height: 50px; background: #5a4628; /* Adjusted size */
                                position: absolute; bottom: 0; left: 36px;
                            }
                            .olive-tree .leaves {
                                width: 80px; height: 65px; background: var(--olive-green); /* Adjusted size */
                                border-radius: 50%; position: absolute; top: 0; left: 0;
                            }
                            .pyramid-level {
                                display: flex; justify-content: center; align-items: center; text-align: center;
                                cursor: pointer; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                                border-bottom: 4px solid white; color: white; font-family: var(--font-serif);
                                font-weight: bold; padding: 0.8rem 0; /* Adjusted padding */
                            }
                            .pyramid-level:hover, .pyramid-level.active {
                                transform: scale(1.03); box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                                z-index: 5; border-bottom-color: var(--terracotta);
                            }
                            #pyramid-top { background-color: var(--olive-green); clip-path: polygon(30% 0, 70% 0, 100% 100%, 0% 100%); border-top-left-radius: 10px; border-top-right-radius: 10px; }
                            #pyramid-center { background-color: var(--aqua); clip-path: polygon(15% 0, 85% 0, 100% 100%, 0% 100%); }
                            #pyramid-base { background-color: var(--navy); clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); }
                            #pyramid-info-card { transition: all 0.5s ease-in-out; min-height: 130px; /* Adjusted height */ }
                            #benefits .benefit-card:hover .icon-svg { transform: scale(1.1) rotate(-5deg); }
                            .flip-card {
                                background-color: transparent; width: 100%; height: 130px; /* Adjusted height */
                                perspective: 1000px; cursor: pointer;
                            }
                            .flip-card-inner {
                                position: relative; width: 100%; height: 100%; text-align: center;
                                transition: transform 0.7s; transform-style: preserve-3d;
                            }
                            .flip-card.is-flipped .flip-card-inner { transform: rotateY(180deg); }
                            .flip-card-front, .flip-card-back {
                                position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden;
                                backface-visibility: hidden; display: flex; flex-direction: column;
                                justify-content: center; align-items: center; padding: 0.8rem; border-radius: 12px; /* Adjusted padding */
                                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                            }
                            .flip-card-front { background-color: var(--sand-beige); color: var(--navy); }
                            .flip-card-back {
                                background-color: var(--olive-green); color: white; transform: rotateY(180deg);
                            }
                           /* CTA Button Styling */
                            .cta-button {
                                display: inline-block; /* Needed for padding and centering */
                                background-color: var(--terracotta);
                                color: white;
                                padding: 0.8rem 2rem; /* Adjusted padding */
                                font-family: var(--font-serif);
                                font-weight: bold;
                                border-radius: 50px;
                                text-transform: uppercase;
                                letter-spacing: 1px;
                                transition: all 0.3s ease;
                                box-shadow: 0 4px 10px rgba(228, 122, 46, 0.4);
                                border: none; /* Ensure it looks like a button */
                                cursor: pointer;
                                text-decoration: none; /* Remove underline if applied by default */
                                font-size: 0.9rem; /* Adjusted font size */
                            }
                            .cta-button:hover {
                                transform: translateY(-3px);
                                box-shadow: 0 7px 15px rgba(228, 122, 46, 0.5);
                            }
                        </style>
                    </head>
                    <body>
                        <div id="infographic-container">
                            <header class="header-bg relative text-center px-6 md:px-12 h-64 flex flex-col justify-start items-center pt-12 md:pt-16"> <!-- Adjusted height and padding -->
                                <div class="sun"></div>
                                <div class="olive-tree"><div class="trunk"></div><div class="leaves"></div></div>
                                <div class="sea"></div>
                                <div class="relative z-10">
                                    <h1 class="text-3xl md:text-4xl font-bold">La Dieta Mediterránea</h1> <!-- Adjusted size -->
                                    <p class="text-md md:text-lg mt-3 font-serif text-slate-800">Más que una Dieta, un Estilo de Vida</p> <!-- Adjusted size and margin -->
                                    <p class="text-sm md:text-base mt-3 max-w-xl mx-auto" style="color: var(--aqua);">Descubre el secreto de la longevidad y el bienestar.</p> <!-- Adjusted size and margin -->
                                </div>
                            </header>
                            <section id="what-is-it" class="p-6 md:p-10"> <!-- Adjusted padding -->
                                <h2>¿Qué es Exactamente?</h2>
                                <div class="grid md:grid-cols-2 gap-6 items-center"> <!-- Adjusted gap -->
                                    <div class="flex flex-wrap justify-center items-center gap-3 lg:gap-4 p-4 rounded-2xl" style="background-color: var(--sand-beige);"> <!-- Adjusted gap and padding -->
                                        <div class="p-3 bg-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:-rotate-6" title="Aceite de Oliva"> <!-- Adjusted padding -->
                                            <svg class="w-12 h-12" style="color: var(--olive-green);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 3.5c0-1.1.9-2 2-2s2 .9 2 2v2.1c.5.2.9.7.9 1.3v2.1c0 .4-.2.8-.5 1.1L13 14.5V20c0 .6-.4 1-1 1s-1-.4-1-1v-5.5L6.6 10.1c-.3-.3-.5-.7-.5-1.1V6.9c0-.6.4-1.1.9-1.3V3.5c0-1.1.9-2 2-2s2 .9 2 2v2.1c.5.2.9.7.9 1.3v1.3c0 .4-.2.8-.5 1.1L12 11.5l-1.4-1.3c-.3-.3-.5-.7-.5-1.1V7.7c0-.6.4-1.1.9-1.3V3.5zM11 6.9v.8c0 .8.4 1.5 1 2 .6-.5 1-1.2 1-2v-.8c-.2 0-.3-.1-.5-.2s-.3-.1-.5-.1-.4 0-.5.1-.3.2-.5.2z"></path></svg>
                                        </div>
                                        <div class="p-3 bg-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-6" title="Pescado"> <!-- Adjusted padding -->
                                            <svg class="w-12 h-12" style="color: var(--aqua);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.6 11.3c-.4-.2-.8-.1-1.1.2-1.5 1.5-3.5 2.5-5.7 2.5-2.2 0-4.2-1-5.7-2.5-.3-.3-.7-.4-1.1-.2-.4.2-.6.6-.6 1.1 0 .2.1.4.2.6 1.7 1.7 3.9 2.7 6.3 2.7s4.6-1 6.3-2.7c.1-.2.2-.4.2-.6 0-.5-.2-.9-.6-1.1zM12 3C6.5 3 2 7.5 2 13c0 2.4 1 4.6 2.6 6.2.3.3.7.4 1.1.2.4-.2.6-.6.6-1.1 0-.2-.1-.4-.2-.6C4.5 16.1 3.5 14.6 3.5 13c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5c0 1.6-1 3.1-2.6 4.7-.1.2-.2.4-.2.6 0 .5.2.9.6 1.1.4.2.8.1 1.1-.2C21 17.6 22 15.4 22 13c0-5.5-4.5-10-10-10z"></path></svg>
                                        </div>
                                        <div class="p-3 bg-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:-rotate-6" title="Frutas"> <!-- Adjusted padding -->
                                            <svg class="w-12 h-12" style="color: #8B5CF6;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM9 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM9 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.6-5c.3-1.7 1.8-3 3.6-3h2c1.8 0 3.3 1.3 3.6 3H5.4zM16 3H8C5.2 3 3 5.2 3 8v8c0 2.8 2.2 5 5 5h8c2.8 0 5-2.2 5-5V8c0-2.8-2.2-5-5-5z"></path></svg>
                                        </div>
                                        <div class="p-3 bg-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-6" title="Verduras"> <!-- Adjusted padding -->
                                            <svg class="w-12 h-12" style="color: var(--terracotta);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V20c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-5.3c1.8-1.2 3-3.3 3-5.7 0-3.9-3.1-7-7-7zm4 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM8 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>
                                        </div>
                                    </div>
                                    <div class="text-base text-center md:text-left"> <!-- Adjusted text size -->
                                        <p>Es un patrón de alimentación basado en la cocina tradicional de los países que rodean el mar Mediterráneo. <strong style="color: var(--aqua);">No es una dieta restrictiva</strong>, sino un enfoque equilibrado y sostenible.</p>
                                    </div>
                                </div>
                            </section>
                            <section id="pyramid-section" class="p-6 md:p-10" style="background-color: var(--sand-beige);"> <!-- Adjusted padding -->
                                <h2>La Pirámide Interactiva</h2>
                                <div class="grid md:grid-cols-2 gap-6 items-center"> <!-- Adjusted gap -->
                                    <div id="pyramid-container" class="w-full max-w-xs mx-auto flex flex-col"> <!-- Adjusted max-width -->
                                        <div id="pyramid-top" data-level="top" class="pyramid-level h-20"><span class="text-xs">Consumo Ocasional</span></div> <!-- Adjusted height -->
                                        <div id="pyramid-center" data-level="center" class="pyramid-level h-24"><span class="text-xs">Consumo Semanal</span></div> <!-- Adjusted height -->
                                        <div id="pyramid-base" data-level="base" class="pyramid-level h-28 active"><span class="text-xs">Consumo Diario</span></div> <!-- Adjusted height -->
                                        <div id="pyramid-lifestyle" class="p-3 bg-white rounded-b-lg flex justify-around items-center gap-1 shadow-inner"> <!-- Adjusted padding/gap -->
                                            <div class="text-center text-[10px] font-bold"><svg class="w-6 h-6 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg><span>Actividad</span></div>
                                            <div class="text-center text-[10px] font-bold"><svg class="w-6 h-6 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Socializar</span></div>
                                            <div class="text-center text-[10px] font-bold"><svg class="w-6 h-6 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg><span>Hidratación</span></div>
                                        </div>
                                    </div>
                                    <div id="pyramid-info-card" class="bg-white p-4 rounded-lg shadow-lg border-l-4" style="border-color: var(--terracotta);"></div> <!-- Adjusted padding -->
                                </div>
                            </section>
                            <section id="benefits" class="p-6 md:p-10"> <!-- Adjusted padding -->
                                <h2>Beneficios Clave</h2>
                                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> <!-- Adjusted gap -->
                                    <div class="benefit-card text-center p-3"> <!-- Adjusted padding -->
                                        <svg class="icon-svg mx-auto !w-12 !h-12" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>
                                        <h3 class="text-lg font-bold mt-3">Salud Cardiovascular</h3> <!-- Adjusted size/margin -->
                                        <p class="mt-1 text-gray-600 text-sm">Reduce riesgo cardíaco.</p> <!-- Adjusted margin/size -->
                                    </div>
                                    <div class="benefit-card text-center p-3"> <!-- Adjusted padding -->
                                        <svg class="icon-svg mx-auto !w-12 !h-12" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a15.045 15.045 0 01-7.5 0C4.508 19.64 2.25 15.223 2.25 10.5c0-4.724 2.258-9.14 5.25-11.652a15.045 15.045 0 017.5 0C18.242 1.36 20.5 5.776 20.5 10.5c0 4.724-2.258 9.14-5.25 11.652z"></path></svg>
                                        <h3 class="text-lg font-bold mt-3">Agilidad Mental</h3> <!-- Adjusted size/margin -->
                                        <p class="mt-1 text-gray-600 text-sm">Menos deterioro cognitivo.</p> <!-- Adjusted margin/size -->
                                    </div>
                                    <div class="benefit-card text-center p-3"> <!-- Adjusted padding -->
                                        <svg class="icon-svg mx-auto !w-12 !h-12" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.75 4a3 3 0 013-3h.5a3 3 0 013 3v4.25H7.75V4z"></path></svg>
                                        <h3 class="text-lg font-bold mt-3">Peso Saludable</h3> <!-- Adjusted size/margin -->
                                        <p class="mt-1 text-gray-600 text-sm">Ayuda al control de peso.</p> <!-- Adjusted margin/size -->
                                    </div>
                                    <div class="benefit-card text-center p-3"> <!-- Adjusted padding -->
                                        <svg class="icon-svg mx-auto !w-12 !h-12" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"></path></svg>
                                        <h3 class="text-lg font-bold mt-3">Longevidad</h3> <!-- Adjusted size/margin -->
                                        <p class="mt-1 text-gray-600 text-sm">Mayor esperanza de vida.</p> <!-- Adjusted margin/size -->
                                    </div>
                                </div>
                            </section>
                            <section class="p-6 md:p-10" style="background-color: var(--sand-beige);"> <!-- Adjusted padding -->
                                <h2>¡Empieza Hoy! Cambios Sencillos</h2>
                                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> <!-- Adjusted gap -->
                                    <div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><p class="text-xs font-bold uppercase tracking-wider">Sustituye Esto</p><p class="text-xl mt-1 font-serif">Mantequilla</p></div><div class="flip-card-back"><p class="text-xs font-bold uppercase tracking-wider">Por Esto</p><p class="text-lg mt-1 font-serif">Aceite de Oliva<br>Virgen Extra</p></div></div></div>
                                    <div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><p class="text-xs font-bold uppercase tracking-wider">Sustituye Esto</p><p class="text-xl mt-1 font-serif">Snacks</p></div><div class="flip-card-back"><p class="text-xs font-bold uppercase tracking-wider">Por Esto</p><p class="text-lg mt-1 font-serif">Un puñado de<br>frutos secos</p></div></div></div>
                                    <div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><p class="text-xs font-bold uppercase tracking-wider">Sustituye Esto</p><p class="text-xl mt-1 font-serif">Refrescos</p></div><div class="flip-card-back"><p class="text-xs font-bold uppercase tracking-wider">Por Esto</p><p class="text-lg mt-1 font-serif">Agua o infusiones</p></div></div></div>
                                    <div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><p class="text-xs font-bold uppercase tracking-wider">Sustituye Esto</p><p class="text-xl mt-1 font-serif">Pan Blanco</p></div><div class="flip-card-back"><p class="text-xs font-bold uppercase tracking-wider">Por Esto</p><p class="text-lg mt-1 font-serif">Pan Integral</p></div></div></div>
                                </div>
                            </section>
                            <footer class="p-6 md:p-10 text-center"> <!-- Adjusted padding -->
                                <!-- MODIFICADO: Cambiado <a> por <button> y añadido data-diet -->
                                <button data-diet="recetas-mediterranea" class="cta-button">RECETAS APETECIBLES</button>
                                <p class="text-xs text-gray-500 mt-6">Basado en estudios de la UNESCO y la OMS.</p> <!-- Adjusted margin -->
                            </footer>
                        </div>
                        <script>
                            // Script for interactive pyramid and flip cards (same as before)
                             document.addEventListener('DOMContentLoaded', function () {
                                const pyramidLevels = document.querySelectorAll('.pyramid-level');
                                const infoCard = document.getElementById('pyramid-info-card');
                                const pyramidData = {
                                    base: { title: 'Base: Consumo Diario', text: 'Frutas, verduras, granos enteros, aceite de oliva, legumbres, frutos secos y semillas. ¡La base de cada comida!' },
                                    center: { title: 'Centro: Consumo Semanal', text: 'Pescado y marisco (al menos 2 veces), aves, huevos y lácteos (yogur, queso). Moderación es clave.' },
                                    top: { title: 'Cima: Consumo Ocasional', text: 'Carnes rojas, carnes procesadas y dulces. Resérvalos para ocasiones especiales.' }
                                };
                                function updateInfoCard(level) {
                                    const data = pyramidData[level];
                                    if (!data) return;
                                    infoCard.innerHTML = '<h3 class="text-xl font-bold mb-2 font-serif" style="color: var(--navy);">' + data.title + '</h3><p class="text-gray-700 text-sm">' + data.text + '</p>'; // Adjusted sizes
                                }
                                pyramidLevels.forEach(level => {
                                    level.addEventListener('click', function() {
                                        pyramidLevels.forEach(l => l.classList.remove('active'));
                                        this.classList.add('active');
                                        updateInfoCard(this.dataset.level);
                                    });
                                });
                                updateInfoCard('base'); // Initialize
                                const flipCards = document.querySelectorAll('.flip-card');
                                flipCards.forEach(card => {
                                    card.addEventListener('click', function() { this.classList.toggle('is-flipped'); });
                                });

                                // --- INICIO: SCRIPT PARA BOTÓN RECETAS DENTRO DEL IFRAME ---
                                // Este script se ejecuta DENTRO del iframe
                                const recetasButton = document.querySelector('button[data-diet="recetas-mediterranea"]');
                                if (recetasButton) {
                                    recetasButton.addEventListener('click', function() {
                                        // Intentamos acceder al 'window.parent' (la ventana principal)
                                        // y llamar a una función que definiremos allí para abrir el modal
                                        if (window.parent && typeof window.parent.openModalFromIframe === 'function') {
                                            window.parent.openModalFromIframe('recetas-mediterranea', this);
                                        } else {
                                            console.error("No se pudo comunicar con la ventana principal para abrir el modal.");
                                            // Fallback: abrir en una nueva pestaña (menos ideal)
                                            // window.open('URL_A_LA_INFOGRAFIA_RECETAS.html', '_blank');
                                        }
                                    });
                                }
                                // --- FIN: SCRIPT PARA BOTÓN RECETAS DENTRO DEL IFRAME ---
                            });
                        ${'\x3c/script>'} 
                    <\/body>
                    <\/html>
                `,
                // --- NUEVO CONTENIDO PARA RECETAS ---
                 'recetas-mediterranea': `
                    <!DOCTYPE html>
                    <html lang="es">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Infografía: Saborea la Dieta Mediterránea</title>
                        <script src="https://cdn.tailwindcss.com">${'\x3c/script>'}
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
                        <style>
                            body { font-family: 'Inter', sans-serif; background-color: #FDF8F0; color: #3A3A3A;}
                             @media (max-width: 600px) { body { background-color: white; } }
                            .font-display { font-family: 'Playfair Display', serif; }
                            .recipe-card .ingredients { max-height: 0; overflow: hidden; opacity: 0; transition: all 0.5s ease-in-out; }
                            .recipe-card:hover .ingredients { max-height: 500px; opacity: 1; }
                            .pyramid-level {
                                /* Using background images for texture could be nice */
                                background-size: cover;
                                background-position: center;
                                position: relative; /* Needed for absolute positioning of text if desired */
                            }
                            /* --- INICIO CORRECCIÓN PIRÁMIDE --- */
                             .pyramid-top { 
                                background-color: #E29578; 
                                clip-path: polygon(50% 0%, 100% 100%, 0% 100%); 
                            }
                            .pyramid-middle { 
                                background-color: #83C5BE; 
                                clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%); /* Adjusted clip-path */
                                margin-top: -1px; /* Overlap slightly */ 
                            }
                            .pyramid-base { 
                                background-color: #006D77; 
                                /* clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); */ /* Base doesn't need clip-path */
                                margin-top: -1px; /* Overlap slightly */ 
                                border-bottom-left-radius: 8px; /* Optional: Rounded base corners */
                                border-bottom-right-radius: 8px;
                             }
                            /* --- FIN CORRECCIÓN PIRÁMIDE --- */

                            /* Ensure text is readable */
                            .pyramid-level span {
                                position: relative; /* Keep text above background */
                                z-index: 1;
                                color: white;
                                text-shadow: 1px 1px 2px rgba(0,0,0,0.5); /* Improve readability */
                            }
                        </style>
                    </head>
                    <body class="bg-[#FDF8F0] text-[#3A3A3A]">
                        <div class="container mx-auto p-4 sm:p-8 max-w-4xl"> <!-- Added max-width -->
                            <header class="text-center mb-10"> <!-- Adjusted margin -->
                                <h1 class="font-display text-3xl sm:text-4xl md:text-5xl text-[#006D77] mb-2">Saborea la Dieta Mediterránea</h1> <!-- Adjusted size -->
                                <p class="text-base sm:text-lg text-gray-600">Un estilo de vida saludable para tu corazón y tu paladar.</p> <!-- Adjusted size -->
                            </header>
                            <section class="mb-12"> <!-- Adjusted margin -->
                                <h2 class="font-display text-2xl sm:text-3xl text-center text-[#E29578] mb-6">La Pirámide del Bienestar</h2> <!-- Adjusted size/margin -->
                                <div class="w-full max-w-sm mx-auto flex flex-col items-center"> <!-- Centered pyramid -->
                                    <!-- Nivel Superior - CORREGIDO -->
                                    <div class="w-2/5 h-16 pyramid-top flex flex-col justify-center items-center p-1 pyramid-level"> <!-- Increased width to w-2/5 -->
                                         <span class="text-[10px] sm:text-xs font-bold">Ocasionalmente</span>
                                         <span class="text-[8px] sm:text-[10px] font-normal leading-tight mt-0.5 text-center">Carnes rojas<br/>y dulces</span> <!-- Added text-center -->
                                    </div>
                                    <!-- Nivel Medio -->
                                    <div class="w-3/5 h-24 pyramid-middle flex flex-col justify-center items-center py-2 px-1 pyramid-level"> <!-- Adjusted width -->
                                        <span class="text-[11px] sm:text-sm font-bold">Semanalmente</span>
                                        <span class="text-[9px] sm:text-xs font-normal leading-tight mt-0.5 px-1 text-center">
                                            Aves, huevos,<br/>queso y pescado
                                        </span>
                                    </div>
                                    <!-- Base -->
                                    <div class="w-full h-32 pyramid-base flex flex-col justify-center items-center py-3 px-2 pyramid-level"> <!-- Adjusted height/classes -->
                                        <div class="w-full max-w-[80%] sm:max-w-[70%] text-center">
                                            <span class="text-xs sm:text-sm font-bold">Diariamente</span>
                                            <span class="block text-[10px] sm:text-xs font-normal leading-tight mt-0.5">
                                                Frutas, verduras, granos enteros,<br/>aceite de oliva, legumbres<br/>y frutos secos
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-center mt-6 text-sm sm:text-base text-gray-600 max-w-xl mx-auto"> <!-- Adjusted margin/size -->
                                    La base son alimentos vegetales, complementados con pescado y aves, limitando carnes rojas.
                                </p>
                            </section>
                            <section>
                                <h2 class="font-display text-2xl sm:text-3xl text-center text-[#E29578] mb-6">Saborea el Mediterráneo: Recetas Clásicas</h2> <!-- Adjusted size/margin -->
                                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> <!-- Adjusted gap -->
                                    <!-- 1. Ensalada Griega -->
                                    <div class="recipe-card bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition-shadow duration-300 cursor-pointer p-5 flex flex-col items-center text-center"> <!-- Adjusted shadow/padding -->
                                        <svg class="w-12 h-12 mb-3 text-[#006D77]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13h18M3 7h18M9 3v18"></path></svg> <!-- Adjusted size/margin -->
                                        <h3 class="font-bold text-lg mb-1">Ensalada Griega</h3> <!-- Adjusted size/margin -->
                                        <p class="text-gray-600 text-xs mb-3">Frescura y sabor para un almuerzo ligero.</p> <!-- Adjusted size/margin -->
                                        <div class="ingredients text-left text-xs w-full">
                                            <p class="font-semibold mb-1 text-center text-[#006D77] text-sm">Ingredientes:</p>
                                            <ul class="list-disc list-inside space-y-0.5">
                                                <li>Tomates, Pepino, Cebolla morada</li>
                                                <li>Aceitunas Kalamata, Queso Feta</li>
                                                <li>Aceite de Oliva Virgen Extra, Orégano</li>
                                            </ul>
                                        </div>
                                    </div>
                                     <!-- 2. Hummus -->
                                    <div class="recipe-card bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition-shadow duration-300 cursor-pointer p-5 flex flex-col items-center text-center">
                                        <svg class="w-12 h-12 mb-3 text-[#006D77]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 15.6c0 1.2-1.3 2.4-3 2.4s-3-1.2-3-2.4c0-1.2 1.3-2.4 3-2.4s3 1.2 3 2.4zM12 18c0 1.7 2.2 3 5 3s5-1.3 5-3c0-1.7-2.2-3-5-3s-5 1.3-5 3zM3 7h18M3 11h18M3 15h9"></path></svg>
                                        <h3 class="font-bold text-lg mb-1">Hummus con Pan de Pita</h3>
                                        <p class="text-gray-600 text-xs mb-3">Aperitivo cremoso y nutritivo.</p>
                                        <div class="ingredients text-left text-xs w-full">
                                            <p class="font-semibold mb-1 text-center text-[#006D77] text-sm">Ingredientes:</p>
                                             <ul class="list-disc list-inside space-y-0.5">
                                                <li>Garbanzos cocidos, Tahini</li>
                                                <li>Zumo de limón, Ajo, AOVE</li>
                                                <li>Comino, Pimentón</li>
                                            </ul>
                                        </div>
                                    </div>
                                     <!-- 3. Paella de Marisco -->
                                    <div class="recipe-card bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition-shadow duration-300 cursor-pointer p-5 flex flex-col items-center text-center">
                                        <svg class="w-12 h-12 mb-3 text-[#006D77]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 0112 21a8 8 0 01-5.657-2.343m0 0a8.001 8.001 0 0111.314 0M12 3v1m-5.657 2.343l.707.707m10.607-.707l-.707.707M3 12h1m16 0h1m-2.343 5.657l.707.707m-11.314 0l-.707.707"></path></svg>
                                        <h3 class="font-bold text-lg mb-1">Paella de Marisco</h3>
                                        <p class="text-gray-600 text-xs mb-3">Emblemático plato para celebraciones.</p>
                                        <div class="ingredients text-left text-xs w-full">
                                            <p class="font-semibold mb-1 text-center text-[#006D77] text-sm">Ingredientes:</p>
                                            <ul class="list-disc list-inside space-y-0.5">
                                                <li>Arroz redondo, Caldo de pescado</li>
                                                <li>Azafrán, Gambas, Mejillones</li>
                                                <li>Calamares, Sofrito, AOVE</li>
                                            </ul>
                                        </div>
                                    </div>
                                      <!-- 4. Gazpacho Andaluz -->
                                    <div class="recipe-card bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition-shadow duration-300 cursor-pointer p-5 flex flex-col items-center text-center">
                                         <svg class="w-12 h-12 mb-3 text-[#006D77]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16M12 4v16"></path></svg>
                                        <h3 class="font-bold text-lg mb-1">Gazpacho Andaluz</h3>
                                        <p class="text-gray-600 text-xs mb-3">Sopa fría refrescante para el calor.</p>
                                        <div class="ingredients text-left text-xs w-full">
                                            <p class="font-semibold mb-1 text-center text-[#006D77] text-sm">Ingredientes:</p>
                                            <ul class="list-disc list-inside space-y-0.5">
                                                <li>Tomates maduros, Pimiento verde</li>
                                                <li>Pepino, Ajo, Cebolla</li>
                                                <li>AOVE, Vinagre de Jerez</li>
                                            </ul>
                                        </div>
                                    </div>
                                     <!-- 5. Pollo al Limón -->
                                    <div class="recipe-card bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition-shadow duration-300 cursor-pointer p-5 flex flex-col items-center text-center">
                                         <svg class="w-12 h-12 mb-3 text-[#006D77]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg>
                                        <h3 class="font-bold text-lg mb-1">Pollo al Limón y Hierbas</h3>
                                        <p class="text-gray-600 text-xs mb-3">Plato principal sencillo y aromático.</p>
                                        <div class="ingredients text-left text-xs w-full">
                                            <p class="font-semibold mb-1 text-center text-[#006D77] text-sm">Ingredientes:</p>
                                             <ul class="list-disc list-inside space-y-0.5">
                                                <li>Pollo, Limones, Romero fresco</li>
                                                <li>Tomillo fresco, Ajo, AOVE</li>
                                                <li>Aceitunas (opcional)</li>
                                            </ul>
                                        </div>
                                    </div>
                                     <!-- 6. Pescado a la Parrilla -->
                                    <div class="recipe-card bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition-shadow duration-300 cursor-pointer p-5 flex flex-col items-center text-center">
                                         <svg class="w-12 h-12 mb-3 text-[#006D77]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.985-2.122A3.75 3.75 0 0012 18z"></path>
                                        </svg>
                                        <h3 class="font-bold text-lg mb-1">Pescado a la Parrilla</h3>
                                        <p class="text-gray-600 text-xs mb-3">Simple y saludable esencia del mar.</p>
                                        <div class="ingredients text-left text-xs w-full">
                                            <p class="font-semibold mb-1 text-center text-[#006D77] text-sm">Ingredientes:</p>
                                            <ul class="list-disc list-inside space-y-0.5">
                                                <li>Pescado blanco (dorada, lubina)</li>
                                                <li>Limón, Romero, Tomillo</li>
                                                <li>Ajo, AOVE, Sal, Pimienta</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <footer class="text-center mt-10 pt-6 border-t border-gray-300"> <!-- Adjusted margin/padding -->
                                <p class="text-sm sm:text-base text-gray-600">¡Anímate a incorporar estos sabores y hábitos en tu día a día!</p> <!-- Adjusted size -->
                            </footer>
                        </div>
                    <\/body>
                    <\/html>
                 `,
                 // --- NUEVO CONTENIDO PARA AYUNO INTERMITENTE ---
                 'ayuno-intermitente': `
                    <!DOCTYPE html>
                    <html lang="es">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Guía Visual: Ayuno Intermitente</title>
                        <script src="https://cdn.tailwindcss.com">${'\x3c/script>'}
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
                        <style>
                            :root {
                                --primary-color: #14b8a6; --primary-color-dark: #0d9488;
                                --success-color: #10b981; --warning-color: #f59e0b;
                                --heading-gradient-start: #0f345c; --heading-gradient-end: #0c4a6e;
                            }
                            #if-infographic-container { font-family: 'Inter', sans-serif; background: linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%); color: #343a40; }
                             @media (max-width: 600px) { #if-infographic-container { background: white; } }
                            #if-infographic-container h1, #if-infographic-container h2 {
                                font-family: 'Lora', serif; background: linear-gradient(90deg, var(--heading-gradient-start), var(--heading-gradient-end));
                                -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                            }
                            #if-infographic-container h3, #if-infographic-container h4 { font-family: 'Lora', serif; color: var(--heading-gradient-start); }
                            #if-infographic-container .glass-card {
                                background: #FFFFFF; border: 1px solid #e9ecef; border-radius: 1.25rem;
                                box-shadow: 0 8px 32px rgba(0, 38, 77, 0.08);
                                transition: transform 0.3s ease, box-shadow 0.3s ease, border-top-color 0.3s ease;
                                border-top: 4px solid transparent;
                            }
                            #if-infographic-container .glass-card:hover {
                                transform: translateY(-5px); box-shadow: 0 12px 40px rgba(0, 38, 77, 0.12);
                                border-top-color: var(--primary-color);
                            }
                            #if-infographic-container .method-btn { border-color: #ced4da; color: #495057; transition: all 0.3s ease; }
                            #if-infographic-container .method-btn:hover { background-color: #e9ecef; transform: translateY(-2px); border-color: #adb5bd; }
                            #if-infographic-container .method-btn.active {
                                background-color: var(--primary-color); color: #FFFFFF; font-weight: 600;
                                border-color: var(--primary-color); box-shadow: 0 4px 15px rgba(20, 184, 166, 0.3);
                            }
                            #if-infographic-container .timeline-card { position: absolute; width: 100%; transition: opacity 0.4s ease-in-out, visibility 0.4s; }
                            #if-infographic-container .timeline-card.hidden-card { opacity: 0; visibility: hidden; }
                        </style>
                    </head>
                    <body>
                    <div id="if-infographic-container" class="max-w-4xl mx-auto p-4 md:p-8 space-y-12 md:space-y-16 overflow-hidden"> <!-- Adjusted spacing -->
                        <header class="text-center p-4 md:p-6 space-y-4 md:space-y-6"> <!-- Adjusted spacing/padding -->
                            <h1 class="text-3xl md:text-5xl font-bold">Ayuno Intermitente</h1> <!-- Adjusted size -->
                            <p class="text-base md:text-lg text-slate-600 max-w-xl mx-auto">Tu Guía Metabólica: Entiende el qué, el cómo y el porqué.</p> <!-- Adjusted size -->
                            <div class="relative w-40 h-40 md:w-56 md:h-56 mx-auto my-6"> <!-- Adjusted size/margin -->
                                <div id="clock-face" class="w-full h-full rounded-full bg-slate-100 flex items-center justify-center shadow-inner">
                                    <div class="w-2 h-2 rounded-full bg-slate-800"></div> <!-- Adjusted size -->
                                    <div class="absolute w-0.5 h-1/2 bg-slate-300 rounded-full top-0 left-1/2 -ml-px origin-bottom" style="transform: rotate(0deg);"></div> <!-- Adjusted width -->
                                    <div class="absolute w-0.5 h-1/2 bg-slate-300 rounded-full top-0 left-1/2 -ml-px origin-bottom" style="transform: rotate(90deg);"></div> <!-- Adjusted width -->
                                </div>
                                <svg id="eating-window-svg" class="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                                    <path id="eating-arc" fill="none" stroke="var(--primary-color)" stroke-width="6" stroke-linecap="round" /> <!-- Adjusted stroke-width -->
                                </svg>
                            </div>
                            <div class="flex justify-center flex-wrap gap-2 md:gap-3"> <!-- Adjusted gap -->
                                <button class="method-btn py-1.5 px-3 rounded-full text-xs md:text-sm font-medium border active" data-eating="8" data-start-angle="270">16/8</button> <!-- Adjusted padding/size -->
                                <button class="method-btn py-1.5 px-3 rounded-full text-xs md:text-sm font-medium border" data-eating="0" data-days="5/2">5:2</button>
                                <button class="method-btn py-1.5 px-3 rounded-full text-xs md:text-sm font-medium border" data-eating="12" data-start-angle="270">12/12</button>
                            </div>
                            <p id="method-description" class="text-slate-600 text-sm md:text-base min-h-[3.5rem] md:min-h-[2.5rem] transition-opacity duration-300 flex items-center justify-center px-2"><b>16h ayuno</b> / <b>8h comida</b>.</p> <!-- Adjusted size/height -->
                        </header>
                        <section class="glass-card p-5 md:p-7"> <!-- Adjusted padding -->
                            <h2 class="text-2xl md:text-3xl font-bold text-center mb-6">La Balanza: Beneficios vs. Desventajas</h2> <!-- Adjusted size/margin -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Adjusted gap -->
                                <div class="space-y-3"> <!-- Adjusted spacing -->
                                    <h3 class="text-lg md:text-xl font-semibold text-emerald-600 flex items-center gap-2"><i data-lucide="check-circle-2" class="w-5 h-5"></i>Ventajas</h3> <!-- Adjusted icon size -->
                                    <ul class="space-y-2 text-slate-700 text-sm md:text-base"> <!-- Adjusted spacing/size -->
                                        <li class="flex items-start gap-2"><i data-lucide="line-chart" class="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0"></i><span><b>Pérdida de Peso:</b> Favorece quema de grasa.</span></li> <!-- Adjusted icon size -->
                                        <li class="flex items-start gap-2"><i data-lucide="activity" class="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0"></i><span><b>Mejora Metabólica:</b> Sensibilidad insulina, azúcar.</span></li>
                                        <li class="flex items-start gap-2"><i data-lucide="heart-pulse" class="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0"></i><span><b>Salud Cardiovascular:</b> Mejora lípidos, presión.</span></li>
                                        <li class="flex items-start gap-2"><i data-lucide="recycle" class="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0"></i><span><b>Salud Celular:</b> Promueve autofagia.</span></li>
                                    </ul>
                                </div>
                                <div class="space-y-3"> <!-- Adjusted spacing -->
                                    <h3 class="text-lg md:text-xl font-semibold text-amber-600 flex items-center gap-2"><i data-lucide="alert-triangle" class="w-5 h-5"></i>Desventajas</h3> <!-- Adjusted icon size -->
                                     <ul class="space-y-2 text-slate-700 text-sm md:text-base"> <!-- Adjusted spacing/size -->
                                        <li class="flex items-start gap-2"><i data-lucide="frown" class="w-4 h-4 text-amber-500 mt-1 flex-shrink-0"></i><span><b>Adherencia:</b> Horarios rígidos, vida social.</span></li> <!-- Adjusted icon size -->
                                        <li class="flex items-start gap-2"><i data-lucide="battery-warning" class="w-4 h-4 text-amber-500 mt-1 flex-shrink-0"></i><span><b>Efectos Iniciales:</b> Fatiga, dolor cabeza.</span></li>
                                        <li class="flex items-start gap-2"><i data-lucide="scale" class="w-4 h-4 text-amber-500 mt-1 flex-shrink-0"></i><span><b>Riesgo Trastornos:</b> No si hay historial.</span></li>
                                        <li class="flex items-start gap-2"><i data-lucide="pilcrow" class="w-4 h-4 text-amber-500 mt-1 flex-shrink-0"></i><span><b>Fármacos:</b> Supervisión médica necesaria.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section class="glass-card p-5 md:p-7"> <!-- Adjusted padding -->
                             <h2 class="text-2xl md:text-3xl font-bold text-center mb-6">¿Es Adecuado para Ti?</h2> <!-- Adjusted size/margin -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Adjusted gap -->
                                <div class="bg-emerald-50 p-4 rounded-lg border border-emerald-200"> <!-- Adjusted padding -->
                                    <h3 class="text-base md:text-lg font-semibold text-emerald-700 mb-3">Recomendado para:</h3> <!-- Adjusted size/margin -->
                                    <ul class="space-y-2 text-slate-800 text-sm md:text-base"> <!-- Adjusted spacing/size -->
                                        <li class="flex items-center gap-2"><i data-lucide="user-check" class="w-4 h-4 text-emerald-600"></i><span>Adultos sanos (pérdida peso).</span></li> <!-- Adjusted icon size -->
                                        <li class="flex items-center gap-2"><i data-lucide="user-check" class="w-4 h-4 text-emerald-600"></i><span>Mejora salud metabólica.</span></li>
                                    </ul>
                                </div>
                                <div class="bg-amber-50 p-4 rounded-lg border border-amber-200"> <!-- Adjusted padding -->
                                    <h3 class="text-base md:text-lg font-semibold text-amber-700 mb-3">Precaución / No recomendado:</h3> <!-- Adjusted size/margin -->
                                    <ul class="space-y-2 text-slate-800 text-sm md:text-base"> <!-- Adjusted spacing/size -->
                                        <li class="flex items-center gap-2"><i data-lucide="user-x" class="w-4 h-4 text-amber-600"></i><span>Niños, adolescentes.</span></li> <!-- Adjusted icon size -->
                                        <li class="flex items-center gap-2"><i data-lucide="user-x" class="w-4 h-4 text-amber-600"></i><span>Embarazo / lactancia.</span></li>
                                        <li class="flex items-center gap-2"><i data-lucide="user-x" class="w-4 h-4 text-amber-600"></i><span>Historial trastornos alimentarios.</span></li>
                                        <li class="flex items-center gap-2"><i data-lucide="user-x" class="w-4 h-4 text-amber-600"></i><span>Diabetes T1 / medicación fuerte.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                         <section class="p-5 md:p-7"> <!-- Adjusted padding -->
                            <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">Recomendaciones por Edad</h2> <!-- Adjusted size/margin -->
                            <p class="text-center text-slate-600 text-sm md:text-base -mt-4 mb-10 max-w-lg mx-auto">Clic en cada edad para ver consejos específicos.</p> <!-- Adjusted size/margin -->
                            <div id="timeline" class="relative w-full border-t-2 border-slate-300 mt-12 md:mt-16"></div> <!-- Adjusted margin -->
                            <div id="timeline-content-wrapper" class="mt-6 relative min-h-[10rem] md:min-h-[8rem]"> <!-- Adjusted height/margin -->
                                <!-- Cards generated by JS -->
                            </div>
                        </section>
                        <footer class="text-center p-6 mt-8 border-t border-slate-200"> <!-- Adjusted padding/margin -->
                            <p class="text-xs md:text-sm text-slate-500">&copy; 2025 Creado por Mila Ciudad. Consulta siempre a un profesional.</p> <!-- Adjusted size -->
                        </footer>
                    </div>
                    <script src="https://unpkg.com/lucide@latest">${'\x3c/script>'}
                    <script>
                        document.addEventListener('DOMContentLoaded', function() {
                            lucide.createIcons();
                            const methodButtons = document.querySelectorAll('#if-infographic-container .method-btn');
                            const description = document.getElementById('method-description');
                            const eatingArc = document.getElementById('eating-arc');

                            function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
                                const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
                                return { x: centerX + (radius * Math.cos(angleInRadians)), y: centerY + (radius * Math.sin(angleInRadians)) };
                            }
                            function describeArc(x, y, radius, startAngle, endAngle) {
                                if (endAngle - startAngle >= 360) endAngle = startAngle + 359.99;
                                if (startAngle === endAngle) return ""; // Return empty path if no arc
                                const start = polarToCartesian(x, y, radius, endAngle);
                                const end = polarToCartesian(x, y, radius, startAngle);
                                const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
                                return \`M \${start.x} \${start.y} A \${radius} \${radius} 0 \${largeArcFlag} 0 \${end.x} \${end.y}\`;
                            }
                            function updateClock(eatingHours, startAngle, days) {
                                description.style.opacity = '0';
                                eatingArc.style.transition = 'd 0.5s ease-in-out'; // Animate arc path

                                if (days === "5/2") {
                                    eatingArc.setAttribute("d", describeArc(50, 50, 45, 0, 0)); // No arc for 5:2 visually
                                    setTimeout(() => {
                                        description.innerHTML = \`<b>5 días normales</b>, <b>2 días restricción</b> (~500kcal).\`;
                                        description.style.opacity = '1';
                                    }, 150); // Shorter delay
                                } else {
                                    const eatingDegrees = eatingHours * 15;
                                    const endAngle = startAngle + eatingDegrees;
                                    // Set timeout to allow CSS transition to be applied
                                    setTimeout(() => {
                                         eatingArc.setAttribute("d", describeArc(50, 50, 45, startAngle, endAngle));
                                     }, 10);
                                    
                                    setTimeout(() => {
                                        const fastingHours = 24 - eatingHours;
                                        description.innerHTML = \`<b>\${fastingHours}h ayuno</b> / <b>\${eatingHours}h comida</b>.\`;
                                        description.style.opacity = '1';
                                    }, 150); // Shorter delay
                                }
                            }
                            methodButtons.forEach(button => {
                                button.addEventListener('click', () => {
                                    methodButtons.forEach(btn => btn.classList.remove('active'));
                                    button.classList.add('active');
                                    const eatingHours = parseInt(button.dataset.eating);
                                    const startAngle = parseInt(button.dataset.startAngle || '0'); // Default startAngle if missing
                                    const days = button.dataset.days;
                                    updateClock(eatingHours, startAngle, days);
                                });
                            });
                            updateClock(8, 270, null); // Initial state

                            // Timeline Logic
                            const timelineData = [
                                { age: "18-25", id:"age-18-25", text: "Puede ayudar a crear hábitos, clave asegurar densidad nutricional." },
                                { age: "26-45", id:"age-26-45", text: "Ideal para regular peso y prevenir enf. metabólicas. 16/8 eficaz." },
                                { age: "46-65", id:"age-46-65", text: "Beneficios cardiovasculares, pero exige consulta médica (músculo/hueso)." },
                                { age: ">65", id:"age-gt-65", text: "Ayunos más cortos (<14h). Priorizar proteínas y nutrientes." }
                            ];
                            const timelineContainer = document.getElementById('timeline');
                            const timelineContentWrapper = document.getElementById('timeline-content-wrapper');
                            timelineContentWrapper.innerHTML = ''; // Clear initial static content

                            timelineData.forEach((item, index) => {
                                // Create Content Card
                                const card = document.createElement('div');
                                card.id = item.id;
                                card.className = \`timeline-card p-4 md:p-6 glass-card text-center \${index === 0 ? '' : 'hidden-card'}\`; // Adjusted padding
                                card.innerHTML = \`<p class="font-semibold text-teal-600 mb-1 text-base md:text-lg">Edad: \${item.age} años</p><p class="text-slate-700 text-sm md:text-base">\${item.text}</p>\`; // Adjusted size/margin
                                timelineContentWrapper.appendChild(card);

                                // Create Timeline Dot/Button
                                const dotWrapper = document.createElement('button');
                                dotWrapper.className = 'absolute -top-3 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 rounded-full p-1 bg-white'; // Adjusted position, added bg
                                const percentage = (index / (timelineData.length - 1)) * 100;
                                dotWrapper.style.left = \`calc(\${percentage}% - 12px)\`; // Center the 24px dot

                                dotWrapper.innerHTML = \`
                                    <i data-lucide="hand" class="timeline-dot w-4 h-4 transition-colors \${index === 0 ? 'text-teal-500' : 'text-slate-400'} group-hover:text-teal-500"></i>
                                    <span class="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-semibold text-slate-500 whitespace-nowrap">\${item.age}</span>\`; // Adjusted size/position
                                dotWrapper.setAttribute('aria-label', \`Ver recomendación para \${item.age} años\`);
                                
                                dotWrapper.addEventListener('click', () => {
                                    timelineContentWrapper.querySelectorAll('.timeline-card').forEach(c => c.classList.add('hidden-card'));
                                    document.getElementById(item.id).classList.remove('hidden-card');
                                    timelineContainer.querySelectorAll('.timeline-dot').forEach(d => {
                                        d.classList.remove('text-teal-500'); d.classList.add('text-slate-400');
                                    });
                                    dotWrapper.querySelector('.timeline-dot').classList.remove('text-slate-400');
                                    dotWrapper.querySelector('.timeline-dot').classList.add('text-teal-500');
                                });
                                timelineContainer.appendChild(dotWrapper);
                            });
                             lucide.createIcons(); // Re-run after adding dots
                        });
                    ${'\x3c/script>'}
                    <\/body>
                    <\/html>
                 `,
                // --- NUEVO CONTENIDO PARA DIETA KETO ---
                'keto': `
                    <!DOCTYPE html>
                    <html lang="es">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Infografía Interactiva: La Dieta Keto al Descubierto</title>
                        <script src="https://cdn.tailwindcss.com">${'\x3c/script>'}
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
                        <style>
                            body { font-family: 'Montserrat', sans-serif; scroll-behavior: smooth; background-color: #f9fafb; /* Light gray background */ color: #1f2937; /* Darker gray text */}
                            @media (max-width: 600px) { body { background-color: white; } }
                            .section-card { background-color: rgba(255, 255, 255, 0.98); backdrop-filter: blur(8px); border: 1px solid rgba(200, 200, 200, 0.1); }
                            .icon-card:hover { transform: translateY(-4px); box-shadow: 0 8px 15px rgba(0,0,0,0.08); }
                            .food-item { transition: transform 0.3s ease, box-shadow 0.3s ease; border: 1px solid #e5e7eb;}
                            .food-item:hover { transform: scale(1.05); box-shadow: 0 6px 20px rgba(0,0,0,0.1); cursor: pointer; }
                            .accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.5s cubic-bezier(0.2, 0.6, 0.3, 1); }
                            .accordion-content.open { max-height: 500px; /* Reduced max-height */ transition: max-height 0.7s ease-in-out; }
                            .tooltip { visibility: hidden; opacity: 0; transition: opacity 0.3s ease, visibility 0s linear 0.3s; pointer-events: none; /* Make sure it doesn't block clicks */ }
                            .tooltip.visible { visibility: visible; opacity: 1; transition-delay: 0s; }
                            /* Simplified Animations */
                            @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.9; } 50% { transform: scale(1.05); opacity: 0.7; } }
                            .glucose-icon { animation: pulse 3s infinite ease-in-out; }
                            .ketone-icon { animation: pulse 3s infinite ease-in-out 1.5s; }
                            @keyframes flow-animation { 0% { transform: translate(0, 0) scale(0.8); opacity: 0; } 20% { opacity: 0.7; } 80% { transform: translate(130px, -40px) scale(1); opacity: 0.7; } 100% { opacity: 0; } } /* Adjusted translation */
                            @keyframes flow-animation-muscle { 0% { transform: translate(0, 0) scale(0.8); opacity: 0; } 20% { opacity: 0.7; } 80% { transform: translate(130px, 40px) scale(1); opacity: 0.7; } 100% { opacity: 0; } } /* Adjusted translation */
                            .ketone-flow { width: 10px; height: 10px; background-color: #10b981; border-radius: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
                            .ketone-flow-1 { animation: flow-animation 3.5s infinite 0.5s; } /* Adjusted duration */
                            .ketone-flow-2 { animation: flow-animation-muscle 3.5s infinite 1.5s; } /* Adjusted duration */
                             /* Adjust font sizes for smaller screens if needed */
                            @media (max-width: 768px) { h1 { font-size: 2rem; } h2 { font-size: 1.5rem; } h3 { font-size: 1.1rem; } }
                        </style>
                    </head>
                    <body class="bg-gray-50 text-gray-800">
                        <div class="container mx-auto p-4 md:p-6 max-w-4xl"> <!-- Adjusted padding and max-width -->
                            <header class="text-center p-4 md:p-8 rounded-xl bg-white shadow-md mb-8"> <!-- Adjusted padding/shadow/margin -->
                                <h1 class="text-2xl md:text-4xl font-bold text-blue-900">Dieta Cetogénica: Transforma tu Metabolismo</h1> <!-- Adjusted size -->
                                <p class="text-base md:text-lg text-gray-600 mt-2">¿Es para ti? Descúbrelo aquí.</p> <!-- Adjusted size -->
                                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 items-center"> <!-- Adjusted margin/gap -->
                                    <div class="p-3 rounded-lg"> <!-- Adjusted padding -->
                                        <h3 class="text-lg font-semibold text-orange-600">Energía Rápida: Glucosa</h3> <!-- Adjusted size -->
                                        <div class="flex justify-center items-center my-3"> <!-- Adjusted margin -->
                                            <svg class="w-12 h-12 text-orange-500 glucose-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2m0 16v2m8.66-15.66l-1.414 1.414M4.754 19.246l-1.414 1.414M22 12h-2M4 12H2m15.66.66l-1.414-1.414M4.754 4.754l-1.414-1.414"></path></svg> <!-- Adjusted size -->
                                        </div>
                                        <p class="text-xs text-gray-500">Pan, pasta, azúcares, frutas</p> <!-- Adjusted size -->
                                    </div>
                                    <div class="p-3 rounded-lg"> <!-- Adjusted padding -->
                                        <h3 class="text-lg font-semibold text-green-600">Energía Sostenible: Cetonas</h3> <!-- Adjusted size -->
                                        <div class="flex justify-center items-center my-3"> <!-- Adjusted margin -->
                                            <svg class="w-12 h-12 text-green-500 ketone-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7.343 6.343 12 3c4.657 3.343 5.657 4.343 5.657 4.343a8 8 0 010 11.314z"></path></svg> <!-- Adjusted size -->
                                        </div>
                                        <p class="text-xs text-gray-500">Aguacate, salmón, aceite de oliva</p> <!-- Adjusted size -->
                                    </div>
                                </div>
                            </header>
                            <section class="section-card p-4 md:p-6 rounded-xl shadow-md mb-8"> <!-- Adjusted padding/shadow/margin -->
                                <h2 class="text-xl md:text-2xl font-bold text-center text-blue-800 mb-5">¿En qué consiste realmente?</h2> <!-- Adjusted size/margin -->
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"> <!-- Adjusted gap -->
                                    <div>
                                        <h3 class="font-semibold text-base mb-3 text-center">Distribución de Macronutrientes</h3> <!-- Adjusted size/margin -->
                                        <div id="macros-chart" class="space-y-3"> <!-- Adjusted spacing -->
                                            <div class="macro-item p-3 rounded-lg bg-green-100 border-l-4 border-green-500 cursor-pointer" data-info="Fuente principal de energía. El cuerpo usa grasa como combustible en cetosis."> <!-- Adjusted padding -->
                                                <div class="flex justify-between items-center">
                                                    <span class="font-bold text-green-800 text-sm">Grasas</span> <!-- Adjusted size -->
                                                    <span class="text-base font-semibold text-green-600">>75%</span> <!-- Adjusted size -->
                                                </div>
                                            </div>
                                            <div class="macro-item p-3 rounded-lg bg-blue-100 border-l-4 border-blue-500 cursor-pointer" data-info="Moderado para preservar músculo sin convertirse en glucosa."> <!-- Adjusted padding -->
                                                <div class="flex justify-between items-center">
                                                    <span class="font-bold text-blue-800 text-sm">Proteínas</span> <!-- Adjusted size -->
                                                    <span class="text-base font-semibold text-blue-600">10-20%</span> <!-- Adjusted size -->
                                                </div>
                                            </div>
                                            <div class="macro-item p-3 rounded-lg bg-orange-100 border-l-4 border-orange-500 cursor-pointer" data-info="Limitar a <20-50g/día es clave para la cetosis."> <!-- Adjusted padding -->
                                                <div class="flex justify-between items-center">
                                                    <span class="font-bold text-orange-800 text-sm">Carbohidratos</span> <!-- Adjusted size -->
                                                    <span class="text-base font-semibold text-orange-600"><5%</span> <!-- Adjusted size -->
                                                </div>
                                            </div>
                                        </div>
                                        <p id="macro-info-box" class="mt-3 p-3 bg-gray-100 rounded-lg text-center text-gray-700 text-sm min-h-[60px] flex items-center justify-center"> <!-- Adjusted margin/padding/size/height -->
                                            Haz clic en un macro para ver detalles.
                                        </p>
                                    </div>
                                    <div class="relative h-56 flex flex-col justify-center items-center"> <!-- Adjusted height -->
                                        <h3 class="font-semibold text-base mb-3 text-center">De Grasa a Energía</h3> <!-- Adjusted size/margin -->
                                        <div class="flex items-center space-x-6"> <!-- Adjusted spacing -->
                                            <div class="text-center">
                                                <svg class="w-10 h-10 text-yellow-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477z"></path></svg> <!-- Adjusted size -->
                                                <p class="text-xs mt-1">Grasas</p>
                                            </div>
                                            <div class="relative text-center">
                                                <svg class="w-14 h-14 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.872 12.637C5.463 12.233 6 11.534 6 10.74V7a2 2 0 012-2h8a2 2 0 012 2v3.74c0 .794.537 1.493 1.128 1.897C20.22 13.43 21 14.59 21 16c0 1.657-1.343 3-3 3H6c-1.657 0-3-1.343-3-3 0-1.41.78-2.57 1.872-3.363z"></path></svg> <!-- Adjusted size -->
                                                <p class="text-xs mt-1">Hígado</p>
                                                <div class="absolute top-1/2 left-1/2 w-full h-full"> <!-- Container for flows -->
                                                    <div class="ketone-flow ketone-flow-1"></div>
                                                    <div class="ketone-flow ketone-flow-2"></div>
                                                </div>
                                            </div>
                                            <div class="space-y-6"> <!-- Adjusted spacing -->
                                                <div class="text-center">
                                                    <svg class="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945C21.412 11 22 10.412 22 9.755V8.245C22 7.588 21.412 7 20.945 7H19a2 2 0 01-2-2v-1a2 2 0 00-2-2H8a2 2 0 00-2 2v1a2 2 0 01-2 2H3.055C2.588 7 2 7.588 2 8.245v1.51C2 10.412 2.588 11 3.055 11z"></path></svg> <!-- Adjusted size -->
                                                    <p class="text-xs mt-1">Cerebro</p>
                                                </div>
                                                <div class="text-center">
                                                    <svg class="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> <!-- Adjusted size -->
                                                    <p class="text-xs mt-1">Músculos</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="section-card p-4 md:p-6 rounded-xl shadow-md mb-8"> <!-- Adjusted padding/shadow/margin -->
                                <h2 class="text-xl md:text-2xl font-bold text-center text-blue-800 mb-6">Beneficios Potenciales</h2> <!-- Adjusted size/margin -->
                                <div id="benefits-grid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-center"> <!-- Adjusted gap -->
                                    <div class="benefit-item" data-title="Pérdida de Peso" data-content="Efectiva al convertir tu cuerpo en quemagrasas.">
                                        <div class="icon-card p-3 bg-white rounded-lg shadow-sm transition-all duration-300"> <!-- Adjusted padding/shadow -->
                                            <svg class="w-12 h-12 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 14v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4M8 14h8M12 18v-4m-4-4h8"></path><path d="M12 22a10 10 0 110-20 10 10 0 010 20z"></path></svg> <!-- Adjusted size -->
                                            <h4 class="font-semibold mt-2 text-sm">Pérdida Peso</h4> <!-- Adjusted size -->
                                        </div>
                                    </div>
                                     <div class="benefit-item" data-title="Claridad Mental y Energía" data-content="Aumento de concentración y energía estable al usar cetonas.">
                                        <div class="icon-card p-3 bg-white rounded-lg shadow-sm transition-all duration-300">
                                            <svg class="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                            <h4 class="font-semibold mt-2 text-sm">Claridad Mental</h4>
                                        </div>
                                    </div>
                                    <div class="benefit-item" data-title="Control del Azúcar" data-content="Eficaz para diabetes tipo 2 al reducir azúcar e insulina.">
                                        <div class="icon-card p-3 bg-white rounded-lg shadow-sm transition-all duration-300">
                                            <svg class="w-12 h-12 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                            <h4 class="font-semibold mt-2 text-sm">Control Azúcar</h4>
                                        </div>
                                    </div>
                                      <div class="benefit-item" data-title="Reducción del Hambre" data-content="Cetonas y grasas suprimen el apetito, facilitando comer menos.">
                                        <div class="icon-card p-3 bg-white rounded-lg shadow-sm transition-all duration-300">
                                            <svg class="w-12 h-12 mx-auto text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <h4 class="font-semibold mt-2 text-sm">Menos Hambre</h4>
                                        </div>
                                    </div>
                                     <div class="benefit-item" data-title="Mejora Marcadores Salud" data-content="Puede mejorar colesterol, presión arterial y triglicéridos.">
                                        <div class="icon-card p-3 bg-white rounded-lg shadow-sm transition-all duration-300">
                                            <svg class="w-12 h-12 mx-auto text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                            <h4 class="font-semibold mt-2 text-sm">Salud Cardiaca</h4>
                                        </div>
                                    </div>
                                </div>
                                <div id="benefit-modal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 hidden opacity-0 transition-opacity duration-300"> <!-- Added opacity transition -->
                                    <div class="bg-white rounded-lg p-6 max-w-sm w-full text-center relative transform scale-95 transition-transform duration-300"> <!-- Adjusted padding/width and added transform transition -->
                                        <button id="close-benefit-modal" class="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-4xl leading-none">&times;</button> <!-- Adjusted position/size -->
                                        <h3 id="benefit-modal-title" class="text-xl font-bold text-blue-800 mb-3"></h3> <!-- Adjusted size/margin -->
                                        <p id="benefit-modal-content" class="text-gray-600 text-sm"></p> <!-- Adjusted size -->
                                    </div>
                                </div>
                            </section>
                            <section class="section-card p-4 md:p-6 rounded-xl shadow-md mb-8"> <!-- Adjusted padding/shadow/margin -->
                                <h2 class="text-xl md:text-2xl font-bold text-center text-blue-800 mb-6">Tu Lista de Compras Keto</h2> <!-- Adjusted size/margin -->
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Adjusted gap -->
                                    <div class="p-3 bg-green-50 rounded-lg"> <!-- Adjusted padding -->
                                        <h3 class="text-xl font-semibold text-center text-green-700 mb-3 flex items-center justify-center"> <!-- Adjusted size/margin -->
                                            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> <!-- Adjusted size -->
                                            Comer
                                        </h3>
                                        <div class="grid grid-cols-3 gap-3"> <!-- Adjusted gap -->
                                            <div class="food-item aspect-square rounded-lg bg-cover bg-center" style="background-image: url('https://placehold.co/150x150/a3e635/ffffff?text=Carne')" data-tooltip="Proteínas y grasas"></div>
                                            <div class="food-item aspect-square rounded-lg bg-cover bg-center" style="background-image: url('https://placehold.co/150x150/38bdf8/ffffff?text=Pescado')" data-tooltip="Omega-3, grasas"></div>
                                            <div class="food-item aspect-square rounded-lg bg-cover bg-center" style="background-image: url('https://placehold.co/150x150/fde047/ffffff?text=Huevos')" data-tooltip="Nutritivos, versátiles"></div>
                                            <div class="food-item aspect-square rounded-lg bg-cover bg-center" style="background-image: url('https://placehold.co/150x150/22c55e/ffffff?text=Aguacate')" data-tooltip="Grasas saludables"></div>
                                            <div class="food-item aspect-square rounded-lg bg-cover bg-center" style="background-image: url('https://placehold.co/150x150/16a34a/ffffff?text=Verduras')" data-tooltip="Hoja verde, bajos carbs"></div>
                                            <div class="food-item aspect-square rounded-lg bg-cover bg-center" style="background-image: url('https://placehold.co/150x150/fbbf24/ffffff?text=Quesos')" data-tooltip="Grasa, proteína"></div>
                                        </div>
                                    </div>
                                    <div class="p-3 bg-red-50 rounded-lg"> <!-- Adjusted padding -->
                                        <h3 class="text-xl font-semibold text-center text-red-700 mb-3 flex items-center justify-center"> <!-- Adjusted size/margin -->
                                            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!-- Adjusted size -->
                                            Evitar
                                        </h3>
                                        <div class="grid grid-cols-3 gap-3"> <!-- Adjusted gap -->
                                            <div class="food-item aspect-square rounded-lg bg-cover bg-center" style="background-image: url('https://placehold.co/150x150/facc15/ffffff?text=Pan')" data-tooltip="Altos carbs"></div>
                                            <div class="food-item aspect-square rounded-lg bg-cover bg-center" style="background-image: url('https://placehold.co/150x150/f59e0b/ffffff?text=Pasta')" data-tooltip="Altos carbs"></div>
                                            <div class="food-item aspect-square rounded-lg bg-cover bg-center" style="background-image: url('https://placehold.co/150x150/eab308/ffffff?text=Azúcar')" data-tooltip="Impide cetosis"></div>
                                            <div class="food-item aspect-square rounded-lg bg-cover bg-center" style="background-image: url('https://placehold.co/150x150/ef4444/ffffff?text=Refrescos')" data-tooltip="Azúcar, carbs vacíos"></div>
                                            <div class="food-item aspect-square rounded-lg bg-cover bg-center" style="background-image: url('https://placehold.co/150x150/fb923c/ffffff?text=Frutas+Altas')" data-tooltip="Alto azúcar (plátanos, uvas)"></div>
                                            <div class="food-item aspect-square rounded-lg bg-cover bg-center" style="background-image: url('https://placehold.co/150x150/d97706/ffffff?text=Patatas')" data-tooltip="Almidón, carbs"></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="food-tooltip" class="tooltip absolute z-10 p-1.5 text-xs text-white bg-gray-900 rounded shadow-lg"></div> <!-- Adjusted padding/size -->
                            </section>
                            <section class="section-card p-4 md:p-6 rounded-xl shadow-md mb-8"> <!-- Adjusted padding/shadow/margin -->
                                <h2 class="text-xl md:text-2xl font-bold text-center text-blue-800 mb-6">Importante: ¿Es Segura para Todos?</h2> <!-- Adjusted size/margin -->
                                <div id="warnings-accordion" class="space-y-3 max-w-xl mx-auto"> <!-- Adjusted spacing/width -->
                                    <div class="accordion-item border border-yellow-300 rounded-lg overflow-hidden"> <!-- Added overflow hidden -->
                                        <button class="accordion-header w-full flex justify-between items-center p-3 text-left bg-yellow-100 hover:bg-yellow-200 transition"> <!-- Adjusted padding -->
                                            <span class="font-semibold text-yellow-800 text-sm flex items-center"><svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>Efectos Secundarios ("Gripe Keto")</span> <!-- Adjusted size -->
                                            <svg class="w-5 h-5 transform transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg> <!-- Adjusted size -->
                                        </button>
                                        <div class="accordion-content">
                                            <p class="p-3 bg-white text-gray-700 text-sm">Dolor de cabeza, fatiga, náuseas en la 1ª semana (adaptación). Hidratación y electrolitos son clave.</p> <!-- Adjusted padding/size -->
                                        </div>
                                    </div>
                                    <div class="accordion-item border border-red-300 rounded-lg overflow-hidden">
                                        <button class="accordion-header w-full flex justify-between items-center p-3 text-left bg-red-100 hover:bg-red-200 transition">
                                            <span class="font-semibold text-red-800 text-sm flex items-center"><svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>Contraindicaciones y Consulta Médica</span>
                                            <svg class="w-5 h-5 transform transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                        <div class="accordion-content">
                                            <p class="p-3 bg-white text-gray-700 text-sm"><b>NO es para todos.</b> Consulta médica crucial si tienes: diabetes T1, enf. renal/hepática, pancreatitis, embarazo/lactancia.</p>
                                        </div>
                                    </div>
                                    <div class="accordion-item border border-blue-300 rounded-lg overflow-hidden">
                                        <button class="accordion-header w-full flex justify-between items-center p-3 text-left bg-blue-100 hover:bg-blue-200 transition">
                                            <span class="font-semibold text-blue-800 text-sm flex items-center"><svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>Nutrientes a Vigilar</span>
                                            <svg class="w-5 h-5 transform transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                        <div class="accordion-content">
                                            <p class="p-3 bg-white text-gray-700 text-sm">Asegurar ingesta de fibra y electrolitos (sodio, potasio, magnesio) para evitar calambres, fatiga, etc.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                           
                        </div>
                        <script>
                            document.addEventListener('DOMContentLoaded', function() {
                                // Macros Interaction
                                const macroItems = document.querySelectorAll('.macro-item');
                                const macroInfoBox = document.getElementById('macro-info-box');
                                macroItems.forEach(item => {
                                    item.addEventListener('click', () => {
                                        macroInfoBox.textContent = item.dataset.info;
                                        macroItems.forEach(i => i.classList.remove('ring-2', 'ring-offset-2', 'ring-blue-400'));
                                        item.classList.add('ring-2', 'ring-offset-2', 'ring-blue-400');
                                    });
                                });

                                // Benefit Modal
                                const benefitItems = document.querySelectorAll('.benefit-item');
                                const benefitModal = document.getElementById('benefit-modal');
                                const closeModalBtn = document.getElementById('close-benefit-modal');
                                const modalTitle = document.getElementById('benefit-modal-title');
                                const modalContent = document.getElementById('benefit-modal-content');
                                let previouslyFocusedElement = null; // To return focus

                                const openBenefitModal = (item) => {
                                     previouslyFocusedElement = document.activeElement; // Save focus
                                     modalTitle.textContent = item.dataset.title;
                                     modalContent.textContent = item.dataset.content;
                                     benefitModal.classList.remove('hidden');
                                     setTimeout(() => { // Allow display change before transition
                                        benefitModal.classList.remove('opacity-0');
                                        benefitModal.querySelector('.transform').classList.remove('scale-95');
                                        closeModalBtn.focus(); // Focus the close button
                                     }, 10); // Small delay
                                }

                                const closeBenefitModal = () => {
                                    benefitModal.classList.add('opacity-0');
                                    benefitModal.querySelector('.transform').classList.add('scale-95');
                                    setTimeout(() => {
                                        benefitModal.classList.add('hidden');
                                        if (previouslyFocusedElement) previouslyFocusedElement.focus(); // Return focus
                                    }, 300); // Match transition duration
                                }

                                benefitItems.forEach(item => {
                                    item.addEventListener('click', () => openBenefitModal(item));
                                });
                                closeModalBtn.addEventListener('click', closeBenefitModal);
                                benefitModal.addEventListener('click', (e) => { if (e.target === benefitModal) closeBenefitModal(); });
                                document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !benefitModal.classList.contains('hidden')) closeBenefitModal(); });


                                // Food Tooltip
                                const foodItems = document.querySelectorAll('.food-item');
                                const tooltip = document.getElementById('food-tooltip');
                                const offset = 10; // Pixels offset from cursor

                                foodItems.forEach(item => {
                                    item.addEventListener('mousemove', (e) => {
                                        tooltip.textContent = item.dataset.tooltip;
                                        tooltip.classList.add('visible');

                                        // Position tooltip relative to the viewport
                                        let x = e.clientX + offset;
                                        let y = e.clientY + offset;

                                        // Adjust if tooltip goes off-screen
                                        const tooltipRect = tooltip.getBoundingClientRect();
                                        const viewportWidth = window.innerWidth;
                                        const viewportHeight = window.innerHeight;

                                        if (x + tooltipRect.width > viewportWidth - offset) {
                                            x = e.clientX - tooltipRect.width - offset;
                                        }
                                        if (y + tooltipRect.height > viewportHeight - offset) {
                                            y = e.clientY - tooltipRect.height - offset;
                                        }

                                        tooltip.style.left = \`\${x}px\`;
                                        tooltip.style.top = \`\${y}px\`;
                                        tooltip.style.position = 'fixed'; // Use fixed position
                                    });
                                    item.addEventListener('mouseleave', () => {
                                        tooltip.classList.remove('visible');
                                    });
                                });

                                // Accordion
                                const accordionHeaders = document.querySelectorAll('.accordion-header');
                                accordionHeaders.forEach(header => {
                                    header.addEventListener('click', () => {
                                        const content = header.nextElementSibling;
                                        const icon = header.querySelector('svg:last-child');
                                        const currentlyOpen = content.classList.contains('open');

                                        // Close all others first
                                        document.querySelectorAll('.accordion-content.open').forEach(openContent => {
                                            if (openContent !== content) {
                                                openContent.classList.remove('open');
                                                openContent.previousElementSibling.querySelector('svg:last-child').classList.remove('rotate-180');
                                            }
                                        });

                                        // Toggle the clicked one
                                        if (!currentlyOpen) {
                                            content.classList.add('open');
                                            icon.classList.add('rotate-180');
                                        } else {
                                            content.classList.remove('open');
                                            icon.classList.remove('rotate-180');
                                        }
                                    });
                                });
                            });
                        ${'\x3c/script>'}
                    <\/body>
                    <\/html>
                `,
                // Contenidos de marcador de posición para las otras dietas
                //'ayuno-intermitente': placeholderContent, // Replaced by actual content
                //'keto': placeholderContent, // Replaced by the actual content above
                'plantas': placeholderContent,
                'eliminacion': placeholderContent,
                'antiinflamatoria': placeholderContent,
                'proteinas': placeholderContent,
                'dash': placeholderContent,
                'baja-carbos': placeholderContent,
            };

            // MEJORA: Función para atrapar el foco dentro del modal
            function trapFocus(e) {
                if (e.key !== 'Tab') return; // Solo nos interesa la tecla Tab

                // Si se presiona Shift + Tab (hacia atrás)
                if (e.shiftKey) {
                    // Check if the currently focused element is the iframe's contentWindow's active element
                    const iframeActiveElement = modalIframe.contentWindow?.document?.activeElement;
                    const iframeFirstFocusable = getFirstFocusableElement(modalIframe.contentWindow.document);

                    if (document.activeElement === firstFocusableElement ) {
                         // Si estamos en el primer elemento (botón cerrar), vamos al último (iframe o un elemento dentro)
                         e.preventDefault();
                         // Try to focus the last focusable element inside the iframe first
                         const iframeLastFocusable = getLastFocusableElement(modalIframe.contentWindow.document);
                         if (iframeLastFocusable) {
                             iframeLastFocusable.focus();
                         } else {
                            // If no focusable element in iframe, focus the iframe itself
                            lastFocusableElement.focus();
                         }
                    } else if (iframeActiveElement && iframeActiveElement === iframeFirstFocusable) {
                         // If focus is on the first element inside the iframe, move to the close button
                         e.preventDefault();
                         firstFocusableElement.focus();
                    }
                } 
                // Si se presiona Tab (hacia adelante)
                else {
                     // Check if focus is inside the iframe
                    const iframeActiveElement = modalIframe.contentWindow?.document?.activeElement;
                    const iframeLastFocusable = getLastFocusableElement(modalIframe.contentWindow?.document);

                    if (document.activeElement === lastFocusableElement || (iframeActiveElement && iframeActiveElement === iframeLastFocusable && iframeLastFocusable !== null)) {
                         // Si estamos en el último elemento (iframe o el último dentro de él), vamos al primero (botón cerrar)
                        e.preventDefault();
                        firstFocusableElement.focus();
                    } else if (document.activeElement === firstFocusableElement && !iframeActiveElement){
                        // If on close button and iframe hasn't received focus yet, try focusing iframe or first element inside
                         e.preventDefault();
                         const iframeFirstFocusable = getFirstFocusableElement(modalIframe.contentWindow.document);
                          if (iframeFirstFocusable) {
                               iframeFirstFocusable.focus();
                           } else {
                               lastFocusableElement.focus(); // Focus iframe itself
                           }
                    }
                     // Handle case where iframe has focusable elements but none are currently focused
                    else if (document.activeElement === lastFocusableElement && iframeLastFocusable === null) {
                         e.preventDefault();
                         firstFocusableElement.focus(); // Go back to close button if iframe is empty/non-interactive
                     }
                }
            }
             // Helper functions to find focusable elements within iframe
            function getFocusableElements(doc) {
                if (!doc) return [];
                return Array.from(
                    doc.querySelectorAll(
                    'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
                    )
                ).filter(el => {
                    const style = window.getComputedStyle(el);
                    return style.display !== 'none' && style.visibility !== 'hidden' && el.offsetWidth > 0 && el.offsetHeight > 0;
                 }); // Check visibility more robustly
            }
            function getFirstFocusableElement(doc) {
                const focusable = getFocusableElements(doc);
                return focusable.length ? focusable[0] : null;
            }

            function getLastFocusableElement(doc) {
                const focusable = getFocusableElements(doc);
                return focusable.length ? focusable[focusable.length - 1] : null;
            }


            // --- FUNCIÓN openModal MODIFICADA ---
            function openModal(dietId, openerElement) {
                // Guardar el elemento que lo abrió
                elementThatOpenedModal = openerElement || document.activeElement;

                // Buscar el contenido HTML en nuestro objeto
                const htmlContent = dietContent[dietId] || placeholderContent;
                
                // Limpiar el src para evitar conflictos
                modalIframe.src = 'about:blank';

                // Usar srcdoc para cargar el HTML incrustado.
                // Esto evita el error de seguridad 'file://'
                // Usamos setTimeout para asegurar que el DOM esté listo
                setTimeout(() => {
                    try {
                         modalIframe.srcdoc = htmlContent;
                    } catch (e) {
                        console.error("Error setting srcdoc:", e);
                        // Fallback using data URI (less ideal for complex HTML)
                        modalIframe.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent);
                    }

                    // --- INICIO: COMUNICACIÓN IFRAME -> PADRE ---
                    // Definir la función en la ventana principal que el iframe llamará
                     window.openModalFromIframe = function(dietIdToOpen, buttonElementInIframe) {
                         // console.log('Called from iframe with dietId:', dietIdToOpen);
                         
                         // Try to find the button equivalent in the parent window if possible
                         // This is tricky as the buttonElementInIframe is inside the iframe context
                         // For now, we'll just pass the dietId and focus returns to original opener
                         let openerForNewModal = elementThatOpenedModal; // Default back to original opener

                         openModal(dietIdToOpen, openerForNewModal);
                     }
                    // --- FIN: COMUNICACIÓN IFRAME -> PADRE ---

                }, 50); // Small delay to help rendering


                
                // Mostrar el modal
                modal.classList.add('active');
                
                // Añadir el listener del focus trap
                document.addEventListener('keydown', trapFocus); // Attach to document to catch focus leaving modal area
                
                // Mover el foco al modal (al botón de cerrar)
                setTimeout(() => {
                     if(firstFocusableElement) firstFocusableElement.focus();
                }, 150); // Increased timeout slightly
            }

            // --- FUNCIÓN closeModal MODIFICADA ---
            function closeModal() {
                modal.classList.remove('active');
                
                // Quitar el listener del focus trap
                document.removeEventListener('keydown', trapFocus); // Remove from document

                 // Eliminar la función de comunicación para evitar memory leaks
                 delete window.openModalFromIframe;

                setTimeout(() => {
                    // Limpia el iframe para detener cualquier script o video
                    modalIframe.srcdoc = ''; 
                    modalIframe.src = 'about:blank';
                    
                    // Devolver el foco al elemento original
                    if (elementThatOpenedModal) {
                         try {
                              elementThatOpenedModal.focus();
                         } catch (e) {
                             console.warn("Could not return focus:", e);
                         }
                    }
                }, 300); // 300ms coincide con la duración de la transición CSS
            }

            // --- ASIGNACIÓN DE EVENTOS MODIFICADA ---
            dietLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault(); 
                    // Ahora leemos 'data-diet' en lugar de 'data-url'
                    const dietId = link.dataset.diet; 
                    openModal(dietId, link); 
                });
            });

            // Asignar evento al botón de cerrar ('X')
            closeBtn.addEventListener('click', closeModal);

            // Asignar evento para cerrar el modal si se hace clic en el fondo oscuro (overlay)
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });

            // Asignar evento para cerrar el modal si se presiona la tecla 'Escape'
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('active')) {
                    closeModal();
                }
            });

        });
