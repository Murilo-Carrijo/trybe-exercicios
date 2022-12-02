const {
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
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


describe('Exercício 4 - Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});