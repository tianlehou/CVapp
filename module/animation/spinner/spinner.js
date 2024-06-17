// Función para cargar el contenido de spinner.html
function loadSpinner() {
    fetch('./module/animation/spinner/spinner.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido en el contenedor
            document.getElementById('spinnerContainer').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el spinner:', error));
}

// Cargar el spinner cuando la página esté lista
document.addEventListener('DOMContentLoaded', loadSpinner);