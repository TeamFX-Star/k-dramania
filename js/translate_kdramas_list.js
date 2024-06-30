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
            'home': 'Home',
            'discover_title': 'Discover the Best K-Dramas',
            'discover_text': 'Explore our curated collection of the hottest and most popular K-Dramas. Find detailed information, reviews, and more.',
            'browse_button': 'Browse Dramas',
            'search_button': 'Search',
            'sign_in_button': 'Sign In',
            'sign_up_button': 'Sign Up',
            'dramas': 'Dramas',
            'news': 'News',
            'actors': 'Actors',
            'reviews': 'Reviews',
            'language_option_en': 'English',
            'language_option_es': 'Spanish',
            'drama1': 'A South Korean woman accidentally paraglides into North Korea and falls in love with a North Korean officer.',
            'drama2': 'A Korean-Italian lawyer and consigliere for the mafia returns to Korea and becomes involved in a legal battle.',
            'drama3': 'A young man opens a restaurant in Itaewon and seeks revenge against a powerful family.',
            'drama4': 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits — with deadly high stakes.',
            'drama5': 'A modern-day goblin seeks to end his cursed immortal life by finding a human bride.',
            'drama6': 'An alien stranded on Earth falls in love with a top actress in South Korea.',
            'drama7': 'A love story between a special forces captain and a doctor who meet in a war-torn country.',
            'drama8': 'A group of privileged high school students discover love and friendship.',
            'drama9': 'A woman born with superhuman strength uses her powers to help those in need.',
            'drama10': 'The owner of a hotel for ghosts is bound to the establishment until she can resolve her grudge.',
            'drama11': 'A woman can foresee unfortunate events in her dreams and teams up with a prosecutor to prevent them.',
            'drama12': 'A man with a painful past and a woman with a unique syndrome strive to become journalists.',
            'drama13': 'A surgeon is pulled into the webtoon world of her father\'s creation and meets its hero.',
            'drama14': 'A caretaker at a psychiatric ward and a children\'s book author with antisocial personality disorder heal each other\'s emotional wounds.',
            'drama15': 'A weightlifter and a swimmer navigate their way through college, love, and friendship.',
            'drama16': 'A night courier with exceptional fighting skills takes on a mysterious assignment and discovers his past.',
            'drama17': 'A North Korean defector becomes a renowned surgeon in South Korea and tries to reunite with his lost love.',
            'drama18': 'A narcissistic vice president and his long-time secretary navigate their complicated relationship.',
            'drama19': 'A crown prince falls in love with a eunuch who is actually a woman in disguise.',
            'drama20': 'A modern-day woman is transported back to the Goryeo Dynasty and becomes entangled in palace politics.',
            'drama21': 'A mermaid from the Joseon era ends up in modern-day Seoul and meets a genius scam artist.',
            'drama22': 'A young man trained as a vigilante seeks revenge on behalf of his father\'s death.',
            'drama23': 'A prosecutor and a young woman with amnesia team up to solve a murder case.',
            'drama24': 'A modern-day Korean emperor passes through a mysterious portal and into a parallel world.',
            'drama25': 'An elite group of young men in the Silla Dynasty, known as Hwarang, navigate politics and love.',
            'drama26': 'A young woman dreams of becoming Korea\'s Steve Jobs and enters the world of start-ups.',
            'drama27': 'An art curator leads a double life as a passionate fan of an idol.',
            'drama28': 'A high school student discovers she is a character in a comic book and decides to change her fate.',
            'drama29': 'A woman in her 30s falls for her younger brother\'s best friend, leading to a complicated romance.',
            'drama30': 'A young woman undergoes plastic surgery to escape bullying but learns true beauty is more than skin deep.',
            'drama31': 'A high school girl uses makeup to hide her true appearance and gains popularity, but worries about her secret being discovered.',
            'drama32': 'Four friends struggle to achieve their dreams despite their harsh reality.',
            'drama33': 'A woman and a man enter a contract marriage to address their financial issues.',
            'drama34': 'A baseball star is sent to prison and must navigate life behind bars.',
            'drama35': 'A personal trainer helps a lawyer regain her health and confidence after a breakup.',
            'drama36': 'A woman defies societal norms to become a royal historian in the Joseon Dynasty.',
            'drama37': 'A top star and a documentary producer reunite years after a painful breakup.',
            'drama38': 'A profiler and a detective communicate through a mysterious walkie-talkie to solve cold cases.',
            'drama39': 'A prosecutor with a lack of empathy and a warm-hearted detective work together to uncover corruption.',
            'drama40': 'A famous surgeon becomes a teacher at a small hospital and mentors young doctors.'

        },
        'es': {
            'home': 'Inicio',
            'discover_title': 'Descubre los Mejores K-Dramas',
            'discover_text': 'Explora nuestra colección curada de los K-Dramas más populares y candentes. Encuentra información detallada, reseñas y más.',
            'browse_button': 'Ver Dramas',
            'search_button': 'Buscar',
            'sign_in_button': 'Iniciar Sesión',
            'sign_up_button': 'Registrarse',
            'dramas': 'Dramas',
            'news': 'Noticias',
            'actors': 'Actores',
            'reviews': 'Opiniones',
            'language_option_en': 'Inglés',
            'language_option_es': 'Español',
            'drama1': 'Una mujer surcoreana se lanza accidentalmente en parapente hacia Corea del Norte y se enamora de un oficial norcoreano.',
            'drama2': 'Un abogado italo-coreano y consejero de la mafia regresa a Corea y se involucra en una batalla legal.',
            'drama3': 'Un joven abre un restaurante en Itaewon y busca venganza contra una familia poderosa.',
            'drama4': 'Cientos de jugadores con problemas económicos aceptan una extraña invitación para competir en juegos infantiles. Adentro, un tentador premio los espera, con altas apuestas mortales.',
            'drama5': 'Un goblin de la era moderna busca poner fin a su vida inmortal maldita encontrando una novia humana.',
            'drama6': 'Un alienígena varado en la Tierra se enamora de una actriz destacada en Corea del Sur.',
            'drama7': 'Una historia de amor entre un capitán de fuerzas especiales y una doctora que se conocen en un país devastado por la guerra.',
            'drama8': 'Un grupo de estudiantes privilegiados de secundaria descubre el amor y la amistad.',
            'drama9': 'Una mujer nacida con fuerza sobrehumana usa sus poderes para ayudar a quienes lo necesitan.',
            'drama10': 'La dueña de un hotel para fantasmas está ligada al establecimiento hasta que pueda resolver su resentimiento.',
            'drama11': 'Una mujer puede prever eventos desafortunados en sus sueños y se une a un fiscal para evitarlos.',
            'drama12': 'Un hombre con un pasado doloroso y una mujer con un síndrome único luchan por convertirse en periodistas.',
            'drama13': 'Una cirujana es arrastrada al mundo de webtoons creado por su padre y conoce a su héroe.',
            'drama14': 'Una cuidadora en una sala psiquiátrica y una autora de libros infantiles con trastorno de personalidad antisocial sanan las heridas emocionales del otro.',
            'drama15': 'Una haltera y una nadadora navegan por la universidad, el amor y la amistad.',
            'drama16': 'Un mensajero nocturno con habilidades de lucha excepcionales acepta una misión misteriosa y descubre su pasado.',
            'drama17': 'Un desertor norcoreano se convierte en un cirujano renombrado en Corea del Sur y trata de reunirse con su amor perdido.',
            'drama18': 'Un vicepresidente narcisista y su secretaria de toda la vida navegan por su complicada relación.',
            'drama19': 'Un príncipe heredero se enamora de un eunuco que en realidad es una mujer disfrazada.',
            'drama20': 'Una mujer moderna es transportada de vuelta a la dinastía Goryeo y se ve envuelta en la política del palacio.',
            'drama21': 'Una sirena de la era Joseon termina en el Seúl moderno y conoce a un genio estafador.',
            'drama22': 'Un joven entrenado como vigilante busca venganza por la muerte de su padre.',
            'drama23': 'Un fiscal y una joven con amnesia se unen para resolver un caso de asesinato.',
            'drama24': 'Un emperador coreano moderno atraviesa un portal misterioso y entra en un mundo paralelo.',
            'drama25': 'Un grupo élite de hombres jóvenes en la dinastía Silla, conocidos como Hwarang, navegan por la política y el amor.',
            'drama26': 'Una joven sueña con convertirse en la Steve Jobs de Corea y entra en el mundo de las startups.',
            'drama27': 'Un curador de arte lleva una doble vida como fan apasionado de un ídolo.',
            'drama28': 'Una estudiante de secundaria descubre que es un personaje en un cómic y decide cambiar su destino.',
            'drama29': 'Una mujer en sus 30 se enamora del mejor amigo de su hermano menor, lo que lleva a un romance complicado.',
            'drama30': 'Una joven se somete a una cirugía plástica para escapar del acoso escolar, pero aprende que la verdadera belleza va más allá de la piel.',
            'drama31': 'Una chica de secundaria usa maquillaje para ocultar su verdadera apariencia y gana popularidad, pero se preocupa por que se descubra su secreto.',
            'drama32': 'Cuatro amigos luchan por alcanzar sus sueños a pesar de su dura realidad.',
            'drama33': 'Una mujer y un hombre entran en un matrimonio por contrato para resolver sus problemas financieros.',
            'drama34': 'Una estrella del béisbol es enviado a prisión y debe navegar la vida tras las rejas.',
            'drama35': 'Un entrenador personal ayuda a una abogada a recuperar su salud y confianza después de una ruptura.',
            'drama36': 'Una mujer desafía las normas sociales para convertirse en historiadora real en la dinastía Joseon.',
            'drama37': 'Una estrella de primera y un productor de documentales se reencuentran años después de una dolorosa ruptura.',
            'drama38': 'Un perfilador y un detective se comunican a través de un misterioso walkie-talkie para resolver casos sin resolver.',
            'drama39': 'Un fiscal con falta de empatía y un detective de buen corazón trabajan juntos para descubrir la corrupción.',
            'drama40': 'Un famoso cirujano se convierte en profesor en un pequeño hospital y mentorea a jóvenes médicos.'
        }
        // Añadir más traducciones según sea necesario
    };

    // Actualizar elementos del DOM basado en el idioma seleccionado
    document.querySelector('.logo').textContent = 'K-Dramania';
    document.querySelector('.language-selector option[value="en"]').textContent = translations[language]['language_option_en'];
    document.querySelector('.language-selector option[value="es"]').textContent = translations[language]['language_option_es'];
    
    const signInElement = document.querySelector('.sign-in');
    const signUpElement = document.querySelector('.sign-up');

    if (signInElement) {
        signInElement.textContent = translations[language]['sign_in_button'];
    }
    
    if (signUpElement) {
        signUpElement.textContent = translations[language]['sign_up_button'];
    }
    
    document.querySelector('#home-link').textContent = translations[language]['home'];
    document.querySelector('#news-link').textContent = translations[language]['news'];
    document.querySelector('#actors-link').textContent = translations[language]['actors'];
    document.querySelector('#reviews-link').textContent = translations[language]['reviews'];
    // Suponiendo que 'language' es la variable que contiene el idioma seleccionado ('en' o 'es')

    document.querySelector('#drama1-description').textContent = translations[language]['drama1'];
    document.querySelector('#drama2-description').textContent = translations[language]['drama2'];
    document.querySelector('#drama3-description').textContent = translations[language]['drama3'];
    document.querySelector('#drama4-description').textContent = translations[language]['drama4'];
    document.querySelector('#drama5-description').textContent = translations[language]['drama5'];
    document.querySelector('#drama6-description').textContent = translations[language]['drama6'];
    document.querySelector('#drama7-description').textContent = translations[language]['drama7'];
    document.querySelector('#drama8-description').textContent = translations[language]['drama8'];
    document.querySelector('#drama9-description').textContent = translations[language]['drama9'];
    document.querySelector('#drama10-description').textContent = translations[language]['drama10'];
    document.querySelector('#drama11-description').textContent = translations[language]['drama11'];
    document.querySelector('#drama12-description').textContent = translations[language]['drama12'];
    document.querySelector('#drama13-description').textContent = translations[language]['drama13'];
    document.querySelector('#drama14-description').textContent = translations[language]['drama14'];
    document.querySelector('#drama15-description').textContent = translations[language]['drama15'];
    document.querySelector('#drama16-description').textContent = translations[language]['drama16'];
    document.querySelector('#drama17-description').textContent = translations[language]['drama17'];
    document.querySelector('#drama18-description').textContent = translations[language]['drama18'];
    document.querySelector('#drama19-description').textContent = translations[language]['drama19'];
    document.querySelector('#drama20-description').textContent = translations[language]['drama20'];
    document.querySelector('#drama21-description').textContent = translations[language]['drama21'];
    document.querySelector('#drama22-description').textContent = translations[language]['drama22'];
    document.querySelector('#drama23-description').textContent = translations[language]['drama23'];
    document.querySelector('#drama24-description').textContent = translations[language]['drama24'];
    document.querySelector('#drama25-description').textContent = translations[language]['drama25'];
    document.querySelector('#drama26-description').textContent = translations[language]['drama26'];
    document.querySelector('#drama27-description').textContent = translations[language]['drama27'];
    document.querySelector('#drama28-description').textContent = translations[language]['drama28'];
    document.querySelector('#drama29-description').textContent = translations[language]['drama29'];
    document.querySelector('#drama30-description').textContent = translations[language]['drama30'];
    document.querySelector('#drama31-description').textContent = translations[language]['drama31'];
    document.querySelector('#drama32-description').textContent = translations[language]['drama32'];
    document.querySelector('#drama33-description').textContent = translations[language]['drama33'];
    document.querySelector('#drama34-description').textContent = translations[language]['drama34'];
    document.querySelector('#drama35-description').textContent = translations[language]['drama35'];
    document.querySelector('#drama36-description').textContent = translations[language]['drama36'];
    document.querySelector('#drama37-description').textContent = translations[language]['drama37'];
    document.querySelector('#drama38-description').textContent = translations[language]['drama38'];
    document.querySelector('#drama39-description').textContent = translations[language]['drama39'];
    document.querySelector('#drama40-description').textContent = translations[language]['drama40'];
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
