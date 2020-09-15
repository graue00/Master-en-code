// Primer EJercicio
/*
Crea una aplicación web con JavaScript que reciba 
tres números digitados por el usuario, 
mediante prompts, y muestre en pantalla, 
mediante un alert, la suma de los tres números.
*/
//Declarar las variables
// var A; 
// var B;
// var C;
// var resultado;

// // Declarar los prompts
// A = Number(prompt("Please enter your number A"))
// B = Number(prompt("Please enter your number B"))
// C = Number(prompt("Please enter your number C"))

// resultado = A+B+C
// alert("El resultado es " + resultado)

/*
*/
//Segundo Ejercicio
/*
Crea una aplicación web empleando JavaScript que permita 
a dos usuarios jugar una partida de piedra, papel o tijeras.
Pide al jugador1 y al jugador2 que escriban su elección 
mediante prompts. Compara los valores ingresados y 
muestra en pantalla, mediante un alert o console.log, 
quién fue el jugador ganador.
*/

// Declarar las variables en este caso piedra, papel o tijera

P1 = prompt("Player 1- Choose your option")
P2 = prompt("Player 2- Choose your option")

if (P1 == P2) {
    alert("Tie");
} else {

if (P1 == "Sciccors" && P2 == "Paper") {
    alert("P1 wins")}

if (P1 == "Paper" && P2 == "Sciccors"){
alert("P2 wins")}

if (P1 == "Rock" && P2 == "Paper"){
    alert("P2 wins")}

if (P1 == "Paper" && P2 == "Rock"){
alert("P1 wins")}

if (P1 == "Rock" && P2 == "Sciccors"){
    alert("P1 wins")}

    if (P1 == "Sciccors" && P2 == "Rock"){
alert("P2 wins")}
} 
