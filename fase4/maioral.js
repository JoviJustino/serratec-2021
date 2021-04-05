const prompt = require('prompt-sync')();

  //entrada
  const player1 = Number(prompt('Player 1: '));
  const player2 = Number(prompt('Player 2: '));


  //processamento
  
const player1v = player1 > player2;
  const player2v = player1 < player2;
  const empate = player1 == player2;

  //saida

  console.log(' -+-+-+Maioral-+-+-+ ');
  console.log(`: Resultado :\nPlayer 1 venceu? ${player1v}\nPlayer 2 venceu: ${player2v}\nteve empate? ${empate}`);