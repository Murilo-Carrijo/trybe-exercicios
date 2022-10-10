'O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:'

'O fatorial é representado pelo sinal !'
'4! = 4 x 3 x 2 x 1 = 24'

'1 - Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.'
const base = 10;
let result = 1;
for (let i = 1; i <= base; i += 1) {
  result = result * i;
}

console.log('Exercício 1:', result);
