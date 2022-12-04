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
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => { createItem() }).toThrow();
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => { createItem(2, 'kg', 1.99, 20) }).toThrow( new Error('O nome do item deve ser uma string'));
  });
  it('Lança um erro se o preço é negativo', () => {
    const message = 'O preço do item deve ser maior que zero';
    expect(() => { createItem('banana', 'kg', -1, 20) }).toThrow( new Error(message));
  });
  it('Lança um erro se o preço é zero', () => {
    const message = 'O preço do item deve ser maior que zero';
    expect(() => { createItem('banana', 'kg', 0, 20) }).toThrow( new Error(message));
  });
});