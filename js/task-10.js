function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const refs = {
  boxes: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  createBtn : document.querySelector('#controls button[data-create]'),
  destroyBtn : document.querySelector('#controls button[data-destroy]'),
}


let amount;


const onNumberBox = () => {
    amount = Number(refs.input.value);
    return amount;
  }

let size = 30;
const box = [];


const createBoxes = (amount) => {

  for (let i = 0; i < amount; i++) {
    refs.boxes.insertAdjacentHTML(
      "beforeend",
      `<div class="color" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    );
    size = size + 10;
    
  }

  refs.boxes.append(...box);
  
};




const destroyBoxes = (amount) => {
  refs.boxes.innerHTML = '';
};

refs.input.addEventListener('input', onNumberBox);
refs.createBtn.addEventListener('click', () => createBoxes(amount));
refs.destroyBtn.addEventListener('click', destroyBoxes);



