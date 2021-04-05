/*Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.
x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
mod: resto; <>: diferente
Dica: Para algumas operações será necessário o uso de parênteses.
x - y M a
x - y * a M c mod y
y <> c
x * y <> c
c mod y mi y mod c
a m b
z / a + x * y - 5 MI b
c * z + 2 = a * x + y
c = z + b
y * 2 <> 7 - b
*/ 
const a = (6 - 2) > 8;
const b = (6 - 2) * 8 > (12 % 2);
const c = 2 != 12;
const d = (6 * 2) != 12;
const e = (12 % 2) <=  (2 % 12);
const f = 8 < 7.5;
const g = (4 / 8) + (6 * 2) - 5 <= 7.5;
const h = (12 * 4) + 2 == 8 * (6 + 2);
const i = 12 == 4 + 7.5;
const j = 2 * 2 != 7 - 7.5;

console.log(a, b, c, d, e , f, g, h, i ,j);