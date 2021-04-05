//O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.
  
const  prompt = require('prompt-sync')();

const a = Number(prompt('Digite o pimeiro valor: '));
const b = Number(prompt('Digite o segundo valor: '));
const c = Number(prompt('Digite o terceiro valor: '));

const valido1 = (b - c) < a && a < (b + c);
const valido2 = (a - c) < b && b < (a + c);
const valido3 = (a - b) < c && c< (a + b);
const valido = ((b - c) < a && a < (b + c)) && ((a - c) < b && b < (a + c)) && ((a - b) < c && c< (a + b));

console.log(valido)