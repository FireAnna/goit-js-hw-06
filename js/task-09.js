function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randColor = getRandomHexColor();
  document.body.style.backgroundColor = randColor;
  span.textContent = randColor;
});

