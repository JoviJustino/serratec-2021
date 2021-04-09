/* A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela.

Paciente: Moisés
Já vacinado: ok
[Triagem]
Sujeito a infecção? false

*/
const ler = require("prompt-sync")();
//entrada 
var nome = ler("qual o nome do paciente? ")
var vacinado = ler("paciente ja foi vacinado ? ")


//processamento

if(vacinado == "sim") {
    infeccao = false
}else infeccao = true



//saida
console.log(nome)
console.log("já vacinado : ")
console.log("Sujeito a infecção? ", infeccao)