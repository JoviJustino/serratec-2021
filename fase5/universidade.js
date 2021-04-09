/*Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.

Dia hoje: 10
Número do Boleto: 1234
Dia de pagamento: 11
Desconto na próxima mensalidade? true

*/
const imput = require("prompt-sync")();

//entrada
let dia = imput("Dia de hoje: " );
let nboleto = imput(" numero do boleto: ");
let dpagamento = imput("dia de pagamento: ");
let desconto;

//processamento
if(dia >= 15){
    desconto = false
}else if( dia = 10 || 11 || 12 || 13){
    desconto = true
}

//saida
console.log("dia de hoje " ,dia)
console.log("número do boleto : ", nboleto)
console.log("dia do pagamento : " , dpagamento)
console.log("Desconto na próxima mensalidade? ", desconto)