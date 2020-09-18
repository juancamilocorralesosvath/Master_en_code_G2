// let total = 0, count = 1;
// while(count <= 10){
//     total += count;
//     count++;
// }
// console.log(total);

// hmm es decir que "sum" es una funcion que el 
// creo cierto?
// console.log(sum(Range(1, 10)));

// console.log("this is the first line\nAnd this is the second\nAnd this is the FUCK YOU");
// console.log("A newline character is written like \"\\n\".");

// console.log("A new line character is written like \"\\n\".");

/* la verdad, no entendi como es que se hace para hacer eso, es decir, como logran imprimir el "\n" */

// console.log(typeof 1);
// console.log("Z" > "a");
// console.log(NaN == NaN);

// console.log("" === false);
// console.log(Math.max(1, 2, 3, 100, 500, 0.5));

// An example on how to use the Number.isNaN function

/* let theNumber = Number(prompt("pick a number"));
if(!Number.isNaN(theNumber)){ 
  alert("your number is the square root of "+ theNumber * theNumber);
}else{ 
    alert("bro, give a number!");
} */

// facilisimo papi xD
/* let triangleShape = "";
for(let i = 0; i < 7; i++){ 
  triangleShape += "#";
  console.log(triangleShape);
} */

// a ver que tal es el del chessboard

// hmm, no se como hacerlo asi como lo tienen en el libro, como yo lo hago con pares e impares, el patron me sale igual, no intercalado

let chessboard = " ";
let cont = 0;
for(let i = 0; i<64; i++){
  
  if(cont % 8 === 0){ 
     chessboard+="\n";
  }
  if(i%2 === 0){ 
     chessboard+= "#";
  }else{ 
    chessboard+= " ";
  }
  cont++;
}

console.log(chessboard);
