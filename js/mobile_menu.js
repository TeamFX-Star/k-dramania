

// Función para alternar la visibilidad del menú lateral
function toggleMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("open");
}

// Función para cerrar el menú lateral
function closeMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.remove("open");
}

// Evento que escucha el cambio de tamaño de la pantalla
window.addEventListener('resize', function () {
    var screenWidth = window.innerWidth;
    var mobileMenu = document.getElementById("mobileMenu");

    // Verifica si el menú está abierto y el tamaño de la pantalla es mayor a 768px
    if (mobileMenu.classList.contains('open') && screenWidth > 768) {
        closeMenu(); // Cierra el menú si está abierto y el tamaño de la pantalla es mayor a 768px
    }
});

// Event listener para abrir el modal de inicio de sesión
document.getElementById('open-signin-modal').addEventListener('click', function () {
    window.location.href = 'login.html?lang=es'; // Para español, por ejemplo
});

// Event listener para abrir el modal de registro
document.getElementById('open-signup-modal').addEventListener('click', function () {
    window.location.href = 'login.html?lang=en'; // Para inglés, por ejemplo
});

