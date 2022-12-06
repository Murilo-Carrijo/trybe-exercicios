const { info, printMessage } =require('./printMessage');


describe('Test printMessage and info', () => {
  test('Test if info contain the property "personagem"', () => {
    expect(info).toHaveProperty('personagem');
  });

  test('Test if the function printMessage return "Boas vindas,"', () => {
    expect(printMessage(info)).toContain('Boas vindas,');
  });

  test('Test if the function printMessage return "Margarida,"', () => {
    expect(printMessage(info)).toContain(info.personagem);
  });
});