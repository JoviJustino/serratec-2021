/*A catraca do onibus quebrou e a empresa precisa dos dados da viagem. Os dados necessários para a empresa quando a pessoa entra no onibus são as seguintes: Quantas pessoas ja entraram no onibus até o momento; Se a pessoa é pagante ou entra com gratuidade; e o total dos ganho até o momento (Considerando a passagem a R$ 4,40).
*/

const prompt = require('prompt-sync')();

let pagantes = 0;
let total = 0;

let passageiros = Number(prompt('Quantos passageiros até o momento? '));
let totalGratuidade = Number(prompt('Quantos entraram com a gratuidade? '));

pagantes = passageiros - totalGratuidade;

if (pagantes > 0) total = pagantes * 4.4;

console.log('Ate o momento tivemos', passageiros, 'passageiros,', totalGratuidade, 'entraram com a gratuidade e', pagantes, 'foram pagantes.')
console.log('Arrecadado até o momento: R$' + total); 