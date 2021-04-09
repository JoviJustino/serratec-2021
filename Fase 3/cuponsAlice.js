// É muito comum vermos promoções em mercados e compras relacionadas ao valor das compras. Se a Alice fez suas compras em um shopping cuja era promoção que a cada R $ 190,00 em compras ela ganhava um cupom, quantos cupons ela ganhou?

const  compraAlice  =  1890 ;
const  promo  =  190 ;

const  cupons  =  compraAlice  /  promo ;
console . log ( `Na sua compra de R ${ compraAlice } você ganha ${ Math . round ( cupons ) } cupons.` )