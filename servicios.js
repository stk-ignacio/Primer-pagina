// Obtén el elemento <select> y el elemento donde mostrarás la descripción
const selectJuego = document.getElementById("servicios");
const descripcionJuego = document.getElementById("descripcion");

// Agrega un evento de cambio al elemento <select>
selectJuego.addEventListener("change", function() {
    // Obtiene el valor de la opción seleccionada
    const opcionSeleccionada = selectJuego.value;
    
    // Define las descripciones de las frutas
    const descripciones = {
        Accion: "Juegos de accion.",
        Terror: "Juegos de terror.",
        Misterio: "Juegos de misterio.",
        Aventura: "Juegos de aventura.",
    };

    // Muestra la descripción correspondiente en la página
    if (opcionSeleccionada in descripciones) {
        descripcionJuego.textContent = descripciones[opcionSeleccionada];
    } else {
        descripcionJuego.textContent = ""; // Borra la descripción si no hay una selección válida
    }
});