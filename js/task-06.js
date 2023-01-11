const inputValidationEl = document.querySelector('#validation-input');

const validationOnLength = () => {


    if (inputValidationEl.value.length !== Number(inputValidationEl.dataset.length)) {
        inputValidationEl.classList.add('invalid')
    } else {
        inputValidationEl.classList.remove('invalid')
        inputValidationEl.classList.add('valid')
    }
    // return inputValidationEl.value.length === Number(inputValidationEl.dataset.length)
    //     ? inputValidationEl.classList.add('valid')
    //     : inputValidationEl.classList.remove('valid')
};



inputValidationEl.addEventListener('blur', validationOnLength)