// Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R $ 345,00 por todos os jogos e R $ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e 10 vezes com 1,5% de juros sobre o total da compra.

const  jogos  =  345.00 ;
const  vdg  =  1545 ;

const  total  =  jogos  +  vdg ;

const  x3  =  total  /  3 ;
const  x5  =  total  /  5 ;
const  x10  =  ( total  /  10 ) *  1.015 ;

console . log ( `A sua compra com o total de ${ total } parcelada fica: \ n3x: ${ x3 } \ n5x: ${ x5 } \ n10x: ${ x10 } ` )