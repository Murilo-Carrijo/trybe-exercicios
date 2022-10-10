'1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:'
const a = 10;
const b = 7;
    'Adição (a + b)'
    console.log('Exercício 1 Adição: ', a + b);
    'Subtração (a - b)'
    console.log('Exercício 1 Subtração: ', a - b);
    'Multiplicação (a * b)'
    console.log('Exercício 1 Multiplicação: ', a * b);
    'Divisão (a / b)'
    console.log('Exercício 1 Divisão: ', a / b);
    'Módulo (a % b)'
    console.log('Exercício 1 Modulo: ', a % b);

'2 - Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.'
const n1 = 40;
const n2 = 30;

if (n1 > n2) {
    console.log('Exercício 2: ', 'O maior número é:', n1);
} else if (n1 < n2) {
    console.log('Exercício 2: ', 'O maior número é:', n2);
} else {
    console.log('Exercício 2: ', 'Os numeros possuem valores iguais: ', n1);
}

'3 - Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.'
const num1 = 40;
const num2 = 30;
const num3 = 50;

if (num1 > num2 && num1 > num3) {
    console.log('Exercício: 3: ', 'O maior número é:', num1);
} else if (num2 > num1 && num2 > num3) {
    console.log('Exercício: 3: ', 'O maior número é:', num2);
} else if (num3 > num1 && num3 > num2) {
    console.log('Exercício: 3: ', 'O maior número é:', num3);
} else {
    console.log('Exercício: 3: ', 'Os numeros possuem valores iguais: ', num1);
}
'4 - Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.'
const number = -1;

if (number > 0) {
    console.log('Exercício 4: ', 'positive');
} else if (number < 0) {
    console.log('Exercício 4: ', 'negative');
} else {
    console.log('Exercício 4: ', 'zero');
}

'5 - Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.'
    'Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.'
    'Um ângulo será considerado inválido se não tiver um valor positivo.'
const a1 = 60;
const a2 = 60;
const a3 = 60;

const sum = a1 + a2 + a3;

if (sum > 180 || sum > 180) {
    console.log('Execício 5: ', false);
} else if (a1 < 0 || a2 < 0 || a3 < 0) {
    console.log('Execício 5: ', 'O valor não pode ser negativo');
} else {
    console.log('Execício 5: ', true);
}

'6 - Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.'
    'Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.'
    'Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).'
    'Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.'
    'Exemplo: bishop (bispo) -> diagonals (diagonais)'

const piece = 'Rei';

switch (piece.toLowerCase()) {
    case 'peao':
        console.log('Exercício 6:', 'O Peão pode mover uma casa para frente e atacar na diagonal. Em seu primeiro movimento é possível que o Peão mova-se por duas casa');
        break;
    case 'bispo':
        console.log('Exercício 6:', 'O Bispo pode se mover na diagonal, desde que a casa esteja livre. O Bispo pode atacar qualquer peça que esteja em sua rota');
        break;
    case 'cavalo':
        console.log('Exercício 6:', 'O Cavalo se move em "L", e só pode atacar a peça que está localizada em seu movimento final');
        break;
    case 'torre':
        console.log('Exercício 6:', 'A Torre pode se mover na vertical e a horizontal, desde que a casa esteja livre. A Torre pode atacar qualquer peça que esteja em sua rota');
        break
    case 'rainha':
        console.log('Exercício 6:', 'A Rainha pode se mover na vertical, horizontal e na diagonal, desde que a casa esteja livre. A Rainha pode atacar qualquer peça que esteja em sua rota');
    case 'rei':
        console.log('Exercício 6:', 'O Rei pode se mover por uma casa na vertical, horizontal e na diagonal, desde que a casa esteja livre. O Rei pode atacar qualquer peça que esteja em sua rota e caso o movimento não o coloque em check');
        break;
    default:
        console.log('Exercício 6:', 'Essa peça não pertece ao Xadrez.');
        break;
}

