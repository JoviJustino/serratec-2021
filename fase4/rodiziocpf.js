/*A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares.*/

  const prompt = require("prompt-sync")();

  const dia = Number( prompt("qual o dia de hoje? "));
  const cpf = Number( prompt("qual final do cpf ? "));

  const autorizacao = dia %2 == cpf % 2;
  console.log('Autorizado a entrar na loja? ' + autorizacao);