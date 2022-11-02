function preventDefault() {
  const buttonSend = document.getElementById('button-send');
  buttonSend.addEventListener('click', (event) => {
    event.preventDefault();
  });
}

function clearAll() {
  const allInputs = document.querySelectorAll('input');
  const textarea = document.querySelector('textarea');
  const clearButton = document.getElementById('button-clear');

  clearButton.addEventListener('click', (event) => {
    for (let i = 0; i < allInputs.length; i += 1) {
      const input = allInputs[i];
      input.value = '';
      input.checked = false;
    }
    textarea.value = '';
  });
}

window.onload = () => {
  preventDefault();
  clearAll();
};