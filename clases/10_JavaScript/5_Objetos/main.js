/* 
Objetos 
son un tipo de dato
nos permiten almacenar cualquier tipo de dato
son un conjunto de claves y valores llamados propiedades. */

/* Ojo: en javascript una lista es lo mismo que un arreglo, pero para nada es lo mismo que un objeto. */

var miObjeto = { 
    clave: "valor" //la combinacion de una clave y un valor se llama propiedad
}
//este es un "Objeto Literal", que es cuando asignamos las claves y los valores
var maui = { 
  nombre: 'Mauricio Saavedra', 
  edad: 24,
  esta_vivo: true,
  peliculasFavoritas: ['phantom thread', 'shawshank redemption', 'bernardo y bianca', 'weekend at bernies'], 
  videojuegosFavoritos: ['super Mario 64', 'Bioshock', 'Silent Hill', 'Resident evil'], 
  42: 'la respuesta idiota', 
}

console.log(maui);

console.log(maui.peliculasFavoritas[0]);

for(var i = 0; i < maui.videojuegosFavoritos.length; i++){
  var videojuego = maui.videojuegosFavoritos[i];
  console.log(videojuego);
}

/* los objetos nos permiten manejar todo lo que hemos visto hasta el momento. */


/* de esta manera podemos acceder a claves que son numericas (lo cual no es muy recomendado) */
console.log(maui['42']);

var persona = { 
    nombre: "Gera", 
    apellido: "Ludovico", 
    edad: 99, 
    hobbies: ['chopper', 'ir al antro', 'ver telenovelas', 'DJ', 'terraplanista', 'piloto comercial', 'trabaja en rappi'],
    nacionalidad: 'Austro-Hungaro', 
    residencia: 'Mordor', 
    // aunque podemos acceder a las propiedades de un objeto mediante el nombre del objeto seguido del punto seguido de la clave (persona.algo)
    quienSoy: function(){ 
        console.log("Hola! mi nombre es"+ persona.nombre + " "+ persona.apellido);
    },
    // es mucho mas comun acceder a propiedades del objeto DENTRO del mismo objeto, utilizando la palabra reservada "this":
    capturarPokemones: function (){ 
        return this.apellido + " de " + this.edad + " anos esta atrapando pokemones!"
    },
}

persona.hola = "Hola"
console.log(persona);
/*  en javascript todo se considera como un objeto (?) */