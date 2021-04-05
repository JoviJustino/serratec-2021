  /*O programa “Financeira” irá solicitar que o cliente digite seu nome, empresa e função, além do valor do empréstimo que deseja contratar. Então será calculado 86% do valor desejado como crédito disponível. A resposta ao cliente deve seguir o exemplo abaixo.
Para escrever as mensagens, utilize variáveis com concatenação de strings. O valor será escrito separadamente (no console.log).
*/  
const prompt = require('prompt-sync')();

const horas = Number(prompt('Horas trabalhadas: '));
const valorHora = Number(prompt('Valor da hora: '));
const desconto = Number(prompt('Desconto INSS: '));

const salarioBruto = horas * valorHora;
const salarioLiquido = salarioBruto - desconto;

console.log('Salario bruto: R$ ' + salarioBruto + '\n' +'Valor do desconto do INSS: R$ ' + desconto + '\n' + 'Salario líquido: R$ ' + salarioLiquido)