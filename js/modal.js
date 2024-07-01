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
            "videoId": "WO0xoDyGrdc",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Itaewon Class",
            "justwatchRating": "90%",
            "imdbRating": "8.2",
            "genres": "Drama",
            "synopsis": "An ex-convict and his friends fight to fulfill their dream of opening a bar in the Itaewon district.",
            "cast": [
                "Park Seo-joon as Park Sae-ro-yi",
                "Kim Da-mi as Jo Yi-seo",
                "Yoo Jae-myung as Jang Dae-hee",
                "Kwon Nara as Oh Soo-ah"
            ],
            "videoId": "NNP8m3gaaFE",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Squid Game",
            "justwatchRating": "96%",
            "imdbRating": "8.0",
            "genres": "Thriller, Drama",
            "synopsis": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games with deadly consequences.",
            "cast": [
                "Lee Jung-jae as Seong Gi-hun",
                "Park Hae-soo as Cho Sang-woo",
                "Wi Ha-joon as Hwang Jun-ho",
                "Jung Ho-yeon as Kang Sae-byeok"
            ],
            "videoId": "oqxAJKy0ii4",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Goblin",
            "justwatchRating": "94%",
            "imdbRating": "8.6",
            "genres": "Romance, Fantasy, Drama",
            "synopsis": "An immortal being seeks a human bride to end his eternal life.",
            "cast": [
                "Gong Yoo as Kim Shin",
                "Kim Go-eun as Ji Eun-tak",
                "Lee Dong-wook as Grim Reaper",
                "Yoo In-na as Sunny"
            ],
            "videoId": "8AcNEVUzV4o",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "My Love from the Star",
            "justwatchRating": "93%",
            "imdbRating": "8.2",
            "genres": "Romance, Comedy, Fantasy",
            "synopsis": "An alien who has been on Earth for 400 years falls in love with a famous actress.",
            "cast": [
                "Kim Soo-hyun as Do Min-joon",
                "Jun Ji-hyun as Cheon Song-yi",
                "Park Hae-jin as Lee Hwi-kyung",
                "Yoo In-na as Yoo Se-mi"
            ],
            "videoId": "57Yc6Z2OiC4",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Descendants of the Sun",
            "justwatchRating": "94%",
            "imdbRating": "8.3",
            "genres": "Romance, Drama, Action",
            "synopsis": "An elite soldier and a doctor fall in love while facing dangerous situations in a war zone.",
            "cast": [
                "Song Joong-ki as Yoo Si-jin",
                "Song Hye-kyo as Kang Mo-yeon",
                "Jin Goo as Seo Dae-young",
                "Kim Ji-won as Yoon Myung-ju"
            ],
            "videoId": "wkHjOTFv60g",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "The Heirs",
            "justwatchRating": "92%",
            "imdbRating": "7.5",
            "genres": "Romance, Drama",
            "synopsis": "A group of elite high school students navigate life and love while facing family and power struggles.",
            "cast": [
                "Lee Min-ho as Kim Tan",
                "Park Shin-hye as Cha Eun-sang",
                "Kim Woo-bin as Choi Young-do",
                "Kim Ji-won as Rachel Yoo"
            ],
            "videoId": "Y0WSF5ikpvU",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Strong Woman Do Bong-soon",
            "justwatchRating": "91%",
            "imdbRating": "8.2",
            "genres": "Comedy, Romance, Fantasy",
            "synopsis": "A woman with superhuman strength works as a bodyguard for a video game company CEO.",
            "cast": [
                "Park Bo-young as Do Bong-soon",
                "Park Hyung-sik as Ahn Min-hyuk",
                "Ji Soo as In Guk-doo",
                "Seol In-ah as Jo Hee-ji"
            ],
            "videoId": "qR3H-QrnKoY",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Hotel Del Luna",
            "justwatchRating": "94%",
            "imdbRating": "8.2",
            "genres": "Fantasy, Drama, Romance",
            "synopsis": "A man starts working at a hotel for ghosts run by a woman trapped between the living and the dead.",
            "cast": [
                "IU as Jang Man-wol",
                "Yeo Jin-goo as Goo Chan-sung",
                "Shin Jung-geun as Kim Seon-bi",
                "Bae Hae-sun as Choi Seo-hee"
            ],
            "videoId": "zMWpcJ_n3_o",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "While You Were Sleeping",
            "justwatchRating": "92%",
            "imdbRating": "8.4",
            "genres": "Drama, Romance, Fantasy",
            "synopsis": "A woman can see future accidents in her dreams, and along with a prosecutor and a policeman, tries to prevent them from happening.",
            "cast": [
                "Lee Jong-suk as Jung Jae-chan",
                "Bae Suzy as Nam Hong-joo",
                "Lee Sang-yeob as Lee Yoo-beom",
                "Jung Hae-in as Han Woo-tak"
            ],
            "videoId": "8_rEZV3n3mk",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Pinocchio",
            "justwatchRating": "91%",
            "imdbRating": "8.1",
            "genres": "Drama, Romance",
            "synopsis": "A young man whose life was destroyed by the media becomes a reporter to uncover the truth behind his family's tragedy.",
            "cast": [
                "Lee Jong-suk as Choi Dal-po",
                "Park Shin-hye as Choi In-ha",
                "Kim Young-kwang as Seo Bum-jo",
                "Lee Yu-bi as Yoon Yoo-rae"
            ],
            "videoId": "itaLosPDLZE",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "W: Two Worlds",
            "justwatchRating": "90%",
            "imdbRating": "8.1",
            "genres": "Drama, Romance, Fantasy",
            "synopsis": "A surgeon is transported into a comic book world where she meets the story's hero and they must fight to survive.",
            "cast": [
                "Lee Jong-suk as Kang Chul",
                "Han Hyo-joo as Oh Yeon-joo",
                "Jung Yoo-jin as Yoon So-hee",
                "Lee Tae-hwan as Seo Do-yoon"
            ],
            "videoId": "h_Nf1vTOy2s",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "It's Okay to Not Be Okay",
            "justwatchRating": "96%",
            "imdbRating": "8.7",
            "genres": "Romance, Drama",
            "synopsis": "A mental health worker and a writer with antisocial personality disorder help each other heal their emotional wounds.",
            "cast": [
                "Kim Soo-hyun as Moon Gang-tae",
                "Seo Ye-ji as Ko Moon-young",
                "Oh Jung-se as Moon Sang-tae",
                "Park Gyu-young as Nam Joo-ri"
            ],
            "videoId": "1H__LNPCc80",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Weightlifting Fairy Kim Bok-joo",
            "justwatchRating": "81%",
            "imdbRating": "8.3",
            "genres": "Comedy, Drama, Romance",
            "synopsis": "A talented weightlifter crosses paths with a childhood friend, a promising swimmer, and they discover feelings while navigating their dreams and challenges at a sports university.",
            "cast": [
                "Lee Sung-kyung as Kim Bok-joo",
                "Nam Joo-hyuk as Jung Joon-hyung",
                "Kyung Soo-jin as Song Shi-ho",
                "Lee Jae-yoon as Jung Jae-yi"
            ],
            "videoId": "6t5dLenA85Y",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Healer",
            "justwatchRating": "88%",
            "imdbRating": "8.5",
            "genres": "Action, Thriller, Romance",
            "synopsis": "A nighttime courier with special skills becomes involved in a conspiracy while trying to uncover the truth about his own past.",
            "cast": [
                "Ji Chang-wook as Seo Jung-hoo",
                "Park Min-young as Chae Young-shin",
                "Yoo Ji-tae as Kim Moon-ho"
            ],
            "videoId": "AnjmzZFssmg",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Doctor Stranger",
            "justwatchRating": "80%",
            "imdbRating": "7.3",
            "genres": "Drama, Medical, Romance",
            "synopsis": "A talented surgeon who escaped from North Korea struggles to find his place in the competitive medical world of South Korea while searching for his lost love.",
            "cast": [
                "Lee Jong-suk as Park Hoon",
                "Jin Se-yeon as Song Jae-hee",
                "Park Hae-jin as Han Jae-joon"
            ],
            "videoId": "_S2IMBFHS-A",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "What's Wrong with Secretary Kim",
            "justwatchRating": "89%",
            "imdbRating": "8.1",
            "genres": "Comedy, Romance",
            "synopsis": "A narcissistic vice president faces a crisis when his secretary announces she's quitting, triggering a series of comedic and romantic events.",
            "cast": [
                "Park Seo-joon as Lee Young-joon",
                "Park Min-young as Kim Mi-so",
                "Lee Tae-hwan as Lee Sung-yeon"
            ],
            "videoId": "EDGfWN36q5o",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Love in the Moonlight",
            "justwatchRating": "83%",
            "imdbRating": "7.8",
            "genres": "Drama, Romance, Historical",
            "synopsis": "A young woman posing as a eunuch in the royal palace finds herself in the midst of a complicated romance with the crown prince.",
            "cast": [
                "Park Bo-gum as Lee Yeong",
                "Kim Yoo-jung as Hong Ra-on",
                "Jin Young as Kim Yoon-sung"
            ],
            "videoId": "-Yfv8T3rChs",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Moon Lovers: Scarlet Heart Ryeo",
            "justwatchRating": "85%",
            "imdbRating": "8.5",
            "genres": "Drama, Historical, Romance",
            "synopsis": "A modern-day woman is transported to the past during the Goryeo dynasty, where she becomes entangled in politics and romance among the royal princes.",
            "cast": [
                "Lee Joon-gi as Wang So",
                "IU as Hae Soo",
                "Kang Ha-neul as Wang Wook"
            ],
            "videoId": "o7mYYXToqmw",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Legend of the Blue Sea",
            "justwatchRating": "87%",
            "imdbRating": "8.1",
            "genres": "Fantasy, Romance, Drama",
            "synopsis": "A modern-day mermaid navigates the human world in search of her lost love, encountering a skilled con artist along the way.",
            "cast": [
                "Jun Ji-hyun as Shim Cheong",
                "Lee Min-ho as Heo Joon-jae",
                "Lee Hee-joon as Jo Nam-doo"
            ],
            "videoId": "G_jt3EwBMwU",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "City Hunter",
            "justwatchRating": "84%",
            "imdbRating": "8.2",
            "genres": "Action, Crime, Drama",
            "synopsis": "A young man trains to avenge his father's death and becomes a vigilante known as 'City Hunter,' while battling government corruption.",
            "cast": [
                "Lee Min-ho as Lee Yoon-sung",
                "Park Min-young as Kim Na-na",
                "Lee Joon-hyuk as Kim Young-joo"
            ],
            "videoId": "G20m5NTAVAE",
            "comments": []
        },
        {
            "title": "Suspicious Partner",
            "justwatchRating": "83%",
            "imdbRating": "7.8",
            "genres": "Romance, Comedy, Thriller",
            "synopsis": "A trainee lawyer teams up with a prosecutor to solve a murder case, putting them in the path of danger and love.",
            "cast": [
                "Ji Chang-wook as Noh Ji-wook",
                "Nam Ji-hyun as Eun Bong-hee",
                "Choi Tae-joon as Ji Eun-hyuk"
            ],
            "videoId": "4HCRa8PPKGw",
            "comments": []
        },
        {
            "title": "The King: Eternal Monarch",
            "justwatchRating": "84%",
            "imdbRating": "8.1",
            "genres": "Fantasy, Romance, Drama",
            "synopsis": "A Korean emperor crosses into a modern parallel dimension to stop a betrayal and protect the woman he loves.",
            "cast": [
                "Lee Min-ho as Lee Gon",
                "Kim Go-eun as Jung Tae-eul",
                "Woo Do-hwan as Jo Yeong"
            ],
            "videoId": "jJwuFjmfjRY",
            "comments": []
        },
        {
            "title": "Hwarang",
            "justwatchRating": "78%",
            "imdbRating": "8.0",
            "genres": "Drama, Historical, Romance",
            "synopsis": "A group of elite young warriors bands together to protect the Silla Kingdom and face political and romantic challenges.",
            "cast": [
                "Park Seo-joon as Moo-myung",
                "Go Ara as Kim Ah-ro",
                "Park Hyung-sik as Sam Maek-jong"
            ],
            "videoId": "ZjWdkkcmrio",
            "comments": []
        },
        {
            "title": "Start-Up",
            "justwatchRating": "80%",
            "imdbRating": "8.1",
            "genres": "Drama, Romance",
            "synopsis": "Young entrepreneurs strive for success in South Korea's competitive startup world while navigating love and ambition.",
            "cast": [
                "Bae Suzy as Seo Dal-mi",
                "Nam Joo-hyuk as Nam Do-san",
                "Kim Seon-ho as Han Ji-pyeong"
            ],
            "videoId": "BemKyzbLDDc",
            "comments": []
        },
        {
            "title": "Her Private Life",
            "justwatchRating": "82%",
            "imdbRating": "7.7",
            "genres": "Comedy, Romance",
            "synopsis": "A professional art curator hides her life as an obsessive K-pop idol fan until her boss discovers her secret.",
            "cast": [
                "Park Min-young as Sung Deok-mi",
                "Kim Jae-wook as Ryan Gold",
                "Ahn Bo-hyun as Nam Eun-gi"
            ],
            "videoId": "V_QJ0jLKWFo",
            "comments": []
        },
        {
            "title": "Extraordinary You",
            "justwatchRating": "85%",
            "imdbRating": "7.9",
            "genres": "Fantasy, Romance, Drama",
            "synopsis": "A student discovers she is a secondary character in a Korean manhwa (comic) and struggles to change her fate within the story.",
            "cast": [
                "Kim Hye-yoon as Eun Dan-oh",
                "Rowoon as Ha Roo",
                "Lee Jae-wook as Baek Kyung"
            ],
            "videoId": "a_1Tf3Rhf6E",
            "comments": []
        },
        {
            "title": "Something in the Rain",
            "justwatchRating": "90%",
            "imdbRating": "8.1",
            "genres": "Drama, Romance",
            "synopsis": "A single woman in her 30s falls in love with her best friend's younger brother, defying social and familial norms.",
            "cast": [
                "Son Ye-jin as Yoon Jin-ah",
                "Jung Hae-in as Seo Joon-hee",
                "Jang So-yeon as Seo Kyung-seon"
            ],
            "videoId": "c-adCKFZqH4",
            "comments": []
        },
        {
            "title": "My ID is Gangnam Beauty",
            "justwatchRating": "80%",
            "imdbRating": "7.3",
            "genres": "Drama, Romance, Comedy",
            "synopsis": "A university student who underwent plastic surgery faces challenges of discrimination and seeks true self-esteem.",
            "cast": [
                "Im Soo-hyang as Kang Mi-rae",
                "Cha Eun-woo as Do Kyung-seok",
                "Jo Woo-ri as Hyun Soo-ah"
            ],
            "videoId": "pBwTLwHzV8I",
            "comments": []
        },
        {
            "title": "True Beauty",
            "justwatchRating": "84%",
            "imdbRating": "8.0",
            "genres": "Comedy, Drama, Romance",
            "synopsis": "A high school girl with exceptional makeup skills navigates life, love, and identity while hiding her bare-face appearance.",
            "cast": [
                "Moon Ga-young as Lim Ju-kyung",
                "Cha Eun-woo as Lee Su-ho",
                "Hwang In-yeop as Han Seo-jun"
            ],
            "videoId": "4-zl7VXCoOs",
            "comments": []
        },
        {
            "title": "Fight for My Way",
            "justwatchRating": "85%",
            "imdbRating": "8.1",
            "genres": "Comedy, Romance, Drama",
            "synopsis": "Childhood friends strive to achieve their dreams while facing the hardships of adulthood and discovering romantic feelings for each other.",
            "cast": [
                "Park Seo-joon as Ko Dong-man",
                "Kim Ji-won as Choi Ae-ra",
                "Ahn Jae-hong as Kim Joo-man"
            ],
            "videoId": "XFu3Hufti5E",
            "comments": []
        },
        {
            "title": "Because This Is My First Life",
            "justwatchRating": "86%",
            "imdbRating": "8.1",
            "genres": "Drama, Romance, Comedy",
            "synopsis": "Two financially struggling individuals decide to enter a contractual marriage to save money and eventually develop feelings for each other.",
            "cast": [
                "Lee Min-ki as Nam Se-hee",
                "Jung So-min as Yoon Ji-ho",
                "Esom as Woo Su-ji"
            ],
            "videoId": "agYjoFB909A",
            "comments": []
        },
        {
            "title": "Prison Playbook",
            "justwatchRating": "88%",
            "imdbRating": "8.5",
            "genres": "Comedy, Drama, Crime",
            "synopsis": "A star baseball player ends up in prison just before his Major League debut and must adapt to his new life alongside other inmates.",
            "cast": [
                "Park Hae-soo as Kim Je-hyuk",
                "Jung Kyung-ho as Lee Joon-ho",
                "Krystal Jung as Ji-ho"
            ],
            "videoId": "MAyHcIzvjnY",
            "comments": []
        },
        {
            "title": "Oh My Venus",
            "justwatchRating": "81%",
            "imdbRating": "7.7",
            "genres": "Comedy, Romance, Drama",
            "synopsis": "An overweight lawyer seeks the help of a personal trainer to regain her figure and confidence after being dumped by her boyfriend.",
            "cast": [
                "So Ji-sub as Kim Young-ho",
                "Shin Min-a as Kang Joo-eun",
                "Sung Hoon as Jang Joon-sung"
            ],
            "videoId": "oz9n76pOVSM",
            "comments": []
        },
        {
            "title": "Rookie Historian Goo Hae-Ryung",
            "justwatchRating": "79%",
            "imdbRating": "8.0",
            "genres": "Drama, Historical, Romance",
            "synopsis": "A young woman in the 19th century becomes a royal court historian and fights for recognition in a male-dominated society.",
            "cast": [
                "Shin Se-kyung as Goo Hae-ryung",
                "Cha Eun-woo as Yi Rim",
                "Park Ki-woong as Yi Jin"
            ],
            "videoId": "GqaGhUJ9Vgs",
            "comments": []
        },
        {
            "title": "Uncontrollably Fond",
            "justwatchRating": "76%",
            "imdbRating": "7.6",
            "genres": "Drama, Romance",
            "synopsis": "A famous actor with a terminal illness reunites with his youthful love, a documentary filmmaker with emotional scars.",
            "cast": [
                "Kim Woo-bin as Shin Joon-young",
                "Bae Suzy as Noh Eul",
                "Lim Ju-hwan as Choi Ji-tae"
            ],
            "videoId": "E2oyesH3wm0",
            "comments": []
        },
        {
            "title": "Signal",
            "justwatchRating": "88%",
            "imdbRating": "8.5",
            "genres": "Crime, Drama, Fantasy",
            "synopsis": "A detective from the present communicates with a detective from the past via a walkie-talkie to solve cold cases of homicide.",
            "cast": [
                "Lee Je-hoon as Park Hae-young",
                "Kim Hye-soo as Cha Soo-hyun",
                "Cho Jin-woong as Lee Jae-han"
            ],
            "videoId": "RsdJLm7Swkw",
            "comments": []
        },
        {
            "title": "Stranger",
            "justwatchRating": "90%",
            "imdbRating": "8.5",
            "genres": "Crime, Drama, Suspense",
            "synopsis": "An emotionally detached prosecutor and a detective team up to uncover corruption in the prosecutor's office while investigating a murder.",
            "cast": [
                "Cho Seung-woo as Hwang Shi-mok",
                "Bae Doona as Han Yeo-jin",
                "Lee Joon-hyuk as Seo Dong-jae"
            ],
            "videoId": "9c3lAKWAcow",
            "comments": []
        },
        {
            "title": "Romantic Doctor, Teacher Kim",
            "justwatchRating": "86%",
            "imdbRating": "8.2",
            "genres": "Drama, Medical, Romance",
            "synopsis": "A renowned surgeon retires to a small rural clinic and mentors two young doctors as they face medical and ethical challenges.",
            "cast": [
                "Han Suk-kyu as Kim Sa-bu",
                "Yoo Yeon-seok as Kang Dong-joo",
                "Seo Hyun-jin as Yoon Seo-jung"
            ],
            "videoId": "PLnSlTZnwkA",
            "comments": []
        }
      ];
      
      //----------------------------------------
      // 1. Create a function that takes an array of objects and returns an array of objects that
      //    have a rating of 85% or higher.
      //----------------------------------------
      
      const kdramasEs = [
        {
            "title": "Crash Landing on You",
            "justwatchRating": "91%",
            "imdbRating": "8.7",
            "genres": "Romance, Comedia, Drama, Acción",
            "synopsis": "Una mujer surcoreana se lanza accidentalmente en parapente hacia Corea del Norte y se enamora de un oficial norcoreano.",
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
            "genres": "Drama, Comedia, Crimen",
            "synopsis": "Vincenzo Cassano, un abogado y consigliere de la mafia italiana, regresa a Corea del Sur y se enfrenta a un conglomerado corrupto.",
            "cast": [
                "Song Joong-ki as Vincenzo Cassano",
                "Jeon Yeo-been as Hong Cha-young",
                "Ok Taec-yeon as Jang Jun-woo",
                "Kim Yeo-jin as Choi Myung-hee"
            ],
            "videoId": "WO0xoDyGrdc",
            "img": "https://via.placeholder.com/600x400",
            "comments": []
        },
        {
            "title": "Itaewon Class",
            "justwatchRating": "90%",
            "imdbRating": "8.2",
            "genres": "Drama",
            "synopsis": "Un exconvicto y sus amigos luchan por cumplir su sueño de abrir un bar en el distrito de Itaewon.",
            "cast": [
                "Park Seo-joon as Park Sae-ro-yi",
                "Kim Da-mi as Jo Yi-seo",
                "Yoo Jae-myung as Jang Dae-hee",
                "Kwon Nara as Oh Soo-ah"
            ],
            "videoId": "NNP8m3gaaFE",
            "comments": []
        },
        {
            "title": "Squid Game",
            "justwatchRating": "96%",
            "imdbRating": "8.0",
            "genres": "Suspenso, Drama",
            "synopsis": "Cientos de jugadores con problemas económicos aceptan una invitación para competir en juegos infantiles con consecuencias mortales.",
            "cast": [
                "Lee Jung-jae as Seong Gi-hun",
                "Park Hae-soo as Cho Sang-woo",
                "Wi Ha-joon as Hwang Jun-ho",
                "Jung Ho-yeon as Kang Sae-byeok"
            ],
            "videoId": "oqxAJKy0ii4",
            "comments": []
        },
        {
            "title": "Goblin",
            "justwatchRating": "94%",
            "imdbRating": "8.6",
            "genres": "Romance, Fantasía, Drama",
            "synopsis": "Un ser inmortal busca a una novia humana para poner fin a su vida eterna.",
            "cast": [
                "Gong Yoo as Kim Shin",
                "Kim Go-eun as Ji Eun-tak",
                "Lee Dong-wook as Grim Reaper",
                "Yoo In-na as Sunny"
            ],
            "videoId": "8AcNEVUzV4o",
            "comments": []
        },
        {
            "title": "My Love from the Star",
            "justwatchRating": "93%",
            "imdbRating": "8.2",
            "genres": "Romance, Comedia, Fantasía",
            "synopsis": "Un extraterrestre que ha estado en la Tierra durante 400 años se enamora de una actriz famosa.",
            "cast": [
                "Kim Soo-hyun as Do Min-joon",
                "Jun Ji-hyun as Cheon Song-yi",
                "Park Hae-jin as Lee Hwi-kyung",
                "Yoo In-na as Yoo Se-mi"
            ],
            "videoId": "57Yc6Z2OiC4",
            "comments": []
        },
        {
            "title": "Descendants of the Sun",
            "justwatchRating": "94%",
            "imdbRating": "8.3",
            "genres": "Romance, Drama, Acción",
            "synopsis": "Un soldado de élite y una doctora se enamoran mientras enfrentan situaciones peligrosas en una zona de guerra.",
            "cast": [
                "Song Joong-ki as Yoo Si-jin",
                "Song Hye-kyo as Kang Mo-yeon",
                "Jin Goo as Seo Dae-young",
                "Kim Ji-won as Yoon Myung-ju"
            ],
            "videoId": "wkHjOTFv60g",
            "comments": []
        },
        {
            "title": "The Heirs",
            "justwatchRating": "92%",
            "imdbRating": "7.5",
            "genres": "Romance, Drama",
            "synopsis": "Un grupo de estudiantes de secundaria de élite navega por la vida y el amor mientras enfrentan problemas familiares y de poder.",
            "cast": [
                "Lee Min-ho as Kim Tan",
                "Park Shin-hye as Cha Eun-sang",
                "Kim Woo-bin as Choi Young-do",
                "Kim Ji-won as Rachel Yoo"
            ],
            "videoId": "Y0WSF5ikpvU",
            "comments": []
        },
        {
            "title": "Nam-soon, una chica superfuerte",
            "justwatchRating": "91%",
            "imdbRating": "8.2",
            "genres": "Comedia, Romance, Fantasía",
            "synopsis": "Una mujer con fuerza sobrehumana trabaja como guardaespaldas para un CEO de una empresa de videojuegos.",
            "cast": [
                "Park Bo-young as Do Bong-soon",
                "Park Hyung-sik as Ahn Min-hyuk",
                "Ji Soo as In Guk-doo",
                "Seol In-ah as Jo Hee-ji"
            ],
            "videoId": "qR3H-QrnKoY",
            "comments": []
        },
        {
            "title": "Hotel Del Luna",
            "justwatchRating": "94%",
            "imdbRating": "8.2",
            "genres": "Fantasia, Drama, Romance",
            "synopsis": "Un hombre empieza a trabajar en un hotel para fantasmas dirigido por una mujer atrapada entre el mundo de los vivos y el de los muertos.",
            "cast": [
                "IU as Jang Man-wol",
                "Yeo Jin-goo as Goo Chan-sung",
                "Shin Jung-geun as Kim Seon-bi",
                "Bae Hae-sun as Choi Seo-hee"
            ],
            "videoId": "zMWpcJ_n3_o",
            "comments": []
        },
        {
            "title": "While You Were Sleeping",
            "justwatchRating": "92%",
            "imdbRating": "8.4",
            "genres": "Drama, Romance, Fantasía",
            "synopsis": "Una mujer puede ver accidentes futuros en sus sueños, y junto a un fiscal y un policía, intenta evitar que ocurran.",
            "cast": [
                "Lee Jong-suk as Jung Jae-chan",
                "Bae Suzy as Nam Hong-joo",
                "Lee Sang-yeob as Lee Yoo-beom",
                "Jung Hae-in as Han Woo-tak"
            ],
            "videoId": "8_rEZV3n3mk",
            "comments": []
        },
        {
            "title": "Pinocchio",
            "justwatchRating": "91%",
            "imdbRating": "8.1",
            "genres": "Drama, Romance",
            "synopsis": "Un joven cuya vida fue destruida por los medios se convierte en periodista para descubrir la verdad detrás de la tragedia de su familia.",
            "cast": [
                "Lee Jong-suk as Choi Dal-po",
                "Park Shin-hye as Choi In-ha",
                "Kim Young-kwang as Seo Bum-jo",
                "Lee Yu-bi as Yoon Yoo-rae"
            ],
            "videoId": "itaLosPDLZE",
            "comments": []
        },
        {
            "title": "W: Two Worlds",
            "justwatchRating": "90%",
            "imdbRating": "8.1",
            "genres": "Drama, Romance, Fantasía",
            "synopsis": "Una cirujana es transportada dentro de un mundo de cómics donde conoce al héroe de la historia y deben luchar por sobrevivir.",
            "cast": [
                "Lee Jong-suk as Kang Chul",
                "Han Hyo-joo as Oh Yeon-joo",
                "Jung Yoo-jin as Yoon So-hee",
                "Lee Tae-hwan as Seo Do-yoon"
            ],
            "videoId": "h_Nf1vTOy2s",
            "comments": []
        },
        {
            "title": "It's Okay to Not Be Okay",
            "justwatchRating": "96%",
            "imdbRating": "8.7",
            "genres": "Romance, Drama",
            "synopsis": "Un trabajador de salud mental y una escritora con trastorno de personalidad antisocial se ayudan mutuamente a sanar sus heridas emocionales.",
            "cast": [
                "Kim Soo-hyun as Moon Gang-tae",
                "Seo Ye-ji as Ko Moon-young",
                "Oh Jung-se as Moon Sang-tae",
                "Park Gyu-young as Nam Joo-ri"
            ],
            "videoId": "1H__LNPCc80",
            "comments": []
        },
        {
            "title": "Weightlifting Fairy Kim Bok-joo",
            "justwatchRating": "81%",
            "imdbRating": "8.3",
            "genres": "Comedia, Drama, Romance",
            "synopsis": "Una talentosa levantadora de pesas cruza caminos con un amigo de la infancia, un prometedor nadador, y ambos descubren sentimientos mientras navegan por sus sueños y desafíos en una universidad deportiva.",
            "cast": [
                "Lee Sung-kyung como Kim Bok-joo",
                "Nam Joo-hyuk como Jung Joon-hyung",
                "Kyung Soo-jin como Song Shi-ho",
                "Lee Jae-yoon como Jung Jae-yi"
            ],
            "videoId": "6t5dLenA85Y",
            "comments": []
        },
        {
            "title": "Healer",
            "justwatchRating": "88%",
            "imdbRating": "8.5",
            "genres": "Acción, Suspenso, Romance",
            "synopsis": "Un mensajero nocturno con habilidades especiales se involucra en una conspiración mientras intenta descubrir la verdad sobre su propio pasado.",
            "cast": [
                "Ji Chang-wook como Seo Jung-hoo",
                "Park Min-young como Chae Young-shin",
                "Yoo Ji-tae como Kim Moon-ho"
            ],
            "videoId": "AnjmzZFssmg",
            "comments": []
        },
        {
            "title": "Doctor Stranger",
            "justwatchRating": "80%",
            "imdbRating": "7.3",
            "genres": "Drama, Médico, Romance",
            "synopsis": "Un talentoso cirujano, que escapó de Corea del Norte, lucha por encontrar su lugar en el competitivo mundo médico de Corea del Sur mientras busca a su amor perdido.",
            "cast": [
                "Lee Jong-suk como Park Hoon",
                "Jin Se-yeon como Song Jae-hee",
                "Park Hae-jin como Han Jae-joon"
            ],
            "videoId": "_S2IMBFHS-A",
            "comments": []
        },
        {
            "title": "What's Wrong with Secretary Kim",
            "justwatchRating": "89%",
            "imdbRating": "8.1",
            "genres": "Comedia, Romance",
            "synopsis": "Un vicepresidente narcisista se enfrenta a una crisis cuando su secretaria anuncia que va a renunciar, desencadenando una serie de eventos cómicos y románticos.",
            "cast": [
                "Park Seo-joon como Lee Young-joon",
                "Park Min-young como Kim Mi-so",
                "Lee Tae-hwan como Lee Sung-yeon"
            ],
            "videoId": "EDGfWN36q5o",
            "comments": []
        },
        {
            "title": "Love in the Moonlight",
            "justwatchRating": "83%",
            "imdbRating": "7.8",
            "genres": "Drama, Romance, Histórico",
            "synopsis": "Una joven que se hace pasar por un eunuco en el palacio real se encuentra en medio de un romance complicado con el príncipe heredero.",
            "cast": [
                "Park Bo-gum como Lee Yeong",
                "Kim Yoo-jung como Hong Ra-on",
                "Jin Young como Kim Yoon-sung"
            ],
            "videoId": "-Yfv8T3rChs",
            "comments": []
        },
        {
            "title": "Moon Lovers: Scarlet Heart Ryeo",
            "justwatchRating": "85%",
            "imdbRating": "8.5",
            "genres": "Drama, Histórico, Romance",
            "synopsis": "Una joven del siglo XXI es transportada al pasado durante la dinastía Goryeo, donde se involucra en la política y romance entre los príncipes reales.",
            "cast": [
                "Lee Joon-gi como Wang So",
                "IU como Hae Soo",
                "Kang Ha-neul como Wang Wook"
            ],
            "videoId": "o7mYYXToqmw",
            "comments": []
        },
        {
            "title": "Legend of the Blue Sea",
            "justwatchRating": "87%",
            "imdbRating": "8.1",
            "genres": "Fantasía, Romance, Drama",
            "synopsis": "Una sirena moderna navega por el mundo humano en busca de su amor perdido, encontrándose con un hábil estafador en el proceso.",
            "cast": [
                "Jun Ji-hyun como Shim Cheong",
                "Lee Min-ho como Heo Joon-jae",
                "Lee Hee-joon como Jo Nam-doo"
            ],
            "videoId": "G_jt3EwBMwU",
            "comments": []
        },
        {
            "title": "City Hunter",
            "justwatchRating": "84%",
            "imdbRating": "8.2",
            "genres": "Acción, Crimen, Drama",
            "synopsis": "Un joven entrena para vengar la muerte de su padre y se convierte en un vigilante conocido como 'City Hunter', mientras lucha contra la corrupción gubernamental.",
            "cast": [
                "Lee Min-ho como Lee Yoon-sung",
                "Park Min-young como Kim Na-na",
                "Lee Joon-hyuk como Kim Young-joo"
            ],
            "videoId": "G20m5NTAVAE",
            "comments": []
        },
        {
            "title": "Suspicious Partner",
            "justwatchRating": "83%",
            "imdbRating": "7.8",
            "genres": "Romance, Comedia, Suspenso",
            "synopsis": "Una abogada en formación se une a un fiscal para resolver un caso de asesinato que los pone en el camino del peligro y del amor.",
            "cast": [
                "Ji Chang-wook como Noh Ji-wook",
                "Nam Ji-hyun como Eun Bong-hee",
                "Choi Tae-joon como Ji Eun-hyuk"
            ],
            "videoId": "4HCRa8PPKGw",
            "comments": []
        },
        {
            "title": "The King: Eternal Monarch",
            "justwatchRating": "84%",
            "imdbRating": "8.1",
            "genres": "Fantasía, Romance, Drama",
            "synopsis": "Un emperador de Corea cruza a una dimensión paralela moderna para detener una traición y proteger a la mujer que ama.",
            "cast": [
                "Lee Min-ho como Lee Gon",
                "Kim Go-eun como Jung Tae-eul",
                "Woo Do-hwan como Jo Yeong"
            ],
            "videoId": "jJwuFjmfjRY",
            "comments": []
        },
        {
            "title": "Hwarang",
            "justwatchRating": "78%",
            "imdbRating": "8.0",
            "genres": "Drama, Histórico, Romance",
            "synopsis": "Un grupo de guerreros jóvenes de élite se une para proteger el reino de Silla y enfrentan desafíos políticos y románticos.",
            "cast": [
                "Park Seo-joon como Moo-myung",
                "Go Ara como Kim Ah-ro",
                "Park Hyung-sik como Sam Maek-jong"
            ],
            "videoId": "ZjWdkkcmrio",
            "comments": []
        },
        {
            "title": "Start-Up",
            "justwatchRating": "80%",
            "imdbRating": "8.1",
            "genres": "Drama, Romance",
            "synopsis": "Jóvenes emprendedores luchan por alcanzar el éxito en el competitivo mundo de las startups en Corea del Sur mientras navegan por el amor y las ambiciones.",
            "cast": [
                "Bae Suzy como Seo Dal-mi",
                "Nam Joo-hyuk como Nam Do-san",
                "Kim Seon-ho como Han Ji-pyeong"
            ],
            "videoId": "BemKyzbLDDc",
            "comments": []
        },
        {
            "title": "Her Private Life",
            "justwatchRating": "82%",
            "imdbRating": "7.7",
            "genres": "Comedia, Romance",
            "synopsis": "Una curadora de arte profesional oculta su vida como fan obsesiva de un ídolo del K-pop hasta que su jefe descubre su secreto.",
            "cast": [
                "Park Min-young como Sung Deok-mi",
                "Kim Jae-wook como Ryan Gold",
                "Ahn Bo-hyun como Nam Eun-gi"
            ],
            "videoId": "V_QJ0jLKWFo",
            "comments": []
        },
        {
            "title": "Extraordinary You",
            "justwatchRating": "85%",
            "imdbRating": "7.9",
            "genres": "Fantasía, Romance, Drama",
            "synopsis": "Una estudiante descubre que es un personaje secundario en un manhwa (cómic coreano) y lucha por cambiar su destino dentro de la historia.",
            "cast": [
                "Kim Hye-yoon como Eun Dan-oh",
                "Rowoon como Ha Roo",
                "Lee Jae-wook como Baek Kyung"
            ],
            "videoId": "a_1Tf3Rhf6E",
            "comments": []
        },
        {
            "title": "Something in the Rain",
            "justwatchRating": "90%",
            "imdbRating": "8.1",
            "genres": "Drama, Romance",
            "synopsis": "Una mujer soltera en sus 30s se enamora del hermano menor de su mejor amiga, desafiando las normas sociales y familiares.",
            "cast": [
                "Son Ye-jin como Yoon Jin-ah",
                "Jung Hae-in como Seo Joon-hee",
                "Jang So-yeon como Seo Kyung-seon"
            ],
            "videoId": "c-adCKFZqH4",
            "comments": []
        },
        {
            "title": "My ID is Gangnam Beauty",
            "justwatchRating": "80%",
            "imdbRating": "7.3",
            "genres": "Drama, Romance, Comedia",
            "synopsis": "Una joven universitaria que se sometió a cirugía plástica enfrenta los desafíos de la discriminación y busca la verdadera autoestima.",
            "cast": [
                "Im Soo-hyang como Kang Mi-rae",
                "Cha Eun-woo como Do Kyung-seok",
                "Jo Woo-ri como Hyun Soo-ah"
            ],
            "videoId": "pBwTLwHzV8I",
            "comments": []
        },
        {
            "title": "True Beauty",
            "justwatchRating": "84%",
            "imdbRating": "8.0",
            "genres": "Comedia, Drama, Romance",
            "synopsis": "Una chica de secundaria con una habilidad excepcional para el maquillaje navega por la vida, el amor y su identidad mientras oculta su apariencia sin maquillaje.",
            "cast": [
                "Moon Ga-young como Lim Ju-kyung",
                "Cha Eun-woo como Lee Su-ho",
                "Hwang In-yeop como Han Seo-jun"
            ],
            "videoId": "4-zl7VXCoOs",
            "comments": []
        },
        {
            "title": "Fight for My Way",
            "justwatchRating": "85%",
            "imdbRating": "8.1",
            "genres": "Comedia, Romance, Drama",
            "synopsis": "Amigos de la infancia luchan por alcanzar sus sueños mientras enfrentan las dificultades de la vida adulta y descubren sentimientos románticos entre ellos.",
            "cast": [
                "Park Seo-joon como Ko Dong-man",
                "Kim Ji-won como Choi Ae-ra",
                "Ahn Jae-hong como Kim Joo-man"
            ],
            "videoId": "XFu3Hufti5E",
            "comments": []
        },
        {
            "title": "Because This Is My First Life",
            "justwatchRating": "86%",
            "imdbRating": "8.1",
            "genres": "Drama, Romance, Comedia",
            "synopsis": "Dos personas con dificultades financieras deciden entrar en un matrimonio contractual para ahorrar dinero y eventualmente desarrollan sentimientos el uno por el otro.",
            "cast": [
                "Lee Min-ki como Nam Se-hee",
                "Jung So-min como Yoon Ji-ho",
                "Esom como Woo Su-ji"
            ],
            "videoId": "agYjoFB909A",
            "comments": []
        },
        {
            "title": "Prison Playbook",
            "justwatchRating": "88%",
            "imdbRating": "8.5",
            "genres": "Comedia, Drama, Crimen",
            "synopsis": "Un jugador de béisbol estrella termina en prisión justo antes de debutar en las Grandes Ligas y debe adaptarse a su nueva vida junto a otros prisioneros.",
            "cast": [
                "Park Hae-soo como Kim Je-hyuk",
                "Jung Kyung-ho como Lee Joon-ho",
                "Krystal Jung como Ji-ho"
            ],
            "videoId": "MAyHcIzvjnY",
            "comments": []
        },
        {
            "title": "Oh My Venus",
            "justwatchRating": "81%",
            "imdbRating": "7.7",
            "genres": "Comedia, Romance, Drama",
            "synopsis": "Una abogada con sobrepeso busca la ayuda de un entrenador personal para recuperar su figura y confianza después de ser abandonada por su novio.",
            "cast": [
                "So Ji-sub como Kim Young-ho",
                "Shin Min-a como Kang Joo-eun",
                "Sung Hoon como Jang Joon-sung"
            ],
            "videoId": "oz9n76pOVSM",
            "comments": []
        },
        {
            "title": "Rookie Historian Goo Hae-Ryung",
            "justwatchRating": "79%",
            "imdbRating": "8.0",
            "genres": "Drama, Histórico, Romance",
            "synopsis": "Una joven mujer del siglo XIX se convierte en historiadora de la corte real y lucha por el reconocimiento en una sociedad dominada por hombres.",
            "cast": [
                "Shin Se-kyung como Goo Hae-ryung",
                "Cha Eun-woo como Yi Rim",
                "Park Ki-woong como Yi Jin"
            ],
            "videoId": "GqaGhUJ9Vgs",
            "comments": []
        },
        {
            "title": "Uncontrollably Fond",
            "justwatchRating": "76%",
            "imdbRating": "7.6",
            "genres": "Drama, Romance",
            "synopsis": "Un actor famoso con una enfermedad terminal se reencuentra con su amor de juventud, una documentalista que tiene cicatrices emocionales.",
            "cast": [
                "Kim Woo-bin como Shin Joon-young",
                "Bae Suzy como Noh Eul",
                "Lim Ju-hwan como Choi Ji-tae"
            ],
            "videoId": "E2oyesH3wm0",
            "comments": []
        },
        {
            "title": "Signal",
            "justwatchRating": "88%",
            "imdbRating": "8.5",
            "genres": "Crimen, Drama, Fantasía",
            "synopsis": "Un detective del presente se comunica con un detective del pasado a través de un walkie-talkie para resolver casos de homicidio sin resolver.",
            "cast": [
                "Lee Je-hoon como Park Hae-young",
                "Kim Hye-soo como Cha Soo-hyun",
                "Cho Jin-woong como Lee Jae-han"
            ],
            "videoId": "RsdJLm7Swkw",
            "comments": []
        },
        {
            "title": "Stranger",
            "justwatchRating": "90%",
            "imdbRating": "8.5",
            "genres": "Crimen, Drama, Suspenso",
            "synopsis": "Un fiscal emocionalmente distante y una detective forman equipo para destapar la corrupción en la fiscalía mientras investigan un asesinato.",
            "cast": [
                "Cho Seung-woo como Hwang Shi-mok",
                "Bae Doona como Han Yeo-jin",
                "Lee Joon-hyuk como Seo Dong-jae"
            ],
            "videoId": "9c3lAKWAcow",
            "comments": []
        },
        {
            "title": "Romantic Doctor, Teacher Kim",
            "justwatchRating": "86%",
            "imdbRating": "8.2",
            "genres": "Drama, Médico, Romance",
            "synopsis": "Un renombrado cirujano se retira a una pequeña clínica rural y guía a dos jóvenes médicos mientras enfrentan desafíos médicos y éticos.",
            "cast": [
                "Han Suk-kyu como Kim Sa-bu",
                "Yoo Yeon-seok como Kang Dong-joo",
                "Seo Hyun-jin como Yoon Seo-jung"
            ],
            "videoId": "PLnSlTZnwkA",
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
