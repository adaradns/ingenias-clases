//--------------------
// Funciones anonimas 
//--------------------
const suma  = function (a, b) { return a + b };
const resta = function (a, b) { return a - b };

console.log(suma(15,20));
console.log(resta(15,5));

let nombreUsuario = prompt("Ingrese su nombre de usuario");
const saludo = function (nombre) { return "Hola " + nombre };
saludo(nombreUsuario);


// //-------------------------------------------------------------------------------------------------
// // Funciones anonimas conviene aplicarlas cuando se pasa una función como argumento a otra función.
// //-------------------------------------------------------------------------------------------------

let num1 = prompt("Ingrese un numero para calcular el cubo");
const cubo = function(funcionCubo, n) { 
    let resultado = 0;
    resultado = funcionCubo(n);
    return resultado;
}

const calcularCubo = function(n) {
    return n * n * n;
}


let resultadoCubo = cubo(calcularCubo, num1);
console.log("El cubo de " + num1 + " es: " + resultadoCubo);

//-------------------------------------------------------------------------------------------------
// Como podemos hacer el doble de un numero? 
//------------------------------------------------------------------------------------------------- 
const doble = function (n) { return n * 2 }
console.log(doble(3));