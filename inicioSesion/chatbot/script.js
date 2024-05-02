let legajo = localStorage.getItem('legajo');
let nombreUsuario = localStorage.getItem('nombre');
if (!legajo) {
    window.location.replace("http://127.0.0.1:5500/index.html");
}

if (nombreUsuario) {
    let primerNombre = nombreUsuario.split(' ')[0];
    document.getElementById('showUsernameBtn').innerText = "Hola, " + primerNombre;
}
