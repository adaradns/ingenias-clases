console.log("-------------------------------------------------------");
console.log("-------------- 💯 CLASE 21 - DOM 💯-------------------");
console.log("-------------------------------------------------------"); 

// Obtener seccion por id:
let seccion = document.getElementById("seccion");
console.log("Seccion by getElementById(): ", seccion);

let seccionQuerySelector = document.querySelector("#seccion");
console.log("Seccion by querySelector() : ", seccionQuerySelector);

// // Obtener el contenido de un parrafo por id
let parrafo = document.getElementById("parrafo");
console.log("Contenido de parrafo: ", parrafo.innerHTML);

// Obtener la colección de elementos que coincidan con el nombre de 
// la clase pasada como parametro al metodo: getElementsByClassName().
let elementsLi = document.getElementsByClassName("item");

// ELIMINAR LOS NODOS CORRESPONDIENTES AL TAG LI, 2 OPCIONES POSIBLES:

// 1. Utilizando un bucle while con la condición de que la longitud
// de elementsLi sea mayor que cero, y eliminar 1 por 1 los elementos.
while(elementsLi.length > 0){
    elementsLi[0].parentNode.removeChild(elementsLi[0]);
}

// 2. Convirtiendo elemntsLi a array y utilizando foreach.
Array.from(elementsLi).forEach(element => element.parentNode.removeChild(element));


// Obtener los tags que coinciden con el tag pasado como parametro al metodo
// getElementsByTagName(), recordar que este selector no es especifico.
let divs = document.getElementsByTagName("div");
console.log("Divs 0: ", divs[0].innerHTML);
console.log("Divs 1: ", divs[1].innerHTML);
console.log("Divs 2: ", divs[2].innerHTML);

for(const div of divs){
    console.log("Divs: ", div.innerHTML);
}


// Agregar un nuevo subtitulo dentro del tag que contiene el id 
// pasado como paremetro al metodo getElementById().
let nuevoTitulo = document.getElementById("hola");
nuevoTitulo.innerHTML = "<h2>¡Hola Mundo!</h2>"

// Crear elemento con el metodo createElement, en este caso un div
// y luego agregar un subtitulo, añadir el hijo creado al elemento padre con 
// el metodo appendChild().
let contenedor = document.createElement("div");
contenedor.innerHTML = "<h2>¡Hola con append child!</h2>";
document.body.appendChild(contenedor);

// Elminando el propio elemento, referenciando al padre
// parrafo.parentNode.removeChild(parrafo);

// Obtener un elemento input por id y asignarle un valor predeterminado.
let inputEmail = document.getElementById("email");
inputEmail.value = "adaradenis@gmail.com";


// Obtener el elemento h4 por id
let h4Saludo = document.getElementById("bienvenida");
// Funcion saludar(), que obtiene el valor del input y muestra en pantalla 
// el saludo concatenando el nombre utilizando templates literales.
const saludar = () => {
    let inputName = document.getElementById("nombre").value;
    h4Saludo.innerHTML = `Hola ${inputName}`;
}

// Funcion para obtener elementos por id pasados como paremtros.
const getById = (id) => {
    let element = document.getElementById(id);
    console.log("Elemento por id: " , element);
    return element;
}
// Ejemplo de uso:
getById("seccion");
getById("hola");

// Setear el atributo disabled al input email.
inputEmail.setAttribute("disabled", "");

// Obtener el elemento padre en base a un id.
let ulPadre = document.getElementById("personas");

let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];

// Crear elementos li, añadir el contenido de las personas al HTML
// y por ultimo añadir estos hijos li al padre ul.
for(const persona of personas){
    let li = document.createElement("li");
    li.innerHTML = persona;
    ulPadre.appendChild(li);
}

// Utilización de templates literales:
let producto = { id: 1,  nombre: "Arroz", precio: 125 };
let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio;
let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $ ${producto.precio}`;

console.log("concatenando: ",concatenado);
console.log("plantilla: ", plantilla);

// Mostrar producto, utilizando template literales.
let createUl = document.createElement("ul");
createUl.innerHTML = `<li>Id: ${producto.id}</li>
                      <li>Nombre: ${producto.nombre}</li>
                      <li>Precio: ${producto.precio}</li>`;

document.body.appendChild(createUl);


// Array de objetos
const productos =   [
                        { id: 1,  nombre: "Arroz", precio: 125 },
                        {  id: 2,  nombre: "Fideo", precio: 70 },
                        {  id: 3,  nombre: "Pan"  , precio: 50},
                        {  id: 4,  nombre: "Flan" , precio: 100}
                    ];
// Crear listado de cada producto con sus respectivas propiedades y valores
// utilizando templates literales. 
for(const producto of productos){
    let ul = document.createElement("ul");
    ul.innerHTML = `<hr/><li>Id: ${producto.id}</li>
                    <li>Nombre: ${producto.nombre}</li>
                    <li>Precio: ${producto.precio}</li>`
    document.body.appendChild(ul);
}