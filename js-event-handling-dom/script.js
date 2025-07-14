const colorPicker = document.getElementById('colorPicker');
const addColorBtn = document.getElementById('addColorBtn');
const palette = document.getElementById('palette');
const hexDisplay = document.getElementById('hex-display');

addColorBtn.addEventListener('click', function () {
  const selectedColor = colorPicker.value;
  if (!selectedColor) return;

  const box = document.createElement('div');
  box.className = 'color-box';
  box.style.backgroundColor = selectedColor;
  box.setAttribute('data-hex', selectedColor);
  palette.appendChild(box);
});

palette.addEventListener('mouseover', function (event) {
  if (event.target.classList.contains('color-box')) {
    const hex = event.target.getAttribute('data-hex');
    hexDisplay.textContent = `HEX: ${hex}`;
  }
});

palette.addEventListener('mouseout', function () {
  hexDisplay.textContent = '';
});

palette.addEventListener('click', function (event) {
  if (event.target.classList.contains('color-box')) {
    palette.removeChild(event.target);
  }
});
