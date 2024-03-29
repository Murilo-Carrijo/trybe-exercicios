// O objetivo desses exercícios é colocar em prática o seu conhecimento sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.

// Comece criando algumas coisas:

// 1 - Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
const body = document.getElementsByTagName('body');
const title = document.createElement('h1');
title.id = 'title';
title.innerHTML = 'Exercício - JavaScript DOM';
body[0].appendChild(title);
console.log(body);
// 2 - Adicione a tag main com a classe main-content como filho da tag body;
const mainContent = document.createElement('main');
mainContent.className = 'main-content';
body[0].appendChild(mainContent);
// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const centerContent = document.createElement('section');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);
// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const p1 = document.createElement('p');
p1.innerHTML = 'Buscando elementos';
centerContent.appendChild(p1);
// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const leftContent = document.createElement('section');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);
// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const rightContent = document.createElement('section');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);
// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const image = document.createElement('img');
image.className = 'small-image';
image.src = "https://picsum.photos/200";
leftContent.appendChild(image);
// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const ul = document.createElement('ul');
rightContent.appendChild(ul);
const arrayNum = ['Um', 'Doi', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let index = 0; index < arrayNum.length; index += 1) {
    const newLi = document.createElement('li');
    newLi.innerHTML = arrayNum[index];
    ul.appendChild(newLi);    
}
// 9 - Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let index = 0; index < 3; index += 1) {
    const h3 = document.createElement('h3');
    h3.innerHTML = 'h3' + index;
    // exercício 11
    h3.className = 'description';
    mainContent.appendChild(h3);
}
// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// 10 - Adicione a classe title na tag h1 criada;
title.className = 'title';
// 11 - Adicione a classe description nas 3 tags h3 criadas;
// 12 - Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
const elementList = mainContent.childNodes;
for (let index = 0; index < elementList.length; index += 1) {
    const element = elementList[index];
    if (element.className === 'left-content') {
        element.remove();
    }
}
// 13 - Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
rightContent.style.margin = 'auto';
// 14 - Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
centerContent.style.backgroundColor = 'green';
// 15 - Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
const listUl = ul.childNodes;
const lastElement = listUl.length - 1;
const penultimateElement = listUl.length - 2;

listUl[lastElement].remove();
listUl[penultimateElement].remove();
