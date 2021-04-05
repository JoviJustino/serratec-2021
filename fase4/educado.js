//O programa "Educado" irá perguntar o seu nome, e também como você gostaria de ser chamado. Depois disso, uma saudação para você aparece na tela.

  const imput = require("prompt-sync")();

  var nome = imput("Qual seu nome malandrão? :" );
  console.log ("Seja bem vindo ", nome);

  var nome2 = imput("como você gostaria de ser chamado? " )
  console.log(" Saudações " , nome2 , "seja então muito bem vindo ao meu site. ")