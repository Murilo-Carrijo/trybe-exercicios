'1 - Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:'

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  }
}

'2- Usando o objeto abaixo, utilize for/in e imprima no console a mensagem "Olá xxxxx" para cada nome, substituindo o xxxxx pelo nome em questão.'

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let key in names) {
  console.log('Olá ' + names[key]);
}

'3 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.'

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car) {
  console.log(key, '-', car[key]);
}

'4 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:'
function sum(a, b) {
  console.log('Exercício 4 Adição: ', a + b);
}

function subtraction(a, b) {
  console.log('Exercício 4 Subtração: ', a - b);
}

function multiplication(a, b) {
  console.log('Exercício 4 Multiplicação: ', a * b);
}

function division(a, b) {
  console.log('Exercício 4 Divisão: ', a / b);
}

function module(a, b) {
  console.log('Exercício 4 Modulo: ', a % b);
}

sum(10, 7);
subtraction(10, 7);
multiplication(10, 7);
division(10, 7);
module(10, 7);

'5 -Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.'
function getHighestNumber(n1, n2) {
  if (n1 > n2) {
    console.log('Exercício 5: ', 'O maior número é:', n1);
  } else if (n1 < n2) {
    console.log('Exercício 5: ', 'O maior número é:', n2);
  } else {
    console.log('Exercício 5: ', 'Os numeros possuem valores iguais: ', n1);
  }
}

getHighestNumber(40, 30);

'6 - Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.'
function getHighestNumb(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    console.log('Exercício 6: ', 'O maior número é:', n1);
  } else if (n2 > n1 && n2 > n3) {
    console.log('Exercício 6: ', 'O maior número é:', n2);
  } else if (n3 > n1 && n3 > n2) {
    console.log('Exercício 6: ', 'O maior número é:', n3);
  } else {
    console.log('Exercício 6: ', 'Os numeros possuem valores iguais: ', n1);
  }
}

getHighestNumb(40, 30, 50);

'7 - Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.'

function checkValue(n) {
  if (n > 0) {
    console.log('Exercício 7: ', 'positive');
  } else if (n < 0) {
    console.log('Exercício 7: ', 'negative');
  } else {
    console.log('Exercício 7: ', 'zero');
  } 
}

checkValue(-1)

'8 - Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.'
    'Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.'
    'Um ângulo será considerado inválido se não tiver um valor positivo.'

function checkTriangle(a, b, c) {
  const sum = a + b + c;
  if (a < 0 || b < 0 || c < 0) {
    console.log('Execício 5: ', 'O valor não pode ser negativo');
  } else if (sum > 180 || sum > 180) {
    console.log('Execício 5: ', false);
  } else {
    console.log('Execício 5: ', true);
  }
}

checkTriangle(60, 60, 60);