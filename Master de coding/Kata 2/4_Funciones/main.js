// //Estamos declarando a la función
// function myFunction() {
//     console.log("MyFunction");
//     return "Master en Coding";
// }

// //Estamos invocando a la función
// //myFunction();

// function transformaMayus(texto) {
// var resultado = texto.toUpperCase ();
// return resultado; 
// }

// var nombre = "Gera";
// var x = transformaMayus(nombre);
// console.log(x);

// //siempre usa Camel Case
// //Usa nombre descriptivos

// /*Ejercicio de fahrenheit a celsius*/

// function fahrenheitToCelsius(f,city) {
// var celsius = (f - 32) / 1.8;
// var resultado = "En " + city + " la temperatura es " + celsius + "grados" 
// return resultados
// }

// console.log(fahrenheitToCelsius(90, "Queretaro"))
// console.log(fahrenheitToCelsius(80, "Monterrey"))
// console.log(fahrenheitToCelsius(110, "Hermosillo"));

// Scope => Contexto de ejecución por 
// lo que se puede tener diferentes valores dentro de 
// las variables que están dentro del bloque de código 
// o sea dentro de {}

//Scope Chain

// var fruta = "Kiwi"; //Variable global 

// function comer () {
//     var fruta = "Piña";
//     return "Estoy comiendo " + fruta;
// }

// function lavar () {
//     var fruta = "Sandía";
//     if (true) {
//     var fruta = "Moras";
// return "Estoy lavando una " + fruta;
// }

// }

// console.log(fruta)
// console.log (comer ())
// console.log(lavar())

// a) Crea una función llamada sum que reciba dos parametros "a" y "b" y regrese la suma de ambos números. Recuerda que para devolver el valor de una función se utiliza la palabra reservada return
// b) Crea una función llamada subs que reste dos parametros "a" y "b" y regrese su resultado. Recuerda que para devolver el valor de una función se utiliza la palabra reservada return
// c) Crea una función que se llame mayorDeEdad, reciba una edad como parametro y regrese si el usuario es "Mayor de edad" o es "Menor de edad"
// d) Escribe una función llamada evaluate que reciba como parámetro un número retorne lo siguiente:
// "Positivo" si el número es positivo.
// "Negativo" si el número es negativo.
// "Cero" si el número es cero.


function sum (a,b) {
var suma = (a + b);
var a = 3
return suma;
}
console.log(sum(3,4))