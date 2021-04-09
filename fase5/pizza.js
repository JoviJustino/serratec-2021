/* entrada

 cardapio (pizza 1,2,3,4)

 pedido
 
 procesamento

 verificar se pediu 1 ou mais pizzas

 se pediu uma e for um dos 10 primeiros adicionar o desconto
 loop < 10 
 se pediu mais de 1 pizza pagara o preço normal
 
*/
/* enunciado: construa um programa que mostre o cardapio de pizza tamanho gigante e o desconto da semana que atribui um desconto de 25% para os primeiros  */

  const imput = require("prompt-sync")();

  console.log(" == PIZZARIA ==");
  
  console.log(" *temos hoje o cardapio de pizzas \n 1: portuguesa $60 \n 2: Calabresa $55 \n 3: plamito $60 ");
  console.log(" *desconto da semana, os 10 primeiros pedidos do dia teram 25% de desconto em uma unidade");
  console.log(" *por favor escolha no cardapio o numero do sabor desejado");
  
  let portuguesa = 60
  let calabresa = 55
  let palmito = 60
  let c = 1;
  let total;
  
  do{
      let pizza = imput("digite o numero correspondente ao sabor desejado: ")

      if (pizza ==1  ){
          total = portuguesa - (portuguesa * 0.25);
          console.log("na promoção da semana você foi o pedido de numero " , c , "e recebera o desconto de 25%")
          console.log("final: valor R$" , total);


        } else if (pizza == 2 ){
         total =  calabresa - (calabresa * 0.25);
         console.log("na promoção da semana você foi o pedido de numero " , c , "e recebera o desconto de 25%")
         console.log("final: valor R$" , total);
      
         }else if (pizza == 3 ){
         total = palmito - (palmito * 0.25);
         console.log("na promoção da semana você foi o pedido de numero " , c , "e recebera o desconto de 25%")
         console.log("final: valor R$" , total);
         }
  
     c++
    }while(c <= 10)
   
    
