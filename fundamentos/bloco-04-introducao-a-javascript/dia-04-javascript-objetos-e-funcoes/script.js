'Usando o objeto abaixo, faça os exercícios a seguir:'

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

'1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:'

console.log('Exercício 1:', 'Bem-vinda, ' + info.personagem);

'2 - Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto["chave"] = valor. Valor esperado no console:'

info['recorrente'] = 'Sim';

console.log('Exercício 2:', info);

'3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:'

for (const key in info) {
  console.log('Exercício 3:', key);
}

'4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:'

for (const key in info) {
  console.log('Exercício 4:', info[key]);
}

'5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell"s Four Color Comics #178", "O último MacPatinhas", "Sim". Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:'

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in info) {
  if (
    key === 'recorrente' &&
    info[key] === 'Sim' &&
    info2[key] === 'Sim'
  ) {
    console.log('Exercício 5:', 'Ambos recorrentes');
  } else {
    console.log('Exercício 5:', info[key] + ' e ' + info2[key]);
  }
}

'🚀 Leitura de Objetos'
'Usando o objeto abaixo, faça os exercícios a seguir:'

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

'6 - cesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama "O Pior Dia de Todos"”.'

console.log('Exercício 6:', 'O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

'7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:'

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

console.log('Exercício 7:', leitor);

'8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.'

console.log('Exercício 8:', leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favorito');

'🚀 Exercícios - funções'
'9 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.'

function checkPalindrome(word) {
  for (const key in word) {
    if (word[key] !== word[(word.length - 1) - key]) {
      console.log('Exercício 9:', false);
      return false;
    }
  }
  console.log('Exercício 9:', true);
  return true;
}

checkPalindrome('arara');

'10 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.'

const array = [2, 3, 6, 7, 10, 1];

function ckeckPositionHighestValue(arr) {
  let position = 0;
  let number = 0;
  
  for (const key in arr) {
    if (number < arr[key]) {
      number = arr[key];
      position = key;
    }
  }
  console.log('Exircício 10:', position);
}

ckeckPositionHighestValue(array);

'11 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.'

const array2 = [2, 4, 6, 7, 10, 0, -3];

function ckeckPositionLowestValue(arr) {
  let position = 0;
  let number = arr[0];
  
  for (const key in arr) {
    if (number > arr[key]) {
      number = arr[key];
      position = key;
    }
  }
  console.log('Exircício 11:', position);
}

ckeckPositionLowestValue(array2);