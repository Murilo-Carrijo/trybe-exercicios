const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');



// - Copie esse arquivo e edite apenas ele;
// 1 - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
'A classe thech possui um efeito que altera a posição no eixo Y do elemento que a carrega'

// 2 - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function changeTech(event) {
  const element = document.querySelector('.tech');
  element.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click', changeTech);
secondLi.addEventListener('click', changeTech);
thirdLi.addEventListener('click', changeTech);


// 3 - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function changeText(event) {
  const element = document.querySelector('.tech');
  element.innerText = event.target.value;
}

input.addEventListener('input', changeText);

// 4 - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu Linkedin?
function redirectLinkedin() {
  window.location.replace('https://www.linkedin.com/in/murilo-carrijo/');
}

myWebpage.addEventListener('dblclick', redirectLinkedin);

// 5 - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function changeColor(event) {
  event.target.style.color = '#2fc18c';
}

function removeColor(event) {
  event.target.style.color = '#fffffe';
}

myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseleave', removeColor);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.