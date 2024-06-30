    // Función para obtener el idioma de la URL
    function getLanguage() {
      const urlParams = new URLSearchParams(window.location.search);
      const lang = urlParams.get('lang');
      return lang || 'en'; // Valor predeterminado a inglés si no se especifica
    }

    // Función para establecer el texto según el idioma
    function setLanguageText() {
      const lang = getLanguage();

      if (lang === 'es') {
        document.getElementById('login-title').innerText = 'Inicio de Sesión';
        document.getElementById('email-label').innerText = 'Correo Electronico';
        document.getElementById('password-label').innerText = 'Contraseña';
        document.getElementById('login-button').innerText = 'Iniciar Sesión';
        document.getElementById('signup-text').innerHTML = '¿No tienes una cuenta? <a href="#" id="signup-link">Regístrate</a>';
        document.getElementById('signup-title').innerText = 'Registrarse';
        document.getElementById('new-username-label').innerText = 'Nombre de Usuario';
        document.getElementById('new-email-label').innerText = 'Correo Electrónico';
        document.getElementById('new-password-label').innerText = 'Contraseña';
        document.getElementById('signup-button').innerText = 'Registrarse';
        document.getElementById('login-text').innerHTML = '¿Ya tienes una cuenta? <a href="#" id="login-link">Iniciar Sesión</a>';
      } else {
        // Default to English or any other language setup
        document.getElementById('login-title').innerText = 'Login';
        document.getElementById('email-label').innerText = 'Email';
        document.getElementById('password-label').innerText = 'Password';
        document.getElementById('login-button').innerText = 'Login';
        document.getElementById('signup-text').innerHTML = 'Don\'t have an account? <a href="#" id="signup-link">Sign up</a>';
        document.getElementById('signup-title').innerText = 'Sign Up';
        document.getElementById('new-username-label').innerText = 'Username';
        document.getElementById('new-email-label').innerText = 'Email';
        document.getElementById('new-password-label').innerText = 'Password';
        document.getElementById('signup-button').innerText = 'Sign Up';
        document.getElementById('login-text').innerHTML = 'Already have an account? <a href="#" id="login-link">Login</a>';
      }

      // Reasignar eventos de clic después de establecer el idioma
      assignClickEvents();
    }

    // Función para asignar eventos de clic
    function assignClickEvents() {
      // Obtener el enlace de "Sign up"
      var signupLink = document.getElementById('signup-link');
  
      // Añadir evento de clic al enlace "Sign up"
      signupLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el enlace recargue la página
    
        // Mostrar el formulario de registro y ocultar el de login
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
      });
  
      // Obtener el enlace de "Login"
      var loginLink = document.getElementById('login-link');
  
      // Añadir evento de clic al enlace "Login"
      loginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el enlace recargue la página
    
        // Mostrar el formulario de login y ocultar el de registro
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
      });
    }

    document.addEventListener('DOMContentLoaded', function() {
      setLanguageText(); // Llamar a la función al cargar la página
  
      // Manejar el envío del formulario de registro
      var signupForm = document.getElementById('signup-form-element');
      signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe
    
        // Obtener los valores de los campos del formulario de registro
        var newUsername = document.getElementById('new-username').value;
        var newEmail = document.getElementById('new-email').value;
        var newPassword = document.getElementById('new-password').value;
    
        // Llamar a la función de registro
        register(newUsername, newEmail, newPassword, 'signup-message');
      });

      // Manejar el envío del formulario de login
      var loginForm = document.getElementById('login-form-element');
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe
    
        // Obtener los valores de los campos del formulario de login
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
    
        // Llamar a la función de inicio de sesión
        login(email, password, 'login-message');
      });
    });

    // Función asincrónica para manejar el registro de usuario
    async function register(user, email, password, messageElementId) {
      // Construir la URL para la solicitud de registro
      const baseURL = `http://localhost:3000/register?name=${user}&email=${email}&password=${password}`;
      
      try {
        // Realizar la solicitud de registro
        const response = await fetch(baseURL);
        
        // Manejar la respuesta de la solicitud
        if (response.status === 200) {
          console.log('Registration successful');
          document.getElementById(messageElementId).innerText = 'Registration successful';
        } else if (response.status === 201) {
          console.log('Login successful');
          document.getElementById(messageElementId).innerText = 'Login successful';
          window.location.href = 'home.html';

          // Guardar datos de usuario en localStorage
          localStorage.setItem('username', user);
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
        } else if (response.status === 400) {
          console.log('Email already in use');
          document.getElementById(messageElementId).innerText = 'Email already in use';
        } else {
          console.error('Unexpected error:', response.status);
          document.getElementById(messageElementId).innerText = 'Unexpected error occurred';
        }
      } catch (error) {
        console.error('Error during registration:', error);
        document.getElementById(messageElementId).innerText = 'Error during registration';
      }
    }

    // Función asincrónica para manejar el inicio de sesión de usuario
    async function login(email, password, messageElementId) {
      // Construir la URL para la solicitud de inicio de sesión
      const baseURL = `http://localhost:3000/login?email=${email}&password=${password}`;
      
      try {
        // Realizar la solicitud de inicio de sesión
        const response = await fetch(baseURL);
        
        // Manejar la respuesta de la solicitud
        if (response.status === 200) {
          console.log('Login successful');
                    // Guardar datos de usuario en localStorage
                    const data = await response.json();
                    localStorage.setItem('username', data.user.name);
                    localStorage.setItem('email', data.user.email);
                    localStorage.setItem('password', data.user.password);
                    window.location.href = 'home.html';


console.log()                    
        } else if (response.status === 401) {
          console.log('Login successful');
          document.getElementById(messageElementId).innerText = 'Credenciales Incorrectas';
        } else {
          console.error('Login failed:', response.status);
          document.getElementById(messageElementId).innerText = 'Login failed';
        }
      } catch (error) {
        console.error('Error during login:', error);
        document.getElementById(messageElementId).innerText = 'Error during login';
      }
    }

    document.getElementById('togglePassword').addEventListener('click', function (e) {
      e.preventDefault();
      const passwordField = document.getElementById('password');
      const toggleIcon = document.getElementById('toggleIcon');
      if (passwordField.type === 'password') {
          passwordField.type = 'text';
          toggleIcon.classList.remove('fa-eye');
          toggleIcon.classList.add('fa-eye-slash');
      } else {
          passwordField.type = 'password';
          toggleIcon.classList.remove('fa-eye-slash');
          toggleIcon.classList.add('fa-eye');
      }
  });
  
  document.getElementById('togglePassword2').addEventListener('click', function (e) {
    e.preventDefault();
    const passwordField = document.getElementById('new-password');
    const toggleIcon2 = document.getElementById('toggleIcon2');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon2.classList.remove('fa-eye');
        toggleIcon2.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon2.classList.remove('fa-eye-slash');
        toggleIcon2.classList.add('fa-eye');
    }
});

