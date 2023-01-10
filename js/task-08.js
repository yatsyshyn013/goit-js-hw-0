const loginForm = document.querySelector('.login-form');



const loginFormSubmit = (event) => {
    event.preventDefault();
  
    const { elements: { email, password } } = event.currentTarget;
    // console.log(email.value, password.value);

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    }
    const fieldValues = {
        Email: email.value, 
        Password: password.value,
};
    console.log(fieldValues);
    event.currentTarget.reset();
}

loginForm.addEventListener('submit', loginFormSubmit)


// `Email: ${email.value}, Password: ${password.value}`