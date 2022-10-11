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

'2 - Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.'

let word = 'tryber';
let wordBase = '';
let wordLength = word.length;

for (let i = (wordLength - 1); i >= 0 ; i -= 1) {
  if (word === 'tryber') {
    wordBase = word;
    word = word[i];
  } else {
    ;
    word = word + wordBase[i];
  }
}

console.log('Exercício 2:', word);


'Considere o array de strings abaixo:'

let array = ['java', 'javascript', 'python', 'html', 'css'];

'3 - Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.'

let largerElement = array[0];
let smallerElement = array[0];

for (let index = 1; index < array.length; index++) {
  if (largerElement.length < array[index].length) {
    console.log(array[index]);
    largerElement = array[index];
  }
}

for (let index = 1; index < array.length; index++) {
  if (smallerElement.length > array[index].length) {
    smallerElement = array[index];
  }
}

console.log('Exercicio 3:', `maior palavra: ${largerElement} // menor palavra: ${smallerElement}` );
