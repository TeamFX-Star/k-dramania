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
            'post-meta-2': '22 Jun, 2024 01:46 p.m. MX',
            'post-meta-3': 'The comedy drama that is pleasing to the audience. (Netflix)',
            'post-meta-4': 'The comedy drama that is pleasing to the audience. (Netflix)',
            'post-meta-5': 'Six enigmatic agents with exceptional chemistry delve into peculiar events. (Netflix)',
            'post-meta-6': 'Images from Kimetsu No Yaiba: "Demon Slayer". (Photo: Senpai Capture)',
            'post-meta-7': 'The top 0.01% of students control law and order at Jooshin High School, but a secret transfer student cracks their indomitable world. (Netflix)',
            'post-meta-8': 'Starring drama and comedy series featuring Lee Ji-ah and Kang Ki-young. (Prime Video)',
            'post-meta-9': 'In the third season, secrets are revealed that could change the course of things. (Netflix)',
            'post-meta-10': 'The 8 Show, the suspense series that is keeping everyone on the edge of their seats. (Netflix)',
            'post-meta-11': 'The YouTuber travels to various parts of the world to eat at restaurants recommended by taxi drivers. (Good.Film)',
            'post-meta-12': 'At a young age, they stumbled into the world of parenting. In addition to their daily tasks, they face obstacles and the stigma of being teenage parents.',
            'post-meta-13': 'Issues such as bulimia and smartphone addiction affect the family. (Credits: Netflix)',
            
            'post-title-1': 'Ranking of K-dramas: Hierarchy and other series to watch this weekend',
            'post-title-2': 'Top 10 K-dramas',
            'post-title-3': '1. Daytime, Nighttime',
            'post-title-4': '2. Mystery Agents',
            'post-title-5': '3. Demon Slayer: Kimetsu no Yaiba',
            'post-title-6': '4. Hierarchy',
            'post-title-7': '5. Queen of Divorce',
            'post-title-8': '6. Bridgerton',
            'post-title-9': '7. The 8 Show',
            'post-title-10': '8. Kwak Jun-bin’s World Taxi Restaurant',
            'post-title-11': '9. Best Baseball',
            'post-title-12': '10. An Atypical Family',
            'post-title-13': 'K-dramas are at the center of popularity',
                    
            'post-content-1': 'The streaming platform has significantly expanded its catalog in recent years to satisfy its users.',
            'post-content-2': 'The phenomenon of K-dramas has transcended borders, consolidating itself as an international success. In recent years, South Korean series available on streaming platforms have captured a global audience, including Latin America. These dramas stand out for their intriguing plots, character developments, and impeccable production that captivate viewers from the first episode.',
            'post-content-3': 'Here is a summary of the 10 most-watched K-dramas on Netflix South Korea that will undoubtedly conquer the hearts of Latin American viewers with their unique blend of drama, romance, suspense, and comedy. Each of these titles promises hours of entertainment and has been carefully selected for its popularity and acceptance among Korean viewers, anticipating the same success in this region; however, it is worth noting that this week an anime and a Western series that, due to their quality, earned their space to continue being mentioned, were included in the list.',
            'post-content-4': 'A twenty-something caught between two generations—her own by night and a 50-year-old woman by day—begins to work for a ruthless prosecutor.',
            'post-content-5': 'Six "mystery agents" with great chemistry have six hours to solve paranormal mysteries using their wit and teamwork.',
            'post-content-6': 'This anime is based on the Taisho period in Japan. Tanjiro, a kind-hearted boy who sells charcoal to make a living, discovers that his family was massacred by a demon. To make matters worse, his younger sister Nezuko, the only survivor, has been transformed into a demon. Devastated by this harsh reality, Tanjiro vows to become a "demon slayer" to restore his sister\'s humanity and kill the demon who slaughtered his family.',
            'post-content-7': 'The top 0.01% of students at Jooshin School control everything, but a rather reserved exchange student manages to crack open a rift in that unfathomable world.',
            'post-content-8': 'Korea\'s most skilled divorce solver and an eccentric lawyer who offers solutions for troubled marriages, punishing unfaithful spouses in the process.',
            'post-content-9': 'While debutantes aspire to be the shiniest diamonds at the ball, a discreet gem with a double life discovers her own shine amid secrets and surprises.',
            'post-content-10': 'Eight individuals trapped in a mysterious eight-story building engage in a tempting yet dangerous game where they earn money as time passes.',
            'post-content-11': 'This South Korean television program follows popular travel YouTuber Kwak Jun-bin as he travels the world in a taxi. The show highlights local taxi drivers, who share their recommendations and insights about the area, allowing Kwak Jun-bin to discover fascinating places and experience valuable encounters that only locals know. It is a unique travel reality show that offers an authentic and local perspective on the visited destinations.',
            'post-content-12': 'Amateur baseball players face off against professional athletes in a championship to determine which team is the ultimate winner.',
            'post-content-13': 'They once had unique superpowers, but modern life caused them to lose their abilities... until a mysterious woman changes everything.',
            'post-content-14': 'Recently, these Korean series have captured the interest of an international audience. A clear example of this phenomenon is "Squid Game," a Netflix production that managed to attract millions of viewers worldwide and established itself as a reference for K-dramas.',
            'post-content-15': 'Streaming platforms have played a crucial role in this boom, providing access to these Korean dramas anytime and anywhere, removing language and visual quality barriers, and allowing users to enjoy marathons of their favorite series.',
            'post-content-16': 'It is important to note that, although this list reflects preferences in South Korea, some of the mentioned titles may not be available in all regions.',
                                    
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
            'post-meta-3': 'El drama de comedia que está gustando al público. (Netflix)',
            'post-meta-4': 'El drama de comedia que está gustando al público. (Netflix)',
            'post-meta-5': 'Seis agentes enigmáticos con una química excepcional se sumergen en sucesos peculiares. (Netflix)',
            'post-meta-6': 'Imágenes de Kimetsu No Yaiba: "Demon Slayer". (Foto: Captura Senpai)',
            'post-meta-7': 'El 0.01% superior de los estudiantes controla la ley y el orden en la Escuela Secundaria Jooshin, pero un estudiante de traslado secreto agrieta su mundo indomable. (Netflix)',
            'post-meta-8': 'Serie de drama y comedia estelarizado por Lee Ji-ah y Kang Ki-young. (Prime Video)',
            'post-meta-9': 'En la tercera temporada se revelan secretos que podrían cambiar el curso de las cosas. (Netflix)',
            'post-meta-10': 'The 8 Show, la serie de suspenso que está dejando a todos al filo del asiento. (Netflix)',
            'post-meta-11': 'El youtuber recorre varias partes del mundo para comer en restaurantes recomendados por choferes de taxi. (Good.Film)',
            'post-meta-12': 'A una edad temprana, se tropezaron en el mundo de la crianza. Además de sus tareas cotidianas, enfrentan obstáculos y el estigma de ser padres adolescentes.',
            'post-meta-13': 'Problemas como la bulimia y la adicción a los smartphones afectan a la familia. (Créditos: Nefflix)',

            'post-title-1': 'Ranking de K-dramas: Jerarquía y otras series para ver este fin de semana',
            'post-title-2': 'Top 10 de K-dramas',
            'post-title-3': '1. Ella de día, otra de noche',
            'post-title-4': '2. Agentes del misterio',
            'post-title-5': '3. Demon Slayer: Kimetsu no Yaiba',
            'post-title-6': '4. Jerarquía',
            'post-title-7': '5. La reina del divorcio',
            'post-title-8': '6. Bridgerton',
            'post-title-9': '7. The 8 Show',
            'post-title-10': '8. Kwak Jun-bin’s World Taxi Restaurant',
            'post-title-11': '9. El mejor béisbol',
            'post-title-12': '10. Una familia atípica',
            'post-title-13': 'Los K-dramas ocupan el centro de la popularidad',

            'post-content-1': 'La plataforma de streaming ha incrementado significativamente su catálogo en los últimos años para satisfacer a sus usuarios.',
            'post-content-2': 'El fenómeno de los K-dramas ha traspasado fronteras, consolidándose como un éxito internacional. En los últimos años, series surcoreanas disponibles en plataformas de streaming han capturado una audiencia global, incluyendo a Latinoamérica. Estos dramas destacan por sus intrigantes tramas, desarrollos de personajes y una impecable producción que deja atrapados a los espectadores desde el primer episodio.',
            'post-content-3': 'A continuación, presentamos un resumen de los 10 K-dramas más vistos en Netflix Corea del Sur que, sin duda, conquistarán los corazones de los espectadores latinoamericanos con su mezcla única de drama, romance, suspenso y comedia. Cada uno de estos títulos promete horas de entretenimiento y ha sido cuidadosamente seleccionado por su popularidad y aceptación entre los televidentes coreanos, anticipando el mismo éxito en esta región; sin embargo, cabe destacar que esta semana se coló en la lista un anime y una serie occidental que por su calidad se ganaron su espacio para seguir siendo mencionadas.',
            'post-content-4': 'Una veinteañera atrapada entre dos generaciones ―la propia por las noches y la de una mujer de 50 años de día― empieza a trabajar para un fiscal implacable.',
            'post-content-5': 'Seis «agentes del misterio» con mucha química tienen seis horas para resolver misterios paranormales usando su ingenio y trabajando en equipo.',
            'post-content-6': 'Este anime está basado en el período Taisho en Japón. Tanjiro, un chico de buen corazón que vende carbón para vivir, descubre que su familia fue masacrada por un demonio. Para empeorar las cosas, su hermana menor Nezuko, la única sobreviviente, ha sido transformada en un demonio. Aunque devastado por esta cruda realidad, Tanjiro se compromete a convertirse en un ‘cazador de demonios’ para poder devolverle la forma humana a su hermana y matar al demonio que masacró a su familia.',
            'post-content-7': 'El 0.01 % de los alumnos de la escuela Jooshin tiene el control de todo, pero un nuevo estudiante de intercambio bastante reservado logra abrir una grieta en ese mundo insondable.',
            'post-content-8': 'El solucionador de divorcios más experto de Corea y un abogado excéntrico que ofrece soluciones para matrimonios problemáticos, castigando a los cónyuges infieles en el proceso.',
            'post-content-9': 'Mientras las debutantes anhelan ser los diamantes más relucientes del baile, una discreta gema con una doble vida descubre su propio brillo entre secretos y sorpresas.',
            'post-content-10': 'Ocho personas atrapadas en un misterioso edificio de ocho pisos participan en un juego tentador pero peligroso en el que ganan dinero conforme pasa el tiempo.',
            'post-content-11': 'Este programa de televisión surcoreano sigue al popular YouTuber de viajes Kwak Jun-bin mientras recorre el mundo en taxi. El programa destaca por presentar a los conductores de taxi locales, quienes comparten sus recomendaciones y conocimientos sobre la zona, permitiendo a Kwak Jun-bin descubrir lugares fascinantes y vivir experiencias valiosas que solo los lugareños conocen. Es un programa de realidad de viajes único que ofrece una perspectiva auténtica y local de los destinos visitados.',
            'post-content-12': 'Jugadores de béisbol aficionados se enfrentan a profesionales del deporte en un campeonato para determinar qué equipo es el ganador absoluto.',
            'post-content-13': 'Alguna vez tuvieron superpoderes únicos, pero la vida moderna hizo que perdieran sus habilidades... hasta que una mujer misteriosa lo cambia todo.',
            'post-content-14': 'Recientemente, estas series coreanas han captado el interés de una audiencia internacional. Un ejemplo claro de este fenómeno es “El Juego del Calamar”, producción de Netflix que logró atraer a millones de espectadores en todo el mundo y se estableció como un referente de los K-dramas.',
            'post-content-15': 'Las plataformas de streaming han desempeñado un papel crucial en este auge, proporcionando acceso a estos dramas coreanos en cualquier momento y lugar, eliminando barreras del idioma y de calidad visual, y permitiendo a los usuarios disfrutar de maratones de sus series favoritas.',
            'post-content-16': 'Es importante señalar que, aunque este listado refleja las preferencias en Corea del Sur, algunos de los títulos mencionados podrían no estar disponibles en todas las regiones.',
                    
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
document.querySelector('.post-meta-12').textContent = translations[language]['post-meta-12'];
document.querySelector('.post-meta-13').textContent = translations[language]['post-meta-13'];

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
document.querySelector('.post-content-12').textContent = translations[language]['post-content-12'];
document.querySelector('.post-content-13').textContent = translations[language]['post-content-13'];
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
