const inputValidationEl = document.querySelector('#validation-input');

const validationOnLength = () => {
    return inputValidationEl.value.length === Number(inputValidationEl.dataset.length)
        ? inputValidationEl.classList.add('valid')
        : inputValidationEl.classList.replace('valid','invalid')
};

inputValidationEl.addEventListener('blur', validationOnLength)