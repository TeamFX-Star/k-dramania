function setLanguage() {
    const langSelect = document.getElementById('lang-select');
    const language = langSelect.value;

    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem('preferredLanguage', language);

    // Actualizar el contenido de la página basado en el idioma seleccionado
    updateContent(language);
}

function updateContent(language) {
    const translations = {
        'en': {
            'hello': 'Hello',
            'home': 'Home',
            'sign-in-button': 'Sign In',
            'sign-up-button': 'Sign Up',
            'dramas': 'Dramas',
            'news': 'News',
            'actors': 'Actors',
            'support': 'Support',
            'language-option-en': 'English',
            'language-option-es': 'Spanish',
    
            'post-meta-1': 'By Luz Gonzalez',
            'post-meta-2': 'Jun 22, 2024 01:46 p.m. MX',
            'post-meta-3': 'The top 0.01% of students enforce law and order at Jooshin High School, but a secret transfer student cracks their indomitable world. (Netflix)',
            'post-meta-4': 'Demon Slayer: Kimetsu no Yaiba - To the Hashira Training Arc. (Credits: Crunchyroll)',
            'post-meta-5': '"Atypical Family" runs approximately 70 minutes per episode. (Credit: Netflix)',
            'post-meta-6': 'The game on The 8 Show ends when a participant dies, intensifying the suspense. (Credit: Netflix)',
            'post-meta-7': 'This Korean series puts the viewer in the shoes of amateur baseball players. (Netflix)',
            'post-meta-8': 'Kaiju No. 8 - JAKDF 3rd Division Naoya Matsumoto / SHUEISHA',
            'post-meta-9': 'A group of divorcees gathers to find their next partner. (Netflix)',
            'post-meta-10': "Kim Soo-hyun returns to acting after four years, with the k-drama \"The Queen of Tears\". (Credits: Netflix)",
            'post-meta-11': "This comedy series has gained the attention of users. (Netflix)",
    
            'post-title-1': 'K-Drama Ranking: Hierarchy and Other Series to Watch This Weekend',
            'post-title-2': 'Top 10 K-Dramas',
            'post-title-3': "1. Hierarchy",
            'post-title-4': "2. Demon Slayer: Kimetsu no Yaiba (Guardians of the Night)",
            'post-title-5': "3. Atypical Family",
            'post-title-6': "4. The 8 Show",
            'post-title-7': "5. Teen Parents",
            'post-title-8': "6. The Best Baseball",
            'post-title-9': "7. Kaiju No. 8",
            'post-title-10': "8. Love After Divorce",
            'post-title-11': "9.- The Queen of Tears",
            'post-title-12': "10.- Speaking Frankly",
            'post-title-13': "K-Dramas Position Themselves at the Epicenter of Global Popularity",
    
            'post-content-1': "Hierarchy is currently airing and is one of the most-watched series on Netflix South Korea (Netflix)",
            'post-content-2': "The ranking of favorite K-dramas on Netflix South Korea has been updated, featuring some new entries. While Korean dramas are known for their high production quality, captivating stories, and emotionally deep characters facing complex dilemmas, the latest list has expanded its spectrum beyond the usual.",
            'post-content-3': "An anime based on a Japanese manga has been added to the selection. This addition has been recognized for its excellent quality and for capturing the audience's interest, despite being animation.",
            'post-content-4': "The top 0.01% of students at Jooshin High School controls everything, but a new transfer student who is quite reserved manages to crack open that inscrutable world.",
            'post-content-5': "This anime is based on the Taisho period in Japan. Tanjiro, a kind-hearted boy who sells charcoal for a living, discovers that his family was massacred by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon. Devastated by this harsh reality, Tanjiro vows to become a 'demon slayer' to restore his sister's humanity and kill the demon who slaughtered his family.",
            'post-content-6': "They once had unique superpowers, but modern life caused them to lose their abilities... until a mysterious woman changes everything.",
            'post-content-7': "Eight people trapped in a mysterious eight-story building participate in a tempting yet dangerous game where they earn money as time passes.",
            'post-content-8': "At a young age, they stumbled into the world of parenting. Besides their daily chores, they face obstacles and the stigma of being teenage parents.",
            'post-content-9': "Amateur baseball players face off against sports professionals in a championship to determine which team is the ultimate winner.",
            'post-content-10': "In a world plagued by creatures known as Kaiju, Kafka Hibino aspired to enlist in the Defense Force. He made a promise with his childhood friend, Mina Ashiro, but soon, life takes them on separate paths. While working cleaning up after Kaiju battles, Kafka meets Reno Ichikawa. Reno's determination to join the Defense Force reignites Kafka's promise to unite with Mina and protect humanity.",
            'post-content-11': "After returning to singledom, this group of divorced men and women prepares to get back into dating, live with new people, and find love again.",
            'post-content-12': "The ‘queen of department stores’ and her husband —who comes from a small town— go through a marital crisis until, suddenly, love begins to blossom again...",
            'post-content-13': "A respected commentator suddenly loses the ability to filter his words on air and attracts the attention of a television screenwriter who invites him to her variety show.",
            'post-content-14': "In recent times, these Korean series have captured the interest of an international audience thanks to their high production quality. A clear example of this phenomenon is “Squid Game,” a Netflix production that captivated millions of viewers around the world and became a benchmark for the entertainment potential of K-Dramas.",
            'post-content-15': "Streaming platforms have played a crucial role in this boom, providing access to these Korean dramas anytime and anywhere, eliminating language and visual quality barriers, and allowing users to binge-watch their favorite series with ease.",
            'post-content-16': "It is worth noting that while this list reflects preferences in South Korea, some of the mentioned titles might not be available in all regions, given the variability of streaming catalogs by country.",
    
            'sidebar-title-1': "Latest",
            'sidebar-title-2': "Recommended for You",
            'sidebar-title-3': "You May Also Like:",
    
            'sidebar-name-1': "6 New K-Dramas to Watch in June 2024",
            'sidebar-name-2': "K-Dramas We Look Forward to in June 2024",
            'sidebar-name-3': "All the Dramas Premiering in June 2024",    
            'sidebar-name-4': "Player 2: Master of Scammers",
            'sidebar-name-5': "The Queen of Tears",
            'sidebar-name-6': "My Sweet Mafioso",
            'sidebar-name-7': "Miss Night and Day",
            'sidebar-name-8': "Woo, an Extraordinary Lawyer",
            'sidebar-name-9': "The Player 2: Master of Scammers",
            'sidebar-name-10': "Hierarchy",
            'sidebar-name-11': "My Sweet Mafioso"      
            },
        'es': {
            'home': 'Inicio',
            'sign-in-button': 'Iniciar Sesión',
            'sign-up-button': 'Registrarse',
            'dramas': 'Dramas',
            'news': 'Noticias',
            'actors': 'Actores',
            'support': 'Soporte',
            'language-option-en': 'Inglés',
            'language-option-es': 'Español',
            
            //POST - META
            'post-meta-1': 'Por Luz Gonzalez',
            'post-meta-2': '22 Jun, 2024 01:46 p.m. MX',
            'post-meta-3': 'El 0.01% superior de los estudiantes controla la ley y el orden en la Escuela Secundaria Jooshin, pero un estudiante de traslado secreto agrieta su mundo indomable. (Netflix)',
            'post-meta-4': 'Demon Slayer: Kimetsu no Yaiba - Hacia el Arco del Entrenamiento de los Hashira. (Créditos: Crunchyroll)',
            'post-meta-5': '"Una familia atípica" tiene una duración aproximada de 70 minutos por capítulo. (Crédito: Netflix)',
            'post-meta-6': 'El juego en The 8 Show termina cuando un participante muere, intensificando el suspenso. (Crédito: Netflix)',
            'post-meta-7': 'Esta serie coreana pone al espectador en los zapatos de jugadores amateurs de beisbol. (Netflix)',
            'post-meta-8': 'Kaiju No. 8 - 3ra División JAKDF Naoya Matsumoto / SHUEISHA',
            'post-meta-9': 'Un grupo de divorciados se reúne para encontrar a su próxima pareja. (Netflix)',            
            'post-meta-10': "Kim Soo-hyun regresa a la actuación tras cuatro años, con el k-drama \"La reina de las lágrimas\". (Créditos: Netflix)",
            'post-meta-11': "Esta serie de comedia se ha ganado la atención de los usuarios. (Netflix)",
    
            'post-title-1': 'Ranking de K-Dramas: Jerarquía y Otras Series para Ver este Fin de Semana',
            'post-title-2': 'Top 10 de K-Dramas',
            'post-title-3': '1. Jerarquía',
            'post-title-4': '2. Demon Slayer: Kimetsu no Yaiba (Guardianes de la Noche)',
            'post-title-5': '3. Familia Atípica',
            'post-title-6': '4. El Show 8',
            'post-title-7': '5. Padres Adolescentes',
            'post-title-8': '6. El Mejor Béisbol',
            'post-title-9': '7. Kaiju No. 8',
            'post-title-10': '8. Amor Después del Divorcio',
            'post-title-11': "9.- La reina de las lágrimas",
            'post-title-12': "10.- Hablando con franqueza",
            'post-title-13': "Los K-dramas se posicionan en el epicentro de la popularidad global",
    
            'post-content-1': "Jerarquía se encuentra en emisión y es una de las series más vistas en Netflix Corea del Sur (Netflix)",
            'post-content-2': "El ranking de los K-dramas favoritos en Netflix Corea del Sur ha sido actualizado, presentando algunas novedades. Si bien los dramas coreanos se destacan por su calidad de producción, historias cautivadoras y personajes con gran profundidad emocional que enfrentan dilemas complejos, la lista más reciente ha ampliado su espectro más allá de lo habitual.",
            'post-content-3': "A la selección se han sumado un anime basado en un manga japonés. Esta incorporación han sido reconocidas por su excelente calidad y por haber captado el interés del público, a pesar de tratarse de una animación.",
            'post-content-4': "El 0.01% de los alumnos de la escuela Jooshin tiene el control de todo, pero un nuevo estudiante de intercambio bastante reservado logra abrir una grieta en ese mundo insondable.",
            'post-content-5': "Este anime está basado en el periodo Taisho en Japón. Tanjiro, un chico de buen corazón que vende carbón para vivir, descubre que su familia fue masacrada por un demonio. Para empeorar las cosas, su hermana menor Nezuko, la única sobreviviente, ha sido transformada en un demonio. Aunque devastado por esta cruda realidad, Tanjiro se compromete a convertirse en un 'cazador de demonios' para poder devolverle la forma humana a su hermana y matar al demonio que masacró a su familia.",
            'post-content-6': "Alguna vez tuvieron superpoderes únicos, pero la vida moderna hizo que perdieran sus habilidades... hasta que una mujer misteriosa lo cambia todo.",
            'post-content-7': "Ocho personas atrapadas en un misterioso edificio de ocho pisos participan en un juego tentador pero peligroso en el que ganan dinero conforme pasa el tiempo.",
            'post-content-8': "A una edad temprana, se tropezaron en el mundo de la crianza. Además de sus tareas cotidianas, enfrentan obstáculos y el estigma de ser padres adolescentes.",
            'post-content-9': "Jugadores de béisbol aficionados se enfrentan a profesionales del deporte en un campeonato para determinar qué equipo es el ganador absoluto.",
            'post-content-10': "En un mundo plagado de criaturas conocidas como Kaiju, Kafka Hibino aspiraba a alistarse en la Fuerza de Defensa. Hace una promesa ir con su amiga de la infancia, Mina Ashiro, pero pronto, la vida los lleva por caminos separados. Mientras trabaja limpiando después de las batallas de Kaiju, Kafka conoce a Reno Ichikawa. La determinación de Reno de unirse a la Fuerza de Defensa reaviva la promesa de Kafka de unirse con Mina y proteger a la humanidad.",
            'post-content-11': "Tras volver a la soltería, este grupo de divorciados y divorciadas se prepara para conseguir sus citas, convivir con otras personas y encontrar de nuevo el amor.",
            'post-content-12': "La ‘reina de las tiendas departamentales’ y su esposo —que proviene de un pueblo pequeño— transitan una crisis conyugal hasta que, de repente, el amor comienza a florecer otra vez...",
            'post-content-13': "Un comentarista respetado pierde de pronto la capacidad de filtrar sus palabras al aire y atrae la atención de una guionista de televisión que lo invita a su programa de variedad.",
            'post-content-14': "En los últimos tiempos, estas series coreanas han capturado el interés de una audiencia internacional gracias a su alta calidad en producción. Un claro ejemplo de este fenómeno es “El Juego del Calamar”, producción de Netflix, que logró cautivar a millones de espectadores alrededor del mundo y se erigió como un referente del potencial de entretenimiento de los K-dramas.",
            'post-content-15': "Las plataformas de streaming han jugado un papel crucial en este auge, brindando acceso a estos dramas coreanos en cualquier momento y lugar, eliminando barreras lingüísticas y de calidad visual, y permitiendo a los usuarios disfrutar de maratones de sus series favoritas con facilidad.",
            'post-content-16': "Cabe destacar que, aunque este listado refleja las preferencias en Corea del Sur, algunos de los títulos mencionados podrían no estar disponibles en todas las regiones, dada la variabilidad de los catálogos de streaming según el país.",
    
            'sidebar-title-1': "Lo Último",
            'sidebar-title-2': "Te Recomendamos",
            'sidebar-title-3': "Te puede interesar:",
    
            'sidebar-name-1': "6 nuevos K-Dramas para ver en junio de 2024",
            'sidebar-name-2': "K-Dramas que esperamos en junio de 2024",
            'sidebar-name-3': "Todos los doramas que se estrenan en junio de 2024",
            'sidebar-name-4': "El Jugador 2: Maestro de los estafadores",
            'sidebar-name-5': "La reina de las lágrimas",
            'sidebar-name-6': "Mi dulce mafioso",
            'sidebar-name-7': "Señorita noche y día",
            'sidebar-name-8': "Woo, una abogada extraordinaria",
            'sidebar-name-9': "The Player 2: Maestro de los estafadores",
            'sidebar-name-10': "Jerarquía",
            'sidebar-name-11': "Mi dulce mafioso"    
        
        }
    };
    
    // Actualizar elementos del DOM basado en el idioma seleccionado
    document.querySelector('.logo').textContent = 'K-Dramania';
    document.querySelector('.language-selector option[value="en"]').textContent = translations[language]['language-option-en'];
    document.querySelector('.language-selector option[value="es"]').textContent = translations[language]['language-option-es'];

    const signInElement = document.querySelector('.sign-in');
    const signUpElement = document.querySelector('.sign-up');

    if (signInElement) {
        signInElement.textContent = translations[language]['sign-in-button'];
    }
    
    if (signUpElement) {
        signUpElement.textContent = translations[language]['sign-up-button'];
    }
    
    

document.querySelector('#home-link').textContent = translations[language]['home'];
document.querySelector('#news-link').textContent = translations[language]['news'];
document.querySelector('#actors-link').textContent = translations[language]['actors'];
document.querySelector('#support-link').textContent = translations[language]['support'];

document.querySelector('.post-title-1').textContent = translations[language]['post-title-1'];
document.querySelector('.post-title-2').textContent = translations[language]['post-title-2'];
document.querySelector('.post-title-3').textContent = translations[language]['post-title-3'];
document.querySelector('.post-title-4').textContent = translations[language]['post-title-4'];
document.querySelector('.post-title-5').textContent = translations[language]['post-title-5'];
document.querySelector('.post-title-6').textContent = translations[language]['post-title-6'];
document.querySelector('.post-title-7').textContent = translations[language]['post-title-7'];
document.querySelector('.post-title-8').textContent = translations[language]['post-title-8'];
document.querySelector('.post-title-9').textContent = translations[language]['post-title-9'];
document.querySelector('.post-title-10').textContent = translations[language]['post-title-10'];
document.querySelector('.post-title-11').textContent = translations[language]['post-title-11'];
document.querySelector('.post-title-12').textContent = translations[language]['post-title-12'];
document.querySelector('.post-title-13').textContent = translations[language]['post-title-13'];

document.querySelector('.post-meta-1').textContent = translations[language]['post-meta-1'];
document.querySelector('.post-meta-2').textContent = translations[language]['post-meta-2'];
document.querySelector('.post-meta-3').textContent = translations[language]['post-meta-3'];
document.querySelector('.post-meta-4').textContent = translations[language]['post-meta-4'];
document.querySelector('.post-meta-5').textContent = translations[language]['post-meta-5'];
document.querySelector('.post-meta-6').textContent = translations[language]['post-meta-6'];
document.querySelector('.post-meta-7').textContent = translations[language]['post-meta-7'];
document.querySelector('.post-meta-8').textContent = translations[language]['post-meta-8'];
document.querySelector('.post-meta-9').textContent = translations[language]['post-meta-9'];
document.querySelector('.post-meta-10').textContent = translations[language]['post-meta-10'];
document.querySelector('.post-meta-11').textContent = translations[language]['post-meta-11'];

document.querySelector('.post-content-1').textContent = translations[language]['post-content-1'];
document.querySelector('.post-content-2').textContent = translations[language]['post-content-2'];
document.querySelector('.post-content-3').textContent = translations[language]['post-content-3'];
document.querySelector('.post-content-4').textContent = translations[language]['post-content-4'];
document.querySelector('.post-content-5').textContent = translations[language]['post-content-5'];
document.querySelector('.post-content-6').textContent = translations[language]['post-content-6'];
document.querySelector('.post-content-7').textContent = translations[language]['post-content-7'];
document.querySelector('.post-content-8').textContent = translations[language]['post-content-8'];
document.querySelector('.post-content-9').textContent = translations[language]['post-content-9'];
document.querySelector('.post-content-10').textContent = translations[language]['post-content-10'];
document.querySelector('.post-content-11').textContent = translations[language]['post-content-11'];
document.querySelector('.post-content-12').textContent = translations[language]['post-content-10'];
document.querySelector('.post-content-13').textContent = translations[language]['post-content-10'];
document.querySelector('.post-content-14').textContent = translations[language]['post-content-14'];
document.querySelector('.post-content-15').textContent = translations[language]['post-content-15'];
document.querySelector('.post-content-16').textContent = translations[language]['post-content-16'];

document.querySelector('.sidebar-title-1').textContent = translations[language]['sidebar-title-1'];
document.querySelector('.sidebar-title-2').textContent = translations[language]['sidebar-title-2'];
document.querySelector('.sidebar-title-3').textContent = translations[language]['sidebar-title-3'];

document.querySelector('.sidebar-name-1').textContent = translations[language]['sidebar-name-1'];
document.querySelector('.sidebar-name-2').textContent = translations[language]['sidebar-name-2'];
document.querySelector('.sidebar-name-3').textContent = translations[language]['sidebar-name-3'];
document.querySelector('.sidebar-name-4').textContent = translations[language]['sidebar-name-4'];
document.querySelector('.sidebar-name-5').textContent = translations[language]['sidebar-name-5'];
document.querySelector('.sidebar-name-6').textContent = translations[language]['sidebar-name-6'];
document.querySelector('.sidebar-name-7').textContent = translations[language]['sidebar-name-7'];
document.querySelector('.sidebar-name-8').textContent = translations[language]['sidebar-name-8'];
document.querySelector('.sidebar-name-9').textContent = translations[language]['sidebar-name-9'];
document.querySelector('.sidebar-name-10').textContent = translations[language]['sidebar-name-10'];
document.querySelector('.sidebar-name-11').textContent = translations[language]['sidebar-name-11'];
}


// Event listener para cambio de idioma
document.getElementById('lang-select').addEventListener('change', function () {
    setLanguage();
});

// Función para cargar el idioma seleccionado al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    // Obtener el idioma preferido guardado en localStorage
    const preferredLanguage = localStorage.getItem('preferredLanguage');

    // Seleccionar el idioma preferido si está guardado, de lo contrario, seleccionar inglés por defecto
    const langSelect = document.getElementById('lang-select');
    langSelect.value = preferredLanguage || 'en';

    // Llamar a setLanguage() para actualizar el contenido basado en el idioma seleccionado
    setLanguage();
});
