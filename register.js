const registerForm = document.querySelector('#registerForm');
const registerName = document.querySelector('#registerName');
const registerEmail = document.querySelector('#registerEmail');
const registerPassword = document.querySelector('#registerPassword');
const registerRePassword = document.querySelector('#registerRePassword');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


registerForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log(registerName.value);
    if (emailRegex.test(registerEmail.value)) {
        console.log(registerEmail.value);
    }else{
        alert('email is invalid')
    }
    // console.log(registerEmail.value);
    console.log(registerPassword.value);
    console.log(registerRePassword.value);
})