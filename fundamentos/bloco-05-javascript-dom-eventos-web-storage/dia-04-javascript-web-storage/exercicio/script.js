window.onload = function () {
  changeBackgroundColor();   
};

function changeBackgroundColor() {
  const selectBgColor = document.getElementById('bg-color');
  selectBgColor.addEventListener('change', function() {
    const body = document.getElementsByTagName('body')[0];
    const bgColor =  selectBgColor.value;
    body.style.backgroundColor = bgColor;
  });
}