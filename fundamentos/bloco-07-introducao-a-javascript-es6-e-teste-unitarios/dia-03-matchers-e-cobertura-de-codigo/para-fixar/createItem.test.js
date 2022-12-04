const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    const validInfo = createItem('banana', 'kg', 1.99, 20);
    expect(validInfo).toHaveProperty('name', 'banana');
    expect(validInfo).toHaveProperty('quantity', 20);
    expect(validInfo).toHaveProperty('unit', 'kg');
    expect(validInfo).toHaveProperty('price', 1.99);
  });
  it('utiliza zero como quantidade padrão',  () => {
    const element = createItem('banana', 'kg', 1.99);
    expect(element).toHaveProperty('quantity', 0);
  });
  it.todo('Lança um erro quando não recebe parâmetros');
  it.todo('Lança um erro se o nome do item não é uma string');
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});