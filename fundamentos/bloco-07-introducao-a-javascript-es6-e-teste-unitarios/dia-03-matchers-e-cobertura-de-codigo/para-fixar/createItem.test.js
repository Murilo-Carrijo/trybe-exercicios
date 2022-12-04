const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    const validInfo = createItem('Murilo', 2, 10.50, 2);
    expect(validInfo).toHaveProperty('name', 'Murilo');
    expect(validInfo).toHaveProperty('quantity', 2);
    expect(validInfo).toHaveProperty('unit', 2);
    expect(validInfo).toHaveProperty('price', 10.5);
  });
  it.todo('utiliza zero como quantidade padrão');
  it.todo('Lança um erro quando não recebe parâmetros');
  it.todo('Lança um erro se o nome do item não é uma string');
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});