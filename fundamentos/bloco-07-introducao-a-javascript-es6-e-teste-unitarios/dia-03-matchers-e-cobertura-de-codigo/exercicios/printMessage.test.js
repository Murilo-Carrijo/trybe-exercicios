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

  test('Test if the function return Error if the object not contain "personagem"', () => {
    const newInfo = {
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };

    expect(() => { printMessage(newInfo) }).toThrow(new Error('objeto inválido'));
    expect(() => {printMessage() }).toThrow(new Error('objeto inválido'));
  });
});