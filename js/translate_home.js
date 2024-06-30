function setLanguage() {
    // Obtener el elemento select de idioma por su ID
    const langSelect = document.getElementById('lang-select');
    // Obtener el valor seleccionado del idioma
    const language = langSelect.value;
    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem('preferredLanguage', language);

    // Objeto con traducciones para diferentes idiomas
    const translations = {
        'en': {
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
            'drama1': 'A South Korean woman accidentally paraglides into North Korea and falls in love with a North Korean officer.',
            'drama2': 'A Korean-Italian lawyer and consigliere for the mafia returns to Korea and becomes involved in a legal battle.',
            'drama3': 'A young man opens a restaurant in Itaewon and seeks revenge against a powerful family.',
            'drama4': 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits — with deadly high stakes.',
            'drama5': 'Short description of the new K-Drama.',
            'drama6': 'Short description of the new K-Drama.',
            'drama7': 'Short description of the new K-Drama.',
            'drama8': 'Short description of the new K-Drama.',
            'language_option_en': 'English',
            'language_option_es': 'Spanish'
        },
        'es': {
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
            'drama1': 'Una mujer surcoreana se lanza accidentalmente en parapente hacia Corea del Norte y se enamora de un oficial norcoreano.',
            'drama2': 'Un abogado italo-coreano y consejero de la mafia regresa a Corea y se involucra en una batalla legal.',
            'drama3': 'Un joven abre un restaurante en Itaewon y busca venganza contra una familia poderosa.',
            'drama4': 'Cientos de jugadores con problemas económicos aceptan una extraña invitación para competir en juegos infantiles. Adentro, un tentador premio los espera, con altas apuestas mortales.',
            'drama5': 'Breve descripción del nuevo K-Drama.',
            'drama6': 'Breve descripción del nuevo K-Drama.',
            'drama7': 'Breve descripción del nuevo K-Drama.',
            'drama8': 'Breve descripción del nuevo K-Drama.',
            'language_option_en': 'Inglés',
            'language_option_es': 'Español'
        }
        // Agregar más traducciones según sea necesario
    };

    // Actualizar elementos del DOM basado en el idioma seleccionado
    document.querySelector('.logo').textContent = 'K-Dramania';
    document.querySelector('.language-selector option[value="en"]').textContent = translations[language]['language_option_en'];
    document.querySelector('.language-selector option[value="es"]').textContent = translations[language]['language_option_es'];
    document.querySelector('.discover h1').textContent = translations[language]['discover_title'];
    document.querySelector('.discover p').textContent = translations[language]['discover_text'];
    document.querySelector('.actions .browse').textContent = translations[language]['browse_button'];
    document.querySelector('.actions .search').textContent = translations[language]['search_button'];
    
    const signInElement = document.querySelector('.sign-in');
    const signUpElement = document.querySelector('.sign-up');

    if (signInElement) {
        signInElement.textContent = translations[language]['sign_in_button'];
    }
    
    if (signUpElement) {
        signUpElement.textContent = translations[language]['sign_up_button'];
    }
    
    document.querySelector('#dramas-link').textContent = translations[language]['dramas'];
    document.querySelector('#news-link').textContent = translations[language]['news'];
    document.querySelector('#actors-link').textContent = translations[language]['actors'];
    document.querySelector('#reviews-link').textContent = translations[language]['reviews'];
    document.querySelector('#drama1-description').textContent = translations[language]['drama1'];
    document.querySelector('#drama2-description').textContent = translations[language]['drama2'];
    document.querySelector('#drama3-description').textContent = translations[language]['drama3'];
    document.querySelector('#drama4-description').textContent = translations[language]['drama4'];
    document.querySelector('#drama5-description').textContent = translations[language]['drama5'];
    document.querySelector('#drama6-description').textContent = translations[language]['drama6'];
    document.querySelector('#drama7-description').textContent = translations[language]['drama7'];
    document.querySelector('#drama8-description').textContent = translations[language]['drama8'];
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
