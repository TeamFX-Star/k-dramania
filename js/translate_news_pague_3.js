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
            'sign-in-button': 'Sign In',
            'sign-up-button': 'Sign Up',
            'dramas': 'Dramas',
            'news': 'News',
            'actors': 'Actors',
            'support': 'Support',
            'language-option-en': 'English',
            'language-option-es': 'Spanish',

        // Metadatos del post
        'post-meta-1': 'By Luz Gonzalez',
        'post-meta-2': '22 Jun, 2024 01:46 p.m. MX',
        'post-meta-3': 'Screenshot from the official trailer of "Hierarchy"',
        'post-meta-4': 'Screenshot from the official trailer of "Hierarchy"',
        'post-meta-5': 'King The Land (Netflix)',
        'post-meta-6': 'An atypical family',
        'post-meta-7': 'My Adorable Demon (available on Netflix)',

        // Títulos de los posts
        'post-title-1': 'Korean Dramas on Netflix: A Look at Some Productions like \'Hierarchy\' and \'King the Land\'',
        'post-title-2': 'Hierarchy (available on Netflix)',
        'post-title-3': 'King the Land (available on Netflix)',
        'post-title-4': 'An Atypical Family (available on Netflix)',
        'post-title-5': 'My Adorable Demon (available on Netflix)',

        // Contenidos de los posts
        'post-content-1': 'Recently, the platform premiered a new series featuring Roh Jeong-eui, Lee Chae-Min, and Kim Jae-Won as leads.',
        'post-content-2': 'In recent years, Netflix has dominated as the platform with the most Korean content. It’s no surprise that K-dramas have become the most popular and consumed audiovisuals around the world. There are many examples of this, such as My Adorable Demon (My Demon - 2023) starring Song Kang, The Glory, Love Alarm, Alchemy of Souls, and many more.',
        'post-content-3': 'Therefore, this time, we are going to select three Korean series available on Netflix that were recently released.',
        'post-content-4': 'We start with <b>Hierarchy,</b> a miniseries that debuted on <b>Netflix</b> on June 7 and quickly ranked among the most popular content. The plot follows <b>Kang Ha</b>, a student who receives a scholarship to attend the prestigious <b>Jooshin</b> High School. This institution is famous for its student body, composed of the children of the richest and most influential families in South Korea. Within this school, a small group of students dominates and dictates the rules for everyone else. However, <b>Kang Ha</b> harbors a secret that begins to destabilize this established order, creating tensions and conflicts that challenge the norms of the elite school. The series offers a critical look at power and social differences in the educational sphere.',
        'post-content-5': '<b>Hierarchy</b> was directed by <b>Bae Hyun-jin</b>, known for his work on <b>Big Mouth: Scam Artist</b>, and produced by <b>Studio Dragon</b>, the company behind hits like <b>Sweet Home</b> and <b>Wedding Impossible</b>. The series cast includes <b>Roh Jeong-eui</b> (<b>Our Beloved Summer, 18 Again</b>), <b>Lee Chae-Min</b> (<b>Love All Play, High Class</b>), <b>Kim Jae-Won</b> (<b>Our Blues, Fall For You</b>), <b>Ji Hye-won</b> (<b>The Sound of Magic</b>) and <b>Lee Won-jung</b> (<b>Extraordinary Attorney Woo</b>).',
        'post-content-6': '<b>King the Land</b>, starring <b>Lee Jun-ho</b> (<b>Just Between Lovers</b>) and <b>Im Yoon-ah</b> (<b>Confidential Assignment</b>), is a 16-episode K-drama on <b>Netflix</b> that has captured the public’s attention for its blend of romance and corporate drama. The series follows the intense struggle for control of a family business, where a charming heir faces numerous obstacles to secure his rightful position. Amid this battle for power, he encounters a famous employee for her irresistible smile, a trait he cannot stand. As their paths cross, situations filled with tension and humor arise, revealing deep aspects of their personalities and uncovering buried secrets.',
        'post-content-7': 'The plot delves into complex family dynamics, internal rivalries, and power struggles, exploring how personal and professional differences can create enormous chaos for the main characters. <b>King the Land</b> offers a humorous view of the world of large corporations, accompanied by enriching character development and touching moments, along with unexpected twists that keep viewers on edge.',
        'post-content-8': '<b>An Atypical Family</b>, starring <b>Cheon Woo-hee</b> (<b>The 8 Show</b>) and <b>Jang Ki-yong</b> (<b>Born Again</b>), is a series available on <b>Netflix</b> that combines fantastical elements with family dramas and romances. The story centers on the <b>Bok</b> family, whose members are born with special abilities. However, due to a series of mysterious events, they begin to lose these powers one by one. Everything changes when <b>Do Da-hae</b> enters the lives of the <b>Bok</b> family and seems to have a significant impact on them, leading them to believe that she might be the key to regaining their lost abilities.',
        'post-content-9': 'The series explores not only the supernatural challenges faced by the <b>Bok</b> family but also the complex family and personal dynamics of each member. With a focus on resilience and the search for identity in a constantly changing world, <b>An Atypical Family</b> invites viewers to reflect on human connection and the ability to adapt to modern challenges, including technological advancements and contemporary anxieties.',
        'post-content-10': '<b>My Adorable Demon</b>, starring <b>Song Kang</b> (<b>Navillera</b>) and <b>Kim Yoo-jung</b> (<b>Backstreet Rookie</b>), is a drama and fantasy series available on <b>Netflix</b>. Released on December 1, 2023, the story follows <b>Do Do-Hee</b>, a young heiress caught in a power struggle within her adoptive family, and <b>Jung Gu-Won</b>, a demon who loses his powers after meeting her. Their unexpected encounter leads to a series of events that challenge their destiny and the nature of their desires, creating a connection that could change their lives forever.',
        'post-content-11': 'The series explores themes of power, redemption, and love through a narrative that combines fantasy and romance elements. Gu-Won, who used to trade human souls, is affected by his relationship with Do-Hee, leading to dangerous situations and personal revelations. The chemistry between the protagonists and the dramatic twists make <b>My Adorable Demon</b> a captivating proposal for fans of the genre.',
        
            'sidebar-title-1': 'Latest',
            'sidebar-title-2': 'Recommended for You',
            'sidebar-title-3': 'You May Also Like',

            'sidebar-name-1': '6 New K-Dramas to Watch in June 2024',
            'sidebar-name-2': 'K-Dramas We Look Forward to in June 2024',
            'sidebar-name-3': 'All the Dramas Premiering in June 2024',
            'sidebar-name-4': 'Player 2: Master of Scammers',
            'sidebar-name-5': 'The Queen of Tears',
            'sidebar-name-6': 'My Sweet Mafioso',
            'sidebar-name-7': 'Miss Night and Day',
            'sidebar-name-8': 'Woo, an Extraordinary Lawyer',
            'sidebar-name-9': 'The Player 2: Master of Scammers',
            'sidebar-name-10': 'Hierarchy',
            'sidebar-name-11': 'My Sweet Mafioso'
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

        // Metadatos del post
        'post-meta-1': 'Por Luz Gonzalez',
        'post-meta-2': '22 Jun, 2024 01:46 p.m. MX',
        'post-meta-3': 'Captura del tráiler oficial de "Jerarquía"',
        'post-meta-4': 'Captura del tráiler oficial de "Jerarquía"',
        'post-meta-5': 'King The Land (Netflix)',
        'post-meta-6': 'Una familia atípica',
        'post-meta-7': 'Mi Adorable Demonio (disponible en Netflix)',

        // Títulos de los posts
        'post-title-1': 'Dramas coreanos en Netflix: un vistazo a algunas producciones como \'Jerarquía\' y \'King the Land\'',
        'post-title-2': 'Jerarquía (disponible en Netflix)',
        'post-title-3': 'King the Land (disponible en Netflix)',
        'post-title-4': 'Una Familia Atípica (disponible en Netflix)',
        'post-title-5': 'Mi Adorable Demonio (disponible en Netflix)',

        // Contenidos de los posts
        'post-content-1': 'Recientemente, la plataforma estrenó una nueva serie con Roh Jeong-eui, Lee Chae-Min y Kim Jae-Won como protagonistas.',
        'post-content-2': 'En los últimos años, Netflix ha dominado como la plataforma con mayor contenido coreano. No es de extrañar que los K-dramas se hayan convertido en los audiovisuales más populares y consumidos en todo el mundo. Hay muchos ejemplos de esto, como Mi Adorable Demonio (My Demon - 2023) protagonizado por Song Kang, The Glory, Love Alarm, Alchemy of Souls, y muchos más.',
        'post-content-3': 'Por lo tanto, esta vez vamos a seleccionar tres series coreanas disponibles en Netflix que se estrenaron recientemente.',
        'post-content-4': 'Empezamos con <b>Jerarquía</b>, una miniserie que debutó en <b>Netflix</b> el 7 de junio y rápidamente se posicionó entre los contenidos más populares. La trama sigue a <b>Kang Ha</b>, un estudiante que recibe una beca para asistir a la prestigiosa <b>Jooshin</b> High School. Esta institución es famosa por su alumnado, compuesto por los hijos de las familias más ricas e influyentes de Corea del Sur. Dentro de esta escuela, un pequeño grupo de estudiantes domina y dicta las reglas para todos los demás. Sin embargo, <b>Kang Ha</b> guarda un secreto que comienza a desestabilizar este orden establecido, creando tensiones y conflictos que desafían las normas de la escuela de élite. La serie ofrece una mirada crítica al poder y las diferencias sociales en el ámbito educativo.',
        'post-content-5': '<b>Jerarquía</b> fue dirigida por <b>Bae Hyun-jin</b>, conocido por su trabajo en <b>Big Mouth: Scam Artist</b>, y producida por <b>Studio Dragon</b>, la compañía detrás de éxitos como <b>Sweet Home</b> y <b>Wedding Impossible</b>. El elenco de la serie incluye a <b>Roh Jeong-eui</b> (<b>Our Beloved Summer, 18 Again</b>), <b>Lee Chae-Min</b> (<b>Love All Play, High Class</b>), <b>Kim Jae-Won</b> (<b>Our Blues, Fall For You</b>), <b>Ji Hye-won</b> (<b>The Sound of Magic</b>) y <b>Lee Won-jung</b> (<b>Extraordinary Attorney Woo</b>).',
        'post-content-6': '<b>King the Land</b>, protagonizado por <b>Lee Jun-ho</b> (<b>Just Between Lovers</b>) e <b>Im Yoon-ah</b> (<b>Confidential Assignment</b>), es un K-drama de 16 episodios en <b>Netflix</b> que ha captado la atención del público por su mezcla de romance y drama corporativo. La serie sigue la intensa lucha por el control de un negocio familiar, donde un encantador heredero enfrenta numerosos obstáculos para asegurar su posición legítima. En medio de esta batalla por el poder, se encuentra con una empleada famosa por su irresistible sonrisa, una característica que él no soporta. A medida que sus caminos se cruzan, surgen situaciones llenas de tensión y humor, revelando aspectos profundos de sus personalidades y desenterrando secretos enterrados.',
        'post-content-7': 'La trama profundiza en las complejas dinámicas familiares, rivalidades internas y luchas por el poder, explorando cómo las diferencias personales y profesionales pueden crear un caos enorme para los personajes principales. <b>King the Land</b> ofrece una visión humorística del mundo de las grandes corporaciones, acompañado de un desarrollo enriquecedor de personajes y momentos conmovedores, junto con giros inesperados que mantienen a los espectadores en vilo.',
        'post-content-8': '<b>Una Familia Atípica</b>, protagonizada por <b>Cheon Woo-hee</b> (<b>The 8 Show</b>) y <b>Jang Ki-yong</b> (<b>Born Again</b>), es una serie disponible en <b>Netflix</b> que combina elementos fantásticos con dramas familiares y romances. La historia se centra en la familia <b>Bok</b>, cuyos miembros nacen con habilidades especiales. Sin embargo, debido a una serie de eventos misteriosos, comienzan a perder estos poderes uno por uno. Todo cambia cuando <b>Do Da-hae</b> entra en la vida de la familia <b>Bok</b> y parece tener un impacto significativo en ellos, llevándolos a creer que ella podría ser la clave para recuperar sus habilidades perdidas.',
        'post-content-9': 'La serie explora no solo los desafíos sobrenaturales enfrentados por la familia <b>Bok</b>, sino también las complejas dinámicas familiares y personales de cada miembro. Con un enfoque en la resiliencia y la búsqueda de identidad en un mundo en constante cambio, <b>Una Familia Atípica</b> invita a los espectadores a reflexionar sobre la conexión humana y la capacidad de adaptación a los desafíos modernos, incluyendo los avances tecnológicos y las ansiedades contemporáneas.',
        'post-content-10': '<b>Mi Adorable Demonio</b>, protagonizada por <b>Song Kang</b> (<b>Navillera</b>) y <b>Kim Yoo-jung</b> (<b>Backstreet Rookie</b>), es una serie de drama y fantasía disponible en <b>Netflix</b>. Lanzada el 1 de diciembre de 2023, la historia sigue a <b>Do Do-Hee</b>, una joven heredera atrapada en una lucha de poder dentro de su familia adoptiva, y <b>Jung Gu-Won</b>, un demonio que pierde sus poderes después de conocerla. Su encuentro inesperado lleva a una serie de eventos que desafían su destino y la naturaleza de sus deseos, creando una conexión que podría cambiar sus vidas para siempre.',
        'post-content-11': 'La serie explora temas de poder, redención y amor a través de una narrativa que combina elementos de fantasía y romance. Gu-Won, que solía comerciar con almas humanas, se ve afectado por su relación con Do-Hee, lo que lleva a situaciones peligrosas y revelaciones personales. La química entre los protagonistas y los giros dramáticos hacen de <b>Mi Adorable Demonio</b> una propuesta cautivadora para los fanáticos del género.',


            'sidebar-title-1': 'Lo Último',
            'sidebar-title-2': 'Te Recomendamos',
            'sidebar-title-3': 'Te puede interesar:',

            'sidebar-name-1': '6 nuevos K-Dramas para ver en junio de 2024',
            'sidebar-name-2': 'K-Dramas que esperamos en junio de 2024',
            'sidebar-name-3': 'Todos los doramas que se estrenan en junio de 2024',
            'sidebar-name-4': 'El Jugador 2: Maestro de los estafadores',
            'sidebar-name-5': 'La reina de las lágrimas',
            'sidebar-name-6': 'Mi dulce mafioso',
            'sidebar-name-7': 'Señorita noche y día',
            'sidebar-name-8': 'Woo, una abogada extraordinaria',
            'sidebar-name-9': 'The Player 2: Maestro de los estafadores',
            'sidebar-name-10': 'Jerarquía',
            'sidebar-name-11': 'Mi dulce mafioso'
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

    // Actualizar títulos de publicaciones
        document.querySelector('.post-meta-1').textContent = translations[language]['post-meta-1'];
        document.querySelector('.post-meta-2').textContent = translations[language]['post-meta-2'];
        document.querySelector('.post-meta-3').textContent = translations[language]['post-meta-3'];
        document.querySelector('.post-meta-4').textContent = translations[language]['post-meta-4'];
        document.querySelector('.post-meta-5').textContent = translations[language]['post-meta-5'];
        document.querySelector('.post-meta-6').textContent = translations[language]['post-meta-6'];
        document.querySelector('.post-meta-7').textContent = translations[language]['post-meta-7'];

        document.querySelector('.post-title-1').textContent = translations[language]['post-title-1'];
        document.querySelector('.post-title-2').textContent = translations[language]['post-title-2'];
        document.querySelector('.post-title-3').textContent = translations[language]['post-title-3'];
        document.querySelector('.post-title-4').textContent = translations[language]['post-title-4'];
        document.querySelector('.post-title-5').textContent = translations[language]['post-title-5'];

        document.querySelector('.post-content-1').innerHTML = translations[language]['post-content-1'];
        document.querySelector('.post-content-2').innerHTML = translations[language]['post-content-2'];
        document.querySelector('.post-content-3').innerHTML = translations[language]['post-content-3'];
        document.querySelector('.post-content-4').innerHTML = translations[language]['post-content-4'];
        document.querySelector('.post-content-5').innerHTML = translations[language]['post-content-5'];
        document.querySelector('.post-content-6').innerHTML = translations[language]['post-content-6'];
        document.querySelector('.post-content-7').innerHTML = translations[language]['post-content-7'];
        document.querySelector('.post-content-8').innerHTML = translations[language]['post-content-8'];
        document.querySelector('.post-content-9').innerHTML = translations[language]['post-content-9'];
        document.querySelector('.post-content-10').innerHTML = translations[language]['post-content-10'];
        document.querySelector('.post-content-11').innerHTML = translations[language]['post-content-11'];

    
    

    // Actualizar títulos y nombres de la barra lateral
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
