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
            'support': 'Support',
            'language_option_en': 'English',
            'language_option_es': 'Spanish',
            'p_content_1': "Kim Yeo-jin is a veteran actress with an extensive career in theater, film, and television. She is known for her ability to portray a wide range of characters, from heroines to villains.",
            'p_content_2': "Born as Kim Tae-pyung, Hyun Bin debuted in 2003 in the series 'Bodyguard'. He rose to fame with 'My Name is Kim Sam-soon' and 'Secret Garden'. He is known for his charismatic acting and versatility in both dramatic and romantic roles.",
            'p_content_3': "Son Ye-jin is a highly respected actress in South Korea, known for her roles in films and dramas. She debuted in 2001 and quickly became one of the most popular actresses for her roles in romantic and period dramas.",
            'p_content_4': "Kim Yeo-jin is a veteran actress with an extensive career in theater, film, and television. She is known for her ability to portray a wide range of characters, from heroines to villains.",
            'p_content_5': "Kim Jung-hyun began his career in theater before transitioning to television. He has gained popularity for his roles in 'School 2017' and 'Welcome to Waikiki'.",
            'p_content_6': "Song Joong-ki started his entertainment career as a music show host and film actor. He rose to fame with his role in the historical drama 'Sungkyunkwan Scandal' and has been a prominent actor in dramas and films.",
            'p_content_7': "Jeon Yeo-been is known for her acting skills in film and television. She gained recognition for her performance in 'After My Death', which earned her several awards.",
            'p_content_8': "2PM K-pop group member, Ok Taec-yeon has achieved a successful acting career. His versatility as an actor has allowed him to play a variety of roles in dramas and films.",
            'p_content_9': "Park Seo-joon debuted in 2011 and has been one of the most popular actors in South Korea. He is known for his ability to play comedic and romantic roles, as well as his charisma on screen.",
            'p_content_10': "Kim Da-mi debuted in cinema and quickly stood out for her performance in 'The Witch: Part 1. The Subversion'. Her role in 'Itaewon Class' solidified her position as one of the most promising young actresses.",
            'p_content_11': "Yoo Jae-myung is known for his roles in dramas and films. He has gained recognition for his ability to portray complex and authoritative characters.",
            'p_content_12': "Kwon Nara is an actress and singer, former member of the girl group Hello Venus. She has successfully transitioned into acting, excelling in various dramas.",
            'p_content_13': "Lee Jung-jae is a veteran actor in South Korean film and television. He began his career as a model before making his acting debut in 1993. He has been acclaimed for his versatility and depth in acting.",
            'p_content_14': "Park Hae-soo is an actor known for his work in theater, film, and television. He gained recognition for his role in the drama 'Prison Playbook' and has continued to excel in the industry.",
            'p_content_15': "Wi Ha-joon is an actor and model who has gained popularity in recent years. He is known for his roles in suspense and mystery dramas.",
            'p_content_16': "Jung Ho-yeon is an international model who made her acting debut in 'Squid Game'. Her performance has been highly praised and she has gained numerous followers.",
            'p_content_17': "Gong Yoo is one of the most popular actors in South Korea. He gained fame with 'Coffee Prince' and has maintained his star status with roles in both film and television.",
            'p_content_18': "Kim Go-eun debuted in cinema before transitioning to television. She is known for her naturalness and versatility in acting.",
            'p_content_19': "Lee Dong-wook is an actor known for his versatility on screen, excelling in both comedic and dramatic roles. His role in 'Goblin' gained him international recognition.",
            'p_content_20': "Yoo In-na is an actress and radio DJ who has gained popularity for her roles in various romantic dramas. She is known for her on-screen chemistry and charming presence.",

            'p_meta_1': "Other Works",
            'p_meta_2': "Images"
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
            'support': 'Soporte',
            'language_option_en': 'Inglés',
            'language_option_es': 'Español',
            'p_content_1': "Kim Yeo-jin es una actriz veterana con una extensa carrera en teatro, cine y televisión. Es conocida por su capacidad para interpretar una amplia gama de personajes, desde heroínas hasta villanas.",
            'p_content_2': "Nacido como Kim Tae-pyung, Hyun Bin debutó en 2003 en la serie 'Bodyguard'. Alcanzó la fama con 'My Name is Kim Sam-soon' y 'Secret Garden'. Es conocido por su actuación carismática y su versatilidad en papeles tanto dramáticos como románticos.",
            'p_content_3': "Son Ye-jin es una actriz muy respetada en Corea del Sur, conocida por sus papeles en películas y dramas. Debutó en 2001 y rápidamente se convirtió en una de las actrices más populares por sus roles en dramas románticos y de época.",
            'p_content_4': "Kim Yeo-jin es una actriz veterana con una extensa carrera en teatro, cine y televisión. Es conocida por su capacidad para interpretar una amplia gama de personajes, desde heroínas hasta villanas.",
            'p_content_5': "Kim Jung-hyun comenzó su carrera en teatro antes de hacer la transición a la televisión. Ha ganado popularidad por sus papeles en 'School 2017' y 'Welcome to Waikiki'.",
            'p_content_6': "Song Joong-ki comenzó su carrera en el entretenimiento como presentador de programas de música y actor de cine. Saltó a la fama con su papel en el drama histórico 'Sungkyunkwan Scandal' y ha sido un actor destacado en dramas y películas.",
            'p_content_7': "Jeon Yeo-been es conocida por sus habilidades de actuación en cine y televisión. Ganó el reconocimiento por su actuación en 'After My Death', lo que le valió varios premios.",
            'p_content_8': "Miembro del grupo de K-pop 2PM, Ok Taec-yeon ha logrado una exitosa carrera en la actuación. Su versatilidad como actor le ha permitido desempeñar una variedad de roles en dramas y películas.",
            'p_content_9': "Park Seo-joon debutó en 2011 y ha sido uno de los actores más populares en Corea del Sur. Es conocido por su habilidad para interpretar papeles cómicos y románticos, además de su carisma en pantalla.",
            'p_content_10': "Kim Da-mi debutó en el cine y rápidamente se destacó por su actuación en 'The Witch: Part 1. The Subversion'. Su papel en 'Itaewon Class' consolidó su posición como una de las actrices jóvenes más prometedoras.",
            'p_content_11': "Yoo Jae-myung es conocido por sus papeles en dramas y películas. Ha ganado reconocimiento por su habilidad para interpretar personajes complejos y autoritarios.",
            'p_content_12': "Kwon Nara es una actriz y cantante, ex miembro del grupo de chicas Hello Venus. Ha transitado exitosamente hacia la actuación, destacándose en varios dramas.",
            'p_content_13': "Lee Jung-jae es un veterano actor de cine y televisión en Corea del Sur. Comenzó su carrera como modelo antes de hacer su debut actoral en 1993. Ha sido aclamado por su versatilidad y profundidad en la actuación.",
            'p_content_14': "Park Hae-soo es un actor conocido por su trabajo en teatro, cine y televisión. Ganó reconocimiento por su papel en el drama 'Prison Playbook' y ha continuado destacándose en la industria.",
            'p_content_15': "Wi Ha-joon es un actor y modelo que ha ganado popularidad en los últimos años. Es conocido por sus papeles en dramas de suspenso y misterio.",
            'p_content_16': "Jung Ho-yeon es una modelo internacional que hizo su debut como actriz en 'Squid Game'. Su actuación ha sido muy elogiada y ha ganado numerosos seguidores.",
            'p_content_17': "Gong Yoo es uno de los actores más populares de Corea del Sur. Ganó fama con 'Coffee Prince' y ha mantenido su estatus de estrella con sus roles en cine y televisión.",
            'p_content_18': "Kim Go-eun debutó en el cine antes de hacer la transición a la televisión. Es conocida por su naturalidad y versatilidad en la actuación.",
            'p_content_19': "Lee Dong-wook es un actor conocido por su versatilidad en la pantalla, destacándose en roles tanto cómicos como dramáticos. Su papel en 'Goblin' le otorgó un reconocimiento internacional.",
            'p_content_20': "Yoo In-na es una actriz y DJ de radio que ha ganado popularidad por sus roles en varios dramas románticos. Es conocida por su química en pantalla y su presencia encantadora.",

            'p_meta_1': "Otras Obras",
            'p_meta_2': "Imagenes"
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
    document.querySelector('#support-link').textContent = translations[language]['support'];

    for (let i = 1; i <= 20; i++) {
        document.querySelector(`.p_content_${i}`).textContent = translations[language][`p_content_${i}`];
    }

    document.querySelector('.p_meta_1').textContent = translations[language]['p_meta_1'];
    document.querySelector('.p_meta_2').textContent = translations[language]['p_meta_2'];    
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
