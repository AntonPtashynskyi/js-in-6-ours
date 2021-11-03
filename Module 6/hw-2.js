// Exercise #2

const injectAfterBegin = (injectTo, nodeToInject) => {
  injectTo.insertAdjacentElement('afterbegin', nodeToInject);
};

const createListEl = (item) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = item;

  return itemEl;
};

ingredients.forEach((item) => {
  const itemEl = createListEl(item);
  injectAfterBegin(ingredientsListEl, itemEl);
});

// ingredients
//   .map(createListEl)
//   .forEach((itemEl) => injectAfterBegin(ingredientsListEl, itemEl));

// ingredients.forEach((item) => {
//   const itemEl = createListEl(item);
//   ingredientsListEl.insertAdjacentElement('afterbegin', itemEl);
// })
