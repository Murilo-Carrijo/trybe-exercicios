'Exercícios - Bônus - Ordenação Bubble Sort'

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

'1 - Ordene o array numbers em ordem crescente e imprima seus valores;'

for (let firstI = 1; firstI < numbers.length; firstI += 1) {
  for (let secondI = 0; secondI < numbers.length; secondI += 1) {
    if (numbers[firstI] < numbers[secondI]) {
      let current = numbers[firstI];
      numbers[firstI] = numbers[secondI];
      numbers[secondI] = current;
    }
  }
}

console.log('Exercício 1:', numbers);

'2 - rdene o array numbers em ordem decrescente e imprima seus valores;'

for (let firstI = 1; firstI < numbers.length; firstI += 1) {
  for (let secondI = 0; secondI < numbers.length; secondI += 1) {
    if (numbers[firstI] > numbers[secondI]) {
      let current = numbers[firstI];
      numbers[firstI] = numbers[secondI];
      numbers[secondI] = current;
    }
  }
}

console.log('Exercício 2:', numbers);