/* promoção da radio 93:
os primeiros 5 ouvintes que ligarem ganham um boné e camiseta da radio
*/  
  
  const ler = require("prompt-sync")();
  console.log("== Pizzaria ==")

  const LIMITE = 5
  var ligacao
  var total = 1
  ligacao = ler("qual seu pedido? ")
  console.log(" O seu pedido", ligacao," Está sendo preparado")
  while( total <= 5) {
  total++
  ligacao = ler("seu pedido" , )
  console.log("nome do ouvinte ", ligacao)

  } 
  console.log("os 5 ouvintes da foram atendidos, fique ligado na Rádio Tupi para não perder os próximos sorteios")