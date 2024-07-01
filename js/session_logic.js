document.addEventListener('DOMContentLoaded', function () {
    // Obtiene el nombre de usuario almacenado en localStorage
    const storedUsername = localStorage.getItem('username');
    // Obtiene el correo electrónico almacenado en localStorage
    const storedEmail = localStorage.getItem('email');
    // Obtiene la contraseña almacenada en localStorage
    const storedPassword = localStorage.getItem('password');

    // Verifica si el nombre de usuario, correo electrónico y contraseña existen en localStorage
    if (storedUsername && storedEmail && storedPassword) {
        // Selecciona el elemento con id 'name-content'
        const userEmail = document.getElementById('name-content');
        // Establece el contenido de texto del elemento con el nombre de usuario
        userEmail.textContent = `User: ${storedUsername}`;
        // Cambia el estilo de visualización a 'inline-block'
        userEmail.style.display = 'inline-block';
        // Establece márgenes izquierdo y derecho
        userEmail.style.margin = '0 30px';
        // Cambia el color del texto
        userEmail.style.color = '#666666';
    }
});

function replaceUser() {
    // Obtiene el nombre de usuario almacenado en localStorage
    const user = localStorage.getItem('username');
    // Selecciona el elemento con id 'name-content'
    const userEmailSpan = document.getElementById('name-content');
    // Selecciona el botón para abrir el modal de inicio de sesión
    const signin = document.getElementById('open-signin-modal');
    // Selecciona el botón para abrir el modal de registro
    const signup = document.getElementById('open-signup-modal');
    
    const signup2 = document.getElementById('sign-in-menu-button');
    const signin2 = document.getElementById('sign-up-menu-button');
    // Selecciona el dropdown con id 'dropdown-cc'
    const dropdownCc = document.getElementById('dropdown-cc');

    // Verifica si el nombre de usuario existe en localStorage
    if (user) {
        // Establece el contenido de texto del elemento con el nombre de usuario
        userEmailSpan.textContent = user;
        // Cambia el estilo de visualización a 'inline'
        userEmailSpan.style.display = 'inline';
        // Cambia el color del texto
        userEmailSpan.style.color = '#4CAF50';
        // Oculta el botón de inicio de sesión
        signin.style.display = 'none';
        // Oculta el botón de registro
        signup.style.display = 'none';

                // Oculta el botón de inicio de sesión
        signin2.style.display = 'none';
        // Oculta el botón de registro
        signup2.style.display = 'none';

    } else {
        // Oculta el dropdown si no hay un usuario
        dropdownCc.style.display = 'none';
        // Imprime un mensaje en la consola
        console.log("No hay usuarios");
    }
}

// Llama a la función replaceUser() para actualizar la interfaz con el nombre de usuario
replaceUser();

function removeItems() {
    // Elimina el nombre de usuario almacenado en localStorage
    localStorage.removeItem('username');
    // Elimina el correo electrónico almacenado en localStorage
    localStorage.removeItem('email');
    // Elimina la contraseña almacenada en localStorage
    localStorage.removeItem('password');

// Selecciona el elemento con id 'closeS'
const reload = document.getElementById("closeS");
// Añade un event listener para recargar la página cuando se haga clic en el elemento
reload.addEventListener("click", () => {
    // Recarga la página
    location.reload();
});
}

    // Función para obtener y mostrar el número de página
    function obtenerNumeroDePagina() {
        // Obtener el nombre de la página actual del navegador
        var paginaActual = window.location.pathname.split('/').pop();
        
        // Obtener todos los enlaces del menú
        var enlaces = document.getElementsByTagName('a');
        
        // Recorrer los enlaces y eliminar el enlace que corresponde a la página actual
        for (var i = 0; i < enlaces.length; i++) {
            if (enlaces[i].getAttribute('href') === paginaActual) {
                enlaces[i].parentNode.removeChild(enlaces[i]);
                break;  // Salir del bucle una vez que se elimine el enlace
            }
        }
    }
    
    // Ejecutar la función al cargar la página
    window.onload = obtenerNumeroDePagina;
