const {
  myRemove,
  myFizzBuzz,
  mapString,
  encode,
  decode,
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

describe('Exercício 3', () => {
  test('Verificando se encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  test('Verificando se decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  test('Verificando se a função encode converte vogais em números', () => {
    expect(encode('sequoia')).toEqual('s2q5431');
  });
  test('Verifiquando se a quantidade de caracteres não é alterada ao executar a função encode', () => {
    expect(encode('sequoia').length).toEqual(7);
  });
  test('Verificando se a função encode converte números em vogais', () => {
    expect(decode('s2q5431')).toEqual('sequoia');
  });
  test('Verifiquando se a quantidade de caracteres não é alterada ao executar a função decode', () => {
    expect(decode('s2q5431').length).toEqual(7);
  });
  test('Verificando se a função encode não converte consoantes em números', () => {
    expect(encode('b, c, d, f, g')).toEqual('b, c, d, f, g');
  });
});