window.onload = function () {
  changeBackgroundColor();
  changeTextColor();
  changeFontSize();
  changeFontFamily();
  getLSInfo();
};

function changeBackgroundColor() {
  const selectBgColor = document.getElementById('bg-color');
  selectBgColor.addEventListener('change', function() {
    const body = document.getElementsByTagName('body')[0];
    const bgColor =  selectBgColor.value;
    body.style.backgroundColor = bgColor;
    localStorage.setItem('bgColor', bgColor);
  });
}

function changeTextColor() {
  const selectTextColor = document.getElementById('text-color');
  selectTextColor.addEventListener('change', function() {
    const text = document.getElementById('paragraph');
    const txColor =  selectTextColor.value;
    text.style.color = txColor;
    localStorage.setItem('txColor', txColor);
  });
}

function changeFontSize() {
  const selectFontSize = document.getElementById('font-size-text');
  selectFontSize.addEventListener('change', function() {
    const text = document.getElementById('paragraph');
    const fz = selectFontSize.value;
    text.style.fontSize = `${fz}px`;
    localStorage.setItem('fz', `${fz}px`);
    selectFontSize.value = '';
  });
}

function changeFontFamily() {
  const selectTextFamily = document.getElementById('font-family-text');
  console.log(selectTextFamily);
  selectTextFamily.addEventListener('change', function() {
    document.body.style.fontFamily  =  selectTextFamily.value;
    localStorage.setItem('ff', selectTextFamily.value);
  });
}

function getLSInfo() {
  const bgColor = localStorage.getItem('bgColor');
  const txColor = localStorage.getItem('txColor');
  const fz = localStorage.getItem('fz');
  const ff = localStorage.getItem('ff');
  const body = document.getElementsByTagName('body')[0];
  const text = document.getElementById('paragraph');
  body.style.backgroundColor = bgColor;
  text.style.color  = txColor;
  text.style.fontSize = fz;
  body.style.fontFamily = ff;
}
