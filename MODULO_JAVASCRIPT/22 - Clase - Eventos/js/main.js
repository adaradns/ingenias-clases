let btn = document.getElementById("btnTexto");

// Recibe 2 parametros nombre del evento y una funcion.
// btn.addEventListener("click", mostrarParrafo);

// function mostrarParrafo(){
//     console.log("Hiciste click.");
//     let parrafo = document.getElementById("parrafo");
//     parrafo.style.display = "block";
// }


btn.onclick     = () => { console.log("Click") };
btn.onmousemove = () => { console.log("Move") }


// btn.onclick = () => { console.log("Respuesta 2") };


let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);



function validarFormulario(event){
    event.preventDefault();
    let form = event.target;
    console.log("form: ", form)
    let inputNombre = document.getElementById("nombre");
    console.log(inputNombre.value);
    //Obtengo el valor del primero hijo <input type="text">
    // console.log(form.children[0].value); 
    // //Obtengo el valor del segundo hijo <input type="number"> 
    // console.log(form.children[1].value); 
}


window.addEventListener("DOMContentLoaded", verfiicarCargaDOM);


function verfiicarCargaDOM(){
   console.log("DOM Cargado.")    
}