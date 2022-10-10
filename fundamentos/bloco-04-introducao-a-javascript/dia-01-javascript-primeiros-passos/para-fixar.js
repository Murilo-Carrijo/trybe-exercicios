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


'Operadores lógicos'

'1 - Crie uma constante chamada “currentHour”, que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia'
const currentHour = 9;

'2 - Crie uma variável chamada “message” que, inicialmente, é uma string vazia.'
let message = '';

'3 - Implemente condicionais para que:'
    'Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.'
    'Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.'
    'Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.'
    'Se o horário estiver entre 11 e 14, insira “Hora do almoço!!!” na variável “message”.'
    'e o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.'

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir'
} else if (currentHour < 22 && currentHour >= 18) {
    message = 'Rango da noite, vamos jantar :D';

} else if (currentHour < 18 && currentHour >= 14) {
    message = 'Vamos fazer um bolo pro café da tarde?';

} else if (currentHour < 14 && currentHour >= 11) {
    message = 'Hora do almoço!!!';

} else if (currentHour < 11 && currentHour >= 4) {
  message = 'Hmmm, cheiro de café recém-passado';
}

'4 - Agora imprima a variável message fora das suas condições.'
console.log(message);


'5 - Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.'
let weekDay = 'quarta-feira';

'6 - Utilizando if/else, implemente condicionais para que:'
    'Se nossa variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.'
    'Se for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido UwU”.'

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === '“quinta-feira' || weekDay === '“sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else if (weekDay === 'sabado' || weekDay === 'domingo') {
  console.log('FINALMENTE, descanso merecido UwU');
}

'Switch e Case'

'1 - Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: "aprovada", "lista" ou "reprovada";'
const status = 'aprovado';

'2 - Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:'
    'Caso "aprovada", imprima “Parabéns, você foi aprovada(o)!.'
    'Caso "lista", imprima “Você está na nossa lista de espera.'
    'Caso "reprovada", imprima “Você foi reprovada(o).'
    'Caso default, imprima a mensagem de “Informação incorreta”.'

switch (status) {
  case 'aprovado':
    console.log('Parabéns, você foi aprovada(o)!.');
    break;
  case 'lista':
    console.log('Você está na nossa lista de espera.');
    break;
  case 'reprovado':
    console.log('Você foi reprovada(o).');
    break;
  default:
    console.log('Informação incorreta.');
    break;
}