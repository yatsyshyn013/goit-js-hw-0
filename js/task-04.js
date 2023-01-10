// const counterValue = document.querySelector('#value');
// const decrementBtn = document.querySelector('button[data-action="decrement"]')
// const incrementBtn = document.querySelector('button[data-action="increment"]')

const button = {
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector('#value')
}


let counterValue = 0;

const increment = () => {
    counterValue += 1;
    button.value.textContent = counterValue;
}

const decrement = () => {
    counterValue -= 1;
    button.value.textContent = counterValue;
}


button.incrementBtn.addEventListener('click', increment);

button.decrementBtn.addEventListener('click', decrement);


