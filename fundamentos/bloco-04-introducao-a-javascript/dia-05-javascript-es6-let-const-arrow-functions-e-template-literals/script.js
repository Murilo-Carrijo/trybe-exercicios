'Parte I'

'1 - 🚀 Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;'

// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
const pessoa = {
  nome: 'Henri',
  idade: 20
}
pessoa.nome = 'Luna';
pessoa.idade = 19;

console.log('Exercício 1:', 'Nome:', pessoa.nome);
console.log('Exercício 1:', 'Idade:', pessoa.idade);

'2 - 🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions;'
'🚀 Transforme a função numeroAleatorio em uma arrow function;'

// function numeroAleatorio() {
//   return Math.random()
// }
// console.log(numeroAleatorio());

const numeroAleatorio = () => Math.random();

console.log('Exercício 2:', numeroAleatorio());

'3 - 🚀 Transforme a função hello em uma arrow function;'

// function hello(nome) {
//   return `Olá, ${nome}!`
// }

const hello = (nome) => `Olá, ${nome}`

let nome = 'Ivan';
console.log('Exercício 2:', hello(nome));