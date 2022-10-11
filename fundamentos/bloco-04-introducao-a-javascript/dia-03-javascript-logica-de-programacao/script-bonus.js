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