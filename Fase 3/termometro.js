//O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit.
const prompt = require("prompt-sync")();

  var celsius = prompt ("digite uma temperatura em graus celsius")

  //teste
  console.log(celsius);
  //1 grau celsius = 33,8 fahrenhelt

var fahr = celsius * 1.8 + 32;
//teste 2
console.log("a temperatura em fahrenhelt é " + fahr)