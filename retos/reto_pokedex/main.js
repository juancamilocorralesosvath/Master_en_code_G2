/* Reto Módulo 2

Se te otorgará un JSON con los primeros 151 Pokémons
Desplegar cada uno de ellos
El sitio debe de ser responsivo para distintos tipos de pantalla (Debes de utilizar Bootstrap)
Debes de combinar Bootstrap + tu propio CSS
Utiliza componentes animados
Si das click a la imagen debes de mostrar la imagen en un tamaño superior en un modal (Puedes usar el componente de Bootstrap)
SOLAMENTE PUEDES USAR JS (Solamente puedes utilizar jQuery para las animaciones de Bootstrap
Agregar animaciones a las tarjetas (:hover)


Extra

Usa un color que corresponda a el tipo de Pokémon.
En el Modal despliega habilidades, tipos y ataques.
Un buscador de Pokémon
 */


function createCards(pokemon){
   // bueno, hacemos el boton que accionara el modal, dentro de este boton va la card que ya hicimos.
   var btnModal = document.createElement('button');
   btnModal.className = "btn";
   btnModal.dataset.toggle = "modal";
   btnModal.dataset.target = "#"+pokemon.name;

   // ahora, el modal como tal

   var divModal = document.createElement('div');
   divModal.className = "modal fade";
   divModal.id = pokemon.name;
   // bueno, que verguenza, me demore un resto no mas para saber que lo de ponerle un atributo aria era con la funcion setAttribute()
   divModal.setAttribute("aria-hidden", true);

   // ahora las diferentes partes del modal
   var modalDialog = document.createElement('div');
   modalDialog.className = "modal-dialog";
   var modalContent = document.createElement('div');
   modalContent.className = "modal-content";
   var modalHeader = document.createElement('div');
   modalHeader.className = "modal-header";
   var modalTitle = document.createElement('h5');
   modalTitle.className = "modal-title";
   var closeBtn = document.createElement('button');
   closeBtn.className = "close";
   closeBtn.dataset.dismiss= "modal";
   closeBtn.setAttribute("aria-label", "Close");
   // ojo, falta terminar el proceso del modal.


   // hacemos la card
   var card = document.createElement('div');
   card.className = "card col-lg-3 col-md-4 col-sm-6 col-12";
   
   var divCard = document.getElementById('container');
   // indexamos la card al btn, y el btn al contenedor
   btnModal.appendChild(card);
   divCard.appendChild(btnModal);
   var myDiv = document.createElement('div');
   myDiv.className = "myDiv";
   card.appendChild(myDiv);
   
   var pokeimg = pokemon.art_url;
   var img = document.createElement('img');
   img.className = "card-img-top";
   img.src = pokeimg;
   // anexamos la imagen dentro de su correspondiente div
   myDiv.appendChild(img);
   
   var subtitle = document.createElement('h6');
   subtitle.className = "card-subtitle mb-2 text-muted";
   subtitle.innerHTML = "N." + pokemon.pkdx_id;
   // anexamos el subtitulito que va debajo de la imagen, indicando el numero de pokemon
   card.appendChild(subtitle);
   
   var divTextsAndButtons = document.createElement('div');
   divTextsAndButtons.className = "card-body";
   // anexamos el div donde va el nombre del pokemon y los "botones" que indicaran el tipo de pokemon
   card.appendChild(divTextsAndButtons);
   
   var pokeName = document.createElement('h2');
   pokeName.className = "card-title";
   pokeName.innerHTML = pokemon.name;
   
   // anexamos el nombre del pokemon
   divTextsAndButtons.appendChild(pokeName);
   
   
   // hacemos los botones, teniendo en cuenta el tipo de pokemon!
   
   for(var p = 0; p <= pokemon.types.length; p++){ 
      
      var type = pokemon.types[p];
      var btn = document.createElement('button');
      // 1
     if(type === "normal"){ 
   
      btn.className = "btn  btn-sm normal";
      btn.innerText = "normal";
      divTextsAndButtons.appendChild(btn);
      // 2
     }else if(type === "fire"){ 
   
      btn.className = "btn  btn-sm fire";
      btn.innerText = "fire";
      divTextsAndButtons.appendChild(btn);
      // 3
     }else if(type === "fighting"){ 
   
      btn.className = "btn  btn-sm fighting";
      btn.innerText = "fighting";
      divTextsAndButtons.appendChild(btn);
      // 4
     }else if(type === "water"){ 
   
      btn.className = "btn  btn-sm water";
      btn.innerText = "water";
      divTextsAndButtons.appendChild(btn);
      // 5
     }else if(type === "flying"){ 
   
      btn.className = "btn  btn-sm flying";
      btn.innerText = "flying";
      divTextsAndButtons.appendChild(btn);
      // 6
     }else if(type === "grass"){ 
   
      btn.className = "btn  btn-sm grass";
      btn.innerText = "grass";
      divTextsAndButtons.appendChild(btn);
      // 7
     }else if(type === "poison"){ 
   
      btn.className = "btn  btn-sm poison";
      btn.innerText = "poison";
      divTextsAndButtons.appendChild(btn);
      // 8
     }else if(type === "electric"){ 
   
      btn.className = "btn  btn-sm electric";
      btn.innerText = "electric";
      divTextsAndButtons.appendChild(btn);
      // 9
     }else if(type === "ground"){ 
   
      btn.className = "btn  btn-sm ground";
      btn.innerText = "ground";
      divTextsAndButtons.appendChild(btn);
      // 10
     }else if(type === "psychic"){ 
   
      btn.className = "btn  btn-sm psychic";
      btn.innerText = "psychic";
      divTextsAndButtons.appendChild(btn);
      // 11
     }else if(type === "rock"){ 
   
      btn.className = "btn  btn-sm rock";
      btn.innerText = "rock";
      divTextsAndButtons.appendChild(btn);
      // 12
     }else if(type === "ice"){ 
   
      btn.className = "btn  btn-sm ice";
      btn.innerText = "ice";
      divTextsAndButtons.appendChild(btn);
      // 13
     }else if(type === "bug"){ 
   
      btn.className = "btn  btn-sm bug";
      btn.innerText = "bug";
      divTextsAndButtons.appendChild(btn);
      // 14
     }else if(type === "dragon"){ 
   
      btn.className = "btn  btn-sm dragon";
      btn.innerText = "dragon";
      divTextsAndButtons.appendChild(btn);
      // 15
     }else if(type === "ghost"){ 
   
      btn.className = "btn  btn-sm ghost";
      btn.innerText = "ghost";
      divTextsAndButtons.appendChild(btn);
      // 16
     }else if(type === "dark"){ 
   
      btn.className = "btn  btn-sm dark";
      btn.innerText = "dark";
      divTextsAndButtons.appendChild(btn);
      // 17
     }else if(type === "steel"){ 
   
      btn.className = "btn  btn-sm steel";
      btn.innerText = "steel";
      divTextsAndButtons.appendChild(btn);
      // 18
     }else if(type === "fairy"){ 
   
      btn.className = "btn  btn-sm fairy";
      btn.innerText = "fairy";
      divTextsAndButtons.appendChild(btn);
      // 19
     }else if(type === "fire"){ 
   
      btn.className = "btn  btn-sm fire";
      btn.innerText = "fire";
      divTextsAndButtons.appendChild(btn);
      // 20
     }else if(type === undefined){ 
      break;
     }
   }
   
   }

   for(var i = 0; i < pokemons.length; i++) { 
      createCards(pokemons[i]);
   }
   
   