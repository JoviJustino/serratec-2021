const prompt = require("prompt-sync")();

console.log("<h2>Sapateira da Jéssica<h2>");

//const CAPACIDADE = 7;
//var sapato = new Array(CAPACIDADE);
var sapato = [];
sapato[0] = "tenis azul"
sapato[1] = "Sapatilha";
sapato[2] = "Salto alto";
sapato[3] = "Bota marrom";
sapato[4] = "Sandália de dedo";
sapato[5] = "Sapatênis";
sapato[6] = "Quichute";
let gaveta = prompt("qual gaveta você quer ver?");
gaveta = Number(gaveta);

var encontrado;
//Processamento
if (gaveta == 1) encontrado = sapato[1];
else if (gaveta == 2) encontrado = sapato[2];
else if (gaveta == 3) encontrado = sapato[3];
else if (gaveta == 4) encontrado = sapato[4];
else if (gaveta == 5) encontrado = sapato[5];
else if (gaveta == 6) encontrado = sapato[6];

console.log("Na gaveta " + gaveta + " temos um(a) " + encontrado);