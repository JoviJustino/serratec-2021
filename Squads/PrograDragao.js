/**
 *1) //Crie um jogo em que você vai ter que escolher entre 3 armas para enfrentar o grande dragão malvado "Progradragão". As armas são uma espada, uma faca e um sapato. Só uma dessas opções que vai garantir a vitória contra o dragão Antes de começar o jogo, o mesmo vai pedir o nome do herói, acrescente o nome do herói nos textos do jogo.
 */

 const prompt = require("prompt-sync")();


 var nome = prompt("Qual o nome do seu herói? ");
 
 console.log("Bravo herói", nome, "o grande e poderoso dragão 'Programação' esta vindo para destruir o mundo, e só você pode nos salvar.");
 
 var arma = prompt("Escolha uma das seguinte armas: 'Sapato', 'Espada', ou 'Faca': ");
 
 if (arma == "Espada" || "espada")
     console.log("Parabéns", nome, ", você ganhou derrotou o dragão!!!");
 else console.log("Que pena, o dragão te fez de churrasquinho :c"); 
 