let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let updCounter = document.querySelector('#value');

decrementBtn.addEventListener('click', () => (updCounter.textContent = --counterValue));
incrementBtn.addEventListener('click', () => (updCounter.textContent = ++counterValue));
