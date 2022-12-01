const { myRemove } = require('./script');

describe('Exercício 1', ()=> {
  test('verificando a função "myRemove" remove o elemento com sucesso', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3 ,4]);
  });
});