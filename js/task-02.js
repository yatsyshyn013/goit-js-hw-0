const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const addIngredientsOption = option => {
  return option.map(option => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.textContent = option;
    ingredientsEl.classList.add('item');

    return ingredientsEl;
    
  })
}

const elements = addIngredientsOption(ingredients);
// console.log(elements);

const ingredientsContainer = document.querySelector('#ingredients');
ingredientsContainer.append(...elements);

// console.log(ingredientsContainer);
