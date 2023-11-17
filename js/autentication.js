function registerUser() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!email || !password || !confirmPassword) {
        alert('Por favor, complete todos los campos');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const user = { email, password };
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
        alert('Inicio de sesión exitoso');
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
}

function goToHomePage() {
    window.location.href = 'index.html';
}
