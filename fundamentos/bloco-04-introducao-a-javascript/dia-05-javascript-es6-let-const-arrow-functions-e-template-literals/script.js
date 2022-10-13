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
console.log('Exercício 3:', hello(nome));

'4 - 🚀 Transforme a função nomeCompleto em uma arrow function;'

// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`
// }

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
let nome1 = 'Ivan';
let sobrenome = 'Pires';
console.log('Exercício 4:', nomeCompleto(nome1, sobrenome));

'5 - 🚀 Altere a expressão if/else utilizando ternary operator;'

// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };

let speed = 90;

const speedCar = (speed) => (
  speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
);

console.log('Exercício 5:', speedCar(speed));