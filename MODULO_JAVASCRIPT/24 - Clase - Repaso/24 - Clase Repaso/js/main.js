const JSON_PHOTOS = './data/photos.json';
const divApp = document.getElementById("app");

// Loading
let app;

fetch(JSON_PHOTOS)
.then(response => response.json())
.then(json => showPhotos(json));

function loading() {
    app = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  divApp.style.display = "flex";
}

window.addEventListener("load", loading);

const createCard = (photo) => {
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.innerHTML = `<img src=${photo.thumbnailUrl} alt="${photo.title}-img" />`
    let divContainer = document.createElement("div");
    divContainer.classList.add("container");
    let h4 = document.createElement("h4");
    h4.textContent = photo.title;
    divApp.appendChild(divCard);
    let description = document.createElement("p");
    description.innerText = photo.url;
    divCard.appendChild(divContainer);
    divContainer.appendChild(h4);
    divContainer.appendChild(description);

    return divCard;
}

const showPhotos = (photos) => {
    photos.map(photo => {
        return createCard(photo);
    });    
}