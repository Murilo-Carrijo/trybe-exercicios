'🚀 Lidando com Arrays'
's utilizar esse array para realizar os próximos exercícios.'

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

'1 - Percorra o array imprimindo todos os valores nele contidos com a função console.log();'

for (number of numbers) {
  console.log('Exercício 1:', number);
}

'2 - Some todos os valores contidos no array e imprima o resultado'

let sum = 0;
for (number of numbers) {
  sum = sum + number;
}

console.log('Exercício 2:', sum);

'3 - Calcule e imprima a média aritmética dos valores contidos no array;'
  'A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.'

let sum2 = 0;

for (number of numbers) {
  sum2 = sum2 + number;
}

console.log('Exercício 3:', sum2/numbers.length);

'4 - Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”'

if (sum2 > 20) {
  console.log('Exercício 4:', 'valor maior que 20');
} else {
  console.log('Exercício 4:', 'valor menor ou igual a 20');
}

'5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o'

let higherNumber = 0;
for (let i = 0; i <= numbers.length; i += 1) {
  if (numbers[i] > higherNumber) {
    higherNumber = numbers[i];
  }
}

console.log('Exercício 5:', higherNumber);

'6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”'

let oddNumbers = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers += 1;
  }
}

if (oddNumbers === 0) {
  console.log('Exercício 6:', 'nenhum valor ímpar encontrado');
} else {
  console.log('Exercício 6:', oddNumbers);
}

'7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;'

let smallestNumber = numbers[0];
for (let i = 0; i <= numbers.length; i += 1) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
  }
}

console.log('Exercício 7:', smallestNumber);

'8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;'

const newArr = [];
for (let i = 1; i <= 25; i += 1) {
  newArr.push(i);
}

console.log('Exercício 8:', newArr);

'9 - Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.'

for (let i = 0; i < newArr.length; i += 1) {
  console.log('Exercício 9:', `A divisão de ${newArr[i]} por 2 é igual à: ${newArr[i]/2}`);
}