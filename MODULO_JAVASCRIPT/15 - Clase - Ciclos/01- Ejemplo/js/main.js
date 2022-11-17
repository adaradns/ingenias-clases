// Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado
let num1 = prompt("Ingresar un numero");
let contador = 0;

do{
    let suma = parseInt(num1) + parseInt(contador);
    alert("La suma por cada repetición es: " + suma);
    contador++;
}while(contador < num1)


// // // Pedir un texto mediante prompt, concatenar un valor en en cada repetición, realizando una salida por cada 
// // // resultado, hasta que se ingresa “ESC”.

let texto = prompt("Ingrese un texto, (ingrese la palabra ESC para salir)");

while(texto != "ESC"){
    
    alert("El texto ingresado es: " + texto);
    texto = prompt("Ingresar otro texto, o ESC para salir");

}

// Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.
let num2 = prompt("Ingresar un numero: ");
for(i = 1; i <= num2; i++){
    alert(i + " Hola");
}



