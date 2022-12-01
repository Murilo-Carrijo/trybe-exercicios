const {
  myRemove,
  myFizzBuzz,
} = require('./script');

describe('Exercício 1', ()=> {
  test('verificando a função "myRemove" remove o elemento com sucesso', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3 ,4]);
  });
});

describe('Exercício 2 - Verificando se a função fizzbuzz', () => {
  const fizzbuzz = 15;
  const fizz = 9;
  const buzz = 10;
  const number = 8; 
  test('Caso o número seja divisível por 3 e 5 - fizzbuzz', () => {
    expect(myFizzBuzz(fizzbuzz)).toBe('fizzbuzz');
  });

  test('Caso o número seja divisível somente por 3 - fizz', () => {
    expect(myFizzBuzz(fizz)).toBe('fizz');
  });

  test('Caso o número seja divisível somente por 5 - buzz', () => {
    expect(myFizzBuzz(buzz)).toBe('buzz');
  });

  test('Caso o número não seja divisível por 3 e nem por 5 - fizz', () => {
    expect(myFizzBuzz(number)).toBe(8);
  });
});