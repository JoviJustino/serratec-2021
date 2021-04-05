



   
  const ler = require("prompt-sync")();
   //entradas
   var mes = ler ("mês do seu aniversario: ")
   var dia = ler("Dia do aniversario: " )

   //processamento
   //21/01 a 19/02

   
  var inicio = mes ==1 && dia >= 21
  var fim = mes ==2 && dia <= 19;


  var inteligente = inicio , fim;
//saidas
console.log("você é inteligente? " ,inteligente)