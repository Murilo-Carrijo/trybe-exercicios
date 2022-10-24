window.onload = function () {
  changeBackgroundColor();
  changeTextColor();
  changeFontSize();
  changeFontFamily();
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
    const txColor =  selectTextColor.value;
    text.style.color = txColor;
  });
}

function changeFontSize() {
  const selectFontSize = document.getElementById('font-size-text');
  selectFontSize.addEventListener('change', function() {
    const text = document.getElementById('paragraph');
    const fz = selectFontSize.value;
    text.style.fontSize = `${fz}px`;
    selectFontSize.value = '';
  });
}

function changeFontFamily() {
  const selectTextFamily = document.getElementById('font-family-text');
  console.log(selectTextFamily);
  selectTextFamily.addEventListener('change', function() {
    document.body.style.fontFamily  =  selectTextFamily.value;
  });
}
