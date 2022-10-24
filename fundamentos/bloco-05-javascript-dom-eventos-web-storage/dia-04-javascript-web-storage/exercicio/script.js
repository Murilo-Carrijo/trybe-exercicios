window.onload = function () {
  changeBackgroundColor();
  changeTextColor();
};

function changeBackgroundColor() {
  const selectBgColor = document.getElementById('bg-color');
  selectBgColor.addEventListener('change', function() {
    const body = document.getElementsByTagName('body')[0];
    const bgColor =  selectBgColor.value;
    body.style.backgroundColor = bgColor;
  });
}

function changeTextColor() {
  const selectTextColor = document.getElementById('text-color');
  selectTextColor.addEventListener('change', function() {
    const text = document.getElementById('paragraph');
    const bgColor =  selectTextColor.value;
    text.style.color = bgColor;
  });
}