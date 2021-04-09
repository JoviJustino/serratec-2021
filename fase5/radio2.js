  
const ler = require("prompt-sync")();
let senhaCerta;

 do{
     let alo = ler("Ligando para você" )
     senhaCerta = alo == "93show";
 }while(!senhaCerta);
 console.log("Parabens! ganhou camiseta!")