// Para fixar
// Vamos praticar um pouco, criando uma tela de login? 🔥
function title() {
  const body = document.getElementsByTagName('body')[0];
  const header = document.createElement('header');
  header.id = 'header-container';
  header.className = 'header-container';
  header.style.backgroundColor = 'green';
  header.style.textAlign = 'center';
  body.appendChild(header);
  const title = document.createElement('h1');
  title.id = 'title';
  title.className = 'title-text';
  title.innerText = 'Login';
  title.style.color = 'white';
  header.appendChild(title);
}

// 1 - Adicione os campos de entrada para email e senha.


// 2 - Adicione um checkbox com o texto Lembre-me.

// 3 - Adicione um botão com o texto Entrar; crie o botão através da tag <input>.

// 4 - Adicione os placeholder Digite seu email e Digite sua senha para os campos de email e senha.

// 5 - Adicione o atributo required para os campos de email e senha.

// Adicione o atributo autocomplete="off" para o campo de email.

// Adicione o atributo autofocus para o campo de email.

window.onload = () => {
  title();
}