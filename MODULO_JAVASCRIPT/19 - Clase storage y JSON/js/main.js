console.log("---------------------------------------------------------------");
console.log("-------------- 💻 CLASE 19 - STORAGE y JSON 💻 ---------------");
console.log("---------------------------------------------------------------");

console.log("Localstorage: ", localStorage);
console.log("typeof de Localstorage: ", typeof localStorage);

//                     CLAVE        VALOR
localStorage.setItem("modulo" , "JavaScript");
localStorage.setItem("cantidadAlumnas", 30);
localStorage.setItem("enCurso", true);

let modulo = localStorage.getItem("modulo");
let cantidadCursantes = localStorage.getItem("cantidadAlumnas");
let estaEnCurso = localStorage.getItem("enCurso");

console.log(typeof modulo); 
console.log(typeof cantidadCursantes);
console.log(typeof estaEnCurso);


console.log("SessionStorage: ", sessionStorage);
console.log("typeof de SessionStorage: ", typeof sessionStorage);


sessionStorage.setItem('seleccionados', [1,2,3]);
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'info@email.com');

let lista   =  sessionStorage.getItem('seleccionados').split(",");
let bandera = (sessionStorage.getItem('esValido') == 'true');
let email   =  sessionStorage.getItem('email');

console.log("typeof Lista: ", typeof lista); // <- Object
console.log("typeof Bandera: ", typeof bandera); // <- bool
console.log("typeof Email: ", typeof email); //<- string


// No recomendable utilizar la notación de objetos para acceder 
// o setear valores al storage.
//Guarda una clave
localStorage.numeroPrueba = 5;

//Leer una clave
alert( localStorage.numeroPrueba ); // 5

let clave = 'toString';	 //toString método reservado	
localStorage[clave] = "6"; //No se guarda este dato

//Ciclo para recorrer las claves almacenadas en el objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}

//Borrar item del localStorage
localStorage.removeItem("numeroPrueba");
sessionStorage.removeItem("esValido");

// borrar todos los datos de sessionStorage
// sessionStorage.clear();
localStorage.clear();

const multiplicar  = (a, b) => a * b;
const guardarLocal = (clave, valor) => { 
    localStorage.setItem(clave, valor);
};

// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición calculamos el número ingresado por el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    guardarLocal(i, multiplicar( parseInt(ingresarNumero),i) );
}

console.log(typeof localStorage.getItem("10"));

const miObjeto = {id: 1, producto: "Arroz"};
let enJson = JSON.stringify(miObjeto);

console.log("miObjeto en JSON: ", enJson);
console.log(typeof miObjeto); // object
console.log(typeof enJson);    // string

localStorage.setItem("p" , enJson);


const enJSON    = '{"id":2,"producto":"Arroz"}';
const producto1 = JSON.parse(enJSON);

console.log(enJSON);     
console.log(producto1);  
console.log(producto1.producto); 


console.log("localStorage.getItem: ", localStorage.getItem("p"))
const producto2 = JSON.parse(localStorage.getItem("p"));
console.log(producto2);

const productos = [
                    {  id: 1,  producto: "Arroz", precio: 125 },
                    {  id: 2,  producto: "Fideo", precio: 70 },
                    {  id: 3,  producto: "Pan"  , precio: 50},
                    {  id: 4,  producto: "Flan" , precio: 100}
                  ];

const guardarLocalStorage = (clave, valor) => { localStorage.setItem(clave, valor) };

//Almacenar producto por producto
for (const producto of productos) {
    guardarLocalStorage(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocalStorage("listaProductos", JSON.stringify(productos));


class Producto {
    constructor(obj) {
        this.nombre  = obj.producto.toUpperCase();
        this.precio  = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
        console.log(this.precio)
    }
}

//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
console.log("Almacenados", almacenados);
const nuevoArrayProductos = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados){
    // console.log("objeto: ",objeto);
    nuevoArrayProductos.push(new Producto(objeto));
}
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of nuevoArrayProductos){
   producto.sumaIva();
}


