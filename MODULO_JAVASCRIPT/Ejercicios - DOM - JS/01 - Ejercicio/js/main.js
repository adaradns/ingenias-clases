// 1) Ocultar/Mostrar
// Generar una página que contenga:
// - Un párrafo con texto a su elección (y oculto inicialmente).
// - Un botón con texto "Mostrar".
// Al presionar el botón, si el párrafo está oculto se deberá mostrarlo. Si está visible, se
// deberá ocultar. Además, alternar el texto del botón entre “Mostrar” y “Ocultar” según corresponda.

// Ejercicio 1
let parrafo = document.getElementById("parrafo");
parrafo.style.display = "none";

let btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", mostrarOcultarParrafo);

function mostrarOcultarParrafo() {
	parrafo.style.display = "block";
	if (btnMostrar.innerHTML == "Ocultar") {
		btnMostrar.innerHTML = "Mostrar";
		parrafo.style.display = "none";
	}
	else btnMostrar.innerHTML = "Ocultar";
}


