//Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles
const imput = require("prompt-sync")(); 


var n1 = Number( imput("digita o numero ai doido: "));
var n2 = Number(imput("digita outro agora doidão: "));
console.log("soma", n1+n2 , " \n subtração", n1-n2, " \n multiplicação", n1*n2, " \n divisão" , n1/n2 );