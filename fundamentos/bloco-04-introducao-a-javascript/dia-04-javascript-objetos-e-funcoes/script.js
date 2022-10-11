'Usando o objeto abaixo, faça os exercícios a seguir:'

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

'1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:'

console.log('Exercício 1:', 'Bem-vinda, ' + info.personagem);

'2 - Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto["chave"] = valor. Valor esperado no console:'

info['recorrente'] = 'Sim';

console.log('Exercício 2:', info);

'3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:'

for (const key in info) {
  console.log('Exercício 3:', key);
}