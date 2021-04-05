/*No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. */
  

const prompt = require('prompt-sync')();

console.log(' Eleições 2020 ');

const idade = Number(prompt('Digite sua idade: '));

const maior = idade >= 16;

console.log('Você já pode votar: '+ maior);