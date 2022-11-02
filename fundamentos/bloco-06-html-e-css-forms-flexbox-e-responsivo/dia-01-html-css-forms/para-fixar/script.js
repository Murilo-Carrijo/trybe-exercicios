// Para fixar:
// Crie um arquivo HTML index.html.
// Crie um arquivo Javascript script.js.
// Em seu arquivo HTML:
// Adicione o <script src="script.js"></script> no final do body do HTML.
// Copie os três elementos abaixo (a, input type="text", checkbox) em sua página
// Em seu arquivo Javascript.
// Adicione os seletores abaixo no começo do arquivo.


const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


// 1 - Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método .preventDefault() para prevenir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.
function testPreventDefault(event) {
  event.preventDefault();
}

HREF_LINK.addEventListener('click', testPreventDefault);