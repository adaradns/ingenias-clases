// -------------------------------
// ARROW FUNCTIONS
// -------------------------------
// ---------------------------------------------------
// Expresion general de una funcion con flecha
// let func = (arg1, arg2, ..., argN) => expression;
// ---------------------------------------------------

const suma  = (a, b) => { return a + b };

// Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const resta = (a, b) =>  a - b ;

console.log(suma(15,20));
console.log(resta(20,5));

// -------------------------------
// Calcular precio 
// -------------------------------

const iva = x => x * 0.21;
let precioProducto  = 500; 
let precioDescuento = 50;  

//Calculo el precioProducto + IVA - precioDescueto
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento); 
console.log("Nuevo precio con descuento : " + nuevoPrecio);

// // -------------------------------------------------------------------------------------------------
// // Queremos saludar de diferentes formas: formal, informal y con confianza a un usuario determinado.
// // -------------------------------------------------------------------------------------------------

let saludar = ( tipoSaludo, nombre, apellido, apodo ) => {
    switch(tipoSaludo){
        case "formal":
            console.log("Buenas tardes Srta. " + nombre + " " + apellido );
            break;
        case "informal":
            console.log("Buenas, como va? " + nombre + " " + apellido);
            break;
        case "confianza":
            console.log("Hola amiga: " + apodo )
            break;
        default:
            console.log("Holaaaaa!");
            break;
    }
}

saludar("formal", "Adara", "Denis", "");


// // -------------------------------
// // El doble de un numero?
// // -------------------------------
const doble = n => n * 2;

console.log(doble(2));

// // -------------------------------------------------------------------------------------
// // Crear un contador que muestre por consola 10 veces un resultado, saltando de 2 en 2.
// // -------------------------------------------------------------------------------------
const contarConSaltos = (n) => {
    let resultado = 0;
    for(let i = 1; i <= 10; i++){
        resultado = i * n;
        console.log(resultado);
    }
}
