function registerUser() {
    const name = document.getElementById('registerName').value;
    const lastName = document.getElementById('registerLastname').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.getElementById('registerGender').value;

    if (!name || !lastName || !gender || !email || !password || !confirmPassword) {
        alert('Por favor, complete todos los campos');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const user = { name, lastName, gender, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Usuario registrado correctamente');
}

function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Por favor, complete todos los campos');
        return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        console.log('Inicio de sesión exitoso');
        sessionStorage.setItem('loggedInUser', JSON.stringify(storedUser));
        window.location.href = 'index.html'; 
    } else {
        console.error('Nombre de usuario o contraseña incorrectos');
        alert('Usuario no registrado. Por favor, regístrate antes de iniciar sesión.');
    }
}

function logoutUser() {
    sessionStorage.removeItem('loggedInUser');
    updateNavigation();
    location.reload();
}

function updateNavigation() {
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        const navigationMenu = document.getElementById('navigationMenu');
        navigationMenu.innerHTML = `
            <span>Bienvenido, ${loggedInUser.name}!</span>
            <button onclick="logoutUser()">Cerrar sesión</button>
        `;
    } else {
        const navigationMenu = document.getElementById('navigationMenu');
        navigationMenu.innerHTML = `
            <button onclick="showLoginForm()">Iniciar sesión</button>
        `;
    }
}

function showLoginForm() {
    window.location.href = 'Save a Paw/login.html';
}

function goToHomePage() {
    window.location.href = '../index.html';
}