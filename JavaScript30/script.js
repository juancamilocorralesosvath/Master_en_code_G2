// el codigo no me funcionaba por una simple y sencilla mayuscula:
// tenia "keycode" en lugar de "keyCode" >:(

function playSound(e) { 

    /* gracias a Eloquent JavaScript ya se que carajo es esta monda, como estoy diciendo document."algo", y estoy diciendo audio[data-key = ] lo que esta pasando es que estoy accediendo al arreglo audio en la key que se pulse mediante el codigo de esa key y el ${} lo unico que hace es volver ese keycode un string.*/
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
    // hago lo mismo que con el audio solo que selecciono los div que tienen la clase key
    const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
    // si no hay audio, hago return, que lo que hace es parar de una la funcion.
    if(!audio) return; 
    // lo que hace el currentTime es que lo devuelve hasta el inicio, porque de o contrario se demora mucho al reproducirse, es para que cuando se le unda otro boton, ese suene inmediatamente.
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}


const keys = document.querySelectorAll(".key");

function removeTransition(e){
    // si la propiedad no es transform, se lo salta. 
    if(e.propertyName !== "transform") return; 
    // el "this" se refiere a la key que estoy tocando
    this.classList.remove("playing");
    
}

// ahora aqui tenemos que ir llendo sobre cada una de las keys, no podemos decir algo como 'keys.addEventListener("transitionend");'
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
