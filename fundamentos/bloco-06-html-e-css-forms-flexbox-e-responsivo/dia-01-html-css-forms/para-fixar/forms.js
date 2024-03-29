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

function checkBoxRemember() {
  const form = document.getElementById('form-container');
  const labelCheckbox = document.createElement('label');
  labelCheckbox.innerText = 'Lembre-me';
  form.appendChild(labelCheckbox);
  const inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';
  inputCheckbox.className = 'input-checkbox';
  labelCheckbox.appendChild(inputCheckbox);
}

// 3 - Adicione um botão com o texto Entrar; crie o botão através da tag <input>.

function createButon() {
  const form = document.getElementById('form-container');
  const inputButton = document.createElement('input');
  inputButton.type = 'button';
  inputButton.value = 'Entrar';
  form.appendChild(inputButton);
}

// 4 - Adicione os placeholder Digite seu email e Digite sua senha para os campos de email e senha.
function addPlaceholder() {
  const inputEmail = document.querySelector('.input-email');
  const inputPassword = document.querySelector('.input-password');
  inputEmail.placeholder = 'Digite seu email';
  inputPassword.placeholder = 'Digite seu password';
}

// 5 - Adicione o atributo required para os campos de email e senha.

function addRequired() {
  const inputEmail = document.querySelector('.input-email');
  const inputPassword = document.querySelector('.input-password');
  inputEmail.required = true;
  inputPassword.required = true;
}

// 6 - Adicione o atributo autocomplete="off" para o campo de email.

function addAutocompleteOff() {
  const inputEmail = document.querySelector('.input-email');
  inputEmail.autocomplete = 'off';
}


// 7 - Adicione o atributo autofocus para o campo de email.

function addAutofocus() {
  const inputEmail = document.querySelector('.input-email');
  inputEmail.autofocus = true;
}

window.onload = () => {
  title();
  inputForms();
  checkBoxRemember();
  createButon();
  addPlaceholder();
  addRequired();
  addAutocompleteOff();
  addAutofocus();
}