function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//Parte 1
// Crie um calendário dinamicamente.

// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

// A tag <ul> deve conter o id 'days'
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function daysGeneration() {
  const ulDays = document.querySelector('#days');
  
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const liDay = document.createElement('li');
    liDay.innerHTML = decemberDaysList[index];

    if (decemberDaysList[index] === 24 || decemberDaysList[index] === 31) {
      liDay.className = 'day holiday';
    } else if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18) {
      liDay.className = 'day friday';
    } else if (decemberDaysList[index] === 25) {
      liDay.className = 'day holiday friday';
    } else {
      liDay.className = 'day';
    }
    ulDays.appendChild(liDay);
  }
}

daysGeneration();

// Parte 2

// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function createButton(name, id) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');
  newButton.id = id;
  newButton.innerHTML = name;
  buttonsContainer.appendChild(newButton);
}

createButton('Feriado', 'btn-holiday');

// Parte 3

// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".

// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.
const holidayButton = document.getElementById('btn-holiday');

function selectHolidays() {
  const allHolidays = document.querySelectorAll('.holiday');
  for (let index = 0; index < allHolidays.length; index += 1) {
    const currentColor = allHolidays[index].style.backgroundColor;
    if (currentColor === 'green') {
      allHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
      allHolidays[index].style.color = '#777';
    } else {
      allHolidays[index].style.backgroundColor = 'green';
      allHolidays[index].style.color = 'rgb(255, 255, 255)';
    }
  }
}

holidayButton.addEventListener('click', selectHolidays);

// Parte 4

// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

'A função createButton foi refatorada para receber os paramentos nome e id para ser reaproveitada nesse exercício.'

createButton('Sexta-feira', 'btn-friday');
