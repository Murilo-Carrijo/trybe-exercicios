const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";
paragraph.style.backgroundColor = "#16161a";
paragraph.style.width = "80%";
paragraph.style.margin = "auto";
paragraph.style.textAlign = "center";

//"Recupere o elemento que contém o título da página e faça algo com ele, por exemplo alterá-lo para o nome do seu filme favorito."
const title = document.getElementById("page-title");
title.innerHTML = "O Poderoso Chefão";
title.style.backgroundColor = "#16161a";
title.style.color = "#94a1b2";
title.style.width = "80%";
title.style.margin = "auto";
title.style.textAlign = "center"
//"Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo."
const secondParagraph = document.getElementById("second-paragraph");
console.log(secondParagraph);
secondParagraph.innerText = "The Godfather (bra: O Poderoso Chefão[2]; prt: O Padrinho[4]) é um filme norte-americano de 1972, dirigido por Francis Ford Coppola, baseado no livro homônimo escrito por Mario Puzo. É estrelado por Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte e Diane Keaton. O enredo se baseia na história da família mafiosa Corleone, de 1945 até 1955. Teve duas sequências: The Godfather: Part II, em 1974; e The Godfather: Part III em 1990."
secondParagraph.style.backgroundColor = "#16161a";
secondParagraph.style.color = "#94a1b2";
secondParagraph.style.width = "80%";
secondParagraph.style.margin = "auto";
secondParagraph.style.textAlign = "center";
//"Por fim, recupere o subtítulo e altere-o também."
const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = "The GodFather";
subtitle.style.backgroundColor = "#16161a";
subtitle.style.color = "#94a1b2";
subtitle.style.width = "80%";
subtitle.style.margin = "auto";
subtitle.style.textAlign = "center";