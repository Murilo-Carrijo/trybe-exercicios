function preventDefault() {
  const buttonSend = document.getElementById('button-send');
  buttonSend.addEventListener('click', (event) => {
    event.preventDefault();
  });
}

window.onload = () => {
  preventDefault();
};