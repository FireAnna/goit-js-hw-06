// old

// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];


// const liArr = [];
// for (const ingridient of ingredients) {
//   const el = document.createElement('li');
//   el.textContent = ingridient;
//   el.classList.add('item');
//   liArr.push(el);
// }
// const ingredientsEl = document.querySelector('#ingredients');
// ingredientsEl.append(...liArr);


// new
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingridient => {
  const el = document.createElement('li');
  el.textContent = ingridient;
  el.classList.add('item');
  return el;
})
console.log(elements);
ingredientsEl.append(...elements);