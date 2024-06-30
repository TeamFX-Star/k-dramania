// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the input and send button
var commentInput = document.getElementById("commentInput");
var sendBtn = document.getElementById("sendBtn");

// Get the comment list
var commentList = document.getElementById("commentList");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Function to add a comment
// Function to add a comment
function addComment() {
    var commentText = commentInput.value;
    if (commentText.trim() !== "") {
      var comment = document.createElement("div");
      comment.classList.add("comment");
  
      var avatar = document.createElement("div");
      avatar.classList.add("avatar");
      avatar.innerText = "F"; // Placeholder for avatar
  
      var commentContent = document.createElement("div");
      commentContent.classList.add("comment-content");
  
      var commentHeader = document.createElement("div");
      commentHeader.classList.add("comment-header");
  
      var username = document.createElement("div");
      username.classList.add("username");
      username.innerText = "Felix"; // Placeholder for username
  
      var time = document.createElement("div");
      time.classList.add("time");
      time.innerText = "Ahora mismo"; // Placeholder for time
  
      var actions = document.createElement("div");
      actions.classList.add("actions");
  
      var like = document.createElement("div");
      like.classList.add("action");
      like.innerHTML = '<i class="fas fa-heart"></i>';
      var likeCount = document.createElement("span");
      likeCount.innerText = "0"; // Inicializar contador de likes
      like.appendChild(likeCount);
  
      like.addEventListener("click", function() {
        var currentLikes = parseInt(likeCount.innerText);
        likeCount.innerText = currentLikes + 1;
        like.classList.add("liked");
      });
  
      var menu = document.createElement("div");
      menu.classList.add("action");
      menu.innerHTML = '<i class="fas fa-ellipsis-h"></i>';
  
      actions.appendChild(like);
      actions.appendChild(menu);
  
      commentHeader.appendChild(username);
      commentHeader.appendChild(time);
      commentHeader.appendChild(actions);
  
      var text = document.createElement("div");
      text.classList.add("text");
      text.innerText = commentText;
  
      commentContent.appendChild(commentHeader);
      commentContent.appendChild(text);
  
      comment.appendChild(avatar);
      comment.appendChild(commentContent);
  
      // Agregar el comentario al final de commentList
      commentList.appendChild(comment);
      commentInput.value = ""; // Clear the input
    }
  }
  
// Function to show reply box
function showReplyBox(comment) {
  var replyBox = document.createElement("div");
  replyBox.classList.add("reply-box");

  var input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Añade un comentario";

  var sendIcon = document.createElement("div");
  sendIcon.classList.add("send-icon");
  sendIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
  sendIcon.onclick = function() { addComment(comment, input); };

  replyBox.appendChild(input);
  replyBox.appendChild(sendIcon);
  comment.appendChild(replyBox);
}

// Function to toggle like
function toggleLike(like) {
  if (like.classList.contains("liked")) {
    like.classList.remove("liked");
    like.innerHTML = '<i class="fas fa-heart"></i>';
  } else {
    like.classList.add("liked");
    like.innerHTML = '<i class="fas fa-heart" style="color: red;"></i>';
  }
}

// When the user clicks the send button, add the comment
sendBtn.onclick = function() { addComment(); };

// Optionally, allow the user to press Enter to add the comment
commentInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addComment();
  }
});


// Función para abrir el modal y mostrar los detalles del drama seleccionado
function openModal(drama) {
    // Código existente para construir el contenido del modal...

    function openModal(drama) {
        // ... código existente para construir el modal ...
    
        // Añadir evento al botón de enviar comentario
        const sendBtn = modalContent.getElementById('sendBtn');
        sendBtn.addEventListener('click', function() {
            const commentInput = modalContent.getElementById('commentInput');
            const newCommentText = commentInput.value.trim();
    
            if (newCommentText) {
                const newComment = {
                    text: newCommentText,
                    likes: 0
                };
                drama.comments.push(newComment);
                saveComments(); // Guardar comentarios en localStorage
                commentInput.value = ''; // Limpiar el input de comentario después de agregarlo
    
                // Mostrar comentarios actualizados
                showComments(drama);
            }
        });
    
        // Mostrar comentarios al abrir el modal
        showComments(drama);
    
        // ... resto del código para configurar el modal ...
    }
    
    // Función para mostrar los comentarios en la lista dentro del modal
    function showComments(drama) {
        const commentList = modalContent.getElementById('commentList');
        commentList.innerHTML = ''; // Limpiar la lista de comentarios antes de mostrar nuevos
    
        if (drama.comments.length === 0) {
            commentList.innerHTML = `<p>No hay comentarios aún.</p>`;
        } else {
            drama.comments.forEach((comment, index) => {
                const commentItem = document.createElement('div');
                commentItem.classList.add('comment-item');
                commentItem.innerHTML = `
                    <div class="avatar">${getUsernameInitial()}</div>
                    <div class="comment-text">${comment.text}</div>
                    <div class="comment-actions">
                        <span class="like-btn" data-comment-index="${index}">${comment.likes} <i class="fas fa-thumbs-up"></i></span>
                    </div>
                `;
                commentList.appendChild(commentItem);
    
                // Añadir evento al botón de like del comentario
                const likeBtn = commentItem.querySelector('.like-btn');
                likeBtn.addEventListener('click', function() {
                    drama.comments[index].likes++;
                    saveComments(); // Guardar comentarios actualizados en localStorage
                    showComments(drama); // Actualizar la lista de comentarios en el modal
                });
            });
        }
    }
    }
