const ler = require("prompt-sync")();

const LIMITE = 3;

var cliente;
var total = 1;
cliente = ler("qual o final do cpf ? ")
while (total < LIMITE) {
    total ++;
   cliente = ler("qual final do cpf? ")
    console.log("clientes na loja agora:", total) 

}
console.log("loja lotada")