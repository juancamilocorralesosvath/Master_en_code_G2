function showCards(band){ 
// codigo para la tarjeta
var card = document.createElement('div');
card.className = "card col-4";
// codigo para el contenedor
var cardContainer = document.getElementById("card-container");

cardContainer.appendChild(card);
// codigo para la imagen

var img = document.createElement('img');
img.className = "card-img-top";
img.src = band.img;
card.appendChild(img);
// codigo para el card-body
var cardBody = document.createElement('div');
cardBody.className = "card-body";

// codigo para el titulo
var title = document.createElement('h5');
title.className = 'card-title';
title.innerHTML = band.name;

// codigo de la descripcion
var descripcion = document.createElement('p');
descripcion.className = 'card-text';
descripcion.innerHTML = band.description;


card.appendChild(cardBody);
cardBody.appendChild(title);
cardBody.appendChild(descripcion);
 cardBody.insertAdjacentHTML('beforeend', band.spotify);
}


for(let i = 0; i < bandas.length; i++){ 
 showCards(bandas[i]);
}