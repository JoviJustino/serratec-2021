//criar um sistema que agenda uma reunião e da uma mensagem se pode agendar ou não a reuniao e precisa saber se pode ser agendado no dia, se não é feriado  

  const imput =require("prompt-sync")();

  const texto = imput("dia que pretende agendar a reunião : ")
  const dia = Number(texto);
  
  const dom1 = 7;
  const dom2 = 14;
  const dom3 = 21;
  const dom4 = 28;

  var pode1 = dia != dom1
  var pode2 = dia != dom2
  var pode3 = dia != dom3
  var pode4 = dia != dom4
  
  
  var pode = pode1 && pode2 && pode3 && pode4;
  console.log("pode agendar a reuniao nesse dia? ", pode);

 
