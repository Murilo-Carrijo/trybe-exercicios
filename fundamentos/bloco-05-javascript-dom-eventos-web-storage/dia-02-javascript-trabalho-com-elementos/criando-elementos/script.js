//9 - Crie um irmão para elementoOndeVoceEsta.
const pai = document.getElementById('pai');
const quintoFilho = document.createElement('section');
quintoFilho.id = 'quintoFilho';
quintoFilho.innerHTML = 'Quinto Filho';
pai.appendChild(quintoFilho)
//10 - Crie um filho para elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const terceiroFilhoDoFilho = document.createElement('section');
terceiroFilhoDoFilho.id = 'terceiroFilhoDoFilho';
terceiroFilhoDoFilho.innerHTML = 'terceiroFilhoDoFilho';
elementoOndeVoceEsta.appendChild(terceiroFilhoDoFilho);
console.log(elementoOndeVoceEsta);

//11 - Crie um filho para primeiroFilhoDoFilho.
//12 - A partir desse filho criado, acesse terceiroFilho.