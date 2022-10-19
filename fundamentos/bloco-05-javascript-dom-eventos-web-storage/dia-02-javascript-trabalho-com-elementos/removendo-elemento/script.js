//13 - Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
const pai = document.getElementById('pai');
const todosOsFilho = pai.childNodes;

for (let index = todosOsFilho.length -1; index > 0; index -= 1) {
    const filhoAtual = todosOsFilho[index];
    if (filhoAtual.id !== 'elementoOndeVoceEsta') {
        filhoAtual.remove();
    }
}
const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove(); 