// Obtiene el botón "Menú" y la barra de navegación
const menuToggle = document.getElementById("menuToggle");
const navBar = document.getElementById("navBar");

// Agrega un evento de clic al botón "Menú" para alternar la visibilidad de la barra de navegación
menuToggle.addEventListener("click", function() {
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
    } else {
        navBar.style.display = "block";
    }
});