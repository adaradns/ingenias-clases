// 2) Operaciones matemáticas
// Generar una página que contenga, al menos, los siguientes elementos:
// - Dos campos input que sólo admitan números enteros.
// - Botones: Suma, Resta, Multiplicación, División, Raíz Cuadrada(del primero), Seno
//     (del primero), Coseno(del primero), Logaritmo natural(del primero).
// Al presionar sobre cada botón se deberá validar el número y, si es válido, informar el
// resultado de la operación correspondiente.En caso de no ser válido, informar al
// usuario.

let resultado = document.getElementById("resultado");
let buttons = document.getElementsByTagName("button");

const obtenerOperaciones = (buttons) => {
    for (const button of buttons) {
        calcular(button.id);
    }
}

function calcular(operacion) {
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    let buttonById = document.getElementById(operacion);

    switch (operacion) {
        case 'suma':
            buttonById.addEventListener('click', () => {
                let suma = parseInt(numero1.value) + parseInt(numero2.value);
                resultado.innerHTML = 'El resultado es: ' + suma;
            })
            break;
        case 'resta':
            buttonById.addEventListener('click', () => {
                let resta = parseInt(numero1.value) - parseInt(numero2.value);
                resultado.innerHTML = 'El resultado es: ' + resta;
            })
            break;
        case 'multiplicacion':
            buttonById.addEventListener('click', () => {
                let multiplicacion = parseInt(numero1.value) * parseInt(numero2.value);
                resultado.innerHTML = 'El resultado es: ' + multiplicacion;
            })
            break;
        case 'division':
            buttonById.addEventListener('click', () => {
                let division = parseInt(numero1.value) / parseInt(numero2.value);
                resultado.innerHTML = 'El resultado es: ' + division;
            })            
            break;
        case 'raizCuadrada':
            buttonById.addEventListener('click', () => {
                let raizCuadrada = Math.pow(numero1.value, numero2.value);
                resultado.innerHTML = 'El resultado es: ' + raizCuadrada;
            })    
            break;
        case 'senoPrimero':
            buttonById.addEventListener('click', () => {
                let senoDelPrimero = Math.sin(numero1.value);
                resultado.innerHTML = 'El resultado es: ' + senoDelPrimero;
            })    
            break;
        case 'consenoPrimero':
            buttonById.addEventListener('click', () => {
                let consenoDelPrimero = Math.cos(numero1);
                resultado.innerHTML = 'El resultado es: ' + consenoDelPrimero;
            })
            break;
        default:
            buttonById.addEventListener('click', () => {
                let logaritmoNatural = Math.log(numero1);
                resultado.innerHTML = 'El resultado es: ' + logaritmoNatural;
            })            
            break;

    }
}

obtenerOperaciones(buttons);