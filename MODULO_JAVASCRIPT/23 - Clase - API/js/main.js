const personajesStarWars = {
    "team": "Star Wars Characters",
    "characters": [
        {
            "name": "Leia Organa",
            "height": "150",
            "mass": "49",
            "hair_color": "brown",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "19BBY",
            "species": [],
            "starships": [],
        }
    ]
}


console.log("Team: ", personajesStarWars.team);
console.log("Team: ", personajesStarWars["team"]);
console.log("Characters: ", personajesStarWars.characters[0].name);

const BASE_URL = 'https://apimocha.com/ingenias-example';
const ENDPOINT_PRODUCTOS = `${BASE_URL}/products`;

// Consumir api productos
fetch(ENDPOINT_PRODUCTOS)
    .then(response => response.json())
    .then(json => showProducts(json));

const showProducts = (products) => {
    console.log(products);
}


const POKE_API = 'https://pokeapi.co/api/v2/pokemon/ditto';

fetch(POKE_API)
    .then(response => response.json())
    .then(data => showPokeApi(data));

const showPokeApi = (pokemon) => {
    console.log(pokemon);
    let divContainerImage = document.getElementById("container-image");
    let h3 = document.getElementById("pokeName");
    h3.innerHTML = pokemon.name;
    console.log(pokemon.name)
    divContainerImage.innerHTML = `<img src=${pokemon.sprites.back_default} alt="${pokemon.name}-img" />`
}



fetch('https://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(json => showCharacters(json.slice(0,20)) );

const showCharacters = (personajes) => {
    console.log(personajes);
    let ul = document.getElementById("personajes");
    for(const personaje of personajes){
        let li = document.createElement("li");
        li.innerHTML = personaje.name;
        ul.appendChild(li);
    }
}