const prompt = require('prompt-sync')();

  let sexo = prompt('Sexo: ').toUpperCase();
  const nasc = prompt('Ano de nascimento: ')

  let idade = 2021 - nasc;

  homi = sexo == 'MASCULINO' && idade >= 18;
  muie = sexo === 'FEMININO' && idade >= 21  

  if (homi) {
      console.log(`Sexo: ${sexo}\nAno de nascimento ${nasc}\nCidadão emancipado? ${sexo && adulto}`);
  } else if (muie) {
    console.log(`Sexo: ${sexo}\nAno de nascimento ${nasc}\nCidadão emancipado? ${muie}`);
  } else {
    console.log(`Sexo: ${sexo}\nAno de nascimento ${nasc}\nCidadão emancipado? ${muie}`);
  }