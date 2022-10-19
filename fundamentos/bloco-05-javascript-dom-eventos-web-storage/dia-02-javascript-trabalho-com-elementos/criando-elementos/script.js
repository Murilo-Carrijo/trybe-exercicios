//9 - Crie um irmão para elementoOndeVoceEsta.
const pai = document.getElementById('pai');
const quintoFilho = document.createElement('section');
quintoFilho.id = 'quintoFilho';
quintoFilho.innerHTML = 'Quinto Filho';
pai.appendChild(quintoFilho)
console.log(quintoFilho);
//10 - Crie um filho para elementoOndeVoceEsta.
//11 - Crie um filho para primeiroFilhoDoFilho.
//12 - A partir desse filho criado, acesse terceiroFilho.