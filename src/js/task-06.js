const input = document.querySelector('#validation-input');
input.addEventListener('blur', event => {
  if (Number(input.dataset.length) === event.currentTarget.value.length) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
