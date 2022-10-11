'Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo:'

'1 - Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:'

n = 5

'*****'
'*****'
'*****'
'*****'
'*****'

let item = ''
for (let index = 0; index < n; index += 1) {
  item = item + '*';
}

for (let index = 0; index < n; index++) {
  console.log('Exercíco 1:', item);
}

'2 - Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:'

'n = 5'

'*'
'**'
'***'
'****'
'*****'

let item2 = '';
for (let index = 0; index < n; index += 1) {
  item2 = item2 + '*';
  console.log('Exercíco 2:', item2);
}

'3 - Agora inverta o lado do triângulo. Por exemplo:'

let item3 = '';
let position = n - 1;
for (let i = 0; i < n; i += 1) {
  for (let index = 0; index < n; index += 1) {
    if (position > index) {
      item3 = item3 + ' ';
    } else {
      item3 = item3 + '*';
    }
  }
  console.log('Exercíco 3:', item3);
  item3 = '';
  position -= 1;
}

'4 - Depois, faça uma pirâmide com n asteriscos de base:'

'  *  '
' *** '
'*****'

let item4 = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let index = 0; index <= midOfMatrix; index += 1) {
  for (let i = 0; i <= n; i += 1) {
    if (i > controlLeft && i < controlRight) {
      item4 = item4 + '*';
    } else {
      item4 = item4 + ' ';
    }
  }
  console.log('Exercício 4:', item4);
  item4 = '';
  controlRight += 1;
  controlLeft -= 1
};

'5 * Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:'

const m = 7;
let middle = (m + 1) / 2;
let left = middle;
let right = middle;

for (let i = 1; i <= middle; i += 1) {
  let outputLine = '';
  for (let index = 1; index <= m; index += 1) {
    if (index == left || index == right || i == middle) {
      outputLine = outputLine + '*';
    } else {
      outputLine += ' ';
    }
  }
  left -= 1;
  right += 1;
  console.log('Exercício 5:', outputLine);
}