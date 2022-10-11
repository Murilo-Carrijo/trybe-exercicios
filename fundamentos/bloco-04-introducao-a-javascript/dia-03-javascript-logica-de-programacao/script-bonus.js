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
  console.log(item);
}
