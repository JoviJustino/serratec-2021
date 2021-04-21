const prompt = require("prompt-sync")();

let pacote1 = 'Niflheim - Dos 9 Reinos';
let pacote2 = 'Helheim - Dos 9 Reinos';
let pacote3 = 'Asgard - Dos 9 Reinos';

const curiosidadeHelheim = 'Pacote de número 2 para:\n Helheim, o domicílio dos mortos. Encontra-se abaixo da terceira raiz de Yggdrasil, perto de Hvergelmir e de Nastrond. \nhospedagem: garanto que você não ira dormir.';

const curiosidadeNiflheim = 'Pacote de número 1 para :\nExcursão em Niflheim, Em alguns trechos da mitologia nórdica é dito que as raízes mais profundas da árvore Yggdrasil estão enterradas nesta região. \nhospedagem: com certeza na boca do dragão chamado Nidhogg. se não morrer de frio antes, é claro';

const curiosidadeAsgard = 'Pacote de número 3 para:\nExcursão a Asgard , mundo separado do reino dos mortais \n hospedagem: Castelo Godheim, Asgard era, originalmente, conhecido como Godheim (o repouso dos deuses), pois os primeiros investigadores da mitologia confundiram o nome do mundo dos deuses com o seu castelo mais importante.';

console.log(" == BEM VINDO EXPRESSO BAIFROST ==")

console.log('Escolha um pacote e grite bem alto -Heimdall, ABRA A BAIFROST!!:\n1 - ' + pacote1 + '\n2 - ' + pacote2 + '\n3 - ' + pacote3)
//const resposta = prompt(' entre 1 2 ou 3: ');

while (true){
 const resposta = prompt(' escolha entre 1 2 ou 3: ')

 if (resposta == '1') {
    console.log(curiosidadeNiflheim);
    console.log('Valor total da viagem: R$5000,90\n Formas de pagamento: em ouro.') 
    break
}else if (resposta == '2') {
    console.log(curiosidadeHelheim)
    break
}else if(resposta == '3') {
    console.log(curiosidadeAsgard)
    console.log('Valor total da viagem: R$100000000,22\nFormas de pagamento: em ouro.')
    break
}else console.log('Heimdall não conseguiu te ouvir, grite mais alto!')
}
