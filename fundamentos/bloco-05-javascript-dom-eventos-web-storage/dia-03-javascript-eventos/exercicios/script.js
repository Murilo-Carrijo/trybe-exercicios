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

// Parte 5

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

const fridayButton = document.getElementById('btn-friday');

function selectFridays(allFridays) {
  const fridays = document.querySelectorAll('.friday');
  
  fridayButton.addEventListener('click', function () {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML === 'SEXTOU!!!!') {
        fridays[index].innerHTML = allFridays[index];
      } else {
        fridays[index].innerHTML = 'SEXTOU!!!!';
      }    
    }
  })
}

const allFridays = [ 4, 11, 18, 25 ];
selectFridays(allFridays);

// Parte 6

// Implemente duas funções que criem um efeito de “zoom”.
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// Dica - Propriedade: event.target.

function highlightDay() {
  const days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '24px';
    event.target.style.fontWeight = '600';
  });
}

function removeHighlightDay() {
  const days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

highlightDay();
removeHighlightDay();

// Parte 7

// Implemente uma função que adicione uma tarefa personalizada ao calendário.
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function newTaskElement(task) {
  const myTask = document.querySelector('.my-tasks');
  const newTask = document.createElement('span');

  newTask.innerHTML = task;
  myTask.appendChild(newTask);
}

newTaskElement('cozinhar');

// Parte 8

// Implemente uma função que adicione uma legenda com cor para a tarefa.
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"

function setTaskColor(color) {
  const myTask = document.querySelector('.my-tasks');
  const newColorTask = document.createElement('div');

  newColorTask.className = 'task';
  newColorTask.style.backgroundColor = color;

  myTask.appendChild(newColorTask);
}

setTaskColor('green');

// Parte 9

// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

function selectTask() {
  const selectedTask = document.getElementsByClassName('task selected');
  const taks = document.querySelector('.task');
  taks.addEventListener('click', function(event) {
    console.log(selectedTask.length);
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'taks';
    }
  });
}

selectTask();

// Parte 10

// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)

function assingTask() {
  const selectedTask = document.getElementsByClassName('task selected');
  const ulDays = document.querySelector('#days');
  const taks = document.querySelector('.task');
  const taskColor = taks.style.backgroundColor;

  ulDays.addEventListener('click', function(event) {
    const dayColor = event.target.style.color;

    if (selectedTask.length > 0 && taskColor !== dayColor) {
      const color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

assingTask();

// Bônus

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”.
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”.
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.
// Dica - Propriedade: key.

function addNewTask() {
  const input = document.getElementById('task-input');
  const addInput = document.querySelector('#btn-add');
  const taskList = document.querySelector('.task-list');

  addInput.addEventListener('click', function() {
    if (input.value.length > 0) {
      const liTask = document.createElement('li');
      liTask.innerText = input.value;

      taskList.appendChild(liTask);
      input.value = '';
    } else {
      alert('Error: A tarefa deve ter ao menos 1 caracter.');
    }
  });

  input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && input.value.length > 0) {
      const liTask = document.createElement('li');
      liTask.innerText = input.value;

      taskList.appendChild(liTask);
      input.value = '';
    }
  });
}

addNewTask();