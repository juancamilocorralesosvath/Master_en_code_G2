let btnConvertir = document.getElementById("btn");
let imagen = document.getElementById("img");

let first_click = true;
function conversion(){ 

    if(first_click){ 
     imagen.src = "./assets/guitarristas.gif";
     first_click = false;
     btnConvertir.innerText = "convertir a Milu";
    }else{ 
        imagen.src = "./assets/milu.gif";
        btnConvertir.innerText = "convertir a Humano";
        first_click = true;

    }

  

}