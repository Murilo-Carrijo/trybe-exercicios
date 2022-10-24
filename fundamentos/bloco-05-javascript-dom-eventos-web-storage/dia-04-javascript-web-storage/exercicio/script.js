window.onload = function () {
  changeBackgroundColor();
  changeTextColor();
  changeFontSize();
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

function changeFontSize() {
  const selectFontSize = document.getElementById('font-size-text');
  console.log(selectFontSize);
  selectFontSize.addEventListener('change', function() {
    const text = document.getElementById('paragraph');
    const fz = selectFontSize.value;
    text.style.fontSize = `${fz}px`;
  });
}