/* O programa “mini departamento pessoal” lê a quantidade de horas trabalhadas por um funcionário em um mês, o valor que ele recebe por hora e o percentual de desconto para o INSS, e calcula:
O salário bruto (horas trabalhadas * valor hora)
O valor do desconto para o INSS
O salário líquido (adicionais menos descontos).
Após os cálculos, será impresso o contracheque. O contracheque é a exibição no console das informações com formatação: Salário bruto, valor do desconto do INSS, e o salário líquido do funcionário.
*/ 
  const imput = require("prompt-sync")();
  
  const horas =  imput("horas trabalhadas...");
  const valorhora = imput("salario por hora...");
  const inss = imput("desconto para inss");

  const bruto = horas * valorhora;
  const desconto = bruto * 0.12
  