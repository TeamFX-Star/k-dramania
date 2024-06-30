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
            'reviews': 'Reviews',
            'language-option-en': 'English',
            'language-option-es': 'Spanish',

            'post-title-1': 'Ranking of K-dramas: Hierarchy and other series to watch this weekend',
            'post-title-2': 'Essential K-dramas guide: 10 titles for a weekend with John Park, Lee Chae-min, among others',
            'post-title-3': 'Korean dramas on Netflix: a look at some productions like "Hierarchy" and "King the Land"',

            'post-content-1': 'South Korean productions have become favorites among viewers around the world.',
            'post-content-2': 'The streaming platform has significantly increased its catalog in recent years to satisfy its users.',
            'post-content-3': 'Recently, the platform premiered a new series starring Roh Jeong-eui, Lee Chae-Min, and Kim Jae-Won.'
            },
        'es': {
            'home': 'Inicio',
            'sign-in-button': 'Iniciar Sesión',
            'sign-up-button': 'Registrarse',
            'dramas': 'Dramas',
            'news': 'Noticias',
            'actors': 'Actores',
            'reviews': 'Opiniones',
            'language-option-en': 'Inglés',
            'language-option-es': 'Español',

            'post-title-1': 'Ranking de K-dramas: Jerarquía y otras series para ver este fin de semana',
            'post-title-2': 'Guía esencial de K-dramas: 10 títulos para un fin de semana junto a John Park, Lee Chae-min, entre otros',
            'post-title-3': 'Dramas coreanos en Netflix: un vistazo a algunas producciones como "Jerarquía" y "King the Land"',
            
            'post-content-1': 'Las producciones surcoreanas se han posicionado como las favoritas de los espectadores de todo el mundo.',
            'post-content-2': 'La plataforma de streaming ha incrementado significativamente su catálogo en los últimos años para satisfacer a sus usuarios.',
            'post-content-3': 'Recientemente, la plataforma estrenó una nueva serie con Roh Jeong-eui, Lee Chae-Min y Kim Jae-Won como protagonistas.'

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
    document.querySelector('#reviews-link').textContent = translations[language]['reviews'];

    document.querySelector('.post-title-1').textContent = translations[language]['post-title-1'];
    document.querySelector('.post-title-2').textContent = translations[language]['post-title-2'];
    document.querySelector('.post-title-3').textContent = translations[language]['post-title-3'];

    document.querySelector('.post-content-1').textContent = translations[language]['post-content-1'];
    document.querySelector('.post-content-2').textContent = translations[language]['post-content-2'];
    document.querySelector('.post-content-3').textContent = translations[language]['post-content-3'];

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