'7 -  if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:'
    'Porcentagem >= 90 -> A;'
    'Porcentagem >= 80 -> B;'
    'Porcentagem >= 70 -> C;'
    'Porcentagem >= 60 -> D;'
    'Porcentagem >= 50 -> E;'
    'Porcentagem < 50 -> F;'
    'O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.'

const note = 101;
let convertNote = '';

if (note >= 90 && note <= 100) {
    convertNote = 'A';
} else if (note >= 80 && note < 90) {
    convertNote = 'B';
} else if (note >= 70 && note < 80) {
    convertNote = 'C';
} else if (note >= 60 && note < 70) {
    convertNote = 'D';
} else if (note >= 50 && note < 60) {
    convertNote = 'E';
} else if (note < 50 && note >= 0) {
    convertNote = 'F';
} else {
    convertNote = 'O valor da nota deve ser maior ou igual a 0 e menor ou igual a 100.'
}

console.log('Exercício 7: ', convertNote);


'8 - Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.'
    'Bonus: use somente um if.'
const number1 = 11;
const number2 = 21;
const number3 = 30;

let result = false

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
    result = true;
}

console.log('Exercício 8: ', result);

'9 - Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.'
    'Bonus: use somente um if.'
const first = 10;
const second = 20;
const third = 11;

let resultOdd = false

if (first % 2 !== 0 || second % 2 !== 0 || third % 2 !== 0) {
    resultOdd = true;
}

console.log('Exercício 9: ', resultOdd);

'10 - Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.'
    'Atente que, sobre o custo do produto, incide um imposto de 20%.'
    'Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.'
    'O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.'
        'valorCustoTotal = valorCusto + impostoSobreOCusto;'
        'lucro = valorVenda - valorCustoTotal (lucro de um produto);'

const cost = 50;
const salePrice = 100;
const costEndTaxes = (cost * 1.2);

const profit = salePrice - costEndTaxes;

if (cost > 0 && salePrice > 0) {
    console.log('Exercício 10: ', `O lucro foi de: R$ ${profit}`);
} else {
    console.log('Exercício 10: ', 'O valor de custo e de venda devem ser maiores do que 0');
}

'11 - Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.'
    'Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.'
    'A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:'
    'INSS (Instituto Nacional do Seguro Social)'
        'Salário bruto até R$ 1.556,94: alíquota de 8%'
        'Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%'
        'Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%'
        'Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88'
    'IR (Imposto de Renda)'
        'Até R$ 1.903,98: isento de imposto de renda'
        'De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto'
        'De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto'
        'De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto'
        'Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto'

'Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:'

'O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.'

'Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.'

'Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:'

'R$ 2.670,00: salário com INSS já deduzido;'
'7.5%: alíquota de imposto de renda;'
'R$ 142,80 parcela a se deduzir do imposto.'
'Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45'

'O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.'

'Resultado: R$ 2.612,55.'

const salary = 3000;
let inss = 0;
let ir = 0;
let resultSalary = 0;

if (salary <= 1556.94) {
    inss = salary * 0.08;
} else if (salary > 1556.94 && salary <= 2594.92) {
    inss = salary * 0.09;
} else if (salary > 2594.92 && salary <= 5189.82) {
    inss = salary * 0.11;
} else {
    inss = 570.88;
}

const baseIR = salary - inss;

if (baseIR >= 1903.98 && baseIR <= 2826.65) {
    ir = (baseIR * 0.075) - 142.80;
} else if (baseIR > 2826.65 && baseIR <= 3751.05) {
    ir = (baseIR * 0.15) - 354.80;
} else if (baseIR > 3751.05 && baseIR <= 4664.68) {
    ir = (baseIR * 0.225) - 636.13;
}  else if (baseIR > 4664.68) {
    ir = (baseIR * 0.275) - 869.36;
} else {
    ir = 0;
}

resultSalary = baseIR - ir;

console.log(
    'Exercício 11: ',
    `INSS recolhido: ${inss},`,
    `IR recolhido: ${ir},`,
    `Salário líquido: R$ ${resultSalary}.`
);
