'Arrays (listas)'

'1 - Obtenha o valor “Serviços” do array menu:'

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log('Exercício 1 Array: ', menuServices);

'2 - Procure o índice do valor “Portfólio” do array menu:'

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log('Exercício 2 Array: ', indexOfPortfolio);

'3 - Adicione o valor “Contato” no final do array menu:'

menu.push('Contato');

console.log('Exercício 3 Array: ', menu);

'For'

'1 - Utilize o for para imprimir os elementos da lista groceryList com o console.log():'

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log('Exercício 1 for: ', groceryList[index]);   
}
