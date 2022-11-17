console.log("-------------------------------------------------------");
console.log("-------------- 👩‍💻 CLASE 20 - DOM 👩‍💻 ------------------");
console.log("-------------------------------------------------------"); 


console.dir(document);
console.dir(document.head);
console.dir(document.body);


let headerId = document.querySelector("#navbar");
console.log("headerId: ",headerId);

let header = document.querySelector("header");
console.log(header);

let h1 = document.querySelector("h1");
console.dir(h1);
console.log("h1: ", h1);
console.log("typeof h1: ", typeof h1);
h1.innerText = "Otro titulo";
console.log(h1.textContent);
h1.setAttribute("id", "idH1");


let h3ByClassName = document.querySelector(".subtitle");
console.log("h3ByClassName: ", h3ByClassName);


h1.style.color = "red";

let parrafo = document.querySelector("p");
console.log(parrafo.textContent);

parrafo.innerText = "Hola mundo!";
console.log(parrafo.textContent);
let navbar = document.querySelector("nav");
navbar.style.backgroundColor = "pink";