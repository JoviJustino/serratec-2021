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
sapato[8] = ""
let gaveta = prompt("qual gaveta você quer ver?");
gaveta = Number(gaveta);

var encontrado;
//Processamento
encontrado = sapato[gaveta]
console.log("Na gaveta " + gaveta + " temos um(a) " + encontrado);

//
console.log("guardar um sapato: ");
gaveta = prompt("qual gaveta ? ");
gaveta = Number(gaveta);

if (sapato[gaveta] != ""){
    console.log("Na gaveta", gaveta,"já existe", sapato[gaveta], "quer trocar?");
    troca = prompt("S ou N? ");
}
if (troca == "S"){
    let nome =prompt ("Nome? ")
    sapato[gaveta] = nome;
}
;


console.log("na gaveta", gaveta, "agora temos", sapato[gaveta]);