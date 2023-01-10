const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');



const changeOutput = (event) => {
    return event.currentTarget.value
        ? outputEl.textContent = event.currentTarget.value
        : outputEl.textContent = "Anonymous";   
}



inputEl.addEventListener('input', changeOutput);