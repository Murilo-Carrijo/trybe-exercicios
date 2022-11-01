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

function inputForms() {
  const body = document.getElementsByTagName('body')[0];
  const forms = document.createElement('form');
  forms.id = 'form-container';
  forms.className = 'form-container';
  forms.style.border = '1px solid black';
  forms.style.width = '80%';
  forms.style.margin = 'auto';
  body.appendChild(forms);

  const labelEmail = document.createElement('label');
  labelEmail.innerText = 'email';
  forms.appendChild(labelEmail);
  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.className = 'input-email'
  labelEmail.appendChild(inputEmail);

  const labelPassword = document.createElement('label');
  labelPassword.innerText = 'password';
  forms.appendChild(labelPassword);
  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.className = 'input-password';
  labelPassword.appendChild(inputPassword);
}


// 2 - Adicione um checkbox com o texto Lembre-me.

// 3 - Adicione um botão com o texto Entrar; crie o botão através da tag <input>.

// 4 - Adicione os placeholder Digite seu email e Digite sua senha para os campos de email e senha.

// 5 - Adicione o atributo required para os campos de email e senha.

// Adicione o atributo autocomplete="off" para o campo de email.

// Adicione o atributo autofocus para o campo de email.

window.onload = () => {
  title();
  inputForms();
}