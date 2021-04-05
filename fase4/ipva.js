const ler = require("prompt-sync")();

var placa = ler("digite a placa do carro ");
placa = Number(placa);




var final = placa % 10;

console.log("seu carro é final" , final, "confira a tabela de pagamentos" );
console.log("final 1, 2, 3, 4, e 5 - pagamento em janeiro");
console.log("fianl 6, 7, 8,9 e 0 - pagamentos em fevereiro");