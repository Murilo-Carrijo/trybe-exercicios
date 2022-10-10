'VARIÁVEIS:'

'1 - Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).'
const myName = 'Murilo';
'2 - Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.'
const birthCity = 'Franca';
'3 - Crie uma variável let chamada birthYear e atribua a ela o ano em que você nasceu.'
let birthYear = '1988';
'4 - Utilize o console.log() para imprimir as constantes e variáveis que você criou.'
console.log(myName);
console.log(birthCity);
console.log(birthYear);
'5 - Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!'
birthYear = '2030';
console.log('atualizado:', birthYear);
'6 - Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔'
// birthCity = 'São Paulo';
// console.log('atualizado:', birthCity);
    'Resposta: o erro ocorre pois a vaiável foi criada como constaten, ou seja, não podemos atribuir um novo valor a ela.'


'Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas:'

'1 - Crie uma constante chamada base e atribua a ela o valor 5.'
const base = 5;

'2 - Crie uma constante uma chamada heigth e atribua a ela o valor 8.'
const height = 8;

'3 - Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela heigth. Dica: lembre-se de usar ~~sempre~~ o console.log() para imprimir as variáveis e checar os resultados das operações!'
const area  = base * height;
console.log(area);

'4 - Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.'
const perimeter = 5 + 5 + 8 + 8;
console.log(perimeter);

'Condições If e Else'

'1 - Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;'
const note = 55;

'2 - Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. Para isso, considere as seguintes informações:'
    'Se a nota for maior ou igual a 80, imprima “Parabéns, você foi aprovada(o)!”'
    'Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”'
    'Se a nota for menor que 60, imprima “Você foi reprovada(o)”'

if (note >= 80) {
  console.log('“Parabéns, você foi aprovada(o)!');
} else if (note < 80 && note >= 60) {
  console.log('Você está na nossa lista de espera');
} else {
  console.log('Você foi reprovada(o)');
}
