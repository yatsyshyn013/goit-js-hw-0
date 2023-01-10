function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
const colorSpanEl = document.querySelector('.color');

const changeBodyColor = (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorSpanEl.textContent = document.body.style.backgroundColor;
  // colorSpanEl.innerHTML = `${document.body.style.backgroundColor}`;

  // let hexColor = getRandomHexColor();
  // document.body.style.backgroundColor = hexColor;
  // colorSpanEl.textContent = hexColor;


 
};

buttonChangeColor.addEventListener('click', changeBodyColor);
