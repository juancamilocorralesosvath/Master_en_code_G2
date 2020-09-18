// for(var i = 0; i <= 10; i++){ 
//   console.log(i);
// }
/* dato super interesante: un desbordamiento de memoria en ingles se dice stack overflow, y de ahi viene el nombre de la pagina!! uuuu! */

// diferencia entre =, == y === :

// = se usa para asignar valores a las variables.
// var unaVariableCualquiera = 100;

// == compara dos valores pero lo hace sin comparar el tipo de valores, por lo que en este ejemplo, imprimira que 100 y la cadena "100" son iguales (true):
// console.log(100 == "100");

// === hace una comparacion estricta, es decir que tambien revisa el tipo de datos que se estan comparando, por eso aqui marcara que 100 es distinto de la cadena "100" (false):
// console.log(100 === "100");

var queRico = [
    "Enchiladas",
     "Taco",
     "Tamal",
     "Pozole",
     "Barbacoa",
     "Guacamole",
     "Quesadillas de Papa"
];

for(var i = 0; i < queRico.length; i++){
    console.log(queRico[i]);
}

for(var i = 0; i < queRico.length; i++){

    if(queRico[i] === "Pozole" || queRico[i] === "Barbacoa"){console.log(queRico[i]);}
    
}

for(var i = 0; i < queRico.length; i++){

    if(i%2 !== 0){console.log(queRico[i]);}
    
}

for(var i = 0; i < queRico.length; i++){

    if(i%2 == 0){console.log(queRico[i]);}
    
}

