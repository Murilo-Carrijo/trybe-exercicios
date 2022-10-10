'🚀 Lidando com Arrays'
's utilizar esse array para realizar os próximos exercícios.'

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

'1 - Percorra o array imprimindo todos os valores nele contidos com a função console.log();'

for (number of numbers) {
  console.log('Exercício 1', number);
}

'2 - Some todos os valores contidos no array e imprima o resultado'

let sum = 0;
for (number of numbers) {
  sum = sum + number;
}

console.log('Exercício 2', sum);

'3 - Calcule e imprima a média aritmética dos valores contidos no array;'
  'A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.'

let sum2 = 0;

for (number of numbers) {
  sum2 = sum2 + number;
}

console.log('Exercício 3', sum2/numbers.length);

'4 - Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”'

if (sum2 > 20) {
  console.log('Exercício 4: ', 'valor maior que 20');
} else {
  console.log('Exercício 4: ', 'valor menor ou igual a 20');
}
