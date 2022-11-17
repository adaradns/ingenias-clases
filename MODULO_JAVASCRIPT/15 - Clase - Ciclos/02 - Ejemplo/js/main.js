// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}


for (let i = 1; i <= 20; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}

for (let i = 1; i <= 10; i++) {
    //Si la variable i es igual 5 interrumpo el for. 
    if(i == 5){
        break;
    }
    alert(i);
}

for (let i = 1; i <= 10; i++) {
    //Si la variable i es 5, no se interpreta la repetición
    if(i == 5){
        continue;
    }
    alert(i);
}

let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}

let repetir = false;
do {
    console.log("¡Solo una vez!");
} while (repetir)

let numero = 0;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));


let num1 = prompt("Ingrese un numero");
let num2 = prompt("Ingrese otro numero");
let operacion = prompt("Ingrese operación: suma, resta, multplicación o división");

while(operacion != "ESC"){
    switch(operacion){
      case "suma":
        let suma = parseInt(num1) + parseInt(num2);
        alert("La suma es: " + suma);
        break;
      case "resta":
        let resta = num1 - num2;
        console.log("La resta es: " + resta);
        break;
      case "multiplicacion":
        let multiplicacion = num1 * num2;
        alert("La multplicacion es: " + multiplicacion);
        break;
      case "division":
        let division = num1 / num2;
        alert("La division es: " + division);
        break;  
      default:
        alert("Algo salio mal...")
        break;
    }

    num1 = prompt("Ingrese un numero");
    num2 = prompt("Ingrese otro numero");
    operacion = prompt("Ingrese operación: suma, resta, multplicación o división (ESC para salir)");
}






