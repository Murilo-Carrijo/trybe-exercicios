
// Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. Para isso, considere o seguinte código:

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const editLesson = (lesson, key, value) => {
  lesson[key] = value;
  console.log(lesson);
};

editLesson(lesson2, 'turno', 'noite');

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (lesson) => {
  const keys = Object.keys(lesson);
  console.log(keys);
};

listKeys(lesson1);

// 3 - Crie uma função para mostrar o tamanho de um objeto.

const lengthObject = (lesson) => {
  const numberKeys = Object.keys(lesson).length;
  console.log('Tamanho do objeto:', numberKeys, 'itens');
};

lengthObject(lesson3);

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (lesson) => {
  const keys = Object.values(lesson);
  console.log(keys);
};

listValues(lesson1);

// 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

// 6 - Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

const sumStudants = (allLessons) => {
  let total = 0;
  const lessonsKeys = Object.keys(allLessons);
  for (let index = 0; index < lessonsKeys.length; index++) {
    const element = lessonsKeys[index];
    total = total + allLessons[element].numeroEstudantes;
  }
  console.log('Total de estudantes: ', total);
};

sumStudants(allLessons);

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (obj, position) => {
  const objValues = Object.values(obj);
  return objValues[position]
};

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyPair = (obj, key, value) => {
  const entries = Object.entries(obj);
  let isEqual = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
  }
  return isEqual;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false