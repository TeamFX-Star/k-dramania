document.addEventListener('DOMContentLoaded', function () {
    const dramas = document.querySelectorAll('.drama');
    const modal = document.querySelector('.modal');
    const modalContent = modal.querySelector('.modal-content');
    let kdramas; // Variable para almacenar los kdramas según el idioma seleccionado

    // Función para obtener la primera letra del username
    function getUsernameInitial() {
        const username = localStorage.getItem('username');
        if (username) {
            return username.charAt(0).toUpperCase(); // Obtener y capitalizar la primera letra
        }
        return '';
    }

    // Función para guardar comentarios en localStorage
    function saveComments() {
        localStorage.setItem('kdramas', JSON.stringify(kdramas));
    }

    // Función para cargar kdramas según el idioma almacenado en preferredLanguage
    function loadKdramas() {
        const language = localStorage.getItem('preferredLanguage') || 'en'; // Obtener el idioma preferido, por defecto inglés ('en')
        if (language === 'es') {
            return kdramasEs;
        } else {
            return kdramasEn;
        }
    }

    // Función para verificar si el usuario ya dio like a un comentario
    function userLikedComment(commentIndex) {
        const likedComments = JSON.parse(localStorage.getItem('likedComments')) || {};
        const username = localStorage.getItem('username');
        return likedComments[username] && likedComments[username].includes(commentIndex.toString());
    }

    // Función para marcar un comentario como liked por el usuario actual
    function setUserLikedComment(commentIndex) {
        const likedComments = JSON.parse(localStorage.getItem('likedComments')) || {};
        const username = localStorage.getItem('username');
        if (!likedComments[username]) {
            likedComments[username] = [];
        }
        likedComments[username].push(commentIndex.toString());
        localStorage.setItem('likedComments', JSON.stringify(likedComments));
    }

    // Función para abrir el modal y mostrar los detalles del drama seleccionado
    function openModal(drama) {
        const language = localStorage.getItem('preferredLanguage') || 'en'; // Obtener el idioma preferido, por defecto inglés ('en')
        const ratingJustWatchLabel = language === 'es' ? 'Calificación en JustWatch:' : 'JustWatch Rating:';
        const ratingIMDbLabel = language === 'es' ? 'Calificación en IMDb:' : 'IMDb Rating:';
        const genresLabel = language === 'es' ? 'Géneros:' : 'Genres:';
        const synopsisLabel = language === 'es' ? 'Sinopsis:' : 'Synopsis:';
        const commentsLabel = language === 'es' ? 'Comentarios' : 'Comments';
        const repartsLabel = language === 'es' ? 'Reparto' : 'Cast';
        const noCommentsText = language === 'es' ? 'Aún no hay comentarios. Añade uno para iniciar la conversación.' : 'No comments yet. Add one to start the conversation.';
        const noLoginText = language === 'es' ? 'Para comentar, por favor <a href="login.html">inicia sesión</a> o <a href="/signup">crea una cuenta</a>.' : 'To comment, please <a href="login.html">login</a> or <a href="/signup">create an account</a>.';
        const addComment = language === 'es' ? 'Añade un comentario' : 'Add a comment';
        const addCommentButton = language === 'es' ? 'Añadir Comentario' : 'Add Comment';

        // Construir el contenido del modal con los datos del drama seleccionado
        const modalHTML = `
            <div class="modal-header">
                <h2>${drama.title}</h2>
                <span class="close">&times;</span>
            </div>
            <div class="modal-body">
                <div class="modal-video">
                    <iframe src="https://www.youtube.com/embed/${drama.videoId}" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="modal-info">
                    <p><strong>${ratingJustWatchLabel}</strong> ${drama.justwatchRating}</p>
                    <p><strong>${ratingIMDbLabel}</strong> ${drama.imdbRating}</p>
                    <p><strong>${genresLabel}</strong> ${drama.genres}</p>
                    <p><strong>${synopsisLabel}</strong> ${drama.synopsis}</p>
                    <p><strong>${repartsLabel}</strong></p>
                    <ul>
                        ${drama.cast.map(actor => `<li>${actor}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="modal-comments">
                <h3>${commentsLabel}</h3>
                ${localStorage.getItem('username') ? `
                <div class="comments-list">
                    ${drama.comments.length > 0 ? drama.comments.map((comment, commentIndex) => `
                        <div class="comment">
                            <div class="comment-header">
                                <div class="username-initial">
                                    <p>${getUsernameInitial()}</p>
                                </div>
                                <p class="comment-username">${localStorage.getItem('username')}</p>
                            </div>
                            <p class="comment-text">${comment.text}</p>
                            <button class="like-btn" data-comment-index="${commentIndex}" ${userLikedComment(commentIndex) ? 'disabled' : ''}>
                                <i class="material-icons">thumb_up</i>
                                <span>${comment.likes}</span>
                            </button>
                        </div>
                    `).join('') : `<p>${noCommentsText}</p>`}
                </div>
                <div class="comment-input">
                    <div class="username-initial">
                        <p>${getUsernameInitial()}</p>
                    </div>
                    <textarea id="new-comment" placeholder="${addComment}"></textarea>
                    <button id="add-comment" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"><i class="fas fa-paper-plane"></i></button>
                </div>
                ` : `
                <div class="comments-login">
                    <p>${noLoginText}</p>
                </div>
                `}
            </div>
        `;

        modalContent.innerHTML = modalHTML;
        modal.style.display = 'block';

        // Añadir eventos al botón de añadir comentario y a los botones de like
        if (localStorage.getItem('username')) {
            document.getElementById('add-comment').addEventListener('click', function() {
                const newCommentText = document.getElementById('new-comment').value;
                if (newCommentText) {
                    const newComment = {
                        text: newCommentText,
                        likes: 0
                    };
                    drama.comments.push(newComment);
                    saveComments(); // Guardar comentarios en localStorage
                    openModal(drama); // Recargar el modal para mostrar el nuevo comentario
                }
            });

            // Añadir evento para dar like a un comentario
            modalContent.querySelectorAll('.like-btn').forEach((btn) => {
                btn.addEventListener('click', function() {
                    const commentIndex = btn.getAttribute('data-comment-index');
                    drama.comments[commentIndex].likes++;
                    setUserLikedComment(commentIndex); // Marcar comentario como liked por el usuario actual
                    saveComments(); // Guardar comentarios en localStorage
                    openModal(drama); // Actualizar el modal con el nuevo recuento de likes
                });
            });
        }

        // Cerrar el modal al hacer clic en la X
        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Cerrar el modal al hacer clic fuera del contenido del modal
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Definir kdramas en inglés y español
    const kdramasEn = [
        {
            "title": "Crash Landing on You",
            "justwatchRating": "91%",
            "imdbRating": "8.7",
            "genres": "Romance, Comedy, Drama, Action",
            "synopsis": "A South Korean woman accidentally paraglides into North Korea and falls in love with a North Korean officer.",
            "cast": [
                "Hyun Bin as Ri Jeong-hyeok",
                "Son Ye-jin as Yoon Se-ri",
                "Seo Ji-hye as Seo Dan",
                "Kim Jung-hyun as Gu Seung-joon"
            ],
            "videoId": "eXMjTXL2Vks",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Vincenzo",
            "justwatchRating": "88%",
            "imdbRating": "8.5",
            "genres": "Drama, Comedy, Crime",
            "synopsis": "Vincenzo Cassano, a lawyer and consigliere of the Italian mafia, returns to South Korea and faces a corrupt conglomerate.",
            "cast": [
                "Song Joong-ki as Vincenzo Cassano",
                "Jeon Yeo-been as Hong Cha-young",
                "Ok Taec-yeon as Jang Jun-woo",
                "Kim Yeo-jin as Choi Myung-hee"
            ],
            "videoId": "8VbWG0dNw8Y",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        }
    ];

    const kdramasEs = [
        {
            "title": "Crash Landing on You",
            "justwatchRating": "91%",
            "imdbRating": "8.7",
            "genres": "Romance, Comedia, Drama, Acción",
            "synopsis": "Una mujer surcoreana parapentea accidentalmente a Corea del Norte y se enamora de un oficial norcoreano.",
            "cast": [
                "Hyun Bin como Ri Jeong-hyeok",
                "Son Ye-jin como Yoon Se-ri",
                "Seo Ji-hye como Seo Dan",
                "Kim Jung-hyun como Gu Seung-joon"
            ],
            "videoId": "eXMjTXL2Vks",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Vincenzo",
            "justwatchRating": "88%",
            "imdbRating": "8.5",
            "genres": "Drama, Comedia, Crimen",
            "synopsis": "Vincenzo Cassano, abogado y consejero de la mafia italiana, regresa a Corea del Sur y se enfrenta a un conglomerado corrupto.",
            "cast": [
                "Song Joong-ki como Vincenzo Cassano",
                "Jeon Yeo-been como Hong Cha-young",
                "Ok Taec-yeon como Jang Jun-woo",
                "Kim Yeo-jin como Choi Myung-hee"
            ],
            "videoId": "8VbWG0dNw8Y",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        }
    ];

    // Evento para abrir el modal al hacer clic en un drama
    dramas.forEach((dramaElement, index) => {
        dramaElement.addEventListener('click', function () {
            const selectedDrama = loadKdramas()[index];
            openModal(selectedDrama);
        });
    });

});
