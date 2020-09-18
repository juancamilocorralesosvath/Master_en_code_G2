// suma de tres numeros

var num1, num2, num3;

num1 = Number(prompt("esribe el primer numero"));
num2 = Number(prompt("esribe el segundo numero"));
num3 = Number(prompt("esribe el tercer numero"));

function sum(x, y, z){ 
    return x + y +z;
}

console.log(sum(num1, num2, num3));

// piedra, papel o tijeras

var player1, player2;

player1 = prompt(" jugador 1, escribe 'piedra', 'papel', o 'tijera' (por favor, escribelo bien...no seas pendejo)");
player2 = prompt("juagdor 2, escribe 'piedra', 'papel', o 'tijera' (por favor, escribelo bien...no seas pendejo)");

if(player1 === "piedra" && player2 === "piedra"){ 
  console.log("EMPATE!!!");
} else if(player1 === "piedra" && player2 === "papel"){ 
  console.log("player 2... WINS!!!");
}else if(player1 === "piedra" && player2 === "tijeras"){ 
    console.log("player 1... WINS!!!");
  } else if(player1 === "papel" && player2 === "papel"){ 
    console.log("EMPATE!!!");
  } else if(player1 === "papel" && player2 === "tijeras"){ 
    console.log("player 2... WINS!!!");
  }else if(player1 === "papel" && player2 === "piedra"){ 
      console.log("player 1... WINS!!!");
    } else if(player1 === "tijeras" && player2 === "tijeras"){ 
    console.log("EMPATE!!!");
  } else if(player1 === "tijeras" && player2 === "piedra"){ 
    console.log("player 2... WINS!!!");
  }else if(player1 === "tijeras" && player2 === "papel"){ 
      console.log("player 1... WINS!!!");
    } else{ 
        console.log("no te dije que lo escribieras bien?")
    }

// cual es el mayor de tres numeros

var numUno, numDos, numTres, theBiggest;

numUno = Number(prompt("esribe el primer numero"));
numDos = Number(prompt("esribe el segundo numero"));
numTres = Number(prompt("esribe el tercer numero"));

function bigger(x, y, z) {

  if(x > y && x > z){ 
    theBiggest = x;
  } else if(y > x && y > z){ 
    theBiggest = y;
  } else if(z > x && z > y){ 
    theBiggest = z;
  }
}

bigger(numUno, numDos, numTres);

alert("el mayor numero de los que ingresaste es: "+ theBiggest);

// MALIIIII!!!


