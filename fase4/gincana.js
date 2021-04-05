//Na gincana de arrecadação de alimentos, as equipes A e B têm uma semana para formar uma pilha com as doações. Sendo que a empresa irá dobrar a quantidade de quilos de feijão arrecadados. Ganha um ponto extra a equipe cuja quantidade de pacotes permitir a montagem de kits com 3 alimentos. O programa “Gincana” irá apurar as quantidades recolhidas e exibir o nome da equipe vencedora.
  

const prompt = require('prompt-sync')();

let Afeijao = Number(prompt('Quilos de feijão da equipe A: '));
let Aalimentos = Number(prompt('Quantos quilos de alimentos da equipe A: '));
let Bfeijao = Number(prompt('Quilos de feijão da equipe B: '));
let Balimentos = Number(prompt('Quantos quilos de alimentos da equipe B: '));

let A = Afeijao * 2 + Aalimentos;
let B = Bfeijao * 2 + Balimentos;

let Afeijaod3 = Afeijao % 3 === 0;
let Bfeijaod3 = Bfeijao % 3 === 0;

let vencedor;

if (Afeijaod3) {
  A++
} else if (Bfeijaod3) {
    B++
}
const v = A > B ? vencedor ='A': vencedor = 'B';

console.log(`: Equipe A\nPacotes: ${Aalimentos}\nFeijão: ${Afeijao}\n: Equipe B\nPacotes: ${Balimentos}\nFeijão: ${Bfeijao}\n[Apuração]\nEquipe A: ${A}\nEquipe B: ${B}\nE a vencedora é: Equipe ${vencedor}`)