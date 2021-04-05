 /* O restaurante "Self-Service" precisa de um programa para imprimir as etiquetas de "comanda" na pesagem dos pratos. O operador da balança irá digitar o preço do quilo e o total em gramas da refeição, considerando que o prato vazio pesa 465 gramas (tara). A etiqueta irá conter o nome do restaurante, a tara do prato, o preço de 100 gramas, o peso consumido e o valor total. */

  const imput = require("prompt-sync")();

  var quilo = imput("preço do quilo :")
  var gramas = quilo / 1.000
  var tara = 465 
  console.log("Restaurante Self-Service")