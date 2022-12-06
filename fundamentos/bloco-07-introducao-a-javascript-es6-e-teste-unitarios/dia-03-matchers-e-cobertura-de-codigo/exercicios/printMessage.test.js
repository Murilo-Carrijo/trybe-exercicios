const { info } =require('./printMessage');


describe('Test printMessage and info', () => {
  test('Test if info contain the property "personagem"', () => {
    expect(info).toHaveProperty('personagem');
  });
});