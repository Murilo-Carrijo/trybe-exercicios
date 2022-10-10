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

'3 - Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:'

'[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]'

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const newArr = [];
for (let index = 0; index < numbers1.length; index += 1) {
  if (index === (numbers1.length - 1)) {
    const element = numbers1[index] * 2;
    newArr.push(element);
  } else {
    const element = numbers1[index] * numbers1[index + 1];
    newArr.push(element);
  }
}

console.log(newArr);