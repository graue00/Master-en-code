// Primera Parte: pedir a usuarios que ingresen su opción

var opcion1 
var opcion2
opcion1 = prompt("Jugador 1 ingresa tu opción");
opcion2 = prompt("Jugador 2 ingresa tu opción");

//Segunda Parte: AL tener opción determinar que usuario gana
if (opcion1 === opcion2) {
    alert("Empate")
    
} else if(opcion1 === "Piedra") {
  if(opcion2 === "Tijeras") { 
      alert("Jugador uno gana")
    }   
    if(opcion2 === "Papel") { 
        alert("Jugador dos gana")
    }
} else if(opcion1 === "Tijeras") {
    if(opcion2 === "Piedra") { 
        alert("Jugador uno gana")
      }   
      if(opcion2 === "Papel") { 
          alert("Jugador dos gana")
      }
} else 










//Tercera Parte: Mostrar usuario Ganador

