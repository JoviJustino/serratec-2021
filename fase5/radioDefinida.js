const ler = require("prompt-sync")();

//sintaxe
//para(inicio ; condicao; incremento) instrução;
//variavel de controle
//controla a repetição
//finalidade == inicio e fim das interações
for(let i = 1; i <= 5; i++){
    let nome = ler("ouvinte: ");
    console.log("Parabens ", nome, "ganhou um socão")
}
console.log("Promoção encerrada")